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
          <title>Beatsetters</title>
          <link rel="icon" href="/favicon-32x32.png" />
        </Head>
        <Container>
          <Jumbotron className="text-light bg-dark text-center">
            <h1 className="font-weight-bold">
              Beatsetters
              <br />
              <small className="text-muted">
                Movements in time are our business.
              </small>
            </h1>
          </Jumbotron>
          <Container>
            <Row className="justify-content-md-between d-flex justify-content-center">
              <Card className="sml-card text-light bg-secondary">
                <Card.Img
                  variant="top"
                  src="https://via.placeholder.com/300x200"
                />
                <Card.Body>
                  <Card.Title>Restorations</Card.Title>
                  <Card.Text>
                    Find in-depth information about Next.js features and API.
                  </Card.Text>
                  <Button variant="primary" href="https://nextjs.org/docs">
                    More &rarr;
                  </Button>
                </Card.Body>
              </Card>
              <Card className="sml-card text-light bg-secondary">
                <Card.Img
                  variant="top"
                  src="https://via.placeholder.com/300x200"
                />
                <Card.Body>
                  <Card.Title>Repairs</Card.Title>
                  <Card.Text>
                    Learn about Next.js in an interactive course with quizzes!
                  </Card.Text>
                  <Button variant="primary" href="https://nextjs.org/learn">
                    More &rarr;
                  </Button>
                </Card.Body>
              </Card>
            </Row>
            <Row className="justify-content-md-between d-flex justify-content-center">
              <Card className="sml-card text-light bg-secondary">
                <Card.Img
                  variant="top"
                  src="https://via.placeholder.com/300x200"
                />
                <Card.Body>
                  <Card.Title>Sales</Card.Title>
                  <Card.Text>
                    Discover and deploy boilerplate example Next.js projects.
                  </Card.Text>
                  <Button
                    variant="primary"
                    href="https://github.com/vercel/next.js/tree/master/examples"
                  >
                    More &rarr;
                  </Button>
                </Card.Body>
              </Card>
              <Card className="sml-card text-light bg-secondary">
                <Card.Img
                  variant="top"
                  src="https://via.placeholder.com/300x200"
                />
                <Card.Body>
                  <Card.Title>Consultations</Card.Title>
                  <Card.Text>
                    Instantly deploy your Next.js site to a public URL with
                    Vercel.
                  </Card.Text>
                  <Button
                    variant="primary"
                    href="https://vercel.com/import?filter=next.js&utm_source=github&utm_medium=example&utm_campaign=next-example"
                  >
                    More &rarr;
                  </Button>
                </Card.Body>
              </Card>
            </Row>
          </Container>
          <Container>
            <Jumbotron className="text-light bg-dark text-center">
              <h2 className="font-weight-bold pb-3">Contact Me</h2>
              <p>Don Gregory</p>
              <p>757-328-6699</p>
              <p>
                <a href="#">myemail@something.com</a>
              </p>
              <p>Calvert County and St. Mary’s County, MD</p>
            </Jumbotron>
          </Container>
        </Container>
      </Container>
    </div>
  );
}
