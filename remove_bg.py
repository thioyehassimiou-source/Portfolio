from rembg import remove
from PIL import Image

def process_image():
    input_path = 'src/assets/profile-univ.jpg'
    output_path = 'src/assets/profile-univ-nobg.png'
    print("Ouvrir l'image...")
    img = Image.open(input_path)
    print("Détourage en cours (téléchargement du modele IA si premier lancement)...")
    out = remove(img)
    out.save(output_path)
    print("Formatage termine ! Sauvegarde dans", output_path)

if __name__ == "__main__":
    process_image()
