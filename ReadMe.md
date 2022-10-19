socket.io.js

- 흔히 사용하는 소켓모듈이며 두개의 모듈로 나뉜다
- socket.io - 서버단에서 사용
- socket.io-client - 클라이언트 단에서 사용됨

socket.io.js 같은 경우 websocket 프로토콜 기반으로 만들어진 모듈이며, 보다 많은 확장성을 가지고 있다.

- socket.io - 서버측에서 사용되는 라이브러리
- socket.io-client - 클라이언트 측에서 사용되는 라이브러리

nuxt-socket-io

- nuxt 환경에서 사용하는 소켓 모듈

vue-socket

- vue 에서 사용하는 소켓 모듈

nuxt-socket-io 같은 경우 client 소켓 모듈또한 포함되어있음

socket.io의 경우 버전별 client, server 호환 확인이 필요

- 테스트의 경우 서버가 버전2를 사용 하고 있었음
- server V2의 경우 client V2를 사용해주어야함
- 특정 명령어를 통해서 버전별 호환성을 강제로 허가해줄수 있지만, 이 경우 서버의 버전이 더 높아야함
- client의 버전이 더 높아서 호환이 안되는 경우는 해당되지 않음
- allowEIO3: true -- 해당 명령어를 통해서 버전 인가 가능

npm init -y

- package.json 파일을 기본 타입으로 생성해줌 - `-y` 미입력시 설정을 직접 진행

sha 암호화 js 사용
npm install js-sha512
해당 라이브러리를 사용

- 512, 256, 256 to 512 ...etc - 해쉬 암호화 기능을 다양하게 제공해줌
- npm install sha512 도 존재함
- 하지만 적용했을때 실제로 작동하지 않음
- 자세한 사항은 확인하지 못했지만, 미작동으로 인해서 위 라이브러리를 사용함

### 주의사항

** socket.io.js **

- transports 확인
- server, client version
- 버전별 호환성 확인 필요
- fs

```java
ws프로토콜을 이용하는 양방향 통신방식이다.
ws프로토콜은 한번 연결되면 "연결을 끊지 않고 계속 유지" 한 상태로 "클라이언트와 서버가 서로 데이터를 주고 받는다"
따라서 서버 하나에 여러 클라이언트가 붙어서 지속적으로 데이터를 주고 받아야하는 서비스에 유용하다.
```

** HTTP 통신의 경우, 클라이언트가 요청을 하고 서버가 응답을 하면 바로 연결이 끊어진다. **

```java
# ws 모듈
1. ws 모듈이란?
    : 간단한 웹소켓 통신을 구현하기 위한 모듈이다.
    * 참고: socket.io라는 모듈을 사용하면, WebSocket이 지원되지 않는 브라우저에서도 여러가지 방식을 동원해 비슷하게 구현해준다.(+편의기능 제공)
    * socket.io에 대한 글 참고: [node.js] socket.io 웹 소켓 모듈 기본 사용 방법
 
2. ws사용 방법
    - 기본 구조는 서버측 WebSocket과 클라이언트(브라우저)측 WebSocket이 통신을 하는 구조다.
    - 서버측 WebSocket은 node.js환경에서 ws모듈을 통해 생성해 준다.
    - 클라이언트측 WebSocket은 브라우저 환경에서 지원되는 WebSocket객체를 생성해 준다.
    - 서버측 WebSocket 생성시, HTTP서버를 연결해주면 PORT를 공유하며 작동을 시작한다.
    - 클라이언트측 WebSocket 생성시, 접속할 WebSocket서버 주소를 연결해주면 통신을 시작한다.
    - 기본적인 연결 상태 체크와 데이터 송수신은 이벤트 기반으로 동작된다.
    - 서버/클라이언트 연결시 connection이벤트가 발생하며, 데이터를 주고 받을 때마다 message이벤트가 발생한다.
```
