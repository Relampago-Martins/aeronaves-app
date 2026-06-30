import { AeronaveResponse } from "../dto/aeronaves";

import { getAeronaveDetail, getTiposAeronaves, searchMatriculas } from "@/api/api";
import {
  Aeronave,
  AeronaveSearchItem,
  AeronaveType,
} from "../models/aeronaves";

function mapAeronave(response: AeronaveResponse): Aeronave {
  return {
    matricula: response.matricula,
    fabricante: response.fabricante,
    tipoVeiculo: response.tipoVeiculo,
    passageirosMaximos: response.passageirosMaximos,
    houveOcorrencia: response.houveOcorrencia,
    proprietario: response.proprietario,
  };
}

function mapMatriculas(response: any): AeronaveSearchItem[] {
  const out = response.map(
    (item: { matricula: string; fabricante: string }) => ({
      matricula: item.matricula,
      fabricante: item.fabricante,
    }),
  );
  return out;
}

function mapAeronaveType(response: any): AeronaveType[] {
  const out = response.map(
    (item: { id: string; value: string; label: string }) => ({
      id: item.id,
      value: item.value.trim(),
      label: item.label.trim(),
    }),
  );
  return out;
}

export async function getAeronaveTypes(): Promise<AeronaveType[]> {
  const rawTypes = await getTiposAeronaves();

  return mapAeronaveType(rawTypes);
}

export async function searchAeronavesMatriculas(
  query: string,
  type?: string,
): Promise<AeronaveSearchItem[]> {
  const data = await searchMatriculas(query, type);
  const searchResults = mapMatriculas(data);
  return searchResults;
}

export async function getAeronaveDetails(code: string): Promise<Aeronave> {
  const aeronave = await getAeronaveDetail(code);
  return mapAeronave(aeronave);
}
