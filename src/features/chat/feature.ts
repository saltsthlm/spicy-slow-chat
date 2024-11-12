import { createServiceChat } from "./service";

export function createFeature() {
  const service = createServiceChat();
  return {
    service,
  };
}
