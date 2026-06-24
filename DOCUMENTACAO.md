# Documentação técnica — Big Plotagens

## 1. Objetivo

O projeto funciona como site institucional, portfólio e cartão de visita digital. Ele apresenta a marca, o profissional, os serviços, um trabalho recente, catálogos e um pedido de orçamento pelo WhatsApp.

## 2. Tecnologia utilizada

O site usa apenas:

- HTML semântico;
- CSS responsivo;
- JavaScript puro;
- imagens locais otimizadas;
- Netlify para hospedagem e cabeçalhos de segurança.

Não há framework, banco de dados, servidor próprio, cookies ou bibliotecas externas. Isso reduz peso, manutenção e superfície de ataque.

## 3. Seções do `index.html`

### Cabeçalho

Contém logo, menu e botão de orçamento. Em telas menores, o menu vira um botão do tipo hambúrguer.

### Hero

É a primeira área visual. Apresenta a proposta da empresa e os principais botões de ação.

### Sobre

Apresenta Felipe, os filhos e o reconhecimento profissional. O carrossel usa duas fotos locais:

- `assets/felipe-theo.webp`
- `assets/felipe-celine.webp`

A identificação pública foi reduzida para `Felipe`.

### Serviços

Lista as principais soluções oferecidas. Para adicionar um serviço, duplique um elemento com a classe `service-card` e altere título e descrição.

### Trabalhos e catálogos

A primeira parte exibe o envelopamento automotivo. A segunda direciona para catálogos externos.

### Processo

Explica as etapas entre o primeiro contato e a execução.

### Contato

O formulário não envia dados a um servidor. O JavaScript monta uma mensagem e abre o WhatsApp.

### Rodapé

Contém navegação, contatos da Big Plotagens e autoria do desenvolvimento.

## 4. Funcionamento do `script.js`

### Cabeçalho ao rolar

Adiciona a classe `scrolled` depois que a página começa a descer.

### Menu móvel

Abre e fecha o menu, fecha ao selecionar um link, clicar fora ou pressionar `Esc`.

### Animações de entrada

Usa `IntersectionObserver`, recurso nativo do navegador. Usuários que ativam “reduzir movimento” não recebem animações prolongadas.

### Carrossel

- troca a foto a cada 4,5 segundos;
- pausa no mouse, teclado ou quando a aba fica inativa;
- possui setas e indicadores;
- mantém somente uma foto visível por vez;
- não usa biblioteca externa.

### Formulário

Limita o tamanho dos textos antes de montar a URL do WhatsApp. Não utiliza `innerHTML`, armazenamento local ou requisições externas.

## 5. Responsividade

Os principais pontos de quebra estão no final de `styles.css`:

- até `1050px`: ajustes para notebook e tablet horizontal;
- até `860px`: layout passa para uma coluna e ativa menu móvel;
- até `580px`: ajustes para celular;
- até `380px`: proteção para aparelhos muito estreitos.

A legenda da seção Sobre não é mais posicionada para fora da imagem. Ela usa largura controlada e fluxo normal, evitando o texto vertical visto anteriormente.

## 6. Segurança

O arquivo `netlify.toml` aplica:

- Content Security Policy;
- bloqueio de incorporação em iframe;
- bloqueio de detecção incorreta de conteúdo;
- política restritiva de permissões;
- política de referência;
- HTTPS estrito;
- proteção de recursos entre origens.

Esses cabeçalhos funcionam quando o site é publicado no Netlify. No GitHub Pages, algumas políticas precisam ser configuradas por outro serviço ou por meta tags, com limitações.

## 7. Cache e atualizações

- HTML: sempre revalidado;
- CSS e JavaScript: cache curto;
- imagens: cache de uma semana.

Não foi usado `immutable`, pois as imagens podem ser substituídas mantendo o mesmo nome.

## 8. Otimização

- todas as imagens principais estão em WebP;
- não há fontes externas;
- não há bibliotecas JavaScript;
- imagens abaixo da primeira tela usam carregamento tardio;
- o script usa `defer`;
- o pacote inteiro permanece pequeno para um portfólio com fotografias.

## 9. Como trocar uma imagem

1. Use uma imagem vertical, preferencialmente em proporção 3:4.
2. Converta para WebP.
3. Substitua o arquivo dentro de `assets/` mantendo o mesmo nome, ou altere o caminho no HTML.
4. Faça commit e push.

Exemplo com ImageMagick:

```bash
magick foto.jpg -resize "1200x1600>" -quality 86 assets/nova-foto.webp
```

## 10. Como testar localmente

```bash
python3 -m http.server 8000
```

Abra no navegador:

```text
http://localhost:8000
```

Use o modo responsivo do navegador para testar 360 px, 390 px, 768 px e desktop.
