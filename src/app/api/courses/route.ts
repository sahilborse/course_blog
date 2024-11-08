import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';
 
export async function GET(request: Request) {
    try {
      // Fetch all blog posts from the database
      const Courses = await sql`SELECT * FROM Courses;`;
      
      // Send the blog posts as the response
      return NextResponse.json({ Courses }, { status: 200 });
    } catch (err: any) {
      // Handle any errors and send a failure response
      return NextResponse.json({ error: err.message }, { status: 500 });
    }
  }