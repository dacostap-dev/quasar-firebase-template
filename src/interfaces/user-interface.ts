export interface authUser {
  email: string | null;
  photoURL: string | null;
}

export interface authState {
  authUser: authUser | null;
}
