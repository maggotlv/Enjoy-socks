function translateSentence(sentence) {
  const words = sentence.split(' ');
  let translatedSentence = '';
  for (let i = 0; i < words.length; i++) {
    switch (words[i]) {
      case 'cactus.png':
        translatedSentence += ' кактус';
        break;
      case 'duck.png':
        translatedSentence += ' уточка';
        break;
      case 'llama.png':
        translatedSentence += ' лама';
        break;
      case 'yoda.png':
        translatedSentence += ' yoda';
        break;
      case 'gorokhoviy.png':
        translatedSentence += ' гороховый';
        break;
      case 'nauchniy.png':
        translatedSentence += ' научный';
        break;
      case 'sovremenniy.png':
        translatedSentence += ' современный';
        break;
      case 'zvezdniy.png':
        translatedSentence += ' звёздный';
        break;
      default:
        translatedSentence += ` ${words[i]}`;
        break;
    }
  }
  return translatedSentence.trim();
}


console.log(translateSentence('gorokhoviy.png cactus.png'));
console.log(translateSentence('zvezdniy.png llama.png'));
