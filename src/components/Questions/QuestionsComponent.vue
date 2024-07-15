<template>
  <div class="parent">
    <div class="question">
      <v-label>Question*</v-label>
      <v-text-field
        v-model="formData.question"
        class="custom-text-field"
        variant="outlined"
        placeholder="What would you like to know?"
        required
      ></v-text-field>
    </div>

    <div class="question">
      <v-label>Description</v-label>
      <v-text-field
        v-model="formData.description"
        class="custom-text-field"
        variant="outlined"
        placeholder="This an example servey"
      ></v-text-field>
    </div>

    <div class="question">
      <v-label>Placeholder</v-label>
      <v-text-field
        v-model="formData.placeholder"
        class="custom-text-field"
        variant="outlined"
        placeholder="Type your answer here..."
      ></v-text-field>
    </div>

    <div class="question">
      <v-label>Input Type</v-label>
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

    <div class="question">
      <v-label>Question*</v-label>
      <v-text-field
        v-model="formData.question"
        class="custom-text-field"
        variant="outlined"
        placeholder="What would you like to know?"
        required
      ></v-text-field>
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
        question: "",
        description: "",
        inputType: "",
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
  box-shadow : 2px 2px 20px rgba(0,0,0,0.3) ;
  padding: 15px;
  margin-top: 15px;
  width: 80%;
  /* height: 97%; */
  background-color: white;
  border-radius: 8px;
}

.question {
}

.custom-text-field {
  padding: 4px;
}

.setButton {
  padding: 4px;
  border: 1px solid rgb(183, 181, 181);
  border-radius: 5px;
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
