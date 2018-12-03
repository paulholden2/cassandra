const { MSICreator } = require('electron-wix-msi');
const path = require('path');

const msiCreator = new MSICreator({
  appDirectory: path.join(__dirname, 'bin/cassandra-win32-x64'),
  description: 'Cassandra - Administration toolkit for CaaS',
  exe: 'cassandra',
  name: 'Cassandra',
  manufacturer: 'Stria',
  version: '0.1.0',
  outputDirectory: path.join(__dirname, 'bin/msi'),
  ui: {
    chooseDirectory: true
  }
});

async function msi() {
  await msiCreator.create();
  await msiCreator.compile();
}

msi();
