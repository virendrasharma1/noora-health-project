export const clearLocalStorageAndReload = () => {
  localStorage.clear();
  window.location.reload();
};


export const checkLocalStorageData = () => {
  const accessToken = localStorage.getItem("access-token");
  const client =  localStorage.getItem("client");
  const expiry = localStorage.getItem("expiry");
  const uid = localStorage.getItem("uid");
  const tokenType = localStorage.getItem("token-type");

  return (accessToken && client && expiry && uid && tokenType);
};
