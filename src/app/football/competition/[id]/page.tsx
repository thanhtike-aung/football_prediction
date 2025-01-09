import {
  fetchMatches,
  fetchStandings,
  fetchTopScorers,
} from "@/app/api/football/get";
import Matches from "@/app/components/football/matches";
import Standings from "@/app/components/football/standings";
import TopScorers from "@/app/components/football/topScorers";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface ParamProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function Competition({ params }: ParamProps) {
  const awaitedParams = await params;
  const matches = await fetchMatches(parseInt(awaitedParams.id));
  const standings = await fetchStandings(parseInt(awaitedParams.id));
  const topScorers = await fetchTopScorers(parseInt(awaitedParams.id));

  return (
    <>
      <Tabs defaultValue="matches" className="w-full pt-5">
        <TabsList className="w-full">
          <TabsTrigger value="matches" className="w-full">
            Matches
          </TabsTrigger>
          <TabsTrigger value="standings" className="w-full">
            Standings
          </TabsTrigger>
          <TabsTrigger value="topScorers" className="w-full">
            Top Scorers
          </TabsTrigger>
        </TabsList>
        <div className="mx-auto w-[370px]">
          <TabsContent value="matches">
            <Matches matches={matches.data.matches} />
          </TabsContent>
          <TabsContent value="standings">
            <Standings standings={standings.data.standings} />
          </TabsContent>
          <TabsContent value="topScorers">
            <TopScorers scorers={topScorers.data.scorers} />
          </TabsContent>
        </div>
      </Tabs>
    </>
  );
}
