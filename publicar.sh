#!/usr/bin/env bash
# Publica a pasta PADDOCK em https://github.com/The-3-Students/PADDOCK
# Uso: coloque este script, README.md, .gitignore e .nojekyll DENTRO da pasta PADDOCK
# (ao lado do index.html) e rode:  bash publicar.sh
set -e
REPO="The-3-Students/PADDOCK"

[ -f index.html ] || { echo "Rode este script dentro da pasta PADDOCK (onde está o index.html)."; exit 1; }

[ -d .git ] || git init -b main
git add -A
git commit -m "Publicação inicial do site PADDOCK" || echo "Nada novo para commitar."
# aumenta o limite de envio para as imagens grandes
git config http.postBuffer 1048576000

if command -v gh >/dev/null 2>&1; then
  gh auth status >/dev/null 2>&1 || gh auth login
  if gh repo view "$REPO" >/dev/null 2>&1; then
    git remote get-url origin >/dev/null 2>&1 || git remote add origin "https://github.com/$REPO.git"
    git push -u origin main
  else
    gh repo create "$REPO" --public --source=. --remote=origin --push
  fi
  # ativa o GitHub Pages (branch main, raiz)
  gh api -X POST "repos/$REPO/pages" -f "source[branch]=main" -f "source[path]=/" >/dev/null 2>&1 || true
else
  git remote get-url origin >/dev/null 2>&1 || git remote add origin "https://github.com/$REPO.git"
  git push -u origin main
  echo "Ative o Pages em: https://github.com/$REPO/settings/pages (Branch: main, pasta: / (root))"
fi

echo
echo "Repositório: https://github.com/$REPO"
echo "Site (em ~1-2 min): https://the-3-students.github.io/PADDOCK/"
