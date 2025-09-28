import React from "react"
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import Login from "./components/login"
import Profile from "./components/profile"
import Body from "./components/Body"
import { Provider, useSelector } from "react-redux"
import store from "./utils/store"
import Feed from "./components/Feed"
import Connections from "./components/connections"
import Requests from "./components/request"
import Premium from "./components/Premium"
import Chat from "./components/Chat"

function App() {
  
  return (
    <>
    <Provider store={store}>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Body />} >
            <Route path="/" element={<Feed />} />
            <Route path='/login' element={<Login />} />              
            <Route path="/profile" element={<Profile />} />
            <Route path="/connections" element={<Connections />} />
            <Route path="/requests" element={<Requests />} />              
            <Route path="/premium" element={<Premium />} />
            <Route path="/chat/:targetUserId" element={<Chat />} />
            <Route path='*' element={<Navigate to='/login' />} />
          </Route>
        </Routes>
      </BrowserRouter>
      </Provider>
    </>

  )
}

export default App
