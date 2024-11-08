"use client";
import React, { useEffect, useState } from 'react';
import CardBox from './card';

// Define the Blog type based on the structure of your blog data
interface Blog {
  title: string;
  content: string;
  author: string;
  CreatedAt: string;
  UpdatedAt: string;
}

const CoursesPage: React.FC = () => {
  // State to store the fetched blog posts
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch all blogs when the component mounts
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch('/api/blog');
        if (!response.ok) {
          throw new Error('Failed to fetch blogs');
        }
        const data = await response.json();
        
        // Check if data.blogPosts.rows is an array before setting state
        if (Array.isArray(data.blogPosts.rows)) {
          console.log(data.blogPosts.rows);
          setBlogs(data.blogPosts.rows);
        } else {
          throw new Error('Invalid blog data structure');
        }

        setLoading(false);
      } catch (err: any) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>Courses</h1>
      <div>
        {blogs.length === 0 ? (
          <p>No blogs available</p>
        ) : (
          <div>
            {blogs.map((blog, index) => (
              <>
             
               <CardBox 
                key={index} 
                title={blog.title}
                content={blog.content} 
                author={blog.author} 
              /></>
             
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CoursesPage;
