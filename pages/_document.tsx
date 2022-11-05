import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html>
            <Head />
            <body>
                <div id="action-sheet-container"></div>
                <div id="side-nav"></div>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
