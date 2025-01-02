<script>
export default {
  methods: {
    addToFavorite(character) {
      this.favoriteCharacters.add(character)
    },
    removeFromFavorites(characterId) {
      this.favoriteCharacters = new Set(
        [...this.favoriteCharacters].filter(c => c.id !== characterId)
      )
    }
  },
  props: {
    character: {
      required: true,
      type: Object,
    },
    isFavorite: {
      type: Boolean,
      default: false
    }
  },

}
</script>

<template>
  <div class="characterCard">
    <img draggable="false" :src="character.img" alt="" />
    <button @click="addToFavorite(character)">⭐</button>
    <button v-if="isFavorite" @click="removeFromFavorites(character.id)">❌</button>
    <h2>{{ character.name }}</h2>
    <p v-if="character.occupation">{{ character.occupation }}</p>
    <p v-else>Not Specified</p>
    <p>
      First Appers in
      <i>{{ character.firstAppears }}</i>
    </p>
    <p>
      Last Appers in
      <i>{{ character.lastAppears }}</i>
    </p>
  </div>
</template>

<style>
.characterCard {
  width: 320px;
  position: relative;
}

.characterCard>img {
  width: 100%;
  height: 420px;
  aspect-ratio: 1/1;
  object-fit: cover;
}

.characterCard>button {
  position: absolute;
  left: 0;
  background-color: transparent;
  font-size: 32px;
  border: 0;
  cursor: pointer;
}
</style>