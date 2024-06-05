export const corregirCodificacion = (mensaje: string) => {
  const correcciones = {
    Ãº: "ú",
    "Ã³": "ó",
    "Ã©": "é",
    "Ã¡": "á",
    "Ã±": "ñ",
    "Ã­": "í",
    "Â¡": "¡",
    "Â¿": "¿",
    "Ã¼": "ü",
    "Ã€": "À",
    "Ã‰": "É",
    Ãˆ: "È",
    Ãª: "ê",
    "Ã‡": "Ç",
  };

  return Object.entries(correcciones).reduce(
    (mensajeCorregido, [codigo, caracter]) => {
      return mensajeCorregido.replace(new RegExp(codigo, "g"), caracter);
    },
    mensaje
  );
};
