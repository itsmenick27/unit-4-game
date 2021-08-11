// assign attr to IDs
//Clicking attack button then reduces both player and enemy HP based on random roll
////Player attacks first
//Restart game by pressing restart button




//Select a character

var characterSelect = true;
var enemySelect = true;

//Character Objects
var wolverine = {
    "health": 120,
    "attack": 20,
    "speed": 80,
};
var cyclops = {
    "health": 110,
    "attack": 25,
    "speed": 50,
};
var rogue = {
    "health": 80,
    "attack": 30,
    "speed": 70,
};
var gambit = {
    "health": 100,
    "attack": 30,
    "speed": 60,
};
var charactersXmen = [wolverine, cyclops, rogue, gambit];

// someone clicks on wolverine
$("#wolverine").click(function() {
    // are they clicking on wolverine to select their character, or are they clicking on wolverine to select him as an opponent?
    // assign a number to wolverine that assigns object
    if (characterSelect) {
        // selecting wolverine as your character
        $(".playerSelect").append($(this));
        $(".enemySelect").append($("#cyclops"));
        $(".enemySelect").append($("#rogue"));
        $(".enemySelect").append($("#gambit"));
        characterSelect = false;
        var xmenAtt = $(this).attr("data-string");
        charactersXmen[xmenAtt];
    } else {
        // selecting wolverine as an opponent
        // are we in enemySelect mode?
        if (enemySelect) {
            // yes we are in enemy select mode
            $(".defender").append($(this));
            enemySelect = false;
        }
    }
});
$("#cyclops").click(function() {
    if (characterSelect) {
        $(".playerSelect").append($(this));
        $(".enemySelect").append($("#wolverine")); 
        $(".enemySelect").append($("#rogue"));
        $(".enemySelect").append($("#gambit"));
        characterSelect = false;
        var xmenAtt = $(this).attr("data-string");
        charactersXmen[xmenAtt];  
    } else {
        if (enemySelect) {
            $(".defender").append($(this));
            enemySelect = false;
        }
    }
});
$("#rogue").click(function() {
    if (characterSelect) {
        $(".playerSelect").append($(this));
        $(".enemySelect").append($("#cyclops"));
        $(".enemySelect").append($("#wolverine"));
        $(".enemySelect").append($("#gambit"));
        characterSelect = false;
        var xmenAtt = $(this).attr("data-string");
        charactersXmen[xmenAtt];
    } else {
        if (enemySelect) {
            $(".defender").append($(this));
            enemySelect = false;
        }
    }
});
$("#gambit").click(function() {
    if (characterSelect) {
        $(".playerSelect").append($(this));
        $(".enemySelect").append($("#cyclops"));
        $(".enemySelect").append($("#rogue"));
        $(".enemySelect").append($("#wolverine"));
        characterSelect = false;
        var xmenAtt = $(this).attr("data-string");
        charactersXmen[xmenAtt];
    } else {
        if (enemySelect) {
            $(".defender").append($(this));
            enemySelect = false;
        }
    }
});

// attack button will take health and subtract the number of attack power from player, then counterattack

//update with text: $("#statusAttack").text()