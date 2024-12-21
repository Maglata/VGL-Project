<script setup lang="ts">
import { useRouter } from "vue-router";
const router = useRouter();

const goBack = () => {
  router.push("/");
};
const refresh = () => {
  router.push("/reviews");
};
</script>
<template>
  <nav class="navbar">
    <ul class="navbar-nav">
      <!-- Logo -->
      <li class="nav-item logo previous-icon">
        <a @click="goBack">
          <img class="navbar-icon" src="/misc/logo.png" alt="" />
        </a>
      </li>
      <!-- Reviews -->
      <li class="nav-item selected-icon">
        <a @click="refresh">
          <img class="navbar-icon" src="/misc/navbar-reviews.png" alt="" />
        </a>
      </li>

      <!-- Navbar color -->
      <div class="navbar-height next-icon"></div>
    </ul>
  </nav>
</template>
