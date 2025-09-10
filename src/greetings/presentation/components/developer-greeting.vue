<script setup lang="js">

import {computed} from "vue";
import {Developer} from "../../domain/model/developer.entity.js";

const props = defineProps(['firstName', 'lastName']);

const greeting = computed(() => {
  if (!props.firstName?.trim() || !props.lastName?.trim()) {
    return 'Welcome Anonymus Developer';
  }
  const developer = new Developer(props.firstName, props.lastName);
  return `Congrats ${developer.fullName}! Now you are a registered developer.`;
});


</script>

<template>
  <p>{{ greeting }}</p>
</template>

<style scoped>

</style>