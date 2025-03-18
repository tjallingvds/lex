import { AppSidebar } from '@/components/app-sidebar';
import { SidebarTrigger } from '@/components/ui/sidebar';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="h-screen w-full">
      <AppSidebar />
      <main className="flex h-full flex-col md:ml-[--sidebar-width] transition-[margin] duration-200 ease-linear peer-data-[state=collapsed]:md:ml-0">
        <div className="flex items-center h-12 px-4 border-b">
          <SidebarTrigger className="mr-4" />
          <h1 className="text-lg font-medium">Welcome to the Editor</h1>
        </div>
        <div className="flex-1 overflow-auto p-8">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Rich Text Editor with AI Integration</h2>
            <p className="mb-4">
              Welcome to our powerful text editor with AI integration. Create, edit and enhance your documents with advanced editing tools and AI assistance.
            </p>
            
            <div className="my-8">
              <Link 
                href="/editor" 
                className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
              >
                Go to Editor
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
              <div className="border rounded-lg p-4">
                <h3 className="text-xl font-medium mb-2">Rich Text Editing</h3>
                <p>Format your content with a variety of text styles, lists, tables, images, and more.</p>
              </div>
              
              <div className="border rounded-lg p-4">
                <h3 className="text-xl font-medium mb-2">AI Assistance</h3>
                <p>Get writing suggestions, improve your text, and generate content with our AI assistant.</p>
              </div>
              
              <div className="border rounded-lg p-4">
                <h3 className="text-xl font-medium mb-2">Collaborative Editing</h3>
                <p>Work together with your team in real-time on shared documents.</p>
              </div>
              
              <div className="border rounded-lg p-4">
                <h3 className="text-xl font-medium mb-2">Customizable Interface</h3>
                <p>Adjust the layout and components to match your workflow needs.</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
