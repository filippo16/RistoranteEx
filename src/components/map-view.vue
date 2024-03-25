<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    props: {
        img: {
            type: Object as () => string,
            required: true,
        }
    },
    methods: {
        // openOverlay() {
        //     const overlay = document.getElementById('overlay');
        //     overlay!.style.display = 'block';
        // },
        mount() {
            const overlayImage = document.getElementById('overlay-image') as HTMLImageElement;
            overlayImage.src = this.img;
        },
        closeOverlay() {
            const overlay = document.getElementById('overlay');
            overlay!.style.display = 'none';
        }
    },
    mounted() {
        // const overlay = document.getElementById('overlay');
        // overlay!.addEventListener('click', (event) => {
        //     if (event.target === overlay) {
        //         this.closeOverlay();
        //     }
        // });
        this.mount();
    }
});
</script>

<template>
    <div class="overlay" id="overlay">
        <div class="overlay-content">
            <img src="" alt="Immagine" class="overlay-image" id="overlay-image">
            <button @click="closeOverlay()" class="close-button">Chiudi</button>
        </div>
    </div>
</template>

<style scoped>
.overlay {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 9999;
}

.overlay-content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}

.overlay-image {
  max-width: 80vw;
  max-height: 80vh;
  border: 3px solid #fff;
  border-radius: 5px;
}

.close-button {
  background-color: #fff;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
}
</style>