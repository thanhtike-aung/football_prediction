import { StatusCodes } from "http-status-codes";
import { fetchCompetitions } from "../api/football/get";
import MainMenu from "../components/football/mainMenu";
import UnknownError from "../components/unknownError";

export default async function Football() {
  const competitions = await fetchCompetitions();
  return (
    <>
      {competitions.status === StatusCodes.OK ? (
        <MainMenu competitions={competitions.data} />
      ) : (
        <UnknownError />
      )}
    </>
  );
}
