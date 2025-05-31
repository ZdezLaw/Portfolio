<template>
  <router-view></router-view>
</template>

<script setup>
// No setup needed for the router view
</script>

<style>
/* Custom Scrollbar */
* {
  scrollbar-width: thin;
  scrollbar-color: #d4d43f #1a1a1a;
}

*::-webkit-scrollbar {
  width: 10px;
}

*::-webkit-scrollbar-track {
  background: #1a1a1a;
}

*::-webkit-scrollbar-thumb {
  background: #ffd700;
  border-radius: 5px;
}

*::-webkit-scrollbar-thumb:hover {
  background: #ffe44d;
}
</style>
