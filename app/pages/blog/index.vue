<template>
  <div class="min-h-screen bg-background px-4 py-10">
    <div class="container mx-auto max-w-6xl">
      <section class="hero-section px-6 py-12 md:px-10 md:py-16">
        <div class="max-w-3xl">
          <p class="section-kicker mb-4">Blog</p>
          <h1 class="text-4xl font-bold text-text md:text-6xl">Hostel guides for students searching Varanasi.</h1>
          <p class="mt-5 text-lg text-text-muted md:text-xl">
            Read practical posts about student hostels in Varanasi, PGs in Varanasi, safe localities, and how to compare hostel options near BHU, Lanka, Sigra, and Kamachha.
          </p>
        </div>
      </section>

      <section class="py-10">
        <div v-if="posts?.length" class="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          <NuxtLink v-for="post in posts" :key="post.path" :to="post.path" class="blog-card">
            <div class="flex items-center justify-between gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              <span>{{ post.tags?.[0] ?? 'Hostel guides' }}</span>
              <span>{{ formatDate(post.date) }}</span>
            </div>
            <h2 class="mt-4 text-2xl font-bold text-text">{{ post.title }}</h2>
            <p class="mt-3 text-sm text-text-muted">{{ post.description }}</p>
            <div class="mt-5 flex flex-wrap gap-2 text-xs text-text-muted">
              <span v-for="tag in post.tags?.slice(0, 3)" :key="tag" class="rounded-full bg-white px-3 py-1 shadow-sm">{{ tag }}</span>
            </div>
          </NuxtLink>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
type BlogPost = {
  path: string;
  title: string;
  description: string;
  date?: string;
  tags?: string[];
};

definePageMeta({
  layout: "public",
});

const site = useSiteConfig();
const { data: posts } = await useAsyncData<BlogPost[]>("blog-posts", async () => {
  const entries = (await queryCollection("content").all()) as BlogPost[];
  return entries
    .filter((post) => post.path?.startsWith("/blog/"))
    .sort((left, right) => String(right.date ?? "").localeCompare(String(left.date ?? "")));
});

const siteUrl = computed(() => site.url?.replace(/\/$/, "") ?? "https://chatravasa.com");

useSeoMeta({
  title: "Blog for student hostels in Varanasi and PGs in Varanasi",
  description:
    "Read blog posts about student hostels in Varanasi, PGs in Varanasi, boys hostels, girls hostels, and local area guides near BHU, Lanka, Sigra, and Kamachha.",
  keywords:
    "student hostels in Varanasi, PGs in Varanasi, hostels in Varanasi, hostel near BHU, hostel near Lanka, hostel near Sigra, hostel near Kamachha",
  ogTitle: "Chatravasa Blog | Student hostels in Varanasi",
  ogDescription:
    "Helpful Varanasi hostel guides built to rank for search terms students use every day.",
  twitterCard: "summary_large_image",
});

useHead({
  link: [{ rel: "canonical", href: `${siteUrl.value}/blog` }],
});

function formatDate(value?: string) {
  if (!value) return "";
  return new Intl.DateTimeFormat("en-IN", { year: "numeric", month: "short", day: "2-digit" }).format(
    new Date(value),
  );
}
</script>
