<template>
  <div class="parent">
    <div class="question">
      <label>Question*</label>
      <input
        type="text"
        class="custom-text-field"
        v-model="formData.question"
      />
    </div>

    <div class="question">
      <label>Description</label>
      <input
        type="text"
        class="custom-text-field"
        v-model="formData.description"
      />
    </div>

    <div class="question">
      <label>Placeholder</label>
      <input
        type="text"
        class="custom-text-field"
        v-model="formData.placeholder"
      />
    </div>

    <div class="question">
      <label>Input Type</label>
      <div class="setButton">
        <v-btn
          v-bind:variant="buttonVariants[0]"
          class="inputBtn"
          @click="toggleVariant(0)"
        >
          Text
          <v-icon icon="mdi-message-text" class="iconBtn"></v-icon>
        </v-btn>

        <v-btn
          v-bind:variant="buttonVariants[1]"
          class="inputBtn"
          @click="toggleVariant(1)"
          >Email
          <v-icon icon="mdi-email" class="iconBtn"></v-icon>
        </v-btn>

        <v-btn
          v-bind:variant="buttonVariants[2]"
          class="inputBtn"
          @click="toggleVariant(2)"
        >
          URL
          <v-icon class="iconBtn" icon="mdi-link"></v-icon>
        </v-btn>

        <v-btn
          v-bind:variant="buttonVariants[3]"
          class="inputBtn"
          @click="toggleVariant(3)"
        >
          Number<span class="numberIcon iconBtn">#</span>
        </v-btn>

        <v-btn
          v-bind:variant="buttonVariants[4]"
          class="inputBtn"
          @click="toggleVariant(4)"
        >
          Phone
          <v-icon icon="mdi-phone" class="iconBtn"></v-icon>
        </v-btn>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "QuestionsComponent",
  data() {
    return {
      buttonVariants: ["tonal", "", "", "", ""],
      formData: {
        question: "What would you like to know?",
        description: "This is an example servey",
        placeholder: "Type your answer here?",
      },
    };
  },
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
  },
};
</script>

<style scoped>
.parent {
  box-shadow: 2px 2px 20px rgba(0, 0, 0, 0.3);
  padding: 10px;
  width: 80%;
  background-color: white;
  border-radius: 8px;
  padding-bottom: 20px;
}

.question {
  padding: 0px 10px 20px 0px;
}

.custom-text-field {
  padding: 4px;
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
}
.inputBtn {
  flex-grow: 1;
  font-size: 13px;
  text-transform: none;
}
.iconBtn {
  margin-left: 4px;
}
.numberIcon {
  font-size: 18px;
  font-weight: 600;
}
</style>
