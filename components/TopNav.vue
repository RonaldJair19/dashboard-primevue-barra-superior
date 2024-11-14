<template>
  <div class="top-nav">
    <div class="nav-content">
      <h1 class="text-xl font-semibold text-gray-800">Dashboard</h1>
      
      <div class="flex items-center gap-4">
        <div class="flex items-center gap-2">
          <span class="text-sm text-gray-600">John Doe</span>
          <Button 
            icon="pi pi-angle-down"
            class="p-button-text p-button-rounded"
            @click="toggleMenu"
            aria-haspopup="true"
            aria-controls="user-menu" />
          
          <Avatar 
            image="https://api.dicebear.com/7.x/avataaars/svg?seed=John" 
            shape="circle"
            class="cursor-pointer"
            @click="toggleMenu" />
        </div>
        
        <Menu 
          id="user-menu"
          ref="menu"
          :model="menuItems"
          :popup="true"
          class="w-48" />
      </div>
    </div>
  </div>
</template>

<script setup>
const menu = ref()

const menuItems = [
  {
    label: 'Mi Perfil',
    icon: 'pi pi-user'
  },
  {
    label: 'Configuración',
    icon: 'pi pi-cog'
  },
  {
    separator: true
  },
  {
    label: 'Cerrar Sesión',
    icon: 'pi pi-power-off'
  }
]

const toggleMenu = (event) => {
  menu.value.toggle(event)
}
</script>

<style scoped>
.top-nav {
  @apply fixed top-0 right-0 left-0 z-50;
  @apply bg-white border-b border-gray-100;
  height: 64px;
}

.nav-content {
  @apply flex items-center justify-between h-full px-6 pl-28;
  @apply max-w-[2000px] mx-auto;
}
</style>