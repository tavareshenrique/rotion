import { Link } from 'react-router-dom';

export function Blank() {
  return (
    <main className="flex items-center justify-center flex-1 text-rotion-400">
      Selecione ou crie um documento
      <Link to="/document">Acessar o Documento</Link>
    </main>
  );
}
