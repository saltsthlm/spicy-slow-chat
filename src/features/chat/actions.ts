"use server";

import { revalidatePath } from "next/cache";
import { createFeature } from "./feature";
const chatFeature = createFeature();

export async function postMessageAction(formData: FormData) {
  const message = formData.get("message");
  await chatFeature.service.postMessage(message);
  revalidatePath("/");
}
