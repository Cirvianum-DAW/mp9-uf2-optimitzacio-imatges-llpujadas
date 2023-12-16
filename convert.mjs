// Importació de les diferents llibreries i paquets a utilitzar
import imagemin from 'imagemin';
import imageminWebp from 'imagemin-webp';

// Ruta d'entrada de les imatges a optimitzar
const inputPath = './resources/img';

// Ruta de sortida de les imatges optimitzades en format Webp
const outputPath = './resources/output';

// Configuració d'imagemin
const config = {
  plugins: [
    imageminWebp({
      quality: 50, // Qualitat d'exportació i compressió de les imatges
    }),
  ],
};

// Procés d'optimització de les imatges a través d'Imagemin
async function optimizeImages() {
  try {
    await imagemin([`${inputPath}/*.{jpg,jpeg,png}`], { // Cerca en la ruta d'input entre les imatges amb els formats especificats
      destination: outputPath, // Sortida de les imatges per la ruta d'output
      ...config,
    });

    console.log('Realització de transformació i compressió de les imatges realitzat amb èxit!');
  } catch (error) {
    console.error('Error en la optimització de les imatges:', error);
  }
}

// Execució del procés de transformació i compressió de les imatges
optimizeImages();