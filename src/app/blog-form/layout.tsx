import React from "react";
import { ReactNode } from "react";
import { currentUser } from "@clerk/nextjs/server";


const BlogLayout = async({ children }: { children: ReactNode }) => {
  const user = await currentUser();
  const user_data = user?.primaryEmailAddress ? user.primaryEmailAddress.emailAddress : null;
  const allowedEmail = "sahilborse.909098@gmail.com";
  if (user_data !== allowedEmail) {
    
    return (
      <div className="min-h-screen flex flex-col ">
        <header className="dark text-dark p-4 text-center">Unauthorized Access</header>
      </div>
    );
  }
  return (
    <div className="min-h-screen flex flex-col ">
      
      <header className="dark text-dark p-4 text-center">
      Blog Form
      </header>


      <main className="flex-1 p-8">{children}</main>

    
    
    </div>
  );
};

export default BlogLayout;