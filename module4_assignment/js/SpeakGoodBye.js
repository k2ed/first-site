(function (window) {
  
  var speakWord = "Good Bye";

  var byeSpeaker = {};
  byeSpeaker.name = function speak(name) {
  console.log(speakWord + " " + name);
  };
  
  window.byeSpeaker = byeSpeaker;

})(window);
