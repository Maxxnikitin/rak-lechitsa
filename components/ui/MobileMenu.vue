<template>
  <nav class="mobile-menu">
    <ul class="mobile-menu__list">
      <li class="mobile-menu__item">
        <nuxt-link to="/" class="mobile-menu__link">Главная</nuxt-link>
      </li>
      <li class="mobile-menu__item">
        <nuxt-link to="/stories" class="mobile-menu__link">Истории</nuxt-link>
      </li>
      <nxt-button
        class="mobile-menu__button"
        :text="textButtonMenu"
        @btnClick="toggleStoryPopup"
      />
    </ul>
  </nav>
</template>

<script>
import Button from '@/components/ui/Button';
export default {
  components: {
    'nxt-button': Button,
  },
  methods: {
    toggleStoryPopup() {
      this.$store.commit('form/finishFalse');
      this.$store.commit('popup/toggleStoryPopup');
    },
  },
  data() {
    return {
      textButtonMenu: 'Рассказать историю',
    };
  },
};
</script>

<style scoped>
.mobile-menu {
  padding: 18px 50px 18px;
}

.mobile-menu__list {
  max-width: 688px;
  margin: 0 auto;
  padding: 0;
  list-style-type: none;
  display: flex;
  align-items: center;
}

.mobile-menu__item {
  margin-right: 30px;
}

.mobile-menu__link {
  color: black;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  text-decoration: none;
  transition: opacity 0.3s;
}

.mobile-menu__button {
  width: 200px;
  height: 38px;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 18px;
  transition: opacity 0.3s;
}

.mobile-menu__button:hover {
  opacity: 0.8;
}

.mobile-menu__link.nuxt-link-exact-active {
  text-decoration: underline;
}

.mobile-menu__link.nuxt-link-exact-active:hover {
  opacity: 1;
}

.mobile-menu__link:hover {
  opacity: 0.8;
}

@media (max-width: 700px) {
  .mobile-menu {
    padding: 18px 15px 18px;
  }

  .mobile-menu__list {
    max-width: 290px;
    display: block;
  }

  .mobile-menu__item {
    margin-right: 0;
    margin-bottom: 18px;
  }

  .mobile-menu__link {
    font-size: 13px;
    line-height: 16px;
  }

  .mobile-menu__button {
    width: 146px;
    height: 31px;
    font-size: 12px;
    line-height: 15px;
  }
}
</style>
