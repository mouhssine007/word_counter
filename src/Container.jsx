import { useState } from "react";
import Stats from "./Stats"
import TextArea from "./TextArea";
import { FACEBOOK_MAX_CARACTERES, INSTAGRAM_MAX_CARACTERS } from "./constants";

const Container = () => {
  const [text, setText] =  useState("");

  const stats = {
    numberOfCharacters: text.length,
    NumberOfWord:text.split(/\s/).filter((word)=> word !=="").length,
    InstagramCharacterLeft: INSTAGRAM_MAX_CARACTERS - text.length,
    FacebookCharacterLeft:FACEBOOK_MAX_CARACTERES - text.length

  }


  return (
    <main className="container">
      <TextArea text = {text}  setText = {setText}/>
      <Stats   stats= {stats} />
    </main>
  )
}

export default Container