import { faker } from "@faker-js/faker";
export function seedMessages(numberOfMessages: number) {
  Array.from({ length: numberOfMessages })
    .map(() => {
      const content = `${faker.word.noun} ${faker.word.verb} ${faker.word.adverb}`;
      return {
        username: faker.person.firstName(),
        content,
        timestamp:
          BigInt(Date.now()) - BigInt(Math.floor(Math.random() * 500000)),
      };
    })
    .forEach((message) => {
      console.log(message);
    });
}

seedMessages(15);
