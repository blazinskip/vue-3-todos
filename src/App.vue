<template>
  <div class="flex flex-col w-screen h-screen bg-gray-900">
    <main
      class="w-full h-full max-w-3xl px-4 py-6 mx-auto bg-gray-700 lg:w-3/5"
    >
      <router-view />
    </main>
  </div>
</template>

<style lang="scss">
@tailwind base;
@tailwind components;
@tailwind utilities;

html,
body {
  height: 100%;
}
</style>
