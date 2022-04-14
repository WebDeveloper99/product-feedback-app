import React, { useContext, useEffect, useState } from 'react'
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
import {
  SortVoetsContext,
  SortCategoryContext,
} from '../../context/sortBy/sortByContext'
import MainEmpty from '../main_empty'

const Main = () => {
  const [sortByCategory] = useContext(SortCategoryContext)
  const [sugg_mock, setSugg_Mock] = useContext(SuggestionsContext)
  const [sugg_data, setSugg_Data] = useState(sugg_mock)
  const [sortByVoets] = useContext(SortVoetsContext)

  const setFeedbackIdtoLocalStorage = (feedback_id) => {
    localStorage.setItem('feedback_id', feedback_id)
  }

  // ----------------------begin sort voets----------------------------------
  useEffect(() => {
    console.log(sortByVoets, 'oo')
    switch (sortByVoets) {
      case 'mostUpvotes':
        setSugg_Data(
          sugg_data.sort((a, b) => b.feedback_like - a.feedback_like),
        )
        break
      case 'leastUpvotes':
        setSugg_Data(
          sugg_data.sort((a, b) => a.feedback_like - b.feedback_like),
        )
        break
      case 'mostComments':
        setSugg_Data(
          sugg_data.sort((a, b) => b.comment_count - a.comment_count),
        )
        break
      case 'leastComments':
        setSugg_Data(
          sugg_data.sort((a, b) => a.comment_count - b.comment_count),
        )
        break
      default:
        return setSugg_Data(sugg_mock)
    }
  }, [sortByVoets])

  // ----------------------begin sort category----------------------------------

  useEffect(() => {
    console.log('id=', sortByCategory)
    if (sortByCategory == 0) {
      return setSugg_Data(sugg_mock)
    } else {
      let filtered_sugg_data = sugg_mock.filter((item) => {
        return sortByCategory == item.category_id && item
      })
      console.log(filtered_sugg_data, 'pp')
      setSugg_Data(filtered_sugg_data)
    }
  }, [sortByCategory])

  // ----------------------begin Like Dislike----------------------------------
  const [click, setClick] = useState(1)

  const LikeDisLike = (feedback_id) => {
    const newData = sugg_data.map((value) =>
      value.feedback_id == feedback_id
        ? { ...value, feedback_like: value.feedback_like + click }
        : value,
    )
    setClick(-1 * click)
    setSugg_Data(newData)
  }

  return (
    <React.Fragment>
      <Container>
        {sugg_data.length > 0 ? (
          sugg_data.map(
            ({
              feedback_id,
              feedback_like,
              feedback_title,
              feedback_description,
              catecory_name,
              comment_count,
            }) => {
              return (
                <WrapperItem key={feedback_id}>
                  <LikeBar>
                    <LikeBtn onClick={() => LikeDisLike(feedback_id)}>
                      <LikeBtn.LikeIcon className={'icon'} />
                      {feedback_like}
                    </LikeBtn>
                  </LikeBar>
                  <DataBar>
                    <Link
                      onClick={() => setFeedbackIdtoLocalStorage(feedback_id)}
                      to={'/feedbackDetail'}
                    >
                      {feedback_title}
                    </Link>
                    <Discreption>{feedback_description}</Discreption>
                    <DataType>
                      <DataType.Btn>{catecory_name}</DataType.Btn>
                    </DataType>
                  </DataBar>
                  <MessageBar>
                    <MessageBar.Msg />
                    {comment_count}
                  </MessageBar>
                </WrapperItem>
              )
            },
          )
        ) : (
          <MainEmpty margin={'10px 0 0 0'} />
        )}
      </Container>
    </React.Fragment>
  )
}

export default Main
