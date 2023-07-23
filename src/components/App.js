import React from "react";
import blogData from "../data/blog";
import Header from "./Header";

console.log(blogData);

function App() {
  const blogName = 'My First Blog';
  return (
    <div className="App">
      <Header blogName={blogName} />
    </div>
  );
}

export default App;
