import { NextResponse } from "next/server";
import { safeFetchWorldCupMatches } from "@/lib/football-api";
import { getErrorMessage } from "@/lib/errors";

export async function GET() {
  const result = await safeFetchWorldCupMatches();

  if (!result.ok) {
    return NextResponse.json(
      {
        ok: false,
        code: result.code,
        message: getErrorMessage(result.code),
        status: result.status,
      },
      { status: result.status ?? 500 }
    );
  }

  return NextResponse.json(result);
}
