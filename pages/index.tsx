import { useRouter } from "next/router";

export default function Home() {
    const router = useRouter();

    const handleClick = (e: any) => {
        const route =
            (document.getElementById("date") as HTMLInputElement)?.value +
            "|" +
            (document.getElementById("occasion") as HTMLInputElement)?.value;
        router.push(`/date/${route}`);
    };

    return (
        <div>
            <input type="date" id="date" />
            <input type="text" id="occasion" />
            <button onClick={handleClick}>Submit Date</button>
        </div>
    );
}
