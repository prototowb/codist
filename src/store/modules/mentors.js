export default {
    namespaced: true,
    state() {
        return{
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
      }
    },
    actions: {
      addMentor(context, data) {
        const mentorData = {
          id: context.rootGetters.userId,
          firstName: data.first,
          lastName: data.last,
          description: data.desc,
          hourlyRate: data.rate,
          areas: data.areas
        };

        context.commit('addMentor', mentorData);
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
        }
    }
}