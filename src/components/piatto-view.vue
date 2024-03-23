<template>
    <div class="container-fluid">
        <div v-if="piatto" class="piatto">
            <div class="row">
                <h4 class="col-8">{{ piatto.nome }}</h4>
                <p class="col-4">{{ piatto.prezzo }} €</p>
            </div>
            <p class="descrizione">{{ piatto.descrizione }}</p>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Piatto } from '../types';

export default defineComponent({
    props: {
        piatto: {
            type: Object as () => Piatto | null,
            required: true,
        }
    },
    methods: {
        // handleClick() {
        //     this.$emit('piatto-selezionato', this.piatto);
        //     console.log('click!');
        // }
    }
});
</script>

<style scoped>
.piatto {
    margin: 1rem 0;
    padding: 1rem;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: antiquewhite;
}

.descrizione {
    font-size: 12px;
}
</style>