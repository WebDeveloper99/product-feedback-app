import React, { useContext, useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import { SuggestionsContext } from '../../context/suggestion/SuggContext'
import { SortCategoryContext } from '../../context/sortBy/sortByContext'
import {
  Container,
  SectionHead,
  SectionBody,
  SectionFooter,
  AntButton,
  Link,
} from './style'



const Section = () => {
  
  const [sortByCategory, setSortByCategory] =useContext(SortCategoryContext)

  const sortCategory=(id)=>{
    setSortByCategory(id)
  }


  const [sugg_mock, setSugg_Mock] = useContext(SuggestionsContext)
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

  var planned = []
  var progress = []
  var live = []

  const counterSort = (sugg_mock) => {
    planned = sugg_mock.filter((value) => {
      return value.feedback_status === 1 && value
    })

    progress = sugg_mock.filter((value) => {
      return value.feedback_status === 2 && value
    })

    live = sugg_mock.filter((value) => {
      return value.feedback_status === 3 && value
    })
  }

  counterSort(sugg_mock)

  return (
    <React.Fragment>
      <Container>
        <SectionHead>
          <SectionHead.Title>
            <div className="title">Frontend Mentor</div>
            <div className="desc">Feedback board</div>
          </SectionHead.Title>
        </SectionHead>
        <SectionBody>
        <AntButton onClick={()=>sortCategory(0)} >All</AntButton>
          {
            category.map((item)=>{
              return(
                <React.Fragment key={item.category_id}>
                  <AntButton onClick={()=>sortCategory(item.category_id)} >{item.category_name}</AntButton>
                </React.Fragment>
              )
            })
          }
        </SectionBody>
        <SectionFooter>
          <SectionFooter.Title>
            Roadmap <Link to={'/roadmap'}>View</Link>
          </SectionFooter.Title>
          <SectionFooter.UL>
            <SectionFooter.LI>
              Planned <b>{planned.length}</b>{' '}
            </SectionFooter.LI>
            <SectionFooter.LI>
              In-Progress <b>{progress.length}</b>{' '}
            </SectionFooter.LI>
            <SectionFooter.LI>
              Live <b>{live.length}</b>{' '}
            </SectionFooter.LI>
          </SectionFooter.UL>
        </SectionFooter>
      </Container>
      <Outlet />
    </React.Fragment>
  )
}

export default Section
