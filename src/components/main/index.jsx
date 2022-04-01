import React, { useContext } from 'react'
import {
  Container,
  WrapperItem,
  LikeBar,
  LikeBtn,
  DataBar,
  MessageBar,
  Link,
  Discreption,
  DataType,
} from './style'

import { SuggestionsContext } from '../../context/suggestion/SuggContext'

const Main = () => {
  const [sugg_mock, setSugg_Mock] = useContext(SuggestionsContext)

  const comment=(feedback_id)=>{
    localStorage.setItem("feedback_id", feedback_id)
  }

  return (
    <React.Fragment>
      <Container>
        {sugg_mock.map(({feedback_id, feedback_like, feedback_title, feedback_description, category_name, comment_count}) => {
          return (
            <WrapperItem key={feedback_id} >
              <LikeBar>
                <LikeBtn>
                  <LikeBtn.LikeIcon className={'icon'} />
                  {feedback_like}
                </LikeBtn>
              </LikeBar>
              <DataBar>
                <Link onClick={()=>comment(feedback_id)} to={'/feedbackDetail'}>
                  {feedback_title}
                </Link>
                <Discreption>
                  {feedback_description}
                </Discreption>
                <DataType>
                  <DataType.Btn>{category_name}</DataType.Btn>
                </DataType>
              </DataBar>
              <MessageBar>
                <MessageBar.Msg />{comment_count}
              </MessageBar>
            </WrapperItem>
          )
        })}
      </Container>
    </React.Fragment>
  )
}

export default Main
