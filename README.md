# PADDOCK

Site sobre a Fórmula 1: equipes, circuitos, tecnologia, bastidores e muito mais.
Site estático (HTML + CSS + JavaScript), sem dependências e sem etapa de build.

## Ver o site

Online: https://the-3-students.github.io/PADDOCK/

Localmente: baixe o repositório e abra o `index.html` no navegador.

## Estrutura

```
PADDOCK/
├── index.html       Página inicial
├── explore.html     Explorar
├── conteudo.html    Conteúdo
├── sobre.html       Sobre
├── contato.html     Contato
├── css/style.css    Estilos de todo o site
├── js/script.js     Scripts de todo o site
└── imagens/         bastidores, capacetes, circuitos, equipes, hero, tecnologia
```

## Como editar

1. Clone o repositório:
   ```bash
   git clone https://github.com/The-3-Students/PADDOCK.git
   ```
2. Edite os arquivos (textos nos `.html`, visual em `css/style.css`, comportamento em `js/script.js`).
3. Teste abrindo o `index.html` no navegador.
4. Envie as mudanças:
   ```bash
   git add .
   git commit -m "Descreva o que mudou"
   git push
   ```

Para editar sem instalar nada: abra o arquivo no GitHub e clique no ícone de lápis,
ou pressione a tecla `.` na página do repositório para abrir o editor web.

## Trabalhando em grupo

- Antes de começar, rode `git pull` para pegar as mudanças dos outros.
- Para mudanças maiores, crie uma branch (`git checkout -b minha-mudanca`) e abra um Pull Request.
- Mantenha os nomes de arquivos e pastas em minúsculas: o GitHub diferencia maiúsculas de minúsculas e links podem quebrar online.
- As imagens ficam em `imagens/<categoria>/` e são referenciadas com caminho relativo (ex.: `imagens/equipes/ferrari.png`).

## Atenção: imagens pesadas

As imagens PNG somam cerca de 470 MB (a maior, `circuitos/interlagos.png`, tem ~74 MB).
O GitHub bloqueia arquivos acima de 100 MB, então não adicione imagens maiores que isso.
Para novas imagens, prefira versões otimizadas (WebP ou JPG, idealmente abaixo de 1 MB).
