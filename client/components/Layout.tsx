import React, { ReactNode } from 'react'
import Head from 'next/head'
import { Header } from './Header'
import { Footer } from './Footer'

type Props = {
  children?: ReactNode,
  title?: string,
  description?: string, 
  canonical?: string,
  isVisibleHeader?: boolean,
  logoPosition?: 'left' | 'center' | undefined,
}

const Layout = ({
  children,
  title = 'Test your website for JavaScript SEO issues | JavaScriptSEO.io',
  description= 'Test your website for JavaScript SEO issues. Check for front-end JavaScript frameworks, progressive web apps, page speed, and more."',
  canonical= 'https://javascriptseo.io/',
  isVisibleHeader = true,
  logoPosition = 'center',
}: Props) => (
  <>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta
        name="google-site-verification"
        content="tm_TmmBApuicEwDgptQiVGpQTHxCsHcsvK8K500Mmew"
      />
      <meta
        name="description"
        content={description}
      />
      <link rel="canonical" href={canonical}></link>
      <script
        dangerouslySetInnerHTML={{
          __html: `
      (function(h,o,t,j,a,r){
        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
        h._hjSettings={hjid:2142027,hjsv:6};
        o.documentElement.setAttribute('lang' , 'en');
        a=o.getElementsByTagName('head')[0];
        r=o.createElement('script');r.async=1;
        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
        a.appendChild(r);
    })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
      `,
        }}
      ></script>
      <script
        dangerouslySetInnerHTML={{
          __html: `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
    
      gtag('config', 'G-BGNN7M5HLZ');
      `,
        }}
      ></script>
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-BGNN7M5HLZ"
      ></script>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    {isVisibleHeader && <Header {...{ logoPosition }} />}
    {children}
    <Footer />
  </>
)

export default Layout
