import { useRef, useState } from "react";

export default function useContactModel({ defaultValue = {} } = {}) {
  const [name, setName] = useState(defaultValue.name || "");
  const [email, setEmail] = useState(defaultValue.email || "");

  return {
    error: name === "" ? "Please enter a name" : undefined,
    inputProps: {
      name: {
        value: name,
        onChange: e => setName(e.target.value)
      },
      email: {
        value: email,
        onChange: e => setEmail(e.target.value)
      }
    }
  };
}

function useSequence(initialNext) {
  const nextRef = useRef(initialNext);
  return () => nextRef.current++;
}

export function useKeys(initial) {
  const getKey = useSequence(initial + 1);
  const [keys, setKeys] = useState(
    Array(initial)
      .fill(0)
      .map((x, i) => i + 1)
  );
  const add = () => setKeys(keys.concat(getKey()));
  const remove = key => {
    const newKeys = keys.slice(0);
    const index = newKeys.indexOf(key);
    if (index !== -1) {
      newKeys.splice(index, 1);
    }
    setKeys(newKeys);
  };
  return [keys, add, remove];
}
