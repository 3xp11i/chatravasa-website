<template>
  <div class="min-h-screen bg-background px-4 py-10">
    <div class="container mx-auto max-w-4xl">
      <article v-if="post" class="card space-y-8">
        <div>
          <p class="section-kicker mb-3">{{ post.tags?.[0] ?? 'Hostel guide' }}</p>
          <h1 class="text-4xl font-bold text-text md:text-5xl">{{ post.title }}</h1>
          <p class="mt-4 text-lg text-text-muted">{{ post.description }}</p>
          <div class="mt-5 flex flex-wrap gap-3 text-sm text-text-muted">
            <span>{{ formatDate(post.date) }}</span>
            <span v-if="post.updated">Updated {{ formatDate(post.updated) }}</span>
            <span v-if="post.author">By {{ post.author }}</span>
          </div>
        </div>

        <div class="flex flex-wrap gap-2">
          <span v-for="tag in post.tags" :key="tag" class="rounded-full bg-background px-3 py-1 text-xs font-semibold text-text-muted">{{ tag }}</span>
        </div>

        <ContentRenderer :value="post" class="prose prose-neutral max-w-none" />
      </article>
    </div>
  </div>
</template>

<script setup lang="ts">
type BlogPost = {
  path: string;
  title: string;
  description: string;
  date?: string;
  updated?: string;
  author?: string;
  tags?: string[];
  seo?: {
    title?: string;
    description?: string;
  };
};

definePageMeta({
  layout: "public",
});

const route = useRoute();
const site = useSiteConfig();
const slug = computed(() => String(route.params.slug));

const { data: post } = await useAsyncData<BlogPost>(`blog-post-${slug.value}`, async () => {
  const entry = (await queryCollection("content").path(`/blog/${slug.value}`).first()) as BlogPost | null;
  return entry as BlogPost;
});

if (!post.value) {
  throw createError({
    statusCode: 404,
    statusMessage: "Blog post not found",
  });
}

const siteUrl = computed(() => site.url?.replace(/\/$/, "") ?? "https://chatravasa.com");

useSeoMeta({
  title: post.value.seo?.title || post.value.title,
  description: post.value.seo?.description || post.value.description,
  keywords: post.value.tags?.join(", "),
  ogTitle: post.value.seo?.title || post.value.title,
  ogDescription: post.value.seo?.description || post.value.description,
  twitterCard: "summary_large_image",
});

useHead({
  link: [{ rel: "canonical", href: `${siteUrl.value}${post.value.path}` }],
});

function formatDate(value?: string) {
  if (!value) return "";
  return new Intl.DateTimeFormat("en-IN", { year: "numeric", month: "short", day: "2-digit" }).format(
    new Date(value),
  );
}
</script>
