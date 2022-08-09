$(document).ready(function () {
  let name1 = "";
  $.getJSON("./json.json", function (data) {
    for (x in data) {
      name1 += `<div>${data[x]}</div>`;
    }
    // document.getElementById("result").innerHTML = name1;
    $("#result").html(name1);
  });
});
