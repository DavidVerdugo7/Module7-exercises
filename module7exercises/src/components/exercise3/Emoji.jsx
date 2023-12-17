import { useEmojiContext } from "../exercise3/ContextEmoji";

function EmojiChanger() {
  const { currentEmoji, changeEmoji } = useEmojiContext();

  return (
    <div className="MoodChanger componentBox">
      <p>Current Emoji: {currentEmoji}</p>
      <button onClick={() => changeEmoji()}>Change Emoji</button>
    </div>
  );
}

export default EmojiChanger;

// function EmojiChanger() {
//   const emojis = ["😊", "😹", "🇯🇲", "🐶", "🍿"];
//   const [emojiIndex, setEmojiIndex] = useState("0");

//   const changeEmoji = () => {
//     // Incrementa el índice para cambiar al siguiente emoji
//     const nextEmoji = (emojiIndex + 1) % emojis.length;
//     setEmojiIndex(nextEmoji);
//   };

//   return (
//     <div className="MoodChanger componentBox">
//       {" "}
//       <p>Current Emoji: {emojis[emojiIndex]}</p>
//       <button onClick={() => changeEmoji()}> EmojiChanger </button>
//     </div>
//   );
// }
// export default EmojiChanger;
