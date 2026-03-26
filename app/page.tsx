import { LeadForm } from "./components/LeadForm";
import { Results } from "./components/Results";
import { Process } from "./components/Process";
import { Hero } from "./components/Hero";
import { Research } from "./components/Research"; // Add this

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <Process />
      <Results />
      <Research />
      <LeadForm />
    </main>
  );
}