import React, { useEffect, useState } from 'react'
import { Container } from 'components/Container'
import Layout from 'components/Layout'
import { Progress } from 'antd'

export const Contact = () => {
  const [scroll, setScroll] = useState(0)

  const meta = {  
    title: 'Contact - JavascriptSEO.io',
    decsription: 'Should you need to contact us, please message us on Twitter. We are a free tool only and do not offer paid services or software.',
    canonical: 'https://javascriptseo.io/contact/'
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
        <h1 className="text-center">Contact - JavaScriptSEO.io</h1>
        {/* <h1 className="text-center">JavaScriptSEO.io Chrome Extension</h1> */}
        <div className="d-flex justify-content-center mb-34 pb-24">
          <time>Jan 16, 2021</time>
          <p className="article__readtime mb-0">1 min read</p>
        </div>
        <div className="article__body">
          {/* <h6>About JavaScriptSEO.io</h6> */}
          <p>
              Should you need to contact us, please email us at admin@javascriptseo.io.
          </p>
        </div>
      </Container>
    </Layout>
  )
}
