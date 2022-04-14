import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Select } from 'antd'
import { CaretLeftOutlined } from '@ant-design/icons'
import { SuggestionsContext } from '../../context/suggestion/SuggContext'
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

  // --------------------suggData----------------------------->>>

  var localStor_feedbackId = localStorage.getItem('feedback_id')

  const [sugg_mock, setSugg_Mock] = useContext(SuggestionsContext)
  const [sugg_data, setSugg_Data] = useState(
    sugg_mock.filter((item)=> item.feedback_id == localStor_feedbackId)
  )
  
  const [category, setCategory] = useState([])

  useEffect(()=>{
    fetch('https://feedback-app-1.herokuapp.com/categories')
    .then((response) => {
      return response.json()
    })
    .then((data) => {
      setCategory(data)
    })
    .catch((err) => console.log(err))
  },[sugg_mock, setSugg_Mock])
  
  // --------------------suggData-----------------------------<<<

  const [titleValue, setTitleValue] = useState(sugg_data[0].feedback_title)
  const [categoryValue, setCategoryValue] = useState(sugg_data[0].catecory_id)
  const [statusValue, setStatusValue] = useState(sugg_data[0].status_id)

  useEffect(()=>{
    function ChangeTitle() {
      setTitleValue(document.getElementById("title")?.value)
    }
    ChangeTitle()
  },[])


  useEffect(()=>{
    function ChangeCategory() {
      category.map((item)=>{
        return setCategoryValue(item.category_name == document.getElementById("category")?.value && item.catecory_id)
      })
    }
    ChangeCategory()
  },[])


  useEffect(()=>{
    function ChangeStatus() {
      switch('Planned'){
        case 'Planned':  setStatusValue(1) 
        case 'In-Progress':  setStatusValue(2) 
        case 'Live':  setStatusValue(3) 
        default : setStatusValue(1)
      }
    }
    ChangeStatus()
  },[])

// ------------------------by edit----------------->>>

function handleChangeCategory(value) {
  console.log(`selected category ${value}`)
  category.map((item)=>{
    return setCategoryValue(item.category_name == value && item.catecory_id)
  })
  }


  function handleChangeStaust(value) {
    console.log(`selected status ${value}`)
    switch(value){
      case 'planned':  setStatusValue(1) 
      case 'inProgress':  setStatusValue(2) 
      case 'live':  setStatusValue(3) 
      default : setStatusValue(1)
    }
  }
  // ------------------------by edit-----------------<<<

  // --------------------begin delete request-----------------------

  const deleteFeedback = () => {
    fetch(`https://feedback-app-1.herokuapp.com/feedbacks/${sugg_data[0].feedback_id}`, {
      method: 'DELETE',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        feedback_title: titleValue,
        feedback_status: statusValue,
        catecory_id: categoryValue,
      }),
    })
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        console.log(data);
        alert(data.message)
      })
      .catch((err) => console.log(err))
  }

  // --------------------end delete request-----------------------


  // --------------------begin edit request-----------------------


  
  const EditeFeedback = () => {
    console.log(titleValue,'titleValue');
    console.log(statusValue,'statusValue');
    console.log(categoryValue,'categoryValue');
    fetch(`https://feedback-app-1.herokuapp.com/feedbacks/${sugg_data[0].feedback_id}`, {
      method: 'PUT',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        feedback_title: titleValue,
        feedback_status: statusValue,
        catecory_id: categoryValue,
      }),
    })
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        console.log(data);
        alert(data.message)
      })
      .catch((err) => console.log(err,'xato keldi jigarim !!!'))
  }


  // --------------------end edit request-----------------------

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
        <PenIcon />
        <Title>Editing ‘Add a dark theme option’</Title>
        <FeedbackTitle>
          <FeedbackTitle.Title>Feedback Title</FeedbackTitle.Title>
          <FeedbackTitle.Desc>
            Add a short, descriptive headline
          </FeedbackTitle.Desc>
          <FeedbackTitle.Input id={'title'} defaultValue={`${sugg_data[0].feedback_title}`}/>
        </FeedbackTitle>
        <Category>
          <Category.Title>Category</Category.Title>
          <Category.Desc>Choose a category for your feedback</Category.Desc>
          <Select
            style={{ marginBottom: '20px', background: '#F7F8FD' }}
            size="large"
            defaultValue={`${sugg_data[0].category_name}`}
            onChange={handleChangeCategory}
          >
            {
              category.map((item)=>{
                return <Option 
                   key={item.category_id} 
                   value={`${item.category_name}`}
                >
                  {item.category_name}
                </Option>
              })
            }
          </Select>
        </Category>
        <Category>
          <Category.Title>Update Status</Category.Title>
          <Category.Desc>Change feedback state</Category.Desc>
          <Select
            style={{ marginBottom: '20px', background: '#F7F8FD' }}
            size="large"
            defaultValue="Planned"
            onChange={handleChangeStaust}
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
          <FeedbackDetail.Input defaultValue={`${sugg_data[0].description}`} />
        </FeedbackDetail>
        <BtnGroup>
          <DeleteBtn 
            onClick={()=>deleteFeedback()} 
            width={'100px'} 
            bgcolor={'#E98888;'}
          >
            Delete
          </DeleteBtn>
          <CancelBtn
            onClick={() => navigate('/')}
            width={'100px'}
            bgcolor={'#3A4374'}
          >
            Cancel
          </CancelBtn>
          <AddBtn onClick={() => EditeFeedback()}>Edite Feedback</AddBtn>
        </BtnGroup>
      </Wrapper>
    </Container>
  )
}

export default EditFeedback
