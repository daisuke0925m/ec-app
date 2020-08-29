import React from 'react'
import { getUserId, getUserName } from "../reducks/users/selectors";
import { useSelector, useDispatch } from 'react-redux';
import { signOut } from '../reducks/users/operations'

const Home = () => {
    const dispatch = useDispatch()
    const selector = useSelector(state => state);
    const uid = getUserId(selector)
    const username = getUserName(selector)


    return (
        <h2>
            HOME
            <p>{uid}</p>
            <p>{username}</p>
            <button onClick={() => dispatch(signOut())}>Sign Out</button>
        </h2>
    )
}

export default Home