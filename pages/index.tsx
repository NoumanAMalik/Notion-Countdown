import Head from "next/head";
import { useRouter } from "next/router";

export default function Home() {
    const router = useRouter();

    const handleClick = (e: any) => {
        const route =
            (document.getElementById("date") as HTMLInputElement)?.value +
            "--" +
            (document.getElementById("occasion") as HTMLInputElement)?.value;
        router.push("/date/[countdown]", `/date/${route}`);
    };

    return (
        <div>
            <Head>
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
            </Head>
            <input type="date" id="date" />
            <input type="text" id="occasion" />
            <button onClick={handleClick}>Submit Date</button>
        </div>
    );
}
