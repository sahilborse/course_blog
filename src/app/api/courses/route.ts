import connection from '../../../lib/db';
import { NextResponse } from 'next/server';
 
export async function GET(request: Request) {
  try {
    const [Courses] = await connection.execute(`SELECT title, author, price FROM Courses`);

    return NextResponse.json({ Courses }, { status: 200 });
  } catch (error: any) {
    console.error(error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
    
  }