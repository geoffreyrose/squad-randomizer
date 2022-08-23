function gameSelect() {
    let game = document.querySelector('#game-select').value

    document.querySelectorAll('.squad-choices-layout').forEach(el => el.classList.add('hidden'))
    document.querySelector('.squad-choices-layout.' + game).classList.remove('hidden')

    selectSquad()
}

function selectSquad() {
    let game = document.querySelector('#game-select').value
    let currentGameChoices = document.querySelectorAll('.squad-choices-layout.' + game + ' input:checked')

    if(currentGameChoices.length >= 2) {
        let member1Number = Math.floor(Math.random() * currentGameChoices.length)
        let member2Number = Math.floor(Math.random() * currentGameChoices.length)

        while(member1Number === member2Number) {
            member2Number = Math.floor(Math.random() * currentGameChoices.length)
        }

        let squadMember1 = currentGameChoices[member1Number]
        let squadMember2 = currentGameChoices[member2Number]

        document.querySelector('#squad-member-1 img').src = 'assets/images/' + squadMember1.attributes['data-img'].value + '.jpg'
        document.querySelector('#squad-member-2 img').src = 'assets/images/' + squadMember2.attributes['data-img'].value + '.jpg'

        document.querySelector('#squad-member-1 .card-heading').textContent = squadMember1.value
        document.querySelector('#squad-member-2 .card-heading').textContent = squadMember2.value
    } else {
        document.querySelector('#squad-member-1 img').src = 'assets/images/n7.png'
        document.querySelector('#squad-member-2 img').src = 'assets/images/n7.png'

        document.querySelector('#squad-member-1 .card-heading').textContent = 'Squad Member'
        document.querySelector('#squad-member-2 .card-heading').textContent = 'Squad Member'
    }
}

document.querySelector('#game-select').addEventListener('change', gameSelect)
document.querySelector('#randomize-squad').addEventListener('click', selectSquad)
