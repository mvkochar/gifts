import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AllGoods from '../../pages/AllGoods'
import Home from '../../pages/Home'
import Sewing from '../../pages/Sewing'
import Production from '../../pages/Production'
import Sets from '../../pages/Sets'
import Information from '../../pages/Information'

const Main = () => {
  return (
    <Routes>
      <Route 
        path='/'
        element={<Home/>}
      />
      <Route
        path='sewing'
        element={<Sewing/>}
      />
      <Route
        path='all-goods'
        element={<AllGoods/>}
      />
      <Route
        path='production'
        element={<Production/>}
      />
      <Route
        path='sets'
        element={<Sets/>}
      />
      <Route
        path='information'
        element={<Information/>}
      />
    </Routes>
  )
}

export default Main