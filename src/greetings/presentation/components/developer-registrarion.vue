<script setup lang="ts">
import { ref } from 'vue';

const firstName = ref('');
const lastName = ref('');
const errorMessage = ref('');

const emit = defineEmits(['developer-registered', 'registration-deferred']);

function submitRegistrationRequest() {
  let submittedFirstName = firstName.value.toString().trim();
  let submittedLastName = lastName.value.toString().trim();

  if(submittedFirstName || submittedLastName){
    console.log('Registering developer');
    emit('developer-registered',
        {firstName: submittedFirstName,
              lastName: submittedLastName});
    clearFields();
  }else {
    console.log('Cannot register: Both fields are required');
    errorMessage.value = "Please provide at least first or last name.Both fields are required.";
  }
}

function deferRegistration() {
  console.log('Defer registration');
  emit('registration-deferred',
      {firstName: "", lastName: ""});
}

function clearFields() {
  firstName.value = '';
  lastName.value = '';
  errorMessage.value = '';
}

</script>

<template>
  <div>
    <h2>Developer Registration</h2>
    <div>
      <form v-on:submit.prevent="submitRegistrationRequest">
        <div class="field">
          <label for="first-name">First Name</label>
          <input id="first-name" type="text" v-model="firstName" placeholder="First Name" />
        </div>

        <div class="field">
          <label for="last-name">Last Name</label>
          <input id="last-name" type="text" v-model="lastName" placeholder="Last Name" />
        </div>

        <div class="actions">
          <button type="submit">Register</button>
          <button type="button" v-on:click="deferRegistration">Later</button>
          <button type="button" v-on:click="clearFields">Clear</button>
        </div>
      </form>
      <p v-if="errorMessage" class="error" role="alert">{{ errorMessage }}</p>
    </div>
  </div>
</template>

<style scoped>
  button {
    margin-right: 10px;
    padding: 8px 16px;
    cursor: pointer;
  }

  .error {
    color: red;
    margin-top: 10px;
    font-size: 14px;
  }

  .field {
    margin-bottom: 10px;
  }

  .actions {
    margin-bottom: 10px;
  }

  label {
    margin-right: 5px;
  }
</style>