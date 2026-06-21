# Site Big Plotagens

Site institucional estático, responsivo e sem mensalidade obrigatória. Pode ser publicado gratuitamente no Netlify ou GitHub Pages.

## Conteúdo já configurado

- Logo e foto de apresentação.
- WhatsApp: `+55 27 99937-2568`.
- Instagram: `@bigplotagens`.
- Linktree e catálogos do Google Drive.
- Formulário que cria a mensagem e abre o WhatsApp, sem servidor e sem banco de dados.
- Layout adaptado para celular, tablet e computador.

## Antes de publicar

1. Confirme com Felipe se a foto com o filho pode ser usada publicamente. Caso não possa, troque o arquivo `assets/felipe-filho.png` por outra foto mantendo o mesmo nome.
2. Revise a lista real de serviços, a região de atendimento, os prazos e as formas de pagamento.
3. Confirme se o número do WhatsApp e os links continuam corretos.
4. Substitua textos genéricos por informações reais assim que Felipe responder ao briefing.
5. Depois de definir o endereço do site, coloque a URL absoluta na tag `og:image` do arquivo `index.html` para melhorar a prévia no WhatsApp.

## Publicação gratuita no Netlify

1. Acesse o Netlify e crie uma conta gratuita.
2. Na área de sites, escolha a opção para adicionar um novo site manualmente.
3. Descompacte o ZIP e arraste a pasta `big-plotagens-site` para a área de publicação.
4. O Netlify criará um endereço gratuito do tipo `nomedosite.netlify.app`.
5. Em configurações do domínio, altere o nome provisório para algo como `big-plotagens` se estiver disponível.

## Publicação gratuita pelo GitHub

1. Crie um repositório público, por exemplo `big-plotagens-site`.
2. Envie todos os arquivos desta pasta para a raiz do repositório.
3. No Netlify, escolha importar um projeto existente do GitHub.
4. Selecione o repositório. Não é necessário comando de build; a pasta de publicação é a raiz (`.`).
5. Cada alteração enviada ao GitHub atualizará o site automaticamente.

## Arquivos principais

- `index.html`: conteúdo e links.
- `styles.css`: cores, layout e responsividade.
- `script.js`: menu, animações e formulário do WhatsApp.
- `assets/`: logo, foto e capas dos catálogos.

## Alterações rápidas

Para trocar o WhatsApp, pesquise no projeto por `5527999372568` e substitua pelo número completo com código do país e DDD, somente números.

Para trocar o Instagram, pesquise por `bigplotagens` e atualize o usuário e os links.
