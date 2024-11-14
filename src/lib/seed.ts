import { faker } from "@faker-js/faker";
export function seedMessages(amountOfUsers: number) {
  const usersArray = Array.from({ length: amountOfUsers }).map(() => {
    const username = faker.person.firstName();
    const amountOfMessages = Math.ceil(Math.random() * 4);
    const messages = Array.from({ length: amountOfMessages }).map(() => {
      const content = `${faker.word.noun()} ${faker.word.verb()} ${faker.word.adverb()}`;
      return {
        content,
        timestamp: faker.date.anytime().getTime(),
      };
    });
    return { username, messages };
  });
  console.log(usersArray);
}

seedMessages(5);
