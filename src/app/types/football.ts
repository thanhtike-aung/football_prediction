export interface Area {
  code: string;
  flag: string;
  id: number;
  name: string;
}

export interface CompetitionRes {
  competitions: Competition[],
}

export interface Competition {
  area: Area;
  currentSeason?: {
    id: number;
    currentMatchday: number;
  };
  emblem: string;
  id: number;
  lastUpdated: string;
  name: string;
}

export type groupedCompetitions = Array<{
  competitions: {
    [key: number]: {
      id: number;
      name: string;
      logo: string;
    };
  };
  area: Area;
}>;

export interface groupedCompetition {
  area: Area,
  competitions: {
    [key: number]: singleGroupedCompetition,
  }
}

export interface singleGroupedCompetition {
  id: number,
  name: string,
  logo: string,
}
