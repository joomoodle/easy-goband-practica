import axios from "axios";
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    //nombre del store beers donde almaceno toda la informacion que responde el api
    beers: [],
  },

  getters: {},
  mutations: {
    //mutacion al estado beers
    SET_NEW_LIST_BEERS(state, beersItems) {
      state.beers = beersItems;
    },
  },

  actions: {
    async getBeers({ commit }, params) {

      //DEFINO UNA VAIABLE para almacenar los parametros note que si se envian en blanco da un error interno
      let queryParams = "";

      if (params) {
        //no es la mejor forma pero como es una practica puede funcionar. Lo siento :(
        if (queryParams.beer_name) {
          queryParams += `beer_name=${params.beer_name}&`;
        }
        if (params.brewed_before) {
          queryParams += `brewed_before=${params.brewed_before}&`;
        }
      }

      //normalmente esta base url de api deben de ir en variables de entorno
      let BASE_URL = `https://api.punkapi.com/v2/beers?${queryParams}`;


      //invoco el axios que me ayuda a hacer la petición al api. decidi a usar axios por el manejo de objetocs
      //se puduera realizar con fecth que es nativo pero casí no me agrada xD
      let response = await axios.get(BASE_URL).then((res) => {
        if (res.status === 200) return res.data;
        return null;
      });

      //actualizo el estado
      commit("SET_NEW_LIST_BEERS", response);
    },
  },
});
