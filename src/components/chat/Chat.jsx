import React, {
  useState,
  useRef,
  useEffect,
} from "react";

import "./Chat.css";

const WELCOME_MESSAGE = {
  from: "bot",

  text:
    "👋 Welcome to Bhagvati Prasad Ojha Inter College.\n\nI’m Vidushi, your virtual assistant.\n\nI can help you with:\n\n🎓 Admissions\n📚 Academics\n🏫 Facilities\n💰 Fees & Scholarships\n🕘 School Timings\n📍 Campus Information\n\nHow can I help you today?",
};

export default function ChatWidget() {
  const [open, setOpen] = useState(false);

  const [messages, setMessages] = useState([
    WELCOME_MESSAGE,
  ]);

  const [input, setInput] = useState("");

  const [typing, setTyping] = useState(false);

  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, typing]);

  /* BOT LOGIC */

  const getBotReply = (message) => {
    const msg = message.toLowerCase();

    if (
      msg.includes("admission") ||
      msg.includes("apply")
    ) {
      return "🎓 Admissions are open for the 2025–26 session from Class 1 to 12.";
    }

    if (
      msg.includes("fee") ||
      msg.includes("fees")
    ) {
      return "💰 Fee details can be collected from the school office. Scholarships are also available for meritorious students.";
    }

    if (
      msg.includes("timing") ||
      msg.includes("time") ||
      msg.includes("school time")
    ) {
      return "🕘 School timing is Monday to Saturday from 8:00 AM to 4:00 PM.";
    }

    if (
      msg.includes("location") ||
      msg.includes("address") ||
      msg.includes("where")
    ) {
      return "📍 Our campus is located in Ramdaspur, Prayagraj, Uttar Pradesh.";
    }

    if (
      msg.includes("facility") ||
      msg.includes("facilities")
    ) {
      return "🏫 We provide smart classrooms, playgrounds, experienced faculty, and a peaceful learning environment.";
    }

    if (
      msg.includes("teacher") ||
      msg.includes("faculty")
    ) {
      return "🧑‍🏫 Our experienced faculty focuses on discipline, academic excellence, and overall student growth.";
    }

    if (
      msg.includes("contact") ||
      msg.includes("phone")
    ) {
      return "📞 You can contact the school office for admission and other inquiries during working hours.";
    }

    if (
      msg.includes("scholarship")
    ) {
      return "🏆 Scholarships and financial support are available for deserving students.";
    }

    if (
      msg.includes("subjects") ||
      msg.includes("stream")
    ) {
      return "📚 We offer Arts, Science, and Mathematics streams for higher classes.";
    }

    return "😊 Thank you for your message. Please contact the school office for detailed information.";
  };

  /* SEND MESSAGE */

  const sendMessage = () => {
    if (!input.trim()) return;

    const userMessage = input;

    setMessages((prev) => [
      ...prev,
      {
        from: "user",
        text: userMessage,
      },
    ]);

    setInput("");

    setTyping(true);

    setTimeout(() => {
      const reply =
        getBotReply(userMessage);

      setMessages((prev) => [
        ...prev,
        {
          from: "bot",
          text: reply,
        },
      ]);

      setTyping(false);
    }, 1000);
  };

  return (
    <>
      {/* CHAT WINDOW */}

      {open && (
        <div className="chat-box">

          {/* HEADER */}

          <div className="chat-header">

            <div className="avatar">
              🎓
            </div>

            <div className="info">
              <h4>
                Vidushi Assistant
              </h4>

              <span className="status">
                ● Online
              </span>
            </div>

            <button
              onClick={() =>
                setOpen(false)
              }
            >
              ✕
            </button>

          </div>

          {/* CHAT BODY */}

          <div className="chat-body">

            {messages.map((m, i) => (
              <div
                key={i}
                className={`msg ${m.from}`}
              >
                {m.text}
              </div>
            ))}

            {typing && (
              <div className="msg bot typing">
                Typing...
              </div>
            )}

            <div ref={bottomRef}></div>

          </div>

          {/* INPUT */}

          <div className="chat-input">

            <input
              type="text"
              value={input}
              placeholder="Ask something..."
              onChange={(e) =>
                setInput(e.target.value)
              }
              onKeyDown={(e) =>
                e.key === "Enter" &&
                sendMessage()
              }
            />

            <button onClick={sendMessage}>
              ➤
            </button>

          </div>
        </div>
      )}

      {/* FLOAT BUTTON */}

      <div className="chat-float">

        <button
          onClick={() =>
            setOpen(!open)
          }
        >
          {open ? "✕" : "💬"}
        </button>

      </div>
    </>
  );
}