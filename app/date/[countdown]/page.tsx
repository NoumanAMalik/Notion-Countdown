"use client";

export default function DatePage({
    params,
}: {
    params: { countdown: string };
}) {
    const countdown = params.countdown;

    const routeArray = String(countdown).split("--");

    const endDate = new Date(routeArray[0] + "T00:00:00");
    const currentDate = new Date();

    const totalSeconds = (endDate.getTime() - currentDate.getTime()) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds % 60);

    return (
        <div
            className={`${
                routeArray[2] === "dark" ? "text-white" : "text-black"
            }flex flex-col items-center h-full justify-center font-bold text-2xl`}
        >
            <p>{routeArray[1]}</p>
            <p className="font-medium">
                {days}d {hours}h {minutes}m {seconds}s
            </p>
        </div>
    );
}
