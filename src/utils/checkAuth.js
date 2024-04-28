const checkAuth = () => {
  const token = localStorage.getItem('access');
  return !!token;
};
export default checkAuth