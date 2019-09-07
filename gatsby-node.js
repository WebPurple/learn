'use strict';

require('source-map-support').install();
require('ts-node').register({
  compilerOptions: {
    module: 'commonjs',
    target: 'esnext',
  },
});

exports.createPages = require('./gatsby-node-API/createPages').createPages;
exports.onCreateNode = require('./gatsby-node-API/onCreateNode').onCreateNode;
