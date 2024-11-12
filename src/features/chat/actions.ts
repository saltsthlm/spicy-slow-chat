"use server";

import { revalidatePath } from "next/cache";
import { chatFeature } from "./instance";

export async function postMessageAction(formData: FormData) {
  const message = formData.get("message");
  await chatFeature.service.postMessage({ content: message!.toString() });
  revalidatePath("/");
}
