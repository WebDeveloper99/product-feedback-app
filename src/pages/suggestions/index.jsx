import React, { useContext } from 'react'
import { Container } from './style'
import Main from '../../components/main'
import MainEmpty from '../../components/main_empty'

import { SuggestionsContext } from '../../context/suggestion/SuggContext'


const Suggestions = () => {

  const [mock, setMock] = useContext(SuggestionsContext)
  return (
    <Container>
      {
        mock.length !== 0 ? <Main/> : <MainEmpty/>
      }
    </Container>
  )
}

export default Suggestions