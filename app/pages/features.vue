<template>
  <div class="min-h-screen bg-background">
    <section class="hero-section mt-8 px-4">
      <div class="container mx-auto max-w-6xl py-14 md:py-20">
        <p class="section-kicker mb-4 mt-4">Chatravasa App Features</p>
        <h1 class="max-w-4xl text-4xl font-bold tracking-tight text-text md:text-6xl">
          Everything you need to run a modern hostel with clarity and control.
        </h1>
        <p class="mt-6 max-w-3xl text-base text-text-muted md:text-xl">
          Explore how Chatravasa helps with day-to-day operations, resident communication, fee collection,
          meals planning, and complaint handling. Each section shows a sample mobile app mockup that you can
          replace with your own screenshots later.
        </p>
      </div>
    </section>

    <section class="px-4 py-12 md:py-16">
      <div class="container mx-auto max-w-6xl">
        <article
          v-for="(feature, index) in activeFeatures"
          :key="feature.title"
          :class="['feature-row', index % 2 === 1 ? 'feature-row--reverse' : '']"
        >
          <div class="feature-phone-wrap">
            <div class="feature-phone">
              <img
                :src="feature.image"
                :alt="`${feature.title} mobile app screen preview`"
                class="feature-phone-image"
                loading="lazy"
              />
            </div>
          </div>

          <div class="feature-content">
            <p class="feature-status">Available Now</p>
            <h2 class="text-3xl font-bold text-text md:text-4xl">{{ feature.title }}</h2>
            <p class="mt-4 text-base leading-7 text-text-muted md:text-lg">
              {{ feature.description }}
            </p>
            <ul class="mt-6 space-y-3 text-sm text-text md:text-base">
              <li v-for="point in feature.points" :key="point" class="feature-point">{{ point }}</li>
            </ul>
          </div>
        </article>
      </div>
    </section>

    <section class="px-4 py-12 md:py-16">
      <div class="container mx-auto max-w-6xl">
        <div class="mb-12 md:mb-16">
          <p class="section-kicker mb-3">Resident App View</p>
          <h2 class="text-3xl font-bold text-text md:text-5xl">What residents can do inside the app</h2>
          <p class="mt-4 max-w-3xl text-text-muted md:text-lg">
            Residents get a separate experience for meal controls, complaints, in-room status, and alerts so they can stay updated without needing to call or message staff.
          </p>
        </div>

        <article
          v-for="(feature, index) in residentFeatures"
          :key="feature.title"
          :class="['feature-row', index % 2 === 1 ? 'feature-row--reverse' : '']"
        >
          <div class="feature-phone-wrap">
            <div class="feature-phone feature-phone--resident">
              <img
                :src="feature.image"
                :alt="`${feature.title} resident app preview`"
                class="feature-phone-image"
                loading="lazy"
              />
              <span class="feature-badge feature-badge--resident">Resident View</span>
            </div>
          </div>

          <div class="feature-content">
            <p class="feature-status">Resident Experience</p>
            <h2 class="text-3xl font-bold text-text md:text-4xl">{{ feature.title }}</h2>
            <p class="mt-4 text-base leading-7 text-text-muted md:text-lg">
              {{ feature.description }}
            </p>
            <ul class="mt-6 space-y-3 text-sm text-text md:text-base">
              <li v-for="point in feature.points" :key="point" class="feature-point">{{ point }}</li>
            </ul>
          </div>
        </article>

        <div class="mt-8 rounded-3xl border border-primary/15 bg-white/80 p-6 md:mt-10 md:p-8">
          <p class="section-kicker mb-3">Notifications</p>
          <h3 class="text-2xl font-bold text-text md:text-3xl">Two-way alerts for admin and residents</h3>
          <p class="mt-4 max-w-4xl text-text-muted md:text-lg">
            Chatravasa will notify the right person at the right moment: admin gets alerted when a resident creates a new complaint, residents get notified when admin sends a fee reminder, and both sides receive updates when someone replies inside a complaint thread. Complaint status changes also trigger alerts, but only the resident who created a complaint can mark it resolved.
          </p>
        </div>
      </div>
    </section>

    <section class="px-4 py-12 md:py-16">
      <div class="container mx-auto max-w-6xl">
        <div class="mb-12 md:mb-16">
          <p class="section-kicker mb-3">Upcoming Roadmap</p>
          <h2 class="text-3xl font-bold text-text md:text-5xl">Features coming next</h2>
          <p class="mt-4 max-w-3xl text-text-muted md:text-lg">
            These capabilities are planned and will be rolled out in future updates.
          </p>
        </div>

        <article
          v-for="(feature, index) in upcomingFeatures"
          :key="feature.title"
          :class="['feature-row', index % 2 === 1 ? 'feature-row--reverse' : '']"
        >
          <div class="feature-phone-wrap">
            <div class="feature-phone feature-phone--upcoming">
              <img
                :src="feature.image"
                :alt="`${feature.title} upcoming mobile app preview`"
                class="feature-phone-image"
                loading="lazy"
              />
              <span class="feature-badge">Coming Soon</span>
            </div>
          </div>

          <div class="feature-content">
            <p class="feature-status">Planned Feature</p>
            <h3 class="text-3xl font-bold text-text md:text-4xl">{{ feature.title }}</h3>
            <p class="mt-4 text-base leading-7 text-text-muted md:text-lg">
              {{ feature.description }}
            </p>
            <ul class="mt-6 space-y-3 text-sm text-text md:text-base">
              <li v-for="point in feature.points" :key="point" class="feature-point">{{ point }}</li>
            </ul>
          </div>
        </article>
      </div>
    </section>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: "public",
});

const site = useSiteConfig();
const siteUrl = computed(() => site.url?.replace(/\/$/, "") ?? "https://chatravasa.com");

const activeFeatures = [
  {
    title: "Residents Management",
    description:
      "Keep your resident records organized with instant access to room allocation, profile details, joining dates, and occupancy status from one screen.",
    image: "https://picsum.photos/420/860?random=301",
    points: [
      "Add, edit, and track resident profiles quickly",
      "See occupancy and room-level resident mapping",
      "Keep admission and contact details ready for staff",
    ],
  },
  {
    title: "Fees Tracking and Reminders",
    description:
      "Track rent and fee dues, monitor payment history, and send timely reminders so collections stay predictable and fewer payments are missed.",
    image: "https://picsum.photos/420/860?random=302",
    points: [
      "Monitor pending, paid, and overdue fee records",
      "Configure reminder flow for due dates and late payments",
      "Prepare for electricity bill tracking inside fees management",
    ],
  },
  {
    title: "Meals Analytics",
    description:
      "Know how many residents are eating breakfast, lunch, and dinner every day so kitchen planning and food procurement become more accurate.",
    image: "https://picsum.photos/420/860?random=303",
    points: [
      "Daily count view for each meal slot",
      "Reduce over-preparation and food waste",
      "Improve menu planning based on participation trends",
    ],
  },
  {
    title: "Complaints Management",
    description:
      "Capture resident complaints, assign action owners, and track resolution status transparently to improve service quality and response speed.",
    image: "https://picsum.photos/420/860?random=304",
    points: [
      "Log issues with timestamps and category tags",
      "Track open, in-progress, and resolved complaints",
      "Build trust through visible resolution workflows",
    ],
  },
];

const residentFeatures = [
  {
    title: "Meal Opt-In and Opt-Out Controls",
    description:
      "Residents can choose whether they are eating for the current day, the next day, or set a default meal status that applies across the week. That makes meal attendance more accurate for kitchen planning.",
    image: "https://picsum.photos/420/860?random=309",
    points: [
      "Opt in or out for today and tomorrow in seconds",
      "Set a default weekly meal status for breakfast, lunch, and dinner",
      "Give staff a clearer count before food prep starts",
    ],
  },
  {
    title: "Weekly Menu from the Admin",
    description:
      "Residents can view the weekly menu shared by the admin so they know what is planned for each meal across the coming days.",
    image: "https://picsum.photos/420/860?random=310",
    points: [
      "See the full week’s meal plan in one place",
      "Reduce confusion around food timing and menu changes",
      "Help residents decide when to opt in or out",
    ],
  },
  {
    title: "Complaints, Replies, and Attachments",
    description:
      "Residents can file a complaint with a title and description, then attach up to one video and two images. They can also reply in the complaint thread, and only the resident who created the complaint can mark it resolved.",
    image: "https://picsum.photos/420/860?random=311",
    points: [
      "Create complaints with title, description, video, and image attachments",
      "Reply inside the complaint post so the issue stays documented",
      "Keep resolution ownership with the resident who opened the complaint",
    ],
  },
  {
    title: "In-Room Status and Hostel Presence",
    description:
      "A simple in-room status button lets residents mark whether they are inside the hostel or out for a few days, which helps staff understand real-time presence.",
    image: "https://picsum.photos/420/860?random=312",
    points: [
      "Useful when a resident is leaving for a few days",
      "Give the hostel team quick visibility into presence status",
      "Keep resident movement information easy to check",
    ],
  },
];

const upcomingFeatures = [
  {
    title: "Finances Manager",
    description:
      "A dedicated finance workspace for expense tracking, category-wise summaries, and monthly performance snapshots for better operational decisions.",
    image: "https://picsum.photos/420/860?random=305",
    points: [
      "Track day-to-day expenses across categories",
      "Get monthly breakdowns and trends",
      "Support profit visibility and cost optimization",
    ],
  },
  {
    title: "Bill Generation",
    description:
      "Generate clean bills and statements for residents with structured fee line items and downloadable records for accounting continuity.",
    image: "https://picsum.photos/420/860?random=306",
    points: [
      "Create clear, itemized monthly bills",
      "Improve billing consistency across residents",
      "Maintain historical invoice records",
    ],
  },
  {
    title: "Electricity Bill Calculator and Tracker",
    description:
      "Included in fees management, this feature will calculate unit consumption, split usage fairly, and keep a running electricity history for each resident or room.",
    image: "https://picsum.photos/420/860?random=307",
    points: [
      "Calculate electricity cost using unit rates",
      "Track readings and usage period-wise",
      "Merge electricity charges into fee statements",
    ],
  },
  {
    title: "Announcements",
    description:
      "Send common notices and urgent updates to all residents from one place to keep communication consistent and timely.",
    image: "https://picsum.photos/420/860?random=308",
    points: [
      "Post and schedule hostel-wide announcements",
      "Keep residents informed of policy and event updates",
      "Reduce missed messages through centralized communication",
    ],
  },
];

useSeoMeta({
  title: "Chatravasa App Features for Hostel Management and Residents",
  description:
    "Explore Chatravasa app features including residents management, fees tracking and reminders, meals analytics, complaints management, resident meal opt-in controls, weekly menu view, notifications, and upcoming finance and billing tools.",
  keywords:
    "hostel management app features, residents management app, fees tracking reminders, meals analytics hostel, complaints management hostel, resident app features, meal opt in hostel app, weekly menu hostel app, in-room status hostel, hostel notifications app, hostel finance manager, bill generation hostel, electricity bill tracker hostel, announcements app",
  ogTitle: "Chatravasa Features",
  ogDescription:
    "Presentation-style overview of Chatravasa features with mobile app flow examples for hostel operations and resident usage.",
  twitterCard: "summary_large_image",
});

useHead({
  link: [{ rel: "canonical", href: `${siteUrl.value}/features` }],
});
</script>

<style scoped>
.feature-row {
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  gap: 2.5rem;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.72);
  border: 1px solid rgba(0, 0, 0, 0.06);
  border-radius: 1.5rem;
}

.feature-row + .feature-row {
  margin-top: 2.25rem;
}

.feature-phone-wrap {
  display: flex;
  justify-content: center;
}

.feature-phone {
  position: relative;
  width: min(100%, 320px);
  border-radius: 2rem;
  background: #111;
  padding: 0.65rem;
  box-shadow: 0 18px 40px rgba(0, 0, 0, 0.2);
}

.feature-phone--upcoming {
  box-shadow: 0 20px 46px rgba(33, 150, 243, 0.28);
}

.feature-phone--resident {
  box-shadow: 0 20px 46px rgba(76, 175, 80, 0.24);
}

.feature-phone-image {
  width: 100%;
  aspect-ratio: 9 / 19.5;
  object-fit: cover;
  border-radius: 1.5rem;
  display: block;
}

.feature-badge {
  position: absolute;
  top: 0.9rem;
  right: 0.9rem;
  background: var(--color-secondary);
  color: #fff;
  font-size: 0.7rem;
  font-weight: 700;
  padding: 0.35rem 0.6rem;
  border-radius: 999px;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.feature-badge--resident {
  background: var(--color-primary);
}

.feature-content {
  max-width: 42rem;
}

.feature-status {
  color: var(--color-primary-dark);
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.feature-point {
  position: relative;
  padding-left: 1.2rem;
  line-height: 1.6;
}

.feature-point::before {
  content: "";
  position: absolute;
  top: 0.63rem;
  left: 0;
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 999px;
  background: var(--color-primary);
}

@media (min-width: 1024px) {
  .feature-row {
    grid-template-columns: minmax(280px, 360px) minmax(0, 1fr);
    gap: 4rem;
    padding: 3rem;
  }

  .feature-row--reverse {
    grid-template-columns: minmax(0, 1fr) minmax(280px, 360px);
  }

  .feature-row--reverse .feature-phone-wrap {
    order: 2;
  }

  .feature-row--reverse .feature-content {
    order: 1;
  }

  .feature-row + .feature-row {
    margin-top: 3.5rem;
  }
}
</style>