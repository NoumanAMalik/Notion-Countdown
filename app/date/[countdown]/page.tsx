"use client";
import { useEffect, useState } from "react";

export default function DatePage({
    params,
}: {
    params: { countdown: string };
}) {
    const [currentDate, setCurrentDate] = useState({ one: new Date() });

    const countdown = params.countdown;ß
    console.log(countdown);

    const routeArray = String(countdown).split("--");
    console.log(routeArray[2]);

    const endDate = new Date(routeArray[0] + "T00:00:00");
 
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentDate({one: new Date()})
        }, 1000);

        return () => clearInterval(interval)
    }, []);

    let totalSeconds = (endDate.getTime() - currentDate.one.getTime()) / 1000;

    if (totalSeconds < 0) {
        totalSeconds = 0;
    }

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds % 60);

    return (
        <div
            className={`flex flex-col items-center h-full justify-center font-bold text-2xl 
                        ${
                            routeArray[2] == "dark"
                                ? "text-white"
                                : "text-black"
                        }`}
        >
            <p>{routeArray[1]}</p>
            <p className="font-medium">
                {days}d {hours}h {minutes}m {seconds}s
            </p>
        </div>
    );
}
