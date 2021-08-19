var path = require('path');

export default {
    build: {
        rollupOptions: {
          input: {
            main: path.resolve(__dirname, 'index.html'),
            about: path.resolve(__dirname, 'about.html'),
            members: path.resolve(__dirname, 'members.html'),
            contact: path.resolve(__dirname, 'contact.html'),
            events: path.resolve(__dirname, 'events.html'),
            // nested: resolve(__dirname, 'nested/index.html')
          }
        }
      }
}