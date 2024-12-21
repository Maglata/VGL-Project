<script setup lang="ts">
const emit = defineEmits(['showLogin', 'showSignup']);
</script>

<template>
<header class="header-container">
  <div class="header">
    <div class="left-section">
      <a href="heropage.html">
        <img src="/misc/logo.png" alt="Website Logo" />
      </a>
      <div class="title-text">The Game List</div>
    </div>
    <div class="right-section">
      <button class="button-login-signup login" @click="emit('showLogin')">Login</button>
      <button class="button-login-signup sign-up" @click="emit('showSignup')">Sign Up</button>
    </div>
  </div>
</header>
</template>
