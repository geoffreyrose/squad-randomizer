<template>
  <div class="choices">
    <div class="fancy-select">
      <select v-model="activeGame">
        <option v-for="game in games" :key="game.id" :value="game">{{ game.name }}</option>
      </select>
      <svg xmlns="http://www.w3.org/2000/svg" stroke="currentColor" viewBox="0 0 320 512"><path d="M310.6 246.6l-127.1 128C176.4 380.9 168.2 384 160 384s-16.38-3.125-22.63-9.375l-127.1-128C.2244 237.5-2.516 223.7 2.438 211.8S19.07 192 32 192h255.1c12.94 0 24.62 7.781 29.58 19.75S319.8 237.5 310.6 246.6z"/></svg>
    </div>
    <h1>{{ activeGame.name }}</h1>
  </div>
  <section class="squad-choices-layout">
    <div class="squad-choice" v-for="squad in activeGame?.squad" :key="squad.name">
      <label class="switch">
        <input id="ashley-m3" v-model="squad.isActive" type="checkbox">
        <span class="switch-toggle">
          <span class="switch-toggle-indicator"></span>
        </span>
        <span class="switch-label">{{ squad.name }}</span>
      </label>
    </div>
  </section>
  <div class="spacer"></div>
  <div class="randomize">
    <button id="randomize-squad" type="button" v-on:click="randomizeSquad" class="button"><span>Randomize</span> Squad</button>
  </div>
  <div class="spacer"></div>
  <section class="layout-squad">
    <h3>Your Squad</h3>
    <div class="layout-squad-members">
      <div class="card" v-for="squad in activeGame.numberOnSquad">
        <div class="card-image">
          <img :src="activeGame.selectedSquad[squad - 1]?.image ?? assetUrl('/assets/images/n7.png')"  width="256" height="256">
        </div>
        <h3 class="card-heading">{{ activeGame.selectedSquad[squad - 1]?.name ?? 'Squad Member' }}</h3>
      </div>
    </div>
  </section>
</template>
<script setup>

import {ref} from "vue";
const assetUrl = (path) => `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`
const games = ref([
  {
    id: 'me1',
    name: 'Mass Effect 1',
    numberOnSquad: 2,
    selectedSquad: [],
    squad: [
      {
        name: 'Ashley',
        image: assetUrl('/assets/images/ashley.jpg'),
        isActive: true,
      },
      {
        name: 'Garrus',
        image: assetUrl('/assets/images/garrus.jpg'),
        isActive: true,
      },
      {
        name: 'Kaidan',
        image: assetUrl('/assets/images/kaidan.jpg'),
        isActive: true,
      },
      {
        name: 'Liara',
        image: assetUrl('/assets/images/liara.jpg'),
        isActive: true,
      },
      {
        name: 'Tali',
        image: assetUrl('/assets/images/tali.jpg'),
        isActive: true,
      },
      {
        name: 'Wrex',
        image: assetUrl('/assets/images/wrex.jpg'),
        isActive: true,
      },
    ]
  },
  {
    id: 'me2',
    name: 'Mass Effect 2',
    numberOnSquad: 2,
    selectedSquad: [],
    squad: [
      {
        name: 'Garrus',
        image: assetUrl('/assets/images/garrus.jpg'),
        isActive: true,
      },
      {
        name: 'Grunt',
        image: assetUrl('/assets/images/grunt.jpg'),
        isActive: true,
      },
      {
        name: 'Jack',
        image: assetUrl('/assets/images/jack.jpg'),
        isActive: true,
      },
      {
        name: 'Jacob',
        image: assetUrl('/assets/images/jacob.jpg'),
        isActive: true,
      },
      {
        name: 'Kasumi',
        image: assetUrl('/assets/images/kasumi.jpg'),
        isActive: true,
      },
      {
        name: 'Legion',
        image: assetUrl('/assets/images/legion.jpg'),
        isActive: true,
      },
      {
        name: 'Miranda',
        image: assetUrl('/assets/images/miranda.jpg'),
        isActive: true,
      },
      {
        name: 'Mordin',
        image: assetUrl('/assets/images/mordin.jpg'),
        isActive: true,
      },
      {
        name: 'Morinth',
        image: assetUrl('/assets/images/morinth.jpg'),
        isActive: true,
      },
      {
        name: 'Samara',
        image: assetUrl('/assets/images/samara.jpg'),
        isActive: true,
      },
      {
        name: 'Tali',
        image: assetUrl('/assets/images/tali.jpg'),
        isActive: true,
      },
      {
        name: 'Thane',
        image: assetUrl('/assets/images/thane.jpg'),
        isActive: true,
      },
      {
        name: 'Zaeed',
        image: assetUrl('/assets/images/zaeed.jpg'),
        isActive: true,
      },
    ]
  },
  {
    id: 'me3',
    name: 'Mass Effect 3',
    numberOnSquad: 2,
    selectedSquad: [],
    squad: [
      {
        name: 'Ashley',
        image: assetUrl('/assets/images/ashley.jpg'),
        isActive: true,
      },
      {
        name: 'EDI',
        image: assetUrl('/assets/images/edi.jpg'),
        isActive: true,
      },
      {
        name: 'Garrus',
        image: assetUrl('/assets/images/garrus.jpg'),
        isActive: true,
      },
      {
        name: 'James',
        image: assetUrl('/assets/images/james.jpg'),
        isActive: true,
      },
      {
        name: 'Javik',
        image: assetUrl('/assets/images/javik.jpg'),
        isActive: true,
      },
      {
        name: 'Kaidan',
        image: assetUrl('/assets/images/kaidan.jpg'),
        isActive: true,
      },
      {
        name: 'Liara',
        image: assetUrl('/assets/images/liara.jpg'),
        isActive: true,
      },
      {
        name: 'Tali',
        image: assetUrl('/assets/images/tali.jpg'),
        isActive: true,
      },
    ]
  },
  {
    id: 'meAndromeda',
    name: 'Mass Effect Andromeda',
    numberOnSquad: 2,
    selectedSquad: [],
    squad: [
      {
        name: 'Cora',
        image: assetUrl('/assets/images/cora.jpg'),
        isActive: true,
      },
      {
        name: 'Drack',
        image: assetUrl('/assets/images/drack.jpg'),
        isActive: true,
      },
      {
        name: 'Jaal',
        image: assetUrl('/assets/images/jaal.jpg'),
        isActive: true,
      },
      {
        name: 'Liam',
        image: assetUrl('/assets/images/liam.jpg'),
        isActive: true,
      },
      {
        name: 'PeeBee',
        image: assetUrl('/assets/images/peebee.jpg'),
        isActive: true,
      },
      {
        name: 'Vetra',
        image: assetUrl('/assets/images/vetra.jpg'),
        isActive: true,
      },
    ]
  },
  {
    id: 'baldurGate3',
    name: "Baldur's Gate 3",
    numberOnSquad: 3,
    selectedSquad: [],
    squad: [
      {
        name: 'Astarion',
        image: assetUrl('/assets/images/astarion.jpg'),
        isActive: true,
      },
      {
        name: 'Gale',
        image: assetUrl('/assets/images/gale.jpg'),
        isActive: true,
      },
      {
        name: 'Halsin',
        image: assetUrl('/assets/images/halsin.jpg'),
        isActive: true,
      },
      {
        name: 'Jaheira',
        image: assetUrl('/assets/images/jaheira.jpg'),
        isActive: true,
      },
      {
        name: 'Karlach',
        image: assetUrl('/assets/images/karlach.jpg'),
        isActive: true,
      },
      {
        name: "Lae'zel",
        image: assetUrl('/assets/images/laezel.jpg'),
        isActive: true,
      },
      {
        name: 'Minsc',
        image: assetUrl('/assets/images/minsc.jpg'),
        isActive: true,
      },
      {
        name: 'Minthara',
        image: assetUrl('/assets/images/minthara.jpg'),
        isActive: true,
      },
      {
        name: 'Shadowheart',
        image: assetUrl('/assets/images/shadowheart.jpg'),
        isActive: true,
      },
      {
        name: 'Wyll',
        image: assetUrl('/assets/images/wyll.jpg'),
        isActive: true,
      },
    ],
  },
  {
    id: 'kotor1',
    name: 'Knights of the Old Republic 1',
    numberOnSquad: 2,
    selectedSquad: [],
    squad: [
      {
        name: 'Bastila Shan',
        image: assetUrl('/assets/images/bastila.jpg'),
        isActive: true,
      },
      {
        name: 'Canderous Ordo',
        image: assetUrl('/assets/images/canderous.jpg'),
        isActive: true,
      },
      {
        name: 'Carth Onasi',
        image: assetUrl('/assets/images/carth.jpg'),
        isActive: true,
      },
      {
        name: 'HK-47',
        image: assetUrl('/assets/images/hk-47.jpg'),
        isActive: true,
      },
      {
        name: 'Jolee Bindo',
        image: assetUrl('/assets/images/jolee-bindo.jpg'),
        isActive: true,
      },
      {
        name: 'Juhani',
        image: assetUrl('/assets/images/juhani.jpg'),
        isActive: true,
      },
      {
        name: 'Mission Vao',
        image: assetUrl('/assets/images/mission-voa.jpg'),
        isActive: true,
      },
      {
        name: 'T3-M4',
        image: assetUrl('/assets/images/t3.jpg'),
        isActive: true,
      },
      {
        name: 'Zaalbar',
        image: assetUrl('/assets/images/zaalbar.jpg'),
        isActive: true,
      },
    ],
  },
  {
    id: 'kotor2',
    name: 'Knights of the Old Republic 2',
    numberOnSquad: 2,
    selectedSquad: [],
    squad: [
      {
        name: 'Atton Rand',
        image: assetUrl('/assets/images/atton-rand.jpg'),
        isActive: true,
      },
      {
        name: 'Bao-Dur',
        image: assetUrl('/assets/images/bao-dur.jpg'),
        isActive: true,
      },
      {
        name: 'Brianna ',
        image: assetUrl('/assets/images/brianna.jpg'),
        isActive: true,
      },
      {
        name: 'G0-T0 ',
        image: assetUrl('/assets/images/go-to.jpg'),
        isActive: true,
      },
      {
        name: 'Hanharr',
        image: assetUrl('/assets/images/hanharr.jpg'),
        isActive: true,
      },
      {
        name: 'HK-47',
        image: assetUrl('/assets/images/hk-47.jpg'),
        isActive: true,
      },
      {
        name: 'Kreia',
        image: assetUrl('/assets/images/traya.jpg'),
        isActive: true,
      },
      {
        name: 'Mandalore',
        image: assetUrl('/assets/images/canderous.jpg'),
        isActive: true,
      },
      {
        name: 'Mical',
        image: assetUrl('/assets/images/mical.jpg'),
        isActive: true,
      },
      {
        name: 'Mira',
        image: assetUrl('/assets/images/miratsl.jpg'),
        isActive: true,
      },
      {
        name: 'T3-M4',
        image: assetUrl('/assets/images/t3.jpg'),
        isActive: true,
      },
      {
        name: 'Visas Marr',
        image: assetUrl('/assets/images/visas-marr.jpg'),
        isActive: true,
      },
    ],
  },
]);

const activeGame = ref(games.value[0]);

function randomizeSquad() {
  activeGame.value.selectedSquad = []
  let activeSquad = activeGame.value.squad.filter(squad => squad.isActive)

  while(activeGame.value.selectedSquad.length < activeGame.value.numberOnSquad || activeGame.value.selectedSquad.length === activeSquad.length) {
    let selectedSquadMember = activeSquad[Math.floor(Math.random() * activeSquad.length)]
    activeSquad = activeSquad.filter(squad => squad !== selectedSquadMember)
    activeGame.value.selectedSquad.push(selectedSquadMember)
  }
}


</script>
