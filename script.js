// Challenge 1: Store the string "I am a" in one variable and store the other string "Kalvian" in other variable and concatenate both the string to get the output as "I am a Kalvain" using "+" operator.
var a = 'I am a';
var b = 'Kalvian';
console.log((c = a + b));

// Challenge 2: Store the given string in a variable and print the same in console. String: If you fail, never give up because FAIL means "First Attempt In Learning".
var String =
  'If you fail, never give up because FAIL means "First Attempt In Learning"';
console.log(String);

// Challenge 3: Store a string in a variable and display the length of the string.
var c = 'welcome to kalvium';
console.log(c.length);

// Challenge 4: Store a string in a variable and convert it into uppercase.
var d = 'geethanjali';
console.log(d.toUpperCase(d));
//Challenge 5: Store the string "I love programming" in a variable and replace the word programming with "JavaScript programming".
var e = 'I love programming';
console.log(e.replace('programming', 'JavaScript programming'));

// Challenge 6: Store a string in variable and print the string in console 3 times using repeat method.
var f = 'Datatypes';
console.log(f.repeat(3));
//Challenge 7: Store the string as "I am a Kalvian" in a variable and convert the string into array and print the array in console.
var g = 'I am a Kalvian';
var h = g.split(' ');
console.log(h);

// Challenge 8: Store the given string "Time and Tide wait for none" in a variable and using indexOf method find the index of "Ti" and print the same in console.
var i = 'Time and Tide wait for none';
console.log(i.indexOf('Ti'));
// Challenge 9: Store the given string "When life gives you lemons make lemonade" in a variable and find whether it includes "lemon".
var j = 'When life gives you lemons make lemonade';
console.log(j.includes('lemon'));
// Challenge 10: Store the given string "You must be the change you wish to see in the world." in a variable and use slice to console log the word "change" and use substring method to console log the word "world".
var k = 'You must be the change you wish to see in the world.';
var l = k.slice(16, 23);
var m = k.substring(45, 51);
console.log("word 'change':", l);
console.log("word 'world:'", m);
