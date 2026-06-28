export const isValidEmail = (email) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

export const isStrongPassword = (password) =>
  // at least 8 chars, one uppercase, one number
  /^(?=.*[A-Z])(?=.*\d).{8,}$/.test(password);

export const validateLoginForm = ({ email, password }) => {
  const errors = {};
  if (!email) errors.email = "Email is required";
  else if (!isValidEmail(email)) errors.email = "Enter a valid email";

  if (!password) errors.password = "Password is required";

  return errors;
};

export const validateSignupForm = ({ name, email, password, confirmPassword }) => {
  const errors = {};
  if (!name) errors.name = "Name is required";

  if (!email) errors.email = "Email is required";
  else if (!isValidEmail(email)) errors.email = "Enter a valid email";

  if (!password) errors.password = "Password is required";
  else if (!isStrongPassword(password))
    errors.password = "Password needs 8+ chars, 1 uppercase, 1 number";

  if (password !== confirmPassword)
    errors.confirmPassword = "Passwords do not match";

  return errors;
};
