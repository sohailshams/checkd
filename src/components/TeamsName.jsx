import MatchResults from "./MatchResults";

function TeamsName({ matchData }) {
  return (
    <section className="flex justify-between">
      <section className="text-center font-semibold">
        <img
          className="w-[100px] h-[100px]"
          src="https://cdn.fantasyiteam.com/bethub/teams/150x150/4dsgumo7d4zupm2ugsvm4zm4d.png"
          alt=""
        />
        <p className="my-3">{matchData.match?.contestant[0]?.name}</p>
        <MatchResults matchResult={matchData.match?.form?.home} />
      </section>
      <section className="text-center font-semibold">
        <img
          className="w-[100px] h-[100px]"
          src="https://cdn.fantasyiteam.com/bethub/teams/150x150/hzqh7z0mdl3v7gwete66syxp.png"
          alt=""
        />
        <p className="my-3">{matchData.match?.contestant[1]?.name}</p>
        <MatchResults matchResult={matchData.match?.form?.away} />
      </section>
    </section>
  );
}

export default TeamsName;
