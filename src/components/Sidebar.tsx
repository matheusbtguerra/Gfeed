import { Avatar } from "./Avatar";
import styles from "./Sidebar.module.css";
import { PencilLine } from "phosphor-react";

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1526925539332-aa3b66e35444?q=60&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />

      <div className={styles.profile}>
        <Avatar src="https://avatars.githubusercontent.com/u/146946503?v=4" />

        <strong>Matheus Guerra</strong>
        <span>Fullstack Developer</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20} />
          Edit Your Profile
        </a>
      </footer>
    </aside>
  );
}
