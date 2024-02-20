import QuestaoModel from "../../model/questao";
import RespostaModel from "../../model/resposta";

const questoes: QuestaoModel[] = [
  new QuestaoModel(
    1,
    "Qual linguagem de marcação é utilizada para estruturar páginas web?",
    [
      RespostaModel.errada("JavaScript"),
      RespostaModel.errada("CSS"),
      RespostaModel.errada("Python"),
      RespostaModel.certa("HTML"),
    ]
  ),

  new QuestaoModel(
    2,
    "Qual linguagem de estilo é utilizada para estilizar páginas web?",
    [
      RespostaModel.errada("Java"),
      RespostaModel.errada("C++"),
      RespostaModel.errada("HTML"),
      RespostaModel.certa("CSS"),
    ]
  ),

  new QuestaoModel(
    3,
    "Qual linguagem de programação é comumente usada para adicionar interatividade a páginas web?",
    [
      RespostaModel.errada("SQL"),
      RespostaModel.errada("PHP"),
      RespostaModel.errada("Ruby"),
      RespostaModel.certa("JavaScript"),
    ]
  ),

  new QuestaoModel(
    4,
    "Qual estrutura de dados é utilizada para armazenar elementos de uma página web de forma hierárquica?",
    [
      RespostaModel.errada("Pilha"),
      RespostaModel.errada("Lista Encadeada"),
      RespostaModel.errada("Fila"),
      RespostaModel.certa("Árvore DOM"),
    ]
  ),
  new QuestaoModel(
    5,
    "Qual método HTTP é comumente utilizado para solicitar dados de um servidor?",
    [
      RespostaModel.errada("POST"),
      RespostaModel.errada("PUT"),
      RespostaModel.errada("DELETE"),
      RespostaModel.certa("GET"),
    ]
  ),

  new QuestaoModel(
    6,
    "Qual técnica é usada para garantir que um site se adapte a diferentes tamanhos de tela e dispositivos?",
    [
      RespostaModel.errada("Floats"),
      RespostaModel.errada("Grids"),
      RespostaModel.errada("Flexbox"),
      RespostaModel.certa("Responsive Design"),
    ]
  ),

  new QuestaoModel(
    7,
    "Qual é a função principal do framework JavaScript React?",
    [
      RespostaModel.errada("Manipulação de banco de dados"),
      RespostaModel.errada("Estilização de páginas web"),
      RespostaModel.errada("Criação de APIs"),
      RespostaModel.certa("UI"),
    ]
  ),

  new QuestaoModel(8, 'O que é o conceito de "state" em React?', [
    RespostaModel.errada("Um método HTTP"),
    RespostaModel.errada("Uma linguagem de marcação"),
    RespostaModel.errada("Um tipo de dado primitivo"),
    RespostaModel.certa(
      "Um objeto que representa a parte mutável de um componente"
    ),
  ]),
];

export default questoes;
