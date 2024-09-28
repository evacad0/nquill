import { component$, useSignal } from "@builder.io/qwik";
import { Form, Link, routeAction$ } from "@builder.io/qwik-city";
import { LuAlertTriangle, LuInfo, LuShieldBan, LuUnlock } from "@qwikest/icons/lucide";

export const useVerification = routeAction$(async (data) => {
    const pin = ["tutorU Access Code", data.code]
    console.log(pin)
    if(pin[1] == "0022") return true
})

export default component$(() => {
    const attempts = useSignal(false)
    const action = useVerification() 

    return (
        <main class="hidden md:block">
            <div class={(action.value ? "hidden " : "flex ") + "justify-center items-center absolute top-0 text-xl w-[100vw] h-[100vh] bg-transparent backdrop-blur-lg"}>
                <div class="flex flex-col gap-6 justify-center items-center outf px-14 py-10 rounded-2xl bg-gray-300 bg-opacity-70 shadow-xl">
                    <div class="text-[1.25em] flex flex-row gap-4 justify-center items-center">
                        <span class="text-[1.5em]"><LuShieldBan /></span>
                        Authentication Required
                    </div>
                    <Form action={action} class="mt-8 flex flex-row gap-4 justify-center items-center">
                        <input autofocus id="code" name="code" class="text-center text-gray-500 w-40 bg-white px-8 py-3 rounded-xl outline-none" placeholder="" type="number" />
                        <button onClick$={() => {attempts.value = true}} class="px-4 py-3 rounded-lg text-white bg-gray-600">
                            <LuUnlock />
                        </button>
                    </Form>
                    <div class="grot text-[0.75em]">
                        Enter the 4 digit code provided by our team.
                    </div>
                    <div class={(attempts.value ? "flex justify-center items-center gap-2 " : "hidden ") + "outf text-[0.8em] rounded-xl bg-red-600 bg-opacity-30 px-4 py-2"}>
                        <span class="text-[1.25em]">
                            <LuAlertTriangle />
                        </span>
                        Please Try Again
                    </div>
                </div>
                <div class="flex flex-row justify-center items-center outf shadow-md fixed bottom-10 right-10 bg-[#e8e8ea] px-8 py-4 rounded-2xl">
                    <span class="text-[0.8em] mr-3"><LuInfo /></span>
                    Powered by 
                    <img class="ml-2 w-[1.8em]" src="/logo_invert.png" alt="" />
                    NeuraQuill
                </div>
            </div>

            <div class="outf flex flex-col gap-20 justify-center mx-40 text-[3em] mt-40">
                <div>
                    Hello Divyesh 👋 <br/>
                    Welcome to your Dashboard
                </div>
                <div class="rale flex flex-wrap gap-4">
                    Our team has curated these designs for 
                    <span class="grot border-b-4 border-b-purple-400">tutoru.in</span>
                    <img class="w-[1em]" src="/sparkles.svg" alt="sparkles" />      
                </div>

                <div class="flex flex-wrap gap-20 justify-center items-center ">
                    <Link href="https://tutoru-rev-1.vercel.app" class="shadow-lg rounded-xl border-4 border-purple-300">
                        <img class="w-[400px] hover:w-[420px] rounded-xl" src="/tutoru/rev-01.png" alt="" />
                    </Link>
                    <Link href="#" class="text-[0.5em] grot flex justify-center items-center shadow-lg h-[208px] w-[400px] rounded-xl border-4 border-purple-300">
                        Updating Soon
                    </Link>
                    <Link href="#" class="text-[0.5em] grot flex justify-center items-center shadow-lg h-[208px] w-[400px] rounded-xl border-4 border-purple-300">
                        Updating Soon
                    </Link>
                </div>
            </div>
        </main>
    )
})
