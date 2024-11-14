import { chatFeature } from "@/features";
import { MessageInsert } from "@/features/chat/types";
import { faker } from "@faker-js/faker";

export function seedMessages(amountOfUsers: number) {
  const unsortedMessages = generateMessages(amountOfUsers);
  const sortedMessages = sortMessages(unsortedMessages);
  sortedMessages.forEach(async (message) => {
    await chatFeature.service.seedMessagesTable(message);
  });
}

function generateMessages(amountOfUsers: number) {
  const unsortedMessages: MessageInsert[] = [];
  Array.from({ length: amountOfUsers }).forEach(() => {
    const username = faker.person.firstName();
    const amountOfMessages = Math.ceil(Math.random() * 4);
    const startDate = new Date("2024-10-01");
    const endDate = new Date();
    Array.from({ length: amountOfMessages }).map(() => {
      const content = `${faker.word.noun()} ${faker.word.verb()} ${faker.word.adverb()}`;

      unsortedMessages.push({
        username,
        content,
        timestamp: BigInt(
          faker.date.between({ from: startDate, to: endDate }).getTime()
        ),
      });
    });
  });
  return unsortedMessages;
}

function sortMessages(unsortedMessages: MessageInsert[]) {
  return unsortedMessages.sort((a, b) => {
    return Number(b.timestamp) - Number(a.timestamp);
  });
}

seedMessages(5)