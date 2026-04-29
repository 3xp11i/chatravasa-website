<template>
  <div class="min-h-screen bg-background flex items-center justify-center px-4">
    <div class="card w-full text-center">
      <h1 class="text-3xl font-bold text-text mb-4">Contact Us</h1>
      <p class="text-text-muted mb-6">
        We'd love to hear from you! Get in touch with us for any questions or support.
      </p>
      <div class="space-y-4 text-left">
        <div>
          <h3 class="font-semibold text-text mb-1">Email</h3>
          <p class="text-text-muted">team@chatravasa.com</p>
        </div>
        <div>
          <h3 class="font-semibold text-text mb-1">Phone</h3>
          <a href="tel:+918127837764" class="text-text-muted hover:text-primary transition-colors">
            +91 812 783 7764
          </a>
        </div>
      </div>
      <NuxtLink 
        to="/"
        class="mt-8 inline-block px-6 py-3 bg-primary hover:bg-primary-dark text-white font-semibold rounded-lg shadow-md transition-all"
      >
        Back to Home
      </NuxtLink>
    </div>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: "public"
});

const site = useSiteConfig();

useSeoMeta({
  title: "Contact Chatravasa",
  description:
    "Contact Chatravasa for hostel management software, student hostel content, and future hostel search features in Varanasi.",
  keywords:
    "contact Chatravasa, hostel management software contact, student hostel Varanasi contact",
  ogTitle: "Contact Chatravasa",
  ogDescription:
    "Get in touch about hostel management software and student hostel discovery in Varanasi.",
  twitterCard: "summary_large_image",
});

useHead({
  link: [{ rel: "canonical", href: `${site.url?.replace(/\/$/, "") ?? "https://chatravasa.com"}/contact` }],
});


</script>

<style>

</style>