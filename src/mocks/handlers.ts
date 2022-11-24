import { rest } from "msw";
import userRoutes from "../routes/userRoute";
import testProfile from "./testProfile";

const baseUrl = process.env.REACT_APP_API_URL;
const { registerRoute, usersRoute, loginRoute } = userRoutes;

export const handlers = [
  rest.post(
    `${baseUrl}${usersRoute}${registerRoute}`,
    async (req, res, ctx) => {
      const { username } = await req.json();

      if (username === "AdminRepetad") {
        return res(
          ctx.status(409),
          ctx.json({ error: "username already exists" })
        );
      }

      return res(ctx.status(201), ctx.json({}));
    }
  ),

  rest.post(`${baseUrl}${usersRoute}${loginRoute}`, (req, res, ctx) => {
    return res.once(ctx.status(401), ctx.json({ error: "Wrong credentials" }));
  }),

  rest.post(`${baseUrl}${usersRoute}${loginRoute}`, async (req, res, ctx) => {
    return res.once(ctx.status(201), ctx.json({}));
  }),

  rest.post(`${baseUrl}${usersRoute}${loginRoute}`, async (req, res, ctx) => {
    return res(ctx.status(201), ctx.json({ token: testProfile.token }));
  }),
];
