import { paths } from "../openapi-types";
import {
  UseQueryCollectionOptions,
  useQueryCollection,
} from "./useQueryCollection";

export type PlaylistsData =
  paths["/playlists"]["get"]["responses"]["200"]["content"]["application/json"];

export type UsePlaylistsInput = NonNullable<
  paths["/playlists"]["get"]["parameters"]["query"]
>;

export type UsePlaylistsOptions = UseQueryCollectionOptions<PlaylistsData>;

export function usePlaylists(
  input?: UsePlaylistsInput,
  opts?: UsePlaylistsOptions,
) {
  return useQueryCollection<PlaylistsData>(
    {
      collectionName: "playlists",
      input,
    },
    opts,
  );
}
