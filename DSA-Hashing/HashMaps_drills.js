const HashMap = require('./hashingClasswork');
const Hashmap = require('./hashingClasswork');

function main () {

    let lotr = new Hashmap;

    lotr.set("Hobbit", "Bilbo");
    lotr.set("Hobbit", "Frodo");
    lotr.set("Wizard", "Gandalf");
    lotr.set("Human", "Aragorn");
    lotr.set("Elf", "Legolas");
    lotr.set("Maiar", "The Necromancer");
    lotr.set("Maiar", "Sauron");
    lotr.set("RingBearer", "Gollum");
    lotr.set("LadyOfLight", "Galadriel");
    lotr.set("HalfElven", "Arwen");
    lotr.set("Ent", "Treebeard");
    
    //console.log(lotr);

    //console.log(lotr.get('Maiar'));
    //console.log(lotr.get('Hobbit'));

}

main();

//What is the output of the following code? explain your answer.
//   20 then 10

const WhatDoesThisDo = function(){
    let str1 = 'Hello World.';
    let str2 = 'Hello World.';
    let map1 = new Hashmap();
    map1.set(str1,10);
    map1.set(str2,20);
    let map2 = new Hashmap();
    let str3 = str1;
    let str4 = str2;
    map2.set(str3,20);
    map2.set(str4,10);

    console.log(map1.get(str1));
    console.log(map2.get(str3));
}

//WhatDoesThisDo();


function removeDuplicates(word) {
    let dupes = new HashMap();

    let wordLength = word.length;

    let noDupes = '';

    for (let i = 0; i < wordLength; i++) {
        dupes.removeDupes(word.charAt(i), i+1);
    }

    dupes.logNoDupes();

}

//removeDuplicates('google all that you think can think of');
//removeDuplicates('google');