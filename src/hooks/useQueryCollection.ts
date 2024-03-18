import {
  DefaultError,
  InfiniteData,
  UseInfiniteQueryOptions,
  useInfiniteQuery,
} from "@tanstack/react-query";
import { useBaseURL } from "../provider/ApiProvider";
import { buildQueryString } from "../util/buildQueryString";
import { components } from "../openapi-types";

export type BaseIndexResponse = components["schemas"]["BaseIndexResponse"];

export type Params = { pageParam: unknown };

export interface UseQueryCollectionInput {
  collectionName: string;
  input?: Record<string, unknown>;
}

export type Response = BaseIndexResponse & {
  items?: Record<string, unknown>[];
};

export type Item<T extends Response> = NonNullable<T["items"]>[number];

export type UseQueryCollectionOptions<T extends Response> = Partial<
  Omit<
    UseInfiniteQueryOptions<T, DefaultError, Item<T>>,
    "queryKey" | "queryFn" | "initialPageParam" | "getNextPageParam" | "select"
  >
>;

export function useQueryCollection<TQueryFnData extends Response>(
  { collectionName, input = {} }: UseQueryCollectionInput,
  opts?: UseQueryCollectionOptions<TQueryFnData>,
) {
  type TData = Item<TQueryFnData>;
  const base = useBaseURL();
  const s = buildQueryString(input);

  const queryFn = async ({ pageParam }: Params): Promise<TQueryFnData> => {
    let url = `${base}/${collectionName}?page=${pageParam}`;
    if (s) {
      url += "&" + s;
    }
    return fetch(url).then((res) => res.json());
  };

  const select = (data: InfiniteData<TQueryFnData>): TData[] => {
    return (data?.pages ?? []).flatMap((page) => page.items ?? []);
  };

  const getNextPageParam = (lastPage: TQueryFnData): number | null => {
    return lastPage?._meta?.currentPage === lastPage._meta?.pageCount
      ? null
      : (lastPage?._meta?.currentPage ?? 0) + 1;
  };

  return useInfiniteQuery<TQueryFnData, DefaultError, TData[]>({
    queryKey: [collectionName, input],
    queryFn,
    initialPageParam: 1,
    getNextPageParam,
    select,
    ...opts,
  });
}
