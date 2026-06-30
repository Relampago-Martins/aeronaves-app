import { Aeronave, AeronaveType, FiltrosEndpoint } from "@/models/aeronaves";

const BASE_URL = process.env.EXPO_PUBLIC_BASE_URL;

if (!BASE_URL) {
  throw new Error("BASE_URL is not defined in the environment variables");
}

export async function getTiposAeronaves(): Promise<AeronaveType[]> {
  const response = await fetch(`${BASE_URL}/aeronaves/filtros`);

  if (!response.ok) {
    throw new Error("Failed to load filtros");
  }

  const data = await response.json() as FiltrosEndpoint;
  return data.tiposAeronaves;
}

export async function searchMatriculas(
  query: string,
  type?: string,
): Promise<any> {
  const params = new URLSearchParams();

  if (type) {
    params.append("tipoVeiculo", type);
  }

  params.append("search", query);
  try {
    const response = await fetch(`${BASE_URL}/aeronaves/?${params.toString()}`);

    const data = await response.json();

    return data.results;
  } catch (e) {
    console.log(e);
    return [];
  }
}

export async function getAeronaveDetail(matricula: string): Promise<Aeronave> {
  const response = await fetch(`${BASE_URL}/aeronaves/${matricula}/`);

  if (!response.ok) {
    throw new Error("Failed to load Aeronave details");
  }

  const data = await response.json();

  return data;
}
