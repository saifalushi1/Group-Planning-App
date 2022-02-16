import React, { useState } from "react";
import NavBar from "../Navigation/NavBar";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import axios from "axios";
import { Link } from "react-router-dom";

const Profile = ({ userInfo, headers }) => {
    const [userName, setUserName] = useState(userInfo.name)
    // const [userEmail, setUserEmail] =  useState(userInfo.email)
    const [userPassword, setUserPassword] = useState(userInfo.password)

    const handleSubmit = (e) => {
        e.preventDefault()
        const userUrl = `https://protected-hollows-70202.herokuapp.com/grouper/users/${localStorage.getItem("UUID")}`
        axios.patch(userUrl, {name: userName, password: userPassword}, {headers: headers})
        .catch(err => console.log(err))
    }

  return (
    <div>
      <NavBar />
      <Form onSubmit={ (e) => handleSubmit(e) }>
          <h3>Profile Settings</h3>
        <FormGroup>
          <Label for="nameField">Update Name</Label>
          <Input
            id="nameField"
            name="name"
            placeholder={`Enter A New Name`}
            onChange={(e) => setUserName(e.target.value)}
            type="text"
          />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Change Password</Label>
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
