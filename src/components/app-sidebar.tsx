"use client"
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarHeader,
    SidebarGroupcourse,
    SidebarHomeGroup,
    SidebarGroupForm
} from "@/components/ui/sidebar";

import { useRouter } from 'next/navigation';

export function AppSidebar() {
    const router = useRouter();

    const handleNavigation = async (path: string) => {
        router.push(path);
    };

    return (
        <Sidebar>
            <SidebarHeader />
            <hr />
            <SidebarContent>
                <SidebarHomeGroup onClick={() => handleNavigation('/')} />
                <SidebarGroup onClick={() => handleNavigation('/blog')} />

                <SidebarGroupcourse onClick={() => handleNavigation('/courses')} />
                <SidebarGroupForm onClick={() => handleNavigation('/blog-form')} />
            </SidebarContent>
            <SidebarFooter />
        </Sidebar>
    )
}
