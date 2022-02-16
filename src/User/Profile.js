import React, { useState } from "react";
import NavBar from "../Navigation/NavBar";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import axios from "axios";

const Profile = ({ userInfo, headers }) => {
    const [userName, setUserName] = useState(userInfo.name)
    const [userEmail, setUserEmail] =  useState(userInfo.email)
    const [userPassword, setUserPassword] = useState(userInfo.password)

    const handleSubmit = (e) => {
        e.preventDefault()
        const userUrl = `https://protected-hollows-70202.herokuapp.com/grouper/users/${localStorage.getItem("UUID")}`
        axios.patch(userUrl, {name: userName, password: userPassword}, {headers: headers})
        .then(res => console.log(res))
        .catch(err => console.log(err))
    }
console.log(userInfo)
console.log(`useName:${userName}`)
console.log(`password:${userPassword}`)
  return (
    <div>
      <NavBar />
      <Form onSubmit={ (e) => handleSubmit(e) }>
          <Label >User ID</Label>
          <h3>{localStorage.getItem("UUID")}</h3>
        <FormGroup>
          <Label for="nameField">Name</Label>
          <Input
            id="nameField"
            name="name"
            // value={userInfo.name}
            placeholder={userInfo.name}
            onChange={(e) => setUserName(e.target.value)}
            type="text"
          />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input
            id="examplePassword"
            name="password"
            placeholder="Enter New Password"
            onChange={(e) => setUserPassword(e.target.value)}
            type="password"
          />
        </FormGroup>
        <Button type="submit">Submit</Button>
      </Form>
    </div>
  );
};

export default Profile;
