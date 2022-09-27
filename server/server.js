const app = require("express");
const http = require("http").Server(app);
const io = require("socket.io")(http, {
  cors: {
    origin: "*", 
    // cors 오류 방지 -> 반영할때에는 수정 요망
    // https://stackoverflow.com/questions/24058157/socket-io-node-js-cross-origin-request-blocked
  },
});

//http는 82번 포트를 사용한다.
http.listen(8080, function () {
  console.log("8080 연결");
});

io.on("connection", (socket) => {
  //웹 소켓 연결 시
  const req = socket.request;
  const ip = req.headers["x-forwarded-for"] || req.connection.remoteAddress;
  console.log("새로운 클라이언트 접속 !!", ip, socket.id);

  socket.on("disconnect", () => {
    //연결 종료 시
    console.log("클라이언트 접속 해제", ip, socket.id);
    clearInterval(socket.interval);
  });
  socket.on("error", (error) => {
    //에러 시
    console.error("socket.io Error : ", error);
  });
  socket.on("reply", (data) => {
    //클라이언트로부터 메시지 수신 시
    console.log("클라이언트로부터 받은 메시지 : ", data);
  });
  socket.on("nuxt", (data) => {
    console.log("nuxt 웹에서 받은 메세지 : ", data);
    socket.emit("news", "Hello Socket.IO!!");
  });
  //   socket.interval = setInterval(() => {
  //     //3초마다 클라이언트로 메시지 전송
  //     socket.emit("news", "Hello Socket.IO!!");
  //   }, 3000);

  console.log("8080 포트 접속");
});