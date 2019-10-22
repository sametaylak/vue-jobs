<template>
  <div>
    <span ref="pie" id="pie">🥧</span>
    <button @click="withoutJob">
      Generate PI!
    </button><br />
    <button @click="withJob">
      Generate PI in a Worker!
    </button>
    <pre>{{ result }}</pre>
  </div>
</template>

<script>
  import pi from './pi';

  export default {
    data() {
      return {
        result: ''
      };
    },
    methods: {
      withoutJob() {
        this.result = '3.' + pi(30000).slice(1);
      },
      withJob() {
        this.$jobs.run(pi, 30000)
          .then(res => this.result = '3.' + res.slice(1));
      }
    },
    mounted() {
      let rotation = 0;
      setInterval(() => this.$refs.pie.style.transform = `rotate(${rotation+=10}deg)`, 10);
    }
  };
</script>

<style>
html,body {
  min-width: 100%;
  min-height:100%;
  height: 100%;
}

h1 {
  font-style: italic;
  color: #373fff;
  padding-left: 1em;
  text-decoration: underline;
}

main {
  height: 100%;
  overflow: hidden;
}

#put-pi-here {
  display: block;
  white-space: pre-wrap;
  max-width: 100%;
  word-break: break-all;
  margin: 1em;
}

#pie {
  display: inline-block;
  float: left;
  font-size: 4em;
}
</style>
