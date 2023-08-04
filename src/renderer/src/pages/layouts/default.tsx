import { Outlet } from 'react-router-dom';

import { Header, Sidebar } from '../../components';

export function DefaultLayout() {
  return (
    <div className="flex w-screen h-screen text-rotion-100">
      <Sidebar />

      <div className="flex flex-col flex-1 max-h-screen">
        <Header />

        <Outlet />
      </div>
    </div>
  );
}
