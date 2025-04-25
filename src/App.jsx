import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createRoot } from "react-dom/client";


function App() {
  const root = createRoot(document.getElementById("root"))
  const reactElement = <h>Hello from JSX W BLA create element</h>
  return (
    
root.render(
  reactElement
)
  )
}

export default App
