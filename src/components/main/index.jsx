import React from 'react'
import { Container, Wrapper, LikeBar, DataBar, MessageBar,Title, Discreption, DataType } from './style'

const Main = () => {
  return (
    <React.Fragment>
      <Container>
        <Wrapper>
          <LikeBar>1</LikeBar>
          <DataBar>
            <Title>Q&A within the challenge hubs</Title>
            <Discreption>
              Challenge-specific Q&A would make for easy reference.
            </Discreption>
            <DataType>
              Enhancement
            </DataType>
          </DataBar>
          <MessageBar>88</MessageBar>
        </Wrapper>
      </Container>
    </React.Fragment>
  )
}

export default Main