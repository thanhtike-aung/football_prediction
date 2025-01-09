import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Competition,
  CompetitionRes,
  groupedCompetition,
  groupedCompetitions,
  singleGroupedCompetition,
} from "../../types/football";
import Image from "next/image";
import Link from "next/link";

export default async function MainMenu(competitions: CompetitionRes) {

  // modify object structure
  const groupedCompetitions = competitions?.competitions?.reduce(
    (accumulator: groupedCompetitions, currentValue: Competition) => {
      const areaKey = currentValue.area.id;
      if (!accumulator[areaKey]) {
        accumulator[areaKey] = { area: currentValue.area, competitions: {} };
      }
      accumulator[areaKey].competitions[currentValue.id] = {
        id: currentValue.id,
        name: currentValue.name,
        logo: currentValue.emblem,
      };
      return accumulator;
    },
    []
  );

  return (
    <>
      <div className="p-3">
        <Accordion type="single" collapsible className="w-full">
          {groupedCompetitions.map((groupedCompetition: groupedCompetition) => {
            return (
              <AccordionItem
                value={`item-${groupedCompetition.area.id}`}
                key={groupedCompetition.area.id}
              >
                <AccordionTrigger className="focus:no-underline">
                  <div className="flex flex-wrap">
                    <Image
                      src={groupedCompetition.area.flag || "/worldwide.png"}
                      width={30}
                      height={30}
                      alt="flag"
                    />
                    <label className="pl-3 focus:no-underline">
                      {groupedCompetition.area.name}
                    </label>
                  </div>
                </AccordionTrigger>
                {Object.values(groupedCompetition.competitions).map(
                  (childCompetition: singleGroupedCompetition) => {
                    return (
                      <Link
                        href={`/football/competition/${childCompetition.id}`}
                        key={childCompetition.id}
                      >
                        <AccordionContent className="pl-1 flex flex-wrap">
                          <Image
                            src={childCompetition.logo}
                            width={23}
                            height={23}
                            alt="logo"
                          />
                          <label className="pl-3">
                            {childCompetition.name}
                          </label>
                        </AccordionContent>
                      </Link>
                    );
                  }
                )}
              </AccordionItem>
            );
          })}
        </Accordion>
      </div>
    </>
  );
}
