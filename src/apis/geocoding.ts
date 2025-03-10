import { callApi, responseDataHandler } from "./utils";
import { DistanceUnit, DistanceResult, HistoryRecord } from "@/types/distance";

export const doCalculateDistance = ({
  address1,
  address2,
  unit,
}: {
  address1: string;
  address2: string;
  unit: DistanceUnit;
}): Promise<DistanceResult> =>
  callApi(`/api/distance`, {
    method: "POST",
    data: {
      address1,
      address2,
      unit,
    },
  }).then((result) => responseDataHandler(result?.data));

export const doGetHistory = ({
  offset = 0,
  limit = 10,
}: {
  offset?: number;
  limit?: number;
} = {}): Promise<HistoryRecord> =>
  callApi(`/api/history`, {
    method: "GET",
    params: {
      offset,
      limit,
    },
  }).then((result) => responseDataHandler(result?.data));
