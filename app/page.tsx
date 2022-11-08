"use client";

import Head from "next/head";
import { ChangeEvent, useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
    const [route, setRoute] = useState("date--title");
    const r = useRouter();

    const updateRoute = (e: any) => {
        setRoute((oldRoute) => {
            let array = oldRoute.split("--");
            if (e.target.type == "date") {
                array[0] = e.target.value;
            } else if (e.target.type == "text") {
                array[1] = e.target.value;
            }

            let newRoute = array[0] + "--" + array[1];
            console.log(newRoute);
            return newRoute;
        });

        // const route =
        //     (document.getElementById("date") as HTMLInputElement)?.value +
        //     "--" +
        //     (document.getElementById("occasion") as HTMLInputElement)?.value;
        // router.push("/date/[countdown]", `/date/${route}`);
    };

    return (
        <div>
            {/* <Head>
                <title>Social Media Preview</title>
                <meta property="og:url" content="your url" />
                <meta property="og:type" content="website" />
                <meta property="fb:app_id" content="your fb app id" />
                <meta
                    property="og:title"
                    content="Social Media Preview Working?"
                />
                <meta name="twitter:card" content="summary" />
                <meta
                    property="og:description"
                    content="Hurray!! Yes Social Media Preview is Working"
                />
            </Head> */}
            <input type="date" id="date" onChange={updateRoute} />
            <input type="text" id="occasion" onChange={updateRoute} />
            <button
                onClick={(e) => {
                    r.push(`/date/${route}`);
                    // r.push(`/date/${route}`);
                }}
            >
                Submit Date
            </button>
        </div>
    );
}
