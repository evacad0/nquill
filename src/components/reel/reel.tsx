import { component$ } from "@builder.io/qwik";

export default component$(() => {
    return (
        <section class="h-[50vh] md:h-[100vh] flex flex-col items-center">
            {/* <div class="intern text-[2em]">
                Our Services
            </div> */}

            <svg width="600" height="400" xmlns="http://www.w3.org/2000/svg">
                <path d="M  40 80 L  40 200 M  40 200 L 300 350" stroke="black" fill="transparent "/>
                <path d="M 220 80 L 220 200 M 220 200 L 300 350" stroke="black" fill="transparent "/>
                <path d="M 390 80 L 390 200 M 390 200 L 300 350" stroke="black" fill="transparent "/>
                <path d="M 565 80 L 565 200 M 565 200 L 300 350" stroke="black" fill="transparent "/>
            </svg>

            <div class="absolute mt-60 h-40 w-40 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 p-2">
                <div class="flex h-full w-full items-center justify-center rounded-full bg-[#161616] back">
                    <img class="rounded-full" src="logo.jpeg" alt="logo" />
                </div>
            </div>
             


        </section>
    )
})