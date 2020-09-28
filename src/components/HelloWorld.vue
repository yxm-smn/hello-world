<template>
  <div class="hello">
    <h1>{{ one }}</h1>
    <button @click="cloneAdd">添加</button>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
export default {
  name: "HelloWorld",
  inject: ["dd"],
  props: {
    msg: String,
  },
  computed: {
    ...mapState("oneStore", ["one"]),
  },
  methods: {
    cloneAdd() {
      this.$router.push({ path: "/default/5" });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
