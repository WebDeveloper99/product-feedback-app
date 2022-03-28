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
  const [mock, setMock] = useContext(SuggestionsContext)

  return (
    <React.Fragment>
      <Container>
        {mock.map(({id, type, like, title, desc, msg}) => {
          return (
            <WrapperItem key={id} >
              <LikeBar>
                <LikeBtn>
                  <LikeBtn.LikeIcon className={'icon'} />
                  {like}
                </LikeBtn>
              </LikeBar>
              <DataBar>
                <Link to={'/feedbackDetail'}>
                  {title}
                </Link>
                <Discreption>
                  {desc}
                </Discreption>
                <DataType>
                  <DataType.Btn>{type}</DataType.Btn>
                </DataType>
              </DataBar>
              <MessageBar>
                <MessageBar.Msg />{msg}
              </MessageBar>
            </WrapperItem>
          )
        })}
      </Container>
    </React.Fragment>
  )
}

export default Main
