import { Button, Input, message } from 'antd'
import { Container } from 'components/Container'
import { useRouter } from 'next/dist/client/router'
import React, { useContext, useEffect, useState } from 'react'
import Particles from 'react-tsparticles'
import { Context } from 'store'
import { validURL } from 'utils'

export const StartTest = ({
  title = 'JavaScript SEO Test',
  showDesc = true,
}) => {
  const router = useRouter()
  const [url, setUrl] = useState('')
  const { storeUrl } = useContext(Context)

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search)
    const url = urlParams.get('url')
    if (url) {
      if (validURL(url)) {
        storeUrl(url)
        router.push('/progress')
      } else {
        message.error('Please enter valid URL')
      }
    }
  }, [])

  const options = {
    background: {
      color: {
        value: '#34495E',
      },
    },
    fpsLimit: 60,
    interactivity: {
      detectsOn: 'canvas',
      events: {
        onClick: {
          enable: true,
          mode: 'push',
        },
        onHover: {
          enable: true,
          mode: 'repulse',
        },
        resize: true,
      },
      modes: {
        bubble: {
          distance: 400,
          duration: 2,
          opacity: 0.8,
          size: 40,
        },
        push: {
          quantity: 4,
        },
        repulse: {
          distance: 200,
          duration: 0.4,
        },
      },
    },
    particles: {
      color: {
        value: '#ffffff',
      },
      links: {
        color: '#ffffff',
        distance: 150,
        enable: true,
        opacity: 0.5,
        width: 1,
      },
      collisions: {
        enable: true,
      },
      move: {
        direction: 'none',
        enable: true,
        outMode: 'bounce',
        random: false,
        speed: 10,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          value_area: 800,
        },
        value: 80,
      },
      opacity: {
        value: 0.5,
      },
      shape: {
        type: 'circle',
      },
      size: {
        random: true,
        value: 5,
      },
    },
    detectRetina: true,
  }

  const onSubmit = (e: any) => {
    e.preventDefault()
    if (validURL(url)) {
      storeUrl(url)
      router.push('/progress')
    } else {
      message.error('Please enter valid URL')
    }
  }

  return (
    <section className="start-test" id="homeSection">
      <Particles className="start-test__particles" options={options} />
      <Container className="pos-relative z-1">
        <h1 className="text-center start-test__title">{title}</h1>
        {showDesc && (
          <p className="start-test__desc text-large text-center mx-auto mb-40 pb-40">
            Test your website to understand and improve JavaScript SEO related
            issues.
          </p>
        )}
        <form
          onSubmit={onSubmit}
          className="d-flex start-test__wrapper mx-auto"
        >
          <Input
            size="large"
            bordered={false}
            className="start-test__input w-100 mr-24"
            placeholder="Enter your site URL"
            onChange={(e) => setUrl(e.target.value)}
            value={url}
          />
          <Button
            htmlType="submit"
            className="start-test__button text-title w-100"
            size="large"
            type="primary"
          >
            Start Test
          </Button>
        </form>
      </Container>
    </section>
  )
}
