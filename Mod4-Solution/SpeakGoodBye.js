(function (window){
	var byeSpeaker={};
	byeSpeaker.speakBye="Good Bye";
	byeSpeaker.speak=function(name){
		window.name=name;
		console.log(byeSpeaker.speakBye+" "+name);
	}
	window.byeSpeaker=byeSpeaker;
})(window);


