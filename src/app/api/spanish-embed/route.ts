import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

/* eslint-disable @typescript-eslint/no-require-imports */
export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const title = searchParams.get("title");

  if (!title) {
    return NextResponse.json({ url: null }, { status: 400 });
  }

  try {
    const cuevana3 = require("cuevana3");

    const results = await cuevana3.getSearch(title, 1);

    if (!results || results.length === 0) {
      return NextResponse.json({ url: null });
    }

    const match = results[0];
    const links = await cuevana3.getLinks(match.id);

    if (!links || links.length === 0) {
      return NextResponse.json({ url: null });
    }

    const linkData = links[0];
    const url =
      linkData.latino?.[0]?.url ?? linkData.espanol?.[0]?.url ?? null;

    return NextResponse.json({ url });
  } catch (err) {
    console.error("[spanish-embed]", err);
    return NextResponse.json({ url: null }, { status: 500 });
  }
}
