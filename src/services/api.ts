// src/services/api.ts
const API_BASE = "http://localhost:8080/api";

export const api = {
  // Products
  async getProducts() {
    const response = await fetch(`${API_BASE}/products`);
    if (!response.ok) throw new Error("Failed to fetch products");
    return response.json();
  },

  async getProduct(id: string) {
    const response = await fetch(`${API_BASE}/products/${id}`);
    if (!response.ok) throw new Error("Failed to fetch product");
    return response.json();
  },

  // Auth
  async login(email: string, password: string) {
    const response = await fetch(`${API_BASE}/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
      credentials: "include",
    });
    if (!response.ok) throw new Error("Login failed");
    return response.json();
  },

  async register(name: string, email: string, password: string) {
    const response = await fetch(`${API_BASE}/auth/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password }),
      credentials: "include",
    });
    if (!response.ok) throw new Error("Registration failed");
    return response.json();
  },

  async getCurrentUser() {
    const response = await fetch(`${API_BASE}/auth/me`, {
      credentials: "include",
    });
    if (!response.ok) throw new Error("Not authenticated");
    return response.json();
  },

  async logout() {
    const response = await fetch(`${API_BASE}/auth/logout`, {
      method: "POST",
      credentials: "include",
    });
    if (!response.ok) throw new Error("Logout failed");
    return response.json();
  }
};