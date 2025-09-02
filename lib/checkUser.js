import { currentUser } from "@clerk/nextjs/server";
import { db } from "./prisma";

export const checkUser = async () => {
  const user = await currentUser();

  if (!user) {
    return null;
  }

  try {
    const loggedInUser = await db.user.findUnique({
      where: {
        clerkUserID: user.id,
      },
    });

    if (loggedInUser) {
      return loggedInUser;
    }

    const name = `${user.firstName} ${user.lastName}`;

    const newUser = await db.user.create({
      data: {
        clerkUserID: user.id,
        email: user.emailAddresses[0]?.emailAddress,
        name,
      },
    });
    return newUser;
  } catch (error) {
    throw new Error("Error checking or creating user: " + error.message);
  }
};
