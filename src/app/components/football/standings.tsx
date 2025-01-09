import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Image from "next/image";
import NoProvidedData from "./noProvidedData";

export default function Standings(standings: any) {
  const standingTable = standings.standings.shift().table;
  return (
    <>
      {standingTable.length === 0 ? (
        <NoProvidedData title="standings" />
      ) : (
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Pos</TableHead>
              <TableHead className="w-[100px]">Club</TableHead>
              <TableHead>P</TableHead>
              <TableHead>W</TableHead>
              <TableHead>D</TableHead>
              <TableHead>L</TableHead>
              <TableHead>GD</TableHead>
              <TableHead>Pts</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {standingTable.map((table: any, index: number) => (
              <TableRow key={index}>
                <TableCell>{table.position}</TableCell>
                <TableCell className="flex flex-wrap gap-4">
                  <Image
                    src={table.team.crest || "/football.png"}
                    width={25}
                    height={25}
                    alt="team-logo"
                  />
                  <label>{table.team.tla}</label>
                </TableCell>
                <TableCell>{table.playedGames}</TableCell>
                <TableCell>{table.won}</TableCell>
                <TableCell>{table.draw}</TableCell>
                <TableCell>{table.lost}</TableCell>
                <TableCell>{table.goalDifference}</TableCell>
                <TableCell>{table.points}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </>
  );
}
