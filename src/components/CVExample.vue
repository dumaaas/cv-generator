<template>
  <div class="cv-outter">
    <div id="cv-example" style="font-family: 'Quicksand', sans-serif">
      <div class="cv-left">
        <div class="cv-header">
          <h1>Marko Dumnic</h1>
          <p class="job-title">Frontend Developer</p>
          <div class="cv-header-contact">
            <div class="cv-header-contact__item">
              <PhoneIcon fillColor="#999999" :size="16" />
              <p>+38268836393</p>
            </div>
            <div class="cv-header-contact__item">
              <EmailIcon fillColor="#999999" :size="16" />
              <p>markodumnic8@gmail.com</p>
            </div>
            <div class="cv-header-contact__item">
              <LocationIcon fillColor="#999999" :size="16" />
              <p>Montenegro, Niksic</p>
            </div>
          </div>
        </div>
        <div class="cv-body">
          <section class="cv-section">
            <div class="cv-section-title">
              <h2>Summary</h2>
            </div>
            <p class="cv-section__summary">
              As a passionate frontend developer with 2.5 years of experience, I
              have worked with various front-end technologies such as Vue.js,
              React, and React Native. I am skilled in translating design
              mockups into functional websites and applications, ensuring they
              are optimized for performance and accessibility. I have experience
              working in both small and large teams, as well as remotely, and am
              adept at collaborating effectively to deliver high-quality
              projects. I am committed to staying up-to-date with the latest
              trends and technologies in the industry to ensure that I am always
              delivering the best results for my clients.
            </p>
          </section>
          <section class="cv-section">
            <div class="cv-section-title">
              <h2>Professional Experience</h2>
            </div>
            <div class="experiances-items">
              <div class="experiance-item">
                <div class="experiance-item-header">
                  <h3>Frontend Developer</h3>
                  <p>2020 - 2023</p>
                </div>
                <div class="experiance-item-subheader">
                  <h3>Bild Studio</h3>
                  <p>Podgorica</p>
                </div>
                <div class="experiance-item-details">
                  <p>
                    Worked as an intern for the first three months, responsible
                    for creating landing pages and a full-stack online library
                    system.
                  </p>
                  <p>
                    Joined the Telekom ME team, where I learned and utilized
                    Vue.js/Nuxt.js for various tasks such as creating widgets
                    for custom page creation, maintaining and improving the
                    admin panel, and creating purchase processes for different
                    offers.
                  </p>
                  <p>
                    In addition to the main Telekom ME project, I often worked
                    on additional projects, such as front-end enhancements for
                    the Tiramisu ERP finance system, and participated in
                    building two mobile applications for the Montenegrin market
                    (Baba Ganus and BellaBoka) using React Native.
                  </p>
                  <p>
                    Currently in the final stages of the Locate London project
                    for the British market, where I served as the lead frontend
                    developer, responsible for tasks such as creating the admin
                    panel, creating a script to initialize a chatbot widget that
                    the client fills in on the admin panel, and then displaying
                    certain data and chatbot to end-users.
                  </p>
                </div>
              </div>
              <div class="experiance-item">
                <div class="experiance-item-header">
                  <h3>Freelancer</h3>
                  <p>2020 - ?</p>
                </div>

                <div class="experiance-item-details">
                  <p>
                    Throughout my career, I have worked on various side projects
                    utilizing a range of different technologies, from Wordpress
                    to Next.js.
                  </p>
                  <p>
                    In my free time, I love creating applications for personal
                    use, and on my Github profile, you can find over 70
                    repositories that showcase my work. The repositories range
                    from simple components such as card components to a CV
                    generator which I used to create this very CV.
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section class="cv-section"  id="page-break">
            <div class="cv-section-title">
              <h2>Projects</h2>
            </div>
            <div class="project-items">
              <div class="project-item">
                <div class="project-item-header">
                  <h3>Telekom ME</h3>
                </div>
                <div class="project-item-subheader">
                  <h4>Montenegro</h4>
                </div>
                <div class="project-item-details">
                  <p class="project-item-details-title">
                    Website development - Custom E-Commerce / Agile
                  </p>

                  <p>Language: JavaScript</p>
                  <p>Front-End Technologies: Vue.js, Nuxt.js, Vuex, Vuetify, SCSS</p>
                </div>
              </div>
              <div class="project-item">
                <div class="project-item-header">
                  <h3>Locate London</h3>
                </div>
                <div class="project-item-subheader">
                  <h4>United Kingdom</h4>
                </div>
                <div class="project-item-details">
                  <p class="project-item-details-title">
                    Admin panel development - Custom ChatBot / Agile
                  </p>

                  <p>Language: JavaScript</p>
                  <p>
                    Front-End Technologies: React.js, Vue.js, Vuex, TailwindCSS, Vue
                    Material
                  </p>
                </div>
              </div>
              <div class="project-item">
                <div class="project-item-header">
                  <h3>Baba Ganus</h3>
                </div>
                <div class="project-item-subheader">
                  <h4>Montenegro</h4>
                </div>
                <div class="project-item-details">
                  <p class="project-item-details-title">
                    Mobile application development - Auth0 login system
                  </p>

                  <p>Language: JavaScript</p>
                  <p>Front-End Technologies: React Native, Wordpress, Auth0</p>
                </div>
              </div>
              <div class="project-item">
                <div class="project-item-header">
                  <h3>Bella Boka</h3>
                </div>
                <div class="project-item-subheader">
                  <h4>Montenegro</h4>
                </div>
                <div class="project-item-details">
                  <p class="project-item-details-title">
                    Mobile application development
                  </p>

                  <p>Language: JavaScript</p>
                  <p>Front-End Technologies: React Native</p>
                </div>
              </div>
              <div class="project-item">
                <div class="project-item-header">
                  <h3>GM Inzenjering</h3>
                </div>
                <div class="project-item-subheader">
                  <h4>Serbia</h4>
                </div>
                <div class="project-item-details">
                  <p class="project-item-details-title">
                    Website development - WooCommerce
                  </p>

                  <p>Language: JavaScript</p>
                  <p>Front-End Technologies: Wordpress, WooCommerce</p>
                </div>
              </div>
              <div class="project-item">
                <div class="project-item-header">
                  <h3>Prologs</h3>
                </div>
                <div class="project-item-subheader">
                  <h4>USA</h4>
                </div>
                <div class="project-item-details">
                  <p class="project-item-details-title">Website development</p>

                  <p>Language: JavaScript</p>
                  <p>Front-End Technologies: Next.js, TailwindCSS, EmailJS</p>
                </div>
              </div>
            </div>
          </section>
          <section class="cv-section">
            <div class="cv-section-title">
              <h2>Education</h2>
            </div>
            <div class="experiances-items">
              <div class="experiance-item">
                <div class="experiance-item-header smaller-header">
                  <h3>Bachelor's degree, Information Technology</h3>
                  <p>2015 - 2020</p>
                </div>
                <div class="experiance-item-subheader smaller-header">
                  <h3>Unviersity of Novi Sad</h3>
                  <p>Novi Sad, Serbia</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <div class="cv-right" style="background-color: #fffasfsafas">
        <div class="cv-avatar">
          <img style="border-radius: 50%;"
            :src="require('@/assets/avatar.jpeg')"
            alt="avatar"
          />
        </div>
        <div class="cv-body">
          <div class="cv-section right-section">
            <div class="cv-section-title">
              <h2>Skills</h2>
            </div>
            <div class="skill-items">
              <div class="skill-item">
                <div class="skill-item-title">
                  <h6>Tools</h6>
                </div>
                <div class="skill-item-details">
                  <p>JavaScript</p>
                  <p>Vue.js</p>
                  <p>Nuxt.js</p>
                  <p>React.js</p>
                  <p>React Native</p>
                  <p>Next.js</p>
                  <p>jQuery</p>
                  <p>HTML5</p>
                  <p>CSS3</p>
                  <p>TailwindCSS</p>
                  <p>SCSS</p>
                </div>
              </div>
              <div class="skill-item">
                <div class="skill-item-title">
                  <h6>Operating Systems</h6>
                </div>
                <div class="skill-item-details">
                  <p>Windows</p>
                  <p>Ubuntu</p>
                </div>
              </div>
            </div>
          </div>
          <div class="cv-section right-section">
            <div class="cv-section-title">
              <h2>Languages</h2>
            </div>
            <div class="language-items">
              <div class="language-item">
                <div class="language-item-left">
                  <h4>Montenegrian</h4>
                  <span>Native</span>
                </div>
                <div class="language-item-right">
                  <div class="language-item-right__circle circle-active"></div>
                  <div class="language-item-right__circle circle-active"></div>
                  <div class="language-item-right__circle circle-active"></div>
                  <div class="language-item-right__circle circle-active"></div>
                  <div class="language-item-right__circle circle-active"></div>
                </div>
              </div>
              <div class="language-item">
                <div class="language-item-left">
                  <h4>English</h4>
                  <span>Intermediate</span>
                </div>
                <div class="language-item-right">
                  <div class="language-item-right__circle circle-active"></div>
                  <div class="language-item-right__circle circle-active"></div>
                  <div class="language-item-right__circle circle-active"></div>
                  <div class="language-item-right__circle"></div>
                  <div class="language-item-right__circle"></div>
                </div>
              </div>
            </div>
          </div>
          <div class="cv-section right-section">
            <div class="cv-section-title">
              <h2>Hobbies</h2>
            </div>
            <div class="hobbie-items">
              <div class="hobbie-item">
                <p>Football</p>
                <p>Table Tennis</p>
                <p>Chess</p>
                <p>Photography</p>
                <p>Traveling</p>
              </div>
            </div>
          </div>
          <div class="cv-section right-section">
            <div class="cv-section-title">
              <h2>Find Me Online</h2>
            </div>
            <div class="social-items">
              <div class="social-item">
                <div class="social-item-left">
                  <GithubIcon :size="16" fillColor="#fff" />
                </div>
                <div class="social-item-right">
                  <p>Github</p>
                  <a href="https://github.com/dumaaas" target="_blank">
                    @dumaaas
                  </a>
                </div>
              </div>
              <div class="social-item">
                <div class="social-item-left">
                  <LinkedInIcon :size="16" fillColor="#fff" />
                </div>
                <div class="social-item-right">
                  <p>LinkedIn</p>
                  <a
                    href="https://www.linkedin.com/in/marko-dumni%C4%87-714b72198/"
                    target="_blank"
                  >
                    @Marko Dumnić
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
import LinkedInIcon from "vue-material-design-icons/Linkedin.vue";
import GithubIcon from "vue-material-design-icons/Github.vue";

export default {
  components: {
    PhoneIcon,
    LocationIcon,
    LinkedInIcon,
    GithubIcon,
    EmailIcon,
  },
  props: {
    userInfo: Object,
  },
  methods: {
    exportToPDF2() {
      html2pdf(document.getElementById("cv-example"), {
        filename: "cv-example.pdf",
        image: { type: "jpeg", quality: 1 },
        html2canvas: {
          dpi: 192,
          scale: 2,
          letterRendering: false,
          useCORS: true,
        },
        pagebreak: { mode: ["avoid-all", "css", "legacy"] },
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