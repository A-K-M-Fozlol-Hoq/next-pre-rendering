import useSwr from 'swr';
const DashboardSwr = () => {
  const fetcher = async () => {
    const response = await fetch('http://localhost:4000/dashboard');
    const data = await response.json();
    return data;
  };
  const { data, error } = useSwr('dashboard', fetcher);
  if (error) {
    <h1>An error has occurred.</h1>;
  }
  if (!data) {
    <h1>Loading</h1>;
  }
  return (
    <div>
      <h2>Dashbaoard</h2>
      <p>posts - {data?.posts}</p>
      <p>likes - {data?.likes}</p>
      <p>followers - {data?.followers}</p>
      <p>following - {data?.following}</p>
    </div>
  );
};

export default DashboardSwr;
