import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { CaretLeftOutlined } from '@ant-design/icons'
import { SuggestionsContext } from '../../context/suggestion/SuggContext'
import {
  Container,
  NavContainer,
  TextWrapper,
  BtnWrapper,
  AddButton,
  BodyContainer,
  Left,
  LeftHeader,
  LeftItem,
  LeftItemCategory,
  LikeBar,
  LikeBtn,
  MessageBar,
  Center,
  CenterHeader,
  CenterItem,
  CenterItemCategory,
  Right,
  RightHeader,
  RightItem,
  RightItemCategory,
} from './style'

const RoadMap = () => {
  const navigate = useNavigate()
  const [sugg_mock, setSugg_Mock] = useContext(SuggestionsContext)

  


  return (
    <Container>
      <NavContainer>
        <TextWrapper>
          <TextWrapper.TextItem onClick={() => navigate('/')}>
            <CaretLeftOutlined /> Go Back
          </TextWrapper.TextItem>
          <TextWrapper.TextItem fontSize={'22px'}>Roadmap</TextWrapper.TextItem>
        </TextWrapper>
        <BtnWrapper>
          <AddButton onClick={() => navigate('/newFeedback')}>
            + Add Feedback
          </AddButton>
        </BtnWrapper>
      </NavContainer>
      <BodyContainer>
        <Left>
          <LeftHeader>
            <LeftHeader.Title>Planned ({planned.length})</LeftHeader.Title>
            <LeftHeader.Desc>Ideas prioritized for research</LeftHeader.Desc>
          </LeftHeader>
          {sugg_mock.map((value) => {
            return (
              value.feedback_status === 1 && (
                <LeftItem>
                  <LeftItem.Status>Planned</LeftItem.Status>
                  <LeftItem.Title>{value.feedback_title}</LeftItem.Title>
                  <LeftItem.Desc>{value.feedback_description}</LeftItem.Desc>
                  <LeftItemCategory>{value.catecory_name}</LeftItemCategory>
                  <LeftItem.About>
                    <LikeBar>
                      <LikeBtn>
                        <LikeBtn.LikeIcon className={'icon'} />{value.feedback_like}</LikeBtn>
                    </LikeBar>
                    <MessageBar>
                      <MessageBar.Msg />{value.comment_count}
                    </MessageBar>
                  </LeftItem.About>
                </LeftItem>
              )
            )
          })}
        </Left>
        <Center>
          <CenterHeader>
            <CenterHeader.Title>In-Progress ({progress.length})</CenterHeader.Title>
            <CenterHeader.Desc>
              Ideas prioritized for research
            </CenterHeader.Desc>
          </CenterHeader>
          {sugg_mock.map((value) => {
            return (
              value.feedback_status === 2 && (
                <CenterItem>
                  <CenterItem.Status>In Progress</CenterItem.Status>
                  <CenterItem.Title>{value.feedback_title}</CenterItem.Title>
                  <CenterItem.Desc>{value.feedback_description}</CenterItem.Desc>
                  <CenterItemCategory>{value.catecory_name}</CenterItemCategory>
                  <CenterItem.About>
                    <LikeBar>
                      <LikeBtn>
                        <LikeBtn.LikeIcon className={'icon'} />{value.feedback_like}</LikeBtn>
                    </LikeBar>
                    <MessageBar>
                      <MessageBar.Msg />{value.comment_count}
                    </MessageBar>
                  </CenterItem.About>
                </CenterItem>
              )
            )
          })}
        </Center>
        <Right>
          <RightHeader>
            <RightHeader.Title>Live ({live.length})</RightHeader.Title>
            <RightHeader.Desc>Ideas prioritized for research</RightHeader.Desc>
          </RightHeader>
          {sugg_mock.map((value) => {
            return (
              value.feedback_status == 3 && (
                <RightItem>
                  <RightItem.Status>Live</RightItem.Status>
                  <RightItem.Title>{value.feedback_title}</RightItem.Title>
                  <RightItem.Desc>{value.feedback_description}</RightItem.Desc>
                  <RightItemCategory>{value.catecory_name}</RightItemCategory>
                  <RightItem.About>
                    <LikeBar>
                      <LikeBtn>
                        <LikeBtn.LikeIcon className={'icon'} />{value.feedback_like}
                      </LikeBtn>
                    </LikeBar>
                    <MessageBar>
                      <MessageBar.Msg />{value.comment_count}
                    </MessageBar>
                  </RightItem.About>
                </RightItem>
              )
            )
          })}
        </Right>
      </BodyContainer>
    </Container>
  )
}

export default RoadMap
