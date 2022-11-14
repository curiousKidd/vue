import axios from 'axios';
import { setInterceptors } from './common/interceptors';

function createInstance() {
  return axios.create({
    baseURL: process.env.VUE_APP_API_URL,
  });
}

function createInstanceWithAuth(url) {
  // 아래 내용은 데이터를 요청할 때마다, 아래 값들이 붙어 요청된다.
  const instance = axios.create({
    baseURL: `${process.env.VUE_APP_API_URL}${url}`,
  });
  return setInterceptors(instance);
}
export const instance = createInstance();

export const posts = createInstanceWithAuth('posts');
