const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  return (
    <div className="steps">
      <div className="numbers">
        <div className="active">1</div>
        <div>2</div>
        <div>3</div>
      </div>
      {/* {/message */}
      <p className="message">Hello</p>
      <div className="buttons">
        <button style={{ backgroundColor: "blue", color: "#fff" }}>
          Prevous
        </button>
        <button style={{ backgroundColor: "blue", color: "#fff" }}>
          Prevous
        </button>
      </div>
    </div>
  );
}
