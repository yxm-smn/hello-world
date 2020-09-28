<template>
  <div>404{{ id }}</div>
</template>
<script>
export default {
  created() {
    console.log(this.$route.params.id);
  },
  props: ["id"],
};
</script>
