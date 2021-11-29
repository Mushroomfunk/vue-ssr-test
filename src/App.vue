<template>
  <div class="app">
    <ul class="flex">
      <li class="text-lg" v-for="nav in data.common.navigation" :key="nav.url">
        <router-link :to="{ name: 'Themes', params: { theme: nav.name } }">{{
          nav.title
        }}</router-link>
      </li>
    </ul>
    <router-view />
  </div>
</template>

<script setup>
import { getNavigation } from "./api/api";
import { useQuery } from "./composables/query.js";
const { data } = useQuery("example", async () => {
  const { data: result } = await getNavigation();
  return result;
});
</script>

<style>
.flex {
  display: flex;
  justify-content: space-around;
  list-style: none;
  margin-bottom: 40px;
}
.text-lg {
  font-size: 20px;
}
</style>
