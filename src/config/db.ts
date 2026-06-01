import mongoose from "mongoose";
import { Resolver } from "dns/promises";

let connectionPromise: Promise<boolean> | null = null;

// mongodb+srv:// requires an SRV DNS lookup that breaks inside Next.js/Turbopack
// worker threads (global dns.setServers doesn't apply there). Instead we resolve
// SRV + TXT records ourselves using an instance-based Resolver with explicit
// DNS servers, then connect with a plain mongodb:// URI.
async function resolveSrvUri(srvUri: string): Promise<string> {
  const url = new URL(srvUri);
  const resolver = new Resolver();
  resolver.setServers(["8.8.8.8", "1.1.1.1"]);

  const [srvRecords, txtRecords] = await Promise.all([
    resolver.resolveSrv(`_mongodb._tcp.${url.hostname}`),
    resolver.resolveTxt(url.hostname).catch(() => [] as string[][]),
  ]);

  const hosts = srvRecords.map((r) => `${r.name}:${r.port}`).join(",");

  // TXT records carry default options like authSource and replicaSet
  const params = new URLSearchParams(txtRecords.flat().join("&"));
  url.searchParams.forEach((v, k) => params.set(k, v));
  params.set("tls", "true");

  const auth = `${encodeURIComponent(url.username)}:${encodeURIComponent(url.password)}`;
  return `mongodb://${auth}@${hosts}/${url.pathname.slice(1)}?${params}`;
}

const connectDB = async (): Promise<boolean> => {
  if (mongoose.connections[0].readyState === 1) {
    return true;
  }

  if (!connectionPromise) {
    const raw = process.env.MONGODB_URI!;
    const uriPromise = raw.startsWith("mongodb+srv://")
      ? resolveSrvUri(raw)
      : Promise.resolve(raw);

    connectionPromise = uriPromise
      .then((uri) => mongoose.connect(uri))
      .then(() => {
        console.log("Mongodb connected");
        return true as const;
      })
      .catch((error) => {
        console.error(error);
        return false as const;
      })
      .finally(() => {
        connectionPromise = null;
      });
  }

  return connectionPromise;
};

export default connectDB;
