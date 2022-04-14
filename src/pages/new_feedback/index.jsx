import React, { useState } from 'react'
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
  CancelBtn,
} from './style'
import { useEffect } from 'react'

const NewFeedback = () => {
  // ---------------------------------------------------------------------------

  const [category, setCategory] = useState([])

  useEffect(() => {
    fetch('https://feedback-app-1.herokuapp.com/categories')
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        setCategory(data)
      })
      .catch((err) => console.log(err))
  }, [])

  // ---------------------------------------------------------------------------

  const postFeedback = () => {
    fetch('https://feedback-app-1.herokuapp.com/feedbacks', {
      method: 'POST',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        feedback_title: title,
        catecory_id: cat,
        feedback_description: desc,
      }),
    })
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        alert(data.message)
      })
      .catch((err) => console.log(err))
  }

  // ---------------------------------------------------------------------------

  const navigate = useNavigate()
  const { Option } = Select

  const [cat, setCat] = useState('')

  const handleChange = (value) => {
    console.log(`selected ${value}`)
    setCat(value)
  }

  const [title, setTitle] = useState('')

  const handleTitle = (e) => {
    setTitle(e.target.value)
  }

  const [desc, setDesc] = useState('')

  const handleDesc = (e) => {
    setDesc(e.target.value)
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
        <Add>+</Add>
        <Title>Create New Feedback</Title>
        <FeedbackTitle>
          <FeedbackTitle.Title>Feedback Title</FeedbackTitle.Title>
          <FeedbackTitle.Desc>
            Add a short, descriptive headline
          </FeedbackTitle.Desc>
          <FeedbackTitle.Input
            rules={[{ required: true, message: 'Please input your password!' }]}
            onChange={handleTitle}
          ></FeedbackTitle.Input>
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
            {category.map((item) => {
              return (
                <React.Fragment key={item.category_id}>
                  <Option value={`${item.category_id}`}>
                    {item.category_name}
                  </Option>
                </React.Fragment>
              )
            })}
          </Select>
        </Category>
        <FeedbackDetail>
          <FeedbackDetail.Title>Feedback Detail</FeedbackDetail.Title>
          <FeedbackDetail.Desc>
            Include any specific comments on what should be improved, added,
            etc.
          </FeedbackDetail.Desc>
          <FeedbackDetail.Input
            onClick={(e) => handleDesc(e)}
          ></FeedbackDetail.Input>
        </FeedbackDetail>
        <BtnGroup>
          <CancelBtn
            onClick={() => navigate('/')}
            width={'100px'}
            bgColor={'#4661E6'}
          >
            Cancel
          </CancelBtn>
          <AddBtn onClick={() => postFeedback()}>Add Feedback</AddBtn>
        </BtnGroup>
      </Wrapper>
    </Container>
  )
}

export default NewFeedback
