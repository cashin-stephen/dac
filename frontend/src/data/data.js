import data from './projects.json'

export async function getProjects (query) {
  // eslint-disable-next-line no-eval
  return data[query]
}
