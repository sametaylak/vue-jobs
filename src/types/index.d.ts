import Vue, { PluginFunction } from 'vue';

export class VueJobs {
  constructor(options?: VueJobsOptions);

  static install(): PluginFunction<any>;
  static init(Vue: Vue): void;
}

export interface VueJobsOptions extends Object {
  accessorName?: string
}

declare module 'vue/types/vue' {
  interface Vue {
    $jobs: VueJobs;
    __$VueJobsInstance: VueJobs;
  }
}

