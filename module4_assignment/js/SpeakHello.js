(function (window) {
  
  var speakWord = "Hello";

  var helloSpeaker = {};
  helloSpeaker.name = function speak(name) {
  console.log(speakWord + " " + name);
  };
  
  window.helloSpeaker = helloSpeaker;

})(window);
