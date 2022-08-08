/* const lyrics = 'Tumi bondhu kala pakhi ami jeno ki. bosonto kale tomai bolte pari ni. kala kala sada sada';

const doesExist = lyrics.includes('pakhi');
console.log(doesExist); */

// indexOf
/* const lyrics = 'Tumi bondhu kala pakhi ami jeno ki. bosonto kale tomai bolte pari ni. kala kala sada sada';
// console.log(lyrics.indexOf('kala'));
// console.log(lyrics.indexOf('kailla'));
// console.log(lyrics.indexOf('Tumi'));
if (lyrics.indexOf('sada') !== -1) {
    console.log('Exists inside the string');
}
else {
    console.log('Can not find it');
} */

// startsWith
/* const lyrics = 'Tumi bondhu kala pakhi ami jeno ki. bosonto kale tomai bolte pari ni. kala kala sada sada';
console.log(lyrics.startsWith('Tumi')); */

// endsWith
/* const lyrics = 'Tumi bondhu kala pakhi ami jeno ki. bosonto kale tomai bolte pari ni. kala kala sada sada';
console.log(lyrics.endsWith('sada')); */

// To Check Case Of purpose
const fileName = 'myBiodata.pdf';
const otherFile = 'mypic.png';
console.log(fileName.endsWith('.pdf'));