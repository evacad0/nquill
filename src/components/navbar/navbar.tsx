import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { LuMenu } from "@qwikest/icons/lucide";

export default component$(() => {
    return (
        <nav class="sm:fixed flex flex-row justify-center items-center mt-6 sm:mt-10 mx-10 xl:mx-80">
            <div class="shadow-lg flex flex-row justify-center items-center pl-4 pr-9 rounded-full bg-[#161616]">
                <img class="w-[3em] lg:w-[3.5em] rounded-full" src="/logo.jpeg" alt="logo" />
                <div class="grot lg:text-[1.25em] text-white">
                    NeuraQuill
                </div>
            </div>
            <Link class="hidden sm:block fixed right-10 xl:right-80 px-5 py-3 text-white bg-[#24A0ED] rounded-full shadow-md">
                Contact Us
            </Link>
            <Link href="#connect" class="sm:hidden p-4 ml-6 text-white bg-[#24A0ED] rounded-full shadow-md">
                <LuMenu />
            </Link>
        </nav>
    )
})