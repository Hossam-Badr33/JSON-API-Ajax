$(document).ready(function () {
  const $showData = $("#show-data");
  const $getData = $("#get-data");
  $getData.click(function (e) {
    e.preventDefault();
    $showData.text("please wait");
    setTimeout(json, 2000);
  });
  function json() {
    $.getJSON("./example.json", function (data) {
      const result = data.items
        .map((item) => `<li>${item.key}:${item.value}</li>`)
        .join("");
      $showData.html($("<ul/>").html(result));
    });
  }
});
