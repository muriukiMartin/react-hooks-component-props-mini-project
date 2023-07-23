import React from "react";
import blogData from "../data/blog";
import Header from "./Header";
import About from "./About";

console.log(blogData);

function App() {
  const blogName = 'My First Blog';
  const aboutText = 'Welcome to the blog. I hope you find the information helpful'
  return (
    <div className="App">
      <Header blogName={blogName} />
      <About aboutText={aboutText} />
    </div>
  );
}

export default App;
