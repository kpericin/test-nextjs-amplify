import { words } from "@/words";
import { MUICard, MUITypography } from "@/ui";
import Link from "next/link";
import seedrandom from "seedrandom";

export default function Home() {
  const date = new Date().toISOString().slice(0, 10); // Get current date as "YYYY-MM-DD"
  const rng = seedrandom(date); // Create a new seeded pseudo-random number generator
  const index = Math.floor(rng() * words.length); // Generate a "random" index

  return (
    <>
      <MUITypography variant="h1">English Words Playground</MUITypography>
      <section>
        <MUITypography variant="h2">Search</MUITypography>
        <Link href="/search">Search</Link>
      </section>
      <section>
        <MUITypography variant="h2">Word of The Day</MUITypography>
        <Link href={`/wotd/${words[index]}`}>Word of the day</Link>
      </section>
    </>
  );
}
