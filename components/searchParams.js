export function searchParamsUrl() {
  // Check if window is defined
  if (typeof window === "undefined") {
    return "";
  }

  const queryParams = new URLSearchParams(window.location.search);
  const requiredParams = [
    "adgroupid",
    "matchtype",
    "keyword",
    "creative",
    "campaignId",
    "utm_content",
    "utm_campaign",
  ];

  let stringExport = "?";
  let paramCounter = 0;

  requiredParams.forEach((param) => {
    const value = queryParams.get(param);
    if (paramCounter === 0) {
      if (value !== null) {
        stringExport = stringExport + `&${param}=${value}`;
      }
      paramCounter++;
    } else {
      if (value !== null) {
        stringExport = stringExport + `&${param}=${value}`;
      }
    }
  });

  return stringExport;
}
