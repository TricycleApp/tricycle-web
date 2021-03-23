<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
.menu {
  list-style-type: none;
  margin-right: auto;
  li a {
    color: white;
    font-weight: bold;
  }
}
.vitrine header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
}
</style>
