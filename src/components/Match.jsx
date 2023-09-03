import { useEffect, useState } from "react";
import getMatchData from "../api/api";
import TeamDetails from "./TeamDetails";
import TeamNav from "./TeamNav";

function Match() {
  const [matchData, setMatchData] = useState({});
  const [title, setTitle] = useState("Overview");
  const [isTrue, setIsTrue] = useState(true);
  let bgColor = "bg-black";
  let previousBgColor = "bg-red-500";
  console.log(matchData);

  useEffect(() => {
    getMatchData()
      .then((response) => response.json())
      .then((body) => setMatchData(body));
  }, []);
  const onClickHandler = (e) => {
    setTitle(e.target.getAttribute("value"));
  };

  return (
    <section className="w-3/5 mx-auto">
      <TeamDetails matchData={matchData} />
      <section className="grid grid-cols-5 text-center font-semibold">
        <TeamNav
          onClickHandler={onClickHandler}
          teamNav="Overview"
          isTrue={isTrue}
        />
        <TeamNav
          // onMouseHandler={() => {
          //   setIsTrue(false);
          // }}
          onClickHandler={onClickHandler}
          teamNav="General"
          title={title}
        />
        <TeamNav onClickHandler={onClickHandler} teamNav="NEW" />
        <TeamNav onClickHandler={onClickHandler} teamNav="LIV" />
        <TeamNav onClickHandler={onClickHandler} teamNav="Player" />
      </section>
      <section className="h-52 bg-[#ebecf5] text-center pt-5 font-semibold">
        {title}
      </section>
    </section>
  );
}

export default Match;
