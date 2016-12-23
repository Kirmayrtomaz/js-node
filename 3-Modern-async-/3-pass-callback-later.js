const delayms = 1;

function getCurrentCity(callback) {
  setTimeout(function () {

    const city = "New York, NY";
    callback(null, city);

  }, delayms)
}

suite.only("operations");

function fetchCurrentCity() {
  const message = {};

  getCurrentCity(function (error, result) {


    if (error) {
      message.onError(error);
      return;
    }
     console.log("entrou");
    message.onSuccess(result);
  })

  const setCallbacks = function(onError,onSuccess){
      message.onSuccess = onSuccess;
      message.onSuccess = onError;
  }

  return {
    setCallbacks
  }


}

test("fetchCurrentCity pass the callbacks later on", function (done) {

  const operation = fetchCurrentCity();
  operation.setCallbacks(
    result => done(),
    error => done(error));

});
