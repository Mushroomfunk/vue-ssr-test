<template>
  <div class="flex" v-if="data">
    <div class="filters">
      <ul>
        <li
          v-for="filter in data.page.content.filter.sections"
          :key="filter.headerTitle"
        >
          <ul>
            <h3>{{ filter.headerTitle }}</h3>
            <li v-for="category in filter.categories" :key="category.url">
              {{ category.title }}
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <div class="products">
      <div
        v-for="product in data.page.content.products"
        :key="product.id"
        class="product"
      >
        <img :src="`${product.imageUrls[0]}--product-card.jpg`" />
        <div>{{ product.brand.title }}</div>
        <div>{{ product.title }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useRoute, onBeforeRouteUpdate } from "vue-router";
import { getTheme } from "../api/api";

const route = useRoute();
const data = ref(route.params.data);

onBeforeRouteUpdate(async (to, from) => {
  try {
    const response = await getTheme(to.params.theme);
    data.value = response.data;
  } catch (e) {
    console.log(e);
  }
});
</script>

<style>
.flex {
  display: flex;
  justify-content: space-between;
}
ul {
  list-style: none;
}
.products {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.product {
  flex: 0 0 24%;
}
</style>
