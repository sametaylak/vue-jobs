import { devMode } from './utils';

import makeResponse from './makeResponse';
import createWorker from './createWorker';

export default class VueJobs {
  constructor(options = {}) {
    const defaults = {
      accessorName: '$jobs'
    };
    this.options = { ...defaults, ...options };
  }

  ////////////////////////////////////
  // YOU MAY NOT NEED TO EDIT BELOW //
  ////////////////////////////////////

  initialized = false;

  init(Vue) {
    if (devMode() && !install.installed) {
      console.warn(
        `[vue-jobs] not installed. Make sure to call \`Vue.use(VueJobs)\` before init root instance.`
      );
    }

    if (this.initialized) {
      return;
    }

    this.initialized = true;
    this.run = (work = null, args) => {
      const response = makeResponse(work);
      const worker = createWorker(response);
      return worker.post({ args });
    };
  }
}

export function install(Vue) {
  if (!window.Worker) {
    console.warn('[vue-jobs] workers not supported');
    return;
  }

  const isDev = devMode();
  if (install.installed && Vue) {
    if (isDev) {
      console.warn('[vue-jobs] already installed. Vue.use(VueJobs) should be called only once.');
    }
    return;
  }

  Vue.mixin({
    /**
     * VueJobs init hook, injected into each instances init hooks list.
     */
    beforeCreate() {
      let instance = new VueJobs();
      instance.init(Vue);

      if (instance) {
        this.__$VueJobsInstance = instance;
        this[instance.options.accessorName] = instance;
      }
    }
  });

  install.installed = true;
  if (isDev) {
    console.info('[vue-jobs] is plugged in.');
  }
}

VueJobs.install = install;
