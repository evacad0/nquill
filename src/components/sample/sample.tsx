import { component$ } from "@builder.io/qwik";

export default component$(() => {
    return (
        <div class="mx-2 mt-[800px] md:mt-80 lg:mt-60 flex flex-col gap-4 justify-center items-center">  
            <div class="text-[1.75em] md:text-[2.5em] outf">
                Excel Sheets Telemetry Example
            </div>

            <video class="rounded-3xl" id="sample" height="768" width="1024" controls autoplay>
                <source src="/excel.mov" />
                Your Browser Couldn't Support the Video
            </video>
        </div>
    )
})