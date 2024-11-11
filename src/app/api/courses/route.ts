
import { sql } from "@vercel/postgres";
import { NextResponse } from 'next/server';
 
export async function GET(request: Request) {
  try {
    const { rows } = await sql`SELECT title, author, price FROM Courses`;

    return NextResponse.json({ rows }, { status: 200 });
  } catch (error: any) {
    console.error(error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
    
  }