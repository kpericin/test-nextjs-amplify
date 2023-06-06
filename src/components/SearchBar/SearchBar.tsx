"use client";

import { Word } from "@/types";
import { Box, Button, TextField } from "@mui/material";
import { FormEvent, useEffect, useState } from "react";
import Words from "../Words/Words";

export default function SearchBar() {
  const [userInput, setUserInput] = useState<string>();
  const [words, setWords] = useState<Word[]>([]);

  const handleSearch = (event: FormEvent) => {
    event.preventDefault();
    if (userInput)
      fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${userInput}`)
        .then((response) => response.json())
        .then((json) => setWords(json));
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <Box display="flex" gap={4} marginBottom={2}>
          <TextField
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
          />
          <Button type="submit" variant="contained" color="primary">
            Search
          </Button>
        </Box>
      </form>
      <Words words={words} />
    </div>
  );
}
