<template>
  <div class="parent-div">
    <div
      class="div-input"
      v-for="(option, index) in survey[survey.length - 1].data.options"
      :key="index"
    >
      <input
        v-if="index == 0"
        type="radio"
        name="oneSelect"
        :id="index"
        checked
      />

      <input
        v-else
        type="radio"
        name="oneSelect"
        :id="index"
      />

      <label :for="index">
        {{ option }}
      </label>
    </div>

  </div>
</template>

<script>
export default {
  name: "single-select-input",
  inject: ["survey"],
};
</script>

<style scoped>
.parent-div {
  padding: 5px;
  width: 100%;
  height: 100%;
  overflow-y: auto;
}

.div-input {
  margin-bottom: 10px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
}

input,
label {
  cursor: pointer;
}

input {
  accent-color: black;
}
</style>
