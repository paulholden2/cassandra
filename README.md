# Cassandra

Cassandra is a CaaS administration tool built with love and all the best
intentions.

# Build

1. Install dependencies and run the post-install hack to enable webpack
   electron-renderer build target

   ```
   $ npm install
   $ node postinstall
   ```

2. For development, run `npm run ng -- serve` in a shell. Run `npm run electron` in a
   separate shell to launch the window application.
3. To package the Electron app, run `npm run pack`.
4. If want to build an MSI for installation on Windows, ensure WiX tools are
   installed. Run `npm run msi` to create the MSI.
5. If you want to test in a VM, and have Vagrant installed, run `vagrant up`
   and wait for it to complete (it may fail at SSH check), then access it
   from whichever VM provider you use.
