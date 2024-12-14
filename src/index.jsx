import ReactDOM from "react-dom/client"; //For rendering React components.

import App from "./App.jsx";
import "./index.css";

// ReactDOM.createRoot to create a root for the React application.
// Renders the App component inside the HTML element with the id root.

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
