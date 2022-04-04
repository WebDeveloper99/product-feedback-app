import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Select } from 'antd'
import { CaretLeftOutlined } from '@ant-design/icons'
import {
  Container,
  NavContainer,
  TextWrapper,
  Wrapper,
  PenIcon,
  Title,
  FeedbackTitle,
  Category,
  FeedbackDetail,
  BtnGroup,
  DeleteBtn,
  AddBtn,
  CancelBtn,
} from './style'

const EditFeedback = () => {
    const navigate = useNavigate()
    const { Option } = Select

    function handleChange(value) {
      // console.log(`selected ${value}`)
    }

    return (
      <Container>
        <NavContainer>
          <TextWrapper>
            <TextWrapper.TextItem onClick={() => navigate(-1)}>
            <CaretLeftOutlined /> Go Back
            </TextWrapper.TextItem>
          </TextWrapper>
        </NavContainer>
        <Wrapper>
          <PenIcon/>
          <Title>Editing ‘Add a dark theme option’</Title>
          <FeedbackTitle>
            <FeedbackTitle.Title>Feedback Title</FeedbackTitle.Title>
            <FeedbackTitle.Desc>
              Add a short, descriptive headline
            </FeedbackTitle.Desc>
            <FeedbackTitle.Input></FeedbackTitle.Input>
          </FeedbackTitle>
          <Category>
            <Category.Title>Category</Category.Title>
            <Category.Desc>Choose a category for your feedback</Category.Desc>
            <Select
              style={{ marginBottom: '20px', background: '#F7F8FD' }}
              size="large"
              defaultValue="Feature"
              onChange={handleChange}
            >
              <Option value="feature">Feature</Option>
              <Option value="ui">UI</Option>
              <Option value="ux">UX</Option>
              <Option value="enhancement">Enhancement</Option>
              <Option value="bug">Bug</Option>
            </Select>
          </Category>
          <Category>
            <Category.Title>Update Status</Category.Title>
            <Category.Desc>Change feedback state</Category.Desc>
            <Select
              style={{ marginBottom: '20px', background: '#F7F8FD' }}
              size="large"
              defaultValue="Planned"
              onChange={handleChange}
            >
              <Option value="suggestion">Suggestion</Option>
              <Option value="planned">Planned</Option>
              <Option value="inProgress">In-Progress</Option>
              <Option value="live">Live</Option>
            </Select>
          </Category>
          <FeedbackDetail>
            <FeedbackDetail.Title>Feedback Detail</FeedbackDetail.Title>
            <FeedbackDetail.Desc>
              Include any specific comments on what should be improved, added,
              etc.
            </FeedbackDetail.Desc>
            <FeedbackDetail.Input></FeedbackDetail.Input>
          </FeedbackDetail>
          <BtnGroup>
            <DeleteBtn  width={'100px'} bgcolor={'#E98888;'}>Delete</DeleteBtn>
            <CancelBtn  onClick={() => navigate('/')} width={'100px'} bgcolor={'#3A4374'}>Cancel</CancelBtn>
            <AddBtn onClick={() => navigate('/')}>Add Feedback</AddBtn>
          </BtnGroup>
        </Wrapper>
      </Container>
    )
  }

export default EditFeedback
