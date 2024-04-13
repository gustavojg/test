import type { NextApiRequest, NextApiResponse } from "next";

type User = {
  id: number;
  name: string;
  lastName: string;
  image: string;
};

export default function getUser(
  req: NextApiRequest,
  res: NextApiResponse<User>
) {
  const { id } = req.query;
  res.status(200).json({
    id: Number(id),
    name: "Jeremy",
    lastName: "Robson",
    image: "/images/users/image-jeremy.png",
  });
}
