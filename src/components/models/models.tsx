import { component$ } from "@builder.io/qwik";

export default component$(() => {
    return (
        <section id="reel" class="mt-20 md:mt-60 mx-6 || flex flex-col justify-center items-center gap-6">
            <div class="flex flex-row flex-wrap gap-20 justify-center items-center">
                <img class="w-[5em] md:w-[7em]" src="claude.svg" alt="Claude-AI" />
                <img class="w-[5em] md:w-[7em]" src="openai.svg" alt="OpenAI" />
                <img class="w-[5em] md:w-[7em]" src="meta.svg" alt="Meta-AI" />
                <img class="w-[4.75em] md:w-[6.5em] -translate-y-1" src="gemini.svg" alt="Google-Gemini" />
            </div>
        </section>
    )
})