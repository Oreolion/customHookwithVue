import { ref, computed } from "vue";

function setMyDate() {
  const date = ref(new Date());
  const addedDay = ref(0);
  const addedMonth = ref(0);
  const newdate = ref(date.value.toString());

  const addDay = (numberOfDays) => {
    const newDate = new Date(date.value);
    newDate.setDate(newDate.getDate() + numberOfDays);
    return newDate;
  };

  const addMonth = (numberOfMonths) => {
    const newDate = new Date(date.value);
    newDate.setMonth(newDate.getMonth() + numberOfMonths);
    return newDate;
  };

  const handleAddedDay = () => {
    addedDay.value++;
    newdate.value = addDay(addedDay.value).toString();
  };

  const handleAddedMonth = () => {
    addedMonth.value++;
  };

  const handleAddedDaysAndMonths = () => {
    newdate.value = addMonth(
      addedMonth.value,
      addDay(addedDay.value)
    ).toString();
  };

  const newMonth = computed(() => addMonth(addedMonth.value).getMonth() + 1);
  const newDay = computed(() => addDay(addedDay.value).getDate());

  const handleReset = () => {
    date.value = new Date();
    addedDay.value = 0;
    addedMonth.value = 0;
    newdate.value = date.value.toString();
  };

  return {
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
  };
}


export default setMyDate;