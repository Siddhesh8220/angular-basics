import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titlecase', //name of pipe
})
export class TitleCasePipe implements PipeTransform {
  transform(value: String): any {
    if (!value) return null;

    let words: String[] = value.split(' ');

    for (var i = 0; i < words.length; i++) {
      let word = words[i];
      if (i > 0 && this.isPreposition(word)) {
        words[i] = word.toLowerCase();
      } else {
        words[i] = this.toTitleCase(word);
      }
    }

    return words.join(' ');
  }

  private toTitleCase(word: String): String {
    return word.substring(0, 1).toUpperCase() + word.substring(1).toLowerCase();
  }

  private isPreposition(word: String): boolean {
    let prepositions = ['of', 'the'];
    return prepositions.includes(word.toLocaleLowerCase());
  }
}

//Notes:
// Always create separated function for different functionalities
// This makes code modular and clean to read
