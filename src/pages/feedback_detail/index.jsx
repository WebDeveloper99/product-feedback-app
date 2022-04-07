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
  }, [])

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
  }, [])

// ---------------------------------set, get Comment------------------

  const replayComment=(replay)=>{
    console.log(replay.User.username);
    // localStorage.setItem("replayUsername",replay.User.username);
    document.getElementById('replayCommentInput').innerHTML = replay.User.username;

  }


  var [getComment, setGetcomment] = useState('')

  const getPostCommen=()=>{
    getComment = document.getElementById('replayCommentInput').value;
    setGetcomment(getComment);

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
          {sugg_data[0].comment_count} Comments
        </CommentWrapper.Theme>
        {comment_data.map((item) => {
          return (
            <React.Fragment key={item.comment_id}>
              <CommentItem>
                <CommentAvatarWrapper>
                  <CommentAvatar>
                    <img
                      src={`${item.User.user_profile_img}`}
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
                    <CommentReply onClick={()=>replayComment(item) } htmlFor={'replayCommentInput'} tabindex='12' >Reply</CommentReply>
                  </CommentMain.Title>
                  <CommentMain.Desc>
                    {item.Feedback.feedback_description}
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
            </React.Fragment>
          )
        })}
      </CommentWrapper>
      <AddCommentWrapper>
        <AddComment>
          <AddComment.Title>Add Comment</AddComment.Title>
          <AddComment.Input id='replayCommentInput'></AddComment.Input>
        </AddComment>
        <BtnGroup>
          <Character>250 Characters left</Character>
          <AddBtn onClick={()=>getPostCommen()} >Post Comment</AddBtn>
        </BtnGroup>
      </AddCommentWrapper>
    </Container>
  )
}

export default FeedbackDetail
