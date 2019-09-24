import React from "react";
import useKeys from "../customHooks/useKeys";
import Contact from "./Contact";

export default function ContactList() {
  const [keys, add, remove] = useKeys(3);
  return (
    <>
      {keys.map(key => (
        <Contact key={key} onRemove={() => remove(key)} />
      ))}
      <button onClick={add}>Add</button>
    </>
  );
}
