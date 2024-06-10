import React, { useState } from 'react'
import Nav from './Nav'
import axios from 'axios'

const Add = () => {
    const [friend, changeData] = useState(
        {
            "name": "",
            "friendName": "",
            "friendNickName": "",
            "DescribeYourFriend": ""
        }
    )
    const inputHandler=(event)=>{
        changeData({...friend,[event.target.name]:event.target.value})
    }
    const readValue=()=>{
        console.log(friend)
        axios.post("https://friendsapi-re5a.onrender.com/adddata",friend).then(
            (response)=>{
                console.log(response.data)
                if(response.data.status=="success"){
                    alert("successfully added")
                }
                else{
                    alert("error occured")
                }
            }
        ).catch(
            (error)=>{
                console.log(error.message)
                alert(error.message)
            }
        )
    }
    return (
        <div>
            <Nav/>
            <div class="card text-center mb-3">
                <div class="card-body">
                    <h5 class="card-title">Add Friend</h5>
                    <p></p>
                    <div className="container">
                        <div className="row">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <div className="row g-3">
                                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                        <label htmlFor="" className="form-label">Name :</label>
                                        <input type="text" className="form-control" name='name' value={friend.name} onChange={inputHandler}/>
                                    </div>
                                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                        <label htmlFor="" className="form-label">Friend Name :</label>
                                        <input type="text" className="form-control" name='friendName'value={friend.friendName} onChange={inputHandler}/>
                                    </div>
                                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                        <label htmlFor="" className="form-label">Friend Nick Name :</label>
                                        <input type="text" className="form-control" name='friendNickName' value={friend.friendNickName} onChange={inputHandler}/>
                                    </div>
                                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                        <label htmlFor="" className="form-label">Friend Description :</label>
                                        <textarea id="" className="form-control" name='DescribeYourFriend' value={friend.DescribeYourFriend} onChange={inputHandler}></textarea>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br />
                    <button className="btn btn-success" onClick={readValue}>Add</button>
                </div>
            </div>
        </div>
    )
}

export default Add