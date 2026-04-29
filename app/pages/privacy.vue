<template>
  <div class="min-h-screen bg-background px-4 py-8">
    <div class="container mx-auto max-w-4xl">
      <div class="card">
        <p class="section-kicker mb-2">Privacy</p>
        <h1 class="text-3xl font-bold text-text">Privacy Policy</h1>

        <p class="mt-4 text-text-muted">
          This Privacy Policy explains how Chatravasa ("we", "us", "our") collects, uses,
          and discloses information when you visit our website.
        </p>

        <section class="mt-6">
          <h2 class="text-xl font-semibold text-text">Information we collect</h2>
          <ul class="mt-2 list-inside list-disc text-text-muted">
            <li>Information you provide directly, e.g., contact form submissions.</li>
            <li>Usage data collected automatically (pages visited, timestamps, device info).</li>
            <li>Cookies and similar tracking technologies.</li>
          </ul>
        </section>

        <section class="mt-6">
          <h2 class="text-xl font-semibold text-text">How we use information</h2>
          <p class="mt-2 text-text-muted">We use data to operate and improve the site, respond to inquiries, and for analytics and security.</p>
        </section>

        <section class="mt-6">
          <h2 class="text-xl font-semibold text-text">Cookies & third parties</h2>
          <p class="mt-2 text-text-muted">We use cookies for basic site functionality. Currently we do not use any analytics services; if we add analytics in the future we will choose privacy-friendly options (for example, Plausible) and disclose them here.</p>
          <p class="mt-2 text-text-muted">We do not share sensitive personal data (for example, phone numbers) with third parties. We may share limited data with service providers (hosting, email delivery) who process data on our behalf under contractual obligations.</p>
        </section>

        <section class="mt-6">
          <h2 class="text-xl font-semibold text-text">Security</h2>
          <p class="mt-2 text-text-muted">We take reasonable measures to protect personal data, but cannot guarantee absolute security.</p>
          <p class="mt-2 text-text-muted">Data is stored in Supabase and is encrypted at rest (AES-256) and in transit (TLS) by default. Row Level Security (RLS) policies are used to restrict access so only authorized parties can access data.</p>
        </section>

        <section class="mt-6">
          <h2 class="text-xl font-semibold text-text">Data storage & retention</h2>
          <p class="mt-2 text-text-muted">Resident records are retained in our database for hostels to preserve operational records even after a resident leaves. If a resident requests deletion of their data, they should contact the hostel administrator who has the ability to remove the record.</p>
          <p class="mt-2 text-text-muted">If a hostel is unlisted or removed from the platform, all of its associated data is permanently deleted. We will notify affected users in advance if we plan to collect new categories of data in the future.</p>
        </section>

        <section class="mt-6">
          <h2 class="text-xl font-semibold text-text">Children</h2>
          <p class="mt-2 text-text-muted">The site is not intended for children under 13. We do not knowingly collect personal information from children.</p>
        </section>

        <section class="mt-6">
          <h2 class="text-xl font-semibold text-text">Changes</h2>
          <p class="mt-2 text-text-muted">We may update this policy; we'll post changes here with a revised effective date.</p>
        </section>

        <section class="mt-6">
          <h2 class="text-xl font-semibold text-text">Contact</h2>
          <p class="mt-2 text-text-muted">If you have questions about this policy, contact us at support@chatravasa.com.</p>
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
  title: "Privacy Policy | Chatravasa",
  description: "Privacy policy for Chatravasa — data we collect and how we use it.",
});

useHead({
  link: [{ rel: "canonical", href: `${siteUrl.value}/privacy` }],
});
</script>
