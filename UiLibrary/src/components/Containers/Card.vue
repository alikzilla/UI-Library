<template>
  <div class="input-container">
    <div class="card" :style=" {width: size + 'px'} ">
      <div class="title">{{ title }}</div>
      <div class="content">{{ content }}</div>
    </div>
  </div>
</template>

<script>
  export default{
    props: {
      title: {
        type: String,
        default: 'title'
      },
      content: {
        type: String,
        default: 'content'
      },
      size: {
        type: Number,
        default: 50,
      },
    }
  }
</script>

<style scoped>
  .card{
    background-color: white;
    padding: 20px;
    display: flex;
    flex-direction: column;
    border-radius: 5px;
  }
  .title{
    font-size: 30px;
    font-weight: bold;
  }
  .content{
    font-size: 20px;
  }
</style>