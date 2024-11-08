
import connection from '../../../lib/db';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    
    const { title, content, author, status } = await request.json();

    if (!title || !content || !author) {
      throw new Error('Title, content, and author are required');
    }

    await connection.execute(
      `INSERT INTO posts (title, content, author) VALUES (?, ?, ? )`,
      [title, content, author]
    );

    console.log("Blog post added successfully");

    return NextResponse.json({ message: 'Blog post added successfully' }, { status: 201 });
  } catch (error: any) {
    console.error(error);
    return NextResponse.json({ error: error.message, message: "An error occurred" }, { status: 500 });
  }
}

export async function GET(request: Request) {
  try {
    const [blogPosts] = await connection.execute(`SELECT * FROM posts`);

    return NextResponse.json({ blogPosts }, { status: 200 });
  } catch (error: any) {
    console.error(error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
