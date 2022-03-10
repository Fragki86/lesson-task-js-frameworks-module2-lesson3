import { useState, useEffect} from "react";
import Spinner from "react-bootstrap/Spinner";
import Alert from "react-bootstrap/Alert";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { api } from "../constants/Api";
import GameItem from "./GameItem";

// Solution link

const key = "?key=54582cd735a340b89b17702eae51578b";

function GameList() {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect( function () {
    async function fetchGames() {
      try {
        const response = await fetch(api + key);

        if (response.ok) {
          const results = await response.json();
          console.log(results.results);
          setGames(results.results);
        } else {
          setError("Couldn't get results");
        }

      } catch (error) {
        setError(error.toString());
        
      } finally {
        setLoading(false);
      }
    }
    fetchGames();
  }, []);

  if (loading) {
    return <Spinner animation="grow" variant="info" className="loader" />;
  }

  if (error) {
    return <Alert variant="danger">An error occured: {error}</Alert>;
  }

  return (
    <Container>
      <Row>
        {games.map(function (game) {
          const { slug, name, genre, id, image, released} = game;
          return <GameItem key={slug} name={name} genre={genre} image={image} id={id} released={released} />
        })}
      </Row>
    </Container>
  )
}

export default GameList;