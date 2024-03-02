<script setup lang="ts">
const items = [
  'https://picsum.photos/1920/1080?random=1',
  'https://picsum.photos/1920/1080?random=2',
  'https://picsum.photos/1920/1080?random=3',
  'https://picsum.photos/1920/1080?random=4',
  'https://picsum.photos/1920/1080?random=5',
  'https://picsum.photos/1920/1080?random=6',
]

const carouselRef = ref()

onMounted(() => {
  setInterval(() => {
    if (!carouselRef.value)
      return

    if (carouselRef.value.page === carouselRef.value.pages)
      return carouselRef.value.select(0)

    carouselRef.value.next()
  }, 3000)
})
</script>

<template>
  <div>
    <!-- Hero -->
    <div class="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Grid -->
      <div class="grid md:grid-cols-2 gap-6">
        <div class="">
          <UCarousel
            ref="carouselRef"
            v-slot="{ item }"
            :items="items"
            :ui="{ item: 'basis-full' }"
            class="rounded-lg overflow-hidden"
            indicators
          >
            <NuxtImg :src="item" class="w-full h-[300px]" draggable="false" />
          </UCarousel>
        </div>
        <div class="">
          <h2 class="block text-xl  text-gray-800  md:text-2xl  dark:text-white">
            Build Better Products
          </h2>

          <!-- Brands -->
          <ul>
            <li>
              fasiliyas
            </li>
            <li>
              fasiliyas
            </li>
            <li>
              fasiliyas
            </li>
            <li>
              fasiliyas
            </li>
          </ul>
          <!-- End Brands -->
        </div>
        <!-- End Col -->

        <!-- End Col -->
      </div>
      <!-- End Grid -->
    </div>
    <!-- End Hero -->
  </div>
</template>
