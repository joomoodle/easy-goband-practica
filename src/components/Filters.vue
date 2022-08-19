<template>
  <div class="filter">
    <input type="text" placeholder="Buscar por nombre" class="field-name" v-model.lazy="beerName">
    <div class="filter-date">
      <label for="">Fecha Elaboración</label>
      <input type="date" class="field-date" v-model.lazy="beerDate">
    </div>
  </div>
</template>

<script>
import { format, parseISO } from 'date-fns'

export default {
  data: function () {
    return {
      beerName: '',
      beerDate: null
    };
  },
  methods: {

  },
  watch: {
    beerName: function (value) {
      let date = this.beerDate
      if (date) {
        date = format(parseISO(value), 'MM-yyyy')
      }

      this.$store.dispatch("getBeers", { beer_name: value, brewed_before: date });
    },
    beerDate: function (value) {
      let date = format(parseISO(value), 'MM-yyyy')
      this.$store.dispatch("getBeers", { brewed_before: date, beer_name: this.beerName });

    }
  }
};
</script>

<style>
.filter {
  display: flex;
  flex-direction: row;
  gap: 20px;
  padding: 10px;
}

.filter>.field-name {
  border-radius: 10px;
  border: 1px solid #c3c3c3;
  height: 30px;
  width: 250px;
  padding-left: 5px;
}

.filter-date {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
}

.filter-date>.field-date {
  border-radius: 10px;
  border: 1px solid #c3c3c3;
  height: 30px;
  padding-left: 5px;
}
</style>