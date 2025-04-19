import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// This redirects to the new Home component
const Index = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/', { replace: true });
  }, [navigate]);

  return null;
};

export default Index;
