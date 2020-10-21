<template>
  <main class="w-1/2 mx-auto bg-gray-900 p-12">
    <router-view />
  </main>
</template>

<style lang="scss">
@tailwind base;
@tailwind components;
@tailwind utilities;

html,
body {
  height: 100%;
}

#app {
  @apply flex flex-col justify-center items-center bg-gray-800;
  height: 100%;
}

main {
  height: 800px;
}
</style>
