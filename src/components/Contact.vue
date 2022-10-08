<script>
export default {
  data() {
    return {
      friends: [
        {
          id: "manuel",
          name: "Manuel Lorenz",
          phone: "01234 5678 991",
          email: "manuel@localhost.com",
        },
        {
          id: "julie",
          name: "Julie Jones",
          phone: "09876 543 221",
          email: "julie@localhost.com",
        },
      ],
    };
  },

  computed: {
    friend() {
      const friendName = this.$route.params.name;
      return this.friends.filter((item) => {
        return item.id === friendName;
      })[0];
    },
  },
};
</script>

<template>
  <div>
    <header>
      <h1>{{ friend.name }}</h1>
    </header>
  </div>
</template>