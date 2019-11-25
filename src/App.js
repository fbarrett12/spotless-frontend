import React, { useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import './App.css'
import MainContainer from './containers/MainContainer'
import Routes from './Routes'
import Nav from './components/Nav'
import { BrowserRouter as Router } from 'react-router-dom'

function App() {
  const laundromats = useSelector(state => state.laundromats)
  const dispatch = useDispatch()

  useEffect( () => {
    fetch("http://localhost:3000/providers")
    .then(res => res.json())
    .then(data => {
      dispatch({ type: 'LOAD_LAUNDROMATS', data: data})
    })
  }, [dispatch])

  console.log(laundromats)
  return (
    <MainContainer />
  )
}

export default App;
