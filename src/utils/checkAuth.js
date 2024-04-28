const checkAuth = () => {
  const token = localStorage.getItem('access');
  return !!token; // Returns true if token exists, false otherwise
};
export default checkAuth