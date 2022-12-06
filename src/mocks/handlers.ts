import { rest } from "msw";
import characterRoutes from "../routes/charactersRoute";
import userRoutes from "../routes/userRoute";
import { testListCharacters } from "./testCharacter";
import testProfile from "./testProfile";

const baseUrl = process.env.REACT_APP_API_URL;
const { registerRoute, usersRoute, loginRoute } = userRoutes;
const { charactersRoute, deleteRoute, createRoute } = characterRoutes;
const { id } = testListCharacters[0];
const { id: idCharacter } = testListCharacters[1];

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

  rest.get(`${baseUrl}${charactersRoute}`, async (req, res, ctx) => {
    return res.once(
      ctx.status(201),
      ctx.json({ allCharacters: testListCharacters, count: 3 })
    );
  }),

  rest.get(`${baseUrl}${charactersRoute}`, async (req, res, ctx) => {
    return res.once(
      ctx.status(201),
      ctx.json({ allCharacters: testListCharacters, count: 3 })
    );
  }),

  rest.get(`${baseUrl}${charactersRoute}`, async (req, res, ctx) => {
    return res.once(
      ctx.status(500),
      ctx.json({ error: "Something goes wrong. Try again" })
    );
  }),

  rest.delete(
    `${baseUrl}${charactersRoute}${deleteRoute}/${id}`,
    async (req, res, ctx) => {
      return res.once(ctx.status(200));
    }
  ),

  rest.delete(
    `${baseUrl}${charactersRoute}${deleteRoute}/${id}`,
    async (req, res, ctx) => {
      return res.once(ctx.status(500), ctx.json({ error: "Fatal error" }));
    }
  ),

  rest.post(
    `${baseUrl}${charactersRoute}${createRoute}`,
    async (req, res, ctx) => {
      return res.once(
        ctx.status(200),
        ctx.json({ text: "Character created!" })
      );
    }
  ),

  rest.post(
    `${baseUrl}${charactersRoute}${createRoute}`,
    async (req, res, ctx) => {
      return res.once(
        ctx.status(500),
        ctx.json({ error: "Character cannot be created!" })
      );
    }
  ),

  rest.get(
    `${baseUrl}${charactersRoute}/${idCharacter}`,
    async (req, res, ctx) => {
      return res.once(ctx.status(200), ctx.json(testListCharacters[1]));
    }
  ),
  rest.get(
    `${baseUrl}${charactersRoute}/${idCharacter}`,
    async (req, res, ctx) => {
      return res.once(
        ctx.status(500),
        ctx.json({ error: "Character not found!" })
      );
    }
  ),
];
