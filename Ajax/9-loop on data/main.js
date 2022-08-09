/*
loop and create nodes 
 */
const request = new XMLHttpRequest();
request.open("GET", "../1-json Intro/Intro.json");
request.send();
console.log(request);
request.onreadystatechange = function () {
  if (request.readyState === 4 && request.status === 200) {
    console.log(request.responseText);
    console.log(typeof request.responseText);
    let ob = JSON.parse(request.responseText); //convert string to Object
    console.log(ob[1]);
    let length = Object.keys(ob).length; //to get Object-length turn to array
    console.log(Object.keys(ob));
    for (let i = 0; i < length; i++) {
      let div = document.createElement("div");
      let text = document.createTextNode(Object.keys(ob)[i]);
      div.appendChild(text);
      document.body.appendChild(div);
    }
  }
};
