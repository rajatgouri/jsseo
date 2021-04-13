import Axios from 'axios'
import { Container } from 'components/Container'
import { useRouter } from 'next/dist/client/router'
import React, { useContext, useEffect } from 'react'
import { useCountUp } from 'react-countup'
import { WaveBack, WaveFront } from 'static'
import { Context } from 'store'
import { getRandomInt } from 'utils'
import { checkProtocol } from 'utils'

export const Progress = () => {
  const { url, storeAnalysis } = useContext(Context)
  const router = useRouter()
  const { countUp, pauseResume } = useCountUp({
    start: 0,
    end: 100,
    duration: 7,
    useEasing: false,
    onEnd: () => router.push('/result'),
  })

  useEffect(() => {
    setTimeout(() => {
      pauseResume()
    }, getRandomInt(5500, 6000))
    if (url) {
      ;(async () => {
        const lighthouse = await Axios.get('/api/analyze', {
          params: {
            url: checkProtocol(url),
          },
        })
        pauseResume()
        storeAnalysis(lighthouse.data)
      })()
    } else {
      router.push('/')
    }
  }, [])

  return (
    <div className="progress-page">
      <Container className="text-center pos-relative z-1">
        <h1>Checking your site...</h1>
        {url && <p className="text-large">{url}</p>}
        <p className="h1 mt-40 pt-40">{countUp} %</p>
      </Container>
      <div
        className="waves"
        style={{
          transform: `translateY(${100 - Number(countUp)}%)`,
        }}
      >
        <WaveFront />
        <WaveBack />
      </div>
    </div>
  )
}
