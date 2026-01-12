
import bcrypt from "bcryptjs";

export const register = async (req, res) => {
  const { password } = req.body;
  const hashed = await bcrypt.hash(password, 10);
  res.json({ success: true, password: hashed });
};
