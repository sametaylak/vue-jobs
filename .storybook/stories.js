import Vue from 'vue';
import Vuex from 'vuex';
import { storiesOf } from '@storybook/vue';

import VueJobs from '../src/vue-jobs';

Vue.use(Vuex);
Vue.use(VueJobs);

const withSettings = component => ({
  jobsSettings: new VueJobs(),
  ...component
});

const stories = storiesOf('VueJobs', module);

stories
  // Add some stories here to make your plugin more descriptive
  .add(
    'My Customs  Component',
    () =>
      withSettings({
        template: `
        <div>
          <vue-jobs />
        </div>
      `
      }),
    {
      notes: `
        # Using \`vue-jobs\`

        \`\`\`html
        <template>
          <vue-jobs />
        </template>
        \`\`\`
      `
    }
  )
  .add(
    'My Custom Component with another markup',
    () =>
      withSettings({
        template: `
        <div>
          <b>Hello</b>
          <vue-jobs />
          <i>world</i>
        </div>
      `
      }),
    {
      notes: `
        # Using \`vue-jobs\` with other components

        \`\`\`html
        <template>
          <div>
            <b>Hello</b>
            <vue-jobs />
            <i>world</i>
          </div>
        </template>
        \`\`\`
      `
    }
  );
