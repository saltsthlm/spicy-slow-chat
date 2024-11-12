export function creatRepository() {
  // eslint-disable-next-line prefer-const
  let messages = [];
  async function getMessages() {
    return messages;
  }
  return {
    getMessages,
  };
}
