/*
Nuxt.js module for vue-jobs
Usage:
    - Install vue-jobs package
    - Add this into your nuxt.config.js file:
    {
        modules: [
            // Simple usage
            'vue-jobs/nuxt'
            // Optionally passing options in module configuration
            ['vue-jobs/nuxt', { ...options }]
        ],
        // Optionally passing options in module top level configuration
        VueJobs: { ...options }
    }
*/

const { resolve } = require('path');

module.exports = function nuxtVueWaitModule(moduleOptions) {
  const options = Object.assign({}, this.options.VueJobs, moduleOptions);

  // Register plugin
  this.addPlugin({
    src: resolve(__dirname, 'vue-jobs-plugin.template.js.tpl'),
    fileName: 'vue-jobs-plugin.js',
    options: options
  });
};

// required by nuxt
module.exports.meta = require('../package.json');
