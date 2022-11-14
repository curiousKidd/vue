👉 **axios를 통한 회원가입 페이지 개발**

```jsx
npm i axios
```

위 내용을 입력하면 **package.json의 dependencies**에 추가가된다.

```jsx
{
  "name": "vue-til",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "serve": "vue-cli-service serve",
    "build": "vue-cli-service build",
    "test:unit": "vue-cli-service test:unit",
    "lint": "vue-cli-service lint"
  },
  "dependencies": {
    "axios": "^0.27.2", // axios 
    "core-js": "^3.4.4",
    "vue": "^2.6.10",
    "vue-router": "^3.5.3",
		"vuex": "^4.0.2"
  },
  "devDependencies": {
    "@vue/cli-plugin-babel": "^4.1.0",
    "@vue/cli-plugin-eslint": "^4.1.0",
    "@vue/cli-plugin-unit-jest": "^4.1.0",
    "@vue/cli-service": "^4.1.0",
    "@vue/eslint-config-prettier": "^5.0.0",
    "@vue/test-utils": "1.0.0-beta.29",
    "babel-eslint": "^10.0.3",
    "eslint": "^5.16.0",
    "eslint-plugin-prettier": "^3.1.1",
    "eslint-plugin-vue": "^5.0.0",
    "prettier": "^1.19.1",
    "vue-template-compiler": "^2.6.10"
  }
}
```

- npm run build로 배포할 경우 **dependencies**는 포함되지만
- **devDependencies**는 포함되지 않는다

👉 **회원가입페이지 개발**

1. src/views/SignupPage.vue에 src/components/SignupForm.vue를 등록한다.

   ```jsx
   <template>
     <div>
       <h1>회원가입 페이지</h1>
       <SignupForm></SignupForm>
     </div>
   </template>
   
   <script>
   import SignupForm from '@/components/SignupForm.vue';
   export default {
     components: {
       SignupForm,
     },
   };
   </script>
   
   <style></style>
   ```

2. src/api/index.js를 만들어서 api axios를 등록한다

   ```jsx
   import axios from 'axios';
   
   function registerUser(userData) {
     const url = '<http://localhost:3000/signup>';
     return axios.post(url, userData);
   }
   
   export { registerUser };
   ```

3. SignupForm.vue에 회원가입 기능을 만든다.

   ```jsx
   <template>
     <form @submit.prevent="submiteForm">
       <!-- @submit.prevent 하면 submit후에 새로고침 막아준다 -->
       <div>
         <label for="username">id: </label>
         <input type="text" id="username" v-model="username" />
       </div>
   
       <div>
         <label for="password">password: </label>
         <input type="password" id="password" v-model="password" />
       </div>
   
       <div>
         <label for="nickname">nickname: </label>
         <input type="text" id="nickname" v-model="nickname" />
       </div>
       <button type="submit">회원 가입</button>
       <p>{{ logMessage }}</p>
     </form>
   </template>
   ```

   - username, password, nickname을 입력 후 submit한 경우 버블현상으로 form의 \@submit.prevent=”submitForm”메소드를 타게된다.
     - \@submit.prevent를 사용하면 새로고침X
     - submitForm은 script의 method에 정의되어있다.
   - v-model은 script의 data와 연결
   - 회원가입 완료 후 {{ logMessage }}를 통해 메시지를 표시

   ```jsx
   <script>
   import { registerUser } from '@/api/index';
   export default {
     data() {
       return {
         // form values
         username: '',
         password: '',
         nickname: '',
   
         // log
         logMessage: '',
       };
     },
     methods: {
       async submiteForm() {
         console.log('폼 제출');
         const userData = {
           username: this.username,
           password: this.password,
           nickname: this.nickname,
         };
         const { data } = await registerUser(userData);
         console.log(data.username);
         this.logMessage = `${data.username}님이 가입되었습니다`;
         this.initForm;
       },
       initForm() {
         this.username = '';
         this.password = '';
         this.nickname = '';
       },
     },
   };
   </script>
   ```

   - import { registerUser } from '@/api/index';를 통해 registerUser function을 가져온다
