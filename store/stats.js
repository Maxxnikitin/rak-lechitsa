import axios from 'axios';

export const state = () => ({
  statsArr: [],
});

export const mutations = {
  setState(state, { name, value }) {
    return (state[name] = value);
  },
};

export const actions = {
  fetchStatsArr(state) {
    return axios.get('https://strapi.kruzhok.io/statistics').then(response => {
      return state.commit('setState', {
        name: 'statsArr',
        value: response.data,
      });
    });
  },
};

export const getters = {
  getStatsArr(state) {
    return state.statsArr;
  },
};
