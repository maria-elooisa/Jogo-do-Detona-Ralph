# Jogo Detona Ralph

Este é um jogo de clique inspirado no personagem Detona Ralph. O objetivo é simples: o jogador precisa clicar rapidamente nos quadrados que aparecem aleatoriamente como "inimigos" para ganhar pontos antes do tempo acabar!

## 🕹️ Como Jogar

1. Inicie o jogo e observe o cronômetro e o placar no painel superior.
2. Um quadrado vermelho (representando o inimigo) aparecerá aleatoriamente no tabuleiro de 3x3.
3. Clique no quadrado vermelho para ganhar pontos. Cada clique correto adiciona 1 ponto ao seu placar.
4. O jogo termina quando o cronômetro chega a zero, e você verá sua pontuação final.
5. Tente bater sua própria pontuação a cada nova rodada!

## 🧩 Estrutura do Código

- **HTML**: 
  - O arquivo HTML cria uma estrutura básica para o jogo, com um contêiner `menu` para mostrar o tempo restante e o placar do jogador.
  - O painel de jogo é composto por uma grade de 3x3 de `divs` com a classe `square`, representando as posições onde o inimigo pode aparecer.
- **JavaScript (engine.js)**: 
  - `state`: Armazena o estado do jogo, incluindo os elementos DOM (squares, time, e score), o ID do temporizador, e a posição do inimigo atual.
  - Funções principais:
    - `randomSquare()`: Seleciona um quadrado aleatório para exibir o inimigo.
    - `moveEnemy()`: Define um intervalo de tempo para a troca de posição do inimigo, aumentando o desafio.
    - `countDown()`: Controla o cronômetro e termina o jogo quando o tempo chega a zero.
    - `addListenerHitBox()`: Monitora os cliques nos quadrados e aumenta a pontuação do jogador para cada clique correto.

## 💻 Habilidades Desenvolvidas

Durante o desenvolvimento deste jogo, foram aplicadas e aprimoradas várias habilidades, incluindo:

1. **Manipulação do DOM**: Uso de seletores e métodos como `querySelectorAll` e `addEventListener` para gerenciar a interação com os elementos HTML.
2. **Controle de Eventos**: Implementação de eventos de clique para detectar quando o jogador clica no quadrado certo.
3. **Timers e Intervalos**: Utilização de `setInterval` e `clearInterval` para controlar a movimentação do inimigo e o cronômetro do jogo.
4. **Organização de Estados**: Estruturação de um objeto `state` para armazenar e gerenciar o estado do jogo, incluindo a pontuação, o tempo restante e a posição do inimigo.
5. **CSS e Responsividade**: Aprendizado de conceitos de estilização para ajustar o layout do jogo, incluindo fontes externas e um sistema de grade para os quadrados.

## 🎨 Estilos e Design

O design usa a fonte [Press Start 2P](https://fonts.google.com/specimen/Press+Start+2P) para dar ao jogo um estilo retrô. As cores e os estilos dos quadrados criam uma experiência visual simples e nostálgica.

## 📁 Estrutura de Arquivos

- `index.html`: Estrutura HTML principal.
- `src/styles/main.css`: Estilos do jogo.
- `src/styles/reset.css`: Reset CSS para garantir uniformidade entre navegadores.
- `src/scripts/engine.js`: Código JavaScript que define a lógica do jogo.
