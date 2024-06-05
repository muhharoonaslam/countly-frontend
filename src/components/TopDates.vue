<template>
  <div class="container max-w-full h-full p-4">
    <h1 class="text-2xl font-bold mb-4">
      Top {{ numberOfTopDates }} Dates with Highest Event Counts
    </h1>
    <div id="wrapper" class="container max-w-full h-full mb-6 mt-6">
      <div class="sm:grid  sm:gap-4 sm:grid-cols-3">
        <div
          id="jh-stats-positive"
          class="flex flex-col justify-center px-4 py-4 bg-white border border-gray-100 rounded-[10px] shadow-[10px_10px_10px_-15px_rgba(0,0,0,0.3)] hover:shadow-[10px_10px_30px_-15px_rgba(0,0,0,0.3)] transition ease-in-out delay-150"
          v-for="(event, index) in topDates" :key="index"
        >
          <div>
            <div>
              <p class="flex items-center justify-end text-[#10A14A] text-md">
                <span class="font-bold">6%</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-5 h-5 fill-current"
                  viewBox="0 0 24 24"
                >
                  <path
                    class="heroicon-ui"
                    d="M20 15a1 1 0 002 0V7a1 1 0 00-1-1h-8a1 1 0 000 2h5.59L13 13.59l-3.3-3.3a1 1 0 00-1.4 0l-6 6a1 1 0 001.4 1.42L9 12.4l3.3 3.3a1 1 0 001.4 0L20 9.4V15z"
                  />
                </svg>
              </p>
            </div>
            <p class="text-2xl font-bold text-center text-gray-800">{{ event.date }}</p>
            <p class="text-sm text-center text-gray-500">Event Count: {{ event.count }}</p>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import { getTopDates } from "../utils/dataUtils";

export default {
  props: {
    numberOfTopDates: {
      type: Number,
      default: 3,
    },
  },
  data() {
    return {
      topDates: [],
    };
  },
  mounted() {
    this.topDates = getTopDates(this.numberOfTopDates);
  },
};
</script>

<style scoped>
/* Add any scoped styles here if needed */
</style>
