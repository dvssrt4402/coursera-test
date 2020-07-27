(function (window){
	var helloSpeaker={};
	helloSpeaker.speakHello="Hello";
	helloSpeaker.speak=function(name){
		console.log(helloSpeaker.speakHello+" "+name);
	}
	window.helloSpeaker=helloSpeaker;
})(window);