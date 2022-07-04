function newImage( widthOfPicture, assets ) {
    let picture = document.createElement("img")
    picture.width = widthOfPicture
    picture.height = heightOfPicture
    picture.src = assets
    document.add(picture)
    }
 assets/tree.png (200 px from the left, 300px from the bottom)
 assets/pillar.png (350 px from the left, 100px from the bottom)
 assets/crate.png (150 px from the left, 200px from the bottom)
 assets/well.png (500 px from the left, 425px from the bottom)


function newImage(){
    let greenCharacter = document.createElement('img')
    greenCharacter.src = 'assets/green-character.gif'
    greenCharacter.style.position = 'fixed'
    greenCharacter.style.left = '100px'
    greenCharacter.style.bottom = '100px'
    document.body.append(greenCharacter)
    
}

let greenCharacter = document.createElement('img')
greenCharacter.src = 'assets/green-character.gif'
greenCharacter.style.position = 'fixed'
greenCharacter.style.left = '100px'
greenCharacter.style.bottom = '100px'
document.body.append(greenCharacter)

let pineTree = document.createElement('img')
pineTree.src = 'assets/pine-tree.png'
pineTree.style.position = 'fixed'
pineTree.style.left = '450px'
pineTree.style.bottom = '200px'
document.body.append(pineTree)

