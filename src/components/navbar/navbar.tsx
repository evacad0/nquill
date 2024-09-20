import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

export default component$(() => {
    return (
        
        <nav class="mt-6 mx-4 sm:mx-40 xl:mx-80 p-2 || flex flex-row justify-center items-center shadow-lg rounded-2xl bg-[#e8e8ea] bg-opacity-100 backdrop-blur-md">
            <div class="flex flex-row items-center">
                <img class="w-[3.5em] rounded-2xl" src="logo_invert.png" alt="logo" />
                <div class="outf text-[1.5em]">
                    NeuraQuill
                </div>
            </div>
            
            <div class="flex-grow">
                
            </div>
            <div class="flex flex-row gap-2 justify-center items-center mr-3">
                <Link href="#cta" class="bg-white px-4 py-2 rounded-xl shadow-sm outf">Contact Us</Link>
            </div>
        </nav>

    )
})