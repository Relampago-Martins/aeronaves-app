import { Aeronave } from "@/models/aeronaves";

export type AeronaveResponse = Aeronave



export type AeronaveSearchResponse = string[];

export type AeronaveTypeResponse = {
  id: string;
  valor: string;
  descricao: string;
};
