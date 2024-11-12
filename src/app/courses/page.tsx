"use client";
import React, { useEffect, useState } from 'react';
import CardBox from './card';
import { useGlobalContext } from '../context/GlobalContext';
import Image from "next/image";

interface Course {
  title: string;
  price: number;
  author: string;
}

const CoursesPage: React.FC = () => {
  // for dark mode activation
  const { darkMode, setDarkMode } = useGlobalContext();
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch('/api/courses');
        if (!response.ok) {
          throw new Error('Failed to fetch courses');
        }
        const data = await response.json();

        if (Array.isArray(data.rows)) {
          console.log(data);
          setCourses(data.rows);
        } else {
          throw new Error('Invalid courses data structure');
        }

        setLoading(false);
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError('An unexpected error occurred');
        }
        setLoading(false);
      }
    };

    fetchCourses();
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
          src={darkMode ? "./images/moon.svg" : "./images/sun.svg"}
          alt={darkMode ? "Moon Icon" : "Sun Icon"}
          width={24}
          height={24}
        />
      </button>

      <div>
        {courses.length === 0 ? (
          <p>No courses available</p>
        ) : (
          <div>
            {courses.map((course, index) => (
              <div key={index}> {/* Added key prop to the parent div */}
                <CardBox
                  key={course.title} // Use a unique value for key if possible (like course.title)
                  title={course.title}
                  price={course.price}
                  author={course.author}
                />
                <br />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CoursesPage;
