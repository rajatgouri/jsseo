import React, { useEffect, useState } from 'react'
import { Container } from 'components/Container'
import Layout from 'components/Layout'
import { Progress } from 'antd'

export const Resources = () => {
  const [scroll, setScroll] = useState(0)

  const meta = {
    title: 'Technical SEO Resources for JavaScript Websites',
    decsription: 'Want to learn more about SEO for JavaScript websites? We’ve rounded up all the latest and greatest developer resources and tools for ensuring SEO success with your JavaScript website.',
    canonical: 'https://javascriptseo.io/resources/'
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
    <Layout title={meta.title} description={meta.decsription} canonical={meta.canonical}>
      <Container className="art-progress">
        <Progress
          showInfo={false}
          strokeColor="#fff"
          trailColor="#243342"
          percent={scroll}
        />
      </Container>
      <Container className="article__container">
        <h1 className="text-center">Technical SEO Resources for JavaScript Websites</h1>
        {/* <h1 className="text-center">JavaScriptSEO.io Chrome Extension</h1> */}
        <div className="d-flex justify-content-center mb-34 pb-24">
          <time>Jan 16, 2021</time>
          <p className="article__readtime mb-0">1 min read</p>
        </div>
        <div className="article__body">
          <p>
            Want to learn more about SEO for JavaScript websites? We’ve rounded up all the latest and greatest developer resources and tools for ensuring SEO success with your JavaScript website. Happy optimizing!
          </p>
          <h6>Technical SEO Documentation for JavaScript Websites</h6>
          <ul>
              <li><a target="blank" href="https://developers.google.com/search/docs/guides/javascript-seo-basics">JavaScript SEO Basics</a></li>
              <li><a target="blank" href="https://developers.google.com/search/docs/advanced/guidelines/links-crawlable">Crawlable Links</a></li>
              <li><a target="blank" href="https://developers.google.com/web/updates/2019/02/rendering-on-the-web">Rendering (SSR/CSR)</a></li>
              <li><a target="blank" href="https://developers.google.com/search/docs/advanced/appearance/good-titles-snippets?hl=en">Title Tags and Meta Descriptions</a></li>
              <li><a target="blank" href="https://web.dev/install-criteria/">PWA Requirements</a></li>
              <li><a target="blank" href="https://developers.google.com/web/fundamentals/primers/service-workers">PWA Service Workers</a></li>
              <li><a target="blank" href="https://web.dev/add-manifest/">PWA App Manifest</a></li>
              <li><a target="blank" href="https://web.dev/lighthouse-performance/">Page Speed Performance Metrics</a></li>
              <li><a target="blank" href="https://www2.deloitte.com/content/dam/Deloitte/ie/Documents/Consulting/Milliseconds_Make_Millions_report.pdf">Page Speed vs Revenue Case Study</a></li>
              <li><a target="blank" href="https://www.thinkwithgoogle.com/marketing-strategies/app-and-mobile/mobile-page-speed-data/">Mobile Page Speed Data & Improving Bottom Line</a></li>
              <li><a target="blank" href="https://nextjs.org/docs/basic-features/pages">Next.js Pre-rendering</a></li>
              <li><a target="blank" href="https://web.dev/performance-as-a-default-with-nextjs/">Nex.js Performance as Default</a></li>
              <li><a target="blank" href="https://medium.com/dev-channel/a-netflix-web-performance-case-study-c0bcde26a9d9">Netflix JS SEO Case Study</a></li>
          </ul>

          <h6>Videos (Google Search Central)</h6>
          <ul>
              <li><a target="blank" href="https://www.youtube.com/watch?v=rKgF0rf009c">SEO for React Websites</a></li>
              <li><a target="blank" href="https://www.youtube.com/watch?v=_bZDjQOMf4U">SEO for Angular Websites</a></li>
              <li><a target="blank" href="https://www.youtube.com/watch?v=Op8Q8bUAKNc">SEO for Vue Websites</a></li>
          </ul>

          <h6>Technical SEO Tools for JavaScript Websites</h6>
          <ul>
              <li><a target="blank" href="https://search.google.com/test/mobile-friendly">Mobile Friendly Test</a></li>
              <li><a target="blank" href="https://developers.google.com/web/tools/lighthouse">Lighthouse</a></li>
              <li><a target="blank" href="https://search.google.com/structured-data/testing-tool/u/0/">Structured Data Testing Tool</a></li>
              <li><a target="blank" href="https://chrome.google.com/webstore/detail/javascriptseoio-chrome-ex/hggfoakomjdibaepkglijahnhdabaajg">JavaScriptSEO.io Chrome Extension</a></li>
              <li><a target="blank" href="https://developers.google.com/speed/pagespeed/insights/">Page Speed Insights</a></li>
              <li><a target="blank" href="https://googlechrome.github.io/lighthouse/scorecalc/#FCP=1000&SI=0&LCP=0&TTI=0&TBT=0&CLS=0&FMP=0&FCI=0&device=mobile&version=6">Lighthouse Scoring Calculator</a></li>
          </ul>

          
        </div>
      </Container>
    </Layout>
  )
}
