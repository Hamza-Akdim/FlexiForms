<template>
  <div v-for="index in 5" :key="index" class="star-div">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="45"
      height="45"
      fill="currentColor"
      class="bi bi-star-fill icon-opend-card"
      viewBox="0 0 16 16"
      :class="{ activeStar: isActive(index) }"
      @mouseover="rating(index)"
      @mousedown="this.survey[this.survey.length - 1].data.rate = 0"
    >
      <path
        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
      />
    </svg>
  </div>
</template>

<script>
export default {
  name: "rate-stars-display",

  methods: {
    isActive(index) {
      if (index <= this.survey[this.survey.length - 1].data.rate) return true;
      else return false;
    },

    rating(index) {
      this.survey[this.survey.length - 1].data.rate = index;
    },
  },

  inject: ["survey"],
};
</script>

<style scoped>
.star-div {
  padding: 2px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.bi-star-fill {
  color: rgb(168, 172, 179);
  cursor: pointer;
}

.activeStar {
  color: #ffc93c;
}
</style>
