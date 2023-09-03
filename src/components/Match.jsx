import { useEffect, useState } from "react";
import getMatchData from "../api/api";
import TeamDetails from "./TeamDetails";
import TeamNav from "./TeamNav";
import MatchStatsContainer from "./MatchStatsContainer";

function Match() {
  const [matchData, setMatchData] = useState({});
  const [title, setTitle] = useState("General");
  const [isTrue, setIsTrue] = useState(true);
  const [isGeneral, setIsGeneral] = useState(false);

  console.log(matchData);

  useEffect(() => {
    getMatchData()
      .then((response) => response.json())
      .then((body) => setMatchData(body));
  }, []);

  const onClickHandler = (e) => {
    let teamNavTitle = e.target.getAttribute("value");
    setTitle(teamNavTitle);
    if (teamNavTitle === "General") {
      setIsGeneral(true);
    } else {
      setIsGeneral(false);
    }
  };

  return (
    <section className="w-3/5 mx-auto">
      <TeamDetails matchData={matchData} />
      <section className="grid grid-cols-5 text-center font-semibold">
        <TeamNav onClickHandler={onClickHandler} teamNav="Overview" />
        <TeamNav
          onClickHandler={onClickHandler}
          teamNav="General"
          isTrue={isTrue}
        />
        <TeamNav onClickHandler={onClickHandler} teamNav="NEW" />
        <TeamNav onClickHandler={onClickHandler} teamNav="LIV" />
        <TeamNav onClickHandler={onClickHandler} teamNav="Player" />
      </section>
      <section className="h-52 bg-[#ebecf5] text-center pt-5 font-semibold">
        <MatchStatsContainer
          title={title}
          matchData={matchData}
          isGeneral={isGeneral}
        />
      </section>
    </section>
  );
}

export default Match;
