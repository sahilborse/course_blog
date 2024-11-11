"use client";
import React, { useEffect, useState } from 'react';
import CardBox from './card';


interface Course {
  title: string;
  price: number;
  author: string;
 
}

const CoursesPage: React.FC = () => {

  
  
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
               
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CoursesPage;
