<template>
  <div class="parent mx-auto">
    <div>
      <button @click="handleClickBtn()" class="btn-number">
        <div class="icon-div sm:min-w-[40px] md:min-w-[50px]" :class="{ adjustReduisBorder: isDisplay }">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            fill="currentColor"
            class="bi bi-emoji-smile"
            viewBox="0 0 16 16"
            color="white"
          >
            <path
              d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"
            />
            <path
              d="M4.285 9.567a.5.5 0 0 1 .683.183A3.5 3.5 0 0 0 8 11.5a3.5 3.5 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.5 4.5 0 0 1 8 12.5a4.5 4.5 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683M7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5m4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5"
            />
          </svg>
        </div>

        <div class="text-btn">
          <h5 v-if="click != 0">{{ survey[indexThank].data.note }}</h5>
          <h5 v-else>Thank you!</h5>
          <div style="font-size: 12px; color: grey; margin-bottom: 5px">
            Ending Card
          </div>
        </div>

        <div class="trash-icon" :class="{ removeThank: enable }">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-trash"
            viewBox="0 0 16 16"
            color="grey"
            :class="{ unableRemove: block }"
            @click.stop="removeThanksCard()"
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

    <div v-if="click != 0" class="opend-card" :class="{ showCard: isDisplay }">
      <div class="question">
        <label>Note*</label>
        <input
          type="text"
          class="custom-text-field"
          v-model="survey[indexThank].data.note"
        />
      </div>

      <div class="question">
        <label>Description</label>
        <input
          type="text"
          class="custom-text-field"
          v-model="survey[indexThank].data.description"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "multi-selection-question",

  components: {},

  data() {
    return {
      isDisplay: true,
      click: 0,
      enable: true,
      indexThank: 0,
    };
  },

  inject: ["survey"],

  computed: {
    block() {
      if (this.survey.length < 2) return true;
      else return false;
    },
  },

  methods: {
    handleClickBtn() {
      this.isDisplay = !this.isDisplay;

      this.click++;

      if (this.click < 2) {
        this.enable = !this.enable;

        const id = Date.now();

        this.survey.push({
          id,
          type: "thank",
          data: {
            note: "Thank you!",
            description: "We appreciate your feedback.",
          },
          number: this.survey.length + 1,
        });
        this.indexThank = this.survey.length - 1;
      }
      // this.currentQuestion = this.survey[this.indexThank].id;
    },

    removeThanksCard() {
      if (this.survey.length < 2) return;

      if (!this.isDisplay) this.isDisplay = !this.isDisplay;

      let index = this.indexThank;

      for (let i = index + 1; i < this.survey.length; i++) {
        this.survey[i].number = this.survey[i].number - 1;
      }

      this.survey.splice(index, 1);

      this.click = 0;

      this.enable = !this.enable;
    },
  },
};
</script>

<style scoped>
.parent {
  padding: 0;
  width: 85%;
  margin-bottom: 20px;
  border-radius: 8px;
  box-shadow: 1px 1px 8px rgba(0, 0, 0, 0.3);
  background-color: white;
}

.btn-number {
  width: 100%;
  height: 100%;
  display: flex;
}

.icon-div {
  background-color: rgb(169, 169, 169);
  min-height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top-left-radius: 8px;
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

.removeThank {
  display: none;
}
</style>
