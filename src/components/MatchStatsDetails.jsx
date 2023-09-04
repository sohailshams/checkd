import { useEffect } from "react";

function MatchStatsDetails({ statsData, firstOrSecond }) {
  useEffect(() => {}, [firstOrSecond, statsData]);

  const {
    homePossession,
    awayPossession,
    homeShots,
    awayShots,
    homeTargerShots,
    awayTargerShots,
    homeCorners,
    awayCorners,
  } = statsData;

  return (
    <section className="pb-3 my-5 grid grid-cols-2 gap-y-10 text-center">
      <aside className="flex justify-evenly">
        <p>{homePossession}%</p>
        <p>Possession</p>
        <p>{awayPossession}%</p>
      </aside>
      <aside className="flex justify-evenly">
        <p>{homeShots}</p>
        <p>Shots</p>
        <p>{awayShots}</p>
      </aside>
      <aside className="flex justify-evenly">
        <p>{homeTargerShots}</p>
        <p>Shots on Target</p>
        <p>{awayTargerShots}</p>
      </aside>
      <aside className="flex justify-evenly">
        <p>{homeCorners}</p>
        <p>Corners</p>
        <p>{awayCorners}</p>
      </aside>
    </section>
  );
}

export default MatchStatsDetails;
