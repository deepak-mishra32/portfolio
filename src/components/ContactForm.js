import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./pages/styles/Form.css";
import { Form, Button } from "react-bootstrap";

function ContactForm() {
  const initialData = {
    name: "",
    email: "",
    message: "",
  };
  const [data, setData] = useState(initialData);
  const onChangehandler = (e) => {
    setData((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };
  function sendEmail(e) {
    setData({
      name: "",
      email: "",
      message: "",
    });

    emailjs.sendForm(
      "service_taf1b4j",
      "template_xk17rg7",
      e.target,
      "user_X6Q4VE7AED5l0GINilOHk"
    );
  }

  return (
    <Form onSubmit={sendEmail} className="p-4">
      <Form.Group className="mb-2" controlId="formBasicEmail">
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            type="text"
            placeholder="Name"
            onChange={onChangehandler}
            required
            className="input"
            name="name"
          />
        </Form.Group>
        <Form.Control
          type="email"
          placeholder="Enter email"
          onChange={onChangehandler}
          required
          className="input"
          name="email"
        />
        <Form.Text className="email-text">
          I'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control
          as="textarea"
          placeholder="Hey! What's Up ?"
          onChange={onChangehandler}
          row={3}
          required
          className="input"
          name="message"
        />
      </Form.Group>
      <Button type="submit" className="form-btn">
        Submit
      </Button>
    </Form>
  );
}

export default ContactForm;
