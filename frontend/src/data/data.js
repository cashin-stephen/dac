import data from './projects.json'

export async function getProjects (query) {
  return data[query]
}
