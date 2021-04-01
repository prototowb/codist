export default {
  namespaced: true,
  state() {
    return {
      lastFetch: null,
      mentors: [
        {
          id: 'c1',
          firstName: 'Tobias',
          lastName: 'Rauer',
          areas: ['frontend', 'career'],
          description:
            "I'm Tobias and I've worked as a freelance web developer for years. Let me help you become a developer as well!",
          hourlyRate: 30
        },
        {
          id: 'c2',
          firstName: 'Julie',
          lastName: 'Jones',
          areas: ['frontend', 'backend', 'career'],
          description:
            'I am Julie and as a senior developer in a big tech company, I can help you get your first job or progress in your current role.',
          hourlyRate: 30
        }
      ]
    };
  },
  mutations: {
    addMentor(state, payload) {
      state.mentors.push(payload);
    },
    setMentors(state, payload) {
      state.mentors = payload;
    },
    setFetchTimestamp(state) {
      state.lastFetch = new Date().getTime();
    }
  },
  actions: {
    async addMentor(context, data) {
      const userId = context.rootGetters.userId;
      const mentorData = {
        firstName: data.first,
        lastName: data.last,
        description: data.desc,
        hourlyRate: data.rate,
        areas: data.areas
      };

      const token = context.rootGetters.token;

      const response = await fetch(`https://codist-61d83-default-rtdb.europe-west1.firebasedatabase.app/mentors/${userId}.json?auth=` + token, {
        method: 'PUT',
        body: JSON.stringify(mentorData)
      });

      const responseData = await response.json();

      if (!response.ok) {
        const error = new Error(responseData.message || 'Failed to fetch.');
        throw error;
      }

      context.commit('addMentor', {
        ...mentorData,
        id: userId
      });
    },
    async loadMentors(context, payload) {
      if (!payload.forceRefresh && !context.getters.shouldUpdate) {
        return;
      }
        
      const response = await fetch(`https://codist-61d83-default-rtdb.europe-west1.firebasedatabase.app/mentors.json`);
      const responseData = await response.json();

      if (!response.ok) {
        // ...
      }

      const mentors = [];

      for (const key in responseData) {
        const mentor = {
          id: key,
          firstName: responseData[key].firstName,
          lastName: responseData[key].lastName,
          description: responseData[key].description,
          hourlyRate: responseData[key].hourlyRate,
          areas: responseData[key].areas
        };
        mentors.push(mentor);
      }

      context.commit('setMentors', mentors);
      context.commit('setFetchTimestamp');
    }
  },
  getters: {
    mentors(state) {
      return state.mentors;
    },
    hasMentors(state) {
      return state.mentors && state.mentors.length > 0;
    },
    isMentor(_, getters, _2, rootGetters) {
      const mentors = getters.mentors;
      const userId = rootGetters.userId;
      return mentors.some(mentor => mentor.id === userId);
    },
    shouldUpdate(state) {
      const lastFetch = state.lastFetch;
      if (!lastFetch) {
        return true;
      }
      const currentTimeStamp = new Date().getTime();
      return (currentTimeStamp - lastFetch) / 1000 > 60;
    }
  }
}