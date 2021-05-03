import React, {useCallback} from 'react'
import JackinBox from '../lib/pkg/index'

const IndexPage = () => {
  const Spacing = useCallback(
    () => <div style={{marginTop: 64, marginBottom: 64}} />,
    []
  )
  return (
    <main className="App">
      <div>
        <Spacing />
        <JackinBox name="fadeIn" delay={3} textAlign="center">
          <h1>Wow!</h1>
        </JackinBox>
      </div>
    </main>
  )
}

export default IndexPage
