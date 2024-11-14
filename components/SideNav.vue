<template>
  <div class="sidebar-container">
    <div class="sidebar" :class="{ expanded: isExpanded }" @mouseenter="isExpanded = true" @mouseleave="isExpanded = false">
      <div class="flex flex-col h-full">
        <div class="logo-section">
          <div class="logo-container">
            <img src="/logo.svg" alt="Logo" class="w-8 h-8" />
          </div>
        </div>
        <nav class="flex-1 px-3 py-4">
          <div v-for="item in menuItems" 
               :key="item.label" 
               class="menu-item" 
               :title="item.label">
            <i :class="item.icon"></i>
            <span class="menu-label">{{ item.label }}</span>
          </div>
        </nav>
      </div>
    </div>
  </div>
</template>

<script setup>
const isExpanded = ref(false)

const menuItems = [
  { label: 'Dashboard', icon: 'pi pi-home' },
  { label: 'Analytics', icon: 'pi pi-chart-line' },
  { label: 'Users', icon: 'pi pi-users' },
  { label: 'Settings', icon: 'pi pi-cog' }
]
</script>

<style scoped>
.sidebar-container {
  @apply fixed left-0 top-0 h-screen p-4 pointer-events-none;
  @apply pt-20;
  width: 280px;
}

.sidebar {
  @apply h-full bg-white shadow-lg rounded-2xl pointer-events-auto;
  @apply transition-all duration-300 ease-in-out;
  @apply border border-gray-100;
  width: 72px;
}

.sidebar.expanded {
  width: 100%;
}

.logo-section {
  @apply p-4 border-b border-gray-100;
}

.logo-container {
  @apply flex items-center justify-center h-10 w-10 rounded-xl bg-emerald-50;
}

.menu-item {
  @apply flex items-center px-4 py-3 my-1 rounded-xl cursor-pointer;
  @apply transition-all duration-200;
  @apply text-gray-600 hover:text-emerald-600 hover:bg-emerald-50;
}

.menu-item i {
  @apply text-xl min-w-[24px];
}

.menu-label {
  @apply ml-4 font-medium text-sm whitespace-nowrap overflow-hidden transition-all duration-300;
  opacity: 0;
  transform: translateX(-10px);
}

.expanded .menu-label {
  opacity: 1;
  transform: translateX(0);
}
</style>