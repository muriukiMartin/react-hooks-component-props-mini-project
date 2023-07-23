import React from "react";
import blogData from "../data/blog";
import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList";

console.log(blogData);

function App() {
  const blogName = 'My First Blog';
  const aboutText = 'Welcome to the blog. I hope you find the information helpful';
  return (
    <div className="App">
      <Header blogName={blogName} />
      <About aboutText={aboutText} />
      <h2>{blogData.name}</h2>
      <img src={blogData.image}></img>
      <h3>{blogData.about}</h3>
      <ArticleList posts={blogData.posts}/>
    </div>
  );
}

export default App;
