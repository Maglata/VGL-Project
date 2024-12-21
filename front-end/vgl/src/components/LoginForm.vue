<script setup lang="ts">
  const emit = defineEmits(['closeModal', 'toggleForm', 'handleSubmit']);

  const props = defineProps({
    loginSelected: Boolean,
  })

  const handleSubmit = () => {
  if (props.loginSelected) { console.log("Logging in..."); } 
  else { console.log("Signing up..."); }
  }

</script>
<template>
  <!-- Modal Wrapper -->
  <div class="login-form-wrapper">
    <div class="login-container" :style="{ flexDirection: loginSelected ? 'row' : 'row-reverse' }">
      <!-- Close Button -->
      <img 
        class="login-close" 
        src="/misc/close-icon.png" 
        alt="Close" 
        @click="emit('closeModal')"
      />
      
      <!-- Input Form -->
      <div 
        class="input-form" 
        :style="{ borderRadius: loginSelected ? '1rem 0px 0px 1rem' : '0px 1rem 1rem 0px' }"
      >
        <div>
          <h1 class="input-type">{{ loginSelected ? 'Login' : 'Sign up' }}</h1>
          
          <!-- Social Login Icons -->
          <div class="login-options">
            <img src="/misc/facebook-icon.png" alt="Facebook" />
            <img src="/misc/google-icon.png" alt="Google" />
            <img src="/misc/twitter-icon.png" alt="Twitter" />
          </div>

          <!-- Input Fields -->
          <div class="login-input-container">
            <h4 class="input-text">{{ loginSelected ? 'Or use your account' : 'Or use your email for registration' }}</h4>
            <input 
              v-if="!loginSelected" 
              class="login-input is-hidden" 
              type="text" 
              placeholder="Name"
            />
            <input 
              class="login-input" 
              type="email" 
              placeholder="Email"
            />
            <input 
              class="login-input" 
              type="password" 
              placeholder="Password"
            />
          </div>
        </div>

        <!-- Action Button -->
        <div class="login-button-container">
          <h4 v-if="loginSelected" class="login-forgot">Forgot password?</h4>
          <a class="login-href">
            <button 
              class="login-button" 
              @click="emit('handleSubmit')"
            >
              {{ loginSelected ? 'Login' : 'Sign up' }}
            </button>
          </a>
        </div>
      </div>

      <!-- Unselected Form -->
      <div 
        class="unselected-form"
        :style="{
          background: loginSelected
            ? 'linear-gradient(122.34deg, #FF5C00 -16.04%, #FF9838 100%)'
            : 'linear-gradient(122.47deg, #FF5C00 43.18%, #FF9838 159.23%)',
          borderRadius: loginSelected ? '0px 1rem 1rem 0px' : '1rem 0px 0px 1rem'
        }"
      >
        <div class="unselected-text-container">
          <h1 class="unselected-text">{{ loginSelected ? 'Hello!' : 'Welcome back!' }}</h1>
          <h2 class="unselected-details">
            {{
              loginSelected
                ? 'Are you here for the first time? Start your journey with us.'
                : 'To keep connected with us please login with your personal info.'
            }}
          </h2>
        </div>
        <button 
          class="unselected-button"
          @click="emit('toggleForm')"
        >
          {{ loginSelected ? 'Sign up' : 'Login' }}
        </button>
      </div>

    </div>
  </div>
</template>

