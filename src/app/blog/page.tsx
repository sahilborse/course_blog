"use client";
import React, { useEffect, useState } from 'react';
import CardBox from './card';
import { useGlobalContext } from '../context/GlobalContext';
import Image from "next/image";

// Blog type 
interface Blog {
  title: string;
  content: string;
  author: string;
  CreatedAt: string;
  UpdatedAt: string;
}

const BlogPage: React.FC = () => {
  const { darkMode, setDarkMode } = useGlobalContext();
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  // Fetch all blogs when the component mounts
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch('/api/blog');
        if (!response.ok) throw new Error('Failed to fetch blogs');
        
        const data = await response.json();
        if (Array.isArray(data.blogPosts)) {
          setBlogs(data.blogPosts);
        } else {
          throw new Error('Invalid blog data structure');
        }
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="items-center min-h-screen pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] relative">
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="absolute top-4 right-4 p-2 bg-gray-200 dark:bg-gray-700 rounded-full"
      >
        <Image
          src={darkMode ? "/images/moon.svg" : "/images/sun.svg"}
          alt={darkMode ? "Moon Icon" : "Sun Icon"}
          width={24}
          height={24}
        />
      </button>
      
      {blogs.length === 0 ? (
        <p>No blogs available</p>
      ) : (
        <div>
          {blogs.map((blog, i) => (
            <React.Fragment key={i}>
              <CardBox 
                title={blog.title}
                content={blog.content} 
                author={blog.author} 
              />
              <br />
            </React.Fragment>
          ))}
        </div>
      )}
    </div>
  );
};

export default BlogPage;
