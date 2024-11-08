"use client"
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarHeader,
    SidebarGroupcourse,
    SidebarHomeGroup,
    SidebarGroupLabel,
    SidebarGroupAction,
    SidebarGroupForm
  } from "@/components/ui/sidebar"
 
  import { useRouter } from 'next/navigation';
import { use } from "react";
  export function AppSidebar() {
    const router = useRouter();

      const  handleNavigation = async(path:any) => {
      router.push(path);
    };
    

    return (
      <Sidebar>
        <SidebarHeader />
        <hr/>
        <SidebarContent>
          <SidebarHomeGroup   onClick={() => handleNavigation('/')}/>
          <SidebarGroup   onClick={() => handleNavigation('/blog')}/>
           
          {/* <SidebarGroupAction
            title="Go to Project Page"
            onClick={() => handleNavigation('/projects')} 
          >
            <SidebarGroupLabel>Blog</SidebarGroupLabel>
          </SidebarGroupAction>
          </SidebarGroup> */}
         
          <SidebarGroupcourse onClick={() => handleNavigation('/courses')}/>
          <SidebarGroupForm onClick={() => handleNavigation('/blog-form')}/>
        </SidebarContent>
        <SidebarFooter />
      </Sidebar>
    )
  }
  