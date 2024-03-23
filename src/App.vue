<script lang="ts">
  import { defineComponent } from 'vue';
  import { Collapse } from 'bootstrap';

  export default defineComponent({
    data() {
      return {
        collapse: null as Collapse | null,
      };
    },
    methods: {
      toggleCollapse() {
        this.collapse?.toggle();
      },
     
    },
    mounted() {
      this.collapse = new Collapse(this.$refs.collapsibleNavbar as HTMLElement, {
        toggle: false,
    });
    },
  })
</script>

<template>
  <div class="full-page">
    <nav class="navbar navbar-expand-md navbar-light py-md-4">
      <div class="container-fluid">
        <button class="navbar-toggler" type="button" @click="toggleCollapse" name="Navigazione">
          <span class="bi bi-list"></span>
        </button>
        <div class="collapse navbar-collapse" ref="collapsibleNavbar">
          <ul class="navbar-nav">
            <li class="nav-item">
              <RouterLink class="nav-link ps-2 px-md-4 mx-md-3" to="/">Home</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link ps-2  px-md-4 mx-md-3" to="/menu">Menu</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link ps-2  px-md-4 mx-md-3" :to="{ path:'/', hash:'#Sec5' }">About</RouterLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <RouterView class="page"/>
  </div>
</template>
<!-- // text-shadow: 1px 1px white; -->
<style scoped>
@import url(https://fonts.googleapis.com/css2?family=PT+Sans+Caption&display=swap);
/* @media screen and (min-width: 768px){
  .navbar {
    border-bottom: 1px solid #000;
    background-color: #DDD7D3;
  } 

  .nav-link {
    border: 1px solid #000;
    border-radius: 10px;
    color: blue;
    background-color: gray;
  }

  .nav-link:hover {
    background-color: #fff;
    color: #000;
    box-shadow: 0 0 0 0.3rem rgba(255, 255, 255, 0.25);
  }
} */
.full-page {
  font-family: 'PT Sans Caption', sans-serif; 
  /* SCEGLEIRE UN FONT */
}

/* .full-page {
    background: linear-gradient(to bottom, rgba(160, 159, 159, 0.144), rgba(124, 123, 123, 0.13)), url(/ex2.jpg);
    background-size: cover;
    background-repeat: repeat;
    background-attachment: fixed;
} */

.nav-link {
  font-size: 15px;
  border-bottom: 1px solid #000;
}

.nav-link:hover {
  color: #000;
}

.btn { 
  font-size: 30px;
}

.page {
  margin-top: 3%;
}
</style>