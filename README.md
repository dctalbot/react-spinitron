# react-spinitron

- This package is a Spinitron API client for React and React-Native applications.
- It supports all [Spinitron v2 API GET request endpoints](https://spinitron.github.io/v2api/).
- It wraps `@tanstack/react-query`, and the [documentation](https://tanstack.com/query/latest) for that largely applies here too.

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
  // get playlist spins every 10 seconds
  const spins = useSpins({ playlist_id: 123 }, { refetchInterval: 10000 });
  return (
    <div>
      {spins.map((spin) => (
        <p key={spin.id}>
          {spin.song} by {spin.artist}
        </p>
      ))}
    </div>
  );
}
```

Hooks include:

- `usePersona`
- `usePersonas`
- `usePlaylist`
- `usePlaylists`
- `useShow`
- `useShows`
- `useSpin`
- `useSpins`

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
