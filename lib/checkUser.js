<<<<<<< HEAD:lib/inngest/checkUser.js
// import { currentUser } from "@clerk/nextjs/server";
// import { db } from "../prisma";

// export const checkUser = async () => {
//   if (!user) {
//     throw new Error("User not found");
//   }

//   try {
//     const loggedInUser = await db.user.findUnique({
//       where: { clerkId: currentUser.id },
//     });
=======
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
>>>>>>> a0465c547eccbf70ab28c3b10c056a7842ba2df3:lib/checkUser.js

//     if (loggedInUser) {
//       return loggedInUser;
//     }

<<<<<<< HEAD:lib/inngest/checkUser.js
//     const name = `${user.firstName} ${user.lastName}`;
//     const newUser = await db.user.create({
//       data: {
//         clerkId: user.id,
//         email: user.emailAddress[0].emailAddress,
//         name,
//       },
//     });

//     return newUser;
//   } catch (error) {}

//   return user;
// };
=======
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
    throw Error("Error checking or creating user: " + error.message);
  }
};
>>>>>>> a0465c547eccbf70ab28c3b10c056a7842ba2df3:lib/checkUser.js
