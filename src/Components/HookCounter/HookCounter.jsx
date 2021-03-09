import React, { useState } from 'react';

export default function HookCounter() {
  const [count, setCount] = useState(-1);
  //   count[name, setName] = useState('');
  return (
    <div>
      <p>
        counter:
        {count}
      </p>
      <button
        type="button"
        onClick={() => setCount(count + 2)}
      >
        Increment Counter
      </button>
    </div>
  );
}
