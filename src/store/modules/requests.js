export default {
    namespaced: true,
    state() {
        return {
            requests: []
        };
    },
    mutations: {
        addRequest(state, payload) {
            state.requests.push(payload);
        }
    },
    actions: {
        contactMentor(context, payload) {
            const newRequest = {
                id: new Date().toISOString(),
                mentorId: payload.mentorId,
                userEmail: payload.email,
                message: payload.message
            };
            context.commit('addRequest', newRequest);
        }
    }
};