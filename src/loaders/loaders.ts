import { routeAction$ } from "@builder.io/qwik-city";

export const useVerification = routeAction$(async (data) => {
    const dat = [data.code]
    console.log(dat)
})

