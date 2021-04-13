import React, { useEffect, useState } from 'react'
import { Container } from 'components/Container'
import Layout from 'components/Layout'
import { Progress } from 'antd'

export const ChromeExtension = () => {
  const [scroll, setScroll] = useState(0)
  const aTag = '<a>' 

  const meta ={
    title: 'About Our Chrome Extension - JavascriptSEO.io',
    decsription: `Our Chrome Extension is a free Technical SEO tool for auditing JavaScript websites. The tool allows you to understand details about the website's technical setup by detecting front-end JavaScript libraries, Progressive Web App requirements, and more.” `,
    canonical: 'https://javascriptseo.io/chrome-extension/'
  }
  const scrollProgress = () => {
    const scrollPx = document.documentElement.scrollTop
    const winHeightPx =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight
    const scrolled = (scrollPx / winHeightPx) * 100

    setScroll(scrolled)
  }

  useEffect(() => {
    window.addEventListener('scroll', scrollProgress)
    return () => {
      window.removeEventListener('scroll', scrollProgress)
    }
  }, [scrollProgress])

  return (
    <Layout title={meta.title} description={meta.decsription} canonical = {meta.canonical}>
      <Container className="art-progress">
        <Progress
          showInfo={false}
          strokeColor="#fff"
          trailColor="#243342"
          percent={scroll}
        />
      </Container>
      <Container className="article__container">
        <h1 className="text-center">Chrome Extension - SEO Audit for JavaScript Websites</h1>
        {/* <h1 className="text-center">JavaScriptSEO.io Chrome Extension</h1>*/} 
        <div className="d-flex justify-content-center mb-34 pb-24">
          <time>Jan 16, 2021</time>
          <p className="article__readtime mb-0">1 min read</p>
        </div>
        <div className="article__body">
          <p>
            Our Chrome Extension is a free Technical SEO tool for auditing JavaScript websites. The tool allows you to understand details about the website's technical setup as it relates to JavaScript and identify common SEO issues with JavaScript websites.
          </p>
          <h6>JS Library Detection</h6>
          <p>
            As you browse the web our extension displays the front-end javascript libraries detected on the pages you visit. This allows you to quickly determine which js frameworks are being used and further improve the websites technical setup. Search Engines provide framework specific guidance for React, Angular, and Vue.js.
          </p>

          <h6>Crawlable Link Check</h6>
          <p>Our tool displays the number of links found on the page  and allows you to extract the links from the page. This is important because search engines only crawl links coded with an {aTag} tag and href attribute.
          </p>

          <h6>Progressive Web App Test</h6>
          <p>Check the web page for a Web App Manifest and an activated Service Worker. Both are required for enabling a PWA.
          </p>

          <h6>Toggle JavaScript On/Off</h6>
          <p>This feature allows you to turn JS Off to test which content sections of a web page are created with JavaScript.
          </p>
          
        </div>
      </Container>
    </Layout>
  )
}
