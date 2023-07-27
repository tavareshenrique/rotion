import { Header, Sidebar } from './components';

import './styles/global.css';

export function App() {
  return (
    <div className="h-screen w-screen text-rotion-100 flex">
      <Sidebar />

      <div className="flex-1 flex flex-col max-h-screen">
        <Header />

        <main className="flex-1 flex- items-center justify-center text-rotion-400">
          Selecione ou crie um documento
        </main>
      </div>
    </div>
  );
}
