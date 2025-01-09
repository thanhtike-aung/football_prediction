import { noApiKeyErrorText } from "@/constants";
import { StatusCodes } from "http-status-codes";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const {matchId} = req.query;

    if (!process.env.FOOTBALL_API_KEY) {
        return res.status(StatusCodes.BAD_REQUEST).json({error: noApiKeyErrorText});
    }
    try {
        const response = await fetch(
            `${process.env.FOOTBALL_API_URL_PREFIX}/matches/${matchId}/head2head?limit=6`,
            {
                headers: {
                    "X-Auth-Token": process.env.FOOTBALL_API_KEY,
                },
            },
        );
        return {
            status: StatusCodes.OK,
            data: await response.json(),
        }
    }catch (error) {
        console.error(error);
        return {
            status: StatusCodes.INTERNAL_SERVER_ERROR,
        }
    }
}