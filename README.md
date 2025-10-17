# Ejercicio Git: “Otoño en Asturias” 

Este ejercicio simula el ciclo de vida de un mini‑sitio web sobre el otoño en Asturias. Trabajarás con ramas *feature*, fusiones *merge* en local y colaboración mediante Pull Requests (PR) en GitHub.

##  Resumen de comandos clave:

- Crear y cambiar a rama: `git switch -c feature-x`
- Volver a main: `git switch main`
- Merge en local (con merge commit): `git merge --no-ff feature-x -m "merge: feature-x into main"`
- Subir cambios: `git push` / `git push -u origin rama`
- Traer y actualizar: `git fetch` · `git pull --ff-only`
- Ver historial: `git log --graph --decorate --oneline --all`
- Etiquetas: `git tag -a v0.1.0 -m "mensaje"; git push origin v0.1.0`

