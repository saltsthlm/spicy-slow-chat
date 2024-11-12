"use server";

import { revalidatePath } from "next/cache";

export async function postMessageAction(formData: FormData) {
  const message = formData.get("message");
  await chatFeature.service.postMessage(message);
  revalidatePath("/");
}
