import React, { useEffect, useState } from 'react'
import { Container } from 'components/Container'
import Layout from 'components/Layout'
import { Progress } from 'antd'

export const About = () => {
  const [scroll, setScroll] = useState(0)

  const meta = {
    title: 'About JavascriptSEO.io - Free SEO Testing Tool',
    description: ' JavaScriptSEO.io is a free tool for analyzing any website for important SEO criteria. We identify which front-end javascript libraries are being used on the page, check for PWA requirements, page speed, meta data, and more. Try running a test for a modern website, like a steaming service or a social media website.',
    canonical: 'https://javascriptseo.io/about/',
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
    <Layout title={meta.title} description={meta.description} canonical={meta.canonical}>
      <Container className="art-progress">
        <Progress
          showInfo={false}
          strokeColor="#fff"
          trailColor="#243342"
          percent={scroll}
        />
      </Container>
      <Container className="article__container">
        <h1 className="text-center">About</h1>
        {/* <h1 className="text-center">JavaScriptSEO.io Chrome Extension</h1>*/} 
        <div className="d-flex justify-content-center mb-34 pb-24">
          <time>Jan 16, 2021</time>
          <p className="article__readtime mb-0">1 min read</p>
        </div>
        <div className="article__body">
          <h6>About JavaScriptSEO.io</h6>
          <p>
            JavaScriptSEO.io is a free tool for analyzing any website for important SEO criteria (as defined by search engine developer/search documentation).
            The tool is most useful for modern web apps. We identify which front-end javascript libraries are being used on the page, check for PWA requirements, page speed, meta data, and more.
            Try running a test for a modern website, like a steaming service or a social media website, and you will learn how some of the most visited websites on the web are setup. All through a lens of SEO for Web Apps (such as React, Angular, and Vue).
          </p>
          <h6>Tool Overview</h6>
          <p>
          JS Library Detection
          Learn which front-end javascript libraries were detected on any webpage. Once you know which front-end javascript libraries are used, you can investigate who to make them SEO friendly. Search Engines provide framework specific guidance for React, Angular, and Vue.js.
          </p>
          <h6>Progressive Web App Test</h6>
          <p>
          Learn if a website meets the required criteria for a Progressive Web App. We check for an active service worker, web app manifest, and more.
          Check the web page for a Web App Manifest and an activated Service Worker. Both are required for enabling a PWA.
          </p>
          <h6>Page Speed</h6>
          <p>Test your website for page speed performance.</p>

          <h6>Screenshots</h6>
          <p>Compare screenshots of your webpage with JavaScript turned On/Off.</p>

          <h6>SEO Essentials</h6>
          <p>Check your webpage for the important tags that search engines look for.</p>
        </div>
      </Container>
    </Layout>
  )
}
