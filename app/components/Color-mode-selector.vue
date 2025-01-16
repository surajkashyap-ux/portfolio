<template>
  <div class="flex space-x-2 items-center">
    <p v-if="showNextModeLabel" class="text-gray-500 dark:text-gray-300 text-xs">Change to {{ nextMode }}</p>
    <button @click="toggleMode" @mouseenter="showNextModeLabel = true" @mouseleave="showNextModeLabel = false"
      class="hover:bg-gray-200 dark:hover:bg-gray-600 px-2 py-1 to-gray-500 text-2xl md:text-base">
      {{ nextModeIcon }}
    </button>
  </div>
</template>

<script setup>
const showNextModeLabel = ref(false);
const colorMode = useColorMode();

const modes = [
  'system',
  'light',
  'dark'
];

const nextModeIcons = {
  system: '🌓',
  light: '🌕',
  dark: '🌑'
}


//Recupera la successiva modalità
const nextMode = computed(() => {
  //Indice della modalità attuale
  const currentModeIndex = modes.indexOf(colorMode.preference);
  let nextModeIndex = null;
  
  //Controlla se è l'ultima modalità
  if(currentModeIndex + 1 === modes.length) {
    nextModeIndex = 0;
  } else {
    nextModeIndex = currentModeIndex + 1;
  }
  
  //Restituisce la prossima modalità di colore usando l'indice calcolato
  return modes[nextModeIndex];
});

const nextModeIcon = computed(() => nextModeIcons[nextMode.value]);

const toggleMode = () => {
  colorMode.preference = nextMode.value
  console.log(nextMode.value);
};
</script>