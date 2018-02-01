var dictionary = [
	{
		word: "computer",
		def: "a device, usually electronic, that processes data according to a set of instructions.",
		rel: ["file", "CPU", "disc"]
	},
	{
		word: "monitor",
		def:  "an output device which displays information in pictorial form.",
		rel: ["computer", "screen", "grafics"]
	},
	{
		word: "mouse",
		def:  "a hand-held pointing device.",
		rel: ["computer", "gaming", "pointer"]
	},
	{
		word: "keyboard",
		def:  "the piece of computer hardware used to input text, characters, and other commands into a computer or similar device.",
		rel: ["computer", "mouse", "input"]
	},
	{
		word: "window",
		def:  "a separate viewing area on a computer display screen",
		rel: ["computer", "monitor", "screen"]
	},
	{
		word: "laptop",
		def:  "a portable personal computer powered by a battery.",
		rel: ["computer", "CPU", "program"]
	},
	{
		word: "program",
		def:  "a collection of instructions that performs a specific task",
		rel: ["computer", "CPU", "laptop"]
	},
	{
		word: "modem",
		def:  "a device or program that enables a computer to transmit data over",
		rel: ["computer", "internet", "program"]
	},
	{
		word: "internet",
		def:  "a vast computer network linking smaller computer networks worldwide",
		rel: ["computer", "modem", "information"]
	},
	{
		word: "folder",
		def:  "the virtual location for applications, documents, data or other sub-folders",
		rel: ["computer", "program", "information", "files"]
	},
	{
		word: "file",
		def:  "a self contained piece of information available to the OS and its programs",
		rel: ["computer", "program", "information", "folder"]
	},
	{
		word: "operating system",
		def:  "the most important program that runs on a computer",
		rel: ["computer", "program", "information"]
	},
	{
		word: "memory",
		def:  "internal storage areas in the computer",
		rel: ["computer", "program", "information"]
	},
	{
		word: "software",
		def:  "various kinds of programs used to operate computers and related devices.",
		rel: ["computer", "program", "operating system"]
	},
	{
		word: "website",
		def:  "a central location of various web pages that are all related and can be accessed",
		rel: ["internet", "program", "operating system"]
	},
	{
		word: "storage",
		def:  "a general term for archiving data in electromagnetic or other forms",
		rel: ["memory", "computer", "file"]
	},
	{
		word: "scanner",
		def:  "an electronic device which can capture images from physical items and convert them into digital formats",
		rel: ["picture", "graphics", "computer", "file"]
	},
	{
		word: "server",
		def:  "computer designed to process requests and deliver data to another computer over the internet or a local network.",
		rel: ["internet", "hardware", "computer"]
	},
	{
		word: "hardware",
		def:  "is the collection of physical parts of a computer system",
		rel: ["mouse", "monitor", "keyboard", "computer"]
	},
	{
		word: "surf",
		def:  "the act of browsing the Internet by going from one web page to another web page using hyperlinks in a browser",
		rel: ["internet", "software", "computer"]
	},
];

//fill the dictionary with words
init = function() {
	for (var i = 0; i < dictionary.length; i++) {
		document.getElementById("word_list").innerHTML += "<li onclick='show(" + i + ")'>" +
		    dictionary[i].word + "</li>";
		}
	}

//call the init function when page loads

init();	

//display a word, its definition and related words
show = function(i){
	document.getElementById("word_text").innerHTML = dictionary[i].word;
	document.getElementById("definition").innerHTML = dictionary[i].def;

	var list = "";

	for (var j = 0; j < dictionary[i].rel.length; j++) {
		list += "<li>" + dictionary[i].rel[j] + "</li>";
		document.getElementById("related").innerHTML = list;
	}
}

//show first word in the dictionary when page loads
show(0);

//search functionality
search = function(){
	query = document.getElementById("search").value;

	if (query == "") {
		return;
	}

	found = -1 //initialize found to false

	for (var i = 0; i < dictionary.length; i++) {
		if (query == dictionary[i].word) {
			found = i;
			break;
		} else {
			document.getElementById("word_text").innerHTML = "Word not found";
			document.getElementById("definition").innerHTML = "The word you entered is not found in our dictionary";
			document.getElementById("related").innerHTML = "No related words";
		}
	}

	if (found >= 0) {
		show(found);
	}
}
