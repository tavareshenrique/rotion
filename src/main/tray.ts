import { app, Menu, Tray } from 'electron';

import path from 'node:path';

app.whenReady().then(() => {
  const icon = path.join(__dirname, '../../resources/rotionTemplate.png');

  const tray = new Tray(icon);

  const menu = Menu.buildFromTemplate([{ label: 'Rotion' }]);

  tray.setContextMenu(menu);
});
