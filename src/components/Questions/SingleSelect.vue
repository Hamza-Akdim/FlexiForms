<template>
  <div class="parent">
    <div>
      <button @click="displayCard()" class="btn-number">
        <div class="icon-div" :class="{ adjustReduisBorder: isHidden }">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            class="bi bi-2-circle"
            viewBox="0 0 16 16"
            style="color: white"
          >
            <path
              d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M6.646 6.24v.07H5.375v-.064c0-1.213.879-2.402 2.637-2.402 1.582 0 2.613.949 2.613 2.215 0 1.002-.6 1.667-1.287 2.43l-.096.107-1.974 2.22v.077h3.498V12H5.422v-.832l2.97-3.293c.434-.475.903-1.008.903-1.705 0-.744-.557-1.236-1.313-1.236-.843 0-1.336.615-1.336 1.306"
            />
          </svg>
        </div>
        <div class="text-btn">
          <h5>{{ singleSelect.data.question }}</h5>
          <div style="font-size: 12px; color: grey; margin-bottom: 5px">
            Single Select
          </div>
        </div>
      </button>
    </div>

    <div class="opend-card" :class="{ showCard: isHidden }">
      <div class="question">
        <label>Question*</label>
        <input
          type="text"
          class="custom-text-field"
          v-model="singleSelect.data.question"
        />
      </div>

      <div class="question">
        <label>Description</label>
        <input
          type="text"
          class="custom-text-field"
          v-model="singleSelect.data.description"
        />
      </div>

      <div class="question">
        <label>Options*</label>

        <OptionsInput />
      </div>
    </div>
  </div>
</template>

<script>
import OptionsInput from "../Diverse/OptionsInput.vue";

export default {
  name: "single-selection-question",
  components: {
    OptionsInput,
  },
  data() {
    return {
      isHidden: false,
    };
  },
  methods: {
    displayCard() {
      this.isHidden = !this.isHidden;
    },
  },

  inject: ["singleSelect"],
};
</script>

<style scoped>
.parent {
  padding: 0;
  width: 85%;
  margin-top: 10px;
  border-radius: 8px;
  box-shadow: 2px 2px 20px rgba(0, 0, 0, 0.3);
}

.icon-div {
  /* background-color: rgb(119, 136, 153); */
  background-color: rgb(0,51,102);
  width: 8%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top-left-radius: 8px;
}

.btn-number {
  width: 100%;
  height: 100%;
  display: flex;
}

.text-btn {
  width: 92%;
  padding: 10px 0 0 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 5px;
}

.opend-card {
  padding: 20px 10px 10px 20px;
}

.question {
  padding: 0px 10px 20px 0px;
}

.custom-text-field {
  padding: 4px 10px;
  font-size: 13px;
  border: 1px solid rgb(183, 181, 181);
  border-radius: 5px;
  display: block;
  width: 100%;
  height: 40px;
  margin-top: 10px;
}

.custom-text-field:hover {
  border: 1px solid black;
}

.custom-text-field:focus {
  border: 2px solid black;
}

.custom-text-field:focus-visible {
  outline: none;
}


.showCard {
  display: none;
}

.adjustReduisBorder {
  border-bottom-left-radius: 8px;
}
</style>
