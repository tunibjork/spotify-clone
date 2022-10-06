import { Playlist, User } from "@prisma/client";
import useSWR from "swr";
import fetcher from "./fetcher";

export function useMe() {
  const { data, error } = useSWR("/me", fetcher);

  return {
    user: data as User,
    isLoading: !data && !error,
    isError: error,
  };
}

export function usePlaylist() {
  const { data, error } = useSWR("/playlist", fetcher);

  return {
    playlists: (data as Playlist[]) || [],
    isLoading: !data && !error,
    isError: error,
  };
}
