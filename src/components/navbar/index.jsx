import React, { useContext, useState } from 'react'
import { Select } from 'antd'
import { Outlet, Navigate, useNavigate } from 'react-router-dom'
import { BtnWrapper, Container, TextWrapper, AddButton } from './style'

import { SuggestionsContext } from '../../context/suggestion/SuggContext'

const Navbar = () => {

  const navigate = useNavigate();

  const [sugg_mock, setSugg_Mock] = useContext(SuggestionsContext);

  const { Option } = Select

  function onChange(value) {

    console.log(`selected ${value}`)



    // localStorage.setItem("sortBy", value)

    
  
  const sortbynavbar=(value)=>{

    // let sortBy = localStorage.getItem("sortBy")

    switch(value){
      case 'mostUpvotes' :  setSugg_Mock(sugg_mock.sort((a,b)=> a.feedback_like - b.feedback_like))
      break;
      case 'lastUpvotes' :  setSugg_Mock(sugg_mock.sort((a,b)=> b.feedback_like - a.feedback_like))
      break;
      case 'mostComments' : setSugg_Mock(sugg_mock.sort((a,b)=> a.comment_count - b.comment_count))
      break;
      case 'lastComments' :  setSugg_Mock(sugg_mock.sort((a,b)=> b.comment_count - a.comment_count))
      break;
    }
  }

  sortbynavbar()

    // switch(value){
    //   case 'mostUpvotes' :  localStorage.setItem("mostUpvotes", value)
    //   break;
    //   case 'lastUpvotes' :  localStorage.setItem("lastUpvotes", value)
    //   break;
    //   case 'mostComments' :  localStorage.setItem("mostComments", value)
    //   break;
    //   case 'lastComments' :  localStorage.setItem("lastComments", value)
    //   break;
      
    // }

  }
  console.log(sugg_mock, 'sugg');

  function onSearch(val) {
    // console.log('search:', val)
  }
  return (
    <React.Fragment>
      <Outlet />
      <Container>
        <TextWrapper>
          <TextWrapper.Logo />
          <TextWrapper.TextItem>{sugg_mock.length} Suggestions</TextWrapper.TextItem>
          <TextWrapper.SortBar>
            Sort by :
            <Select
              showSearch
              placeholder="Most Upvotes"
              optionFilterProp="children"
              onChange={onChange}
              onSearch={onSearch}
              filterOption={(input, option) =>
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
              }
            >
              <Option value="mostUpvotes">Most Upvotes</Option>
              <Option value="lastUpvotes">Least Upvotes</Option>
              <Option value="mostComments">Most Comments</Option>
              <Option value="lastComments">Last Comments</Option>
            </Select>
          </TextWrapper.SortBar>
        </TextWrapper>
        <BtnWrapper>
          <AddButton onClick={()=> navigate('/newFeedback')} >+ Add Feedback</AddButton>
        </BtnWrapper>
      </Container>
    </React.Fragment>
  )
}

export default Navbar
