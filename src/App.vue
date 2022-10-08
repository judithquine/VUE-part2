<script>
export default {};
</script>

<template>
  <div class="sidebar">
    <header>
      <ul>
        <li><router-link to="/contacts"> Go to Contacts </router-link></li>
        <li><router-link to="/aboutUs"> Go to About Us </router-link></li>
      </ul>
    </header>
  </div>

  <div class="content">
    <router-view></router-view>
  </div>
</template>

<style>
.sidebar {
  border-right: 1px solid gray;
  margin-right: 25px;
  width: 100%;
  grid: flex;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding: 16px;
  height: 100vh;
  display: flex;
}
.content {
  padding: 16px;
  width: 100%;
}
.list {
  padding: 0;
}
.link {
  list-style: none;
}
* {
  box-sizing: border-box;
}

.routes {
  width: 200px;
  padding: 16px;
  border-right: 1px solid #f2f2f2;
}

.content ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

.content li {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 1rem auto;
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}

.content h2 {
  font-size: 2rem;
  border-bottom: 4px solid #ccc;
  color: #58004d;
  margin: 0 0 1rem 0;
}

.content button {
  font: inherit;
  cursor: pointer;
  border: 1px solid #ff0077;
  background-color: #ff0077;
  color: white;
  padding: 0.05rem 1rem;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.26);
}

.content button:hover,
.content button:active {
  background-color: #ec3169;
  border-color: #ec3169;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.26);
}
</style>
