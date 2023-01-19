<!-- eslint-disable vue/no-parsing-error -->
<template>
  <form class="md-layout cv-form">
    <md-card class="md-layout-item md-size-50 md-small-size-100">
      <md-card-header>
        <div class="md-title">Theme Configuration</div>
      </md-card-header>

      <md-card-content>
        <md-field>
          <label for="first-name">CV Name</label>
          <md-input v-model="cvInfo.theme.cvName" />
        </md-field>
        <md-field>
          <label for="first-name">Theme color</label>
          <md-input v-model="cvInfo.theme.color" />
        </md-field>
        <div class="md-layout md-gutter">
          <div class="md-layout-item md-small-size-100">
            <md-switch v-model="cvInfo.theme.avatar" class="md-primary"
              >Rounded Avatar</md-switch
            >
          </div>

          <div class="md-layout-item md-small-size-100">
            <md-switch v-model="cvInfo.theme.position" class="md-primary"
              >Main Section Right</md-switch
            >
          </div>
        </div>
      </md-card-content>
    </md-card>
    <md-card class="md-layout-item md-size-50 md-small-size-100">
      <md-card-header>
        <div class="md-title">Your Info</div>
      </md-card-header>

      <md-card-content>
        <div class="md-layout md-gutter">
          <div class="md-layout-item md-small-size-100">
            <md-field>
              <label for="first-name">Name</label>
              <md-input v-model="cvInfo.userInfo.name" />
            </md-field>
          </div>

          <div class="md-layout-item md-small-size-100">
            <md-field>
              <label for="first-name">Job Title</label>
              <md-input v-model="cvInfo.userInfo.jobTitle" />
            </md-field>
          </div>
        </div>

        <div class="md-layout md-gutter">
          <div class="md-layout-item md-small-size-100">
            <md-field>
              <label for="first-name">Phone</label>
              <md-input v-model="cvInfo.userInfo.phone" />
              <PhoneIcon fillColor="rgba(0,0,0,0.54)" />
            </md-field>
          </div>

          <div class="md-layout-item md-small-size-100">
            <md-field>
              <label for="age">Email</label>
              <md-input v-model="cvInfo.userInfo.email" />
              <EmailIcon fillColor="rgba(0,0,0,0.54)" />
            </md-field>
          </div>
        </div>

        <div class="md-layout md-gutter">
          <div class="md-layout-item md-small-size-100">
            <md-field>
              <label for="first-name">Country</label>
              <md-input v-model="cvInfo.userInfo.country" />
            </md-field>
          </div>

          <div class="md-layout-item md-small-size-100">
            <md-field>
              <label for="age">City</label>
              <md-input v-model="cvInfo.userInfo.city" />
            </md-field>
          </div>
        </div>
      </md-card-content>
    </md-card>
    <md-card class="md-layout-item md-size-50 md-small-size-100">
      <md-card-header>
        <div class="md-title">Summary</div>
      </md-card-header>

      <md-card-content>
        <div class="md-layout md-gutter">
          <div class="md-layout-item md-small-size-100">
            <md-field>
              <label>Textarea</label>
              <md-textarea></md-textarea>
            </md-field>
          </div>
        </div>
      </md-card-content>
    </md-card>
    <md-card class="md-layout-item md-size-50 md-small-size-100">
      <md-card-header>
        <div class="md-title">Professional Experience</div>
      </md-card-header>

      <md-card-content>
        <md-card
          class="md-layout-item md-small-size-100"
          style="margin-bottom: 15px"
          v-for="(item, index) of cvInfo.proffesionalExperiance"
          :key="index"
        >
          <md-card-header>
            <h3>Job {{ index + 1 }}</h3>
          </md-card-header>
          <md-card-content>
            <div class="md-layout md-gutter">
              <div class="md-layout-item md-small-size-100">
                <md-field>
                  <label for="first-name">Job Title</label>
                  <md-input v-model="item.jobTitle" />
                </md-field>
                <div class="md-layout md-gutter">
                  <div class="md-layout-item md-small-size-100">
                    <md-field>
                      <label for="first-name">Company Name</label>
                      <md-input v-model="item.companyName" />
                    </md-field>
                  </div>

                  <div class="md-layout-item md-small-size-100">
                    <md-field>
                      <label for="first-name">Company Residance</label>
                      <md-input v-model="item.companyResidance" />
                    </md-field>
                  </div>
                </div>
                <div class="md-layout md-gutter">
                  <div class="md-layout-item md-small-size-100">
                    <md-field>
                      <label for="first-name">Year (from)</label>
                      <md-input v-model="item.yearFrom" />
                      <CalendarIcon fillColor="rgba(0,0,0,0.54)" />
                    </md-field>
                  </div>

                  <div class="md-layout-item md-small-size-100">
                    <md-field>
                      <label for="first-name">Year (to)</label>
                      <md-input v-model="item.yearTo" />
                      <CalendarIcon fillColor="rgba(0,0,0,0.54)" />
                    </md-field>
                  </div>
                </div>
                <md-card
                  class="md-layout-item md-small-size-100"
                  style="margin-bottom: 15px"
                  v-for="(itemDetail, index) of item.details"
                  :key="index"
                >
                  <md-card-header>
                    <h3>Job detail {{ index + 1 }}</h3>
                  </md-card-header>
                  <md-card-content>
                    <div class="md-layout md-gutter">
                      <div class="md-layout-item md-small-size-100">
                        <md-field>
                          <label for="first-name">Job Detail</label>
                          <md-input v-model="itemDetail.detail" />
                        </md-field>
                      </div>
                    </div>
                  </md-card-content>
                </md-card>
              </div>
            </div>
          </md-card-content>
          <md-card-actions>
            <md-button
              @click.prevent="addNewJobDetail(index)"
              class="md-primary"
              >Add new job detail</md-button
            >
          </md-card-actions>
        </md-card>
      </md-card-content>
      <md-card-actions>
        <md-button @click.prevent="addNewJob()" class="md-primary"
          >Add new job</md-button
        >
      </md-card-actions>
    </md-card>

    <md-card class="md-layout-item md-size-50 md-small-size-100">
      <md-card-header>
        <div class="md-title">Projects</div>
      </md-card-header>

      <md-card-content>
        <md-card
          class="md-layout-item md-small-size-100"
          style="margin-bottom: 15px"
          v-for="(item, index) of cvInfo.projects"
          :key="index"
        >
          <md-card-header>
            <h3>Project {{ index + 1 }}</h3>
          </md-card-header>
          <md-card-content>
            <div class="md-layout md-gutter">
              <div class="md-layout-item md-small-size-100">
                <md-field>
                  <label for="first-name">Project Name</label>
                  <md-input v-model="item.projectTitle" />
                </md-field>
                <div class="md-layout md-gutter">
                  <div class="md-layout-item md-small-size-100">
                    <md-field>
                      <label for="first-name">Project Residance</label>
                      <md-input v-model="item.projectResidance" />
                    </md-field>
                  </div>

                  <div class="md-layout-item md-small-size-100">
                    <md-field>
                      <label for="first-name">Project Description</label>
                      <md-input v-model="item.projectDescription" />
                    </md-field>
                  </div>
                </div>
                <md-card
                  class="md-layout-item md-small-size-100"
                  style="margin-bottom: 15px"
                  v-for="(itemDetail, index) of item.details"
                  :key="index"
                >
                  <md-card-header>
                    <h3>Project detail {{ index + 1 }}</h3>
                  </md-card-header>
                  <md-card-content>
                    <div class="md-layout md-gutter">
                      <div class="md-layout-item md-small-size-100">
                        <md-field>
                          <label for="first-name">Job Detail</label>
                          <md-input v-model="itemDetail.detail" />
                        </md-field>
                      </div>
                    </div>
                  </md-card-content>
                </md-card>
              </div>
            </div>
          </md-card-content>
          <md-card-actions>
            <md-button
              @click.prevent="addNewProjectDetail(index)"
              class="md-primary"
              >Add new project detail</md-button
            >
          </md-card-actions>
        </md-card>
      </md-card-content>
      <md-card-actions>
        <md-button @click.prevent="addNewProject()" class="md-primary"
          >Add new project</md-button
        >
      </md-card-actions>
    </md-card>

    <md-card class="md-layout-item md-size-50 md-small-size-100">
      <md-card-header>
        <div class="md-title">Education</div>
      </md-card-header>

      <md-card-content>
        <md-card
          class="md-layout-item md-small-size-100"
          style="margin-bottom: 15px"
          v-for="(item, index) of cvInfo.education"
          :key="index"
        >
          <md-card-header>
            <h3>School {{ index + 1 }}</h3>
          </md-card-header>
          <md-card-content>
            <div class="md-layout md-gutter">
              <div class="md-layout-item md-small-size-100">
                <div class="md-layout md-gutter">
                  <div class="md-layout-item md-small-size-100">
                    <md-field>
                      <label for="first-name">School Name</label>
                      <md-input v-model="item.schoolName" />
                      <AccountSchoolIcon fillColor="rgba(0,0,0,0.54)" />
                    </md-field>
                  </div>

                  <div class="md-layout-item md-small-size-100">
                    <md-field>
                      <label for="first-name">School Title</label>
                      <md-input v-model="item.projectDescription" />
                      <SchoolIcon fillColor="rgba(0,0,0,0.54)" />
                    </md-field>
                  </div>
                </div>
                <md-field>
                  <label for="first-name">School Residance</label>
                  <md-input v-model="item.schoolResidance" />
                  <CityIcon fillColor="rgba(0,0,0,0.54)" />
                </md-field>
                <div class="md-layout md-gutter">
                  <div class="md-layout-item md-small-size-100">
                    <md-field>
                      <label for="first-name">Year (from)</label>
                      <md-input v-model="item.yearFrom" />
                      <CalendarIcon fillColor="rgba(0,0,0,0.54)" />
                    </md-field>
                  </div>

                  <div class="md-layout-item md-small-size-100">
                    <md-field>
                      <label for="first-name">Year (to)</label>
                      <md-input v-model="item.yearTo" />
                      <CalendarIcon fillColor="rgba(0,0,0,0.54)" />
                    </md-field>
                  </div>
                </div>
              </div>
            </div>
          </md-card-content>
        </md-card>
      </md-card-content>
      <md-card-actions>
        <md-button @click.prevent="addNewSchool()" class="md-primary"
          >Add new school</md-button
        >
      </md-card-actions>
    </md-card>

    <md-card class="md-layout-item md-size-50 md-small-size-100">
      <md-card-header>
        <div class="md-title">Skills</div>
      </md-card-header>

      <md-card-content>
        <md-card
          class="md-layout-item md-small-size-100"
          style="margin-bottom: 15px"
          v-for="(item, index) of cvInfo.skills"
          :key="index"
        >
          <md-card-header>
            <h3>Skill {{ index + 1 }}</h3>
          </md-card-header>
          <md-card-content>
            <div class="md-layout md-gutter">
              <div class="md-layout-item md-small-size-100">
                <md-field>
                  <label for="first-name">Skill Name</label>
                  <md-input v-model="item.skillName" />
                </md-field>
                <md-card
                  class="md-layout-item md-small-size-100"
                  style="margin-bottom: 15px"
                  v-for="(itemDetail, index) of item.setOfSkills"
                  :key="index"
                >
                  <md-card-header>
                    <h3>Skill detail {{ index + 1 }}</h3>
                  </md-card-header>
                  <md-card-content>
                    <div class="md-layout md-gutter">
                      <div class="md-layout-item md-small-size-100">
                        <md-field>
                          <label for="first-name">Skill Detail</label>
                          <md-input v-model="itemDetail.skill" />
                        </md-field>
                      </div>
                    </div>
                  </md-card-content>
                </md-card>
              </div>
            </div>
          </md-card-content>
          <md-card-actions>
            <md-button
              @click.prevent="addNewSkillDetail(index)"
              class="md-primary"
              >Add new skill detail</md-button
            >
          </md-card-actions>
        </md-card>
      </md-card-content>
      <md-card-actions>
        <md-button @click.prevent="addNewSkill()" class="md-primary"
          >Add new skill</md-button
        >
      </md-card-actions>
    </md-card>

    <md-card class="md-layout-item md-size-50 md-small-size-100">
      <md-card-header>
        <div class="md-title">Languages</div>
      </md-card-header>

      <md-card-content>
        <md-card
          class="md-layout-item md-small-size-100"
          style="margin-bottom: 15px"
          v-for="(item, index) of cvInfo.languages"
          :key="index"
        >
          <md-card-header>
            <h3>Language {{ index + 1 }}</h3>
          </md-card-header>
          <md-card-content>
            <div class="md-layout md-gutter">
              <div class="md-layout-item md-small-size-100">
                <div class="md-layout md-gutter">
                  <div class="md-layout-item md-small-size-100">
                    <md-field>
                      <label for="first-name">Language Name</label>
                      <md-input v-model="item.name" />
                    </md-field>
                  </div>

                  <div class="md-layout-item md-small-size-100">
                    <md-field>
                      <label for="first-name">Language Level</label>
                      <md-input v-model="item.level" />
                    </md-field>
                  </div>
                </div>
                <md-field>
                  <label for="first-name">Stars</label>
                  <md-input type="number" v-model="item.stars" />
                </md-field>
              </div>
            </div>
          </md-card-content>
        </md-card>
      </md-card-content>
      <md-card-actions>
        <md-button @click.prevent="addNewLanguage()" class="md-primary"
          >Add new language</md-button
        >
      </md-card-actions>
    </md-card>

    <md-card class="md-layout-item md-size-50 md-small-size-100">
      <md-card-header>
        <div class="md-title">Hobbies</div>
      </md-card-header>

      <md-card-content>
        <md-card
          class="md-layout-item md-small-size-100"
          style="margin-bottom: 15px"
          v-for="(item, index) of cvInfo.hobbies"
          :key="index"
        >
          <md-card-header>
            <h3>Hobby {{ index + 1 }}</h3>
          </md-card-header>
          <md-card-content>
            <div class="md-layout md-gutter">
              <div class="md-layout-item md-small-size-100">
                <md-field>
                  <label for="first-name">Hobby Name</label>
                  <md-input v-model="item.name" />
                </md-field>
              </div>
            </div>
          </md-card-content>
        </md-card>
      </md-card-content>
      <md-card-actions>
        <md-button @click.prevent="addNewHobby()" class="md-primary"
          >Add new hobby</md-button
        >
      </md-card-actions>
    </md-card>

    <md-card class="md-layout-item md-size-50 md-small-size-100">
      <md-card-header>
        <div class="md-title">Social</div>
      </md-card-header>

      <md-card-content>
        <div class="md-layout md-gutter">
          <div class="md-layout-item md-small-size-100">
            <md-field>
              <label for="first-name">LinkedIn</label>
              <md-input v-model="cvInfo.social.linkedin" />
              <LinkedInIcon fillColor="#0072b1" />
            </md-field>
          </div>

          <div class="md-layout-item md-small-size-100">
            <md-field>
              <label for="first-name">GitHub</label>
              <md-input v-model="cvInfo.social.github" />
              <GithubIcon fillColor="#000" />
            </md-field>
          </div>
        </div>

        <div class="md-layout md-gutter">
          <div class="md-layout-item md-small-size-100">
            <md-field>
              <label for="first-name">Facebook</label>
              <md-input v-model="cvInfo.social.facebook" />
              <FacebookIcon fillColor="#4064AC" />
            </md-field>
          </div>

          <div class="md-layout-item md-small-size-100">
            <md-field>
              <label for="age">Instagram</label>
              <md-input v-model="cvInfo.social.instagram" />
              <InstagramIcon fillColor="#E95846" />
            </md-field>
          </div>
        </div>

        <div class="md-layout md-gutter">
          <div class="md-layout-item md-small-size-100">
            <md-field>
              <label for="first-name">Twitter</label>
              <md-input v-model="cvInfo.social.twitter" />
              <TwitterIcon fillColor="#1A98E8" />
            </md-field>
          </div>

          <div class="md-layout-item md-small-size-100">
            <md-field>
              <label for="age">Discord</label>
              <md-input v-model="cvInfo.social.discord" />
              <DiscordIcon fillColor="#5562EA" />
            </md-field>
          </div>
        </div>
      </md-card-content>
    </md-card>
  </form>
</template>

<script>
import PhoneIcon from "vue-material-design-icons/Phone.vue";
import EmailIcon from "vue-material-design-icons/Email.vue";
import FacebookIcon from "vue-material-design-icons/Facebook.vue";
import LinkedInIcon from "vue-material-design-icons/Linkedin.vue";
import GithubIcon from "vue-material-design-icons/Github.vue";
import DiscordIcon from "vue-material-design-icons/Discord.vue";
import InstagramIcon from "vue-material-design-icons/Instagram.vue";
import TwitterIcon from "vue-material-design-icons/Twitter.vue";
import AccountSchoolIcon from "vue-material-design-icons/AccountSchool.vue";
import SchoolIcon from "vue-material-design-icons/School.vue";
import CityIcon from "vue-material-design-icons/City.vue";
import CalendarIcon from "vue-material-design-icons/Calendar.vue";

export default {
  components: {
    PhoneIcon,
    EmailIcon,
    FacebookIcon,
    LinkedInIcon,
    GithubIcon,
    DiscordIcon,
    InstagramIcon,
    TwitterIcon,
    AccountSchoolIcon,
    SchoolIcon,
    CityIcon,
    CalendarIcon,
  },
  data() {
    return {
      cvInfo: {
        theme: {
          cvName: "",
          color: "",
          avatar: false,
          position: false,
        },
        userInfo: {
          name: "",
          jobTitle: "",
          phone: "",
          email: "",
          country: "",
          city: "",
        },
        summary: {
          description: "",
        },
        proffesionalExperiance: [
          {
            jobTitle: "",
            companyName: "",
            companyResidance: "",
            yearFrom: null,
            yearTo: null,
            details: [
              {
                detail: "",
              },
            ],
          },
        ],
        projects: [
          {
            projectTitle: "",
            projectResidance: "",
            projectDescription: "",
            details: [
              {
                detail: "",
              },
            ],
          },
        ],
        education: [
          {
            schoolName: "",
            schoolTitle: "",
            schoolResidance: "",
            yearFrom: null,
            yearTo: null,
          },
        ],
        skills: [
          {
            skillName: "",
            setOfSkills: [
              {
                skill: "",
              },
            ],
          },
        ],
        languages: [
          {
            name: "",
            level: "",
            stars: null,
          },
        ],
        hobbies: [
          {
            name: "",
          },
        ],
        social: {
          facebook: "",
          linkedin: "",
          twitter: "",
          instagram: "",
          github: "",
          discord: "",
        },
      },
    };
  },
  methods: {
    saveCvInfo() {
      this.$store.commit("setCvInfo", this.cvInfo);
    },
    addNewJob() {
      var newJob = {
        jobTitle: "",
        companyName: "",
        companyResidance: "",
        yearFrom: null,
        yearTo: null,
        details: [
          {
            detail: "",
          },
        ],
      };
      this.cvInfo.proffesionalExperiance.push(newJob);
    },
    addNewJobDetail(index) {
      var newJobDetail = { detail: "" };
      this.cvInfo.proffesionalExperiance[index].details.push(newJobDetail);
    },
    addNewProject() {
      var newProject = {
        projectTitle: "",
        projectResidance: "",
        projectDescription: "",
        details: [
          {
            detail: "",
          },
        ],
      };
      this.cvInfo.projects.push(newProject);
    },
    addNewProjectDetail(index) {
      var newProjectDetail = { detail: "" };
      this.cvInfo.projects[index].details.push(newProjectDetail);
    },
    addNewSchool() {
      var newSchool = {
        schoolName: "",
        schoolTitle: "",
        schoolResidance: "",
        yearFrom: null,
        yearTo: null,
      };
      this.cvInfo.education.push(newSchool);
    },
    addNewSkill() {
      var newSkill = {
        skillName: "",
        setOfSkills: [
          {
            skill: "",
          },
        ],
      };
      this.cvInfo.skills.push(newSkill);
    },
    addNewSkillDetail(index) {
      var newSkillDetail = { skill: "" };
      this.cvInfo.skills[index].setOfSkills.push(newSkillDetail);
    },
    addNewLanguage() {
      var newLanguage = {
        name: "",
        level: "",
        stars: null,
      };
      this.cvInfo.languages.push(newLanguage);
    },
    addNewHobby() {
      var newHobby = {
        name: "",
      };
      this.cvInfo.hobbies.push(newHobby);
    },
  },
};
</script>

<style>
.cv-form {
  padding: 0 20px;
  margin-top: 100px;
  padding-bottom: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
}
</style>