if (selectedDate instanceof Date) {
  // Creating a copy of selectedDate
  const copySelectedDate = new Date(selectedDate);

  // Setting a known date for testing
  $("#datePickerFinal").datepicker("setDate", new Date(2024, 0, 9));

  // Formatting the date to display only day, month, year
  const formattedDate = copySelectedDate.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  // Updating the text of #dateSelected
  $("#dateSelected").text(formattedDate);
}
