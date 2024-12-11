# Interactive Portfolio - Development Phase

## How to Install and Run the Project

To set up the project locally and run it, follow these steps:

1. Clone the repository to your local machine:
   ```bash
   git clone <repository_url>
   ```

2. Navigate to the project directory:
   ```bash
   cd <project_directory>
   ```

3. Install the required dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm start
   ```

5. Open your browser and navigate to `http://localhost:3000` to view the project.

---

## Project Overview

This project is an **interactive and immersive portfolio**, designed to showcase professional work and projects through a visually engaging 3D interface. The current implementation serves as a **proof of concept (POC)**, focusing on the core background effects and interactions rather than the actual portfolio content.

### Current Features

- **Dynamic Starry Background**: A live, animated background featuring stars and galaxy effects, creating an immersive space environment.
- **Interactive Rotating Globe**:
  - A 3D Earth model with realistic textures that can be rotated and dragged using the mouse.
  - Zoom functionality, allowing users to zoom in and out on the globe.
- **Clickable Points of Interest**:
  - Specific markers on the globe (e.g., Paris, Toulouse, and Montreal) that can be clicked to display related information.
  - When a point is clicked, an information panel slides in to showcase project details.
- **Camera Transitions**:
  - Smooth animations when zooming into or out of points of interest.
  - The camera shifts to provide a side view with the Earth partially visible, enhancing the spatial experience.

### Limitations in the Current Version

- **Deselection of Points**: Once a point of interest is selected, it cannot yet be deselected manually.
- **Feature Restrictions**:
  - Rotation resumes only after closing the information panel.
  - Other planned features, such as advanced interactions or project filters, are not implemented yet.
- **Portfolio Content**: The content for the portfolio is placeholder text, and the current focus is on the interactive elements and visual effects.

---

## Development Process

The code has been developed iteratively with the support of **ChatGPT**, a conversational AI. The development process involved:

1. Detailed feedback on generated code, ensuring functionality aligned with the vision for the project.
2. Frequent adjustments and rewrites to refine features such as drag-and-drop, zooming, and animations.
3. Clear separation of responsibilities in the code, modularizing functionality like zoom, rotation, and camera animations.

### Collaborative Workflow

The implementation reflects a dynamic collaboration:
- Feedback loops were critical, with continuous requests for changes, feature additions, and corrections to improve the codebase.
- Many iterations involved in-depth explanations and clarifications to refine and tailor the AI-generated code to meet specific requirements.

---

## Future Plans

In the upcoming phases, the project will:
- Introduce actual portfolio content.
- Enhance interactivity by allowing deselection of markers and smooth transitions.
- Add advanced filters and animations for a richer user experience.
- Improve the modularity and scalability of the codebase.

This is a work in progress, and the current version focuses primarily on demonstrating the core interactive elements and visual concepts.
