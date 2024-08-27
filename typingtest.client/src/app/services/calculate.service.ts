import { Injectable } from '@angular/core';
import { Test, Word } from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class CalculateService {

  constructor() { }

  calculateTestResult(words: Word[], duration: number, testType: string)
    : Test {
    let testResult: Test = {
      time: new Date().toString(),
      duration: duration,
      type: testType,
      netWPM: 0,
      grossWPM: 0,
      accuracy: 0,
      characters: 0,
      correctCharacters: 0,
      wrongCharacters: 0,
      words: 0,
      correctWords: 0,
      wrongWords: 0,
    };

    for (let word of words) {
      (word.isCorrect || word.isWrong) && ++testResult.words;
      word.isCorrect && ++testResult.wrongWords;
      word.isWrong && ++testResult.wrongWords;

      testResult.characters += word.characters;
      testResult.correctCharacters += word.correctCharacters;
      testResult.wrongCharacters += word.wrongCharacters;
    }

    testResult.grossWPM = testResult.characters / (5 * duration);
    testResult.grossWPM = Math.round(testResult.grossWPM);

    testResult.netWPM = testResult.correctCharacters / (5 * duration);
    testResult.netWPM = Math.round(testResult.netWPM);

    testResult.accuracy = (testResult.correctCharacters / testResult.characters) * 100;
    testResult.accuracy = parseFloat(testResult.accuracy.toFixed(2));

    return testResult;
    }
}
