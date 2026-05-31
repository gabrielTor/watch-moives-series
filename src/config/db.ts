import mongoose from "mongoose";
import { setServers, setDefaultResultOrder } from "dns";

setDefaultResultOrder("ipv4first");
setServers(["8.8.8.8", "1.1.1.1"]);

let connectionPromise: Promise<boolean> | null = null;

const connectDB = async (): Promise<boolean> => {
  if (mongoose.connections[0].readyState === 1) {
    return true;
  }

  if (!connectionPromise) {
    connectionPromise = mongoose
      .connect(process.env.MONGODB_URI!)
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
