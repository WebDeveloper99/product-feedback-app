import React from 'react'
import { useNavigate } from 'react-router-dom'
import {
  BtnWrapper,
  Container,
  NavContainer,
  TextWrapper,
  AddButton,
  CommentWrapper,
  WrapperItem,
  LikeBar,
  LikeBtn,
  DataBar,
  Title,
  MessageBar,
  Link,
  Discreption,
  DataType,
} from './style'

const FeedbackDetail = () => {
  const navigate = useNavigate()
  return (
    <Container>
      <NavContainer>
        <TextWrapper>
          <TextWrapper.TextItem onClick={() => navigate('/')}>
            Go Back
          </TextWrapper.TextItem>
        </TextWrapper>
        <BtnWrapper>
          <AddButton>
            <Link to={'/editFeedback'}>Edit Feedback</Link>
          </AddButton>
        </BtnWrapper>
      </NavContainer>
      <WrapperItem>
          <LikeBar>
            <LikeBtn>
              <LikeBtn.LikeIcon className={'icon'} />
              22
            </LikeBtn>
          </LikeBar>
          <DataBar>
            <Title>Add a dark theme option</Title>
            <Discreption>
              It would help people with light sensitivities and who prefer dark
              mode.
            </Discreption>
            <DataType>
              <DataType.Btn>Feature</DataType.Btn>
            </DataType>
          </DataBar>
          <MessageBar>
            <MessageBar.Msg />4
          </MessageBar>
        </WrapperItem>
        <CommentWrapper>
          <CommentWrapper.Theme></CommentWrapper.Theme>
          <CommentItem>
            <CommentItem.Title></CommentItem.Title>
            <CommentItem.Desc></CommentItem.Desc>
          </CommentItem>
        </CommentWrapper>
    </Container>
  )
}

export default FeedbackDetail
