<template>
  <div
    class="inputOption"
    v-for="(option, index) in singleSelect.data.options"
    :key="index"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="currentColor"
      class="bi bi-grip-vertical"
      viewBox="0 0 16 16"
      color="grey"
      style="cursor: move"
    >
      <path
        d="M7 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0m3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0M7 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0m3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0M7 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0m3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0m-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0m3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0m-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0m3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0"
      />
    </svg>

    <input
      type="text"
      class="custom-text-field-option"
      v-model="singleSelect.data.options[index]"
    />
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      fill="currentColor"
      class="bi bi-trash"
      viewBox="0 0 16 16"
      color="grey"
      style="cursor: pointer"
      @click="singleSelect.method.removeOption(index)"
    >
      <path
        d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"
      />
      <path
        d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"
      />
    </svg>

    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      fill="currentColor"
      class="bi bi-plus plus-icon"
      viewBox="0 0 16 16"
      color="grey"
      style="cursor: pointer"
      @click="singleSelect.method.addOption(index + 1, `option ${index + 2}`)"
    >
      <path
        d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"
      />
    </svg>
  </div>
</template>

<script>
export default {
  name: "options-input-form-question",
  inject: ["singleSelect"],
  mounted() {
    this.initializeOptions();
  },
  methods: {
    initializeOptions() {
      this.singleSelect.data.options = this.singleSelect.data.options.map(
        (option, index) => `Option ${index + 1}`
      );
    },
  },
};
</script>

<style scoped>
.inputOption {
  padding: 5px;
  margin-top: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
}

.custom-text-field-option {
  padding: 4px 10px;
  margin-right: 5px;
  font-size: 14px;
  border: 1px solid rgb(183, 181, 181);
  border-radius: 5px;
  display: inline-block;
  width: 100%;
  height: 40px;
}

.custom-text-field-option:hover {
  border: 1px solid black;
}

.custom-text-field-option:focus {
  border: 2px solid black;
}

.custom-text-field-option:focus-visible {
  outline: none;
}

svg:hover {
  color: black;
}
</style>
