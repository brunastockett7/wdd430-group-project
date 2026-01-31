"use client";

import React, { createContext, useContext, useEffect, useMemo, useState } from "react";

export type MembershipPlan = "silver" | "gold" | null;

export type User = {
  id: string;
  name: string;
  email: string;
  membership: MembershipPlan;
};

type StoredUser = User & { password: string };

type AuthContextType = {
  user: User | null;
  isReady: boolean;
  register: (args: { name: string; email: string; password: string; plan?: "silver" | "gold" }) => void;
  login: (args: { email: string; password: string }) => void;
  logout: () => void;
  setMembership: (plan: "silver" | "gold") => void;
};

const USERS_KEY = "hh_users_v1";
const SESSION_KEY = "hh_session_v1";

const AuthContext = createContext<AuthContextType | null>(null);

function safeParse<T>(value: string | null, fallback: T): T {
  try {
    if (!value) return fallback;
    return JSON.parse(value) as T;
  } catch {
    return fallback;
  }
}

function readUsers(): StoredUser[] {
  if (typeof window === "undefined") return [];
  return safeParse<StoredUser[]>(localStorage.getItem(USERS_KEY), []);
}

function writeUsers(users: StoredUser[]) {
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

function readSession(): User | null {
  if (typeof window === "undefined") return null;
  return safeParse<User | null>(localStorage.getItem(SESSION_KEY), null);
}

function writeSession(user: User | null) {
  if (!user) localStorage.removeItem(SESSION_KEY);
  else localStorage.setItem(SESSION_KEY, JSON.stringify(user));
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    setUser(readSession());
    setIsReady(true);
  }, []);

  const register: AuthContextType["register"] = ({ name, email, password, plan }) => {
    const users = readUsers();
    const normalizedEmail = email.trim().toLowerCase();

    const exists = users.some((u) => u.email === normalizedEmail);
    if (exists) throw new Error("An account with this email already exists.");

    const newUser: StoredUser = {
      id: crypto.randomUUID(),
      name: name.trim(),
      email: normalizedEmail,
      password,
      membership: plan ?? null,
    };

    users.push(newUser);
    writeUsers(users);

    const sessionUser: User = {
      id: newUser.id,
      name: newUser.name,
      email: newUser.email,
      membership: newUser.membership,
    };

    writeSession(sessionUser);
    setUser(sessionUser);
  };

  const login: AuthContextType["login"] = ({ email, password }) => {
    const users = readUsers();
    const normalizedEmail = email.trim().toLowerCase();

    const found = users.find((u) => u.email === normalizedEmail);
    if (!found) throw new Error("No account found for that email.");
    if (found.password !== password) throw new Error("Incorrect password.");

    const sessionUser: User = {
      id: found.id,
      name: found.name,
      email: found.email,
      membership: found.membership,
    };

    writeSession(sessionUser);
    setUser(sessionUser);
  };

  const logout = () => {
    writeSession(null);
    setUser(null);
  };

  const setMembership = (plan: "silver" | "gold") => {
    if (!user) throw new Error("You must be logged in to join a plan.");

    const users = readUsers();
    const idx = users.findIndex((u) => u.email === user.email);
    if (idx >= 0) {
      users[idx].membership = plan;
      writeUsers(users);
    }

    const updated: User = { ...user, membership: plan };
    writeSession(updated);
    setUser(updated);
  };

  const value = useMemo(
    () => ({ user, isReady, register, login, logout, setMembership }),
    [user, isReady]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used inside AuthProvider.");
  return ctx;
}
