import type { Projects } from "~/type"
import { ghFetch } from "~/utils/github";

export default eventHandler(async () => {
  const reposRes = []

  let i = 1;
  while (true) {
    const res = await ghFetch(
      `user/repos?per_page=100&visibility=public&sort=updated&page=${i}`,
    ) as any;
    if (!res || res.length === 0) {
      break;
    }
    reposRes.push(res);
    i++;
  }

  // @ts-ignore
  const repos = reposRes.flat().filter((repo) => !repo.fork).map((repo) => {
    // @ts-ignore
    const { name: title, description: desc, html_url: href } = repo 
    return {
      title,
      desc,
      href,
    };
  });

  return repos as Projects
});
