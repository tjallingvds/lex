'use client';

import React, { useState } from 'react';
import { 
  FileText, 
  Settings, 
  Layout, 
  AlignLeft, 
  Image, 
  Table, 
  Link, 
  Code, 
  ListOrdered,
  CheckSquare,
  User,
  PanelLeftIcon,
  MessageSquare
} from 'lucide-react';

import { cn } from '@udecode/cn';

export function AppSidebar() {
  const [isOpen, setIsOpen] = useState(true);
  
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed inset-y-0 left-0 z-10 flex h-screen">
      <div 
        className={cn(
          "bg-sidebar text-sidebar-foreground flex h-full flex-col border-r transition-all duration-200 ease-in-out",
          isOpen ? "w-64" : "w-12"
        )}
      >
        <div className="flex items-center justify-between p-4 h-12 border-b">
          {isOpen && (
            <a href="/editor" className="font-medium flex items-center gap-2">
              <FileText className="h-4 w-4" />
              <span>Document Editor</span>
            </a>
          )}
          <button 
            onClick={toggleSidebar}
            className="p-1 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700"
            aria-label="Toggle Sidebar"
          >
            <PanelLeftIcon className="h-4 w-4" />
          </button>
        </div>
        
        <div className="flex-1 overflow-auto">
          {/* Editor Tools Section */}
          <div className="px-3 py-2">
            {isOpen && <p className="text-xs font-medium text-gray-500 mb-2">Editor Tools</p>}
            <ul className="space-y-1">
              <li>
                <button className="flex items-center gap-2 w-full rounded-md p-2 hover:bg-gray-100 dark:hover:bg-gray-800">
                  <Layout className="h-4 w-4" />
                  {isOpen && <span>Formatting</span>}
                </button>
              </li>
              <li>
                <button className="flex items-center gap-2 w-full rounded-md p-2 hover:bg-gray-100 dark:hover:bg-gray-800">
                  <AlignLeft className="h-4 w-4" />
                  {isOpen && <span>Text Options</span>}
                </button>
              </li>
              <li>
                <button className="flex items-center gap-2 w-full rounded-md p-2 hover:bg-gray-100 dark:hover:bg-gray-800">
                  <Image className="h-4 w-4" />
                  {isOpen && <span>Media</span>}
                </button>
              </li>
              <li>
                <button className="flex items-center gap-2 w-full rounded-md p-2 hover:bg-gray-100 dark:hover:bg-gray-800">
                  <Table className="h-4 w-4" />
                  {isOpen && <span>Tables</span>}
                </button>
              </li>
              <li>
                <button className="flex items-center gap-2 w-full rounded-md p-2 hover:bg-gray-100 dark:hover:bg-gray-800">
                  <Link className="h-4 w-4" />
                  {isOpen && <span>Links</span>}
                </button>
              </li>
              <li>
                <button className="flex items-center gap-2 w-full rounded-md p-2 hover:bg-gray-100 dark:hover:bg-gray-800">
                  <Code className="h-4 w-4" />
                  {isOpen && <span>Code Blocks</span>}
                </button>
              </li>
              <li>
                <button className="flex items-center gap-2 w-full rounded-md p-2 hover:bg-gray-100 dark:hover:bg-gray-800">
                  <ListOrdered className="h-4 w-4" />
                  {isOpen && <span>Lists</span>}
                </button>
              </li>
              <li>
                <button className="flex items-center gap-2 w-full rounded-md p-2 hover:bg-gray-100 dark:hover:bg-gray-800">
                  <CheckSquare className="h-4 w-4" />
                  {isOpen && <span>Checklists</span>}
                </button>
              </li>
            </ul>
          </div>
          
          {/* AI Features Section */}
          <div className="px-3 py-2 mt-4">
            {isOpen && <p className="text-xs font-medium text-gray-500 mb-2">AI Features</p>}
            <ul className="space-y-1">
              <li>
                <button className="flex items-center gap-2 w-full rounded-md p-2 hover:bg-gray-100 dark:hover:bg-gray-800">
                  <MessageSquare className="h-4 w-4" />
                  {isOpen && <span>AI Assistant</span>}
                </button>
              </li>
              <li>
                <button className="flex items-center gap-2 w-full rounded-md p-2 hover:bg-gray-100 dark:hover:bg-gray-800">
                  <FileText className="h-4 w-4" />
                  {isOpen && <span>Generate Content</span>}
                </button>
              </li>
              <li>
                <button className="flex items-center gap-2 w-full rounded-md p-2 hover:bg-gray-100 dark:hover:bg-gray-800">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                  >
                    <path d="m18 7 4 2v11a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9l4-2" />
                    <path d="M14 22v-4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v4" />
                    <path d="M18 22V5l-6-3-6 3v17" />
                    <path d="M12 7v5" />
                    <path d="M10 9h4" />
                  </svg>
                  {isOpen && <span>Improve Writing</span>}
                </button>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Footer */}
        <div className="border-t p-3">
          <ul className="space-y-1">
            <li>
              <button className="flex items-center gap-2 w-full rounded-md p-2 hover:bg-gray-100 dark:hover:bg-gray-800">
                <Settings className="h-4 w-4" />
                {isOpen && <span>Settings</span>}
              </button>
            </li>
            <li>
              <button className="flex items-center gap-2 w-full rounded-md p-2 hover:bg-gray-100 dark:hover:bg-gray-800">
                <User className="h-4 w-4" />
                {isOpen && <span>Account</span>}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}