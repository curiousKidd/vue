<template>
  <v-card>
    <v-container fluid>
      <v-row no-gutters>
        <v-col cols="12">
          <div>test</div>
          <v-btn @click="test">text test</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      socket: null,
    }
  },
  mounted() {
    this.makeIO()
  },
  methods: {
    makeIO() {
      this.socket = this.$nuxtSocket({
        name: 'test',
        channel: '/',
      })
      this.socket.on('news', (msg) => {
        console.log('socket.io로부터 받은 메시지 : ', msg)
      })
    },
    test() {
      this.socket.emit('nuxt', 'testttttttttt!!!')
    },
  },
}
</script>
