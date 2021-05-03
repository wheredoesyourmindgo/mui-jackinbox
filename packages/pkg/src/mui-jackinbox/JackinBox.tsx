import React from 'react'
import clsx from 'clsx'
import Head from 'next/head'
import {Box, BoxProps, createStyles, makeStyles} from '@material-ui/core'

/*
Docs:
  https://animate.style
*/

const VERSION = '4.1.1'
const PREFIX = 'animate__'

export type Props = {
  children?: React.ReactNode
  animate?: boolean
  name: string
  hideUntilAnimate?: boolean
  speed?: 'slow' | 'slower' | 'fast' | 'faster'
  delay?: boolean | 1 | 2 | 3 | 4 | 5
  repeat?: boolean | 1 | 2 | 3
  infinite?: boolean
} & BoxProps

const useStyles = makeStyles(() =>
  createStyles({
    hidden: {
      visibility: 'hidden'
    }
  })
)

export default function JackinBox({
  children,
  className: classNameProp,
  animate = true,
  name,
  hideUntilAnimate = false,
  speed,
  infinite,
  delay: delayProp = false,
  repeat: repeatProp = false,
  ...rest
}: Props) {
  const classes = useStyles()
  // Use animate value to determine when the element should be visible
  const hidden = hideUntilAnimate ? !animate : false
  const delay = delayProp === true ? 1 : delayProp
  const repeat = repeatProp === true ? 1 : repeatProp

  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href={`https://cdnjs.cloudflare.com/ajax/libs/animate.css/${VERSION}/animate.min.css`}
          key="animate.css"
        />
      </Head>
      <Box
        className={clsx([
          {
            [`${PREFIX}animated`]: animate,
            [`${PREFIX}${name}`]: animate && name,
            [`${PREFIX}${speed}`]: animate && speed,
            [`${PREFIX}infinite`]: animate && infinite,
            [`${PREFIX}repeat-${repeat}`]: animate && repeat,
            [`${PREFIX}delay-${delay}s`]: animate && delay,
            [classes.hidden]: hidden
          },
          classNameProp
        ])}
        {...rest}
      >
        {children}
      </Box>
    </>
  )
}
