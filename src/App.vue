<template>
  <div class="app">
    <h1>{{ newDate }}</h1>

    <div>
      <p>
        Day: {{ newDay() }}
        <span v-if="addedDay > 0">
          (+ {{ addedDay }} {{ addedDay === 1 ? "day" : "days" }})
        </span>
      </p>
      <button @click="handleAddedDay">Add Days</button>
    </div>

    <div>
      <p>
        Month: {{ newMonth() }}
        <span v-if="addedMonth > 0">
          (+ {{ addedMonth }} {{ addedMonth === 1 ? "month" : "months" }})
        </span>
      </p>
      <button @click="handleAddedMonth">Add Months</button>
    </div>

    <div class="action-btn">
      <button
        @click="formattedNewDay(handleAddedDaysAndMonths().toString())"
        class="change-btn"
        title="Click to set new date"
      >
        Change The World!
      </button>
      <button @click="handleReset" class="reset-btn">Reset</button>
    </div>
  </div>
</template>

<script>
import DateMixin from "./date";

export default {
  mixins: [DateMixin],
  data() {
    return {
      date: new Date(),
      addedDay: 0,
      addedMonth: 0,
      newDate: "",
    };
  },
  methods: {
    handleAddedDay() {
      // Implement logic to add day
      this.addDays(this.addedDay + 1);
    },
    newDay() {
      return this.addDays(this.addedDay).getDate();
    },
    newMonth() {
      return this.addMonths(this.addedMonth).getMonth() + 1;
    },
    handleAddedMonth() {
      // Implement logic to add month
      this.addMonths(this.addedMonth + 1);
    },
    handleAddedDaysAndMonths() {
      this.newDate = this.addDays(
        this.addMonths(this.date, this.addedMonth),
        this.addedDay
      ).toString();
    },
    handleReset() {
      this.date = new Date();
      this.addedDay = 0;
      this.addedMonth = 0;
      this.newDate = "";
    },
  },
  computed: {
    formattedNewMonth() {
      return this.currentMonth(this.date) + this.addedMonth;
    },
    formattedNewDay() {
      return this.currentDay(this.date) + this.addedDay;
    },
  },
};
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
</style>
