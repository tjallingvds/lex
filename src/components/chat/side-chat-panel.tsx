'use client';

import React, { useState } from 'react';
import { Loader2Icon, SendIcon, RefreshCwIcon } from 'lucide-react';

import { useChat } from '@/components/editor/use-chat';
import { cn } from '@udecode/cn';
import { AIChatEditor } from '@/components/plate-ui/ai-chat-editor';
import { Button } from '@/components/plate-ui/button';
import { Textarea } from '@/components/plate-ui/textarea';
import { useSettings } from '@/components/editor/settings';

export function SideChatPanel() {
  const chat = useChat();
  const { input, isLoading, messages, setInput } = chat;
  const { model } = useSettings();
  const [scrollableRef, setScrollableRef] = useState<HTMLDivElement | null>(null);

  // Auto-scroll to the bottom when new messages are added
  React.useEffect(() => {
    if (scrollableRef) {
      scrollableRef.scrollTop = scrollableRef.scrollHeight;
    }
  }, [messages.length, scrollableRef]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      chat.handleSubmit(e);
    }
  };

  const handleClearChat = () => {
    chat.reload();
  };

  return (
    <div className="flex h-full flex-col bg-background border-l">
      <div className="flex items-center justify-between border-b border-border p-3">
        <h2 className="text-lg font-medium">AI Assistant</h2>
        <div className="text-xs text-muted-foreground">
          {model.label} model
        </div>
      </div>
      
      <div 
        ref={setScrollableRef}
        className="flex-1 overflow-y-auto p-4 space-y-4"
      >
        {messages.map((message) => (
          <div 
            key={message.id} 
            className={cn(
              "rounded-lg p-3 max-w-[85%]",
              message.role === "user" 
                ? "bg-primary/10 ml-auto text-sm" 
                : "bg-muted mr-auto"
            )}
          >
            {message.role === "user" ? (
              <div>{message.content}</div>
            ) : (
              <AIChatEditor content={message.content} />
            )}
          </div>
        ))}
        
        {isLoading && (
          <div className="flex items-center space-x-2 text-muted-foreground p-3 max-w-[85%] bg-muted rounded-lg mr-auto">
            <Loader2Icon className="h-4 w-4 animate-spin" />
            <span>{messages.length > 0 ? "Thinking..." : "Starting..."}</span>
          </div>
        )}
        
        {messages.length === 0 && !isLoading && (
          <div className="flex h-full items-center justify-center">
            <div className="text-center space-y-4 max-w-xs text-muted-foreground">
              <p className="font-medium">Ask the AI assistant for help</p>
              <div className="text-sm space-y-1">
                <p>Try asking:</p>
                <ul className="list-disc list-inside text-left space-y-2">
                  <li>Summarize this document</li>
                  <li>Improve my writing style</li>
                  <li>Generate ideas about...</li>
                  <li>Fix grammar and spelling</li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
      
      <div className="border-t border-border p-3 space-y-2">
        {messages.length > 0 && (
          <div className="flex justify-end mb-2">
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={handleClearChat}
              className="text-xs flex items-center gap-1"
            >
              <RefreshCwIcon className="h-3 w-3" />
              New chat
            </Button>
          </div>
        )}
        
        <form onSubmit={handleSubmit}>
          <Textarea
            className="min-h-[80px] resize-none"
            placeholder="Ask AI anything..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            disabled={isLoading}
          />
          <div className="flex justify-end mt-2">
            <Button 
              type="submit" 
              disabled={isLoading || !input.trim()}
              size="sm"
            >
              {isLoading ? (
                <Loader2Icon className="h-4 w-4 animate-spin" />
              ) : (
                <SendIcon className="h-4 w-4" />
              )}
              <span className="ml-2">Send</span>
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
} 