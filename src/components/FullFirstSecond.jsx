function FullFirstSecond({ title, statsHandler }) {
  return (
    <p
      onClick={statsHandler}
      value={title}
      className="bg-gray-300 w-28 text-center px-1 py-2 rounded-full my-1 cursor-pointer text-xs"
    >
      {title}
    </p>
  );
}

export default FullFirstSecond;
