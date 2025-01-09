import { StatusCodes } from "http-status-codes";
import {ErrorResponse, SuccessResponse } from "../common/types";
import { noApiKeyErrorText } from "@/constants";

/**
 * get the list of all available competitions
 * @returns {*}
 */
export const fetchCompetitions = async (): Promise<
  SuccessResponse | ErrorResponse
> => {
  if (!process.env.FOOTBALL_API_KEY) {
    return {
      status: StatusCodes.BAD_REQUEST,
      errors: noApiKeyErrorText,
    };
  }
  try {
    const response = await fetch(
      `${process.env.FOOTBALL_API_URL_PREFIX}/competitions/`,
      {
        headers: {
          "X-Auth-Token": process.env.FOOTBALL_API_KEY,
        },
      }
    );
    const jsonResponse = await response.json();
    return {
      status: StatusCodes.OK,
      data: jsonResponse?.competitions,
    };
  } catch (error) {
    console.error(error);
    return {
      status: StatusCodes.INTERNAL_SERVER_ERROR,
    };
  }
};

/**
 * get all matched for particular competition
 * @param competitionId
 * @returns {*}
 */
export const fetchMatches = async (
  competitionId: number
): Promise<SuccessResponse | ErrorResponse> => {
  const today = new Date().toLocaleDateString("en-CA");
  const tenDaysLater = new Date(
    new Date().setDate(new Date().getDate() + 10)
  ).toLocaleDateString("en-CA");
  if (!process.env.FOOTBALL_API_KEY) {
    return {
      status: StatusCodes.BAD_REQUEST,
      errors: noApiKeyErrorText,
    };
  }
  try {
    const response = await fetch(
      `${process.env.FOOTBALL_API_URL_PREFIX}/matches?competitions=${competitionId}&dateFrom=${today}&dateTo=${tenDaysLater}`,
      {
        headers: {
          "X-Auth-Token": process.env.FOOTBALL_API_KEY,
        },
      }
    );
    return {
      status: StatusCodes.OK,
      data: await response.json(),
    };
  } catch (error) {
    console.error(error);
    return {
      status: StatusCodes.INTERNAL_SERVER_ERROR,
    };
  }
};

/**
 * get standings for a particular competition
 * @param competitionId
 * @returns {*}
 */
export const fetchStandings = async (
  competitionId: number
): Promise<SuccessResponse | ErrorResponse> => {
  if (!process.env.FOOTBALL_API_KEY) {
    return {
      status: StatusCodes.BAD_REQUEST,
      errors: noApiKeyErrorText,
    };
  }
  try {
    const response = await fetch(
      `${process.env.FOOTBALL_API_URL_PREFIX}/competitions/${competitionId}/standings`,
      {
        headers: {
          "X-Auth-Token": process.env.FOOTBALL_API_KEY,
        },
      }
    );
    return {
      status: StatusCodes.OK,
      data: await response.json(),
    };
  } catch (error) {
    console.error(error);
    return {
      status: StatusCodes.INTERNAL_SERVER_ERROR,
    };
  }
};

/**
 * get top scorers list for particular competition
 * @param competitionId
 * @returns {*}
 */
export const fetchTopScorers = async (
  competitionId: number
): Promise<SuccessResponse | ErrorResponse> => {
  if (!process.env.FOOTBALL_API_KEY) {
    return {
      status: StatusCodes.BAD_REQUEST,
      errors: noApiKeyErrorText,
    };
  }
  try {
    const response = await fetch(
      `${process.env.FOOTBALL_API_URL_PREFIX}/competitions/${competitionId}/scorers`,
      {
        headers: {
          "X-Auth-Token": process.env.FOOTBALL_API_KEY,
        },
      }
    );
    return {
      status: StatusCodes.OK,
      data: await response.json(),
    };
  } catch (error) {
    console.error(error);
    return {
      status: StatusCodes.INTERNAL_SERVER_ERROR,
    };
  }
};

/**
 *
 * @param matchId
 * @return {*}
 */
export const fetchMatchDetail = async (
  matchId: number
): Promise<SuccessResponse | ErrorResponse> => {
  if (!process.env.FOOTBALL_API_KEY) {
    return {
      status: StatusCodes.BAD_REQUEST,
      errors: noApiKeyErrorText,
    };
  }
  try {
    const response = await fetch(
      `${process.env.FOOTBALL_API_URL_PREFIX}/matches/${matchId}`,
      {
        headers: {
          "X-Auth-Token": process.env.FOOTBALL_API_KEY,
        },
      }
    );
    return {
      status: StatusCodes.OK,
      data: await response.json(),
    };
  } catch (error) {
    console.error(error);
    return {
      status: StatusCodes.INTERNAL_SERVER_ERROR,
    };
  }
};

/**
 * get the previous encounters list
 * @param matchId
 * @returns {*}
 */
export const fetchHeadToHead = async (
  matchId: number
): Promise<SuccessResponse | ErrorResponse> => {
  if (!process.env.FOOTBALL_API_KEY) {
    return {
      status: StatusCodes.BAD_REQUEST,
      errors: noApiKeyErrorText,
    };
  }
  try {
    const response = await fetch(
      `${process.env.FOOTBALL_API_URL_PREFIX}/matches/${matchId}/head2head?limit=6`,
      {
        headers: {
          "X-Auth-Token": process.env.FOOTBALL_API_KEY,
        },
      }
    );
    return {
      status: StatusCodes.OK,
      data: await response.json(),
    };
  } catch (error) {
    console.error(error);
    return {
      status: StatusCodes.INTERNAL_SERVER_ERROR,
    };
  }
};
