<template>
  <section v-if="destination" class="destination">
    <h1>{{ destination.name }}</h1>
    <div class="destination-details">
      <img :src="`/images/${destination.image}`" :alt="destination.name" />
      <p>{{ destination.description }}</p>
    </div>
  </section>
  <section class="experiences">
    <h1>Top experiences in {{ destination.name }}</h1>
    <ExperienceCard :experiences="destination.experiences" />
  </section>
</template>

<script>
import sourceData from '@/data.json';
import ExperienceCard from '@/components/ExperienceCard.vue';

export default {
  components: {
    ExperienceCard,
  },
  // data() {
  //   return {
  //     destination: null,
  //   };
  // },
  props: {
    id: {
      Type: Number,
      required: true,
    },
  },
  computed: {
    destination() {
      return sourceData.destinations.find(
        (destination) => destination.id === this.id
      );
    },
  },

  // methods: {
  //   async initData() {
  //     const res = await fetch(
  //       `https://travel-dummy-api.netlify.app/${this.$route.params.slug}`
  //     );
  //     this.destination = await res.json();
  //   },
  // },

  // because of every destination use same component
  // so when using params to switch different destination
  // it won't change the different content
  // because the created hook is already used
  // async created() {
  //   this.initData();

  //   // first solution is use $watch to watch the params changing
  //   // then refetch the data
  //   this.$watch(() => this.$route.params, this.initData);
  //   // second solution is use 'key' attribute to force recreate vue instance at every route change
  //   // third solution is use `beforeRouteUpdate` navigation guard
  // },
};
</script>
