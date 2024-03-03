<script setup>
// Remove the unused import statement for ref

function togglePopover(open, close) {
  if (open)
    close()
}
</script>

<template>
  <nav>
    <header
      class="shadow-sm fixed h-14 z-50 top-0 w-full  bg-slate-50 dark:bg-slate-900"
    >
      <div class="max-w-6xl flex justify-between h-14 mx-auto">
        <a rel="noopener noreferrer" href="/" aria-label="Back to homepage" title="Home" class="flex items-center">

          <!-- <Logo /> -->
          <div class="pl-2 font-semibold">
            SDN Teja II
          </div>
        </a>

        <div class="flex items-center">
          <div class="hidden lg:block">
            <ContentNavigation v-slot="{ navigation }">
              <ul class="flex space-x-2">
                <li v-for="link of navigation" :key="link._path">
                  <NuxtLink
                    :title="link.title"
                    class="w-full flex  px-1 py-1" :to="link._path"
                  >
                    <span class="underline-fx" /> {{ link.title }}
                  </NuxtLink>
                </li>
              </ul>
              <div />
            </ContentNavigation>
          </div>
          <div class="flex justify-end ml-4">
            <UTooltip text="Dark Mode">
              <DarkMode />
            </UTooltip>
            <!-- <UTooltip text="Pencarian">
              <DocsSearchButton />
            </UTooltip> -->
          </div>
          <div class="lg:hidden overflow-auto">
            <UPopover :popper="{ placement: 'top-end' }">
              <UButton color="gray" variant="ghost" trailing-icon="i-ph-list-duotone" />
              <template #panel="{ open, close }">
                <div
                  class="p-4 bg-slate-50 dark:bg-slate-950"
                >
                  <ContentNavigation v-slot="{ navigation }">
                    <ul class="flex flex-col  ">
                      <li v-for="link of navigation" :key="link._path" class="flex my-1 border-2   mx-2 py-1">
                        <NuxtLink
                          class=" " :to="link._path"
                          @click="togglePopover(open, close)"
                        >
                          <span class="underline-fx" /> {{ link.title }}
                        </NuxtLink>
                      </li>
                    </ul>
                  </ContentNavigation>
                </div>
              </template>
            </UPopover>
          </div>
        </div>
      </div>
    </header>
  </nav>
</template>

<style scoped>
a.router-link-active {
  color: #e53e3e;
  font-weight: bold;
}

nav ul a {
  position: relative;
  .underline-fx {
    position: absolute;
    bottom: -1px;
    width: 0;
    height: 1px;
    background-color: #e53e3e;
    transition: width 200ms ease-in-out;
  }

  &:hover .underline-fx {
    width: 90%;
  }
}
</style>
