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
