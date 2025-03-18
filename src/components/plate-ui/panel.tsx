'use client';

import {
  PanelResizeHandle as ResizableHandleImpl,
  Panel as ResizablePanelImpl,
  PanelGroup as ResizablePanelGroupImpl,
} from 'react-resizable-panels';

import { cn } from '@udecode/cn';
import React from 'react';

export interface ResizablePanelProps extends React.ComponentProps<typeof ResizablePanelImpl> {}

export function ResizablePanel({ className, ...props }: ResizablePanelProps) {
  return <ResizablePanelImpl className={cn("", className)} {...props} />;
}

export interface ResizablePanelGroupProps extends React.ComponentProps<typeof ResizablePanelGroupImpl> {}

export function ResizablePanelGroup({ className, ...props }: ResizablePanelGroupProps) {
  return <ResizablePanelGroupImpl className={cn("", className)} {...props} />;
}

export interface ResizableHandleProps
  extends React.ComponentProps<typeof ResizableHandleImpl> {
  withHandle?: boolean;
}

export function ResizableHandle({ className, withHandle, ...props }: ResizableHandleProps) {
  return (
    <ResizableHandleImpl
      className={cn(
        "relative flex w-px items-center justify-center bg-border after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2",
        withHandle && "after:bg-border/40 after:hover:bg-border/60",
        className
      )}
      {...props}
    />
  );
} 