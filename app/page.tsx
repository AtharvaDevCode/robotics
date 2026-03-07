import { LeadForm } from "./components/LeadForm";
import { Results } from "./components/Results";
import { Process } from "./components/Process";
import { Hero } from "./components/Hero";


export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Process />
      <Results />
      <LeadForm />
    </main>
  );
}