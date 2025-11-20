exports.validateLoginInput = (username, password) => {
    if (!username || !password) {
      return {
        valid: false,
        message: "Username and password are required",
      };
    }
  
    if (username.length < 3) {
      return {
        valid: false,
        message: "Username must be at least 3 characters",
      };
    }
  
    if (password.length < 4) {
      return {
        valid: false,
        message: "Password must be at least 4 characters",
      };
    }
  
    return { valid: true };
  };
  