import { fetchMatchDetail } from "@/app/api/football/get";
import AiPrediction from "@/app/components/football/aiPrediction";
import HeadToHead from "@/app/components/football/headToHead";
import Image from "next/image";

interface ParamProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function DetailMatch({ params }: ParamProps) {
  const awaitedParams = await params;
  const matchDetail = await fetchMatchDetail(parseInt(awaitedParams.id));
  return (
    <>
      <div className="flex justify-between items-center space-x-6 p-6 pb-0">
        <div className="flex flex-col items-center space-y-2">
          <Image
            src={matchDetail.data.homeTeam.crest}
            width={35}
            height={35}
            alt="home team logo"
          />
          <p className="text-base font-semibold text-gray-700">
            {matchDetail.data.homeTeam.shortName}
          </p>
        </div>
        <div className="flex flex-col items-center space-y-2">
          <Image
            src={matchDetail.data.awayTeam.crest}
            width={35}
            height={35}
            alt="away team logo"
          />
          <p className="text-base font-semibold text-gray-700">
            {matchDetail.data.awayTeam.shortName}
          </p>
        </div>
      </div>
      <HeadToHead matchId={parseInt(awaitedParams.id)} />
      <div className="text-center mt-2">
        <AiPrediction
          homeTeam={matchDetail.data.homeTeam.shortName}
          awayTeam={matchDetail.data.awayTeam.shortName}
        />
      </div>
    </>
  );
}
