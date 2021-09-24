import React, {useCallback, useEffect, useState} from 'react'
import JackinBox from '../lib/pkg/index'
import {Box, Divider, Paper, Typography, alpha} from '@mui/material'
import SyntaxHighlighter from 'react-syntax-highlighter'
import Head from 'next/head'

const codeBlock = `
import React, {useCallback, useEffect, useState} from 'react'
import JackinBox from 'mui-jackinbox'
import {Box, Divider, Paper, Typography} from '@mui/material'
import Head from 'next/head'

const IndexPage = () => {
  const Spacing = useCallback(
    () => <div style={{marginTop: 64, marginBottom: 64}} />,
    []
  )

  const [bye, setBye] = useState(false)
  const [showCode, setShowCode] = useState(false)

  useEffect(() => {
    setTimeout(() => setBye(true), 10000)
  }, [])

  const animateEndHandler = useCallback(() => {
    setShowCode(true)
  }, [])

  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
          key="animate.css-4.1.1"
        />
      </Head>
      <Box component="main" className="App">
        <Spacing />
        <Box
          display={showCode ? 'none' : 'flex'}
          flexDirection="row"
          justifyContent="center"
          width="100%"
        >
          <JackinBox
            name="hinge"
            animate={bye}
            delay={1}
            onAnimateEnd={animateEndHandler}
          >
            <JackinBox name="heartBeat" speed="fast" infinite animate={!bye}>
              <JackinBox name="rollIn" delay={2} speed="slower">
                <Typography variant="h1">Wow!</Typography>
              </JackinBox>
            </JackinBox>
          </JackinBox>
        </Box>
        <JackinBox name="fadeInUpBig" delay={5}>
          <JackinBox
            name="fadeOutLeftBig"
            animate={bye}
            maxWidth="50vw"
            margin="auto"
          >
            <Divider style={{height: 3}} />
          </JackinBox>
        </JackinBox>
      </Box>
    </>
  )
}

export default IndexPage
`

const IndexPage = () => {
  const Spacing = useCallback(
    () => <div style={{marginTop: 64, marginBottom: 64}} />,
    []
  )

  const [bye, setBye] = useState(false)
  const [showCode, setShowCode] = useState(false)

  useEffect(() => {
    setTimeout(() => setBye(true), 10000)
  }, [])

  const animateEndHandler = useCallback(() => {
    setShowCode(true)
  }, [])

  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
          key="animate.css-4.1.1"
        />
      </Head>
      <Box component="main" className="App">
        <Spacing />
        <Box
          display={showCode ? 'none' : 'flex'}
          flexDirection="row"
          justifyContent="center"
          width="100%"
        >
          <JackinBox
            name="hinge"
            animate={bye}
            delay={1}
            onAnimateEnd={animateEndHandler}
          >
            <JackinBox name="heartBeat" speed="fast" infinite animate={!bye}>
              <JackinBox name="rollIn" delay={2} speed="slower">
                <Typography variant="h1">Wow!</Typography>
              </JackinBox>
            </JackinBox>
          </JackinBox>
        </Box>
        <JackinBox name="fadeInUpBig" delay={5}>
          <JackinBox
            name="fadeOutLeftBig"
            animate={bye}
            maxWidth="50vw"
            margin="auto"
          >
            <Divider
              sx={{
                height: 4,
                bgcolor: (theme) => alpha(theme.palette.secondary.main, 0.4)
              }}
            />
          </JackinBox>
        </JackinBox>
        <JackinBox name="fadeIn" delay={4} animate={bye} noDisplayUntilAnimate>
          <Typography variant="h2" gutterBottom>
            That was brought to you by...
          </Typography>
          <Paper
            sx={{
              borderRadius: 2,
              bgcolor: '#f0f0f0',
              overflow: 'hidden',
              padding: 3
            }}
          >
            <SyntaxHighlighter language="javascript">
              {codeBlock}
            </SyntaxHighlighter>
          </Paper>
        </JackinBox>
      </Box>
    </>
  )
}

export default IndexPage
