<template>
  <div class="parent">
    <div>
      <button @click="displayCard()" class="btn-number">
        <div class="icon-div" :class="{ adjustReduisBorder: isHidden }">
          <div class="circle-icon">{{ surveyNumber }}</div>
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

  props: {
    surveyNumber: Number
  },
  methods: {
    displayCard() {
      this.isHidden = !this.isHidden;
    },
  },

  inject: ["singleSelect", "survey"],
};
</script>

<style scoped>
.parent {
  padding: 0;
  margin-top: 10px;
  width: 85%;
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

.circle-icon {
  width: 22px;
  height: 22px;
  border: 1.5px solid white;
  border-radius: 50%;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 600;
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
