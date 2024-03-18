import { paths } from "../openapi-types";
import { UseQueryResourceOptions, useQueryResource } from "./useQueryResource";

export type PlaylistData =
  paths["/playlists/{id}"]["get"]["responses"]["200"]["content"]["application/json"];

export type UsePlaylistInput =
  paths["/playlists/{id}"]["get"]["parameters"]["path"] &
    NonNullable<paths["/playlists/{id}"]["get"]["parameters"]["query"]>;

export type UsePlaylistOptions = UseQueryResourceOptions<PlaylistData>;

export function usePlaylist(
  input: UsePlaylistInput,
  opts?: UsePlaylistOptions,
) {
  return useQueryResource<PlaylistData>(
    {
      collectionName: "playlists",
      input,
    },
    opts,
  );
}
