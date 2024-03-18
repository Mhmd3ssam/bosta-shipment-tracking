export const buildURLQueryParams = (queryParams) => {
  const urlParams = new URLSearchParams();

  for (const key in queryParams) {
    if (queryParams[key] && typeof queryParams[key] !== "object") {
      urlParams.append(key, queryParams[key]);
    } else if (queryParams[key] instanceof Array && !!queryParams[key].length) {
      urlParams.append(key, queryParams[key].join(","));
    }
  }

  return urlParams.toString();
};
