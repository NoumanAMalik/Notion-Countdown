"use client";

export default function Page({ params }: { params: { countdown: string } }) {
    const countdown = params.countdown;

    const routeArray = String(countdown).split("--");

    const endDate = new Date(routeArray[0] + "T00:00:00");
    const currentDate = new Date();

    const totalSeconds = (endDate.getTime() - currentDate.getTime()) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds % 60);

    // var today = new Date();

    // const timeUntil: String[] = [
    //     String(parseInt(routeArray[0]) - today.getFullYear()),
    //     String(parseInt(routeArray[1]) - today.getMonth() - 1),
    //     String(parseInt(routeArray[2]) - today.getDate()),
    // ];

    return (
        <p>
            {routeArray[1]} is in {days} days {hours} hours {minutes} minutes{" "}
            {seconds} seconds
        </p>
    );
}
