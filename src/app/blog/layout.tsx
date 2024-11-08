import React from "react";
import { ReactNode } from "react";



const BlogLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* Header */}
      <header className="dark  font-bold text-5xl text-center">
      Blog
      </header>

      <main className="flex-1 p-8">{children}</main>

    
    
    </div>
  );
};

export default BlogLayout;