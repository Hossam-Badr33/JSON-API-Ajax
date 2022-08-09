$(document).ready(function () {
  let name1 = "";
  /*
  $.getJSON("./json.json", function (data) {
    for (x in data) {
      name1 += `<div>${data[x]}</div>`;
    }
    // document.getElementById("result").innerHTML = name1;
    $("#result").html(name1);
  });
  */
  //2nd method => ajax
  $.ajax({
    url: "./json.json",
    datatype: "json",
    cache: false,
    success: function (data, status) {
      let result = "";
      for (x in data) {
        result += "<div>" + data[x] + "</div>";
      }
      $("#result").html(result);
    },
    error: function (xhr, textStatus, err) {
      console.log(xhr);
      console.log(textStatus);
      console.log(err);
    }
  });
});
