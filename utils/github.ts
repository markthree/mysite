// implement from https://github.com/unjs/ungh (server/api/only)
import type { CacheOptions } from "nitropack";
import type { FetchOptions } from "ohmyfetch";

const runtimeConfig = useRuntimeConfig();

const commonCacheOptions: CacheOptions = {
  swr: true,
  maxAge: 60 * 60 * 6, // 6 hours
  staleMaxAge: 60 * 60 * 12, // 12 hours
};

export const cacheOptions = (name: string): CacheOptions => ({
  ...commonCacheOptions,
  name,
});

export const ghFetch = cachedFunction(
  (url: string, opts: FetchOptions = {}) => {
    // @ts-ignore
    return $fetch(url, {
      baseURL: "https://api.github.com",
      ...opts,
      headers: {
        "User-Agent": "fetch",
        Accept: "application/vnd.github+json",
        "X-GitHub-Api-Version": "2022-11-28",
        Authorization: "token " + runtimeConfig.GITHUB_TOKEN,
        ...opts.headers,
      },
    });
  },
  cacheOptions("api"),
);
