<script lang="ts">
  import ContentContainer from "../components/ContentContainer.svelte";

  let name = "";
  let email = "";
  let subject = "";
  let message = "";

  function handleSubmit(e: Event) {
    e.preventDefault();
  }
</script>

<style>
  label {
    @apply block space-y-2;
  }

  textarea {
    @apply w-full resize-none p-2 h-40;
  }

  input {
    @apply w-full p-2;
  }

  img {
    object-position: 85% 25%;
  }
</style>

<svelte:head>
  <title>Lauren Settembrino - Contact</title>
</svelte:head>

<ContentContainer>
  <div class="grid grid-cols-1 gap-8 lg:grid-cols-2 ">
    <div class="space-y-6">
      <h1 class="text-4xl">Contact</h1>
      <img class="h-48 w-full object-cover lg:hidden" src="img/contact.jpg" alt="contact" />
      <form class="space-y-4" on:submit={handleSubmit}>
        <label>
          <p>Name</p>
          <input bind:value={name} required />
        </label>
        <label>
          <p>Email</p>
          <input bind:value={email} required type="email" />
        </label>
        <label>
          <p>Subject</p>
          <input bind:value={subject} required />
        </label>
        <label>
          <p>Message</p>
          <textarea bind:value={message} required />
        </label>
        <div class="flex flex-row justify-end">
          <button class="bg-blue-500 py-2 px-4 text-white hover:bg-blue-400" type="submit">Submit</button>
        </div>
      </form>
    </div>
    <img class="hidden h-full w-full object-cover lg:block" src="img/contact.jpg" alt="contact" />
  </div>
</ContentContainer>
