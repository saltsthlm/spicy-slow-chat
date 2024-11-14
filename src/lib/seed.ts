// import { chatFeature } from "@/features";
import { MessageInsert } from "@/features/chat/types";
import { faker } from "@faker-js/faker";
export function seedMessages(amountOfUsers: number) {
  const unsortedMessages: MessageInsert[] = [];
  Array.from({ length: amountOfUsers }).forEach(() => {
    const username = faker.person.firstName();
    const amountOfMessages = Math.ceil(Math.random() * 4);

    Array.from({ length: amountOfMessages }).map(() => {
      const content = `${faker.word.noun()} ${faker.word.verb()} ${faker.word.adverb()}`;

      unsortedMessages.push({
        username,
        content,
        timestamp: BigInt(faker.date.anytime().getTime()),
      });
    });
  });
}

seedMessages(5);
