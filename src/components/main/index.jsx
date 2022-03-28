import React from 'react'
import { Container, WrapperItem, LikeBar, LikeBtn, DataBar, MessageBar,Link, Discreption, DataType } from './style'

const Main = () => {
  return (
    <React.Fragment>
      <Container>
        <WrapperItem>
          <LikeBar>
            <LikeBtn>
              <LikeBtn.LikeIcon className={'icon'} />102
            </LikeBtn>
          </LikeBar>
          <DataBar>
              <Link to={'/feedbackDetail'}>
                Q&A within the challenge hubs
              </Link>
            <Discreption>
              Challenge-specific Q&A would make for easy reference.
            </Discreption>
            <DataType>
              <DataType.Btn>
                Enhancement
              </DataType.Btn>
            </DataType>
          </DataBar>
          <MessageBar>
            <MessageBar.Msg/>4
          </MessageBar>
        </WrapperItem>
      </Container>
    </React.Fragment>
  )
}

export default Main