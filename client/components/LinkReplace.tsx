import React, { FC } from 'react'

interface Props {
  text?: string
}

export const LinkReplace: FC<Props> = ({ text }) => {
  const regex = /\[(.*?)\]\((.*?)\)/
  const regSplit = /\[.+?\]\(.+?\)(.?)/

  if (text) {
    const matches = regex.exec(text)
    if (matches) {
      return (
        <>
          {text?.replace(regSplit, '')}{' '}
          <a target="_blank" href={matches[2]}>
            {matches[1]}
          </a>
        </>
      )
    }
  }

  return <></>
}
