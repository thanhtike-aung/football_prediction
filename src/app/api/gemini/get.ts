import { somethingWentWrong } from "@/constants";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { StatusCodes } from "http-status-codes";
import { ErrorResponse } from "../common/types";

/**
 * connect to google gemini and get prediction
 * @param prompt
 * @returns {*}
 */
export const fetchGeminiApi = async (
  prompt: string
): Promise<{ status: StatusCodes; data: string } | ErrorResponse> => {
  try {
    const gemini = new GoogleGenerativeAI(
      "AIzaSyAp7WtqODMyo9GrXJyJjq2rjUioTDydGOA"
    );
    const geminiModel = gemini.getGenerativeModel({
      model: "gemini-2.0-flash-exp",
    });
    const response = await geminiModel.generateContent(prompt);
    if (!response.response.candidates) {
      return {
        status: StatusCodes.INTERNAL_SERVER_ERROR,
        errors: somethingWentWrong,
        data: null,
      };
    }
    return {
      status: StatusCodes.OK,
      data: response.response.candidates[0].content.parts[0].text,
    };
  } catch (error) {
    console.error(error);
    return {
      status: StatusCodes.INTERNAL_SERVER_ERROR,
    };
  }
};
