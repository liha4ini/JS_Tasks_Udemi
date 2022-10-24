//  на вход имя и фамилия
//  на выход инициалы

const toInitials = name => 
    name
        .split(' ')
        .map(el => `${el.slice(0,1).toUpperCase()}.`)
        .join('');