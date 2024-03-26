<template>
    <div class="container-fluid">
        <h1>Menu</h1>
        <p>This is a placeholder for the content of the other page.</p>
        <PortataView v-for="m in menu" :menu="m" @piatto-selezionato="handlePiatti"/>
        <h2>La tua lista</h2>

        <div v-if="choice"><PiattoView v-for="(c, index) in choice" :piatto="c" :key="index" /></div>
        <div class="toast-container position-fixed bottom-0 end-0 p-3">
            <div id="liveToast" @click.stop class="toast" role="alert" aria-live="assertive" aria-atomic="true"  data-bs-autohide="false">
                <div class="toast-header">
                    <img src="/introFoto.jpg" class="me-2 imgA" >
                    <strong class="me-auto">Ristorante Veliero</strong>
                    <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
                </div>
                <div class="toast-body">
                    {{ piattoSelected?.nome }} aggiunto alla lista!
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Menu, Piatto } from '../types';
import PortataView from '../components/portata-view.vue';
import PiattoView from '../components/piatto-view.vue';
import { Toast } from 'bootstrap';

export default defineComponent({
    components: {
        PortataView,
        PiattoView
    },
    data() {
        return {
            menu: [] as Menu[],
            choice: [] as Piatto[] | null,
            piattoSelected: null as Piatto | null
        };
    },
    methods: {
        async fetchMenu() {
            const response = await fetch('/file.json');
            this.menu = await response.json();
        },
        handlePiatti(piatto: Piatto) {
            this.piattoSelected = piatto;
            this.choice?.push(piatto);
            this.showToast();
            
        },
        showToast() {
            const toastLiveExample = document.getElementById('liveToast');
            const toastBootstrap = new Toast(toastLiveExample as HTMLElement)
            toastBootstrap.show();
        }
    },
    mounted() {
        this.fetchMenu();
    }
});
</script>

<style scoped>
.container-fluid {
    height: 100vh;
    background-color: linear-gradient(rgba(0, 255 255, 0.5), rgba(255, 255, 255, 0.5));
}

.imgA {
    width: 30px;
    height: 30px;
    border-radius: 50%;
}
</style>