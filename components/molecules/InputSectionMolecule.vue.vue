<template>
  <div class="input-section">
    <InputAtom
      :iconSrc="iconSrc"
      :type="'password'"
      v-model="password"
      :placeholder="'Password'"
    />
    <TextAtom text="Forgot Password" @click="forgotPassword" />
  </div>
</template>

<script>
import InputAtom from '@/components/atoms/InputAtom.vue';
import TextAtom from '@/components/atoms/TextAtom.vue';
import iconSrc from '@/assets/password-icon.png'
export default {
  components: {
    InputAtom,
    TextAtom,
  },
  data() {
    return {
      password: '',
      iconSrc,
    };
  },
  methods: {
    forgotPassword() {
      alert('Forgot Password Clicked');
    },
  },
};
</script>

<style>

</style>
 
