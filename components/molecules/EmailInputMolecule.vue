<template>
  <div class="email-input-molecule">
    <TextInputAtom
      :iconSrc="emailIcon"
      type="email"
      placeholder="Email Address"
      :value="email"  
      @input="updateEmail"  
    />
  </div>
</template>

<script>
import TextInputAtom from '@/components/atoms/TextInputAtom.vue';
import emailIcon from '@/assets/email-icon.png'; // Import the image

export default {
  components: { TextInputAtom },
  props: {
    modelValue: { // Accept modelValue prop for v-model
      type: String,
      default: '',
    },
  },
  data() {
    return {
      emailIcon, // Use the imported image as a data property
    };
  },
  methods: {
    updateEmail(value) {
      this.$emit('update:modelValue', value); // Emit the updated value
    },
  },
};
</script>

<style scoped>
.email-input-molecule {
  margin-bottom: 20px;
  width: 400px;
}
</style>
