import { User } from "@prisma/client";
import jwt from "jsonwebtoken";
import { NextApiRequest, NextApiResponse } from "next";
import prisma from "./prisma";

interface tokenInterface {
  id: number;
}

export function validateRoute(
  handler: (req: NextApiRequest, res: NextApiResponse<any>, user: User) => any
) {
  return async function (req: NextApiRequest, res: NextApiResponse) {
    const token = req.cookies.SPOTIFY_CLONE_ACCESS_TOKEN;
    if (token) {
      let user;

      try {
        const { id } = jwt.verify(
          token,
          process.env.JWT_SECRET
        ) as tokenInterface;

        user = await prisma.user.findUnique({
          where: { id },
        });

        if (!user) {
          throw new Error("User not found");
        }
      } catch (err) {
        res.status(401);
        res.json({ error: "Not authorized" });
        return;
      }

      return handler(req, res, user);
    }

    res.status(401);
    res.json({ error: "Not authorized" });
  };
}
