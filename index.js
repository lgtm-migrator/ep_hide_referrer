'use strict';

const eejs = require('ep_etherpad-lite/node/eejs');

exports.registerRoute = (hookName, args, callback) => {
  args.app.get('/redirect', (req, res) => {
    res.send(eejs.require(`${__dirname}/templates/redirect.html`));
  });
};
