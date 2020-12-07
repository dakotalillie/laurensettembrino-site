<script lang="ts">
  import ContentContainer from "../components/ContentContainer.svelte";
  import Spinner from "../components/Spinner.svelte";

  let name = "";
  let email = "";
  let subject = "";
  let message = "";
  let requestStatus = "";

  function handleSubmit(e: Event) {
    e.preventDefault();
    requestStatus = "requested";

    fetch("https://725k0xsdhd.execute-api.us-east-1.amazonaws.com/Prod/send-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, subject, message }),
    })
      .then(() => {
        requestStatus = "succeeded";
      })
      .catch(() => {
        requestStatus = "failed";
      });
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

<ContentContainer page="Contact">
  <div class="grid grid-cols-1 gap-8 lg:grid-cols-2 ">
    <div class="space-y-6 lg:space-y-0">
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
        <div class="flex flex-row justify-end space-x-4">
          {#if requestStatus === 'succeeded'}
            <p class="flex items-center text-green-500">Your message has been sent!</p>
          {:else if requestStatus === 'failed'}
            <p class="flex items-center text-red-500">Oops! Something went wrong.</p>
          {/if}
          <button
            class="py-2 px-4 bg-blue-500 hover:bg-blue-400 text-white"
            disabled={requestStatus === 'requested'}
            type="submit">
            {#if requestStatus === 'requested'}
              <Spinner />
            {:else}Submit{/if}
          </button>
        </div>
      </form>
    </div>
    <img class="hidden h-full w-full object-cover lg:block" src="img/contact.jpg" alt="contact" />
  </div>
</ContentContainer>
