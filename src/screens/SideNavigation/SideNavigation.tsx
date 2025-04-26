import React from "react";
import { Badge } from "../../components/ui/badge";
import { Button } from "../../components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "../../components/ui/avatar";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../../components/ui/tabs";
import { LogOut, ChevronDown, Bell, Search, Filter, Plus } from "lucide-react";

export const SideNavigation = (): JSX.Element => {
  const navigationItems = [
    { name: "Home", isActive: true },
    { name: "Stages & Checklist" },
    { name: "Upload Docs" },
    { name: "Preferred Vendors" },
    { name: "Tech Stack" },
    { name: "Targets" },
    { name: "Zee Sales Targets" },
    { name: "MAI Settings" },
    { name: "Pending Questions", badge: "3" },
  ];

  return (
    <div className="flex h-screen">
      <nav className="flex w-[248px] h-full relative bg-[#11455d] overflow-hidden shadow-ds-3">
        <div className="flex flex-col items-start justify-between py-8 relative w-full">
          <div className="flex flex-col items-start gap-8 w-full">
            <div className="px-4">
              <Button variant="ghost" className="w-full justify-between text-white hover:bg-[#ffffff1a]">
                <div className="flex items-center gap-2">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <span>John Doe</span>
                </div>
                <ChevronDown className="h-4 w-4" />
              </Button>
            </div>
            
            <ul className="flex flex-col items-start gap-3 px-4 w-full">
              {navigationItems.map((item, index) => (
                <li
                  key={index}
                  className={`flex items-center gap-2 px-4 py-2 w-full rounded-md overflow-hidden cursor-pointer hover:bg-[#ffffff1a] transition-colors
                    ${item.isActive ? "bg-[#ffffff1a]" : ""}`}
                >
                  <span
                    className={`font-['DM_Sans'] text-base leading-5 whitespace-nowrap
                      ${
                        item.isActive
                          ? "font-medium text-[#2fbcfe]"
                          : "font-normal text-[#ffffff99]"
                      }`}
                  >
                    {item.name}
                  </span>

                  {item.badge && (
                    <Badge
                      variant="outline"
                      className="bg-gray-50 text-[#344054] font-medium text-xs rounded-full border-[#eaecf0]"
                    >
                      {item.badge}
                    </Badge>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <button className="flex items-center gap-2 px-8 py-2 w-full hover:bg-[#ffffff1a] transition-colors">
            <LogOut className="h-5 w-5 text-[#ffffff80]" />
            <span className="font-['DM_Sans'] font-normal text-[#ffffff80] text-base leading-5 whitespace-nowrap">
              Logout
            </span>
          </button>
        </div>

        <div className="absolute w-[710px] h-[710px] top-[236px] -left-8 bg-[#279dd4] rounded-[355px] blur-[161.5px] opacity-30" />
      </nav>
      
      <main className="flex-1 bg-[#F9FAFB] overflow-y-auto">
        <div className="border-b bg-white">
          <div className="flex items-center justify-between px-8 py-4">
            <div className="flex items-center gap-4">
              <h1 className="text-2xl font-semibold text-gray-900">Welcome back, John!</h1>
              <Badge variant="outline" className="bg-[#ECFDF3] text-[#027A48] border-[#6CE9A6]">
                Premium
              </Badge>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="outline" size="icon" className="relative">
                <Bell className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-white"></span>
              </Button>
              <Avatar>
                <AvatarImage src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>

        <div className="p-8">
          <div className="mb-6 flex items-center justify-between">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
              <input
                type="text"
                placeholder="Search projects"
                className="pl-10 pr-4 py-2 border rounded-lg w-[320px] focus:outline-none focus:ring-2 focus:ring-[#2fbcfe] focus:border-transparent"
              />
            </div>
            <div className="flex items-center gap-3">
              <Button variant="outline" className="gap-2">
                <Filter className="h-4 w-4" />
                Filters
              </Button>
              <Button className="gap-2 bg-[#2fbcfe] hover:bg-[#2fbcfe]/90">
                <Plus className="h-4 w-4" />
                Add new
              </Button>
            </div>
          </div>

          <Tabs defaultValue="all" className="w-full">
            <TabsList className="bg-transparent border-b w-full justify-start rounded-none h-12 p-0 gap-8">
              <TabsTrigger
                value="all"
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-[#2fbcfe] data-[state=active]:bg-transparent px-0"
              >
                All Projects
              </TabsTrigger>
              <TabsTrigger
                value="active"
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-[#2fbcfe] data-[state=active]:bg-transparent px-0"
              >
                Active
              </TabsTrigger>
              <TabsTrigger
                value="inactive"
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-[#2fbcfe] data-[state=active]:bg-transparent px-0"
              >
                Inactive
              </TabsTrigger>
            </TabsList>
            <TabsContent value="all" className="mt-6">
              <div className="grid grid-cols-3 gap-6">
                {Array.from({ length: 6 }).map((_, i) => (
                  <div key={i} className="bg-white p-6 rounded-xl border shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">Project {i + 1}</h3>
                        <p className="text-sm text-gray-500">Last updated 2h ago</p>
                      </div>
                      <Badge variant="outline" className="bg-[#F9F5FF] text-[#6941C6] border-[#D6BBFB]">
                        In Progress
                      </Badge>
                    </div>
                    <p className="text-gray-600 mb-4 line-clamp-2">
                      This is a sample project description that provides a brief overview of what this project is about and its current status.
                    </p>
                    <div className="flex items-center gap-2">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg" />
                        <AvatarFallback>JD</AvatarFallback>
                      </Avatar>
                      <div className="text-sm">
                        <p className="font-medium text-gray-900">John Doe</p>
                        <p className="text-gray-500">Project Lead</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="active">
              <div className="mt-6 text-center text-gray-500">No active projects</div>
            </TabsContent>
            <TabsContent value="inactive">
              <div className="mt-6 text-center text-gray-500">No inactive projects</div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  );
};