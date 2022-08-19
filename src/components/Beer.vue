<template>
  <div class="card">
    <h4 style="text-align: left;">Cerveza - {{ beer.name }}</h4>
    <img class="img-beer" v-bind:src="beer.image_url" alt="">
    <div class="description">
      <span class="boil_volume">{{beer.boil_volume.value}} {{beer.boil_volume.unit}}</span>
      <p>{{beer.description}}</p> 
      <a>Ver más</a>
    </div>
  </div>
</template>

<script>
export default {
  props: ["beer"],

  methods: {

  }
};
</script>

<style scoped>
.card {
  background-color: #A0CF18;
  border-radius: 20px;
  min-height: 200px;
  min-width: 200px;
  padding: 10px 8px;
}

.description {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
}

.boil_volume {
  font-weight: bold;
}

.description > p {
  font-style: normal;
  text-overflow: ellipsis;
  word-wrap: break-word;
  overflow: hidden;
  max-height: 3.6em;
  line-height: 1.8em;
}


.img-beer {
  object-fit: cover;
  height: 200px;
}
</style>