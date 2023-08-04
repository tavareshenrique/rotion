import { Header, Sidebar } from './components';

import { Routes } from './Routes';

import './styles/global.css';

export function App() {
  return (
    <div className="flex w-screen h-screen text-rotion-100">
      <Sidebar />

      <div className="flex flex-col flex-1 max-h-screen">
        <Header />

        <Routes />
      </div>
    </div>
  );
}
