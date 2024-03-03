<script setup>
defineProps({
  title: {
    type: String,
    default: 'Wujudkan Impian Pendidikan Berkualitas untuk Semua, Lingkungan Belajar yang Nyaman, Kreatif, dan Menyenangkan',
  },
  description: {
    type: String,
    default: 'Lingkungan Belajar yang Nyaman, Kreatif, dan Menyenangkan',
  },
  image: {
    type: String,
    default: '/img/dal.png',
  },
})
</script>

<template>
  <div class="svgkanan pt-20">
    <!-- Hero -->
    <UContainer class=" mx-auto ">
      <!-- Grid -->
      <div class="grid gap-8 items-center md:grid-cols-2">
        <div class="">
          <h1 class="block ">
            Selamat datang di website resmi <br> <span class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl ">SD Negeri Teja 2</span>
          </h1>
          <p class="mt-3 text-lg ">
            {{ title }}
          </p>
        </div>
        <div class=" mt-10 aspect-w-16 aspect-h-9   lg:mt-0">
          <NuxtImg
            class="w-full bg-cover  rounded-md  "
            height="1500"
            width="1500"
            src="https://images.unsplash.com/photo-1665686376173-ada7a0031a85?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=900&h=700&q=80"
            alt="Image Description"
          />
        </div>
        <!-- End Col -->
      </div>
      <!-- End Grid -->
    </UContainer>
    <!-- End Hero -->
  </div>
</template>
