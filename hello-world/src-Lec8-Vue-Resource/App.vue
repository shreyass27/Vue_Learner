<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3"></div>
      <h1>Http</h1>
      <div class="form-group">
        <label>Node Name</label>
        <input type="text" class="form-control" v-model="nodeName" />
      </div>
      <div class="form-group">
        <label>Username</label>
        <input type="text" class="form-control" v-model="user.userName" />
      </div>
      <div class="form-group">
        <label>Mail</label>
        <input type="text" class="form-control" v-model="user.email" />
      </div>
      <button class="btn btn-primary" @click="submitForm">Submit</button>
      <hr />
      <button class="btn btn-primary" @click="fetchData">Fetch Data</button>
      <br />
      <ul class="list-group">
        <li
          class="list-group-item"
          v-for="user in users"
          :key="user.id"
        >{{user.userName}} - {{user.email}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      resource: null,
      nodeName: "data",
      user: {
        userName: "",
        email: ""
      },
      users: []
    };
  },
  methods: {
    submitForm: async function() {
      try {
        const response = await this.resource.save(
          // Passing value for Template Url key.
          { node: this.nodeName },
          this.user
        );
        // const altRes = await this.resource.saveAlt(this.users);
        // this.$http can also be used for calling network API calls.
        console.log({ response });
      } catch (e) {
        console.log(e);
      }
    },
    fetchData: async function() {
      try {
        const response = await this.resource.get({ node: this.nodeName });
        const userData = await response.json();

        let users = [];
        for (let key in userData) {
          users = [
            ...users,
            {
              id: key,
              ...userData[key]
            }
          ];
        }
        this.users = users;
      } catch (e) {
        console.log(e);
      }
    }
  },
  created() {
    // Adding Custom Acctions like save
    const customActions = {
      saveAlt: { method: "POST", url: "newTag.json" }
    };

    // Template Url
    this.resource = this.$resource("{node}.json", {}, customActions);
  }
};
</script>

<style>
</style>
