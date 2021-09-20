import React, { useState } from 'react';
import { Form, Button, Card } from "react-bootstrap";
import { FaEnvelope, FaComment, FaUserAlt } from "react-icons/fa";

export default function Contact() {

  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: ""
  });

  const validate = (email) => {
    const expression = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

    return expression.test(String(email).toLowerCase())
  }

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      alert("Thank you for interest.  This form is currently not functional.");
    } catch (e) {
      console.error(e);
    }

    setFormState({
      name: "",
      email: "",
      message: ""
    });

  };

  return (
    <>
      <Card className="p-3 m-5">
        <Form
          onSubmit={handleFormSubmit}
          className="p-4"
        >
          <Form.Group>
            <Form.Label htmlFor="name">
              <FaUserAlt className="mx-1" /> Name
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="Your name"
              name="name"
              onChange={handleChange}
              value={formState.name}
            />
            {!formState.name && <p style={{fontStyle: "italic"}}>Enter a name</p>}
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor="email">
              <FaEnvelope className="mx-1" /> Email
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="Your email"
              name="email"
              onChange={handleChange}
              value={formState.email}
            />
            {!formState.email && <p style={{fontStyle: "italic"}}>Email is required</p>}
            {!validate(formState.email) ? (<p style={{fontStyle: "italic"}}>Enter valid email</p>) : (<p style={{fontStyle: "italic"}}>Email is valid</p>)}
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor="message">
              <FaComment className="mx-1" /> Message
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your message"
              name="message"
              onChange={handleChange}
              value={formState.message}
            />
            {!formState.message && <p style={{fontStyle: "italic"}}>Please enter a message</p>}
          </Form.Group>
          <Button
            disabled={!(formState.email && formState.name && formState.message)}
            type="submit"
            variant="success"
            className="my-3"
          >
            Submit
          </Button>
        </Form>
      </Card>
    </>
  );
};