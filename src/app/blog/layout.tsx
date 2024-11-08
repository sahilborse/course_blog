import React from "react";
import { ReactNode } from "react";



const CoursesLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* Header */}
      <header className="dark text-dark p-4 text-center">
      course 
      </header>

      <main className="flex-1 p-8">{children}</main>

    
    
    </div>
  );
};

export default CoursesLayout;