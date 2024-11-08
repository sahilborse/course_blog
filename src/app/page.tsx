"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";


export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center  min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] relative">
       <button
        onClick={() => setIsDarkMode(!isDarkMode)}
        className="absolute top-4 right-4 p-2 bg-gray-200 dark:bg-gray-700 rounded-full"
      >
     
        <Image
          src={isDarkMode ? "./images/moon.svg" : "./images/sun.svg"}
          alt={isDarkMode ? "Moon Icon" : "Sun Icon"}
          width={24}
          height={24}
        />
      </button>
     

      <header className="text-2xl font-bold">Welcome to Course & blog</header>


      <main className="flex flex-col items-center space-y-8">
    
        <Image
          src="/images/image.png"
          alt="Example image"
          width={300}
          height={300}
          className="rounded-lg shadow-lg"
        />
        <p className="text-center text-lg max-w-md">
        Stories, Insights, and Everything In Between. 📖✨<br/>
        Empower Your Future, One Course at a Time. 🚀📚
        </p>
     
      </main>
    </div>
  );
}
