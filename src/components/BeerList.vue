<template>
  <div class="grid">
    <beer v-for="(beer, index) in beers" :key="index" :beer="beer" />
  </div>
</template>

<script>
import { mapState } from "vuex";
import Beer from "./Beer.vue";

export default {
  components: {
    Beer
  },

  computed: {
    ...mapState({
      beers: "beers"
    })
  }
};
</script>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 5px;
  padding: 5px;
}

@media screen and (min-width: 900px) {
  .grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>