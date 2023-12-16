export default {
    methods: {
      addDays(date, numberOfDays) {
        const newDate = new Date(date);
        newDate.setDate(newDate.getDate() + numberOfDays);
        return newDate;
      },
      addMonths(date, numberOfMonths) {
        const newDate = new Date(date);
        newDate.setMonth(newDate.getMonth() + numberOfMonths);
        return newDate;
      },
      currentMonth(date) {
        return date.getMonth() + 1;
      },
      currentDay(date) {
        return date.getDate();
      },
    },
  };