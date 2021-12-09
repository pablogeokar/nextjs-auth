import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { AuthProvider } from '../context/AuthProvider'
import 'antd/dist/antd.css'
import { ProtectedLayout } from '../components/ProtectedLayout'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <ProtectedLayout>
        <Component {...pageProps} />
      </ProtectedLayout>
    </AuthProvider>
  )
}

export default MyApp
