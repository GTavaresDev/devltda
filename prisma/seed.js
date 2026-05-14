const { PrismaClient } = require("../src/generated/prisma");

const prisma = new PrismaClient();

const defaultStatuses = [
  {
    title: "Pedido recebido",
    subTitle: "Aguardando separacao",
    content: "A transportadora recebeu os dados iniciais do pedido.",
  },
  {
    title: "Em separacao",
    subTitle: "Preparando envio",
    content: "O pedido esta sendo separado e preparado para despacho.",
  },
  {
    title: "Em transito",
    subTitle: "Saiu para entrega",
    content: "O pedido esta em deslocamento para o destinatario.",
  },
  {
    title: "Entregue",
    subTitle: "Entrega concluida",
    content: "O pedido foi entregue com sucesso ao destinatario.",
  },
];

async function main() {
  for (const status of defaultStatuses) {
    const existingStatus = await prisma.status.findFirst({
      where: {
        title: status.title,
        subTitle: status.subTitle,
      },
      select: { id: true },
    });

    if (!existingStatus) {
      await prisma.status.create({
        data: status,
      });
    }
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (error) => {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
  });
