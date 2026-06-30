export interface AeronaveSearchItem {
  matricula: string;
  fabricante: string;
}

export interface Aeronave {
  matricula: string;
  fabricante: string;
  tipoVeiculo: string;
  passageirosMaximos: number;
  houveOcorrencia: boolean;
  proprietario: string;
}

export type AeronaveType = {
  id: string;
  value: string;
  label: string;
};

export type FiltrosEndpoint = {
  tiposAeronaves: AeronaveType[];
}