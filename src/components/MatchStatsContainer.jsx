import MatchStats from "./MatchStats";

function MatchStatsContainer({ title, matchData, isGeneral }) {
  return (
    <>
      <p>{title}</p>
      {isGeneral ? <MatchStats matchData={matchData} /> : null}
    </>
  );
}

export default MatchStatsContainer;
