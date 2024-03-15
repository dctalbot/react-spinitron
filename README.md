# react-spinitron

- This package is a Spinitron API client for React and React-Native applications.
- It supports all [Spinitron v2 API GET request endpoints](https://spinitron.github.io/v2api/).
- It wraps `@tanstack/react-query`, and the [documentation](https://tanstack.com/query/latest) for that largely applies here too.

## Installation

```
npm install @dctalbot/react-spinitron
```

## Example

`App.tsx`

```tsx
const API_BASE_URL = "https://my-spinitron-proxy.com/api";

function App() {
  return (
    <ApiClientProvider baseURL={API_BASE_URL}>
      <MyComponent />
    </ApiClientProvider>
  );
}
```

`MyComponent.tsx`

```tsx
function MyComponent() {
  // get Spins for Playlist #123 every 10 seconds
  const { data, error, isFetching } = useSpins(
    { playlist_id: 123 },
    { refetchInterval: 10000 },
  );

  const listdata = (data?.pages ?? []).map((page) => page.items).flat();

  if (error) return <div>Error</div>;
  if (isFetching) return <div>Loading...</div>;

  return (
    <div>
      {listdata.map((spin) => (
        <p key={spin.id}>
          {spin.song} by {spin.artist}
        </p>
      ))}
    </div>
  );
}
```

Hooks include:

- `usePersona(requestParams, queryOptions)`
- `usePersonas(requestParams, queryOptions)`
- `usePlaylist(requestParams, queryOptions)`
- `usePlaylists(requestParams, queryOptions)`
- `useShow(requestParams, queryOptions)`
- `useShows(requestParams, queryOptions)`
- `useSpin(requestParams, queryOptions)`
- `useSpins(requestParams, queryOptions)`

## Related Projects

- https://github.com/wcbn/spinitron-proxy/
- https://github.com/dctalbot/spinitron-mobile-app
- https://github.com/spinitron/v2api

## Contributing

Please run `make check` and resolve any errors before submitting a pull request.

## Type generation

The client is written in Typescript and is based on the OpenAPI specification.

To generate these types, run:

```sh
make generate
```
