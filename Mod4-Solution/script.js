var names = ["Yaakov", "John", "Jen", "Jason", "Paul",
 "Frank", "Larry", "Paula", "Laura", "Jim"];
for(var i=0;i<names.length;i++){
	var n=names[i].toLowerCase();
	var ch=n.charAt(0);
	if(ch=="j"){
		byeSpeaker.speak(names[i]);
	}
	else if(ch!="J"){
		helloSpeaker.speak(names[i]);
	}

}