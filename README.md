# Hello, World!

## Project Overview

"Hello, World!" is a Single Page Application (SPA) created using React. The primary objective of this project is to showcase posts and information about the author. The application allows users to navigate through various pages and view articles.

## Dependencies

The project relies on the following key dependencies:

- **react-markdown:** Used to render Markdown content in the application.
- **react-router-dom:** Enables navigation and routing within the SPA.

## Features

### Routing with React-Router

The project utilizes React-Router for efficient navigation. Path configurations have been established, making it easy to reuse routes across different pages.

### Custom Navigation

- **useNavigate():** Employed in the "404" page to provide a custom navigation experience when users click the back button.

### Article Navigation

- **Link Hook:** Used to direct users from a clicked article to the corresponding article page.

### Article Data Management

- **JSON Data:** Articles are stored in a JSON file, ensuring organized and easily modifiable content.

### Location-Based Navigation

- **useLocation():** Integrated with the Link hook in the site menu for dynamic navigation based on the current location.

### Dynamic Article Pages

- **useParams():** Implemented to dynamically direct users to the page of the selected article.

### Responsiveness

The application is designed to be responsive, ensuring a seamless user experience across various devices and screen sizes.