<template>
  <div class="h-[40px] bg-slate-200 flex justify-center">
    <div class="text-center text-slate-400 text-sm pt-2 italic">"{{ quote }}"</div>
    <div class="w-4"></div>
    <div class="text-center text-slate-400 text-sm pt-2 font-bold">{{ author }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      quote: "",
      author: ""
    };
  },
  methods: {
     motivationText() {
       fetch("https://type.fit/api/quotes")
        .then( (response) => response.json())
        .then((data) => this.quote = data[Math.floor(Math.random() * data.length)].text
        )
    },
    motivationAuthor() {
       fetch("https://type.fit/api/quotes")
        .then( (response) => response.json())
        .then((data) => this.author = data[Math.floor(Math.random() * data.length)].author
        )
    },
  },
  mounted(){
    this.motivationText()
    this.motivationAuthor()
  }
};
</script>

<style scoped></style>
