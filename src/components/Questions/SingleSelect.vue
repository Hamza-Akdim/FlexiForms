<template>
  <div class="parent">
    <div>
      <button @click="displayCard()" class="btn-number">
        <div class="icon-div" :class="{ adjustReduisBorder: isHidden }">
          <div class="circle-icon">{{ questionNumber }}</div>
        </div>
        <div class="text-btn">
          <h5>{{ survey[questionNumber - 1].data.question }}</h5>
          <div style="font-size: 12px; color: grey; margin-bottom: 5px">
            Single Select
          </div>
        </div>
        <div class="trash-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-trash"
            viewBox="0 0 16 16"
            color="grey"
            :class="{ unableRemove: block }"
            @click.stop="removeQuestion()"
          >
            <path
              d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"
            />
            <path
              d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"
            />
          </svg>
        </div>
      </button>
    </div>

    <div class="opend-card" :class="{ showCard: isHidden }">
      <div class="question">
        <label>Question*</label>
        <input
          type="text"
          class="custom-text-field"
          v-model="survey[questionNumber - 1].data.question"
        />
      </div>

      <div class="question">
        <label>Description</label>
        <input
          type="text"
          class="custom-text-field"
          v-model="survey[questionNumber - 1].data.description"
        />
      </div>

      <div class="question">
        <label>Options*</label>

        <OptionsInput :questionNumber="questionNumber" />
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
    questionNumber: Number,
  },

  inject: ["survey", "currentQuestion"],

  computed: {
    block() {
      if (this.survey.length < 2) return true;
      else return false;
    },
  },

  methods: {
    displayCard() {
      this.isHidden = !this.isHidden;
      this.currentQuestion = this.survey[this.questionNumber - 1].id;
    },

    removeQuestion() {
      if (this.survey.length < 2) return;

      let index = this.questionNumber - 1;

      for (let i = index + 1; i < this.survey.length; i++) {
        this.survey[i].number = this.survey[i].number - 1;
      }

      this.survey.splice(index, 1);
    },
  },
};
</script>

<style scoped>
.parent {
  padding: 0;
  margin-bottom: 20px;
  width: 100%;
  border-radius: 8px;
  box-shadow: 1px 1px 8px rgba(0, 0, 0, 0.3);
  background-color: white;
}

.icon-div {
  /* background-color: rgb(119, 136, 153); */
  background-color: rgb(0, 51, 102);
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

.trash-icon {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px 20px;
}

.bi-trash:hover {
  color: black;
}

.unableRemove {
  cursor: no-drop;
}

.unableRemove:hover {
  color: grey;
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
