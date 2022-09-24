import React, {FC, ReactNode} from 'react';
import {AuthProvider} from './auth-context';

const AppProviders: FC<{children: ReactNode}> = ({children}) => (
  <AuthProvider>{children}</AuthProvider>
);

export {AppProviders};
