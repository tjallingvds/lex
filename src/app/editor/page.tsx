import { Toaster } from 'sonner';
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '@/components/plate-ui/panel';

import { PlateEditor } from '@/components/editor/plate-editor';
import { SettingsProvider } from '@/components/editor/settings';
import { SideChatPanel } from '@/components/chat/side-chat-panel';
import { AppSidebar } from '@/components/app-sidebar';
import { SidebarTrigger } from '@/components/ui/sidebar';

export default function Page() {
  return (
    <div className="h-screen w-full" data-registry="plate">
      <SettingsProvider>
        <AppSidebar />
        <div className="flex h-full flex-col md:ml-[--sidebar-width] transition-[margin] duration-200 ease-linear peer-data-[state=collapsed]:md:ml-0">
          <div className="flex items-center h-12 px-4 border-b">
            <SidebarTrigger className="mr-4" />
            <h1 className="text-lg font-medium">Document Editor</h1>
          </div>
          <div className="flex-1 overflow-hidden">
            <ResizablePanelGroup direction="horizontal" className="h-full">
              <ResizablePanel defaultSize={75} minSize={50}>
                <PlateEditor />
              </ResizablePanel>
              <ResizableHandle withHandle />
              <ResizablePanel defaultSize={25} minSize={20}>
                <SideChatPanel />
              </ResizablePanel>
            </ResizablePanelGroup>
          </div>
        </div>
      </SettingsProvider>
      <Toaster />
    </div>
  );
}
