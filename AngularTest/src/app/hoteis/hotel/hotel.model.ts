import { Quarto } from "../../quartos/quarto/quarto.model";

export interface Hotel{
    id: number
    nome : string
    quartos: Array<Quarto>
    descricao: string
    precoPromocional: number
    imagem: string
}