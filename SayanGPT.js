import { useState } from 'react';

export default function SayanGPT() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;
    const newMessage = { sender: "user", text: input };
    setMessages([...messages, newMessage]);
    setInput("");
    // Later: connect to backend
  };

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", padding: "20px", backgroundColor: "#0A0A0C" }}>
      <header style={{ display: "flex", justifyContent: "space-between", borderBottom: "1px solid #333", paddingBottom: "10px" }}>
        <h1 style={{ fontSize: "24px" }}>SayanGPT 2.0</h1>
        <div>CEO: Sayan</div>
      </header>
      <main style={{ flex: 1, marginTop: "20px", overflowY: "auto" }}>
        {messages.map((msg, i) => (
          <div key={i} style={{
            background: msg.sender === "user" ? "#5F5A60" : "#948293",
            padding: "10px",
            borderRadius: "12px",
            marginBottom: "10px",
            alignSelf: msg.sender === "user" ? "flex-end" : "flex-start",
            maxWidth: "60%"
          }}>{msg.text}</div>
        ))}
      </main>
      <footer style={{ borderTop: "1px solid #333", paddingTop: "10px" }}>
        <input
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && handleSend()}
          placeholder="Ask me anything..."
          style={{
            width: "100%",
            padding: "10px",
            backgroundColor: "#1a1a1a",
            color: "white",
            border: "1px solid #3a3a3a",
            borderRadius: "8px"
          }}
        />
      </footer>
    </div>
  );
}
