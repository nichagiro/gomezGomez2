import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
    return (
        <Html>
            <Head />
            <link href="https://fonts.googleapis.com/css2?family=Rajdhani:wght@400;500;600;700&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Mukta:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
            <body>
                <Main />
                <NextScript />
                <Script strategy='beforeInteractive' src="assets/js/jquery-3.5.1.min.js" />
                <Script strategy='lazyOnload' src="assets/js/fontawesome.min.js" />
            </body>
        </Html>
    )
}