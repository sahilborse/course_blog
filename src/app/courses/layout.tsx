import React from "react";
import { ReactNode } from "react";
import {
  ClerkProvider,
} from '@clerk/nextjs';


const CoursesLayout = ({ children }: { children: ReactNode }) => {
  return (
    <ClerkProvider>
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* Header */}
      <header className="dark  font-bold text-5xl text-center">
      Courses
      </header>

      <main className="flex-1 p-8">{children}</main>
    </div>
    </ClerkProvider>
  );
};

export default CoursesLayout;