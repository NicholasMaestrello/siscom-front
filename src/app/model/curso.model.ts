import { ModalidadeDTO } from "./modalidade.model";

export class CursoDTO {
    id: number;
	modalidade: ModalidadeDTO;
	responsavel: string;
	quantidadeAlunos: number;
	nivel: string;
}