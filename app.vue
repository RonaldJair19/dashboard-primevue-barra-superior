<template>
  <div class="min-h-screen bg-gray-50">
    <TopNav />
    <SideNav />
    <main class="p-6 mt-16 ml-24">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div v-for="i in 3" :key="i" class="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h2 class="text-lg font-semibold mb-2 text-gray-700">Card {{ i }}</h2>
          <p class="text-gray-600">Content for card {{ i }}</p>
        </div>
      </div>
    </main>
  </div>
</template>