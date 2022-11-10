"use client";

import { useState } from "react";
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
    };

    return (
        <div className="flex flex-col items-center justify-center bg-transparent space-y-2">
            <p className="underline font-bold">Enter the Date</p>
            <input
                className="bg-white rounded"
                type="date"
                id="date"
                onChange={updateRoute}
            />
            <p className="underline font-bold">Enter the Event Name</p>
            <input
                className="bg-white rounded"
                type="text"
                id="occasion"
                onChange={updateRoute}
            />
            <button
                className="bg-white rounded font-bold p-1 cursor-pointer"
                onClick={(e) => {
                    r.push(`/date/${route}`);
                }}
            >
                Submit Date
            </button>
        </div>
    );
}
