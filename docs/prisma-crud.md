# Como criar, alterar e excluir no banco

Este projeto usa Prisma com SQLite.

## Criar uma nova model

1. Edite `prisma/schema.prisma`
2. Adicione a nova model
3. Gere a migration:

```bash
npx prisma migrate dev --name nome_da_migration
```

4. Gere o client:

```bash
npx prisma generate
```

## Alterar uma model existente

Exemplo: adicionar, renomear ou mudar tipo de campo.

1. Edite a model em `prisma/schema.prisma`
2. Gere uma nova migration:

```bash
npx prisma migrate dev --name descricao_da_alteracao
```

3. Revise o SQL em `prisma/migrations/.../migration.sql`

## Excluir uma model

1. Remova a model de `prisma/schema.prisma`
2. Gere a migration:

```bash
npx prisma migrate dev --name remove_nome_model
```

3. Confirme no SQL que a tabela correta sera removida

## Exemplos de uso no codigo

Criar registro:

```ts
await db.usuario.create({
  data: {
    name: "Maria",
    email: "maria@devltda.com",
    cargo: "Designer",
    salary: 4500,
  },
});
```

Alterar registro:

```ts
await db.usuario.update({
  where: { id: 1 },
  data: {
    cargo: "Senior Designer",
    salary: 6200,
  },
});
```

Excluir registro:

```ts
await db.usuario.delete({
  where: { id: 1 },
});
```

## Observacao

Neste projeto, `gastos` e `usuarios` devem seguir o mesmo padrao: schema no Prisma, migration versionada e acesso ao banco via `src/db.ts`.
