import React from 'react'
import { Link } from 'react-router-dom'
import { Empty } from 'antd';
import { Container, NoDataImg, AddButton, Add } from './style'

const MainEmpty = () => {
  return (
    <React.Fragment>
      <Container>
        <Empty
        image={<NoDataImg/>}
        description = {false}
        >
          <h1>There is no feedback yet.</h1>
          <h3>Got a suggestion? Found a bug that needs to be squashed? <br/> We love hearing about new ideas to improve our app.</h3>
          <AddButton><Link to={'/newFeedback'}><Add/>Add Feedback</Link></AddButton>
        </Empty>
      </Container>
    </React.Fragment>
  )
}

export default MainEmpty