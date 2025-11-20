const { validateLoginInput } = require("../utils/validate");

const storedUser = {
  username: process.env.ADMIN_USERNAME,
  password: process.env.ADMIN_PASSWORD,
};

exports.login = (req, res) => {
  const { username, password } = req.body;

  const validation = validateLoginInput(username, password);

  if (!validation.valid) {
    return res.status(400).json({
      success: false,
      message: validation.message,
    });
  }

  if (username === storedUser.username && password === storedUser.password) {
    return res.status(200).json({
      success: true,
      message: "Login successful",
      user: {
        username,
        role: "admin",
      },
    });
  }

  return res.status(401).json({
    success: false,
    message: "Invalid username or password",
  });
};
