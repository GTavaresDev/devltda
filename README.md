Este é um projeto Next.js inicializado com [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Começando

Primeiro, execute o servidor de desenvolvimento:

```bash
npm run dev
# ou
yarn dev
# ou
pnpm dev
# ou
bun dev
```

Abra [http://localhost:3000](http://localhost:3000) no seu navegador para ver o resultado.

Você pode começar a editar a página modificando `app/page.tsx`. A página será atualizada automaticamente conforme você edita o arquivo.

Este projeto usa [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) para otimizar e carregar automaticamente a fonte [Geist](https://vercel.com/font), uma nova família tipográfica da Vercel.

## Saiba mais

Este projeto é um sistema desenvolvido para gerenciar e centralizar as principais informações de qualquer empresa, criado exclusivamente para fins de estudo e aprimoramento das habilidades com Next.js.

## Banco de Dados com Prisma

Este projeto usa Prisma com SQLite.

- Schema: `prisma/schema.prisma`
- Migrations: `prisma/migrations`
- Prisma Client gerado em: `src/generated/prisma`
- URL do banco: variável `DATABASE_URL` no `.env`

### 1) Criar uma nova entidade (model)

Abra o arquivo `prisma/schema.prisma` e adicione um novo model.

Exemplo:

```prisma
model Salario {
	id         Int      @id @default(autoincrement())
	usuarioId  Int
	valor      Int
	referencia String
	createdAt  DateTime @default(now())
	updatedAt  DateTime @updatedAt
}
```

### 2) Gerar e aplicar migration

Depois de salvar o schema, rode na raiz do projeto:

```bash
npx prisma migrate dev --name add_salario
```

Esse comando:

1. Cria uma migration em `prisma/migrations`
2. Aplica as alterações no banco local (SQLite)
3. Regenera o Prisma Client

### 3) Atualizar dados (create/update)

O projeto já possui o client configurado em `src/db.ts`.

Exemplo de uso:

```ts
import { db } from "@/db";

// Criar registro
await db.salario.create({
	data: {
		usuarioId: 1,
		valor: 5000,
		referencia: "2026-05",
	},
});

// Atualizar registro
await db.salario.update({
	where: { id: 1 },
	data: { valor: 5500 },
});
```

### 4) Validar dados no banco

Para abrir interface visual do banco:

```bash
npx prisma studio
```

### 5) Comandos úteis Prisma

Desenvolvimento (cria e aplica migration):

```bash
npx prisma migrate dev --name nome_da_mudanca
```

Somente regenerar o client:

```bash
npm run generate
```

Produção (aplicar migrations já criadas):

```bash
npx prisma migrate deploy
```

### Observação sobre scripts

Atualmente o `package.json` já possui:

- `dev`
- `build`
- `start`
- `generate`

Se quiser, você pode adicionar scripts para facilitar o fluxo Prisma:

```json
{
	"scripts": {
		"migrate:dev": "prisma migrate dev",
		"migrate:deploy": "prisma migrate deploy",
		"studio": "prisma studio"
	}
}
```
