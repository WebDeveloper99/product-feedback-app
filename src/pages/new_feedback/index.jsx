import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Select } from 'antd'
import { CaretLeftOutlined } from '@ant-design/icons'
import {
  Container,
  NavContainer,
  TextWrapper,
  Wrapper,
  Add,
  Title,
  FeedbackTitle,
  Category,
  FeedbackDetail,
  BtnGroup,
  Link,
  AddBtn,
  CancelBtn
} from './style'

const NewFeedback = () => {
  const navigate = useNavigate()
  const { Option } = Select

  function handleChange(value) {
    console.log(`selected ${value}`)
  }

  return (
    <Container>
      <NavContainer>
        <TextWrapper>
          <TextWrapper.TextItem onClick={() => navigate('/')}>
           <CaretLeftOutlined/> Go Back
          </TextWrapper.TextItem>
        </TextWrapper>
      </NavContainer>
      <Wrapper>
        <Add>+</Add>
        <Title>Create New Feedback</Title>
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
        <FeedbackDetail>
          <FeedbackDetail.Title>Feedback Detail</FeedbackDetail.Title>
          <FeedbackDetail.Desc>
            Include any specific comments on what should be improved, added,
            etc.
          </FeedbackDetail.Desc>
          <FeedbackDetail.Input></FeedbackDetail.Input>
        </FeedbackDetail>
        <BtnGroup>
          <CancelBtn onClick={() => navigate('/')} width={'100px'} bgColor={'#3A4374'}>Cancel</CancelBtn>
          <AddBtn onClick={() => navigate('/')} >Add Feedback</AddBtn>
        </BtnGroup>
      </Wrapper>
    </Container>
  )
}

export default NewFeedback
