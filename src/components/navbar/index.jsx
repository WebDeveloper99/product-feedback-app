import React, { useContext, useState } from 'react'
import { Select } from 'antd'
import { Outlet, Navigate, useNavigate } from 'react-router-dom'
import { BtnWrapper, Container, TextWrapper, AddButton } from './style'

import { SuggestionsContext } from '../../context/suggestion/SuggContext'
import Sort from '../../context/SortBy'

const Navbar = () => {
  const navigate = useNavigate()

  const [sugg_mock, setSugg_Mock] = useContext(SuggestionsContext)
  const [_, setSortBy] = useContext(Sort)

  const { Option } = Select

  function onChange(value) {
    setSortBy(value)
  }

  function onSearch(val) {
    // console.log('search:', val)
  }
  return (
    <React.Fragment>
      <Outlet />
      <Container>
        <TextWrapper>
          <TextWrapper.Logo />
          <TextWrapper.TextItem>
            {sugg_mock.length} Suggestions
          </TextWrapper.TextItem>
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
          <AddButton onClick={() => navigate('/newFeedback')}>
            + Add Feedback
          </AddButton>
        </BtnWrapper>
      </Container>
    </React.Fragment>
  )
}

export default Navbar
