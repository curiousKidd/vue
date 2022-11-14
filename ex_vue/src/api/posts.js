// 학습 노트 조작과 관련된 CRUD API 함수 파일
import { posts } from './index';

function fetchPosts() {
  return posts.get('/');
}

function getPost(postId) {
  return posts.get(postId);
}

function editPost(postData) {
  return posts.put(postData._id, postData);
}

function createPost(postData) {
  return posts.post('/', postData);
}

function deletePost(postId) {
  return posts.delete(postId);
}

export { fetchPosts, createPost, deletePost, getPost, editPost };
