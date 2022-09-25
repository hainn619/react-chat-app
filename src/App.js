import { ChatEngine } from "react-chat-engine";
import React, { Component } from "react";
import ChatFeed from "./components/ChatFeed";
import Hello from "./components/Hello";
import Modal from "./components/LoginForm"; 

import "./App.css";

const App = () => {
  if(!localStorage.getItem('username'))  return <Modal />
  return (
    <ChatEngine
      height="100vh"
      projectID="e7a23689-a6d3-4923-b511-1733934b77c5"
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
  );
};
export default App;
