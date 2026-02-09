"use server";

import { refresh } from "next/cache";
import { prisma } from "../../../lib/prisma";

export async function createUser() {
  await prisma.user.create({
    data: {
      email: "alice2@prisma.io",
      password: "123456",
    },
  });

  refresh();
}
