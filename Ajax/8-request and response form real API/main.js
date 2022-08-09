/*
Ajax
--readyState => state of request:
    [0] request not Intialized
    [1] server connection established
    [2] request recieved
    [3] processing request
    [4] request is finished and request is readyStatus (note whatever success or not found or .........)
    [200] response is successful
    [404] Not found
XMLHttpRequest-Object.open("type[GET/POST", url(), async-boolyen[default true opt],"userName"[opt], "password"[opt] )

 */
let request = new XMLHttpRequest();
request.open("GET", "../1-json Intro/Intro.json", true);
request.send();
// console.log(request);
// console.log(request.readyState);
// console.log(request.status);
request.onreadystatechange = function () {
  if (request.readyState === 4 && request.status === 200) {
    console.log(request.responseText);
  }
};
