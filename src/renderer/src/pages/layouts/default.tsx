import { useState } from 'react';

import { Outlet } from 'react-router-dom';

import * as Collapsible from '@radix-ui/react-collapsible';

import { Header, Sidebar } from '../../components';

export function DefaultLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <Collapsible.Root
      defaultOpen
      onOpenChange={setIsSidebarOpen}
      className="flex w-screen h-screen text-rotion-100"
    >
      <Sidebar />

      <div className="flex flex-col flex-1 max-h-screen">
        <Header isSidebarOpen={isSidebarOpen} />

        <Outlet />
      </div>
    </Collapsible.Root>
  );
}
