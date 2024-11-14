import { chatFeature } from "@/features";
import { faker } from "@faker-js/faker";
export function seedMessages(amountOfUsers: number) {
  Array.from({ length: amountOfUsers }).forEach(() => {
    const username = faker.person.firstName();
    const amountOfMessages = Math.ceil(Math.random() * 4);
    const messages = Array.from({ length: amountOfMessages }).map(() => {
      const content = `${faker.word.noun()} ${faker.word.verb()} ${faker.word.adverb()}`;
      const message = {
        username,
        content,
        timestamp: BigInt(faker.date.anytime().getTime()),
      };
      chatFeature.service.seedMessagesTable(message);
      return { username, content };
    });
    return { username, messages };
  });
}

seedMessages(5);
