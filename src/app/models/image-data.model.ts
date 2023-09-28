/**
 * Clase para representar datos de imágenes.
 */
export class ImgData {
    /**
     * Identificador único de la imagen.
     */
    id: string;
  
    /**
     * URL de la foto.
     */
    photo: string;
  
    /**
     * Descripción o texto asociado a la imagen.
     */
    text: string;
  
    /**
     * Constructor de la clase ImgData.
     * @param id Identificador único de la imagen.
     * @param photo URL de la foto.
     * @param text Descripción o texto asociado a la imagen.
     */
    constructor(id: string, photo: string, text: string) {
      this.id = id;
      this.photo = photo;
      this.text = text;
    }
  }