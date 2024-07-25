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
            class="bi bi-1-circle"
            viewBox="0 0 16 16"
            style="color: white"
          >
            <path
              d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M9.283 4.002V12H7.971V5.338h-.065L6.072 6.656V5.385l1.899-1.383z"
            />
          </svg>
        </div>
        <div class="text-btn">
          <h5>{{ freeText.data.question }}</h5>
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
          v-model="freeText.data.question"
        />
      </div>

      <div class="question">
        <label>Description</label>
        <input
          type="text"
          class="custom-text-field"
          v-model="freeText.data.description"
        />
      </div>

      <div class="question">
        <label>Placeholder</label>
        <input
          type="text"
          class="custom-text-field"
          v-model="freeText.data.placeholder"
        />
      </div>

      <div class="question">
        <label>Input Type</label>
        <div class="setButton">
          <v-btn
            v-bind:variant="buttonVariants[0]"
            class="inputBtn"
            @click="toggleVariant(0); freeText.data.inputType= 'text'; freeText.data.placeholder='Type your answer here?'"
          >
            Text
            <v-icon icon="mdi-message-text" class="iconBtn"></v-icon>
          </v-btn>

          <v-btn
            v-bind:variant="buttonVariants[1]"
            class="inputBtn"
            @click="toggleVariant(1); freeText.data.inputType= 'email'; freeText.data.placeholder = 'example@email.com'"
            >Email
            <v-icon icon="mdi-email" class="iconBtn"></v-icon>
          </v-btn>

          <v-btn
            v-bind:variant="buttonVariants[2]"
            class="inputBtn"
            @click="toggleVariant(2); freeText.data.inputType= 'url'; freeText.data.placeholder= 'http://...'"
          >
            URL
            <v-icon class="iconBtn" icon="mdi-link"></v-icon>
          </v-btn>

          <v-btn
            v-bind:variant="buttonVariants[3]"
            class="inputBtn"
            @click="toggleVariant(3); freeText.data.inputType= 'number'; freeText.data.placeholder='36'"
          >
            Number<span class="numberIcon iconBtn">#</span>
          </v-btn>

          <v-btn
            v-bind:variant="buttonVariants[4]"
            class="inputBtn"
            @click="toggleVariant(4); freeText.data.inputType= 'phone'; freeText.data.placeholder= '+1 123 456 789'"
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

  inject: ["freeText"],

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
  width: 85%;
  margin-top: 5rem;
  border-radius: 8px;
  box-shadow: 2px 2px 20px rgba(0, 0, 0, 0.3);
}

.icon-div {
  background-color: rgb(119, 136, 153);
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
