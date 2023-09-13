import Post from "./Post";

const posts = [
  {
    id: "123",
    username: "amirhahaha",
    userImg:
      "https://avatars.githubusercontent.com/u/84899704?s=400&u=b121614d90328f339e9fc62438230686007c7eb1&v=4",
    img: "https://avatars.githubusercontent.com/u/84899704?s=400&u=b121614d90328f339e9fc62438230686007c7eb1&v=4",
    caption:
      "Subscribe an follow my instagram account for more programming shit",
  },
  {
    id: "124",
    username: "hosseinhahaha",
    userImg:
      "https://avatars.githubusercontent.com/u/84899704?s=400&u=b121614d90328f339e9fc62438230686007c7eb1&v=4",
    img: "https://avatars.githubusercontent.com/u/84899704?s=400&u=b121614d90328f339e9fc62438230686007c7eb1&v=4",
    caption:
      "Subscribe an follow my instagram account for more programming shit",
  },
];

function Posts() {
  return (
    <div>
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          username={post.username}
          userImg={post.userImg}
          img={post.img}
          caption={post.caption}
        />
      ))}
    </div>
  );
}

export default Posts;
