<template>
<div class="h-screen w-full bg-gray-50 relative flex overflow-hidden">

<!-- Sidebar -->
<aside class="h-full w-10 flex flex-col space-y-6 items-center justify-end pb-8 relative bg-[#212020] text-white">
  
  <div class="h-8 w-8 flex items-center justify-center rounded-lg cursor-pointer hover:text-gray-800 hover:bg-white  hover:duration-300 hover:ease-linear focus:bg-white">
    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd" /></svg>
  </div>

  <div class="h-8 w-8 flex items-center justify-center rounded-lg cursor-pointer hover:text-gray-800 hover:bg-white  hover:duration-300 hover:ease-linear focus:bg-white">
    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  </div>
</aside>



<div class="w-full h-full flex flex-col justify-between">
  
  <!-- Header -->
  <header class="h-16 w-full flex items-center relative justify-between pr-5 bg-[#212020]">
    <img src="@/assets/logo.png" alt="Logo" class=" w-28  md:w-32">

    <div class="flex flex-shrink-0 items-center space-x-2 md:space-x-4 text-white">
      <div class="flex flex-col items-end ">
        <div class="text-sm sm:text-xs font-bold ">Haroon Aslam</div>
        <div class="text-xs sm:text-xxs font-light">Lead Frontend Engineer</div>
      </div>
      
      <img src="@/assets/avatar.png" alt="Logo" class="h-8 w-8 md:h-10 md:w-10 cursor-pointer rounded-full">

    </div>
  </header>

  <!-- Main -->
  <main class="max-w-full h-full flex relative overflow-y-hidden ">
    <div class="h-full w-full m-1 md:m-4 flex flex-wrap items-start justify-start rounded-tl grid-flow-col auto-cols-max gap-4 overflow-y-auto">
      <router-view></router-view>

    </div>
  </main>
</div>

</div>
  </template>
  
  <script>
  
  export default {
    name: 'Layout-Main'
  }
  </script>
  
  <style scoped>

  </style>
  