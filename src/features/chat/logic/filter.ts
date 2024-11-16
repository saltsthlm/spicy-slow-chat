import { MessageSelect } from "../../db/types";

export function filterByFetchDateAndUsername(
  message: MessageSelect,
  latestFetchDate: bigint,
  user: string
) {
  return message.timestamp <= latestFetchDate || message.username === user;
}
