export default function queryCrafter(ProjectId: string|undefined, DataSetName: string|undefined) {
  return `https://${ProjectId}.api.sanity.io./v2021-06-07/data/mutate/${DataSetName}`;
}
