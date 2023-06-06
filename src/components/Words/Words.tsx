import { Word as WordType } from "@/types";
import { MUITypography } from "@/ui";

type WordProps = {
  words: WordType[];
};

export const Words = ({ words }: WordProps) => {
  return (
    <div>
      {words.map((word) => (
        <div key={word.word}>
          {word.phonetics.map((phonetic, index) => (
            <div key={index}>
              <MUITypography>{phonetic.text}</MUITypography>
            </div>
          ))}
          {word.meanings.map((meaning, index) => (
            <div key={index}>
              <MUITypography variant="h6">{meaning.partOfSpeech}</MUITypography>
              {meaning.definitions.map((def, defIndex) => (
                <MUITypography key={defIndex}>{def.definition}</MUITypography>
              ))}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Words;
