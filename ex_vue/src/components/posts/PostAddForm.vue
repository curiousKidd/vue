<template>
  <div class="contents">
    <h1 class="page-header">생성 페이지</h1>
    <div class="form-wrapper">
      <form class="form" @submit.prevent="submitForm">
        <div>
          <label for="title">Title: </label>
          <input type="text" id="title" v-model="title" />
        </div>
        <div>
          <label for="contents">contents</label>
          <textarea type="text" id="contents" rows="5" v-model="contents" />
          <p v-if="isContentsValid" class="validation-text warning">
            Contents must be less than 200
          </p>
        </div>
        <button type="submit" class="btn">
          Create
        </button>
      </form>
      <p class="log">{{ errorMessage }}</p>
    </div>
  </div>
</template>

<script>
import { createPost } from '@/api/posts';
export default {
  data() {
    return {
      title: '',
      contents: '',
      errorMessage: '',
    };
  },
  computed: {
    isContentsValid() {
      return this.contents.length >= 200;
    },
  },
  methods: {
    async submitForm() {
      try {
        const postData = {
          title: this.title,
          contents: this.contents,
        };
        await createPost(postData);
        this.$router.push('/main');
      } catch (error) {
        this.errorMessage = error.response.data.message;
      }
    },
  },
};
</script>

<style scoped>
.form-wrapper .form {
  whidth: 100%;
}

.btn {
  color: white;
}
</style>
