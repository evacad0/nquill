import { component$ } from "@builder.io/qwik";

export default component$(() => {
    return (
        <section class="mx-10 h-[50vh] md:h-[100vh] flex flex-col items-center">

            <svg id="reel" class="hidden md:block absolute" width="600" height="400" xmlns="http://www.w3.org/2000/svg">
                <path d="M  20 80 L  20 200 M  20 200 L 300 320" stroke="black" stroke-width="1" fill="transparent"/>
                <path d="M 220 80 L 220 200 M 220 200 L 300 320" stroke="black" stroke-width="1" fill="transparent"/>
                <path d="M 390 80 L 390 200 M 390 200 L 300 320" stroke="black" stroke-width="1" fill="transparent"/>
                <path d="M 585 80 L 585 200 M 585 200 L 300 320" stroke="black" stroke-width="1" fill="transparent"/>

                <circle cx="" cy="" color="" width="" />
            </svg>

            <div class="hidden md:block absolute mt-60 h-40 w-40 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 p-2">
                <div class="flex h-full w-full items-center justify-center rounded-full bg-[#161616] back">
                    <img class="rounded-full" src="logo.jpeg" alt="logo" />
                </div>
            </div>

            <div class="mt-[210px] md:mt-[420px] flex flex-col gap-5 md:gap-10 lg:gap-20 justify-center items-center">
                <div class="text-[2em] outf">
                    Scope of Services
                </div>
                <div class="flex flex-row flex-wrap gap-5 md:gap-10 lg:gap-20 items-center justify-center">
                    <div class="shadow-md rounded-xl bg-gradient-to-r from-indigo-500 via-emerald-500 to-yellow-300 p-1">
                        <div class="bg-black bg-opacity-80 px-4 py-6 rounded-xl text-white grot">
                            Full Stack Website/Web-App Development, Testing and Deployment
                        </div>
                    </div>
                    <div class="shadow-md rounded-xl bg-gradient-to-r from-purple-500 via-sky-500 to-red-400 p-1">
                        <div class="bg-black bg-opacity-80 px-4 py-6 rounded-xl text-white grot">
                            Integrating Gen AI/LLM Pipelines to Pre-existing Software Architecture
                        </div>
                    </div>
                    <div class="shadow-md rounded-xl bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 p-1">
                        <div class="bg-black bg-opacity-80 px-4 py-6 rounded-xl text-white grot">
                            State of the Art Chatbots with Gen AI/LLM Pipeline Integration
                        </div>
                    </div>
                    <div class="shadow-md rounded-xl bg-gradient-to-r from-emerald-500 via-indigo-500 to-violet-500 p-1">
                        <div class="bg-black bg-opacity-80 px-4 py-6 rounded-xl text-white grot">
                            Personalised Complex Machine Learning and Deep Learning Models
                        </div>
                    </div>
                    <div class="shadow-md rounded-xl bg-gradient-to-r from-orange-400 via-emerald-500 to-yellow-300 p-1">
                        <div class="bg-black bg-opacity-80 px-4 py-6 rounded-xl text-white grot">
                            Prompt Engineering for Optimal Generation
                        </div>
                    </div>
                </div>
                {/* <div class="flex flex-row flex-wrap gap-5 md:gap-10 lg:gap-20 items-center justify-center">
                </div> */}
            </div>

        </section>
    )
})