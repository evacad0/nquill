import { component$ } from "@builder.io/qwik";

export default component$(() => {
    return (
        <section class="h-[50vh] md:h-[100vh] flex flex-col gap-20 justify-center items-center">
            <div class="intern text-[2em]">
                Our Services
            </div>

            <div class="h-40 w-40 rounded-md bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 p-2">
                <div class="flex h-full w-full items-center justify-center rounded-md bg-gray-800 back">
                    <h1 class="text-3xl outf text-white">AI</h1>
                </div>
            </div>
            
            
        </section>
    )
})