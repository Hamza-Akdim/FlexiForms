<template>
  <div class="countainer">
    <button>
      <div class="icon-div">
        <v-icon icon="mdi-plus" class="icon" />
      </div>
      <div class="text-btn">
        <div style="font-size: 18px">Add Question</div>
        <div style="font-size: 12px; color: grey">
          Add a new question to your form
        </div>
      </div>
    </button>
  </div>
</template>

<script>
export default {
  name: "AddQuestion",
};
</script>

<style scoped>
.countainer {
  height: 13%;
  padding: 0;
  width: 80%;
  margin-top: 10px;
  border-radius: 8px;
  box-shadow: 2px 2px 20px rgba(0, 0, 0, 0.3);
}

button {
  width: 100%;
  height: 100%;
  display: flex;
}

.icon-div {
  background-color: rgb(35, 127, 35);
  width: 8%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top-left-radius: 8px; /* Adjust the radius value as needed */
  border-bottom-left-radius: 8px;
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
</style>
