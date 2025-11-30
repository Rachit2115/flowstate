export interface User {
  id: string
  name: string
  email: string
  password: string
  createdAt: string
}

export interface AuthState {
  user: User | null
  isAuthenticated: boolean
}

// Simple in-memory storage for demo purposes
let users: User[] = []
let currentUser: User | null = null
let isClient = false

// Check if we're on the client side
const checkIsClient = () => {
  if (typeof window !== 'undefined' && !isClient) {
    isClient = true
  }
  return isClient
}

// Safe localStorage operations
const safeLocalStorage = {
  getItem: (key: string): string | null => {
    if (checkIsClient()) {
      return localStorage.getItem(key)
    }
    return null
  },
  setItem: (key: string, value: string): void => {
    if (checkIsClient()) {
      localStorage.setItem(key, value)
    }
  },
  removeItem: (key: string): void => {
    if (checkIsClient()) {
      localStorage.removeItem(key)
    }
  }
}

export const auth = {
  // Sign up a new user
  signUp: (name: string, email: string, password: string): { success: boolean; error?: string } => {
    // Check if user already exists
    if (users.find(user => user.email === email)) {
      return { success: false, error: "User with this email already exists" }
    }

    // Create new user
    const newUser: User = {
      id: Date.now().toString(),
      name,
      email,
      password, // In production, this should be hashed
      createdAt: new Date().toISOString()
    }

    users.push(newUser)
    currentUser = newUser
    
    // Store in localStorage for persistence
    safeLocalStorage.setItem('flowstate_users', JSON.stringify(users))
    safeLocalStorage.setItem('flowstate_current_user', JSON.stringify(currentUser))

    return { success: true }
  },

  // Sign in existing user
  signIn: (email: string, password: string): { success: boolean; error?: string } => {
    const user = users.find(user => user.email === email && user.password === password)
    
    if (!user) {
      return { success: false, error: "Invalid email or password" }
    }

    currentUser = user
    safeLocalStorage.setItem('flowstate_current_user', JSON.stringify(currentUser))

    return { success: true }
  },

  // Sign out current user
  signOut: (): void => {
    currentUser = null
    safeLocalStorage.removeItem('flowstate_current_user')
  },

  // Get current user
  getCurrentUser: (): User | null => {
    if (currentUser) {
      return currentUser
    }

    // Try to get from localStorage (only on client)
    const stored = safeLocalStorage.getItem('flowstate_current_user')
    if (stored) {
      currentUser = JSON.parse(stored)
      return currentUser
    }

    return null
  },

  // Check if user is authenticated
  isAuthenticated: (): boolean => {
    return !!auth.getCurrentUser()
  },

  // Initialize auth from localStorage (only on client)
  initialize: (): void => {
    if (!checkIsClient()) {
      return // Don't run on server
    }

    const storedUsers = safeLocalStorage.getItem('flowstate_users')
    if (storedUsers) {
      users = JSON.parse(storedUsers)
    }

    const storedUser = safeLocalStorage.getItem('flowstate_current_user')
    if (storedUser) {
      currentUser = JSON.parse(storedUser)
    }
  }
}
