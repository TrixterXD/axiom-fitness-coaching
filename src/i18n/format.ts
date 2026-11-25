export function formatMessage(message: string, ...values: (string | number)[]) {
  return message.replace(/\{(\d+)\}/g, (token, index) => String(values[Number(index)] ?? token));
}
