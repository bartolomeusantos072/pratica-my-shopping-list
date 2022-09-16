
import { prisma } from '../src/database';
import productFactory from './factories/productsFactory';

async function main() {
    const product = productFactory();
    
    await prisma.items.upsert({
      where: { name: product.name  },
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
  