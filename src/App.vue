<template>
  <div id="app">
    <CVTabs @setactivetab="activeTab = $event" :activeTab="activeTab" />
    <CVForm v-if="activeTab == 0" ref="form" />
    <CVPreview v-if="activeTab == 1" ref="preview" />
    <CVExample v-if="activeTab == 2" ref="preview" />

    <md-button
      v-if="activeTab == 0"
      class="save-btn md-raised md-primary"
      @click.prevent="saveCvInfo()"
      >Save</md-button
    >
    <md-button
      v-if="activeTab !== 0"
      class="save-btn md-raised md-primary"
      @click.prevent="exportToPDF()"
      >Export CV</md-button
    >
    <div class="tag">
      <p>
        built with ❤️ by
        <a href="https://github.com/dumaaas/" target="_blank">@dumaaas</a>
      </p>
    </div>
  </div>
</template>

<script>
import CVTabs from "./components/CVTabs.vue";
import CVForm from "./components/CVForm.vue";
import CVPreview from "./components/CVPreview.vue";
import CVExample from "./components/CVExample.vue";
import { useCvStore } from "@/stores/cv";

export default {
  name: "App",
  components: {
    CVTabs,
    CVForm,
    CVPreview,
    CVExample,
  },
  data() {
    return {
      activeTab: 0,
      cvStore: useCvStore(),
    };
  },

  computed: {},
  methods: {
    saveCvInfo() {
      this.$refs.form.saveCvInfo();
    },
    exportToPDF() {
      this.$refs.preview.exportToPDF();
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Amatic+SC&family=Cookie&family=Handlee&family=Montserrat&family=Nunito&family=Open+Sans&family=Quicksand&family=Roboto&family=Roboto+Condensed&family=Rowdies&family=Sofia+Sans&display=swap");
* {
  margin: 0;
  padding: 0;
}

body {
  overflow-x: hidden;
}

#app {
  font-family: "Quicksand", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  transition: ease-in-out 0.3s all;
}
#cv {
  display: flex;
  background: #ffffe0;
  width: 100%;
  height: 100%;
  margin: 0 auto;
}

.cv-left {
  width: 140mm;
  background: #fff;
  padding: 50px 40px;
}

.cv-right {
  width: 70mm;
  background: #006666;
  padding: 30px 30px 30px 10px;
}

.cv-avatar {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 49px;
}

.cv-avatar img {
  max-width: 117px;
  max-height: 117px;
  min-width: 117px;
  min-height: 117px;
}

.cv-header {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 65px;
}

.cv-body {
  display: flex;
  gap: 40px;
  flex-direction: column;
}

.cv-section {
  display: flex;
  flex-direction: column;
}

.cv-section__summary {
  font-size: 11px;
}

.cv-section.right-section {
  color: white;
  padding: 0 40px 0 20px;
}

.cv-section.right-section h2 {
  border-bottom: 2px solid #fff;
}

.cv-section-title h2 {
  text-transform: uppercase;
  padding-bottom: 10px;
  margin-bottom: 10px;
  border-bottom: 2px solid #006666;
  font-size: 18px;
}

.cv-header .job-title {
  font-size: 20px;
  font-weight: 600;
  color: #1ab3b8;
}

.cv-header-contact {
  display: flex;
  gap: 10px;
  margin-top: 5px;
}

.cv-header-contact__item span {
  height: 16px;
}

.cv-header-contact__item {
  display: flex;
  align-items: center;
  gap: 4px;
}

.cv-header-contact__item p {
  font-size: 12px;
}

.tag {
  margin: 6px 8px;

  position: fixed;
  bottom: 10px;
  left: 10px;
  cursor: pointer;
  z-index: 10001;
  padding: 8px 12px;
  border-radius: 8px;
  background: #fff;
  border: 1px solid #1ab3b8;
}

.save-btn {
  position: fixed !important;
  bottom: 10px;
  right: 10px;
  cursor: pointer;
  z-index: 10001;
}

.cv-right-section {
  color: white;
  padding: 0 30px;
}

.experiances-items {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.experiance-item {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.experiance-item-header,
.experiance-item-subheader {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.experiance-item-header.smaller-header h3,
.experiance-item-subheader.smaller-header h3 {
  font-size: 14px;
}

.experiance-item-subheader h3 {
  color: #1ab3b8;
}

.experiance-item-header.smaller-header,
.experiance-item-subheader.smaller-header p {
  font-weight: 600;
  font-size: 12px;
}

.experiance-item-details p {
  font-size: 11px;
}

.experiance-item-details p:before {
  content: "• ";
  padding-right: 6px;
}

.project-items {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.project-item {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.project-item-header h3 {
  color: #1ab3b8;
}

.project-item-details p {
  font-size: 12px;
}
.project-item-details p:before {
  content: "• ";
  padding-right: 6px;
}

.project-item-details p.project-item-details-title:before {
  content: "";
  padding-right: 0;
}

.project-item-details p.project-item-details-title {
  font-size: 14px;
}

.skill-item {
  margin-bottom: 16px;
}

.skill-item:last-child {
  margin-bottom: 0;
}

.skill-item-title h6 {
  font-weight: 600;
  font-size: 13px;
  margin-bottom: 5px;
}

.skill-item-details {
  display: flex;
  flex-direction: row;
  gap: 5px;
  flex-wrap: wrap;
}

.skill-item-details p {
  font-size: 11px;
}

.skill-item-details p:after {
  content: " •";
}

.skill-item-details p:last-child:after {
  content: "";
}

.language-item {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
}

.language-item-left {
  display: flex;
  flex-direction: row;
  gap: 8px;
}

.language-item-left h4 {
  font-size: 12px;
}

.language-item-left span {
  font-size: 11px;
}

.language-item-right {
  display: flex;
  flex-direction: row;
  gap: 3px;
}

.language-item-right__circle {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #fff;
  opacity: 0.4;
}

.language-item-right__circle.circle-active {
  background: #fff;
  opacity: 1;
}

.hobbie-item p {
  font-size: 13px;
  margin-bottom: 10px;
  font-weight: 500;
}

.hobbie-item p:last-child {
  margin-bottom: 0;
}

.social-items {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.social-item {
  display: flex;
  flex-direction: row;
  gap: 8px;
  justify-content: flex-start;
  align-content: flex-start;
}

.social-item-right {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.social-item-right p {
  font-weight: 600;
  font-size: 13px;
}

.social-item-right a {
  font-size: 11px;
  color: #fff !important;
  word-break: break-all;
}

.color-picker-container {
  display: flex;
  flex-direction: row;
  gap: 40px;
  position: relative;
}
.color-picker {
  display: flex;
  gap: 16px;
  align-items: center;
  width: 50%;
  font-size: 14px;
  line-height: 20px;
  color: rgba(0, 0, 0, 0.87);
}

.color-picker .vue-swatches__container {
  z-index: 999 !important;
}

.image-upload {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 16px;
  margin-bottom: 4px;
}

.image-upload label {
  padding: 6px 8px;
  border-radius: 6px;
  border: 1px solid rgba(0, 0, 0, 0.87);
  font-size: 14px;
  line-height: 20px;
  color: rgba(0, 0, 0, 0.87);
  cursor: pointer;
}

.image-upload-label {
  font-size: 14px;
  line-height: 20px;
  margin-bottom: 5px;
  color: rgba(0, 0, 0, 0.87);
  margin-top: 10px;
}

.md-select-menu {
  z-index: 1001 !important;
}
</style>
