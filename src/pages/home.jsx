import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { usersSelector } from "../store/users/usersSelector"
import { usersGet } from '../store/users/usersActions'






const Page = () => {
    const {users} = useSelector(usersSelector)
    const dispatch = useDispatch()
    useEffect(()=> {
        dispatch(usersGet())
    }, [])
    return <>
        <h2>Home page</h2>
        {users.map((user) => (
            <div>{user.firstName}</div>
        ))}
    </>
}
export default Page