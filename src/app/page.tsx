import { Toaster } from 'sonner';
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '@/components/plate-ui/panel';

import { PlateEditor } from '@/components/editor/plate-editor';
import { SettingsProvider } from '@/components/editor/settings';
import { SideChatPanel } from '@/components/chat/side-chat-panel';
import { AppSidebar } from '@/components/app-sidebar';
import { SidebarTrigger } from '@/components/ui/sidebar';

export default function Page() {
  return (
    <div className="h-screen w-full overflow-hidden" data-registry="plate">
      <SettingsProvider>
        {/* AppSidebar is positioned by the SidebarProvider */}
        <AppSidebar />
        
        {/* Main content that shifts based on sidebar state */}
        <div className="flex h-full flex-col md:ml-[--sidebar-width] transition-[margin] duration-200 ease-linear peer-data-[state=collapsed]:md:ml-0">
          {/* Header */}
          <div className="flex-shrink-0 flex items-center h-12 px-4 border-b">
            <SidebarTrigger className="mr-4" />
            <h1 className="text-lg font-medium">Document Editor</h1>
          </div>
          
          {/* Content area with resizable panels that take remaining height */}
          <div className="flex-1 h-[calc(100%-3rem)] overflow-hidden">
            <ResizablePanelGroup direction="horizontal" className="h-full">
              <ResizablePanel defaultSize={75} minSize={50}>
                <div className="h-full overflow-auto">
                  <PlateEditor />
                </div>
              </ResizablePanel>
              <ResizableHandle withHandle />
              <ResizablePanel defaultSize={25} minSize={20}>
                <div className="h-full overflow-auto">
                  <SideChatPanel />
                </div>
              </ResizablePanel>
            </ResizablePanelGroup>
          </div>
        </div>
      </SettingsProvider>
      <Toaster />
    </div>
  );
}