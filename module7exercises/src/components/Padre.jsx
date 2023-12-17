import { Children } from "react";
import Hijo from "./Hijo";

export default function Padre() {
  return (
    <div style={{ background: "green" }}>
      <h1>thi is padre</h1>
      <Hijo text={"hola mundo"}>{"this is children escrito desde padre"}</Hijo>
    </div>
  );
}
