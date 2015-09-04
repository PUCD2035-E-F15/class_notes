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
		"Lady",
		"Doctor"
	];

var primary_nouns =
	[
		"Oak",
		"Cotton",
		"Stone",
		"Moon",
		"Sun",
		"Star",
		"Knife",
		"Clock",
		"Midnight",
		"Forgetful",
		"Careful",
		"Chestnut",
		"Crab",
		"Sky",
		"Fox",
		"Hound",
		"Tree"
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
		"Last",
		"Jolly",
		"Festive",
		"Gleeful",
		"Enchanted",
		"Wise",
		"Wistful",
		"Dark"
	];

var secondary_nouns =
	[
		"Riddles",
		"Parables",
		"Fables",
		"Predicaments",
		"Trials",
		"Words",

		"Promises",
		"Lies",

		"Pests",
		"Beasts",
		"Trolls",
		"Shades",

		"Shadows",
		"Woods",
		"Lands",
		"Forests",
		
		"Brothers",
		"Sisters",
		"Children",

		"Days",
		"Nights",
		"Years",
		"Hours"
	];


var name_prefix = "";
var primary_noun = "";
var adjective = "";
var secondary_noun = "";
var templateID = 0;

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
		templateID = floor(random(0, 2))
	}

	var prompt;
	if (templateID == 0) {
		prompt = name_prefix + " " + primary_noun + " and the " + adjective + " " + secondary_noun;
	}
	else {
		prompt = "The " + adjective + " " + secondary_noun + " of " + name_prefix + " " + primary_noun;

	}
	text(prompt, width * .5, height * .5);
}

function pickWords() {
	name_prefix = name_prefixes[floor(random(name_prefixes.length))];
	primary_noun = primary_nouns[floor(random(primary_nouns.length))];
	adjective = adjectives[floor(random(adjectives.length))];
	secondary_noun = secondary_nouns[floor(random(secondary_nouns.length))];

}
