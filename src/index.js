function cityTime(event) {
  if (event.target.value === "paris") {
    alert(
      moment()
        .tz("Europe/Paris")
        .format("[It is] dddd, MMMM Do, YYYY H:mm A [in Europe/Paris]"),
    );
  }
  if (event.target.value === "sydney") {
    alert(
      moment()
        .tz("Australia/Sydney")
        .format("[It is] dddd, MMMM Do, YYYY H:mm A [in Australia/Sydney]"),
    );
  }
  if (event.target.value === "tokyo") {
    alert(
      moment()
        .tz("Asia/Tokyo")
        .format("[It is] dddd, MMMM Do, YYYY H:mm A [in Japan/Tokyo]"),
    );
  }
}
let citiesSelect = document.querySelector("#cities");
citiesSelect.addEventListener("change", cityTime);
