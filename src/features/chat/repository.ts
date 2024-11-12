export function createRepository() {
  // eslint-disable-next-line prefer-const
  let messages: Message[] = [];
  async function getMessages() {
    return messages;
  }
  return {
    getMessages,
  };
}

export type Repository = ReturnType<typeof createRepository>;
