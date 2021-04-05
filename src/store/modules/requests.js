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
        },
        setRequests(state, payload) {
            state.requests = payload;
        }
    },
    actions: {
        async contactMentor(context, payload) {
            const newRequest = {
                userEmail: payload.email,
                message: payload.message
            };
            const response = await fetch(`https://codist-61d83-default-rtdb.europe-west1.firebasedatabase.app/requests/${payload.mentorId}.json`, {
                method: 'POST',
                body: JSON.stringify(newRequest)
            });

            const responseData = await response.json();

            if (!response.ok) {
                const error = new Error(responseData.message || 'Failed to send request.');
                throw error;
            }

            newRequest.id = responseData.name;
            newRequest.mentorId = payload.mentorId;

            context.commit('addRequest', newRequest);
        },
        async fetchRequests(context) {
            const mentorId = context.rootGetters.userId;
            const token = context.rootGetters.token;
            const response = await fetch(`https://codist-61d83-default-rtdb.europe-west1.firebasedatabase.app/requests/${mentorId}.json?auth=` + token);
            const responseData = await response.json();

            if (!response.ok) {
                const error = new Error(responseData.message || 'Failed to fetch!');
                throw error;
            }

            const requests = [];

            for (const key in responseData) {
                const request = {
                    id: key,
                    mentorId: mentorId,
                    userEmail: responseData[key].userEmail,
                    message: responseData[key].message
                };
                request.push(request);
            }

            context.commit('setRequests', requests);
        }
    },
    getters: {
        requests(state, _, _2, rootGetters) {
            const mentorId = rootGetters.userId;
            return state.requests.filter(req => req.mentorId === mentorId);
        },
        hasRequests(_, getters) {
            return getters.requests && getters.requests.length > 0;
        },
    },
};