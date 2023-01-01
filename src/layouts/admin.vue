<template>
  <Navbar :is-absolute="true" />
  <div class="flex min-h-screen pt-20">
    <Sidebar />
    <div class="mx-auto w-full p-4">
      <RouterView />
    </div>
  </div>
</template>
