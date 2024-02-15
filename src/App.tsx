import { Outlet } from 'react-router-dom'
import { Button, ButtonGroup } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import './App.css'

function App() {
const navigate = useNavigate()
  return (
    <>
      <h1>Dillon Goicoechea Portfolio</h1>
      <ButtonGroup>
        <Button onClick={()=>navigate("/code")}>Code Snippets</Button>
        <Button onClick={()=>navigate("/experience")}>Work Experience</Button>
      </ButtonGroup>
      <div>
        <Outlet/>
      </div>
      <div>
      <h1>Contact Information:</h1>
      <h2>Dillon Goicoechea (He/Him)</h2>
      <h2>goicoecheadillon@gmail.com, goicoechead@spu.edu</h2>
      <h2>Feel free to email me anytime!</h2>
      <a href="https://www.linkedin.com/in/dillon-goicoechea/">Linkedin </a>
      <a href="/src/assets/Dillon_Goicoechea_Resume.pdf" download> Resume</a>
      <a href="https://github.com/Dillon-Goicoechea">  Github </a>
      </div> 
    </>
  )
}

export default App
