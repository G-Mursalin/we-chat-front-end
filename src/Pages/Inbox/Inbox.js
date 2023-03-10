import React from "react";
import "./Inbox.css";
import user1 from "./../../assets/images/user1.png";
import user2 from "./../../assets/images/user2.png";
import trash from "./../../assets/images/trash.png";
import attachment from "./../../assets/images/attachment.png";

const Inbox = () => {
  return (
    <div id="chat-container">
      <div id="search-container">
        <input type="text" placeholder="Search" />
      </div>
      <div id="conversation-list">
        <div className="conversation active">
          <img src={user1} alt="Sumit" />
          <div className="title-text">Sumit Saha</div>
          <div className="created-date"> Apr 16 </div>
          <div className="conversation-message">This is a message</div>
        </div>
        <div className="conversation">
          <img src={user2} alt="Sumit" />
          <div className="title-text">Sumit Saha</div>
          <div className="created-date"> Apr 16 </div>
          <div className="conversation-message">This is a message</div>
        </div>
      </div>
      <div id="new-message-container">
        <a href="#">+</a>
      </div>
      <div id="chat-title">
        <span>Sumit</span>
        <img src={trash} alt="Delete Conversation" />
      </div>
      <div id="chat-message-list">
        <div className="message-row other-message">
          <div className="message-content">
            <img src={user1} alt="Sumit" />
            <div className="message-text">Ok then</div>
            <div className="message-time">Apr 16</div>
          </div>
        </div>
        <div className="message-row you-message">
          <div className="message-content">
            <div className="message-text">Lorem ipsum dolor sit amet</div>
            <div className="message-time">Apr 16</div>
          </div>
        </div>
      </div>
      <div id="chat-form">
        <img src={attachment} alt="Add Attachment" />
        <input type="text" placeholder="Type a message" />
      </div>
    </div>
  );
};

export default Inbox;
