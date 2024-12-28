import { Button, Card, Col, Container, Row } from "react-bootstrap";

const App = () => {
  const handleButtonClick = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div className="d-flex justify-content-center vh-100 p-3">
      <Container className="text-center">
        <h1>React Bootstrap Starter Template</h1>
        <p>This template gets you up and running with React and Bootstrap!</p>

        <Row className="justify-content-center">
          <Col sm={12} md={6}>
            <Card className="text-start">
              <Card.Body>
                <Card.Text>
                  React lets you build user interfaces out of individual pieces
                  called components. Create your own React components like
                  Thumbnail, LikeButton, and Video. Then combine them into
                  entire screens, pages, and apps.
                </Card.Text>
                <Button
                  variant="primary"
                  onClick={() => handleButtonClick("https://react.dev/")}
                >
                  Read the docs
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={12} md={6}>
            <Card className="text-start">
              <Card.Body>
                <Card.Text>
                  React-Bootstrap replaces the Bootstrap JavaScript. Each
                  component has been built from scratch as a true React
                  component, without unneeded dependencies like jQuery.
                </Card.Text>
                <Button
                  variant="primary"
                  onClick={() =>
                    handleButtonClick("https://react-bootstrap.github.io/")
                  }
                >
                  Read the docs
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default App;
