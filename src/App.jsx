import { createRoot } from "react-dom";

const App = () => {
  console.log('hi')
  return <div>Hello World</div>;
};

const root = createRoot(document.getElementById("root"));

root.render(<App />);
