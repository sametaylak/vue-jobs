# VueJobs

Your plugin description...

## Installation

### 1. Install
```
yarn add vue-jobs
# or
npm i vue-jobs --save
```

### 2. Plug-in
```js
import VueJobs from 'vue-jobs'

Vue.use(VueJobs)

new Vue({
  // your vue config
  jobsSettings: new VueJobs(),
})
```

### 3. Use in your components

```vue
<template>
  <vue-jobs />
</template>

<script>
  export default {
    async created() {
      console.log(this.$jobs);
    },
  };
</script>
```

## License
MIT
