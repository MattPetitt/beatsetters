import Head from "next/head";
import Link from "next/link";
import {
  Container,
  Row,
  Card,
  Button,
  Navbar,
  Nav,
  Jumbotron,
} from "react-bootstrap";

export default function Home() {
  return (
    <div className="bg-dark pb-1" style={{ minHeight: "100vh" }}>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Link href="/" passHref>
            <Navbar.Brand>Beatsetters</Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Link href="#" passHref>
                <Nav.Link>Restoration</Nav.Link>
              </Link>
              <Link href="#" passHref>
                <Nav.Link>Repairs</Nav.Link>
              </Link>
              <Link href="#" passHref>
                <Nav.Link>Sales</Nav.Link>
              </Link>
              <Link href="#" passHref>
                <Nav.Link>Consultations</Nav.Link>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container className="md-container">
        <Head>
          <title>The Clock Guy</title>
          <link rel="icon" href="/favicon-32x32.png" />
        </Head>
        <Container>
          <Jumbotron className="text-light bg-dark text-center">
            <img
              style={{
                paddingBottom: "2rem",
                width: "100%",
                maxWidth: "300px",
              }}
              src="/theclockguy.png"
            />
            <h1 className="font-weight-bold">
              Don Gregory
              <br />
              <small className="text-muted">
                Horological Services for the DMV Area
              </small>
            </h1>
          </Jumbotron>
          <Container>
            <Row className="justify-content-md-between d-flex justify-content-center">
              <Card className="sml-card text-light bg-secondary">
                <Card.Img variant="top" src="/6.jpg" />
                <Card.Body>
                  <Card.Title>Restorations</Card.Title>
                  <Card.Text>
                    Horology is the study of the measurement of time. Clocks,
                    watches, clockwork, sundials, hourglasses, clepsydras,
                    timers, time recorders, marine chronometers, and atomic
                    clocks are all examples of instruments used to measure time.
                  </Card.Text>
                  <Button variant="primary" href="/#">
                    More &rarr;
                  </Button>
                </Card.Body>
              </Card>
              <Card className="sml-card text-light bg-secondary">
                <Card.Img variant="top" src="/3.jpg" />
                <Card.Body>
                  <Card.Title>Repairs</Card.Title>
                  <Card.Text>
                    Horology is the study of the measurement of time. Clocks,
                    watches, clockwork, sundials, hourglasses, clepsydras,
                    timers, time recorders, marine chronometers, and atomic
                    clocks are all examples of instruments used to measure time.
                  </Card.Text>
                  <Button variant="primary" href="/#">
                    More &rarr;
                  </Button>
                </Card.Body>
              </Card>
            </Row>
            <Row className="justify-content-md-between d-flex justify-content-center">
              <Card className="sml-card text-light bg-secondary">
                <Card.Img variant="top" src="/1.jpg" />
                <Card.Body>
                  <Card.Title>Sales</Card.Title>
                  <Card.Text>
                    Horology is the study of the measurement of time. Clocks,
                    watches, clockwork, sundials, hourglasses, clepsydras,
                    timers, time recorders, marine chronometers, and atomic
                    clocks are all examples of instruments used to measure time.
                  </Card.Text>
                  <Button variant="primary" href="/#">
                    More &rarr;
                  </Button>
                </Card.Body>
              </Card>
              <Card className="sml-card text-light bg-secondary">
                <Card.Img variant="top" src="/4.jpg" />
                <Card.Body>
                  <Card.Title>Consultations</Card.Title>
                  <Card.Text>
                    Horology is the study of the measurement of time. Clocks,
                    watches, clockwork, sundials, hourglasses, clepsydras,
                    timers, time recorders, marine chronometers, and atomic
                    clocks are all examples of instruments used to measure time.
                  </Card.Text>
                  <Button variant="primary" href="/#">
                    More &rarr;
                  </Button>
                </Card.Body>
              </Card>
            </Row>
          </Container>
          <Container>
            <Jumbotron className="text-light bg-dark text-center">
              <h2 className="font-weight-bold pb-2">Contact Me</h2>
              <p className="mb-1">757-328-6699</p>
              <p className="mb-1">
                <a href="#">myemail@something.com</a>
              </p>
              <p className="mb-1">Calvert County and St. Mary’s County, MD</p>
            </Jumbotron>
          </Container>
        </Container>
      </Container>
    </div>
  );
}
