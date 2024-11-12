import React from "react";
import { ReactNode } from "react";



const CoursesLayout = ({ children }: { children: ReactNode }) => {
  return (
    
    <div className="min-h-screen flex flex-col ">
      
      <header className="dark  font-bold text-5xl text-center">
      Courses
      </header>
    
      <main className="flex-1 p-0">{children}</main>
    </div>
    
  );
};

export default CoursesLayout;