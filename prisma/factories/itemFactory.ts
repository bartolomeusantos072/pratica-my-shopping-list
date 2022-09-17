import { faker } from '@faker-js/faker';

export default async function itemFactory() {
  return {
    title: faker.lorem.word(),
    url:  faker.internet.url(),
    description:  faker.lorem.paragraph(1),
    amount: parseInt(faker.finance.amount() )
  };
}

