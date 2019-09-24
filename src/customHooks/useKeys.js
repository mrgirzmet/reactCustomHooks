import { useRef, useState } from "react";

function useSequence(initialNext) {
  const nextRef = useRef(initialNext);
  return () => nextRef.current++;
}

export default function useKeys(initial) {
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
