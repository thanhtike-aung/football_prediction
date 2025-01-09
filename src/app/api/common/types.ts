import { StatusCodes } from "http-status-codes";

export interface SuccessResponse {
  status: StatusCodes;
  data: any;
}

export interface ErrorResponse {
  status: StatusCodes;
  data?: null;
  errors?: string | string[];
}
