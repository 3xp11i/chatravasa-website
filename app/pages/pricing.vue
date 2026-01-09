<template>
  <div class="min-h-screen bg-background">
    <!-- Header Section -->
    <section class="hero-section mt-10">
      <div class="container mx-auto px-4 py-12 text-center">
        <h1 class="text-4xl md:text-6xl font-bold mb-3">
          <span class="hindiFont text-primary">छात्रावास</span>
          <span class="block text-text">Pricing Calculator</span>
        </h1>
        <p class="text-lg md:text-xl text-text-muted mx-auto">
          Calculate the perfect plan for your hostel management needs
        </p>
      </div>
    </section>

    <!-- Pricing Calculator -->
    <section class="py-12 px-4">
      <div class="container mx-auto max-w-5xl">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          <!-- Input Section -->
          <div class="card">
            <h2 class="text-2xl font-bold text-text mb-6">Configure Your Plan</h2>
            
            <!-- Number of Residents -->
            <div class="mb-6">
              <label class="block text-text font-semibold mb-2">
                Number of Residents
              </label>
              <input 
                v-model.number="residentCount"
                type="number"
                min="1"
                max="500"
                class="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-primary transition-colors"
                placeholder="Enter number of residents"
              />
              <p class="text-sm text-text-muted mt-2">
                Base plan includes up to 500 residents across 3 hostels
              </p>
            </div>

            <!-- Feature Selection -->
            <div class="space-y-4">
              <h3 class="text-lg font-semibold text-text mb-3">Select Features</h3>
              
              <!-- Meal Management -->
              <label class="feature-checkbox">
                <input 
                  v-model="features.mealManagement"
                  type="checkbox"
                  class="checkbox"
                />
                <div class="flex-1">
                  <div class="font-semibold text-text">Meal Management</div>
                  <div class="text-sm text-text-muted">
                    Schedule meals, track attendance, manage dietary requirements
                  </div>
                  <div class="text-sm font-semibold text-primary mt-1">
                    ₹20/resident/month
                  </div>
                </div>
              </label>

              <!-- Fees Management -->
              <label class="feature-checkbox">
                <input 
                  v-model="features.feesManagement"
                  type="checkbox"
                  class="checkbox"
                />
                <div class="flex-1">
                  <div class="font-semibold text-text">Fees Management</div>
                  <div class="text-sm text-text-muted">
                    Track payments, generate invoices, manage financial records
                  </div>
                  <div class="text-sm font-semibold text-primary mt-1">
                    ₹10/resident/month
                  </div>
                </div>
              </label>

              <!-- Complaints Management -->
              <label class="feature-checkbox">
                <input 
                  v-model="features.complaintsManagement"
                  type="checkbox"
                  class="checkbox"
                />
                <div class="flex-1">
                  <div class="font-semibold text-text">Complaints Management</div>
                  <div class="text-sm text-text-muted">
                    Receive, manage, and resolve resident complaints efficiently
                  </div>
                  <div class="text-sm font-semibold text-primary mt-1">
                    ₹5/resident/month
                  </div>
                </div>
              </label>

              <!-- Staff Management -->
              <label class="feature-checkbox">
                <input 
                  v-model="features.staffManagement"
                  type="checkbox"
                  class="checkbox"
                />
                <div class="flex-1">
                  <div class="font-semibold text-text">Staff Management</div>
                  <div class="text-sm text-text-muted">
                    Manage staff accounts, roles, and permissions
                  </div>
                  <div class="text-sm font-semibold text-primary mt-1">
                    ₹100/month (flat fee)
                  </div>
                </div>
              </label>
            </div>
          </div>

          <!-- Pricing Breakdown -->
          <div class="card bg-gradient-to-br from-primary/5 to-secondary/5 border-2 border-primary/20">
            <h2 class="text-2xl font-bold text-text mb-6">Pricing Breakdown</h2>
            
            <div class="space-y-4 mb-6">
              <!-- Base Plan -->
              <div class="flex justify-between items-start pb-4 border-b border-gray-300">
                <div>
                  <div class="font-semibold text-text">Base Plan</div>
                  <div class="text-sm text-text-muted">
                    Up to 3 hostels, 500 residents<br/>
                    Basic resident management
                  </div>
                </div>
                <div class="text-lg font-bold text-text">₹500</div>
              </div>

              <!-- Additional Features -->
              <div v-if="hasSelectedFeatures" class="space-y-3">
                <div class="font-semibold text-text text-sm uppercase tracking-wide">
                  Add-ons
                </div>
                
                <div v-if="features.mealManagement" class="flex justify-between items-start">
                  <div>
                    <div class="font-medium text-text">Meal Management</div>
                    <div class="text-sm text-text-muted">
                      {{ residentCount }} residents × ₹20
                    </div>
                  </div>
                  <div class="font-semibold text-text">₹{{ mealCost }}</div>
                </div>

                <div v-if="features.feesManagement" class="flex justify-between items-start">
                  <div>
                    <div class="font-medium text-text">Fees Management</div>
                    <div class="text-sm text-text-muted">
                      {{ residentCount }} residents × ₹10
                    </div>
                  </div>
                  <div class="font-semibold text-text">₹{{ feesCost }}</div>
                </div>

                <div v-if="features.complaintsManagement" class="flex justify-between items-start">
                  <div>
                    <div class="font-medium text-text">Complaints Management</div>
                    <div class="text-sm text-text-muted">
                      {{ residentCount }} residents × ₹5
                    </div>
                  </div>
                  <div class="font-semibold text-text">₹{{ complaintsCost }}</div>
                </div>

                <div v-if="features.staffManagement" class="flex justify-between items-start">
                  <div>
                    <div class="font-medium text-text">Staff Management</div>
                    <div class="text-sm text-text-muted">
                      Flat fee
                    </div>
                  </div>
                  <div class="font-semibold text-text">₹100</div>
                </div>
              </div>
            </div>

            <!-- Total -->
            <div class="pt-6 border-t-2 border-primary/30">
              <div class="flex justify-between items-center mb-2">
                <div class="text-xl font-bold text-text">Total Monthly Cost</div>
                <div class="text-3xl font-bold text-primary">₹{{ totalCost }}</div>
              </div>
              <p class="text-sm text-text-muted">
                Billed monthly • Cancel anytime
              </p>
            </div>

            <!-- Annual Savings -->
            <div v-if="totalCost > 0" class="mt-6 p-4 bg-secondary/10 rounded-lg border border-secondary/30">
              <div class="flex items-center gap-2 mb-1">
                <svg class="w-5 h-5 text-secondary" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                </svg>
                <span class="font-semibold text-text">Annual Plan Available</span>
              </div>
              <div class="text-sm text-text-muted">
                Pay annually and save 15%: <span class="font-bold text-secondary">₹{{ annualCost }}</span>/year
              </div>
            </div>

            <!-- CTA Button -->
            <div class="mt-6">
              <NuxtLink 
                to="/contact"
                class="block w-full px-6 py-3 bg-primary hover:bg-primary/90 text-white font-semibold rounded-lg shadow-md transition-all text-center"
              >
                Get Started
              </NuxtLink>
            </div>
          </div>
        </div>

        <!-- What's Included Section -->
        <div class="card mt-8">
          <h2 class="text-2xl font-bold text-text mb-6 text-center">
            What's Included in the Base Plan
          </h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div class="text-center">
              <div class="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg class="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
                </svg>
              </div>
              <h3 class="font-semibold text-text mb-2">Up to 3 Hostels</h3>
              <p class="text-sm text-text-muted">Manage multiple hostel properties from one account</p>
            </div>

            <div class="text-center">
              <div class="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg class="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
                </svg>
              </div>
              <h3 class="font-semibold text-text mb-2">Up to 500 Residents</h3>
              <p class="text-sm text-text-muted">Add, update, and remove resident information</p>
            </div>

            <div class="text-center">
              <div class="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg class="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                </svg>
              </div>
              <h3 class="font-semibold text-text mb-2">Secure & Reliable</h3>
              <p class="text-sm text-text-muted">Cloud-based with automatic backups and security</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: "public"
});

// Reactive state
const residentCount = ref(50);
const features = reactive({
  mealManagement: false,
  feesManagement: false,
  complaintsManagement: false,
  staffManagement: false
});

// Computed costs
const mealCost = computed(() => features.mealManagement ? residentCount.value * 20 : 0);
const feesCost = computed(() => features.feesManagement ? residentCount.value * 10 : 0);
const complaintsCost = computed(() => features.complaintsManagement ? residentCount.value * 5 : 0);
const staffCost = computed(() => features.staffManagement ? 100 : 0);

const totalCost = computed(() => {
  return 500 + mealCost.value + feesCost.value + complaintsCost.value + staffCost.value;
});

const annualCost = computed(() => {
  return Math.round(totalCost.value * 12 * 0.85); // 15% discount
});

const hasSelectedFeatures = computed(() => {
  return features.mealManagement || features.feesManagement || 
         features.complaintsManagement || features.staffManagement;
});
</script>

<style scoped>
.card {
  background: var(--color-surface);
  border-radius: 1rem;
  padding: 1.5rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s, box-shadow 0.2s;
}

@media (min-width: 768px) {
  .card {
    padding: 2rem;
  }
}

.feature-checkbox {
  display: flex;
  align-items: start;
  gap: 1rem;
  padding: 1rem;
  background: #F5F5F5;
  border-radius: 0.75rem;
  cursor: pointer;
  transition: all 0.2s;
  border: 2px solid transparent;
}

.feature-checkbox:hover {
  background: #EBEBEB;
  transform: translateY(-1px);
}

.feature-checkbox:has(.checkbox:checked) {
  background: #E8F5E9;
  border-color: var(--color-primary);
}

.checkbox {
  width: 1.25rem;
  height: 1.25rem;
  margin-top: 0.125rem;
  cursor: pointer;
  accent-color: var(--color-primary);
}

input[type="number"] {
  -moz-appearance: textfield;
}

input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

.hindiFont {
  font-family: 'Poppins', sans-serif;
}
</style>
