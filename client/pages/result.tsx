import Layout from 'components/Layout'
import { Result } from 'layouts/Result'
import { StartTest } from 'layouts/StartTest'
import React from 'react'

const ResultPage = () => {
  return (
    <Layout logoPosition="left">
      <Result />
      <StartTest title="Want to test anything else?" showDesc={false} />
    </Layout>
  )
}

export default ResultPage
