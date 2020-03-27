<template>
  <div class="container">
    <form>
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
          <h1>File a Complaint</h1>
          <hr />
          <div class="form-group">
            <label for="email">Mail</label>
            <input v-model="userData.email" type="text" id="email" class="form-control" />
          </div>

          <!-- Custom components can be built with "value" prop and "input" event emit -->
          <!-- v-model can be used with these components for binding -->
          <!-- <input :value="userData.email"
          @input="userDate.email = $event.target.value"
          type="text" id="email" class="form-control" /> -->
          <div class="form-group">
            <label for="password">Password</label>
            <input
              v-model.lazy="userData.password"
              type="password"
              id="password"
              class="form-control"
            />
          </div>
          <div class="form-group">
            <label for="age">Age</label>
            <input v-model.lazy.number="userData.age" type="number" id="age" class="form-control" />
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 form-group">
          <label for="message">Message</label>
          <br />
          <!-- Interpolation between <textarea>{{ test }}</textarea> doesn't work!-->
          <textarea v-model.lazy="message" id="message" rows="5" class="form-control"></textarea>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
          <div class="form-group">
            <label for="sendmail">
              <input v-model="sendMail" type="checkbox" id="sendmail" value="SendMail" /> Send Mail
            </label>
            <label for="sendInfomail">
              <input v-model="sendMail" type="checkbox" id="sendInfomail" value="SendInfoMail" /> Send Infomail
            </label>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 form-group">
          <label for="male">
            <input v-model="gender" type="radio" id="male" value="Male" /> Male
          </label>
          <label for="female">
            <input v-model="gender" type="radio" id="female" value="Female" /> Female
          </label>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 from-group">
          <label for="priority">Priority</label>
          <select v-model="selectedPriority" id="priority" class="form-control">
            <option v-for="pri in priorities" :key="pri">{{pri}}</option>
          </select>
        </div>
      </div>
      <hr />
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
          <button class="btn btn-primary">Submit!</button>
        </div>
      </div>
    </form>
    <hr />
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h4>Your Data</h4>
          </div>
          <div class="panel-body">
            <p>Mail: {{userData.email}}</p>
            <p>Password: {{userData.password}}</p>
            <p>Age: {{userData.age}}</p>
            <p>Message: {{message}}</p>
            <p>
              <strong>Send Mail?</strong>
              <ul>
                  <li v-for="mail in sendMail" :key="mail"> {{mail}} </li>  
              </ul>
            </p>
            <ul>
              <li></li>
            </ul>
            <p>Gender: {{gender}} </p>
            <p>Priority: {{selectedPriority}} </p>
            <p>Switched:</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userData: {
        email: "",
        password: "",
        age: 25
      },
      message: "A new Text",
      sendMail: [],
      gender: 'Male',
      selectedPriority: 'Medium',
      priorities: ['High', 'Medium', 'Low']
    };
  }
};
</script>

<style>
</style>
