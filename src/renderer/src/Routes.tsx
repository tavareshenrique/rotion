import { Router, Route } from 'electron-router-dom';

import { Blank, Document } from './pages';

export function Routes() {
  return (
    <Router
      main={
        <>
          <Route path="/" element={<Blank />} />
          <Route path="/document" element={<Document />} />
        </>
      }
    />
  );
}
