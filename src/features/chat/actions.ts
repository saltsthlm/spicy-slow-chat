"use server";

import { revalidatePath } from "next/cache";
import { chatFeature } from "./instance";

export async function postMessageAction(formData: FormData) {
  const message = formData.get("message") as string;
  if (!message) {
    return;
  }
  await chatFeature.service.postMessage(message, "John Wick");
  revalidatePath("/");
}

export async function getAllMessagesAction() {
  await chatFeature.service.getAllMessages();
  revalidatePath("/");
}
