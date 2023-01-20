const { createRoot } = require("react-dom/cjs/react-dom.production.min")

const App = () => {
  return (
    <div>Hello World</div>
  )
}

const root =createRoot(document.getElementById('root'));

root.render(<App/>);