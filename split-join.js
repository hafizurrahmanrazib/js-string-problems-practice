// String All Split Operation
// When need to split words
/* const lyrics = 'Tumi bondhu kala pakhi ami jeno ki. bosonto kale tomai bolte pari ni. kala kala sada sada';
const words = lyrics.split(' ');
console.log(words); */

// When need to split sentences
/* const lyrics = 'Tumi bondhu kala pakhi ami jeno ki. bosonto kale tomai bolte pari ni. kala kala sada sada';
const sentences = lyrics.split('.');
console.log(sentences); */

// When need to split characters
/* const lyrics = 'Tumi bondhu kala pakhi ami jeno ki. bosonto kale tomai bolte pari ni. kala kala sada sada';
const chars = lyrics.split('');
console.log(chars); */

// String Slice Operation
/* const lyrics = 'Tumi bondhu kala pakhi ami jeno ki. bosonto kale tomai bolte pari ni. kala kala sada sada';
const partial = lyrics.slice(5, 8);
console.log(partial);  */

// String Substring Operation
/* const lyrics = 'Tumi bondhu kala pakhi ami jeno ki. bosonto kale tomai bolte pari ni. kala kala sada sada';
const partial = lyrics.substring(5, 8);
console.log(partial);  */

// 
const lines = [
    'Tumi bondhu kala pakhi ami jeno ki',
    'bosonto kale tomai bolte pari ni',
    'kala kala sada sada'
];

const newSong = lines.join('. ');
console.log(newSong);