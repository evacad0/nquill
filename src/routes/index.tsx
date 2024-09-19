import { component$, useSignal } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import Navbar from "~/components/navbar/navbar";
import { LuCheckCircle } from "@qwikest/icons/lucide";
import { Link } from "@builder.io/qwik-city";
import Reel from "~/components/reel/reel";
import Models from "~/components/models/models";
import Sample from "~/components/sample/sample";
import Footer from "~/components/footer/footer";
import { Form, routeAction$ } from "@builder.io/qwik-city";
import { LuMailPlus } from "@qwikest/icons/lucide";
import { createClient } from "@supabase/supabase-js";


export const useCreds = routeAction$(async (date) => {
  const sbUrl = "https://vxmheghlrgsfaivacwce.supabase.co";
  const sbKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ4bWhlZ2hscmdzZmFpdmFjd2NlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjY1MDEzMDYsImV4cCI6MjA0MjA3NzMwNn0.sYBvBDNpZxhXM7DswcDqi6EiDEPY5Nk8QRscFm7L9TQ";
  const db = createClient(sbUrl, sbKey);

  // const dat = [date.name, date.phone, date.q]
  // console.log(dat);
  
  const { data, error } = await db
  .from('nquill')
  .insert([
    { name: date.name, phone: date.phone, body: date.q },
  ])
  .select()
        
  console.log([data, error]);
  // return data;
})

export default component$(() => {
  const action = useCreds();
  const check = useSignal(false);
  const frm = useSignal<HTMLFormElement>();

  return (
    <main class="scroll-smooth">

      {/* <div class="flex flex-row justify-center items-center gap-4 grot my-4 sm:hidden">
        <span class="text-[2em]"><LuInfo /></span>
        Please switch to Desktop for a better <br/> experience. 
      </div> */}

      <Navbar />

      <div class="mt-20 md:mt-40 mx-4 md:mx-40 lg:mx-60 xl:mx-80 || flex flex-row justify-center items-center">
        <div class="flex flex-col justify-center items-left gap-6">
          <div class="grot text-[2em] md:text-[3em]">
            Empowering Businesses with&nbsp;
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-sky-500 to-emerald-400 inline-block">AI-driven Automation.</span>   
          </div>

          <div class="outf text-[1em] md:text-[2em]">Scalable AI Solutions Tailored to your Enterprise Needs</div>

          <div class="text-[0.75em] md:text-[1em] grot flex flex-row gap-4 justify-left items-center">
            <Link href="#reel" class="shadow-md rounded-lg px-6 py-2 border border-[#0f62fe]">Learn More</Link>
            <Link href="https://cal.com/evacad0/neuraquill-meeting" class="shadow-md rounded-lg px-6 py-2 text-white bg-[#0f62fe]">Schedule a Meeting</Link>
          </div>
        </div>

        <div class="hidden 2xl:block bhop">
          <img class="w-[250px]" src="robot.png" alt="AI Robot" />
        </div>
      </div>

      <Models />

      <Reel />

      <Sample />

      <div id="cta" class="mx-5 xl:mx-96 mt-20 md:mt-40 || shadow-lg flex flex-col items-left p-10 rounded-2xl border-2 border-black border-dashed">
        <div class="flex flex-row items-center outf text-[1.75em] md:text-[2.5em] mb-10">
          Getting in touch
          <span class="flex-grow"></span>
          <span class={"text-[1em] " + (check.value ? "hidden" : "block")}>
              <LuMailPlus />
          </span>
          <span class={"text-[1em] " + (check.value ? "block" : "hidden")}>
              <LuCheckCircle />
          </span>
        </div>
        <Form id="cta-form" action={action} ref={frm} class="text-[1.25em] flex flex-col items-start justify-center gap-8">
          <div>
              <label class="intern" for="name">Name</label><br/>
              <input required class="grot outline-none border-b-2 border-b-[#0f62fe] focus:border-b-indigo-600" placeholder="John Doe" id="name" name="name" type="text" />
          </div>
          <div>
              <label class="intern" for="">Telephone</label><br/>
              <input required class="grot outline-none border-b-2 border-b-[#0f62fe] focus:border-b-indigo-600" placeholder="+91" id="phone" name="phone" type="tel" />
          </div>
          <div>
              <label class="intern" for="">Query</label><br/>
              <input required class="xl:w-[200%] grot outline-none border-b-2 border-b-[#0f62fe] focus:border-b-indigo-600" placeholder="AI Pipelines" id="q" name="q" type="text" />
          </div>
          <button onClick$={() => {
              check.value = true
              frm.value?.reset()
            }} type="submit" disabled={check.value} class={"outf px-4 py-2 rounded-xl shadow-md" + (check.value ? " shadow-none text-black bg-none border-2 border-[#0f62fe]" : " text-white bg-[#0f62fe]")}>
            {check.value ? "Submitted" : "Let's Talk"}
          </button>
          <div class={"outf " + (check.value ? "block" : "hidden")}>
            An authorised representative will contact you shortly.
          </div>
        </Form>
      </div>

      <Footer />

    </main>
  );
});

export const head: DocumentHead = {
  title: "NeuraQuill",
  meta: [
    {
      name: "description",
      content: "NeuraQuill Home Page",
    },
    {
      name: "keywords",
      content: "AI, LLM, Pipeline, Claude, Gemini, OpenAI, ChatGPT, Automation, Mistral, Llama",
    },
  ],
};
