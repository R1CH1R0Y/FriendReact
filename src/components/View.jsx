import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Nav from './Nav'

const View = () => {
    const [friend, changeData] = useState([])
    const fetchData = () => {
        axios.get("https://friendsapi-re5a.onrender.com/view").then(
            (response) => {
                changeData(response.data)
            }
        ).catch(
            (error) => {
                console.log(error.message)
                alert(error.message)
            }
        )
    }
    useEffect(() => { fetchData() }, [])
    return (
        <div>
            <Nav />
            <div class="card text-center mb-3">
                <div class="card-body">
                    <h5 class="card-title">Friend List</h5>
                    <p></p>
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Friend Name</th>
                                <th scope="col">Friend Nick Name</th>
                                <th scope="col">Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                friend.map(
                                    (value, index) => {
                                        return <tr>
                                            <td>{value.name}</td>
                                            <td>{value.friendName}</td>
                                            <td>{value.friendNickName}</td>
                                            <td>{value.DescribeYourFriend}</td>
                                        </tr>
                                    }
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default View