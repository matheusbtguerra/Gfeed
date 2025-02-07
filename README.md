
---

# Gfeed
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Matheus%20Borges%20de%20Toledo%20Guerra-blue?logo=linkedin&logoColor=white)](https://www.linkedin.com/in/matheus-borges-de-toledo-guerra-2482522b3/)

## Description


This project was created to practice and learn React. It allows users to comment on posts, delete comments, and applaud comments. The focus was on learning fundamental React concepts, such as state management, event handling, and interactivity.

## Features

- **Add Comments**: You can add a comment to any post.
- **Delete Comments**: You can delete a comment you wrote.
- **Applaud Comments**: You can give a "like" (applaud) to comments, increasing the applause count.

## Technologies Used

- **React**: The main library for building the interface.
- **TypeScript**: For type safety and better development experience.
- **State Management**: Using `useState` to manage the state of comments and applause.
- **Date-fns**: For formatting and manipulating dates, such as showing the relative date of post publication.

## Project Structure

### Main Components:

- **App**: The main component that loads and displays the posts.
- **Post**: The component representing each post, including the title, author, publication date, and content (comments).
- **Comment**: The component responsible for displaying and interacting with post comments (including applauding and deleting).

### Interaction Flow:

1. Posts are loaded on the screen with their respective authors and content.
2. Users can add new comments, which are stored in the state of the `Post` component.
3. Comments can be applauded, increasing the applause (like) count.
4. Comments can be deleted.
5. The publication date of each post is formatted and presented relatively (e.g., "about 1 hour ago").

## How to Run the Project

1. Clone the repository:

   ```bash
   git clone https://github.com/matheusbtguerra/Gfeed.git
   cd Gfeed
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Run the project:

   ```bash
   npm run dev
   ```

4. Access the application in your browser at: `http://localhost:5173` (or the port configured for the application).

## Screenshots
![Gfeed](https://github.com/matheusbtguerra/Gfeed/blob/main/src/assets/screenshots/demo.png)

![Post and comments](https://github.com/matheusbtguerra/Gfeed/blob/main/src/assets/screenshots/postsAndComments.png)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

