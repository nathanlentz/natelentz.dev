<template>
  <div class="author">
    <g-image src="~/assets/image/italy.jpg" width="100" class="profile"/>
    <p>Nate Lentz</p>
  </div>
</template>

<script>
  export default {
    name: 'Author',
    props: {
      name: String,
    },
  }
</script>

<style lang="scss" scoped>
.author {
  display: flex;
}

.profile {
  border-radius: 50%;
  margin-right: 5px;
}
</style>