function MatchResults({ matchResult }) {
  return (
    <ul className="flex gap-2 justify-center">
      {matchResult?.map((el, ind) => {
        let color = "";
        if (el === "L")
          color = "bg-red-500 border border-red-500 h-3 w-3 rounded-full";
        if (el === "W")
          color = "bg-green-500 border border-green-500 h-3 w-3 rounded-full";
        if (el === "D")
          color = "bg-yellow-500 border border-yellow-500 h-3 w-3 rounded-full";
        return <li key={ind} className={`${color}`}></li>;
      })}
    </ul>
  );
}

export default MatchResults;
