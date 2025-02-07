import { Header } from "./components/Header.tsx";
import { Post, PostType } from "./components/Post.tsx";
import { Sidebar } from "./components/Sidebar.tsx";

import "./global.css";

import styles from "./App.module.css";

const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/matheusbtguerra.png",
      name: "Matheus Guerra",
      role: "Fullstack Developer",
    },
    content: [
      { type: "paragraph", content: "Hey everyone 👋" },
      {
        type: "paragraph",
        content:
          "Programming is an incredible journey of solving problems and creating innovative solutions. Every line of code brings us closer to transforming ideas into reality. Keep learning and evolving! 💡",
      },
      { type: "link", content: "https://www.freecodecamp.org/" },
      { type: "link", content: "https://roadmap.sh/" },
    ],
    publishedAt: new Date("2025-02-06 20:00:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl:
        "https://cdn.pixabay.com/photo/2021/08/04/13/06/software-developer-6521720_960_720.jpg",
      name: "John Doe",
      role: "Front-end Developer",
    },
    content: [
      { type: "paragraph", content: "Hey everyone 👋" },
      {
        type: "paragraph",
        content:
          "Writing clean and efficient code is essential for building scalable applications. Always focus on readability, maintainability, and performance optimization. Happy coding! 🚀",
      },
      { type: "link", content: "https://refactoring.guru/" },
      { type: "link", content: "https://developer.mozilla.org/en-US/" },
    ],
    publishedAt: new Date("2025-02-04 20:00:00"),
  },
];

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          {posts.map((post) => {
            return (
              <Post
                key={post.id}
                post={post}
              />
            );
          })}
        </main>
      </div>
    </div>
  );
}