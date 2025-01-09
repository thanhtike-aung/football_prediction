import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import NoProvidedData from "./noProvidedData";
import { FaFutbol } from "react-icons/fa";

export default function TopScorers(scorers: any) {
  // console.log(scorers);
  return (
    <>
      {scorers.scorers.length === 0 ? (
        <NoProvidedData title="scorers" />
      ) : (
        scorers.scorers.map((scorer: any, index: number) => (
          <Card key={index} className="w-full h-20 mb-3">
            <CardContent className="flex items-center justify-between p-[5px]">
                <div className="flex items-center gap-4 py-2">
                  <div className="rounded-full border border-black w-[45px] h-[45px] overflow-hidden">
                    <Image
                      src={`https://thafootballbucket.s3.ap-southeast-1.amazonaws.com/scorers/${scorer.player.id}.png`}
                      width={40}
                      height={43}
                      className="object-cover"
                      alt="player-image"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label>{scorer.player.name}</label>
                    <div className="flex flex-row items-center mt-2 space-x-2">
                      <Image
                        src={scorer.team.crest}
                        width={25}
                        height={25}
                        alt="team-logo"
                      />
                      <label className="text-xs text-[#7c7e80]">
                        {scorer.player.section}
                      </label>
                    </div>
                  </div>
                </div>
                <div className="w-10 h-10">
                  <label className="text-sm flex flex-row items-center gap-1">{scorer.goals} <FaFutbol/></label>
                </div>
            </CardContent>
          </Card>
        ))
      )}
    </>
  );
}
