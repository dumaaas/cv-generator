<template>
  <div class="cv-outter">
    <div id="cv" style="min-height: 100vh">
      <div
        class="cv-left"
        :style="cvInfo.theme.position ? 'order: 1' : 'order: auto'"
      >
        <div class="cv-header">
          <h1 v-if="cvInfo && cvInfo.userInfo && cvInfo.userInfo.name">
            {{ cvInfo.userInfo.name }}
          </h1>
          <p
            v-if="cvInfo && cvInfo.userInfo && cvInfo.userInfo.jobTitle"
            class="job-title"
            :style="`color: ${cvInfo.theme.secondaryColor}`"
          >
            {{ cvInfo.userInfo.jobTitle }}
          </p>
          <div
            class="cv-header-contact"
            v-if="
              cvInfo &&
              cvInfo.userInfo &&
              (cvInfo.userInfo.phone ||
                cvInfo.userInfo.email ||
                cvInfo.userInfo.country ||
                cvInfo.userInfo.city)
            "
          >
            <div
              class="cv-header-contact__item"
              v-if="cvInfo && cvInfo.userInfo && cvInfo.userInfo.phone"
            >
              <PhoneIcon fillColor="#999999" :size="16" />
              <p>{{ cvInfo.userInfo.phone }}</p>
            </div>
            <div
              class="cv-header-contact__item"
              v-if="cvInfo && cvInfo.userInfo && cvInfo.userInfo.email"
            >
              <EmailIcon fillColor="#999999" :size="16" />
              <p>{{ cvInfo.userInfo.email }}</p>
            </div>
            <div
              class="cv-header-contact__item"
              v-if="
                cvInfo &&
                cvInfo.userInfo &&
                (cvInfo.userInfo.country || cvInfo.userInfo.city)
              "
            >
              <LocationIcon fillColor="#999999" :size="16" />
              <p>
                {{ cvInfo.userInfo.country
                }}{{ cvInfo.userInfo.city ? ", " : "" }}
                {{ cvInfo.userInfo.city }}
              </p>
            </div>
          </div>
        </div>
        <div class="cv-body">
          <section
            class="cv-section"
            v-if="cvInfo && cvInfo.summary && cvInfo.summary.description"
          >
            <div class="cv-section-title">
              <h2 :style="`border-color: ${cvInfo.theme.primaryColor}`">
                Summary
              </h2>
            </div>
            <p>
              {{ cvInfo.summary.description }}
            </p>
          </section>
          <section
            class="cv-section"
            v-if="
              cvInfo &&
              cvInfo.proffesionalExperiance &&
              cvInfo.proffesionalExperiance[0].jobTitle
            "
          >
            <div class="cv-section-title">
              <h2 :style="`border-color: ${cvInfo.theme.primaryColor}`">
                Professional Experience
              </h2>
            </div>
            <div class="experiances-items">
              <div
                class="experiance-item"
                v-for="(item, index) of cvInfo.proffesionalExperiance"
                :key="index"
              >
                <div class="experiance-item-header">
                  <h3 v-if="item.jobTitle">{{ item.jobTitle }}</h3>
                  <p v-if="item.yearFrom && item.yearTo">
                    {{ item.yearFrom }} - {{ item.yearTo }}
                  </p>
                </div>
                <div class="experiance-item-subheader">
                  <h3
                    :style="`color: ${cvInfo.theme.secondaryColor}`"
                    v-if="item.companyName"
                  >
                    {{ item.companyName }}
                  </h3>
                  <p v-if="item.companyResidance">
                    {{ item.companyResidance }}
                  </p>
                </div>
                <div class="experiance-item-details" v-if="item.details.length">
                  <p v-for="(detail, index) of item.details" :key="index">
                    {{ detail.detail }}
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section
            class="cv-section"
            v-if="cvInfo && cvInfo.projects && cvInfo.projects[0].projectTitle"
          >
            <div class="cv-section-title">
              <h2 :style="`border-color: ${cvInfo.theme.primaryColor}`">
                Projects
              </h2>
            </div>
            <div class="project-items">
              <div
                class="project-item"
                v-for="(item, index) of cvInfo.projects"
                :key="index"
              >
                <div class="project-item-header">
                  <h3 :style="`color: ${cvInfo.theme.secondaryColor}`">
                    {{ item.projectTitle }}
                  </h3>
                </div>
                <div class="project-item-subheader">
                  <h4 v-if="item.projectResidance">
                    {{ item.projectResidance }}
                  </h4>
                </div>
                <div class="project-item-details">
                  <p
                    v-if="item.projectDescription"
                    class="project-item-details-title"
                  >
                    {{ item.projectDescription }}
                  </p>

                  <p v-for="(detail, index) of item.details" :key="index">
                    {{ detail.detail }}
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section
            class="cv-section"
            v-if="cvInfo && cvInfo.education && cvInfo.education[0].schoolTitle"
          >
            <div class="cv-section-title">
              <h2 :style="`border-color: ${cvInfo.theme.primaryColor}`">
                Education
              </h2>
            </div>
            <div class="experiances-items">
              <div
                class="experiance-item"
                v-for="(item, index) of cvInfo.education"
                :key="index"
              >
                <div class="experiance-item-header">
                  <h3>{{ item.schoolTitle }}</h3>
                  <p v-if="item.yearFrom && item.yearTo">
                    {{ item.yearFrom }} - {{ item.yearTo }}
                  </p>
                </div>
                <div class="experiance-item-subheader">
                  <h3
                    :style="`color: ${cvInfo.theme.secondaryColor}`"
                    v-if="item.schoolName"
                  >
                    {{ item.schoolName }}
                  </h3>
                  <p v-if="item.schoolResidance">{{ item.schoolResidance }}</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <div
        class="cv-right"
        :style="`background-color: ${cvInfo.theme.primaryColor}`"
      >
        <div
          class="cv-avatar"
          v-if="cvInfo && cvInfo.userInfo && cvInfo.userInfo.avatar"
        >
          <img
            :style="
              cvInfo.theme.avatar ? 'border-radius: 50%' : 'border-radius: 8px'
            "
            :src="cvInfo.userInfo.avatar"
            alt="avatar"
          />
        </div>
        <div class="cv-body">
          <div
            class="cv-section right-section"
            v-if="cvInfo && cvInfo.skills && cvInfo.skills[0].skillName"
          >
            <div class="cv-section-title">
              <h2>Skills</h2>
            </div>
            <div class="skill-items">
              <div
                class="skill-item"
                v-for="(item, index) of cvInfo.skills"
                :key="index"
              >
                <div class="skill-item-title">
                  <h6>{{ item.skillName }}</h6>
                </div>
                <div class="skill-item-details">
                  <p v-for="(skill, index) of item.setOfSkills" :key="index">
                    {{ skill.skill }}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            class="cv-section right-section"
            v-if="cvInfo && cvInfo.languages && cvInfo.languages[0].name"
          >
            <div class="cv-section-title">
              <h2>Languages</h2>
            </div>
            <div class="language-items">
              <div
                class="language-item"
                v-for="(item, index) of cvInfo.languages"
                :key="index"
              >
                <div class="language-item-left">
                  <h4>{{ item.name }}</h4>
                  <span>{{ item.level }}</span>
                </div>
                <div class="language-item-right">
                  <div
                    class="language-item-right__circle"
                    :class="{ 'circle-active': item.stars >= 1 }"
                  ></div>
                  <div
                    class="language-item-right__circle"
                    :class="{ 'circle-active': item.stars >= 2 }"
                  ></div>
                  <div
                    class="language-item-right__circle"
                    :class="{ 'circle-active': item.stars >= 3 }"
                  ></div>
                  <div
                    class="language-item-right__circle"
                    :class="{ 'circle-active': item.stars >= 4 }"
                  ></div>
                  <div
                    class="language-item-right__circle"
                    :class="{ 'circle-active': item.stars >= 5 }"
                  ></div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="cv-section right-section"
            v-if="cvInfo && cvInfo.hobbies && cvInfo.hobbies[0].name"
          >
            <div class="cv-section-title">
              <h2>Hobbies</h2>
            </div>
            <div class="hobbie-items">
              <div class="hobbie-item" v-if="cvInfo.hobbies[0].name">
                <p v-for="(item, index) of cvInfo.hobbies" :key="index">
                  {{ item.name }}
                </p>
              </div>
            </div>
          </div>
          <div
            class="cv-section right-section"
            v-if="
              cvInfo &&
              cvInfo.social &&
              (cvInfo.social.linkedin ||
                cvInfo.social.instagram ||
                cvInfo.social.facebook ||
                cvInfo.social.twitter ||
                cvInfo.social.github ||
                cvInfo.social.discord)
            "
          >
            <div class="cv-section-title">
              <h2>Find Me Online</h2>
            </div>
            <div class="social-items">
              <div class="social-item" v-if="cvInfo.social.linkedin">
                <div class="social-item-left">
                  <LinkedInIcon :size="16" fillColor="#fff" />
                </div>
                <div class="social-item-right">
                  <p>LinkedIn</p>
                  <a :href="cvInfo.social.linkedin" target="_blank">
                    {{ cvInfo.social.linkedin }}
                  </a>
                </div>
              </div>
              <div class="social-item" v-if="cvInfo.social.github">
                <div class="social-item-left">
                  <GithubIcon :size="16" fillColor="#fff" />
                </div>
                <div class="social-item-right">
                  <p>GitHub</p>
                  <a :href="cvInfo.social.github" target="_blank">
                    {{ cvInfo.social.github }}
                  </a>
                </div>
              </div>
              <div class="social-item" v-if="cvInfo.social.instagram">
                <div class="social-item-left">
                  <InstagramIcon :size="16" fillColor="#fff" />
                </div>
                <div class="social-item-right">
                  <p>Instagram</p>
                  <a :href="cvInfo.social.instagram" target="_blank">
                    {{ cvInfo.social.instagram }}
                  </a>
                </div>
              </div>
              <div class="social-item" v-if="cvInfo.social.facebook">
                <div class="social-item-left">
                  <FacebookIcon :size="16" fillColor="#fff" />
                </div>
                <div class="social-item-right">
                  <p>Facebook</p>
                  <a :href="cvInfo.social.facebook" target="_blank">
                    {{ cvInfo.social.facebook }}
                  </a>
                </div>
              </div>
              <div class="social-item" v-if="cvInfo.social.twitter">
                <div class="social-item-left">
                  <TwitterIcon :size="16" fillColor="#fff" />
                </div>
                <div class="social-item-right">
                  <p>Twitter</p>
                  <a :href="cvInfo.social.twitter" target="_blank">
                    {{ cvInfo.social.twitter }}
                  </a>
                </div>
              </div>
              <div class="social-item" v-if="cvInfo.social.discord">
                <div class="social-item-left">
                  <DiscordIcon :size="16" fillColor="#fff" />
                </div>
                <div class="social-item-right">
                  <p>Discord</p>
                  <a :href="cvInfo.social.discord" target="_blank">
                    {{ cvInfo.social.discord }}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PhoneIcon from "vue-material-design-icons/Phone.vue";
import LocationIcon from "vue-material-design-icons/MapMarker.vue";
import EmailIcon from "vue-material-design-icons/At.vue";
import html2pdf from "html2pdf.js";
import FacebookIcon from "vue-material-design-icons/Facebook.vue";
import LinkedInIcon from "vue-material-design-icons/Linkedin.vue";
import GithubIcon from "vue-material-design-icons/Github.vue";
import DiscordIcon from "vue-material-design-icons/Discord.vue";
import InstagramIcon from "vue-material-design-icons/Instagram.vue";
import TwitterIcon from "vue-material-design-icons/Twitter.vue";
import { useCvStore } from "@/stores/cv";

export default {
  components: {
    PhoneIcon,
    LocationIcon,
    LinkedInIcon,
    InstagramIcon,
    FacebookIcon,
    GithubIcon,
    DiscordIcon,
    TwitterIcon,
    EmailIcon,
  },
  props: {
    userInfo: Object,
  },

  computed: {
    cvInfo() {
      return useCvStore().cvInfo;
    },
  },
  methods: {
    exportToPDF() {
      html2pdf(document.getElementById("cv"), {
        filename: `${this.cvInfo.theme.cvName}.pdf`,
        image: { type: "jpeg", quality: 1 },
        html2canvas: {
          dpi: 192,
          scale: 2,
          letterRendering: false,
          useCORS: true,
        },
        // pagebreak: { mode: ["avoid-all", "css", "legacy"] },
        jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
      });
    },
  },
};
</script>

<style>
.cv-outter {
  min-height: 297mm;
  width: 210mm;
  /* to centre page on screen*/
  margin: 80px auto 100px auto;
  border: 1px solid #ccc;
}
</style>