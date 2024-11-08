"use client";
import React, { useEffect, useState } from 'react';
import CardBox from './card';



// Define the Course type based on the structure of your course data
interface Course {
  title: string;
  price: number;
  author: string;
 
}

const CoursesPage: React.FC = () => {

  
  // State to store the fetched courses
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch all courses when the component mounts
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch('/api/courses');
        if (!response.ok) {
          throw new Error('Failed to fetch courses');
        }
        const data = await response.json();

        // Check if data.Courses.rows is an array before setting state
        if (Array.isArray(data.Courses)) {
          console.log(data);
          setCourses(data.Courses);
        } else {
          throw new Error('Invalid courses data structure');
        }

        setLoading(false);
      } catch (err: any) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      {/* <h1>Courses</h1> */}
      <div>
        {courses.length === 0 ? (
          <p>No courses available</p>
        ) : (
          <div>
            {courses.map((course, index) => (
              <div>
                <CardBox 
                  title={course.title}
                  price={course.price} 
                  author={course.author} 
                />
                <br/>
                <h1>{course.title}</h1>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CoursesPage;
