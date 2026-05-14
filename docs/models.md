# Models do banco

Hoje o projeto tinha apenas a model `Gastos` no Prisma porque a area de `usuarios` ainda estava implementada em memoria, usando `UsersProvider` e `src/app/data/users.ts` como lista fixa local.

Isso foi corrigido adicionando a model `Usuario` no arquivo `prisma/schema.prisma`, com os campos:

- `id`
- `name`
- `email`
- `cargo`
- `salary`
- `createdAt`
- `updatedAt`

As rotas de `usuarios` agora leem e gravam direto no banco com Prisma, assim como ja acontecia com `gastos`.

## Onde olhar no projeto

- `prisma/schema.prisma`: definicao das models
- `prisma/migrations/20260513153000_add_usuario_model/migration.sql`: criacao da tabela `Usuario`
- `src/app/data/users.ts`: consultas de usuarios no banco
- `src/app/(unprotected)/usuarios/create/page.tsx`: criacao de usuario
- `src/app/(unprotected)/usuarios/[id]/user-details-content.tsx`: detalhe do usuario

## Como aplicar

1. Rodar `npx prisma migrate dev`
2. Rodar `npx prisma generate` se necessario
3. Subir a aplicacao com `npm run dev`
