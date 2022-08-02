import _ from "lodash";

export function paginate(items, pageNumber, pageSize) {
  const startIndex = (pageNumber - 1) * pageSize;
  // _.slice(items, startIndex)
  // _.take()
  // converting items array into lodash wraper. create a lodash object and uses its methods to creat value
  return _(items)
    .slice(startIndex)
    .take(pageSize)
    .value();
}
