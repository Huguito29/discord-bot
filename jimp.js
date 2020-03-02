const jimp = require ('jimp');

async function main () {
    let font = await jimp.loadFont(jimp.FONT_SANS_32_BLACK)
    let mask = await jimp.read('mascara.png')
    let avatar = await jimp.read('luffao.jpg')
    let background = await jimp.read('fundo.png')
    
    avatar.resize(140, 140)
    mask.resize(140, 140)
    avatar.mask(mask)

    background.composite(avatar, 25, 25).write('luffy.png')

}

main ();