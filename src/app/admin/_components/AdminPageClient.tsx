"use client";

import { useState } from "react";
import { LoginForm } from "./LoginForm";
import { Dashboard } from "./Dashboard";

export function AdminPageClient() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  if (!isAuthenticated) {
    return <LoginForm onSuccess={() => setIsAuthenticated(true)} />;
  }

  return <Dashboard />;
}
