import React from 'react'
import { Select } from 'antd'
import { Link, Outlet } from 'react-router-dom'
import { BtnWrapper, Container, TextWrapper, AddButton, Add } from './style'

const Navbar = () => {
  const { Option } = Select

  function onChange(value) {
    console.log(`selected ${value}`)
  }

  function onSearch(val) {
    console.log('search:', val)
  }
  return (
    <React.Fragment>
      <Outlet />
      <Container>
        <TextWrapper>
          <TextWrapper.Logo />
          <TextWrapper.TextItem>6 Suggestions</TextWrapper.TextItem>
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
              <Option value="lastcomments">Last Comments</Option>
            </Select>
          </TextWrapper.SortBar>
        </TextWrapper>
        <BtnWrapper>
          <AddButton><Link to={'/newFeedback'}><Add/>Add Feedback</Link></AddButton>
        </BtnWrapper>
      </Container>
    </React.Fragment>
  )
}

export default Navbar
