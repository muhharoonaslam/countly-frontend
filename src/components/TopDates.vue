<template>
  <div class="container max-w-full h-full p-4 ">
    <div class="bg-gradient-to-r from-green-600 to-green-700 text-white p-6 shadow-lg rounded-xl mb-8">
      <div class="flex justify-between items-center">
        <div>
          <h1 class="text-xl md:text-3xl font-bold ">Welcome back, Haroon!</h1>
          <p class="text-sm md:text-md">Here's what's happening today</p>
        </div>
        <div class="flex items-center space-x-4">
          <!-- <img src="https://via.placeholder.com/50" alt="User Avatar" class="rounded-full w-12 h-12 border-2 border-white shadow-md"> -->
        </div>
      </div>
    </div>
    <h1 class="text-lg md:text-xl font-semibold mb-2 text-gray-600">
      Top {{ numberOfTopDates }} Dates with Highest Event Counts
    </h1>
    <div id="wrapper" class="container max-w-full h-full mb-6 mt-3">
      <div class="sm:grid sm:gap-4 sm:grid-cols-3">
        <div
          id="jh-stats-positive"
          class="flex flex-col justify-center px-4 py-4 bg-white border border-gray-100 rounded-[10px] shadow-[10px_10px_10px_-15px_rgba(0,0,0,0.3)] hover:shadow-[10px_10px_30px_-15px_rgba(0,0,0,0.3)] transition ease-in-out delay-150 mb-4 md:mb-0"
          v-for="(event, index) in topDatesByCount"
          :key="index"
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
            <p class="text-xl font-medium text-gray-700">{{ event.date }}</p>
            <p class="text-xs font-semibold text-gray-400">
              Event Count: {{ event.count }}
            </p>
          </div>
        </div>
      </div>
      <h1 class="text-lg md:text-xl font-semibold mb-2 text-gray-600 mt-6">
        Event Metrics
      </h1>
      <div class="sm:grid sm:gap-4 sm:grid-cols-2 mt-3">
        <div class="bg-white rounded-lg shadow-[10px_10px_10px_-15px_rgba(0,0,0,0.3)] hover:shadow-[10px_10px_30px_-15px_rgba(0,0,0,0.3)] transition ease-in-out delay-150 p-6 w-full mb-4 md:mb-0">
          <div class="flex justify-between items-center">
            <div class="flex justify-between  flex-col h-full w-2/5 md:w-auto">
              <h3 class="text-md md:text-lg text-gray-400 font-semibold">Total Events Count</h3>
              <p class="text-lg md:text-3xl font-bold text-gray-700 mt-5">{{ metrics.totalEvents }}</p>
            </div>
            <div class="bar-chart w-1/2 md:w-auto">
              <div class="bg-green-600" style="height: 40px;"></div>
              <div class="bg-green-600" style="height: 60px;"></div>
              <div class="bg-green-600" style="height: 50px;"></div>
              <div class="bg-green-600" style="height: 70px;"></div>
              <div class="bg-green-600" style="height: 45px;"></div>
              <div class="bg-green-600" style="height: 65px;"></div>
              <div class="bg-green-600" style="height: 55px;"></div>
            </div>
          </div>
        </div>
        <div class="bg-white rounded-lg shadow-[10px_10px_10px_-15px_rgba(0,0,0,0.3)] hover:shadow-[10px_10px_30px_-15px_rgba(0,0,0,0.3)] transition ease-in-out delay-150  p-6 w-full mb-4 md:mb-0">
          <div class="flex justify-between items-center">
            <div class="flex justify-between  flex-col h-full w-2/5 md:w-auto">
              <h3 class="text-md md:text-lg text-gray-400 font-semibold">Total Event Earnings</h3>
              <p class="text-lg md:text-3xl font-bold text-gray-700 mt-5">{{ metrics.totalSumOfMoney }}</p>
            </div>
            <div class="bar-chart w-1/2 md:w-auto">
              <div class="bg-lime-600" style="height: 40px;"></div>
              <div class="bg-lime-600" style="height: 60px;"></div>
              <div class="bg-lime-600" style="height: 50px;"></div>
              <div class="bg-lime-600" style="height: 70px;"></div>
              <div class="bg-lime-600" style="height: 45px;"></div>
              <div class="bg-lime-600" style="height: 65px;"></div>
              <div class="bg-lime-600" style="height: 55px;"></div>
            </div>
          </div>
        </div>

      </div>
      <div class="h-4"></div>

    </div>
  </div>
</template>

<script>
import {
  getTopDatesByCount,
  calculateMetrics,
} from "../utils/dataUtils";

export default {
  props: {
    numberOfTopDates: {
      type: Number,
      default: 3,
    },
  },
  data() {
    return {
      metrics: {
        totalEvents: 0,
        totalDuration: 0,
        totalSumOfMoney: 0,
        averageDuration: 0,
        averageScore: 0,
      },
      topDatesByCount: [],
    };
  },
  mounted() {
    this.metrics = calculateMetrics();
    this.topDatesByCount = getTopDatesByCount(this.numberOfTopDates);
  },
};
</script>

<style scoped>
/* Add any scoped styles here if needed */
    .bar-chart div {
      width: 0.5rem;
      margin: 0.3rem;
      display: inline-block;
      border-radius: 10px;
    }
</style>
