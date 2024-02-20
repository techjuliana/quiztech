import questoes from '../bancoDeQuestoes'
export default function questoesProId(
  req: { query: { id: string | number } },
  res: {
    status: (arg0: number) => {
      (): any;
      new (): any;
      json: {
        (arg0: {
          id: number;
          enunciado: string;
          respondida: boolean;
          acertou: boolean;
          respostas: { valor: string; certa: boolean; revelada: boolean }[];
        }): void;
        new (): any;
      };
      send: { (): void; new (): any };
    };
  }
) {
  const idSelecionado = +req.query.id;

  const unicaQuestaoOuNada = questoes.filter(
    (questao) => questao.id === idSelecionado
  );

  if (unicaQuestaoOuNada.length === 1) {
    const questaoSelecionada = unicaQuestaoOuNada[0].embaralharRespostas();
    res.status(200).json(questaoSelecionada.paraObjeto());
  } else {
    res.status(204).send();
  }
}