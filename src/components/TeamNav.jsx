function TeamNav({ teamNav, onClickHandler, isTrue }) {
  return (
    <p
      onClick={onClickHandler}
      value={teamNav}
      className={
        isTrue
          ? "bg-black text-white py-3 cursor-pointer"
          : "py-3 bg-[#f2f3f4] cursor-pointer"
      }
    >
      {teamNav}
    </p>
  );
}

export default TeamNav;
