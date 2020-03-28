<template>
  <div class="container">
    <form @submit.prevent="submitForm" v-if="!isSubmitted">
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
          <!-- Exercise 1 -->
          <!-- Create a Signup Form where you retrieve the following Information -->
          <!-- Full Name (First Name + Last Name) -->
          <!-- Mail -->
          <!-- Password -->
          <!-- Store Data? Yes/No -->

          <!-- Exercise 2 -->
          <!-- Only display the Form if it has NOT been submitted -->
          <!-- Display the Data Summary ONCE the Form HAS been submitted -->

          <!-- Exercise 3 -->
          <!-- Edit the Example from above and create a custom "Full Name" Control -->
          <!-- which still holds the First Name and Last Name Input Field -->
        </div>
      </div>

      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
          <h1>Signup</h1>
          <hr />
          <!-- Custom Component with two way data binding -->
          <Input v-model="userData.firstName" label="First Name" />
          <div class="form-group">
            <label for="age">First Name</label>
            <input
              v-model.lazy="userData.firstName"
              type="text"
              id="firstName"
              class="form-control"
            />
          </div>
          <div class="form-group">
            <label for="age">Last Name</label>
            <input v-model.lazy="userData.lastName" type="text" id="lastName" class="form-control" />
          </div>
          <div class="form-group">
            <label for="email">Mail</label>
            <input v-model="userData.email" type="text" id="email" class="form-control" />
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input
              v-model.lazy="userData.password"
              type="password"
              id="password"
              class="form-control"
            />
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
          <div class="form-group">
            <label for="sendmail">
              <input v-model="storeData" type="checkbox" id="sendmail" value="storeData" /> Store Data
            </label>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
          <button class="btn btn-primary">Submit</button>
        </div>
      </div>
    </form>
    <div class="row" v-else>
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h4>Your Data</h4>
          </div>
          <div class="panel-body">
            <p>Full Name: {{userData.firstName}} {{userData.lastName}}</p>
            <p>Mail: {{userData.email}}</p>
            <p>Password: {{userData.password}}</p>
            <p>Store in Database?: {{storeData}}</p>
          </div>
        </div>
      </div>
    </div>
    <hr />
  </div>
</template>

<script>
import Input from "./components/Input";
export default {
  components: {
    Input
  },
  data() {
    return {
      userData: {
        firstName: "",
        lastName: "",
        email: "",
        password: ""
      },
      storeData: false,
      isSubmitted: false
    };
  },
  methods: {
    submitForm() {
      this.isSubmitted = true;
    }
  }
};
</script>

<style>
</style>
