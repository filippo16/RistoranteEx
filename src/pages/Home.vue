<template>
    <div class="container-fluid">
        <section class="row border-top border-bottom py-2" id="Presentazione">
            <div class="col-5 text-start mx-3 text-presentation">
                <h2 class="">Ristorante</h2>
                <p class="">Benvenuti a "Il Veliero", dove il sapore del mare si fonde armoniosamente con l'autenticità della cucina italiana. Situato lungo la pittoresca costa, il nostro ristorante incarna l'essenza della tradizione culinaria marinara, offrendo specialità deliziosamente fresche e piatti classici che soddisfano i palati più esigenti.</p>
            </div>
        </section>
        <section class="row border-top border-bottom py-2" id="Sec2">
            <div class="col-4 text-start mx-3">
                <h2 class="">Posizione 2</h2>
                <p class="">Ecco dove venire a trovarci!</p>
            </div>
        </section>
        <section class="row border-top border-bottom py-2" id="Sec3">
            <div class="col-auto text-start mx-3">
                <h1 class="">Posizione 3</h1>
                <p class="">Ecco dove venire a trovarci!</p>
            </div>
        </section>
        <section class="row border-top border-bottom py-2" id="Sec4">
            <div class="col-4 text-start mx-3">
                <h1 class="">Posizione 4</h1>
                <p class="">Ecco dove venire a trovarci!</p>
            </div>
            <img src="/prova_2.webp" alt="Posizione" class="col-8 img p-0 text-end">
        </section>
        <section class="row border-top border-bottom py-2" id="menu">
            <div class="col-4 text-start mx-3">
                <h1 class="">Ecco il nostro menu!</h1>
                <i class="bi bi-arrow-right"></i>
            </div>
            <div class="col-7 align-items-center">
                <RouterLink to="/menu" class="btn btn-primary">Vai al menu</RouterLink>
            </div>
        </section>
        <section class="row border-top border-bottom py-2" id="Sec5">
            <div class="col-4 text-start mx-3">
                <h2 class="">About</h2>
                <p class="">Ecco dove venire a trovarci!</p>
            </div>
        </section>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
    
export default defineComponent({
    
});
</script>

<style scoped>

.img {
    width: 50%;
    object-fit: cover;
    border: 1.5px solid black;
    border-radius: 10px;
}

#Presentazione {
    background: url('/ex2.jpg');
    background-attachment: center;
    background-size: cover;
    height: auto;
    
}

.text-presentation {
    background-color: rgba(255, 255, 255, 0.7);
    border-radius: 10px;
    color: black;
    font-size: 2vw;
}



</style>