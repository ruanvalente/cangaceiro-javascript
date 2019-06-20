class DateConverter {
  constructor() {
    throw new Error('Está classe não pode ser instânciada.');
  }

  static paraTexto(data) {
    return `${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}`;
  }

  static paraData(texto) {
    let regex = /^\d{4}-\d{2}-\d{2}$/;
    if (!regex.test(texto)) {
      throw new Error('A data precisa está no formato: aaaa-mm-dd');
    }
    return new Date(
      ...texto.split('-').map((item, index) => item - (index % 2))
    );
  }
}
