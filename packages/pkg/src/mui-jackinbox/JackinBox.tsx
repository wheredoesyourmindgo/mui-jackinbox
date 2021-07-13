import React, {useCallback, useState} from 'react'
import clsx from 'clsx'
import {Name} from './Name'
import {Box, BoxProps, createStyles, makeStyles} from '@material-ui/core'

/*
Docs:
  https://animate.style
*/

// const VERSION = '4.1.1'
const PREFIX = 'animate__'

export type Props = {
  children?: React.ReactNode
  animate?: boolean
  name: Name
  hideUntilAnimate?: boolean
  noDisplayUntilAnimate?: boolean
  hideAfterAnimate?: boolean
  noDisplayAfterAnimate?: boolean
  speed?: 'slower' | 'slow' | 'fast' | 'faster' // 3s (or 3x), 2s (or 2x), 800ms (or .8x), 500ms (or .5x)
  delay?: boolean | 1 | 2 | 3 | 4 | 5
  repeat?: boolean | 1 | 2 | 3
  infinite?: boolean
  version?: string
  prefix?: string
  delayBy?: string // defaults to 1s
  speedBy?: string // defaults to 1s
  repeatBy?: number // defaults to 1
  onAnimateEnd?: (e?: React.AnimationEvent<HTMLElement>) => void
} & Partial<BoxProps>

interface UseStylesProps {
  hidden: boolean
  noDisplay: boolean
  delayBy: string
  speedBy: string
  repeatBy: number
}

const useStyles = makeStyles(() =>
  createStyles({
    root: ({
      hidden,
      noDisplay,
      delayBy,
      speedBy,
      repeatBy
    }: UseStylesProps) => ({
      '--animate-delay': delayBy,
      '--animate-duration': speedBy,
      '--animate-repeat': repeatBy,
      // Conditional CSS Properties
      ...(hidden && {
        visibility: 'hidden'
      }),
      ...(noDisplay && {
        display: 'none'
      })
    })
  })
)

export default function JackinBox({
  children,
  className: classNameProp,
  animate = true,
  name,
  // version = VERSION,
  prefix = PREFIX,
  hideUntilAnimate = false,
  noDisplayUntilAnimate = false,
  hideAfterAnimate = false,
  noDisplayAfterAnimate = false,
  delayBy = '1s',
  speedBy = '1s',
  repeatBy = 1,
  speed,
  infinite,
  delay: delayProp = false,
  repeat: repeatProp = false,
  onAnimateEnd,
  ...rest
}: Props) {
  const delay = delayProp === true ? 1 : delayProp
  const repeat = repeatProp === true ? 1 : repeatProp
  // Use animate value to determine when the element should be visible
  const [hidden, setHidden] = useState(hideUntilAnimate ? !animate : false)
  const [noDisplay, setNoDisplay] = useState(
    noDisplayUntilAnimate ? !animate : false
  )

  const classes = useStyles({
    hidden,
    noDisplay,
    delayBy,
    speedBy,
    repeatBy
  })

  const animateEndHandler = useCallback(
    (e?: React.AnimationEvent<HTMLElement>) => {
      hideAfterAnimate && setHidden(true)
      noDisplayAfterAnimate && setNoDisplay(true)
      onAnimateEnd?.(e)
      // Don't trigger animation end events w/ nested <JackinBox/> children
      e?.stopPropagation()
    },
    [onAnimateEnd, hideAfterAnimate, noDisplayAfterAnimate]
  )

  return (
    <Box
      className={clsx([
        {
          [`${prefix}animated`]: animate,
          [`${prefix}${name}`]: animate && name,
          [`${prefix}${speed}`]: animate && speed,
          [`${prefix}infinite`]: animate && infinite,
          [`${prefix}repeat-${repeat}`]: animate && repeat,
          [`${prefix}delay-${delay}s`]: animate && delay
        },
        classes.root,
        classNameProp
      ])}
      onAnimationEnd={animateEndHandler}
      {...rest}
    >
      {children}
    </Box>
  )
}
