
import { prisma } from '../src/database';
import itemFactory from './factories/itemFactory';

async function main() {
  const product =await itemFactory();

 

   await prisma.items.upsert({
     where: { title:product.title },
     update: {},
      create: product
    });
    
  
}
  
 
main()
  .catch(e => {
    console.log(e);
    process.exit(1);
  })
  .finally(() => {
    prisma.$disconnect();
  });
