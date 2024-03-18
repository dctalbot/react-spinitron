import { paths } from "../openapi-types";
import {
  UseQueryCollectionOptions,
  useQueryCollection,
} from "./useQueryCollection";

export type ShowsData =
  paths["/shows"]["get"]["responses"]["200"]["content"]["application/json"];

export type UseShowsInput = NonNullable<
  paths["/shows"]["get"]["parameters"]["query"]
>;

export type UseShowsOptions = UseQueryCollectionOptions<ShowsData>;

export function useShows(input: UseShowsInput, opts?: UseShowsOptions) {
  return useQueryCollection<ShowsData>(
    {
      collectionName: "shows",
      input,
    },
    opts,
  );
}
