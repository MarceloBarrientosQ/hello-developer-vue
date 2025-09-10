<script setup>
import {ref} from "vue";
import {Developer} from "./greetings/domain/model/developer.entity.js";
import DeveloperRegistrarion from "./greetings/presentation/components/developer-registrarion.vue";
import DeveloperCountShow from "./greetings/presentation/components/developer-count-show.vue";
import DeveloperGreeting from "./greetings/presentation/components/developer-greeting.vue";

const firstName = ref('');
const lastName = ref('');
const developerCount = ref(0);
const hasRegistered = ref(false);

function updateRegisteredDeveloperInfo(developer) {
  firstName.value = developer.firstName;
  lastName.value = developer.lastName;
  hasRegistered.value = true;
  console.log('Developer registered', developer);
  updateDeveloperCount(developer);
}

function resetRegisteredDeveloperInfo() {
  firstName.value = '';
  lastName.value = '';
  hasRegistered.value = false;
  console.log('Developer registration reset');
}

function updateDeveloperCount(developer) {
  const dev = new Developer(developer.firstName, developer.lastName);

  if(dev.fullName !== 'Unknown'){
    developerCount.value++;
  }

  console.log('Developer count updated', developerCount.value);
}
</script>

<template>
  <h1>Hello Vue Developer App</h1>

  <developer-registrarion @developer-registered="updateRegisteredDeveloperInfo"
                          @registration-deferred="resetRegisteredDeveloperInfo" />

  <developer-greeting v-if="hasRegistered"
                      :first-name="firstName"
                      :last-name="lastName" />

  <developer-count-show :developer-count="developerCount" />
</template>

<style scoped>

</style>
