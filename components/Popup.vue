<template>
  <div :class="['popup', addClass]">
    <div class="popup__content">
      <button class="popup__close" type="button" @click="$emit('closeClick')" />
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    addClass: String,
  },
};
</script>

<style scoped>
.popup {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 10;
}

.popup__close {
  position: absolute;
  top: 40px;
  right: 40px;
  background-image: url(/button-close.svg);
  width: 20px;
  height: 20px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  background-size: 30px 30px;
  background-color: rgba(0, 0, 0, 0);
  border: none;
  cursor: pointer;
  transition: opacity 0.3s;
  outline: none;
}

.popup__close:hover {
  opacity: 0.9;
}

.popup__content {
  background-color: #fff;
  padding: 40px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-height: 95%;
  overflow: auto;
}

@media (max-width: 450px) {
  .popup__content {
    padding: 15px;
  }

  .popup__close {
    top: 15px;
    right: 15px;
    background-size: 25px 25px;
  }
}
</style>
