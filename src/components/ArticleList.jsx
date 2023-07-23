export default function ArticleList({ posts }) {
    return(
        <main>
           {posts.map((post, index) => (
        <Article key={index} {...post} />
      ))}

        </main>
    )
}