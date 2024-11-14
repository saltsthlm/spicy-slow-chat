"use server";

import { revalidatePath } from "next/cache";
import { chatFeature } from "./instance";

const USER = "John Wick";
export async function postMessageAction(formData: FormData) {
  const message = formData.get("message") as string;
  if (!message) {
    return;
  }
  await chatFeature.service.postMessage(message, USER);
  revalidatePath("/");
}

export async function fetchAction() {
  await chatFeature.service.storeFetch(USER);
  revalidatePath("/");
}
