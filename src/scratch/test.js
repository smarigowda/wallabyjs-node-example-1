const instance = require("axios");
const promise = instance.get(
  "http://dummy.restapiexample.com/api/v1/employees"
);

(async function() {
  const result = await promise;
  console.log(result.data.data);
})();
