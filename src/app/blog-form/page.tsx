"use client"

import React, { useEffect, useState } from 'react';
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { useGlobalContext } from '../context/GlobalContext';
import Image from "next/image";
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useToast } from "@/hooks/use-toast"

// Define schema for the form
const FormSchema = z.object({
  title: z.string().min(5, { message: "Title must be at least 5 characters." }),
  content: z.string().min(10, { message: "Content must be at least 10 characters." }),
  author: z.string().min(2, { message: "Author name must be at least 2 characters." }),
  status: z.enum(["draft", "published"], { message: "Status must be either 'draft' or 'published'." }),
})

const BlogPage = () => {
   // for dark mode activation
   const {darkMode, setDarkMode}=useGlobalContext();
   
   useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);
  
   
  const { toast } = useToast()
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      title: "",
      content: "",
      author: "",
      status: "draft",
    },
  })

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    try {
      const response = await fetch('/api/blog', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        throw new Error('Failed to submit data')
      }

      const result = await response.json()
      toast({
        title: "Success",
        description: "Blog post added successfully!",
      })

      // Reset the form
      form.reset()
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "Something went wrong",
      })
    }
  }

  return (
    <div className='items-center  min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] relative'>
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
    <Form {...form} >
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 relative">
       
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input placeholder="Enter Title" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="content"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Content</FormLabel>
              <FormControl>
                <Input placeholder="Enter Content" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
       
        <FormField
          control={form.control}
          name="author"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Author</FormLabel>
              <FormControl>
                <Input placeholder="Enter Author Name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        {/* Status Field */}
        <FormField
          control={form.control}
          name="status"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Status</FormLabel>
              <FormControl>
                <select {...field} className="w-full p-2 border border-gray-300 rounded-md">
                  <option value="draft">Draft</option>
                  <option value="published">Published</option>
                </select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit">Submit</Button>
      </form>
    </Form>
    </div>
  )
}

export default BlogPage
