<template>
  <div class="h-[40px] bg-slate-200">
    <div class="text-center text-slate-400 pt-2 italic">"{{ quote }}"</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      quote: ""
    };
  },
  methods: {
     created() {
       fetch("https://type.fit/api/quotes")
        .then( (response) => response.json())
        .then((data) => this.quote = data[Math.floor(Math.random() * data.length)].text
        )
        
    },
  },
  mounted(){
    this.created()
  }
};
</script>

<style scoped></style>
