<template>
  <div class="min-h-screen bg-background">
    <section class="hero-section mt-6 px-4">
      <div class="container mx-auto max-w-6xl py-12 md:py-16">
        <div class="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div class="pt-4">
            <p class="section-kicker mb-4">Student hostels in Varanasi</p>
            <h1 class="max-w-3xl text-4xl font-bold tracking-tight text-text md:text-6xl">
              Find hostels, PGs, and safe student stays in Varanasi.
            </h1>
            <p class="mt-5 text-lg text-text-muted md:text-xl">
              Chatravasa is being built for students searching for hostels in Varanasi, PGs in Varanasi, boys hostels, girls hostels, and rooms near BHU, Lanka, Sigra, Kamachha, and other college-heavy areas.
            </p>

            <div class="mt-8 flex flex-col gap-4 sm:flex-row">
              <NuxtLink
                to="/features"
                class="rounded-lg bg-secondary px-6 py-3 font-semibold text-white shadow-md transition-all hover:bg-secondary/90"
              >
                Explore app features
              </NuxtLink>
              <NuxtLink
                to="/blog"
                class="rounded-lg bg-primary px-6 py-3 font-semibold text-white shadow-md transition-all hover:bg-primary/90"
              >
                Read hostel guides
              </NuxtLink>
              <NuxtLink
                to="/pricing"
                class="rounded-lg border-2 border-black/10 bg-white px-6 py-3 font-semibold text-text shadow-sm transition-all hover:bg-gray-50"
              >
                View hostel software pricing
              </NuxtLink>
              <a
                href="https://app.chatravasa.com"
                class="rounded-lg border-2 border-primary px-6 py-3 font-semibold text-primary transition-all hover:bg-primary/5"
                rel="noopener"
              >
                Open management app
              </a>
            </div>

            <div class="mt-8 flex flex-wrap gap-3 text-sm text-text-muted">
              <span class="rounded-full bg-white px-4 py-2 shadow-sm">BHU hostel search</span>
              <span class="rounded-full bg-white px-4 py-2 shadow-sm">Lanka PGs</span>
              <span class="rounded-full bg-white px-4 py-2 shadow-sm">Sigra hostels</span>
              <span class="rounded-full bg-white px-4 py-2 shadow-sm">Girls hostel in Varanasi</span>
            </div>
          </div>

          <div class="card space-y-6">
            <div>
              <p class="section-kicker mb-2">Why this site exists</p>
              <h2 class="text-2xl font-bold text-text">Built for search today, search functionality tomorrow.</h2>
            </div>
            <p class="text-text-muted">
              The main search experience is planned for when enough hostels are live in the app. Until then, this website can rank for student hostel searches in Varanasi through helpful pages, focused copy, and blog content.
            </p>
            <ul class="space-y-3 text-sm text-text-muted">
              <li>• SEO landing pages for student hostels in Varanasi and PGs in Varanasi</li>
              <li>• Blog posts targeting areas like BHU, Lanka, Sigra, and Kamachha</li>
              <li>• Clear links to the management app for hostel owners</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section class="px-4 py-8">
      <div class="container mx-auto max-w-6xl">
        <div class="grid gap-4 md:grid-cols-3">
          <div class="feature-card">
            <h3 class="text-lg font-semibold text-text">Student-first search intent</h3>
            <p class="mt-2 text-sm text-text-muted">
              The homepage is optimized around what students actually search: hostels in Varanasi, PGs in Varanasi, and budget stays near colleges.
            </p>
          </div>
          <div class="feature-card">
            <h3 class="text-lg font-semibold text-text">Local area coverage</h3>
            <p class="mt-2 text-sm text-text-muted">
              Content can mention BHU, Lanka, Sigra, Kamachha, Banaras Hindu University, and other Varanasi student hubs.
            </p>
          </div>
          <div class="feature-card">
            <h3 class="text-lg font-semibold text-text">Owner platform preserved</h3>
            <p class="mt-2 text-sm text-text-muted">
              The app.chatravasa.com product stays in place for hostel owners while this site grows organic traffic.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="px-4 py-8">
      <div class="container mx-auto max-w-6xl">
        <div class="card">
          <p class="section-kicker mb-2">Popular search areas</p>
          <h2 class="text-3xl font-bold text-text">Where students look for hostels in Varanasi</h2>
          <div class="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            <div class="rounded-xl bg-background px-4 py-3 text-sm font-medium text-text">Hostels near BHU</div>
            <div class="rounded-xl bg-background px-4 py-3 text-sm font-medium text-text">PGs in Lanka</div>
            <div class="rounded-xl bg-background px-4 py-3 text-sm font-medium text-text">Girls hostels in Sigra</div>
            <div class="rounded-xl bg-background px-4 py-3 text-sm font-medium text-text">Boys hostels in Kamachha</div>
            <div class="rounded-xl bg-background px-4 py-3 text-sm font-medium text-text">Student accommodation near Banaras Hindu University</div>
            <div class="rounded-xl bg-background px-4 py-3 text-sm font-medium text-text">Budget PG in Varanasi</div>
            <div class="rounded-xl bg-background px-4 py-3 text-sm font-medium text-text">Safe hostel for outstation students</div>
            <div class="rounded-xl bg-background px-4 py-3 text-sm font-medium text-text">Verified hostel listings in Varanasi</div>
          </div>
        </div>
      </div>
    </section>

    <section class="px-4 py-8">
      <div class="container mx-auto max-w-6xl">
        <div class="card">
          <div class="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <div>
              <p class="section-kicker mb-2">For hostel owners</p>
              <h2 class="text-3xl font-bold text-text">The management system still lives at app.chatravasa.com</h2>
              <p class="mt-4 text-text-muted">
                Hostel owners can use the management platform for residents, rooms, meals, and fees. This public site exists to capture search demand from students and guide them toward trusted hostel options.
              </p>
            </div>
            <div class="grid gap-4 sm:grid-cols-2">
              <div class="feature-card">
                <h3 class="text-lg font-semibold text-text">Resident management</h3>
                <p class="mt-2 text-sm text-text-muted">Keep room and resident data organized inside the app.</p>
              </div>
              <div class="feature-card">
                <h3 class="text-lg font-semibold text-text">Meal and fee tracking</h3>
                <p class="mt-2 text-sm text-text-muted">Run operations cleanly while the website handles discoverability.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="px-4 py-8">
      <div class="container mx-auto max-w-6xl">
        <div class="flex items-end justify-between gap-4 flex-wrap mb-6">
          <div>
            <p class="section-kicker mb-2">Latest blog posts</p>
            <h2 class="text-3xl font-bold text-text">Practical Varanasi hostel guides</h2>
          </div>
          <NuxtLink to="/blog" class="font-semibold text-primary hover:text-primary-dark">View all posts</NuxtLink>
        </div>

        <div v-if="latestPosts?.length" class="grid gap-5 md:grid-cols-3">
          <NuxtLink
            v-for="post in latestPosts.slice(0, 3)"
            :key="post.path"
            :to="post.path"
            class="blog-card"
          >
            <p class="text-xs font-semibold uppercase tracking-[0.2em] text-primary">{{ post.tags?.[0] ?? 'Hostel guide' }}</p>
            <h3 class="mt-3 text-xl font-bold text-text">{{ post.title }}</h3>
            <p class="mt-3 text-sm text-text-muted">{{ post.description }}</p>
            <div class="mt-5 flex flex-wrap gap-2 text-xs text-text-muted">
              <span v-for="tag in post.tags?.slice(0, 3)" :key="tag" class="rounded-full bg-white px-3 py-1 shadow-sm">{{ tag }}</span>
            </div>
          </NuxtLink>
        </div>
      </div>
    </section>

    <section class="px-4 py-8 pb-16">
      <div class="container mx-auto max-w-4xl">
        <div class="card">
          <p class="section-kicker mb-2">FAQ</p>
          <h2 class="text-3xl font-bold text-text">Common Varanasi hostel search questions</h2>
          <div class="mt-6 space-y-5">
            <div>
              <h3 class="text-lg font-semibold text-text">Is Chatravasa already a hostel search engine?</h3>
              <p class="mt-2 text-sm text-text-muted">
                Not yet. The search feature will launch after enough hostels are listed in the platform, but the site can still rank now with useful location pages and blog posts.
              </p>
            </div>
            <div>
              <h3 class="text-lg font-semibold text-text">What keywords is this site targeting?</h3>
              <p class="mt-2 text-sm text-text-muted">
                Student hostels in Varanasi, hostels in Varanasi, PGs in Varanasi, boys hostel in Varanasi, girls hostel in Varanasi, hostel near BHU, hostel near Lanka, and hostel near Sigra.
              </p>
            </div>
            <div>
              <h3 class="text-lg font-semibold text-text">Where should hostel owners go?</h3>
              <p class="mt-2 text-sm text-text-muted">
                Hostel owners should use the management app at app.chatravasa.com for operations, while this website brings in organic search traffic from students.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="px-4 py-8 border-t border-gray-100">
      <div class="container mx-auto max-w-6xl">
        <div class="flex items-center justify-between text-sm text-text-muted">
          <div>© Chatravasa</div>
          <div class="flex gap-4">
            <NuxtLink to="/privacy" class="hover:underline">Privacy Policy</NuxtLink>
            <NuxtLink to="/terms" class="hover:underline">Terms of Service</NuxtLink>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<script lang="ts" setup>
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
const { data: latestPosts } = await useAsyncData<BlogPost[]>("home-latest-posts", async () => {
  const posts = (await queryCollection("content").all()) as BlogPost[];
  return posts
    .filter((post) => post.path?.startsWith("/blog/"))
    .sort((left, right) => String(right.date ?? "").localeCompare(String(left.date ?? "")));
});

const siteUrl = computed(() => site.url?.replace(/\/$/, "") ?? "https://chatravasa.com");

useSeoMeta({
  title: "Student hostels in Varanasi, PGs in Varanasi, and hostel search guides | Chatravasa",
  description:
    "Chatravasa helps students find hostels in Varanasi, PGs in Varanasi, boys hostels, girls hostels, and safe stays near BHU, Lanka, Sigra, and Kamachha. Student rooms, affordable accommodation, and college hostels.",
  keywords:
    "student hostels in Varanasi, hostels in Varanasi, PGs in Varanasi, boys hostel in Varanasi, girls hostel in Varanasi, hostel near BHU, hostel near Lanka, hostel near Sigra, hostel near Kamachha, Chatrawaas, chaatrawas, छात्रावास, हॉस्टल, हॉस्टल वाराणसी, छात्रावास वाराणसी, बॉयज हॉस्टल, गर्ल्स हॉस्टल, student accommodation Varanasi, boys PG in Varanasi, girls PG in Varanasi, student rooms Varanasi, affordable hostel Varanasi, budget accommodation Varanasi, safe hostel for students, hostel in Benares, Varanasi student housing, rooms near Banaras Hindu University, college hostel near Varanasi, बीएचयू के पास हॉस्टल, लंका में हॉस्टल, सिग्रा में हॉस्टल, आउटस्टेशन छात्र के लिए हॉस्टल",
  ogTitle: "Student hostels in Varanasi, PGs, and college accommodation | Chatravasa",
  ogDescription:
    "Find student hostels, PGs, and safe accommodation in Varanasi for BHU, Lanka, Sigra, and Kamachha. Chatravasa helps students search for hostels, rooms, and budget stays.",
  twitterCard: "summary_large_image",
});

useHead({
  link: [{ rel: "canonical", href: `${siteUrl.value}/` }],
});
</script>
