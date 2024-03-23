<template>
    <div>
        <h1>404 - Page Not Found</h1>
        <p>The page you are looking for does not exist.</p>
        <router-link to="/">Go back to Home</router-link>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({});
</script>

<style scoped>
h1 {
    font-size: 24px;
    color: #333;
}

p {
    font-size: 16px;
    color: #777;
}

router-link {
    color: #007bff;
    text-decoration: underline;
    cursor: pointer;
}
</style>