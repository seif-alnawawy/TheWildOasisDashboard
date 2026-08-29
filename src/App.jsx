import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { lazy, Suspense } from "react";

import DarkModeProvider from "./providers/DarkModeProvider";
import Spinner from "./ui/Spinner";
const DashboardPage = lazy(() => import("./pages/DashboardPage"));
const CabinsPage = lazy(() => import("./pages/CabinsPage"));
const UsersPage = lazy(() => import("./pages/UsersPage"));
const BookingsPage = lazy(() => import("./pages/BookingsPage"));
const SettingsPage = lazy(() => import("./pages/SettingsPage"));
const AccountPage = lazy(() => import("./pages/AccountPage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));
const LoginPage = lazy(() => import("./pages/LoginPage"));
const AppLayout = lazy(() => import("./ui/AppLayout"));
const ProtectedRoute = lazy(() => import("./ui/ProtectedRoute"));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
    },
  },
});

export default function App() {
  return (
    <DarkModeProvider>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Suspense
            fallback={
              <div className="h-screen flex justify-center items-center">
                <Spinner />
              </div>
            }
          >
            <Routes>
              <Route
                element={
                  <ProtectedRoute>
                    <AppLayout />
                  </ProtectedRoute>
                }
              >
                <Route index element={<Navigate replace to={"dashboard"} />} />
                <Route path="dashboard" element={<DashboardPage />} />
                <Route path="bookings" element={<BookingsPage />} />
                <Route path="cabins" element={<CabinsPage />} />
                <Route path="users" element={<UsersPage />} />
                <Route path="settings" element={<SettingsPage />} />
                <Route path="account" element={<AccountPage />} />
              </Route>
              <Route path="login" element={<LoginPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
        <ReactQueryDevtools />
      </QueryClientProvider>
    </DarkModeProvider>
  );
}
