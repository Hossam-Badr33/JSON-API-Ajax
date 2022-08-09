/*
  - JSON.parse => convert text data to js Object
  - JSON.stringify => ocnvert js Object to JSON
 */
const jsonFile = `{
  "Name": "hossam",
  "age": 38,
  "job": "developer"
}`;
console.log(typeof jsonFile);
const object = JSON.parse(jsonFile);
console.log(typeof object);
object.Name = "hazem";
object.age = 30;
console.log(object);
const jsonFile2 = JSON.stringify(object);
console.log(jsonFile2);
console.log(typeof jsonFile2);
