import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import NoProvidedData from "./noProvidedData";
export default function Matches(matches: any) {
  return (
    <>
      <div className="flex flex-wrap gap-2 w-full">
        {matches.matches.length === 0 ? (
          <NoProvidedData title="matches" />
        ) : (
          matches.matches.map((match: any) => {
            return (
              <Link
                href={`/football/competition/match/${match.id}`}
                key={match.id}
              >
                <Card className="w-[180px] h-[150px] p-2" key={match.id}>
                  <CardContent>
                    <div className="flex justify-center items-center gap-x-8 mt-5">
                      <Image
                        src={match.homeTeam.crest || "/football.png"}
                        width={40}
                        height={40}
                        alt="team-logo"
                      />
                      <label className="text-xl">vs</label>
                      <Image
                        src={match.awayTeam.crest || "/football.png"}
                        width={40}
                        height={40}
                        alt="team-logo"
                      />
                    </div>
                  </CardContent>
                  <CardFooter className="flex flex-col justify-center items-center">
                    <label className="text-sm">
                      {new Date(match.utcDate).toLocaleDateString()}
                    </label>
                    <label className="text-sm">
                      {new Date(match.utcDate).toLocaleTimeString()}
                    </label>
                  </CardFooter>
                </Card>
              </Link>
            );
          })
        )}
      </div>
    </>
  );
}
