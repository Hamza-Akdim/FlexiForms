<template>
  <div class="parent">
    <div>
      <button @click="displayCard()">
        <div class="icon-div" :class="{ adjustReduisBorder: isDisplay }">
          <v-icon icon="mdi-plus" class="icon" />
        </div>
        <div class="text-btn">
          <div style="font-size: 18px">Add Question</div>
          <div style="font-size: 12px; color: grey; margin-bottom: 5px">
            Add a new question to your form
          </div>
        </div>
      </button>
    </div>

    <div class="opend-card" :class="{ showCard: isDisplay }">
      <div class="servey-type">
        <button class="inputBtn" @click="addNewSurvey('freeText')">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-chat-left-text-fill icon-opend-card"
            viewBox="0 0 16 16"
          >
            <path
              d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4.414a1 1 0 0 0-.707.293L.854 15.146A.5.5 0 0 1 0 14.793zm3.5 1a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1zm0 2.5a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1zm0 2.5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1z"
            />
          </svg>
          <div>Free Text</div>
        </button>
      </div>

      <div class="servey-type">
        <button class="inputBtn" @click="addNewSurvey('singleSelect')">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-file-text-fill icon-opend-card"
            viewBox="0 0 16 16"
          >
            <path
              d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2M5 4h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1m-.5 2.5A.5.5 0 0 1 5 6h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5M5 8h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1m0 2h3a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1"
            />
          </svg>
          <div>Single Select</div>
        </button>
      </div>

      <div class="servey-type">
        <button class="inputBtn" @click="addNewSurvey('multiSelect')">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-list icon-opend-card"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
            />
          </svg>
          <div>Multi Select</div>
        </button>
      </div>

      <div class="servey-type">
        <button class="inputBtn" @click="addNewSurvey('rating')">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-star-fill icon-opend-card"
            viewBox="0 0 16 16"
          >
            <path
              d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
            />
          </svg>
          <div>Rating</div>
        </button>
      </div>

      <div class="servey-type">
        <button class="inputBtn" @click="addNewSurvey('fileUpload')">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-file-earmark-arrow-up-fill icon-opend-card"
            viewBox="0 0 16 16"
          >
            <path
              d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0M9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1M6.354 9.854a.5.5 0 0 1-.708-.708l2-2a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1-.708.708L8.5 8.707V12.5a.5.5 0 0 1-1 0V8.707z"
            />
          </svg>
          <div>File Upload</div>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AddQuestion",
  data() {
    return {
      isDisplay: true,
    };
  },
  methods: {
    displayCard() {
      this.isDisplay = !this.isDisplay;
    },

    addNewSurvey(surveyType) {
      const id = Date.now();

      if (surveyType === "freeText") {
        this.survey.push({
          id,
          type: surveyType,
          data: {
            question: "What would you like to know?",
            description: "This is an example servey",
            placeholder: "Type your answer here?",
            inputType: "text",
          },
          number: this.survey.length + 1,
        });
        return;
      }

      if (surveyType === "singleSelect") {
        this.survey.push({
          id,
          type: surveyType,
          data: {
            question: "What do you do?",
            description: "Can't do both",
            options: [],
          },
          number: this.survey.length + 1,
        });
        return;
      }

      if (surveyType === "multiSelect") {
        this.survey.push({
          id,
          type: surveyType,
          data: {
            question: "What motivates you in your job?",
            description: "You can select more that one option",
            options: [],
          },
          number: this.survey.length + 1,
        });
        return;
      }

      if (surveyType === "rating") {
        this.survey.push({
          id,
          type: surveyType,
          data: {
            question: "How would you rate",
            description: "Don't worry, be honest.",
            rate: 0,
            lowerLabel: "Not good",
            upperLabel: "Very good",
          },
          number: this.survey.length + 1,
        });
        return;
      }
    },
  },
  inject: ["survey"],
};
</script>

<style scoped>
.parent {
  padding: 0;
  width: 100%;
  margin-top: 10px;
  border-radius: 8px;
  box-shadow: 1px 1px 8px rgba(0, 0, 0, 0.3);
  background-color: white;
}

button {
  width: 100%;
  height: 100%;
  display: flex;
}

.icon-div {
  background-color: #508c9b;
  width: 8%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top-left-radius: 8px;
}

.icon {
  font-size: 2rem;
  font-weight: 400;
  color: white;
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
  padding: 10px;
}

.inputBtn {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: white;
  padding: 5px;
  margin: 5px 0;
  border-radius: 5px;
}

.inputBtn:hover {
  background-color: rgb(238, 238, 238);
}

.icon-opend-card {
  margin: 2px 5px 0 0;
  color: #508c9b;
}

.showCard {
  display: none;
}

.adjustReduisBorder {
  border-bottom-left-radius: 8px;
}
</style>
