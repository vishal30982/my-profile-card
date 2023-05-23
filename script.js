function ChangeTheme (theme) {
    document.querySelector(':root').style.setProperty('--theme', `${theme}`);
    localStorage.setItem('theme', document.querySelector(':root').style.getPropertyValue('--theme'))
    // console.log(document.querySelector(':root').style.getPropertyValue('--theme'))
}
let choosenTheme = localStorage.getItem('theme');
document.querySelector(':root').style.setProperty('--theme', choosenTheme);