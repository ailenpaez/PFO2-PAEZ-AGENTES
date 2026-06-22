import { NextResponse } from "next/server";
import { fetchMatches } from "@/lib/api";

export const revalidate = 300;

export async function GET() {
  try {
    const data = await fetchMatches();
    return NextResponse.json(data);
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Error desconocido";
    const status = message.includes("inválida") ? 401 : message.includes("Límite") ? 429 : 500;
    return NextResponse.json({ error: message }, { status });
  }
}
