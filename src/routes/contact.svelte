<script lang="ts">
  import ContentContainer from "../components/ContentContainer.svelte";
  import Spinner from "../components/Spinner.svelte";
  import Modal from "../components/Modal.svelte";

  let name = "";
  let email = "";
  let subject = "";
  let message = "";
  let requestStatus = "";

  let modalContentVisible = false;

  function handleLoad() {
    modalContentVisible = true;
  }

  function handleClose() {
    modalContentVisible = false;
  }

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

<svelte:head>
  <title>Contact | Lauren Settembrino</title>
  <meta property="og:site_name" content="Lauren Settembrino" />
  <meta property="og:title" content="Contact | Lauren Settembrino" />
  <meta property="og:description" content="Lauren Settembrino is a dancer and choreographer based in New York City." />
  <meta property="og:image" content="https://laurensettembrino.com/img/home-bg-mobile.jpg" />
  <meta property="og:url" content="https://laurensettembrino.com/contact/" />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<ContentContainer page="Contact">
  <div class="grid grid-cols-1 gap-4 lg:gap-8 lg:grid-cols-2 ">
    <Modal isVisible={modalContentVisible} onClose={handleClose} let:open>
      <button class="flex items-stretch" slot="trigger" on:click={open}>
        <picture>
          <source srcset="img/contact.webp" type="image/webp" />
          <source srcset="img/contact.jpg" type="image/jpeg" />
          <img class="thumbnail" src="img/contact.jpg" alt="Contact" />
        </picture>
      </button>
      <figure class="relative" slot="content">
        <picture>
          <source srcset="img/10-full.webp" type="image/webp" />
          <source srcset="img/10-full.jpg" type="image/jpeg" />
          <!-- svelte-ignore a11y-img-redundant-alt -->
          <img
            class="full"
            src="img/10-full.jpg"
            alt="Black and white photo of Lauren Settembrino looking away with one arm extended"
            on:load={handleLoad}
          />
        </picture>
        <figcaption class="text-xs md:text-sm absolute bottom-0 p-4 text-white bg-black bg-opacity-50 w-full">
          Photo Credit: Meghann Padgett / Angie Moon Dance Theatre rehearsal
        </figcaption>
      </figure>
    </Modal>
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
        {#if requestStatus === "succeeded"}
          <p class="flex items-center text-green-700">Your message has been sent!</p>
        {:else if requestStatus === "failed"}
          <p class="flex items-center text-red-700">Oops! Something went wrong.</p>
        {/if}
        <button
          class="py-2 px-4 bg-blue-600 hover:bg-blue-500 text-white"
          disabled={requestStatus === "requested"}
          type="submit"
        >
          {#if requestStatus === "requested"}
            <Spinner />
          {:else}Submit{/if}
        </button>
      </div>
    </form>
  </div>
</ContentContainer>

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

  img.thumbnail {
    @apply h-48 w-full object-cover lg:h-full;
    object-position: 85% 25%;
  }

  @media screen(lg) {
    form {
      grid-column: 1;
      grid-row: 1;
    }

    img.thumbnail {
      grid-column: 2;
      grid-row: 1;
    }
  }
</style>
