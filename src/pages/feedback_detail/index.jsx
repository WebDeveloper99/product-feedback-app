import React, { useContext, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { CommentsContext } from '../../context/comment/commentsContext'
import { SuggestionsContext } from '../../context/suggestion/SuggContext'
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
  CommentAvatarWrapper,
  CommentAvatar,
  CommentMain,
  CommentReply,
  CommentUser,
  PostReplyWrapper,
} from './style'

const FeedbackDetail = () => {

  var localStor_feedbackId = localStorage.getItem('feedback_id')

  // --------------------suggData----------------------------->>>

  const [sugg_mock, setSugg_Mock] = useContext(SuggestionsContext)
  const [sugg_data, setSugg_Data] = useState(sugg_mock)

  const suggSort = (localStor_feedbackId) => {

    let newSuggData = sugg_data.filter((item) => {
      return item.feedback_id == localStor_feedbackId &&  item;
    })
    setSugg_Data(newSuggData)
    console.log(newSuggData, 'sugg new data')
  }

  
  useEffect(()=>{
    suggSort(localStor_feedbackId)
  },[localStor_feedbackId])

  // --------------------suggData-----------------------------<<<

  // ---------------------commentData--------------------------->>>

  const [comment_mock, setComment_Mock] = useContext(CommentsContext)
  const [comment_data, setComment_Data] = useState(comment_mock)

  const commentSort = (localStor_feedbackId) => {

    let newCommentData = comment_data.filter((item) => {
      return item.Feedback.feedback_id == localStor_feedbackId & item
    })
    setComment_Data(newCommentData)
    console.log(newCommentData ,'bu men');
  }
  
  
  
  useEffect(()=>{
      commentSort(localStor_feedbackId)
    },[localStor_feedbackId])

  // ---------------------commentData---------------------------<<<

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
          <AddButton color="#7C91F9">
            <Link to={'/editFeedback'}>Edit Feedback</Link>
          </AddButton>
        </BtnWrapper>
      </NavContainer>
      {sugg_data.map((value) => {
        return (
          <div key={value.feedback_id}>
            <WrapperItem>
              <LikeBar>
                <LikeBtn>
                  <LikeBtn.LikeIcon className={'icon'} />
                  {value.feedback_like}
                </LikeBtn>
              </LikeBar>
              <DataBar>
                <Title>{value.feedback_title}</Title>
                <Discreption>{value.feedback_description}</Discreption>
                <DataType>
                  <DataType.Btn>{value.catecory_name}</DataType.Btn>
                </DataType>
              </DataBar>
              <MessageBar>
                <MessageBar.Msg />{value.comment_count}
              </MessageBar>
            </WrapperItem>
          </div>
        )
      })}
      <CommentWrapper>
        <CommentWrapper.Theme>{sugg_data[0].comment_count} Comments</CommentWrapper.Theme>
        {comment_data.map((item) => {
          return (
            <div key={item.comment_id}>
              <CommentItem>
                <CommentAvatarWrapper>
                  <CommentAvatar>
                    <img src={`${item.User.user_profile_img}`} alt="" />
                  </CommentAvatar>
                </CommentAvatarWrapper>
                <CommentMain>
                  <CommentMain.Title>
                    <CommentUser>
                      <CommentUser.Name>Eldor</CommentUser.Name>
                      <CommentUser.Email>@gmail</CommentUser.Email>
                    </CommentUser>
                    <CommentReply>Reply</CommentReply>
                  </CommentMain.Title>
                  <CommentMain.Desc>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Obcaecati, nihil cumque ullam architecto sint quia saepe
                    aspernatur nemo. Incidunt explicabo id facere similique
                    voluptatibus temporibus, cumque nisi necessitatibus in
                    minima!
                  </CommentMain.Desc>
                </CommentMain>
              </CommentItem>
              <PostReplyWrapper>
                <PostReplyWrapper.Text>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </PostReplyWrapper.Text>
                <PostReplyWrapper.Btn>
                  <AddButton width={'150px'}>Post Reply</AddButton>
                </PostReplyWrapper.Btn>
              </PostReplyWrapper>
            </div>
          )
        })}
      </CommentWrapper>
    </Container>
  )
}

export default FeedbackDetail
