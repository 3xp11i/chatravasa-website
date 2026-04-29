<template>
    <nav class="border-b border-black/5 backdrop-blur py-2">
        <div class="container flex items-center justify-between gap-4 py-4">
            <NuxtLink to="/" class="flex items-center gap-3 text-text font-semibold">
                <img src="/pwa-192x192.png" alt="Chatravasa logo" class="h-11 w-11 rounded-xl object-contain" />
                <span class="hidden sm:block text-lg">Chatravasa</span>
            </NuxtLink>

            <div class="hidden md:flex items-center gap-6 text-sm font-medium text-text-muted">
                <NuxtLink to="/features" class="hover:text-primary transition-colors">Features</NuxtLink>
                <NuxtLink to="/blog" class="hover:text-primary transition-colors">Blog</NuxtLink>
                <NuxtLink to="/pricing" class="hover:text-primary transition-colors">Pricing</NuxtLink>
                <NuxtLink to="/contact" class="hover:text-primary transition-colors">Contact</NuxtLink>
            </div>

            <a href="https://app.chatravasa.com" class="greenBtn whitespace-nowrap" rel="noopener">
                Go to App
            </a>
        </div>
    </nav>
</template>

<script lang="ts" setup>
</script>

<style></style>