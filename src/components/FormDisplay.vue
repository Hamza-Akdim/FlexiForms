<template>
  <div class="formDispaly">
    <div class="parent">
      <div class="header-parent">
        <div style="font-size: 15px;">Your web app</div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          fill="currentColor"
          class="bi bi-arrows-fullscreen"
          viewBox="0 0 16 16"
          style="cursor: pointer"
        >
          <path
            fill-rule="evenodd"
            d="M5.828 10.172a.5.5 0 0 0-.707 0l-4.096 4.096V11.5a.5.5 0 0 0-1 0v3.975a.5.5 0 0 0 .5.5H4.5a.5.5 0 0 0 0-1H1.732l4.096-4.096a.5.5 0 0 0 0-.707m4.344 0a.5.5 0 0 1 .707 0l4.096 4.096V11.5a.5.5 0 1 1 1 0v3.975a.5.5 0 0 1-.5.5H11.5a.5.5 0 0 1 0-1h2.768l-4.096-4.096a.5.5 0 0 1 0-.707m0-4.344a.5.5 0 0 0 .707 0l4.096-4.096V4.5a.5.5 0 1 0 1 0V.525a.5.5 0 0 0-.5-.5H11.5a.5.5 0 0 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 0 .707m-4.344 0a.5.5 0 0 1-.707 0L1.025 1.732V4.5a.5.5 0 0 1-1 0V.525a.5.5 0 0 1 .5-.5H4.5a.5.5 0 0 1 0 1H1.732l4.096 4.096a.5.5 0 0 1 0 .707"
          />
        </svg>
      </div>

      <div class="display-form">
        <DisplayNewForm />
      </div>
    </div>

    <div class="change-device">
      <button
        class="icon-device"
        :class="{ backgroundDeviceIcon: setBackgroundColor }"
        @click="changeColor"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="currentColor"
          class="bi bi-laptop"
          viewBox="0 0 16 16"
        >
          <path
            d="M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5"
          />
        </svg>
      </button>

      <button
        class="icon-device"
        :class="{ backgroundDeviceIcon: !setBackgroundColor }"
        @click="changeColor"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="currentColor"
          class="bi bi-phone"
          viewBox="0 0 16 16"
        >
          <path
            d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"
          />
          <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
        </svg>
      </button>
    </div>
  </div>
</template>

<script>
import DisplayNewForm from "./Display/DisplayNewForm.vue";

export default {
  name: "FormDisplay",
  components: {
    DisplayNewForm,
  },

  data() {
    return {
      setBackgroundColor: true,
    };
  },

  methods: {
    changeColor() {
      this.setBackgroundColor = !this.setBackgroundColor;
    },
  },
};
</script>

<style scoped>
.formDispaly {
  width: 50vw;
  height: 100%;
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
}
.parent {
  width: 80%;
  height: 80%;
--tw-bg-opacity: 1;
  background-color: rgb(241 245 249/var(--tw-bg-opacity));
  box-shadow: 1px 1px 10px rgba(128, 128, 128, 0.3);
  border-radius: 8px;
  border: 0.5px solid gray;
  padding: 10px 5px 5px 5px;
}

.header-parent {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  width: 100%;
  height: 5%;
}

.display-form {
  height: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.change-device {
  height: 2.8rem;
  width: 6.5rem;
  padding: 3px;
  border: 2px solid rgb(192, 192, 192);
  border-radius: 99px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
}

.icon-device {
  display: flex;
  height: 95%;
  width: 100%;
  cursor: pointer;
  border-radius: 100px;
  justify-content: center;
  align-items: center;
}

.icon-device:hover {
  background-color: #f3f4f7;
}

.backgroundDeviceIcon {
  background-color: #eee;
}
</style>
