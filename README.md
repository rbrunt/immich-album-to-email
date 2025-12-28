# Immich to Email

A script to send photos from an Immich album to an email address.

Building

```sh
npm run build
```

Running:

```sh
npm run start
```


## Creating a token

Create at token in immich, including these scopes:

- `album.read`
- `album.statistics`

Set the token in the `IMMICH_API_KEY` environment variable.
