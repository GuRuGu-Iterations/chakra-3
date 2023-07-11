export * from './root/root';
export { loader as rootLoader } from './root/loader';
export { ErrorBoundary as RootErrorBoundary } from './root/error.tsx';

export * from './dashboard/dashboard';

export * from './auth/auth';
export { ErrorBoundary as AuthErrorBoundary } from './auth/error.tsx';
export * from './auth/login/login.tsx';
export * from './auth/registration/registration.tsx';
