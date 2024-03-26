<template>
<div class="portata" v-if="menu">
    <div class="text-center">
        <button type="button" class="btn" @click="toggleCollapse" >
            <h2>{{ menu.portata }}</h2>
        </button>
    </div>
    <div ref="collapse" :id="menu.portata" class="collapse">
        <PiattoView v-for="(p, index) in menu.piatto"  :piatto="p" :key="index" @click="handlePiatto(menu.piatto[index])" />
    </div>
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Menu, Piatto } from '../types';
import PiattoView from './piatto-view.vue';
import { Collapse } from 'bootstrap';

export default defineComponent({
components: {
    PiattoView,
},
props: {
    menu: {
    type: Object as () => Menu | null,
    required: true,
    },
},
data() {
    return {
        collapse: null as Collapse | null,
    };
},
methods: {
    toggleCollapse() {
        this.collapse?.toggle();
    },
    handlePiatto(piatto: Piatto) {
        console.log('click! portata');
        this.$emit('piatto-selezionato', piatto);
    }
},
mounted() {
    this.collapse = new Collapse(this.$refs.collapse as HTMLElement, {
        toggle: false,
    });
}
});
</script>

<style scoped>
.portata {
    background-color: rgba(255, 255, 255, 0.7);
    border: 1px solid #000;
    margin-bottom: 2%;
    border-radius: 20px;
    cursor: pointer;
}

.btn {
    border: none;
    width: 100%;
}
</style>