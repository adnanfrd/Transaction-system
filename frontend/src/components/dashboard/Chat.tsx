'use client';

import { useState } from "react";
import { FiSend } from "react-icons/fi";
import { IoArrowBack } from "react-icons/io5";
import { FaSearch, FaEllipsisH } from "react-icons/fa";
import Image from "next/image";

const Chat = () => {
  const [messages, setMessages] = useState([
    { text: "Lorem ipsum dolor sit.", sender: "other" },
    { text: "Lorem ipsum dolor sit.", sender: "other" },
    { text: "Lorem ipsum dolor sit.", sender: "me" },
    { text: "Lorem ipsum dolor sit.", sender: "me" },
  ]);
  
  const [message, setMessage] = useState("");

  const sendMessage = () => {
    if (message.trim() !== "") {
      setMessages([...messages, { text: message, sender: "me" }]);
      setMessage("");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-4">
      {/* Header */}
      <div className="w-full max-w-2xl bg-white shadow-md rounded-lg p-4 flex items-center justify-between">
        <button className="text-gray-600"><IoArrowBack size={24} /></button>
        <h2 className="text-lg font-semibold text-gray-700">Chat — August 21, 2023</h2>
        <div className="flex space-x-4">
          <FaSearch className="text-gray-600 cursor-pointer" />
          <FaEllipsisH className="text-gray-600 cursor-pointer" />
        </div>
      </div>

      {/* Chat Section */}
      <div className="w-full max-w-2xl bg-white shadow-md rounded-lg p-4 mt-4">
        <div className="flex items-center space-x-4 border-b pb-4">
          <Image
            src="/profile.jpg"
            alt="Profile Picture"
            width={40}
            height={40}
            className="rounded-full"
          />
          <div>
            <h3 className="text-gray-800 font-semibold">Trent Carie</h3>
            <p className="text-gray-500 text-sm">Apt#: 225</p>
          </div>
          <div className="ml-auto text-gray-600 font-medium">Trent Apartments</div>
        </div>
        <button className="w-full mt-3 bg-blue-500 text-white py-2 rounded-lg text-sm">View whole description</button>
      </div>

      {/* Messages */}
      <div className="w-full max-w-2xl flex flex-col space-y-2 my-4">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`max-w-[60%] px-4 py-2 rounded-lg text-white text-sm ${
              msg.sender === "me"
                ? "ml-auto bg-blue-500"
                : "mr-auto bg-gray-500"
            }`}
          >
            {msg.text}
          </div>
        ))}
      </div>

      {/* Message Input */}
      <div className="w-full max-w-2xl flex items-center bg-white shadow-md rounded-lg p-2 mt-auto">
        <input
          type="text"
          placeholder="Write a message..."
          className="flex-1 p-2 outline-none text-gray-700"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button onClick={sendMessage} className="text-blue-500 p-2">
          <FiSend size={24} />
        </button>
      </div>
    </div>
  );
};

export default Chat;