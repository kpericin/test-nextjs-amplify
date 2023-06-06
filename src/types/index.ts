export type Word = {
  word: string;
  phonetics: Phonetics[];
  meanings: Meaning[];
};

export type Phonetics = {
  text?: string;
};

export type Meaning = {
  partOfSpeech: string;
  definitions: Definition[];
};

export type Definition = {
  definition: string;
  example?: string;
};
