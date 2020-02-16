const instance = require("axios");
const ajaxRequest = async function() {
  const result = await instance.get(
    "http://dummy.restapiexample.com/api/v1/employees"
  );
  return result;
};

module.exports = ajaxRequest;