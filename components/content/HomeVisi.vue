import type { UContainer } from '#build/components';
<!-- eslint-disable vue/no-unused-vars -->
<!-- eslint-disable vue/no-unused-vars -->
<script setup>
const items = [
  {
    label: 'Visi',
    slot: 'visi',
    icon: 'i-ph-broadcast-duotone',
  },
  {
    label: 'Tujuan',
    slot: 'tujuan',
    icon: 'i-ph-target-duotone',
  },
  {
    label: 'Misi',
    slot: 'misi',
    icon: 'i-ph-chart-line-up-duotone',
  },
]
</script>

<template>
  <UContainer class="py-16">
    <UTabs :items="items" class="w-full">
      <template #default="{ item, selected }">
        <div class="flex items-center gap-2 relative truncate">
          <UIcon :name="item.icon" class="w-4 h-4 flex-shrink-0" />

          <span class="truncate"> {{ item.label }}</span>

          <span v-if="selected" class="absolute -right-4 w-2 h-2 rounded-full bg-primary-500 dark:bg-primary-400" />
        </div>
      </template>
      <template #misi>
        <div
          data-aos="fade-up" data-aos-anchor-placement="top-bottom"
          class="px-6 bg-slate-100 shadow dark:bg-slate-900 py-2 rounded-md"
        >
          <div class="p-4">
            <ol class="list-decimal space-y-2">
              <li>
                Untuk mencapai visi tersebut melalui misi sebagai berikut:
              </li>
              <li>
                Menciptakan lingkungan sekolah yang bernuansa agamis, bersih dan sehat
              </li>
              <li>
                Meningkatkan kegiatan ibadah melalui kegiatan kultum dan Shalat berjamaah
              </li>
              <li>
                Mengoptimalkan guru profesional dan berdedikasi tinggi sehingga peserta didik mempunyai kompetensi yang
                baik dan berkarakter
              </li>
              <li>
                Menyelenggarakan pendidikan, pelatihan dan pembinaan berdasarkan bakat, minat dan kreativitas peserta
                didik melalui ekstrakurikuler
              </li>
              <li>
                Meningkatkan prestasi peserta didik degan mengoptimalkan proses pembelajaran yang efektif dan efisien.
              </li>
            </ol>
          </div>
        </div>
      </template>
      <template #tujuan>
        <div
          data-aos="fade-up" data-aos-anchor-placement="top-bottom"
          class="px-6 bg-slate-100 shadow dark:bg-slate-900 py-2 rounded-md"
        >
          <div class="p-4">
            <ol class="list-decimal space-y-2">
              <li>Terciptanya lingkungan yang agamis, bersih dan sehat</li>
              <li> Meningkatnya ketakwaan peserta didik terhadap Tuhan Yang Maha Esa</li>
              <li> Berkembangnya profesionalisme tenaga pendidik</li>
              <li> Terbentuknya pribadi peserta didik yang cerdas, terampil, kreatif, aktif dan berkarakter</li>
              <li> Meningkatnya jumlah peserta didik yang melanjutkan pendidikan ke jenjang yang lebih tinggi</li>
            </ol>
          </div>
        </div>
      </template>
      <template #visi>
        <div data-aos="fade-up" class="px-6 bg-slate-100 shadow dark:bg-slate-900 py-2 rounded-md">
          <div class="p-4">
            Terwujudnya pribadi yang beriman dan bertakwa kepada Tuhan Tang Maha Esa, berilmu, berkarakter, terampil,
            kreatif dan berprestasi
          </div>
        </div>
      </template>
    </UTabs>
  </UContainer>
</template>
