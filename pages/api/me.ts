import { validateRoute } from "../../lib/auth";

export default validateRoute((_req, res, user) => {
  return res.json(user);
});
