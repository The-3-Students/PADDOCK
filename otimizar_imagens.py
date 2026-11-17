# Reduz o peso das fotos PNG sem mudar o nome nem a pasta.
# Uso (dentro da pasta PADDOCK):  python otimizar_imagens.py
# Precisa do Pillow:  pip install pillow
import os
from PIL import Image

LARGURA_MAXIMA = 2400      # px; é mais que suficiente para o site
LIMITE_MB = 8              # só mexe em arquivos acima disso

for pasta, _, arquivos in os.walk("imagens"):
    for nome in arquivos:
        if not nome.lower().endswith(".png"):
            continue
        caminho = os.path.join(pasta, nome)
        antes = os.path.getsize(caminho) / 1_000_000
        if antes <= LIMITE_MB:
            continue
        img = Image.open(caminho)
        if img.width > LARGURA_MAXIMA:
            altura = round(img.height * LARGURA_MAXIMA / img.width)
            img = img.resize((LARGURA_MAXIMA, altura), Image.LANCZOS)
        img.save(caminho, optimize=True)
        depois = os.path.getsize(caminho) / 1_000_000
        print(f"{caminho}: {antes:.1f} MB -> {depois:.1f} MB")
print("Pronto.")
