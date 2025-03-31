// =====alter ao modo claro=====
function toggleMode(){
    const html = document.documentElement;
    html.classList.toggle('light')

    // salva o tema escolhido no localstorag
    const mode = html.classlist.contains('light') ? 'light' : 'dark';
    localStorage.setItem('theme', mode);

    // altera aparência do título
    updateTextColor();
}
// carregr o tema salvo no localstorage ao carregar a pagina
const savedTheme = localStorage.getItem('theme');
if(savedTheme){
    document.documentElement.classList.toggle('light', savedTheme === 'light')
}
// função que altera a cor do texto de acordo com o tema
function updateTextColor(){
    currentColor = document.documentElement
    .classList.contains('light') ? 'black' : "#fff";
    titleElement.style.color = currentColor
}