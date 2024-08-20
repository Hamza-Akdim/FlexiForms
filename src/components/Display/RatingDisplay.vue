<template>
  <div class="card-parent">
    <div class="close-btn">
      <button>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          fill="currentColor"
          class="bi bi-x"
          viewBox="0 0 16 16"
        >
          <path
            d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"
          />
        </svg>
      </button>
    </div>

    <div class="title">
      <v-card-title>{{ survey[survey.length - 1].data.question }}</v-card-title>
    </div>

    <div class="subtitle">
      <v-card-subtitle>{{
        survey[survey.length - 1].data.description
      }}</v-card-subtitle>
    </div>

    <div class="rate-stars">
      <RateStars />
    </div>

    <div class="next-btn">
      <button class="custom-btn">Next</button>
    </div>
  </div>
</template>

<script>
import RateStars from "../Diverse/RateStars.vue";

export default {
  name: "FreeText",

  components: {
    RateStars,
  },

  inject: ["survey"],
};
</script>

<style scoped>
.card-parent {
  height: 80%;
  width: 80%;
  padding: 15px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 1px 1px 10px rgba(128, 128, 128, 0.3);
}
.close-btn {
  display: flex;
  justify-content: flex-end;
}

.rate-stars {
  background-color: aquamarine;
  margin-top: 20px;
  padding: 15px 0px 15px 15px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 10px;
}

.next-btn {
  display: flex;
  justify-content: flex-end;
  margin-right: 15px;
  margin-top: 10px;
}

.custom-btn {
  background-color: rgb(0, 51, 102);
  color: white;
  padding: 8px 13px;
  border-radius: 5px;
}

.custom-btn:hover {
  background-color: rgb(67, 92, 117);
}
</style>
