import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';



export async function POST(request: Request) {
  try {
    // Parse JSON body
    const { title, content, author,status } = await request.json();
    
    // Validate required fields
    if (!title || !content || !author) {
      throw new Error('Title, content, and author are required');
    }

    await sql`
    INSERT INTO BlogPosts (Title, Content, Author)
    VALUES (${title}, ${content}, ${author});
  `;
  
    console.log("works");

    // Send a success response
    return NextResponse.json({ message: 'Blog post added successfully' }, { status: 201 });
  } catch (error: any) {
    console.log(error);
    return NextResponse.json({ error: error.message,messgae:"error is here at last" }, { status: 500 });
  }
}



export async function GET(request: Request) {
  try {
    // Fetch all blog posts from the database
    const blogPosts = await sql`SELECT * FROM BlogPosts;`;
    
    // Send the blog posts as the response
    return NextResponse.json({ blogPosts }, { status: 200 });
  } catch (err: any) {
    // Handle any errors and send a failure response
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}



