import { useRouteError } from 'react-router-dom';

function ErrorBoundary() {
  const error = useRouteError();
  console.error(error);

  return <div>Dang! An error occured</div>;
}

export { ErrorBoundary };
