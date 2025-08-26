import { useUser } from '@/api/queries/userQueries';
import type React from 'react';

const HomeModule: React.FC = () => {
  const { data: user } = useUser();

  return (
    <main>
      <p>FullName: {user?.fullName}</p>
      <p>Email: {user?.email}</p>
    </main>
  );
};

export { HomeModule };
