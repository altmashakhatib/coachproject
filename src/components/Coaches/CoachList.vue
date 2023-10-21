<template>
  <section><TheHeader></TheHeader></section>
  <section>
    <coach-filter @change-filter="changeFilter"></coach-filter>
  </section>
  <div>
    <base-button @click="fetchCoach()">Refresh</base-button>
    <base-link to="/register">Register</base-link>
  </div>
  <div v-if="isLoading">
    <base-spinner></base-spinner>
  </div>
  <base-card>
    <section>
      <ul class="valid" :class="{ invalid: isLoading }" v-if="hasCoaches">
        <coach-item
          v-for="coach in filterCoaches"
          :key="coach.id"
          :id="coach.id"
          :firstName="coach.firstName"
          :lastName="coach.lastName"
          :rate="coach.hourlyRate"
          :areas="coach.areas"
        >
        </coach-item>
      </ul>
      <ul v-else>
        <li>Not Found</li>
      </ul>
    </section>
  </base-card>
</template>
<script>
import TheHeader from "../nav/TheHeader.vue";
import CoachItem from "./CoachItem.vue";
import CoachFilter from "./CoachFilter.vue";

export default {
  data() {
    return {
      isLoading: false,
      isActivated: {
        frontend: true,
        backend: true,
        career: true,
      },
    };
  },

  components: {
    TheHeader,
    CoachItem,
    CoachFilter,
  },
  computed: {
    filterCoaches() {
      const coaches = this.$store.getters["coaches/coaches"];
      return coaches.filter((coach) => {
        if (this.isActivated.frontend && coach.areas.includes("frontend")) {
          return true;
        }
        if (this.isActivated.backend && coach.areas.includes("backend")) {
          return true;
        }
        if (this.isActivated.career && coach.areas.includes("career")) {
          return true;
        }
        return false;
      });
    },
    hasCoaches() {
      return this.$store.getters["coaches/hasCoaches"];
    },
  },
  created() {
    this.fetchCoach();
  },
  methods: {
    changeFilter(updateFilter) {
      this.isActivated = updateFilter;
    },
    async fetchCoach() {
      this.isLoading = true;
      await this.$store.dispatch("coaches/fetchCoach");
      this.isLoading = false;
    },
  },
};
</script>
<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
.invalid {
  content-visibility: hidden;
}

.controls {
  display: flex;
  justify-content: space-between;
}
</style>
<!-- <style scoped>
/* Style for the section */


/* Style for the heading */
h2 {
  font-size: 1.5em;
  margin-bottom: 10px;
}

/* Style for the button */
button {
  padding: 10px 20px;
  font-size: 1em;
  background-color: #3498db;
  color: #fff;
  border: none;
  cursor: pointer;
  margin-right: 10px;
}

button:hover {
  background-color: #2980b9;
}

/* Style for the router link */
router-link {
  padding: 10px 20px;
  font-size: 1em;
  background-color: #2ecc71;
  color: #fff;
  text-decoration: none;
  border: none;
  cursor: pointer;
}

router-link:hover {
  background-color: #27ae60;
}

/* Style for the coach list */
ul {
  list-style: none;
  padding: 0;
}

/* Style for the coach item */
li {
  padding: 10px;
  border-bottom: 1px solid #ccc;
}

/* Style for the 'Not Found' message */
ul li:first-child {
  font-style: italic;
}
</style> -->
