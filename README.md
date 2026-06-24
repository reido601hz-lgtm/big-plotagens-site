# Big Plotagens — versão definitiva

Site institucional estático, responsivo e otimizado para publicação no Netlify ou GitHub Pages.

## Estrutura

- `index.html`: conteúdo, SEO e estrutura das seções.
- `styles.css`: identidade visual, layout e responsividade.
- `script.js`: menu móvel, animações, carrossel e formulário do WhatsApp.
- `netlify.toml`: publicação, cache e cabeçalhos de segurança.
- `assets/`: logo, fotos, portfólio e capas dos catálogos.
- `DOCUMENTACAO.md`: explicação detalhada do funcionamento.
- `CHECKLIST-PUBLICACAO.md`: conferência antes e depois de publicar.

## Atualizações desta versão

- Correção definitiva da seção “Sobre” no celular.
- Carrossel acessível com fotos de Theo Felipe e Celine.
- Nome público reduzido para apenas `Felipe`.
- Controles manuais, troca automática e respeito à preferência de reduzir movimento.
- Cabeçalhos de segurança configurados no Netlify.
- Cache revisado para evitar versões antigas após atualizações.
- Código comentado e documentação de manutenção.
- Imagens em WebP e JavaScript sem bibliotecas externas.

## Publicação pelo GitHub e Netlify

Dentro da pasta do projeto:

```bash
git add .
git commit -m "Publica versão definitiva do site"
git push
```

O Netlify atualizará o site automaticamente quando estiver conectado ao repositório.

## Alterações rápidas

- WhatsApp da Big Plotagens: pesquise por `5527999372568`.
- Instagram da Big Plotagens: pesquise por `bigplotagens`.
- Crédito do desenvolvedor: procure por `developer-credit` no `index.html`.
- Textos da seção Sobre: procure pelo atributo `id="sobre"`.

## Privacidade

O site não possui banco de dados, login, rastreamento ou formulário enviado a servidor. O formulário apenas monta uma mensagem no navegador e abre o WhatsApp. As fotos e nomes de menores devem ser publicados somente com autorização do responsável.
