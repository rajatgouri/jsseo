import { Button, Col, Collapse, Row } from 'antd'
import { Container } from 'components/Container'
import React, { useContext, useEffect, useState } from 'react'
import { DownOutlined } from '@ant-design/icons'
import {
  BadLinks,
  Check,
  Js,
  PageSpeed,
  Pwa,
  Screenshots,
  Seo,
  Warning,
} from 'static'
import { v1 } from 'uuid'
import { Context } from 'store'
import { LinkReplace } from 'components/LinkReplace'

interface Result {
  title?: string
  desc?: string
  svg?: React.ReactElement
  content?: []
}

interface ActualResult {
  title: string
  desc?: string
  svg?: React.ReactElement
  content?: () => React.ReactElement
}

export const Result = () => {
  const { Panel } = Collapse
  const [state, setState] = useState<any>()
  const { url, analysis } = useContext(Context)

  const [activeKeys, setActiveKeys] = useState<string | string[]>([])

  const onChange = (key: string[] | string) => {
    setActiveKeys(key)
  }

  const icons: JSX.Element[] = [
    <Js />,
    <Seo />,
    <BadLinks />,
    <Pwa />,
    <PageSpeed />,
    <Screenshots />,
  ]

  useEffect(() => {
    if (analysis && analysis.length) {
      setActiveKeys(
        analysis.map(({ title }: { title: string }) =>
          title.replace(/\s+/g, '-').toLowerCase(),
        ),
      )

      const iconizedData = analysis.map((item: Result, i: number) => {
        return {
          ...item,
          svg: icons[i],
        }
      })

      const preparedData = iconizedData.map(
        ({ title: panelTitle, desc, svg, content }: Result) => {
          let updatedContent = () => <></>
          if (content) {
            switch (panelTitle) {
              case 'JS library scan':
                updatedContent = () => (
                  <ul className="result-tags list-unstyled mb-0">
                    {content.map(({ name }) => (
                      <li
                        key={name}
                        className="d-inline-block result-tag line-height-1"
                      >
                        <Button
                          style={{ pointerEvents: 'none' }}
                          className="f-weight-600"
                          shape="round"
                        >
                          {name}
                        </Button>
                      </li>
                    ))}
                  </ul>
                )
                break
              case 'Progressive Web App':
                updatedContent = () => (
                  <Collapse
                    className="collapse-data"
                    bordered={false}
                    expandIconPosition="right"
                    expandIcon={({ isActive }) => (
                      <DownOutlined rotate={isActive ? -180 : 0} />
                    )}
                  >
                    {content.map(({ title, description, score }) => (
                      <Panel
                        key={title}
                        header={
                          <div className="d-flex align-items-center text-white">
                            {score ? <Check /> : <Warning />}
                            <span className="collapse-data__title text-large">
                              {title}
                            </span>
                          </div>
                        }
                      >
                        <LinkReplace text={description} />
                      </Panel>
                    ))}
                  </Collapse>
                )
                break
              case 'Page Speed':
                updatedContent = () => (
                  <>
                    <Collapse
                      className="collapse-data"
                      bordered={false}
                      expandIconPosition="right"
                      expandIcon={({ isActive }) => (
                        <DownOutlined rotate={isActive ? -180 : 0} />
                      )}
                    >
                      {content.map(({ title, description, displayValue }) => (
                        <Panel
                          className="page-speed__panel"
                          key={title}
                          header={
                            <div className="d-flex align-items-center text-white">
                              <span className="page-speed__value">
                                {displayValue}
                              </span>
                              <span className="collapse-data__title text-large">
                                {title}
                              </span>
                            </div>
                          }
                        >
                          <LinkReplace text={description} />
                        </Panel>
                      ))}
                    </Collapse>
                  </>
                )
                break
              case 'Screenshots':
                updatedContent = () => (
                  <Row
                    gutter={10}
                    className="text-large text-center mt-40 pt-5"
                  >
                    {content.map(({ title, image }) => (
                      <Col key={title} span={12}>
                        <p>{title}</p>
                        <div className="screenshot__wrapper">
                          <img className="w-100" src={image} alt={title} />
                        </div>
                      </Col>
                    ))}
                  </Row>
                )
                break
              case 'Links Are Not Crawlable':
                updatedContent = () => (
                  <ul className="result-tags list-unstyled mb-0">
                    {content?.length ? (
                      content.map(({ nodeLabel }) => (
                        <li
                          key={v1()}
                          className="d-inline-block result-tag line-height-1"
                        >
                          <Button className="f-weight-600" shape="round">
                            {nodeLabel}
                          </Button>
                        </li>
                      ))
                    ) : (
                      <li className="d-inline-block result-tag line-height-1">
                        None Found, Great Job.
                      </li>
                    )}
                  </ul>
                )
                break
              case 'SEO Essentials':
                updatedContent = () => (
                  <Collapse
                    className="collapse-data"
                    bordered={false}
                    expandIconPosition="right"
                    expandIcon={({ isActive }) => (
                      <DownOutlined rotate={isActive ? -180 : 0} />
                    )}
                  >
                    {content.map(({ title, description, score }) => (
                      <Panel
                        key={title}
                        header={
                          <div className="d-flex align-items-center text-white">
                            {score ? <Check /> : <Warning />}
                            <span className="collapse-data__title text-large">
                              {title}
                            </span>
                          </div>
                        }
                      >
                        <div
                          dangerouslySetInnerHTML={{
                            __html: `${String(description).replace(
                              /[\[]{1}([^\]]+)[\]]{1}[\(]{1}([^\)\"]+)(\"(.+)\")?[\)]{1}/g,
                              '<a href="$2">$1</a>',
                            )}`,
                          }}
                        />
                      </Panel>
                    ))}
                  </Collapse>
                )
                break
            }
          }

          return {
            title: panelTitle,
            desc: <LinkReplace text={desc} />,
            svg,
            content: updatedContent,
          }
        },
      )

      setState(preparedData)
    }
  }, [])

  return (
    <Container className="my-40 py-40">
      <div className="text-center mb-40 pb-40">
        <h1 className="mb-20">JavaScript SEO Test Results</h1>
        {url && (
          <a href={url} className="text-large" target="_blank">
            {url}
          </a>
        )}
      </div>
      {state && state.length ? (
        <Collapse
          activeKey={activeKeys}
          onChange={onChange}
          className="collapse-result"
          bordered={false}
          expandIconPosition="right"
          expandIcon={({ isActive }) => (
            <DownOutlined rotate={isActive ? -180 : 0} />
          )}
        >
          {state.map(({ svg, title, desc, content }: ActualResult) => (
            <Panel
              forceRender
              key={title.replace(/\s+/g, '-').toLowerCase()}
              header={
                <div className="d-flex align-items-center text-white">
                  <div className="result__icon d-flex justify-content-center align-items-center">
                    {svg}
                  </div>
                  <div className="ml-24">
                    <h6 className="result__title mt-2 mb-0 text-capitalize">
                      {title}
                    </h6>
                    <p className="result__desc mb-0 d-none">{desc}</p>
                  </div>
                </div>
              }
              showArrow
            >
              {content && content()}
            </Panel>
          ))}
        </Collapse>
      ) : (
        <div className="text-center">
          Sorry, there is no data to display. Please check the URL and try
          again.
        </div>
      )}
    </Container>
  )
}
