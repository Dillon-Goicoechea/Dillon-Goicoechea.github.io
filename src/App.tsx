import { Link, Outlet } from 'react-router-dom'
import { Button, ButtonGroup, Image } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import pdf from './assets/Dillon_Resume.pdf'
import headshot from './assets/headshot.jpg'
import './App.css'
// add image with bootstrap
function App() {
const navigate = useNavigate()
  return (
    <>
    <div style={{display: "flex"}} data-bs-theme="dark">
      <Image src={headshot} rounded width="128" height="128"/>
      <h1>Dillon Goicoechea Portfolio</h1>
    </div>
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
      <Link to="route" onClick={(event) => { event.preventDefault(); window.open(pdf); }}>Resume</Link>
      <a href="https://github.com/Dillon-Goicoechea">  Github </a>
      </div> 
    </>
  )
}

export default App
