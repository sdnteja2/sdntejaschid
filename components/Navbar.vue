<template>
  <nav>
    <ContentNavigation v-slot="{ navigation }">
      <UContainer>
        <div v-for="link of navigation" :key="link._path" class="flex flex-row space-x-2">
          <NuxtLink :to="link._path">
            {{ link.title }}
          </NuxtLink>
        </div>
      </UContainer>
    </ContentNavigation>
  </nav>
</template>
