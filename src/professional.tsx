import Accordion  from 'react-bootstrap/Accordion'
import ListGroup from 'react-bootstrap/ListGroup'
import Image from 'react-bootstrap/Image'
import edo from './assets/edo.jpg'
import axolotl from './assets/logo v4.png'
// use accordian to add experience stuff


function ProfWork(){
    return (
        <>
     <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header style={{borderStyle: 'solid'}}>
            Aeronautical Axolotls - Scrum Master & Software Engineer  (09/2023-06/2024)
            <Image src={axolotl} style={{marginLeft: 'auto'}} rounded width="32" height="32"/>
        </Accordion.Header>
        <Accordion.Body>
        <ListGroup as="ul">
      <ListGroup.Item as="li" active>
      Manage team meeting schedule and documentation
      </ListGroup.Item>
      <ListGroup.Item as="li">Lead team meetings</ListGroup.Item>
      <ListGroup.Item as="li" disabled>
      Cultivate sprint goals and planning
      </ListGroup.Item>
      <ListGroup.Item as="li">Manage external stakeholder deliverables</ListGroup.Item>
      <ListGroup.Item as="li">Implement UI, State Manager, and bug fixes in Rust for product JuiceBox</ListGroup.Item>
    </ListGroup>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1" >
        <Accordion.Header style={{borderStyle: 'solid'}}>
            Edo Energy - Software Engineer Intern (06/2023-09/023)
            <Image src={edo} style={{marginLeft: 'auto'}} rounded width="32" height="32"/>
            </Accordion.Header>
        <Accordion.Body>
        <ListGroup as="ul">
      <ListGroup.Item as="li" active>
      Developed internal use utility bill quality analysis tool which increased Edo Operations team efficiency
      </ListGroup.Item>
      <ListGroup.Item as="li">• Implemented API improvements to Node.js microservice to support utility bill quality analysis tool using Node.js, MariaDB, and SQL</ListGroup.Item>
      <ListGroup.Item as="li" disabled>
      Created React.js front end using Vite to implement UI of utility bill quality analysis tool using JavaScript
      </ListGroup.Item>
      <ListGroup.Item as="li">Implemented unit and integration testing for API improvements</ListGroup.Item>
      <ListGroup.Item as="li">Bug fixes in C# .NET API, React.js UI, and Node.js APIs</ListGroup.Item>
    </ListGroup>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    
        </>

      );
}

export default ProfWork