import Store from 'electron-store';

interface IStore {
  documents: Record<string, unknown>;
}

export const store = new Store<IStore>({
  defaults: {
    documents: {},
  },
});
