import { paths } from "../openapi-types";
import {
  UseQueryCollectionOptions,
  useQueryCollection,
} from "./useQueryCollection";

export type SpinsData =
  paths["/spins"]["get"]["responses"]["200"]["content"]["application/json"];

export type UseSpinsInput = NonNullable<
  paths["/spins"]["get"]["parameters"]["query"]
>;

export type UseSpinsOptions = UseQueryCollectionOptions<SpinsData>;

export function useSpins(input?: UseSpinsInput, opts?: UseSpinsOptions) {
  return useQueryCollection<SpinsData>(
    {
      collectionName: "spins",
      input,
    },
    opts,
  );
}
