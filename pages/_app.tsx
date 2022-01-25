import '../styles/global.css'
import {AppProps} from 'next/app'
import {useState} from 'react'

export default function App({Component, pageProps}: AppProps) {
    const [isDark, setIsDark] = useState(false)

    return (
        <>
            <Component {...pageProps} />
            <style jsx global>{`
              body {
                background: ${isDark ? "darkslategray" : "antiquewhite"};
              }
            `}</style>
        </>
    )
}
