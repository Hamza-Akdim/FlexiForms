<template>
  <div class="parent">
    <div>
      <button @click="displayCard()" class="btn-number">
        <div class="icon-div" :class="{ adjustReduisBorder: isHidden }">
          <div class="circle-icon">{{ surveyNumber }}</div>
        </div>
        <div class="text-btn">
          <h5>{{ survey[survey.length - 1].data.question }}</h5>
          <div style="font-size: 12px; color: grey; margin-bottom: 5px">
            Free Text
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
          v-model="survey[survey.length - 1].data.question"
        />
      </div>

      <div class="question">
        <label>Description</label>
        <input
          type="text"
          class="custom-text-field"
          v-model="survey[survey.length - 1].data.description"
        />
      </div>

      <div class="question">
        <label>Placeholder</label>
        <input
          type="text"
          class="custom-text-field"
          v-model="survey[survey.length - 1].data.placeholder"
        />
      </div>

      <div class="question">
        <label>Input Type</label>
        <div class="setButton">
          <v-btn
            v-bind:variant="buttonVariants[0]"
            class="inputBtn"
            @click="
              toggleVariant(0);
              survey[survey.length - 1].data.inputType = 'text';
              survey[survey.length - 1].data.placeholder =
                'Type your answer here?';
            "
          >
            Text
            <v-icon icon="mdi-message-text" class="iconBtn"></v-icon>
          </v-btn>

          <v-btn
            v-bind:variant="buttonVariants[1]"
            class="inputBtn"
            @click="
              toggleVariant(1);
              survey[survey.length - 1].data.inputType = 'email';
              survey[survey.length - 1].data.placeholder = 'example@email.com';
            "
            >Email
            <v-icon icon="mdi-email" class="iconBtn"></v-icon>
          </v-btn>

          <v-btn
            v-bind:variant="buttonVariants[2]"
            class="inputBtn"
            @click="
              toggleVariant(2);
              survey[survey.length - 1].data.inputType = 'url';
              survey[survey.length - 1].data.placeholder = 'http://...';
            "
          >
            URL
            <v-icon class="iconBtn" icon="mdi-link"></v-icon>
          </v-btn>

          <v-btn
            v-bind:variant="buttonVariants[3]"
            class="inputBtn"
            @click="
              toggleVariant(3);
              survey[survey.length - 1].data.inputType = 'number';
              survey[survey.length - 1].data.placeholder = '36';
            "
          >
            Number<span class="numberIcon iconBtn">#</span>
          </v-btn>

          <v-btn
            v-bind:variant="buttonVariants[4]"
            class="inputBtn"
            @click="
              toggleVariant(4);
              survey[survey.length - 1].data.inputType = 'phone';
              survey[survey.length - 1].data.placeholder = '+1 123 456 789';
            "
          >
            Phone
            <v-icon icon="mdi-phone" class="iconBtn"></v-icon>
          </v-btn>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FreeText",
  data() {
    return {
      buttonVariants: ["tonal", "", "", "", ""],
      isHidden: false,
    };
  },

  props: {
    surveyNumber: Number,
  },

  inject: ["survey"],

  methods: {
    toggleVariant(index) {
      this.buttonVariants.forEach((variant, i) => {
        if (i !== index) {
          this.buttonVariants[i] = "";
        } else {
          this.buttonVariants[i] = "tonal";
        }
      });
    },

    displayCard() {
      this.isHidden = !this.isHidden;
    },
  },
};
</script>

<style scoped>
.parent {
  padding: 0;
  width: 100%;
  margin-bottom: 20px;
  border-radius: 8px;
  box-shadow: 2px 2px 20px rgba(0, 0, 0, 0.3);
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

.setButton {
  padding: 4px;
  border: 1px solid rgb(183, 181, 181);
  border-radius: 5px;
  margin-top: 10px;
  display: flex;
  flex-wrap: wrap;
  gap: 3px;
}

.inputBtn {
  flex-grow: 1;
  font-size: 12.5px;
  text-transform: none;
  width: 50px;
}
.iconBtn {
  margin-left: 4px;
}
.numberIcon {
  font-size: 18px;
  font-weight: 600;
}

.showCard {
  display: none;
}

.adjustReduisBorder {
  border-bottom-left-radius: 8px;
}
</style>
