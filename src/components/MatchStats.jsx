import { useEffect, useState } from "react";
import FullFirstSecond from "./FullFirstSecond";
import MatchStatsDetails from "./MatchStatsDetails";

function MatchStats({ matchData }) {
  const firstHalf = {};
  firstHalf["homePossession"] =
    matchData?.match?.liveData?.lineups?.home?.stats[3].fh;
  firstHalf["awayPossession"] =
    matchData?.match?.liveData?.lineups?.away?.stats[5].fh;
  firstHalf["homeShots"] =
    matchData?.match?.liveData?.lineups?.home?.stats[0].fh;
  firstHalf["awayShots"] =
    matchData?.match?.liveData?.lineups?.away?.stats[4].fh;
  firstHalf["homeTargerShots"] =
    matchData?.match?.liveData?.lineups?.home?.stats[1].fh;
  firstHalf["awayTargerShots"] =
    matchData?.match?.liveData?.lineups?.away?.stats[3].fh;
  firstHalf["homeCorners"] =
    matchData?.match?.liveData?.lineups?.home?.stats[2].fh;
  firstHalf["awayCorners"] =
    matchData?.match?.liveData?.lineups?.away?.stats[2].fh;

  const secondHalf = {};
  secondHalf["homePossession"] =
    matchData?.match?.liveData?.lineups?.home?.stats[3].sh;
  secondHalf["awayPossession"] =
    matchData?.match?.liveData?.lineups?.away?.stats[5].sh;
  secondHalf["homeShots"] =
    matchData?.match?.liveData?.lineups?.home?.stats[0].sh;
  secondHalf["awayShots"] =
    matchData?.match?.liveData?.lineups?.away?.stats[4].sh;
  secondHalf["homeTargerShots"] =
    matchData?.match?.liveData?.lineups?.home?.stats[1].sh;
  secondHalf["awayTargerShots"] =
    matchData?.match?.liveData?.lineups?.away?.stats[3].sh;
  secondHalf["homeCorners"] =
    matchData?.match?.liveData?.lineups?.home?.stats[2].sh;
  secondHalf["awayCorners"] =
    matchData?.match?.liveData?.lineups?.away?.stats[2].sh;

  const fullHalf = {};
  fullHalf["homePossession"] =
    (parseInt(matchData?.match?.liveData?.lineups?.home?.stats[3].sh) +
      parseInt(matchData?.match?.liveData?.lineups?.home?.stats[3].fh)) /
    2;
  fullHalf["awayPossession"] =
    parseInt(matchData?.match?.liveData?.lineups?.away?.stats[5].sh) +
    parseInt(matchData?.match?.liveData?.lineups?.away?.stats[5].fh) / 2;
  fullHalf["homeShots"] =
    parseInt(matchData?.match?.liveData?.lineups?.home?.stats[0].sh) +
    parseInt(matchData?.match?.liveData?.lineups?.home?.stats[0].fh);
  fullHalf["awayShots"] =
    parseInt(matchData?.match?.liveData?.lineups?.away?.stats[4].sh) +
    parseInt(matchData?.match?.liveData?.lineups?.away?.stats[4].fh);
  fullHalf["homeTargerShots"] =
    parseInt(matchData?.match?.liveData?.lineups?.home?.stats[1].sh) +
    parseInt(matchData?.match?.liveData?.lineups?.home?.stats[1].fh);
  fullHalf["awayTargerShots"] =
    parseInt(matchData?.match?.liveData?.lineups?.away?.stats[3].sh) +
    parseInt(matchData?.match?.liveData?.lineups?.away?.stats[3].fh);
  fullHalf["homeCorners"] =
    parseInt(matchData?.match?.liveData?.lineups?.home?.stats[2].sh) +
    parseInt(matchData?.match?.liveData?.lineups?.home?.stats[2].fh);
  fullHalf["awayCorners"] =
    parseInt(matchData?.match?.liveData?.lineups?.away?.stats[2].sh) +
    parseInt(matchData?.match?.liveData?.lineups?.away?.stats[2].fh);

  const [statsData, setStatsData] = useState(firstHalf);
  const [firstOrSecond, setFirstOrSecond] = useState("");
  const statsHandler = (e) => {
    let fullFirstHalfTime = e.target.getAttribute("value");
    if (fullFirstHalfTime === "2nd Half") {
      setFirstOrSecond("2nd Half");
      setStatsData(secondHalf);
    }
    if (fullFirstHalfTime === "1st Half") {
      setFirstOrSecond("1st Half");
      setStatsData(firstHalf);
    }
    if (fullFirstHalfTime === "Full Time") {
      setFirstOrSecond("Full Time");
      setStatsData(fullHalf);
    }
  };

  return (
    <section className="text-left pl-3 text-black">
      <aside className="flex justify-center gap-x-2 my-2">
        <FullFirstSecond title="Full Time" statsHandler={statsHandler} />
        <FullFirstSecond title="1st Half" statsHandler={statsHandler} />
        <FullFirstSecond title="2nd Half" statsHandler={statsHandler} />
      </aside>
      <MatchStatsDetails statsData={statsData} firstOrSecond={firstOrSecond} />
    </section>
  );
}

export default MatchStats;
