import { faker } from "@faker-js/faker";
export function seedMessages(numberOfMessages: number) {
  Array.from({ length: numberOfMessages }).map(() => {
    return faker.word.words(20);
  }).forEach((message => {
    console.log(message)
  }))

}


seedMessages(15)