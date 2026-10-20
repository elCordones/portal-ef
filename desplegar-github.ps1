<#
.SYNOPSIS
  Script automatitzat per publicar i actualitzar el Portal d'Educació Física a GitHub Pages.
.DESCRIPTION
  Verifica la compilació de VitePress, fa commit dels canvis i els puja a la branca 'main' de GitHub
  perquè el workflow .github/workflows/deploy.yml publiqui automàticament la web.
#>

param(
  [Alias("RemoteUrl")]
  [string]$RepoUrl = "",
  [string]$MissatgeCommit = "Actualització del Portal d'Educació Física (Korfbal i Atletisme)"
)

$ErrorActionPreference = "Stop"
Set-Location -Path $PSScriptRoot

Write-Host "=====================================================" -ForegroundColor Cyan
Write-Host " 🏅 DESPLEGAMENT DEL PORTAL D'EDUCACIÓ FÍSICA (SdA)  " -ForegroundColor Cyan
Write-Host "=====================================================" -ForegroundColor Cyan

# 1. Verificar compilació de VitePress
Write-Host "`n[1/4] Verificant la compilació de producció (VitePress)..." -ForegroundColor Yellow
npm run docs:build
if ($LASTEXITCODE -ne 0) {
  Write-Error "La compilació de VitePress ha fallat. Revisa els enllaços abans de continuar."
  exit 1
}

# 2. Inicialitzar Git si cal
Write-Host "`n[2/4] Comprovant l'estat del repositori Git local..." -ForegroundColor Yellow
if (-not (Test-Path ".git")) {
  git init
  git branch -M main
}

# 3. Registrar canvis i fer commit
Write-Host "`n[3/4] Desant tots els fitxers al repositori local..." -ForegroundColor Yellow
git add -A
$status = git status --porcelain
if ($status) {
  git commit -m $MissatgeCommit
  Write-Host "✔ Nou commit creat: $MissatgeCommit" -ForegroundColor Green
} else {
  Write-Host "ℹ No hi ha canvis pendents de commit." -ForegroundColor Gray
}

# 4. Configurar repositori remot i fer push
Write-Host "`n[4/4] Connexió amb GitHub..." -ForegroundColor Yellow
$currentRemote = git remote get-url origin 2>$null

if ($RepoUrl) {
  if ($currentRemote) {
    git remote set-url origin $RepoUrl
  } else {
    git remote add origin $RepoUrl
  }
  $currentRemote = $RepoUrl
}

if (-not $currentRemote) {
  Write-Host "`n⚠ Encara no s'ha vinculat l'URL del repositori remot de GitHub." -ForegroundColor Yellow
  $inputUrl = Read-Host "Enganxa l'URL del teu repositori de GitHub (ex: https://github.com/USUARI/portal-ef.git) o prem Enter per ometre"
  if ($inputUrl) {
    git remote add origin $inputUrl.Trim()
    $currentRemote = $inputUrl.Trim()
  }
}

if ($currentRemote) {
  Write-Host "Pujant a $currentRemote (branca main)..." -ForegroundColor Cyan
  git push -u origin main
  Write-Host "`n✅ Desplegament enviat amb èxit a GitHub!" -ForegroundColor Green
  Write-Host "👉 Recorda verificar a GitHub > Settings > Pages > Build and deployment > Source: 'GitHub Actions'." -ForegroundColor Green
} else {
  Write-Host "`nℹ El repositori local ja està preparat i amb el commit fet a la branca 'main'." -ForegroundColor Cyan
  Write-Host "Quan tinguis creat el repositori buit a GitHub, executa:" -ForegroundColor White
  Write-Host "  .\desplegar-github.ps1 -RepoUrl 'https://github.com/EL_TEU_USUARI/portal-ef.git'" -ForegroundColor Green
}
