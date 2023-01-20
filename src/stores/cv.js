// stores/counter.js
import {
    defineStore
} from 'pinia'

export const useCvStore = defineStore('cvStore', {
    state: () => {
        return {
            cvInfo: {
                theme: {
                    cvName: "",
                    primaryColor: "#006666",
                    secondaryColor: "#1ab3b8",
                    avatar: false,
                    position: false,
                },
                userInfo: {
                    name: "",
                    avatar: "",
                    jobTitle: "",
                    phone: "",
                    email: "",
                    country: "",
                    city: "",
                },
                summary: {
                    description: "",
                },
                proffesionalExperiance: [{
                    jobTitle: "",
                    companyName: "",
                    companyResidance: "",
                    yearFrom: null,
                    yearTo: null,
                    details: [{
                        detail: "",
                    }, ],
                }, ],
                projects: [{
                    projectTitle: "",
                    projectResidance: "",
                    projectDescription: "",
                    details: [{
                        detail: "",
                    }, ],
                }, ],
                education: [{
                    schoolName: "",
                    schoolTitle: "",
                    schoolResidance: "",
                    yearFrom: null,
                    yearTo: null,
                }, ],
                skills: [{
                    skillName: "",
                    setOfSkills: [{
                        skill: "",
                    }, ],
                }, ],
                languages: [{
                    name: "",
                    level: "",
                    stars: null,
                }, ],
                hobbies: [{
                    name: "",
                }, ],
                social: {
                    facebook: "",
                    linkedin: "",
                    twitter: "",
                    instagram: "",
                    github: "",
                    discord: "",
                },
            }
        }
    },
    // could also be defined as
    // state: () => ({ count: 0 })
    getters: {
        getCvInfo: (state) => {
            return state.cvInfo;
        }
    },
    actions: {
        setCvInfo(payload) {
            this.cvInfo = payload;
        },
    },
})