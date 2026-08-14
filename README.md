# Invent Money — Feedback da Comunidade

Landing page simples que exibe os feedbacks dos primeiros membros da comunidade.

Stack: **Next.js 14 (App Router) + Tailwind CSS + TypeScript**.

## Rodar localmente

```bash
npm install
npm run dev
```

Abra http://localhost:3000

## Editar os feedbacks

Os depoimentos ficam em `data/feedback.ts`. Cada item segue o formato:

```ts
{ name: "Nome", role: "Papel opcional", quote: "Texto do feedback" }
```

Quando o CSV chegar, converto ele para esse formato e substituo o array.

## Deploy no Vercel (passo a passo)

1. Crie o repo no GitHub — https://github.com/new
   - Nome sugerido: `invent-money-feedback`
   - Deixe **sem** README/gitignore/license (já existem aqui)
2. Copie a URL do repo e rode aqui na pasta:
   ```bash
   git remote add origin https://github.com/SEU_USUARIO/invent-money-feedback.git
   git branch -M main
   git push -u origin main
   ```
3. Vá em https://vercel.com/new → **Import Git Repository** → selecione o repo.
4. Framework é detectado como **Next.js** automaticamente. Só clicar em **Deploy**.

Cada `git push` na branch `main` faz redeploy automático.
