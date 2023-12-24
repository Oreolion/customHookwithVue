<template>
  <div class="app">
    <h1>{{ newdate }}</h1>

    <div>
      <p>
        Day: {{ newDay }}
        <span v-if="addedDay > 0">
          (+ {{ addedDay }} {{ addedDay === 1 ? "day" : "days" }})
        </span>
      </p>
      <button @click="handleAddedDay">Add Days</button>
    </div>

    <div>
      <p>
        Month: {{ newMonth }}
        <span v-if="addedMonth > 0">
          (+ {{ addedMonth }} {{ addedMonth === 1 ? "month" : "months" }})
        </span>
      </p>
      <button @click="handleAddedMonth">Add Months</button>
    </div>

    <div class="action-btn">
      <button
        @click="handleAddedDaysAndMonths"
        class="change-btn"
        title="Click to set new date"
      >
        Change The World!
      </button>
      <button @click="handleReset" class="reset-btn">Reset</button>
    </div>
  </div>
</template>

<script setup>
import setMyDate from "./date";

const {
  date,
  addedDay,
  addedMonth,
  newdate,
  addDay,
  addMonth,
  handleAddedDay,
  handleAddedMonth,
  handleAddedDaysAndMonths,
  newMonth,
  newDay,
  handleReset,
} = setMyDate();
</script>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}

.app > div {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    font-size: 1.6rem;
}
</style>
