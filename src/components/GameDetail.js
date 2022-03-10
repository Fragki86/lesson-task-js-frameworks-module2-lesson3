import { useState, useEffect} from "react";
import { useParams} from "react-router-dom";
import { api } from "../constants/Api";

function GameDetail() {
  const [game, setGame] = useState(null);
  const [loading, setLoading] = useState(true);
  
  // const key = "?key=54582cd735a340b89b17702eae51578b";
  // const cors_fix = "https://noroffcors.herokuapp.com/";

  const {slug} = useParams();


  const url = api + "/" + slug;

  console.log(useParams())
  console.log(url)

  useEffect( function () {
    async function callItem() {

      try {
        const response = await fetch(url);
        console.log(response);
        if (response.ok) {
          const results = response.json();
          console.log(results);
          setGame(results);
        }


      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    callItem();
  }, [url]);

  return (
    <>
    {game.name}
    </>
    
  )
}

export default GameDetail;