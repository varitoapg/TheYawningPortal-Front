import { rest } from "msw";
import userRoutes from "../routes/userRoute";

const baseUrl = process.env.REACT_APP_API_URL;
const { registerRoute, usersRoute } = userRoutes;

export const handlers = [
  rest.post(
    `${baseUrl}${usersRoute}${registerRoute}`,
    async (req, res, ctx) => {
      const { username } = await req.json();

      if (username === "AdminRepetad") {
        return res(ctx.status(409), ctx.json({}));
      }

      return res(ctx.status(201), ctx.json({}));
    }
  ),
];
