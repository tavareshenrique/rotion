import { Router, Route } from 'electron-router-dom';

import { DefaultLayout } from './pages/layouts/default';

import { Blank, Document } from './pages';

export function Routes() {
  return (
    <Router
      main={
        <Route path="/" element={<DefaultLayout />}>
          <Route path="/" element={<Blank />} />
          <Route path="/documents/:id" element={<Document />} />
        </Route>
      }
    />
  );
}
