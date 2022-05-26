import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/client";
import { ObjectId } from "mongodb";

import { connectToDatabase } from "../../../database/db";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const database = await connectToDatabase();

  if (req.method === "PUT") {
    const { id } = req.query;
    const {
      level,
      currentExperience,
      challengesCompleted,
      accumulatedExperience,
    } = req.body;

    await database.collection("users").updateOne(
      { _id: new ObjectId(id as string) },
      {
        $set: {
          level,
          currentExperience,
          challengesCompleted,
          accumulatedExperience,
        },
      }
    );

    return res.json(true);
  } else {
    const session = await getSession({ req });

    if (!session) return res.status(401);

    const user = await database
      .collection("users")
      .findOne({ _id: new ObjectId(session.id) });

    return res.json(user);
  }
};
