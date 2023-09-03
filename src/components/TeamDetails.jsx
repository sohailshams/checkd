import TeamsName from "./TeamsName";

function TeamDetails({ matchData }) {
  return (
    <section className="relative">
      <section className="bg-[url('https://cdn.fantasyiteam.com/bethub/venues/600x450/8f6qv79cqqaeriyn46aftjyn0.jpg')] h-[310px] bg-cover bg-center opacity-25"></section>
      <section className="absolute top-10 left-[50%] translate-x-[-50%] text-center">
        <p className="underline text-black font-semibold">
          {matchData?.match?.meta?.competition?.name}
        </p>
        <p>Full Time</p>
      </section>
      <section className="absolute top-28 left-[50%] translate-x-[-50%] w-2/3 ">
        <TeamsName matchData={matchData} />
      </section>
    </section>
  );
}

export default TeamDetails;
