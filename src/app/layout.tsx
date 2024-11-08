
import {
  ClerkProvider,
} from '@clerk/nextjs';
import './globals.css';

import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";

import { Button } from '@/components/ui/button';


export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  

  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <SidebarProvider>
            <AppSidebar />
            <main className='w-screen'>
              <SidebarTrigger />
              
              {children}
            </main>
          </SidebarProvider>
        </body>
      </html>
    </ClerkProvider>
  )
}
