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

    <div class="thank-div">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="70"
        height="70"
        fill="currentColor"
        class="bi bi-emoji-smile"
        viewBox="0 0 16 16"
        color="#ffc93c"
      >
        <path
          d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"
        />
        <path
          d="M4.285 9.567a.5.5 0 0 1 .683.183A3.5 3.5 0 0 0 8 11.5a3.5 3.5 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.5 4.5 0 0 1 8 12.5a4.5 4.5 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683M7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5m4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5"
        />
      </svg>

      <div class="custom-note">
        {{ survey[survey.length - 1].data.note }}
      </div>

      <div class="custom-description">
        {{ survey[survey.length - 1].data.description }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FreeText",

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
  border: 1px solid black;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

.thank-div {
  height: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  border: 1px solid black;
  border-top: none;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
}

.custom-note {
  font-size: 20px;
  font-weight: 600;
}

.custom-description {
  font-size: 15px;
  font-weight: 500;
  color: gray;
}
</style>
