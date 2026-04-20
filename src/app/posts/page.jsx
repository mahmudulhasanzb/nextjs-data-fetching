import React from 'react'

// const getPosts = async () => {
//   const res = await fetch('https://jsonplaceholder.typicode.com/posts')
//   return res.json()
  
// }

// const getPosts = async () => {
//   try {
//     const res = await fetch('https://jsonplaceholder.typicode.com/posts');
//   return res.json()
//   }
//   catch (err) {
//     throw new Error("Failed to fetch posts")
//   }
// }

const getPosts = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');

  if (!res.ok) {
    throw new Error("Failed to fetch posts")
  }

  return res.json();
};


const PostsPage = async () => {

  // const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  // const posts = await res.json()

  const posts = await getPosts();
  
  return (
    <div>PostsPage comming soon...
      <h2>total posts: {posts.length}</h2>
    </div>
  )
}

export default PostsPage