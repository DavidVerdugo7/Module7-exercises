export default function Hijo(props) {
  return (
    <div style={{ background: "lime" }}>
      <h1>thi is hijo</h1>
      <p>this is the text passed from padre {props.text}</p>
      <div>{props.children}</div>
    </div>
  );
}
