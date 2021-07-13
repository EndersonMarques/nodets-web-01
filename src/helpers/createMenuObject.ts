type MenuOptions = ''|'all'|'dog'|'cat'|'fish';


export const creatMenuObject = (activeMenu: MenuOptions) =>{
    let returnObejcts ={
        all: false,
        dog: false,
        cat: false,
        fish: false
    };

    if(activeMenu != ''){
        returnObejcts[activeMenu] =true;
    }

    return returnObejcts;

}