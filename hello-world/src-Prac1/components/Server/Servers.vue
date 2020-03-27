<template>
  <div class="row">
    <div class="col-xs-12 col-sm-6">
      <ul class="list-group">
        <Server
          v-for="server in servers"
          :key="server.id"
          :id="server.id"
          :status="server.status"
          @select="onSelectServer(server)"
        />
      </ul>
    </div>

    <ServerDetails :changeStatus="onSetStatus" :server="selectedServer" />
  </div>
</template>

<script>
import ServerDetails from "./ServerDetails";
import Server from "./Server";

function randomInt() {
  return Math.random() * 10;
}

export default {
  components: {
    ServerDetails,
    Server
  },
  data: () => ({
    servers: [
      { id: randomInt(), status: "Normal" },
      { id: randomInt(), status: "Critical" },
      { id: randomInt(), status: "Unknown" },
      { id: randomInt(), status: "Normal" }
    ],
    selectedServer: null
  }),
  methods: {
    onSelectServer(server) {
      this.selectedServer = { ...server };
    },
    onSetStatus() {
      const index = this.servers.findIndex(
        serv => serv.id === this.selectedServer.id
      );

      this.servers[index]["status"] = "Normal";
      this.selectedServer.status = "Normal"
    }
  }
};
</script>

<style scoped>
</style>