import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import Navbar from "~/components/navbar/navbar";
import { LuInfo } from "@qwikest/icons/lucide";

export default component$(() => {
  return (
    <main>

      <div class="flex flex-row justify-center items-center gap-4 grot my-4 sm:hidden">
        <span class="text-[2em]"><LuInfo /></span>
        Please switch to Desktop for a better experience. 
      </div>

      <Navbar />

      <div class="flex flex-row justify-center items-center h-[50vh] gap-12 lg:w-[100vw] lg:h-[100vh]">
        
        <div class="outfi text-2xl lg:text-[4em] flex flex-col gap-6">
          Your Next B2B AI Pipeline is here
          <span class="text-[0.4em]">
            Automating workflows using Customised AI/LLM Solutions
          </span>
        </div>

        <div class="">

        </div>

        <div class="">

        </div>

      </div>

      <div class="flex flex-col gap-4 justify-center items-center">  
        <div class="text-[2.5em] rale">
          Excel Sheets Telemetry 
        </div>

        <video id="sample" height="768" width="1024" controls autoplay>
          <source src="/excel.mov" />
          Your Browser Couldn't Support the Video
        </video>
      </div>

      <div class="flex flex-col justify-center items-center h-[50vh] lg:h-[100vh] w-full">

      </div>

      <div id="connect" class="h-[50vh] sm:h-[100vh] text-xl grot flex flex-row justify-center items-center">
        Connect
      </div>

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
