<template>
  <div class="h-[95vh] py-5 bg-slate-300 flex flex-col items-center">
    <div class="form w-5/6">
      <h1 class="mb-10 text-2xl text-center text-sky-900">
        Contact Us
      </h1>
      
      <form
        name="myForm"
        action=""
        method="get"
        class="text-sky-900 bg-slate-200 rounded-lg shadow-xl w-full p-5"
        onsubmit="return validateForm()"
      >
        <p class="full-width">
          <label for="name" class="under">Full Name *</label>
          <input
            class=""
            type="text"
            name="fname"
            placeholder="Enter your full name"
            id="name"
            required
          />
        </p>
        <p>
          <label for="email">Email *</label>
          <input
            type="email"
            name="email"
            placeholder="Enter you email adress"
            id="email"
            required
          />
        </p>
        <p>
          <label for="phone">Phone *</label>
          <input
            type="tel"
            name="phone"
            placeholder="Enter your phone number"
            id="phone"
            required
          />
        </p>
        <p class="full-width">
          <label for="">Message</label>
          <textarea
            name=""
            id=""
            cols="30"
            rows="7"
            placeholder="Write your message here..."
          ></textarea>
        </p>
        <p class="submit full-width">
          <button
            class="rounded-lg text-slate-300 group bg-sky-900 shadow-xl"
            type="submit"
            value="Submit"
            style="cursor: pointer">
            Submit
          </button>
        </p>
      </form>
    </div>
  </div>
</template>

<script>
import { RouterLink } from "vue-router";

export default {};
</script>

<style scoped>

input,
textarea {
  background-color: #6b708d10;
  border: 0 !important;
  outline: 0 !important;
}

input,
textarea,
button {
  width: 100%;
}

form {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
}
form label {
  display: block;
}

.full-width {
  grid-column: 1 / 3;
}
button,
input,
textarea {
  padding: 0.5em;
}
</style>
