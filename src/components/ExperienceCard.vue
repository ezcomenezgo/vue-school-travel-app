<template>
  <div class="cards">
    <router-link
      v-for="experience in experiences"
      :key="experience.slug"
      :to="{
        name: 'experience.show',
        params: { experienceSlug: experience.slug },
      }"
    >
      <div class="card">
        <img :src="`/images/${experience.image}`" :alt="experience.name" />
        <span class="card_text">
          {{ experience.name }}
        </span>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  props: {
    experiences: {
      Type: Array,
      required: true,
    },
  },
};
</script>
