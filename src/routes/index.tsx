import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import Navbar from "~/components/navbar/navbar";
import { LuInfo } from "@qwikest/icons/lucide";
import { Link } from "@builder.io/qwik-city";
import Reel from "~/components/reel/reel";

export default component$(() => {
  return (
    <main class="scroll-smooth">

      <div class="flex flex-row justify-center items-center gap-4 grot my-4 sm:hidden">
        <span class="text-[2em]"><LuInfo /></span>
        Please switch to Desktop for a better <br/> experience. 
      </div>

      <Navbar />

      <div class="mt-20 md:mt-40 mx-4 md:mx-40 lg:mx-60 xl:mx-80 || flex flex-row justify-center items-center">
        <div class="flex flex-col justify-center items-left gap-6">
          <div class="grot text-[2em] md:text-[3em]">
            Empowering Businesses with&nbsp;
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-sky-500 to-emerald-400 inline-block">AI-driven Automation.</span>   
          </div>

          <div class="outf text-[1em] md:text-[2em]">We clearly have a thing for AI lmao.</div>

          <div class="text-[0.75em] md:text-[1.4em] grot flex flex-row gap-4 justify-left items-center">
            <Link href="#" class="rounded-lg px-6 py-2 border border-[#0f62fe]">Learn More</Link>
            <Link href="/meet" class="rounded-lg px-6 py-2 text-white bg-[#0f62fe]">Schedule a Meeting</Link>
          </div>
        </div>

        <div class="hidden 2xl:block bhop">
          <img class="w-[250px]" src="robot.png" alt="AI Robot" />
        </div>
      </div>

      <Reel />

    </main>
  );
});

export const head: DocumentHead = {
  title: "NeuraQuill",
  meta: [
    {
      name: "description",
      content: "NeuraQuill Demo Site",
    },
  ],
};
