<template>
  <div class="card-carousel">
    <div class="thumbnails">
      <div
        v-for="(image, index) in images"
        :key="image.id"
        :class="['thumbnail-image', (activeImage === index) ? 'active' : '']"
        @click="activateImage(index)"
      >
        <img :src="image.thumb" alt="">
      </div>
    </div>
    <div class="card-img">
      <img :src="currentImage" alt="">
      <div class="actions">
        <span @click="prevImage" class="prev">&#8249;</span>
        <span @click="nextImage" class="next">&#8250;</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Carousel',
  data() {
    return {
      activeImage: 0,
    };
  },
  computed: {
    currentImage() {
      return this.images && this.images.length > 0
        ? this.images[this.activeImage].big
        : '';
    },
  },
  methods: {
    nextImage() {
      this.activateImage((this.activeImage + 1) % this.images.length);
    },
    prevImage() {
      this.activateImage(
        (this.activeImage - 1 + this.images.length) % this.images.length
      );
    },
    activateImage(imageIndex) {
      this.activeImage = imageIndex;
    },
  },
  props: ['images'],
};
</script>

<style scoped>
.card-carousel {
  user-select: none;
  position: relative;
}

.thumbnails {
  display: flex;
  justify-content: space-evenly;
  flex-direction: row;
}

.thumbnail-image {
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 2px;
}

.thumbnail-image > img {
  width: 100%;
  height: auto;
  transition: all 250ms;
}

.thumbnail-image:hover > img, 
.thumbnail-image.active > img {
  opacity: 0.6;
  box-shadow: 2px 2px 6px 1px rgba(0,0,0, 0.5);
}

.card-img {
  position: relative;
  margin-bottom: 15px;
}

.card-img > img {
  display: block;
  margin: 0 auto;
}

.actions {
  font-size: 1.5em;
  height: 40px;
  position: absolute;
  top: 50%;
  margin-top: -20px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #585858;
}

.actions > span {
  cursor: pointer;
  transition: all 250ms;
  font-size: 45px;
}

.actions > span.prev {
  margin-left: 5px;
}

.actions > span.next {
  margin-right: 5px;
}

.actions > span:hover {
  color: #eee;
}
</style>
