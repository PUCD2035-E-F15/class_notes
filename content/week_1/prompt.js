// a sketch that generates a drawing prompt by
// combining randomly picked words
// hold the mouse down to generate new prompts

var name_prefixes =
	[
		"King",
		"Queen",
		"Professor",
		"Madam",
		"Mister",
		"Sir",
		"The Lady",
		"Doctor",
	];

var primary_nouns =
	[
		"Oak",
		"Cotton",
		"Stone",
		"Earth",
		"Moon",
		"Sun",
		"Star",
		"Knife",
		"Clock",
		"Midnight",
		"Forgetful",
		"Careful"
	];

var adjectives =
	[
		"Lost",
		"Three",
		"Two",
		"Forgotten",
		"Fallen",
		"Pack of",
		"Valiant",
		"Golden",
		"Many",
		"Merry",
		"Clever",
		"Wonderful",
		"Sullen",
		"Angry",
		"Little",
		"Cowardly",
		"Silver",
		"Last"
	];

var secondary_nouns =
	[
		"Riddles",
		"Pests",
		"Shadows",
		"Parables",
		"Beasts",
		"Predicaments",
		"Fables",
		"Woods",
		"Brothers",
		"Sisters",
		"Lands",
		"Forests",
		"Days",
		"Nights",
		"Years"
	];


var name_prefix = "";
var primary_noun = "";
var adjective = "";
var secondary_noun = "";

function setup() {
	createCanvas(windowWidth, windowHeight);
	textAlign(CENTER);
	textSize(24);
	fill(225, 225, 225);

	pickWords();
}

function draw() {
	background(75, 75, 75);

	if (mouseIsPressed) {
		pickWords();
	}

	var prompt = name_prefix + " " + primary_noun + " and the " + adjective + " " + secondary_noun;
	text(prompt, width * .5, height * .5);
}

function pickWords(){
	name_prefix = name_prefixes[floor(random(name_prefixes.length))];
	primary_noun = primary_nouns[floor(random(primary_nouns.length))];
	adjective = adjectives[floor(random(adjectives.length))];
	secondary_noun = secondary_nouns[floor(random(secondary_nouns.length))];
}
