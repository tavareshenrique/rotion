import { BrowserWindow, Menu, Tray } from 'electron';

import path from 'node:path';

export function createTray(window: BrowserWindow) {
  const icon = path.join(__dirname, '../../resources/rotionTemplate.png');

  const tray = new Tray(icon);

  const menu = Menu.buildFromTemplate([
    { label: 'Rotion', enabled: false },
    { type: 'separator' },
    {
      label: 'Criar novo documento',
      click: () => window.webContents.send('new-document'),
    },
    { type: 'separator' },
    { label: 'Documentos recentes', enabled: false },
    { label: 'ReactJS', accelerator: 'CmdOrCtrl+1' },
    { label: 'Ignite' },
    { label: 'Discover' },
    { type: 'separator' },
    {
      label: 'Sair',
      role: 'quit',
    },
  ]);

  tray.setContextMenu(menu);
}
