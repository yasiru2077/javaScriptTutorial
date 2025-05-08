import React, { useEffect } from "react";
import { useState } from "react";

function Useeffect() {
  const [list, setList] = useState([]);

  async function fetchData() {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts`
      );
      const data = await response.json();

      setList(data);
    } catch (error) {
      console.error("fetch error:", error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  console.log(list);

  return (
    <div>
      {list.map((l) => (
        <div key={l.id}>
          {/* <p>{l.id}</p> */}
          {/* <p>{l.title}</p> */}
        </div>
      ))}
    </div>
  );
}

export default Useeffect;
