<script setup lang="ts">
import { useRouter } from "vue-router";

const router = useRouter();

defineProps(['filerValue']);
const emit=defineEmits(['filterChanged']); 

const goBack = () => {
  router.push("/");
};
</script>

<template>
  <!-- Profile Header -->
  <header class="profile-header">
    <input
      class="search-field"
      type="search"
      required
      placeholder="&#x1F50E;&#xFE0E; Search"
      @input="emit('filterChanged', $event.target.value)"
    />
    <div class="right-section">
      <!-- Pfp -->
      <div class="profile-header-icon-container" @click="goBack">
        <img class="profile-header-icon" src="/misc/pfp.png" alt="" />

      </div>
    </div>
  </header>
</template>
