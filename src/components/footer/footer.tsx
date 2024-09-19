import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

export default component$(() => {
    return (
        <div class="px-10 gap-10 md:px-40 pt-10 pb-20 flex flex-row flex-wrap justify-center items-center bg-[#e8e8ea] mt-20">
            <div class="flex flex-row items-center">
                <img class="w-[6em]" src="logo_invert.png" alt="logo" />
                <div class="outf text-[1.25em]">
                    NeuraQuill <br/>
                    <div class="grot text-[0.75em]">
                        All Rights Reserved &copy; 2024
                    </div>
                </div>
            </div>
            <div class="flex-grow"></div>
            <div class="flex flex-row justify-center items-center gap-4">
                <Link href="https://www.linkedin.com/company/neuralquill/"><img class="w-[1.75em]" src="/linkedin.svg" alt="LinkedIn" /></Link>
                <Link><img class="w-[1.5em]" src="/x.svg" alt="Twitter-X" /></Link>
            </div>
        </div>
    )
})