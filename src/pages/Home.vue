<template>
    <div class="container-fluid p-0">
        <section class="row border-top border-bottom" id="Presentazione">
            <img class="col-md-8 ms-auto" src="/ex2.jpg" />
            <div class="text-start mx-3 py-2  text-presentation">
                <!-- <h2 class="">Ristorante</h2> -->
                <p class="">Benvenuti a "Il Veliero", dove il sapore del mare si fonde armoniosamente con l'autenticità della cucina italiana. Situato lungo la pittoresca costa, il nostro ristorante incarna l'essenza della tradizione culinaria marinara, offrendo specialità deliziosamente fresche e piatti classici che soddisfano i palati più esigenti.</p>
            </div>
            
        </section>
        <section class="row border-top border-bottom py-2" id="slideImg">
            <div class="col-2 text-start mx-3">
                <h2 class="">Immagini</h2>
                <p class="text-break">https://getbootstrap.com/docs/5.3/components/carousel/</p>
            </div>
            <div id="carouselExampleIndicators" class="carousel slide col-8 ms-auto">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                    <img src="/ex2.jpg" class="d-block w-100" alt="Slider immagini">
                    </div>
                    <div class="carousel-item">
                    <img src="/ex2.jpg" class="d-block w-100" alt="Slider immagini">
                    </div>
                    <div class="carousel-item">
                    <img src="/ex2.jpg" class="d-block w-100" alt="Slider immagini">
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </section>
        <!-- <section class="row border-top border-bottom py-2" id="Sec3">
            <div class="col-auto text-start mx-3">
                <h1 class="">Posizione 3</h1>
                <p class="">Ecco dove venire a trovarci!</p>
            </div>
        </section> -->
        <section class="row border-top border-bottom py-2" id="Sec4">
            <div class="col-4 text-start mx-3">
                <h1 class="">Posizione 4</h1>
                <p class="">Ecco dove venire a trovarci!</p>
            </div>
            <img src="/prova_2.webp" alt="Posizione" class="col-8 img p-0 text-end" @click="openOverlay">
            <ImgView img="/prova_2.webp" />
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
import ImgView from '../components/map-view.vue';
    
export default defineComponent({
    components: {
        ImgView,
    },
    methods: {
        openOverlay() {
            const overlay = document.getElementById('overlay');
            overlay!.style.display = 'block';
        },
    }
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
    height: auto;
}

.text-presentation {
    background-color: rgba(255, 255, 255, 0.7);
    border-radius: 10px;
    color: black;
    width: fit-content;
    height: fit-content;
    position: absolute;
    top: 1;
    margin-top: 10px;
    font-size: 2.0vw;
}

.img_pres {
    /* width: 100%; */
}

#slideImg {
    
}

@media screen and (min-width: 768px){
    .text-presentation {
        width: 30%;
        font-size: 1.5vw;
        position: absolute;
        left: 0;
    }

    #Presentazione img {
        
        
    }
}
</style>


<!-- 
<section class="row border-top border-bottom py-2" id="Presentazione">
            <div class="col-6 col-md-4 text-start mx-3 text-presentation">
                <h2 class="">Ristorante</h2>
                <p class="">Benvenuti a "Il Veliero", dove il sapore del mare si fonde armoniosamente con l'autenticità della cucina italiana. Situato lungo la pittoresca costa, il nostro ristorante incarna l'essenza della tradizione culinaria marinara, offrendo specialità deliziosamente fresche e piatti classici che soddisfano i palati più esigenti.</p>
            </div>
        </section>


 #Presentazione {
    background: url('/ex2.jpg');
    background-attachment: center;
    background-size: cover;
    height: 50vh;
    
}

.text-presentation {
    background-color: rgba(255, 255, 255, 0.7);
    border-radius: 10px;
    color: black;
    font-size: 2.5vw;
    height: fit-content;
}   

@media screen and (min-width: 540px) {
    .text-presentation {
        font-size: 2.0vw;
    }
}

@media screen and (min-width: 768px) {
    #Presentazione {
        background-size: 768px 440px;
        background-repeat: no-repeat;
        background-position: right;
        background-color: #0099E5;
    }

    .text-presentation {
        font-size: 1.8vw;
    }
}

@media screen and (min-width: 1200px) {
    .text-presentation {
        font-size: 1.6vw;
    }
}
-->