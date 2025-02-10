import { createContext, useContext, ReactNode } from 'react';

// Define the shape of the context


// Create the AuthContext
const AuthContext = createContext(undefined);

// AuthProvider component
export const AuthProvider = ({ children }: { children: ReactNode }) => {
  // const { user, isAuthenticatedUser: isAuthenticated } = useSelector(
  //   (state: RootState) => state.auth
  // );
  // return <AuthContext.Provider value={{ isAuthenticated, user }}>{children}</AuthContext.Provider>;
};

// Custom hook to use AuthContext
// export const useAuth = () => {
//   const context = useContext(AuthContext);
//   if (!context) {
//     throw new Error('useAuth must be used within an AuthProvider');
//   }
//   return context;
// };
