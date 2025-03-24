# README - Refatoração e Qualidade em Desenvolvimento Web: Débito Técnico e Erros Comuns

## Visão Geral

Este projeto tem como objetivo melhorar a estrutura e a organização do código de uma página web, otimizando a experiência do desenvolvedor e a usabilidade da interface. A seguir, são listadas todas as mudanças feitas, as tecnologias utilizadas, e as correções relacionadas à nomenclatura e organização do código.

## Estrutura de Pastas

### Antes:
- Havia várias pastas de scripts (como `scripts`, `scripts2`), com arquivos redundantes e pouco organizados.
- O CSS estava espalhado de maneira inconsistente, com um arquivo `styles.css`, estilo inline no HTML e regras dentro de um bloco `<style>` no próprio HTML.

### Depois:
- A estrutura foi simplificada, criando uma única pasta `js` com um arquivo centralizado `script.js` para todos os scripts.
- O arquivo `style.css` foi movido para uma pasta `style`, garantindo maior clareza e organização.

## Antigo `index.html`

### Meta Charset

- **Antes**: Não havia especificação do meta charset.
- **Agora**: Foi adicionado `<meta charset="UTF-8">` para garantir a codificação correta de caracteres, especialmente para acentos e caracteres especiais.

### CSS

- **Antes**: Links de CSS quebrados, e o arquivo de estilo estava com nome inconsistente (`styles.css`).
- **Agora**: O CSS foi corretamente referenciado com `<link rel="stylesheet" type="text/css" href="style/styles.css">`, corrigindo o caminho e nome.

### Estilo Inline

- **Antes**: O `<body>` tinha estilo inline, o que é considerado uma má prática.
- **Agora**: O estilo foi movido para o arquivo `style.css` e o HTML foi limpo de estilos inline.

### Uso de `<style>`

- **Antes**: Havia regras CSS dentro de um bloco `<style>` no HTML.
- **Agora**: Essas regras foram removidas e transferidas para o arquivo CSS, seguindo as melhores práticas de organização.

### Correções de Acessibilidade

- **Antes**: Campos de entrada não estavam bem estruturados, sem `labels` e com tipos de entrada incorretos (exemplo: `input type="email"` para nome).
- **Agora**: Todos os campos de entrada agora possuem um `<label>` associado corretamente, melhorando a semântica e acessibilidade.

### Uso de `<center>`

- **Antes**: A tag `<center>`, obsoleta e não recomendada, foi utilizada para centralizar elementos.
- **Agora**: O alinhamento foi feito com CSS, removendo a tag `<center>`.

### Botões Redundantes

- **Antes**: Existiam botões com funções redundantes e estilizações inline.
- **Agora**: Os botões foram unificados com uma classe CSS comum, mantendo a consistência visual e organizacional.

### Estrutura de Função de Navegação

- **Antes**: O código usava `window.location.href` para redirecionamento dentro do HTML.
- **Agora**: O código foi movido para um arquivo JavaScript externo (`script.js`), centralizando a lógica de navegação.

## Novo `index.html`

### Novo Layout

- Um layout mais estruturado foi criado com uma `div.container` e um formulário (`form#userForm`) para cadastro de usuários. O HTML foi melhorado em termos de semântica e organização.

### Modal para Exibição de Informações

- Foi adicionado um modal para exibir as informações do usuário (foto e observações), além de funções para editar e salvar observações. Isso aumenta a interatividade da página.

### Botões

- Botões de ação de "Adicionar" foram alterados para usar uma classe CSS comum e foram movidos para uma seção de `button-group`, o que melhora a organização do código.

### Usabilidade

- Foi adicionado um campo de foto de perfil com `input type="file"` para upload de imagem, tornando o formulário mais completo e funcional.

### Formulário e Validação

- A função de adicionar usuários agora valida melhor os campos (nome, email e foto) e exige que o email tenha um formato válido, com alertas amigáveis para o usuário.

## Antigo `script1.js`

### Função de Adicionar Usuário

- **Antes**: A validação de usuário estava muito simples, verificando apenas se os campos estavam vazios.
- **Agora**: A função foi aprimorada para validar se todos os campos (nome, email e foto) estão preenchidos e se o email está no formato correto.

### Uso de `console.log`

- **Antes**: O código usava `console.log` para depuração.
- **Agora**: O uso de `console.log` foi removido para o ambiente de produção.

### Duplicação de Funções

- **Antes**: Havia duplicação de código, com o botão "Adicionar" sendo criado duas vezes.
- **Agora**: A duplicação foi removida e o código foi simplificado, resultando em um script mais enxuto.

### Remoção de Usuário

- **Antes**: A remoção de usuários recriava toda a lista de usuários após cada remoção, o que era ineficiente.
- **Agora**: A remoção foi otimizada e a lista é atualizada dinamicamente, removendo apenas o item específico.

## Antigo `utilsScript.js`

### Eventos e Funções Desnecessárias

- **Antes**: O arquivo continha funções desnecessárias e que não estavam sendo utilizadas.
- **Agora**: Essas funções foram removidas, deixando o código mais enxuto e sem redundâncias.

## Novo `script.js`

### Adição de Usuário

- A função `adicionarUsuarios()` foi melhorada para validar todos os campos e permitir a adição de usuários com foto. O arquivo de imagem é lido usando `FileReader` para exibição.

### Delegação de Eventos

- Foi implementada a delegação de eventos para os botões "Remover" e "Sobre", o que torna a interação mais eficiente.

### Atualização de Lista

- A função `atualizarListaUsuarios()` foi criada para garantir que a lista de usuários seja atualizada dinamicamente após cada adição ou remoção.

### Função para Exibir Informações

- A função `showUserInfo()` foi criada para exibir as informações do usuário no modal, permitindo editar observações.

### Modificação do Modal

- O modal foi ajustado para permitir salvar observações para cada usuário individualmente.

## Estilos Antigos

- **Cor de fundo**: Utilizava `lightgrey`, o que podia conflitar com outros temas.
- **Fonte**: A fonte era `Verdana`, considerada menos comum.
- **Comentários**: A estrutura de código era simples, mas faltavam algumas melhorias para garantir consistência visual e de layout.

## Estilos Novos

- **Box-sizing**: `box-sizing: border-box` foi aplicado globalmente para garantir um dimensionamento consistente de todos os elementos.
- **Cor de fundo**: Agora é `#f4f4f4`, um tom neutro e suave, garantindo um visual mais moderno e consistente.
- **Fonte**: A fonte foi alterada para `Arial, sans-serif`, garantindo mais compatibilidade com a maioria dos projetos.
- **Layout**: 
  - `.container` tem um tamanho máximo de 600px e centraliza o conteúdo.
  - Melhorias de espaçamento foram adicionadas, como maior `padding` nos `inputs` e botões.
  - O botão agora tem largura total (`width: 100%`) com um `max-width` de 180px para manter a consistência de tamanho.
  - Efeito `hover` nos botões foi incluído para melhorar a interação com o usuário.

## Tecnologias Utilizadas

- **HTML5**: Usado para estruturar o conteúdo da página.
- **CSS3**: Utilizado para estilização da página, com foco em uma experiência visual limpa e responsiva.
- **JavaScript**: Usado para a lógica de interatividade, como adicionar, remover e editar usuários, bem como para validação de campos.
- **FileReader**: Para leitura de arquivos de imagem durante o upload de foto de perfil.

## Problemas de Nomenclatura e Falta de Organização

- **Nomenclatura**: Muitos arquivos e nomes de variáveis estavam com nomenclaturas inconsistentes e pouco descritivas, como `scripts2.js` ou `styles.css`. Foi feito um esforço para padronizar os nomes e torná-los mais claros e intuitivos, como `script.js` e `style.css`.
- **Falta de Organização**: Antes, o código estava mal organizado, com arquivos redundantes, estilos inline e regras CSS espalhadas. A nova estrutura segue as boas práticas de organização e modularização de código, o que facilita a manutenção e compreensão do sistema.

## Antigo `REDMIR.md`

O arquivo **REDMIR.md** era o único documento de documentação do projeto, e continha apenas a seguinte descrição:

