import '../globals.css'
import { Space_Grotesk } from 'next/font/google'
import {GoogleAnalytics} from '@next/third-parties/google'
import Script from "next/script";

const sg = Space_Grotesk({
    weight: '400',
    subsets: ['latin'],
})

export default function App({ Component, pageProps }) {
    return (
        <main className={sg.className}>
        {
        process.env.NEXT_PUBLIC_GOOGLE_OPEN != '0' ?
            <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GOOGLE_TAG_ID}/>
        :
            null
        }
        {/*{*/}
        {/*process.env.NEXT_PUBLIC_GOOGLE_OPEN != '0' ?*/}
        {/*    <Script*/}
        {/*        async*/}
        {/*        src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=xxx`}*/}
        {/*        crossOrigin="anonymous"*/}
        {/*        strategy="afterInteractive"*/}
        {/*    />            */}
        {/*:*/}
        {/*    null*/}
        {/*}*/}

        {/*    {*/}
        {/*        process.env.NEXT_PUBLIC_GOOGLE_OPEN != '0' ?*/}
        {/*            <meta*/}
        {/*                name="google-adsense-account" content="xxx"*/}
        {/*            />*/}
        {/*            :*/}
        {/*            null*/}
        {/*    }*/}


            <Component {...pageProps} />
        </main>
    )
}