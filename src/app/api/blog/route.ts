import { sql } from "@vercel/postgres";
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { title, content, author } = await request.json();

    if (!title || !content || !author) {
      throw new Error('Title, content, and author are required');
    }

    await sql`INSERT INTO BlogPosts (title, content, author) VALUES (${title}, ${content}, ${author})`;

    console.log("Blog post added successfully");

    return NextResponse.json({ message: 'Blog post added successfully' }, { status: 201 });
  } catch (error: any) {
    console.error(error);
    return NextResponse.json({ error: error.message, message: "An error occurred" }, { status: 500 });
  }
}

export async function GET(request: Request) {
  try {
    const blogPosts = await sql`SELECT * FROM BlogPosts`;

    return NextResponse.json({ blogPosts: blogPosts.rows }, { status: 200 });
  } catch (error: any) {
    console.error(error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
