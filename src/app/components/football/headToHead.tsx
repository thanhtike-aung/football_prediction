import { fetchHeadToHead } from "@/app/api/football/get";
import { formatDate } from "@/app/helper/dateFormat";

export default async function HeadToHead({ matchId }: { matchId: number }) {
  const headToHead = await fetchHeadToHead(matchId);
  const h2hMatches = headToHead.data.matches;

  return (
    <>
      <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg p-4">
        <div className="border-b pb-4">
          <h2 className="text-base font-medium">Head-to-head record</h2>
          <p className="text-xs text-gray-600">Last {h2hMatches?.length} matches</p>
        </div>
        <div className="">
          {h2hMatches?.map((match: any, index: number) => (
            <div
              key={index}
              className="flex items-center justify-between border-b py-2"
            >
              <div className="flex-1">
                <p className="text-xs text-gray-500">
                  {formatDate(match.utcDate)} · {match.competition.name}
                </p>
                <div className="flex justify-between items-center">
                  <span
                    className={`text-base ${
                      match.score.fullTime.home < match.score.fullTime.away &&
                      "text-red-500"
                    }`}
                  >
                    {match.homeTeam.shortName}
                  </span>
                  <span
                    className={`text-sm font-bold ${
                      match.score.fullTime.home < match.score.fullTime.away
                        ? "text-red-500"
                        : "text-gray-500"
                    }`}
                  >
                    {match.score.fullTime.home}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span
                    className={`text-base ${
                      match.score.fullTime.away < match.score.fullTime.home &&
                      "text-red-500"
                    }`}
                  >
                    {match.awayTeam.shortName}
                  </span>
                  <span
                    className={`text-sm font-bold text-gray-500 ${
                      match.score.fullTime.away < match.score.fullTime.home
                        ? "text-red-500"
                        : "text-gray-500"
                    }`}
                  >
                    {match.score.fullTime.away}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
