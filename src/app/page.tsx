"use client"

import React from "react"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { LogOut, Bell, } from "lucide-react"


export default function Home() {
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
    ]

    return (
        <div className="flex h-screen">
            {/* Sidebar Navigation */}
            <nav className="flex w-[203px] h-full relative bg-sidebar overflow-hidden shadow-ds-3">
                <div className="flex flex-col items-start justify-between py-8 relative w-full">
                    <div className="flex flex-col items-start gap-6 w-full">
                        {/* Navigation items */}
                        <ul className="flex flex-col items-start w-full">
                            {navigationItems.map((item, index) => (
                                <li
                                    key={index}
                                    className={`flex items-center justify-between px-4 py-2 w-full cursor-pointer hover:bg-sidebarHover transition-colors
                    ${item.isActive ? "bg-sidebarHover" : ""}`}
                                >
                                    <span
                                        className={`font-sans text-base leading-5 whitespace-nowrap
                      ${item.isActive ? "font-medium text-primary" : "font-normal text-[#ffffff99]"}`}
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

                    {/* Logout button */}
                    <button className="flex items-center gap-2 px-4 py-2 w-full hover:bg-sidebarHover transition-colors">
                        <LogOut className="h-5 w-5 text-[#ffffff80]" />
                        <span className="font-sans font-normal text-[#ffffff80] text-base leading-5 whitespace-nowrap">
                            Logout
                        </span>
                    </button>
                </div>

                {/* Background glow */}
                <div className="absolute w-[710px] h-[710px] top-[236px] -left-8 bg-[#279dd4] rounded-[355px] blur-[161.5px] opacity-30" />
            </nav>


            <main className="flex-1 bg-[#F9FAFB] overflow-y-auto">
                {/* Dashboard content */}
                <div className="flex flex-col h-full">
                    {/* Top bar with user welcome and settings */}
                    <div className="bg-white border-b border-gray-200">
                        <div className="flex items-center justify-end px-6 py-3">
                            <div className="flex items-center gap-3">
                                <button className="relative p-2">
                                    <Bell className="h-5 w-5 text-gray-500" />
                                    <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-white"></span>
                                </button>
                                <Avatar>
                                    <AvatarImage src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg" />
                                    <AvatarFallback>JD</AvatarFallback>
                                </Avatar>
                            </div>
                        </div>
                    </div>

                    {/* Dashboard content area */}
                    <div className="p-6 space-y-6">
                        {/* metrics cards */}
                        <div className="grid grid-cols-3 gap-6">
                            {/* Account Progress */}
                            <div className="bg-white p-6 rounded-lg border border-gray-200">
                                <h2 className="text-lg font-medium text-gray-900 mb-4">Account Progress</h2>
                                <div className="flex justify-center">
                                    <div className="relative w-36 h-36">
                                        <svg className="w-full h-full" viewBox="0 0 120 120">
                                            <circle
                                                cx="60"
                                                cy="60"
                                                r="54"
                                                fill="none"
                                                stroke="#E9F6FD"
                                                strokeWidth="12"
                                            />
                                            <circle
                                                cx="60"
                                                cy="60"
                                                r="54"
                                                fill="none"
                                                stroke="#2FBCFE"
                                                strokeWidth="12"
                                                strokeDasharray="339.3"
                                                strokeDashoffset="50.9"
                                                strokeLinecap="round"
                                                transform="rotate(-90 60 60)"
                                            />
                                        </svg>
                                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                                            <span className="text-3xl font-bold">85%</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <div className="text-gray-500 text-sm mb-2">Steps Completed</div>
                                    <div className="space-y-2">
                                        <div className="flex items-center gap-2">
                                            <div className="w-4 h-4 rounded-full border border-gray-300 bg-gray-100 flex items-center justify-center">
                                                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M11.6663 3.5L5.24967 9.91667L2.33301 7" stroke="#12B76A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </div>
                                            <span className="text-sm text-gray-600">Profile Setup</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <div className="w-4 h-4 rounded-full border border-gray-300 bg-gray-100 flex items-center justify-center">
                                                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M11.6663 3.5L5.24967 9.91667L2.33301 7" stroke="#12B76A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </div>
                                            <span className="text-sm text-gray-600">Initial Training</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <div className="w-4 h-4 rounded-full border border-gray-300 bg-gray-100 flex items-center justify-center">
                                                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M11.6663 3.5L5.24967 9.91667L2.33301 7" stroke="#12B76A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </div>
                                            <span className="text-sm text-gray-600">Legal Documents</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <div className="text-gray-500 text-sm mb-2">Steps Remaining</div>
                                    <div className="space-y-2">
                                        <div className="flex items-center gap-2">
                                            <div className="w-4 h-4 rounded-full border border-gray-300 bg-gray-100 flex items-center justify-center">
                                                <div className="w-2 h-2 rounded-full bg-gray-300"></div>
                                            </div>
                                            <span className="text-sm text-gray-600">Financial Integration</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <div className="w-4 h-4 rounded-full border border-gray-300 bg-gray-100 flex items-center justify-center">
                                                <div className="w-2 h-2 rounded-full bg-gray-300"></div>
                                            </div>
                                            <span className="text-sm text-gray-600">Final Review</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Total Franchisees Onboard */}
                            <div className="bg-white p-6 rounded-lg border border-gray-200">
                                <h2 className="text-lg font-medium text-gray-900 mb-4">Total Franchisees Onboard</h2>
                                <div className="flex items-center gap-2 mb-4">
                                    <span className="text-3xl font-bold">14</span>
                                    <Badge className="bg-[#ECFDF3] text-[#027A48] border-none px-2 py-0.5 rounded-full">
                                        <span className="flex items-center gap-1 text-xs">
                                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M6 9.5V2.5M6 2.5L2.5 6M6 2.5L9.5 6" stroke="#027A48" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                            7.4%
                                        </span>
                                    </Badge>
                                </div>
                                <div className="flex mb-6">
                                    <div className="flex -space-x-2">
                                        <Avatar className="border-2 border-white w-8 h-8">
                                            <AvatarImage src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80" />
                                            <AvatarFallback>A</AvatarFallback>
                                        </Avatar>
                                        <Avatar className="border-2 border-white w-8 h-8">
                                            <AvatarImage src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" />
                                            <AvatarFallback>B</AvatarFallback>
                                        </Avatar>
                                        <Avatar className="border-2 border-white w-8 h-8">
                                            <AvatarImage src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" />
                                            <AvatarFallback>C</AvatarFallback>
                                        </Avatar>
                                        <Avatar className="border-2 border-white w-8 h-8">
                                            <AvatarImage src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" />
                                            <AvatarFallback>D</AvatarFallback>
                                        </Avatar>
                                        <Avatar className="border-2 border-white w-8 h-8">
                                            <AvatarImage src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" />
                                            <AvatarFallback>E</AvatarFallback>
                                        </Avatar>
                                        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 border-2 border-white text-xs font-medium text-gray-600">
                                            +7
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    <div>
                                        <div className="flex items-center justify-between mb-1">
                                            <div className="flex items-center gap-2">
                                                <div className="w-3 h-3 rounded-full bg-[#2E90FA]"></div>
                                                <span className="text-sm text-gray-600">Stage 1 (Initial Inquiry)</span>
                                            </div>
                                            <span className="text-sm font-medium">02</span>
                                        </div>
                                        <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                                            <div className="h-full bg-[#2E90FA]" style={{ width: '20%' }}></div>
                                        </div>
                                    </div>

                                    <div>
                                        <div className="flex items-center justify-between mb-1">
                                            <div className="flex items-center gap-2">
                                                <div className="w-3 h-3 rounded-full bg-[#56B4FB]"></div>
                                                <span className="text-sm text-gray-600">Stage 2 (Document Submission)</span>
                                            </div>
                                            <span className="text-sm font-medium">07</span>
                                        </div>
                                        <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                                            <div className="h-full bg-[#56B4FB]" style={{ width: '50%' }}></div>
                                        </div>
                                    </div>

                                    <div>
                                        <div className="flex items-center justify-between mb-1">
                                            <div className="flex items-center gap-2">
                                                <div className="w-3 h-3 rounded-full bg-[#A8D5FD]"></div>
                                                <span className="text-sm text-gray-600">Stage 3 (Training)</span>
                                            </div>
                                            <span className="text-sm font-medium">05</span>
                                        </div>
                                        <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                                            <div className="h-full bg-[#A8D5FD]" style={{ width: '35%' }}></div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Key Insights & Feedback */}
                            <div className="bg-white p-6 rounded-lg border border-gray-200">
                                <h2 className="text-lg font-medium text-gray-900 mb-4">Key Insights & Feedback</h2>
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="text-3xl font-bold">10%</div>
                                    <div className="flex flex-col">
                                        <span className="text-sm text-gray-500">Sales Growth</span>
                                        <Badge className="bg-[#EEF4FF] text-[#3538CD] border-[#D1E0FF] mt-1 px-2 py-0.5">
                                            Top Performer
                                        </Badge>
                                    </div>
                                </div>

                                <div className="mt-8">
                                    <h3 className="font-medium text-gray-900 mb-4">Feedback</h3>
                                    <div className="bg-gray-50 p-3 rounded-lg">
                                        <div className="flex items-start gap-2">
                                            <div className="min-w-4 h-4 rounded-full bg-gray-200 mt-1"></div>
                                            <p className="text-sm text-gray-600">Franchisees are requesting more detailed training materials.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/*  Financial Wellbeing & Prospect Leads */}
                        <div className="grid grid-cols-2 gap-6">
                            {/* Financial Wellbeing */}
                            <div className="bg-white p-6 rounded-lg border border-gray-200">
                                <h2 className="text-lg font-medium text-gray-900 mb-4">Financial Wellbeing</h2>
                                <div className="flex items-start justify-between mb-8">
                                    <div>
                                        <div className="text-3xl font-bold">20</div>
                                        <div className="text-sm text-gray-500">Total Franchisees</div>
                                    </div>
                                    <Badge className="bg-[#ECFDF3] text-[#027A48] border-none px-2 py-0.5 rounded-full">
                                        <span className="flex items-center gap-1 text-xs">
                                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M6 9.5V2.5M6 2.5L2.5 6M6 2.5L9.5 6" stroke="#027A48" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                            2.1%
                                        </span>
                                    </Badge>
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div className="bg-gray-50 p-4 rounded-lg">
                                        <div className="text-sm text-gray-500 mb-2">Target</div>
                                        <div className="text-2xl font-bold">$500,000</div>
                                    </div>
                                    <div className="bg-gray-50 p-4 rounded-lg">
                                        <div className="text-sm text-gray-500 mb-2">Current</div>
                                        <div className="text-2xl font-bold">$450,000</div>
                                    </div>
                                </div>
                            </div>

                            {/* Prospect Leads */}
                            <div className="bg-white p-6 rounded-lg border border-gray-200">
                                <h2 className="text-lg font-medium text-gray-900 mb-4">Prospect Leads</h2>
                                <div className="space-y-3">
                                    <div className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors">
                                        <div className="flex items-center gap-3">
                                            <Avatar>
                                                <AvatarImage src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" />
                                                <AvatarFallback>WW</AvatarFallback>
                                            </Avatar>
                                            <span className="font-medium">Wade Warren</span>
                                        </div>
                                        <Badge variant="outline" className="bg-[#F9F5FF] text-[#6941C6] border-[#D6BBFB]">
                                            Stage: Initial Inquiry
                                        </Badge>
                                    </div>

                                    <div className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors">
                                        <div className="flex items-center gap-3">
                                            <Avatar>
                                                <AvatarImage src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" />
                                                <AvatarFallback>AW</AvatarFallback>
                                            </Avatar>
                                            <span className="font-medium">Ava Wright</span>
                                        </div>
                                        <Badge variant="outline" className="bg-[#F9F5FF] text-[#6941C6] border-[#D6BBFB]">
                                            Stage: Initial Inquiry
                                        </Badge>
                                    </div>

                                    <div className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors">
                                        <div className="flex items-center gap-3">
                                            <Avatar>
                                                <AvatarImage src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" />
                                                <AvatarFallback>CF</AvatarFallback>
                                            </Avatar>
                                            <span className="font-medium">Cody Fisher</span>
                                        </div>
                                        <Badge variant="outline" className="bg-[#F9F5FF] text-[#6941C6] border-[#D6BBFB]">
                                            Stage: Initial Inquiry
                                        </Badge>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/*  Pending Questions */}
                        <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                            <div className="flex items-center justify-between border-b border-gray-200 px-6 py-4">
                                <h2 className="text-lg font-medium text-gray-900">Pending Questions</h2>
                                <Badge className="bg-[#EEF4FF] text-[#3538CD] border-[#D1E0FF] px-2 py-0.5">
                                    02
                                </Badge>
                            </div>

                            <div className="divide-y divide-gray-200">
                                <div className="p-6">
                                    <div className="flex items-start gap-3 mb-2">
                                        <Avatar className="mt-1">
                                            <AvatarImage src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" />
                                            <AvatarFallback>PB</AvatarFallback>
                                        </Avatar>
                                        <div>
                                            <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 mb-1">
                                                <span className="font-medium">Phoenix Baker</span>
                                                <span className="text-sm text-gray-500">@phoenix</span>
                                            </div>
                                            <div className="text-sm text-gray-500">5min ago</div>
                                        </div>
                                    </div>
                                    <p className="ml-11 text-gray-700">What are the requirements for opening a new store?</p>
                                </div>

                                <div className="p-6">
                                    <div className="flex items-start gap-3 mb-2">
                                        <Avatar className="mt-1">
                                            <AvatarImage src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" />
                                            <AvatarFallback>KO</AvatarFallback>
                                        </Avatar>
                                        <div>
                                            <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 mb-1">
                                                <span className="font-medium">Koray Okumus</span>
                                                <span className="text-sm text-gray-500">@koray</span>
                                            </div>
                                            <div className="text-sm text-gray-500">4hr ago</div>
                                        </div>
                                    </div>
                                    <p className="ml-11 text-gray-700">How do I manage inventory effectively?</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* AI Chat Assistant */}
                    <div className="fixed bottom-6 right-6 flex flex-col items-end">
                        <div className="text-center mb-4">
                            <div className="inline-flex items-center justify-center bg-[#F0F9FF] text-[#026AA2] px-3 py-1 rounded-full text-xs">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-1">
                                    <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" fill="#026AA2" />
                                </svg>
                                Welcome to the AI Chat Assistant
                            </div>
                        </div>
                        <div className="bg-white rounded-lg border border-gray-200 shadow-md p-4 w-80">
                            <div className="flex items-center relative">
                                <input
                                    type="text"
                                    placeholder="Ask your question here..."
                                    className="w-full border border-gray-300 rounded-lg py-2 px-3 pr-10 focus:outline-none focus:ring-1 focus:ring-blue-500 text-sm"
                                />
                                <button className="absolute right-2 p-1 text-gray-400 hover:text-gray-600">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" fill="#B0B7C3" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}