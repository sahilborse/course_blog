
import { sql } from "@vercel/postgres";
import { NextResponse } from 'next/server';
 
export async function GET() {
  try {
    const { rows } = await sql`SELECT title, author, price FROM Courses`;

    return NextResponse.json({ rows }, { status: 200 });
  } catch (error: unknown) {
    console.error(error);
    const errorMessage = error instanceof Error ? error.message : 'An error occurred';
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
    
  }