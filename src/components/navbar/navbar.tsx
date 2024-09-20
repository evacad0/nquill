import { component$, useSignal } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { LuMenu } from "@qwikest/icons/lucide";

export default component$(() => {
    const menuEnable = useSignal(false)

    return (
        <nav class={"mt-6 mx-4 sm:mx-40 xl:mx-80 p-1 md:p-2 || flex flex-row justify-center items-center shadow-lg rounded-2xl bg-[#e8e8ea] bg-opacity-100 backdrop-blur-md" + ((menuEnable.value) ? " mb-60" : "")}>
            <div class="flex flex-row items-center">
                <img class="w-[3.5em] rounded-2xl" src="logo_invert.png" alt="logo" />
                <div class="outf text-[1.5em]">
                    NeuraQuill
                </div>
            </div>
            
            <div class="flex-grow">
                
            </div>
            <div class="hidden md:flex flex-row gap-6 justify-center items-center mr-3">
                <Link class="outf">Demo</Link>
                <Link class="outf">Pricing</Link>
                <Link href="#cta" class="bg-white px-4 py-2 rounded-xl shadow-sm outf">Contact Us</Link>
            </div>
            <div class="flex md:hidden mr-4">
                <button onClick$={() => {(menuEnable.value) ? menuEnable.value = false : menuEnable.value = true}} class="text-[2em] p-1 rounded-lg bg-white shadow-sm">
                    <LuMenu />
                </button>
                <div class={"flex flex-col justify-center gap-3 w-40 p-4 top-20 -translate-x-[110px] " + ((menuEnable.value) ? "absolute shadow-md rounded-2xl" : "hidden")}>
                     <Link class="outf">Demo</Link>
                     <hr/> 
                     <Link class="outf">Pricing</Link>
                     <hr/>
                     <Link href="#cta" class="outf">Contact Us</Link>
                </div>  
            </div>
        </nav>

    )
})