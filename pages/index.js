import Head from 'next/head'
import About from '../components/About'
import Profile from '../components/Profile'
import Projects from '../components/Projects'
export default function Home() {
  return (
    <div>
      <Head>
        <title>Mussa 👋🏿</title>
        <meta name="description" content="Product Designer" />
        
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
        <link rel="apple-touch-icon" sizes="57x57" href="apple-touch-icon.png" />

        <link rel="icon" type="image/png" sizes="16x16" href="favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="android-chrome-192x192.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="android-chrome-512x512.png" />

        <link rel="shortcut icon" href="favicon.ico" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="mobile-web-app-capable" content="yes" />
      </Head>

      <div className="flex flex-col  pb-8 px-4">
        <Profile />
        <Projects />
        <About />
      </div>

    </div>
  )
}
