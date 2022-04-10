import React, { useContext, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { CommentsContext } from '../../context/comment/commentsContext'
import { SuggestionsContext } from '../../context/suggestion/SuggContext'
import { CaretLeftOutlined } from '@ant-design/icons'
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
  AddCommentWrapper,
  AddComment,
  BtnGroup,
  Character,
  AddBtn,
} from './style'

const FeedbackDetail = () => {
  var localStor_feedbackId = localStorage.getItem('feedback_id')

  // --------------------suggData----------------------------->>>

  const [sugg_mock, setSugg_Mock] = useContext(SuggestionsContext)
  const [sugg_data, setSugg_Data] = useState(sugg_mock)

  const suggSort = () => {
    let newSuggData = sugg_data.filter((item) => {
      return item.feedback_id == localStor_feedbackId && item
    })
    setSugg_Data(newSuggData)
  }

  useEffect(() => {
    suggSort()
  }, [localStor_feedbackId])

  // --------------------suggData-----------------------------<<<

  // ---------------------commentData--------------------------->>>

  const [comment_mock, setComment_Mock] = useContext(CommentsContext)
  const [comment_data, setComment_Data] = useState(comment_mock)

  const commentSort = () => {
    let newCommentData = comment_data.filter((value) => {
      return value.Feedback.feedback_id == localStor_feedbackId && value
    })
    setComment_Data(newCommentData)
  }

  useEffect(() => {
    commentSort()
  }, [localStor_feedbackId])

  // ---------------------------------set, get Comment------------------




  const replyComment = (reply) => {
    localStorage.setItem('replyComment', reply?.User.username)
    document.getElementById('replyCommentInput').innerText =
      reply?.User.username
  }


  // ---------------------commentData---------------------------<<<

  const navigate = useNavigate()
  return (
    <Container>
      <NavContainer>
        <TextWrapper>
          <TextWrapper.TextItem onClick={() => navigate(-1)}>
            <CaretLeftOutlined /> Go Back
          </TextWrapper.TextItem>
        </TextWrapper>
        <BtnWrapper>
          <AddButton onClick={() => navigate('/editFeedback')} color="#7C91F9">
            Edit Feedback
          </AddButton>
        </BtnWrapper>
      </NavContainer>
      {sugg_data.map((value) => {
        return (
          <React.Fragment key={value.feedback_id}>
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
                <MessageBar.Msg />
                {value.comment_count}
              </MessageBar>
            </WrapperItem>
          </React.Fragment>
        )
      })}
      <CommentWrapper>
        <CommentWrapper.Theme>
          {} Comments
        </CommentWrapper.Theme>
        {comment_data.map((item) => {
          return (
            <React.Fragment key={item.comment_id}>
              <CommentItem>
                <CommentAvatarWrapper>
                  <CommentAvatar>
                    <img
                      src={`https://feedback-app-1.herokuapp.com/${item.User.user_profile_img}`}
                      alt="comment avatar"
                    />
                  </CommentAvatar>
                </CommentAvatarWrapper>
                <CommentMain>
                  <CommentMain.Title>
                    <CommentUser>
                      <CommentUser.Name>{item.User.name}</CommentUser.Name>
                      <CommentUser.Email>
                        {item.User.username}
                      </CommentUser.Email>
                    </CommentUser>
                    <CommentReply
                      onClick={() => replyComment(item)}
                      htmlFor={'replyCommentInput'}
                      tabindex="12"
                    >
                      Reply
                    </CommentReply>
                  </CommentMain.Title>
                  <CommentMain.Desc>
                    {item.Feedback.feedback_description}
                  </CommentMain.Desc>
                </CommentMain>
              </CommentItem>
              <PostReplyWrapper className="postCommentWrapp">
                <PostReplyWrapper.Text className="postComment">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry2.
                </PostReplyWrapper.Text>
                <PostReplyWrapper.Btn>
                  <AddButton width={'150px'}>Post Reply</AddButton>
                </PostReplyWrapper.Btn>
              </PostReplyWrapper>
            </React.Fragment>
          )
        })}
      </CommentWrapper>
      <AddCommentWrapper>
        <AddComment>
          <AddComment.Title>Add Comment</AddComment.Title>
          <AddComment.Input id="replyCommentInput"></AddComment.Input>
        </AddComment>
        <BtnGroup>
          <Character>250 Characters left</Character>
          <AddBtn >Post Comment</AddBtn>
        </BtnGroup>
      </AddCommentWrapper>
    </Container>
  )
}

export default FeedbackDetail
