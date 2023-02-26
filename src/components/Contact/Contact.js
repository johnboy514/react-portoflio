import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Contact() {
  return (
    <center className="pb-4 bg-info">
    <h1>Contact me here!</h1>
    <br></br>
    <Form className="px-5" style={{ marginBottom: 200, maxWidth: 600, minHeight: 315, backgroundColor: "lightGreen", borderRadius: 25}}>
      <Form.Group className="mb-3" controlId="formName">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter name" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formMessage">
        <Form.Label>Message</Form.Label>
        <Form.Control as="textarea" rows={8} placeholder="Enter message" />
      </Form.Group>

      <Button className="mb-3" variant="success" type="submit">
        Submit
      </Button>
    </Form>
    </center>
  );
}

export default Contact;