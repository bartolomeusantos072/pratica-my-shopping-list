import { faker } from '@faker-js/faker';

export default async function productFactory() {
  return {
    name: faker.commerce.product(),
    price: faker.commerce.price()
  };
}
