import React from "react";
import { Button } from "react-bootstrap";
import './index.css';
const ChatInput = () => {
  return (
    <div
      className="d-flex input-main"
    >
      <i
        className="glyphicon glyphicon-paperclip"
        style={{ fontSize: 20, padding: 5 }}
      ></i>
      <input
        placeholder="Type your message"
        style={{ width: "100%", outline: "none", padding: 5, border: "none" }}
      />
      <i
        className="glyphicon glyphicon-piggy-bank"
        style={{ fontSize: 20, padding: 5 }}
      ></i>
      <Button style={{ borderRadius: "100%" }} variant="dark">
        <i className="glyphicon glyphicon-send" style={{ fontSize: 15 }}></i>
      </Button>
    </div>
  );
};

export default ChatInput;
