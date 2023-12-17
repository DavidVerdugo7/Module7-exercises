//this component will be the context provider.
//1. import context emoji.
import React, { createContext, useContext, useState } from "react";

// 2. Create the context
const EmojiContext = createContext();
export const useEmojiContext = () => useContext(EmojiContext);

//3 create a state, this was in original Emoji.jsx :
export function EmojiProvider({ children }) {
  const emojis = ["😊", "😹", "🇯🇲", "🐶", "🍿"];
  const [emojiIndex, setEmojiIndex] = useState(0);

  // Incrementa el índice para cambiar al siguiente emoji
  const changeEmoji = () => {
    const nextEmoji = (emojiIndex + 1) % emojis.length;
    setEmojiIndex(nextEmoji);
  };
  //value es un objeto que contiene dos propiedades:
  const value = {
    currentEmoji: emojis[emojiIndex],
    changeEmoji,
  };

  return (
    <EmojiContext.Provider value={value}>{children}</EmojiContext.Provider>
  );
}
