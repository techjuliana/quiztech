import { embaralhar } from '../../../functions/arrays'
// import questoes from '../bancoDeQuestoes'

// export default function questionario(req, res) {
//   const ids = questoes.map((questao) => questao.id);
//   res.status(200).json(embaralhar(ids));
// }

import { NextApiRequest, NextApiResponse } from 'next';
import questoes from '../bancoDeQuestoes';

export default function questionario(req: NextApiRequest, res: NextApiResponse) {
  const ids = questoes.map((questao) => questao.id);
  res.status(200).json(embaralhar(ids));
}