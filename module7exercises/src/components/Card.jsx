export default function Card({ children }) {
  const cardStyle = {
    width: "500px",
    height: "500px",
    border: "1.5px solid lightgrey",
    borderRadius: "2px",
    padding: "4px",
    margin: "4px",
  };

  return (
    <div style={cardStyle}>
      <h1>thi is Card</h1>
      <div>{children}</div>
    </div>
  );
}
