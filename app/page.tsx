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
        <>
            <h1 className="bg-[#131313] h-[10vh] text-[#DBDBDB] font-bold text-5xl py-4 px-8 underline">
                Notion Widget: Countdown
            </h1>
            <div className="flex flex-col h-[90vh] bg-[#131313] space-y-6 px-8 pt-8">
                <div>
                    <p className="underline font-bold text-[#DBDBDB] text-xl pb-2">
                        Enter the Date
                    </p>
                    <input
                        className="bg-[#DBDBDB] text-[#131313] rounded-lg w-48 h-8 px-2 text-xl"
                        type="date"
                        id="date"
                        onChange={updateRoute}
                    />
                </div>
                <div>
                    <p className="underline font-bold text-[#DBDBDB] text-xl pb-2">
                        Enter the Event Name
                    </p>
                    <input
                        className="bg-[#DBDBDB] text-[#131313] rounded-lg w-48 h-8 px-2 text-xl"
                        type="text"
                        id="occasion"
                        placeholder="Event Name Here..."
                        onChange={updateRoute}
                    />
                </div>
                <button
                    className="bg-[#DBDBDB] text-[#131313] rounded-lg w-48 h-8 px-2 font-bold cursor-pointer text-xl"
                    onClick={(e) => {
                        r.push(`/date/${route}`);
                    }}
                >
                    Submit Date
                </button>
            </div>
        </>
    );
}
