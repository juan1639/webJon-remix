import type { MetaFunction } from "@remix-run/node";
import { Hero } from '../components/Hero'

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <>
      <main className="max-w-[720px] min-h-screen bg-red-500 mx-auto p-20">
        <Hero />
      </main>
    </>
  );
}
