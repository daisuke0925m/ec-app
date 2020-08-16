import React from 'react'
import {getUserId, getUserName} from "../reducks/users/selectors";
import { useSelector } from 'react-redux';


const Home = () => {
  const selector = useSelector(state => state);
  const uid = getUserId(selector)
  const username = getUserName(selector)


  return(
    <h2>
      HOME
      <p>{uid}</p>
  <p>{username}</p>
    </h2>
  )
}

export default Home