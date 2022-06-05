export const AuthErrors: { [key: string]: string } = {
  'auth/email-already-exists':
    'Otro usuario ya está utilizando el correo electrónico proporcionado. Cada usuario debe tener un correo electrónico único.',
  'auth/invalid-email':
    'El valor que se proporcionó para la propiedad del usuario email no es válido.',
  'auth/user-not-found': 'Usuario no encontrado',
  'auth/wrong-password': 'Contraseña Incorrecta',
  'auth/popup-closed-by-user': 'Se canceló el inicio de sesión',
  'auth/weak-password': 'La contraseña debe ser de al menos 6 caracteres',
  'auth/email-already-in-use': 'El email ya se encuentra registrado',
};
