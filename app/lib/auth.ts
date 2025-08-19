
// lib/auth.ts
export function isAuthenticated(): boolean {
  // Mock check (replace with cookie/session check)
  if (typeof window !== "undefined") {
    return !!localStorage.getItem("auth-token");
  }
  return false;
}

export function login(token: string) {
  localStorage.setItem("auth-token", token);
}

export function logout() {
  localStorage.removeItem("auth-token");
}
