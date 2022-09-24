import {SafeAreaView} from 'react-native';
import React, {FC} from 'react';
import {useAuth} from './context/auth-context';

import AuthenticatedApp from './authenticated-app';
import UnAuthenticatedApp from './unauthenticated-app';

const App: FC = () => {
  const {user} = useAuth();

  return (
    <SafeAreaView>
      {user ? <AuthenticatedApp /> : <UnAuthenticatedApp />}
    </SafeAreaView>
  );
};

export default App;
