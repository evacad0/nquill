import { component$ } from "@builder.io/qwik";

export default component$(() => {
    return (
        <section class="mt-20 md:mt-40 mx-10 || flex flex-col justify-center items-center gap-6">
            <div class="flex flex-row flex-wrap gap-20 justify-center items-center">
                <img class="w-[7em]" src="claude.svg" alt="Claude-AI" />
                <img class="w-[7em]" src="openai.svg" alt="OpenAI" />
                <img class="w-[7em]" src="mistral.svg" alt="Mistral-AI" />
                <img class="w-[7em]" src="gemini.svg" alt="Google-Gemini" />
            </div>
        </section>
    )
})