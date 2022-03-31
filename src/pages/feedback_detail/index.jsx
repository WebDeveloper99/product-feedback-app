import React from 'react'
import { useNavigate } from 'react-router-dom'
import {
  Container,
  NavContainer,
  TextWrapper,
  BtnWrapper,
  AddButton,
  WrapperItem,
  LikeBar,
  LikeBtn,
  DataBar,
  Title,
  MessageBar,
  Link,
  Discreption,
  DataType,
  CommentWrapper,
  CommentItem,
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
          <CommentWrapper.Theme>4 comments</CommentWrapper.Theme>
          <CommentItem>
            <CommentItem.Title>add reply</CommentItem.Title>
            <CommentItem.Desc>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </CommentItem.Desc>
          </CommentItem>
        </CommentWrapper>
    </Container>
  )
}

export default FeedbackDetail
