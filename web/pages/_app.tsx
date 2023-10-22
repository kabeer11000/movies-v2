import '../styles/globals.css'
import type {AppProps} from 'next/app'
import {AuthProvider} from '../hooks/useAuth'
import {RecoilRoot} from 'recoil'

function MyApp({Component, pageProps}: AppProps) {
    return (
        <RecoilRoot>
            <script src="https://cdn.jsdelivr.net/npm/@webtor/embed-sdk-js/dist/index.min.js" charSet="utf-8"
                    async></script>
            {/* Higher Order Component */}
            <AuthProvider>
                <Component {...pageProps} />
            </AuthProvider>
        </RecoilRoot>
    )
}

export default MyApp
