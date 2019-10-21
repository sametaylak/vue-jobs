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
```

### 3. Uses

```vue
<script>
  export default {
    async created() {
      this.$jobs.run(() => {
				const a = 5;
				const b = 6;
				return a + b;
			}).then(console.log)
    },
  };
</script>
```

```vue
<script>
  export default {
    async created() {
      this.$jobs.run(() => {
				const a = 5;
				const b = 6;
				return a + b;
			}).then(console.log)
    },
  };
</script>
```

## License
MIT
