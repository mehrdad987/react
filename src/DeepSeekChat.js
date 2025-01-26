import React, { useState } from "react";
import axios from "axios";

const DeepSeekChat = () => {
  const [messages, setMessages] = useState([]); // Stores chat history
  const [inputText, setInputText] = useState(""); // Stores user input
  const [isLoading, setIsLoading] = useState(false); // Tracks API loading state

  // Replace with your DeepSeek API endpoint and API key
  const DEEPSEEK_API_URL = "sk-5cf0f248faab408b9a5e7ad62d843bab";
  const API_KEY = "check1";

  // Function to send user message to DeepSeek API
  const sendMessage = async () => {
    if (!inputText.trim()) return; // Don't send empty messages

    setIsLoading(true);

    // Add user message to chat history
    const userMessage = { role: "user", content: inputText };
    setMessages((prev) => [...prev, userMessage]);

    try {
      // Call DeepSeek API
      const response = await axios.post(
        DEEPSEEK_API_URL,
        {
          messages: [...messages, userMessage], // Include chat history
          model: "deepseek-chat", // Replace with your model
        },
        {
          headers: {
            Authorization: `Bearer ${API_KEY}`,
            "Content-Type": "application/json",
          },
        }
      );

      // Add DeepSeek's response to chat history
      const botMessage = response.data.choices[0].message;
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error("Error calling DeepSeek API:", error);
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "Sorry, something went wrong!" },
      ]);
    } finally {
      setIsLoading(false);
      setInputText(""); // Clear input field
    }
  };

  return (
    <div className="chat-container">
      <div className="chat-header">
        <h2>DeepSeek Chat</h2>
      </div>

      <div className="chat-box">
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.role}`}>
            <strong>{msg.role === "user" ? "You" : "DeepSeek"}:</strong>{" "}
            {msg.content}
          </div>
        ))}
        {isLoading && <div className="message assistant">Typing...</div>}
      </div>

      <div className="chat-input">
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && sendMessage()}
          placeholder="Type your message..."
          disabled={isLoading}
        />
        <button onClick={sendMessage} disabled={isLoading}>
          Send
        </button>
      </div>
    </div>
  );
};

export default DeepSeekChat;