import React from "react";
import { Navigate } from "react-router-dom";

/**
 * עוטף קומפוננטה ומאפשר גישה רק למשתמש עם תפקיד מאושר.
 * use: <RequireRole user={user} allow={["إدارة"]}><AdminPanel/></RequireRole>
 */
export default function RequireRole({ user, allow = [], children }) {
  if (!user) return <Navigate to="/" replace />;
  if (!allow.includes(user.role)) return <Navigate to="/" replace />;
  return children;
}
