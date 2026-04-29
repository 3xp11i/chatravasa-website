<template>
  <div class="min-h-screen bg-background px-4 py-8">
    <div class="container mx-auto max-w-4xl">
      <div class="card">
        <p class="section-kicker mb-2">Terms</p>
        <h1 class="text-3xl font-bold text-text">Terms of Service</h1>

        <p class="mt-4 text-text-muted">
          These Terms of Service ("Terms") govern your use of the Chatravasa website. By using the site, you agree to these Terms.
        </p>

        <section class="mt-6">
          <h2 class="text-xl font-semibold text-text">Use of the site</h2>
          <p class="mt-2 text-text-muted">You may use the site for lawful purposes only. Do not misuse or attempt to interfere with site operations.</p>
        </section>

        <section class="mt-6">
          <h2 class="text-xl font-semibold text-text">Content</h2>
          <p class="mt-2 text-text-muted">Content provided on the site is for general information. We do not guarantee accuracy and are not responsible for third-party content.</p>
        </section>

        <section class="mt-6">
          <h2 class="text-xl font-semibold text-text">Intellectual property</h2>
          <p class="mt-2 text-text-muted">All site content is owned or licensed by Chatravasa. You may view content for personal use but may not reproduce it without permission.</p>
        </section>

        <section class="mt-6">
          <h2 class="text-xl font-semibold text-text">Data storage & security</h2>
          <p class="mt-2 text-text-muted">We store user and operational data in Supabase. Data is encrypted at rest (AES-256) and in transit (TLS). Row Level Security (RLS) policies limit access so only authorized users and services can read or modify data.</p>
        </section>

        <section class="mt-6">
          <h2 class="text-xl font-semibold text-text">Resident & hostel data</h2>
          <p class="mt-2 text-text-muted">Resident records are retained by hostels after residents leave to preserve operational records. Residents who wish to have their data removed should contact the hostel administrator to request deletion.</p>
          <p class="mt-2 text-text-muted">If a hostel is unlisted or removed, all associated hostel and resident data is permanently deleted from our systems.</p>
        </section>

        <section class="mt-6">
          <h2 class="text-xl font-semibold text-text">Third parties & analytics</h2>
          <p class="mt-2 text-text-muted">We do not share sensitive personal data (such as phone numbers) with third parties. We currently do not use analytics; if we introduce analytics in the future we will use privacy-friendly options and disclose them here.</p>
        </section>

        <section class="mt-6">
          <h2 class="text-xl font-semibold text-text">Disclaimer & limitation</h2>
          <p class="mt-2 text-text-muted">The site is provided "as is" without warranties. We are not liable for indirect or consequential damages arising from site use.</p>
        </section>

        <section class="mt-6">
          <h2 class="text-xl font-semibold text-text">Governing law</h2>
          <p class="mt-2 text-text-muted">These Terms are governed by applicable laws in the jurisdiction where Chatravasa operates.</p>
        </section>

        <section class="mt-6">
          <h2 class="text-xl font-semibold text-text">Contact</h2>
          <p class="mt-2 text-text-muted">If you have questions about these Terms, contact us at support@chatravasa.com.</p>
        </section>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: "public",
});

const site = useSiteConfig();
const siteUrl = computed(() => site.url?.replace(/\/$/, "") ?? "https://chatravasa.com");

useSeoMeta({
  title: "Terms of Service | Chatravasa",
  description: "Terms of service for Chatravasa — rules and disclaimers for using the website.",
});

useHead({
  link: [{ rel: "canonical", href: `${siteUrl.value}/terms` }],
});
</script>
