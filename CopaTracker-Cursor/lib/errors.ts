export type ApiErrorCode =
  | "INVALID_KEY"
  | "RATE_LIMIT"
  | "NETWORK"
  | "NOT_FOUND"
  | "EMPTY"
  | "UNKNOWN"
  | "MISSING_KEY";

export class FootballApiError extends Error {
  constructor(
    message: string,
    public code: ApiErrorCode,
    public status?: number
  ) {
    super(message);
    this.name = "FootballApiError";
  }
}

export function getErrorMessage(code: ApiErrorCode): string {
  const messages: Record<ApiErrorCode, string> = {
    INVALID_KEY:
      "API Key inválida o sin acceso. Verificá FOOTBALL_DATA_API_KEY en tu archivo .env.local.",
    RATE_LIMIT:
      "Límite de solicitudes excedido. Esperá unos minutos e intentá nuevamente.",
    NETWORK:
      "Error de conexión con la API. Revisá tu conexión a internet e intentá de nuevo.",
    NOT_FOUND:
      "La competición o temporada solicitada no está disponible en este momento.",
    EMPTY:
      "No hay partidos disponibles para mostrar en este momento.",
    UNKNOWN:
      "Ocurrió un error inesperado al consultar la API. Intentá nuevamente.",
    MISSING_KEY:
      "Configurá FOOTBALL_DATA_API_KEY en .env.local para habilitar el fixture en vivo.",
  };

  return messages[code];
}
