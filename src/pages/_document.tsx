import { Head, Html, Main, NextScript } from 'next/document'

export default function Document() { 
  return (
    <Html>
      <Head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link href="https://fonts.googleapis.com/css2?family=Maven+Pro:wght@500;600;700&display=swap" rel="stylesheet"/>

      <link rel="icon" href="/favicon.ico" />

      </Head>
      <body className=''>
        
        <Main />
        <NextScript/>
      </body>
    </Html>
  )
}

