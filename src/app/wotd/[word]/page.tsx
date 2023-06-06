import Words from "@/components/Words/Words";
import { Word } from "@/types";
import { MUITypography } from "@/ui";

const getData = async (word: string): Promise<Word[]> => {
  const data = await fetch(
    `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
  );
  return data.json();
};

type RandomWordProps = {
  params: {
    word: string;
  };
};

export default async function RandomWord({ params }: RandomWordProps) {
  const data = await getData(params.word);

  return (
    <div>
      <MUITypography variant="h1">{params.word}</MUITypography>
      <Words words={data} />
    </div>
  );
}
