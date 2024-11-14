"use server";

import { revalidatePath } from "next/cache";
import { chatFeature } from "./instance";
import { getCurrentUserName } from "./service";

export async function postMessageAction(formData: FormData) {
  const message = formData.get("message") as string;
  if (!message) {
    return;
  }
  await chatFeature.service.postMessage(message, getCurrentUserName());
  revalidatePath("/");
}

export async function fetchAction() {
  await chatFeature.service.storeFetch(getCurrentUserName());
  revalidatePath("/");
}
