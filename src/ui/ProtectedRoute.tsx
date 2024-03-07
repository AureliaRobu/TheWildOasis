import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import useUser from '../features/authentication/useUser';
import Spinner from './Spinner';

const FullPage = styled.div`
  height: 100vh;
  background-color: var(--color-grey-50);
  display: flex;
  align-items: center;
  justify-content: center;
`;

function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  // 1. Load the authenticated user
  const { isAuthenticated, isLoading } = useUser();

  // 3. If there is no authenticated user redirect to /login
  useEffect(
    function () {
      if (!isAuthenticated && !isLoading) navigate('/login');
    },
    [isAuthenticated, isLoading, navigate]
  );
  // 2. While loading return spinner
  if (isLoading)
    return (
      <FullPage>
        <Spinner />
      </FullPage>
    );
  if (isAuthenticated) return children;
}

export default ProtectedRoute;
