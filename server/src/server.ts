import express from 'express';
import cors from 'cors';
import routes from './routes';

const app = express();

app.use(cors());
app.use(express.json());

/**
 * MÉTODOS
 *
 * GET: Buscar ou listar alguma informacao;
 * POST: Criar uma nova informacao;
 * PUT: Atualizar uma informacao existente;
 * DELETE: Deletar uma informacao existente.
 *
 * PARAMETROS:
 *
 * Corpo (Request body): Dados para criacao ou atualizacao de um registro;
 * Route Params: Identificar qual recurso eu quero atualizar ou deletar
 * Query Params: Paginacao, filtros, ordenacao.
 */

app.use(routes);

app.listen(3333);
