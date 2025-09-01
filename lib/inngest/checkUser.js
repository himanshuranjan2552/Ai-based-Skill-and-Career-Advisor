import { currentUser } from "@clerk/nextjs/server";
import { db } from "../prisma";

export const checkUser = async () => {
  if (!user) {
    throw new Error("User not found");
  }

  try {
    const loggedInUser = await db.user.findUnique({
      where: { clerkId: currentUser.id },
    });

    if (loggedInUser) {
      return loggedInUser;
    }

    const name = `${user.firstName} ${user.lastName}`;
    const newUser = await db.user.create({
      data: {
        clerkId: user.id,
        email: user.emailAddress[0].emailAddress,
        name,
      },
    });

    return newUser;
  } catch (error) {}

  return user;
};
