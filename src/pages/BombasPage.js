import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from "react-router-dom";

const BombasPage = (props) => {
  return (
    <div>
      <main className="holder productos">
        <div className="contenedor-productos">
          <h2 className="titulo-produc">Productos</h2>
          <nav className="nav-productos">
            <ul>
              <li><NavLink to="/productos" className={({ isActive }) => isActive ? "activo" : undefined}>Riego</NavLink></li>
              <li><NavLink to="/pileta" className={({ isActive }) => isActive ? "activo" : undefined}>Pileta</NavLink></li>
              <li><NavLink to="/bombas" className={({ isActive }) => isActive ? "activo" : undefined}>Bombas</NavLink></li>
              <li><NavLink to="/ablandadores" className={({ isActive }) => isActive ? "activo" : undefined}>Ablandadores</NavLink></li>
              <li><NavLink to="/jardineria" className={({ isActive }) => isActive ? "activo" : undefined}>Jardineria</NavLink></li>
            </ul>
          </nav>
        </div>

        <div className="div-pileta">
          <h2>Bombas disponibles</h2>
          <div className='grupo-cartas'>
            <CardGroup >
              <Card>
                <Card.Img variant="top" src="Imagenes/bombas elektrim/Bomba Autocenate Elektrim Kilme.jpg" alt="Bomba Autocebanate Elektrim Kilme" />
                <Card.Body>
                  <Card.Title className="card-title">Bomba Autocebanate Elektrim Kilme</Card.Title>
                </Card.Body>
              </Card>
              <Card>
                <Card.Img variant="top" src="Imagenes/bombas elektrim/Bomba Autocenate Elektrim Puelche-.jpg" alt="Bomba Autocebanate Elektrim Puelche" />
                <Card.Body>
                  <Card.Title>Bomba Autocebanate Elektrim Puelche</Card.Title>
                </Card.Body>
              </Card>
            </CardGroup>
            <br />

            <CardGroup>
              <Card>
                <Card.Img variant="top" src="Imagenes/bombas elektrim/Bomba centr??fuga Elektrim l??nea LE.png" alt="Bomba centr??fuga Elektrim l??nea LE" />
                <Card.Body>
                  <Card.Title>Bomba centr??fuga Elektrim l??nea LE</Card.Title>
                </Card.Body>
              </Card>
              <Card>
                <Card.Img variant="top" src="Imagenes/bombas elektrim/Bomba de flujo Elektrim E-FLOW.png" alt="Bomba de flujo Elektrim E-FLOW" />
                <Card.Body>
                  <Card.Title>Bomba de flujo Elektrim E-FLOW</Card.Title>
                </Card.Body>
              </Card>
            </CardGroup>
            <br />
            <CardGroup>
              <Card>
                <Card.Img variant="top" src="Imagenes/bombas elektrim/Bomba elevadora inteligente Elektrim_E-SMART.png" alt="Bomba elevadora inteligente Elektrim_E-SMART" />
                <Card.Body>
                  <Card.Title>Bomba elevadora inteligente Elektrim_E-SMART</Card.Title>
                </Card.Body>
              </Card>
              <Card>
                <Card.Img variant="top" src="Imagenes/bombas elektrim/Bomba presurizadora Elektrim E-PRESS.png" alt="Bomba presurizadora Elektrim E-PRESS" />
                <Card.Body>
                  <Card.Title>Bomba presurizadora Elektrim E-PRESS</Card.Title>
                </Card.Body>
              </Card>
            </CardGroup>
            <br />
            <CardGroup>
              <Card>
                <Card.Img variant="top" src="Imagenes/bombas elektrim/Bomba Centr??fuga ECM-100.jpg" alt="Bomba Centr??fuga ECM-100.jpg" />
                <Card.Body>
                  <Card.Title>Bomba Centr??fuga ECM-100</Card.Title>
                </Card.Body>
              </Card>
              <Card>
                <Card.Img variant="top" src="Imagenes/bombas elektrim/Bomba Vulcano Autodrenante.jpg" alt="Bomba Vulcano Autodrenante" />
                <Card.Body>
                  <Card.Title>Bomba Vulcano Autodrenante</Card.Title>
                </Card.Body>
              </Card>
            </CardGroup>
            <br />
            <CardGroup>
              <Card>
                <Card.Img variant="top" src="Imagenes/bombas elektrim/Bomba Vulcano Autocebante BAC.jpg" alt="Bomba Vulcano Autocebante BAC" />
                <Card.Body>
                  <Card.Title>Bomba Vulcano Autocebante BAC</Card.Title>
                </Card.Body>
              </Card>
              <Card>
                <Card.Img variant="top" src="Imagenes/bombas elektrim/Bomba Vulcano Autocebante BAE.jpg" alt="Bomba Vulcano Autocebante BAE" />
                <Card.Body>
                  <Card.Title>Bomba Vulcano Autocebante BAE</Card.Title>
                </Card.Body>
              </Card>
            </CardGroup>
            <br />
            <CardGroup >
              <Card>
                <Card.Img variant="top" src="Imagenes/bombas elektrim/Bombas de calor Vulcano.jpg" alt="Bombas de calor Vulcano" />
                <Card.Body>
                  <Card.Title className="card-title">Bombas de calor Vulcano</Card.Title>
                </Card.Body>
              </Card>
              <Card>
                <Card.Img variant="top" src="Imagenes/bombas elektrim/Ionizador Vulcano (ion-100).jpg" alt="Ionizador Vulcano (ion-100)" />
                <Card.Body>
                  <Card.Title>Ionizador Vulcano (ion-100)</Card.Title>
                </Card.Body>
              </Card>
            </CardGroup>
            <br />
            <CardGroup>
              <Card>
                <Card.Img variant="top" src="Imagenes/bombas elektrim/Bomba Vulcano Autocebante BAP.jpg" alt="Bomba Vulcano Autocebante BAP" />
                <Card.Body>
                  <Card.Title>Bomba Vulcano Autocebante BAP</Card.Title>
                </Card.Body>
              </Card>
              <Card>
                <Card.Img variant="top" src="Imagenes/bombas elektrim/Bomba Vulcano Autocebante BAT.jpg" alt="Bomba Vulcano Autocebante BAT" />
                <Card.Body>
                  <Card.Title>Bomba Vulcano Autocebante BAT</Card.Title>
                </Card.Body>
              </Card>
            </CardGroup>
            <br/>
            <CardGroup>
              <Card>
                <Card.Img variant="top" src="Imagenes/bombas elektrim/BOMBA CENTR+??FUGA PEDROLLO L+??NEA CP.jpg" alt="BOMBA CENTR+??FUGA PEDROLLO L+??NEA CP" />
                <Card.Body>
                  <Card.Title>BOMBA CENTR??FUGA L??NEA CP</Card.Title>
                </Card.Body>
              </Card>
              <Card>
                <Card.Img variant="top" src="Imagenes/bombas elektrim/BOMBA DE DESAGOTE MOTORARG L+??NEA SAP.jpg" alt="BOMBA DE DESAGOTE MOTORARG L+??NEA SAP" />
                <Card.Body>
                  <Card.Title>BOMBA DE DESAGOTE MOTORARG L??NEA SAP</Card.Title>
                </Card.Body>
              </Card>
            </CardGroup>
            <br/>
            <CardGroup>
              <Card>
                <Card.Img variant="top" src="Imagenes/bombas elektrim/BOMBA PERIF+??RICA CON HIDRONEUM+??TICO.jpg" alt="BOMBA MULTIETAPA MOTORARG" />
                <Card.Body>
                  <Card.Title>BOMBA PERIF??RICA CON HIDRONEUM??UTICO</Card.Title>
                </Card.Body>
              </Card>
              <Card>
                <Card.Img variant="top" src="Imagenes/bombas elektrim/BOMBA MULTIETAPA MOTORARG.jpg" alt="BOMBA MULTIETAPA MOTORARG" />
                <Card.Body>
                  <Card.Title>BOMBA MULTIETAPA MOTORARG</Card.Title>
                </Card.Body>
              </Card>
            </CardGroup>
            <br/>
            <CardGroup>
              <Card>
                <Card.Img variant="top" src="Imagenes/bombas elektrim/BOMBA SUMERGIBLE VASSER.jpg" alt="BOMBA SUMERGIBLE VASSER" />
                <Card.Body>
                  <Card.Title>BOMBA SUMERGIBLE VASSER</Card.Title>
                </Card.Body>
              </Card>
              <Card>
                <Card.Img variant="top" src="Imagenes/bombas elektrim/BOMBAS CLOACALES MOTORARG L+??NEA DRX.jpg" alt="BOMBAS CLOACALES MOTORARG L+??NEA DRX" />
                <Card.Body>
                  <Card.Title>BOMBAS CLOACALES MOTORARG L??NEA DRX</Card.Title>
                </Card.Body>
              </Card>
            </CardGroup>
            <br/>
            <CardGroup>
              <Card>
                <Card.Img variant="top" src="Imagenes/bombas elektrim/BOMBA PERIF+??RICA PEDROLLO L+??NEA PK.jpg" alt="BOMBA PERIF??RICA PEDROLLO L??NEA PK" />
                <Card.Body>
                  <Card.Title>BOMBA PERIF??RICA PEDROLLO L??NEA PK</Card.Title>
                </Card.Body>
              </Card>
            </CardGroup>
            <br/>
          </div>
        </div>
      </main>

    </div>
  );
}
export default BombasPage;