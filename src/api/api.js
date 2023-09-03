const url = "https://frontend-tech-test-ashy.vercel.app/api/match";

function getMatchData() {
  return fetch(url);
}

export default getMatchData;
