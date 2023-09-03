import { useEffect, useState } from "react";
import getMatchData from "../api/api";
import TeamDetails from "./TeamDetails";

function Match() {
  const [matchData, setMatchData] = useState({});
  console.log(matchData);

  useEffect(() => {
    getMatchData()
      .then((response) => response.json())
      .then((body) => setMatchData(body));
  }, []);
  return (
    // <div>Match</div>
    <section className="w-3/5 mx-auto">
      <TeamDetails matchData={matchData} />
    </section>
  );
}

export default Match;
