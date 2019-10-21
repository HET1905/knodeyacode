import axios from "axios";

export default {
  getQuestions: function() {
    return axios.get("/api/questions");
  },
  searchQuestions: topic => {
    return axios.get(`/api/questions/${topic}`);
  },
  getScores: function() {
    return axios.get("/api/scores");
  },
  saveScore: function(scoreData) {
    return axios.post("/api/scores", scoreData);
  },

  // user functions
  getUsers: function() {
    return axios.get("/api/users");
  },

  saveUsers: function(user) {
    return axios.post(`/api/users`, user);
  },

  findUser: function(name) {
    return axios.get(`/api/users/${name}`);
  },

  findUserScore: function(name) {
    return axios.get(`/api/scores/${name}`);
  }
};
