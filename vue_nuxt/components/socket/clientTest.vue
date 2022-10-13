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
// import io from 'socket.io-client'

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
        allowEIO3: true, // 버전의 호환성을 사용하는지 묻는 설정값
      })

      // socket.io.js를 선언해서 사용할 경우 사용법
      // this.socket = io('http://localhost:8080')

      this.socket.on('connect', (msg) => {
        console.log('socket connect!')
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
