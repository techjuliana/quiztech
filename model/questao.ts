import { embaralhar } from "../functions/arrays"
import RespostaModel from "./resposta"

export default class QuestaoModel {
  _id: number;
  _enunciado: string;
  _respostas: RespostaModel[];
  _acertou: boolean;

  constructor(
    id: number,
    enunciado: string,
    respostas: RespostaModel[],
    acertou = false
  ) {
    this._id = id;
    this._enunciado = enunciado;
    this._respostas = respostas;
    this._acertou = acertou;
  }

  get id() {
    return this._id;
  }

  get enunciado() {
    return this._enunciado;
  }

  get respostas() {
    return this._respostas;
  }

  get acertou() {
    return this._acertou;
  }

  get naoRespondida() {
    return !this.respondida;
  }

  get respondida() {
    for (let resposta of this._respostas) {
      if (resposta.revelada) return true;
    }
    return false;
  }

  responderCom(indice: number): QuestaoModel {
    const acertou = this._respostas[indice]?.certa;
    const respostas = this._respostas.map((resposta, i) => {
      const respostaSelecionada = indice === i;
      const deveRevelar = respostaSelecionada || resposta.certa;
      return deveRevelar ? resposta.revelar() : resposta;
    });
    return new QuestaoModel(this.id, this.enunciado, respostas, acertou);
  }

  embaralharRespostas(): QuestaoModel {
    let respostasEmbaralhadas = embaralhar(this._respostas);
    return new QuestaoModel(
      this._id,
      this._enunciado,
      respostasEmbaralhadas,
      this._acertou
    );
  }

  static criarUsandoObjeto(obj: QuestaoModel): QuestaoModel {
    const respostas = obj.respostas.map((resp) =>
      RespostaModel.criarUsandoObjeto(resp)
    );
    return new QuestaoModel(obj.id, obj.enunciado, respostas, obj.acertou);
  }

  paraObjeto() {
    return {
      id: this.id,
      enunciado: this.enunciado,
      respondida: this.respondida,
      acertou: this.acertou,
      respostas: this.respostas.map((resp) => resp.paraObjeto()),
    };
  }
}