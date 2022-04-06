import React, { useContext, useState } from 'react'
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

  const setFeedbackIdtoLocalStorage=(feedback_id)=>{
    localStorage.setItem("feedback_id", feedback_id)
  }


  const [click, setClick] = useState(1)
  var [like, setLike] = useState(true)

  const LikeDisLike=(feedback_id)=>{
    
    const newData = sugg_mock.map((value)=> value.feedback_id == feedback_id 
    ?  { ...value, feedback_like : value.feedback_like + click } 
    : value)

    
    
    setSugg_Mock(newData)
    setClick(-1 * click)
    
  }



  return (
    <React.Fragment>
      <Container>
        {sugg_mock.map(({feedback_id, feedback_like, feedback_title, feedback_description, catecory_name, comment_count}) => {
          return (
            <WrapperItem key={feedback_id} >
              <LikeBar>
                <LikeBtn onClick={()=>LikeDisLike(feedback_id)}  >
                  <LikeBtn.LikeIcon className={'icon'} />
                  {feedback_like}
                </LikeBtn>
              </LikeBar>
              <DataBar>
                <Link onClick={()=>setFeedbackIdtoLocalStorage(feedback_id)} to={'/feedbackDetail'}>
                  {feedback_title}
                </Link>
                <Discreption>
                  {feedback_description}
                </Discreption>
                <DataType>
                  <DataType.Btn >{catecory_name}</DataType.Btn>
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
