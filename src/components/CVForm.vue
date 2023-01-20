<!-- eslint-disable vue/no-parsing-error -->
<template>
  <form class="md-layout cv-form">
    <md-card
      class="md-layout-item md-size-50 md-small-size-100"
      style="position: relative; z-index: 1000"
    >
      <md-card-header>
        <div class="md-title">{{sectionTitleTranslations.theme}}</div>
      </md-card-header>

      <md-card-content>
        <md-field>
          <label for="first-name">{{sectionLabelTranslations.theme.name}}</label>
          <md-input v-model="cvInfo.theme.cvName" />
        </md-field>

        <md-field>
          <label for="language">{{sectionLabelTranslations.theme.language}}</label>
          <md-select
            v-model="cvInfo.theme.language"
            name="language"
            id="language"
          >
            <md-option value="en">English</md-option>
            <md-option value="me">Serbian</md-option>
          </md-select>
        </md-field>

        <div class="md-layout md-gutter">
          <div
            class="md-layout-item md-small-size-100"
            :class="{ 'md-size-100': !cvInfo.theme.fontFamily }"
          >
            <md-field>
              <label for="font">Font Family</label>
              <md-select
                v-model="cvInfo.theme.fontFamily"
                name="font"
                id="font"
              >
                <md-option value="'Amatic SC', cursive">Amatic SC</md-option>
                <md-option value="'Cookie', cursive">Cookie</md-option>
                <md-option value="'Handlee', cursive">Cookie</md-option>
                <md-option value="'Montserrat', sans-serif"
                  >Montserrat</md-option
                >
                <md-option value="'Nunito', sans-serif">Nunito</md-option>
                <md-option value="'Open Sans', sans-serif">Open Sans</md-option>
                <md-option value="'Quicksand', sans-serif">Quicksand</md-option>
                <md-option value="'Roboto', sans-serif">Roboto</md-option>
                <md-option value="'Roboto Condensed', sans-serif"
                  >Roboto Condensed</md-option
                >
                <md-option value="'Rowdies', cursive">Rowdies</md-option>
                <md-option value="'Sofia Sans', sans-serif"
                  >Sofia Sans</md-option
                >
              </md-select>
            </md-field>
          </div>

          <div class="md-layout-item md-small-size-100">
            <md-field v-if="cvInfo.theme.fontFamily">
              <label for="fontFamily">{{sectionLabelTranslations.theme.fontPreview}} </label>
              <md-input
                v-model="sampleTextFont"
                readonly
                :style="`font-family: ${cvInfo.theme.fontFamily}`"
              />
            </md-field>
          </div>
        </div>

        <div class="color-picker-container">
          <div class="color-picker">
            <v-swatches
              v-model="cvInfo.theme.primaryColor"
              show-fallback
              fallback-input-type="color"
              popover-x="left"
            ></v-swatches>
            <label>{{sectionLabelTranslations.theme.primaryColor}}</label>
          </div>
          <div class="color-picker">
            <v-swatches
              v-model="cvInfo.theme.secondaryColor"
              show-fallback
              fallback-input-type="color"
              popover-x="left"
            ></v-swatches>
            <label>{{sectionLabelTranslations.theme.secondaryColor}}</label>
          </div>
        </div>

        <div class="md-layout md-gutter">
          <div class="md-layout-item md-small-size-100">
            <md-switch v-model="cvInfo.theme.avatar" class="md-primary"
              >{{sectionLabelTranslations.theme.avatar}}</md-switch
            >
          </div>

          <div class="md-layout-item md-small-size-100">
            <md-switch v-model="cvInfo.theme.position" class="md-primary"
              >{{sectionLabelTranslations.theme.mainSection}}</md-switch
            >
          </div>
        </div>
      </md-card-content>
    </md-card>
    <md-steppers
      md-vertical
      class="md-layout-item md-size-50 md-small-size-100"
      style="background: #fafafa"
    >
      <md-step
        id="first"
        :md-label="sectionTitleTranslations.yourInfo"
        md-error=""
      >
        <md-card class="md-layout-item md-size-100 md-small-size-100">
          <md-card-header>
            <div class="md-title">{{sectionTitleTranslations.yourInfo}}</div>
          </md-card-header>
          <md-card-content>
            <p class="image-upload-label">{{sectionLabelTranslations.yourInfo.avatar}}</p>
            <div class="image-upload">
              <img
                style="
                  min-width: 48px;
                  max-width: 48px;
                  min-height: 48px;
                  max-height: 48px;
                  border-radius: 50%;
                "
                :src="
                  cvInfo.userInfo.avatar
                    ? cvInfo.userInfo.avatar
                    : 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAASZSURBVHgB1ZprbttGEIBnV6QoWn6QaIGi/VMZSB8p2to8QZUbOCdIewInJ6h8A/cEVU+Q3KD1CaS2P4KiAawESAIjMSjJkiiRNDcztCQoelDirh72ByxErpbizM7s7OyuGCwB13UtyOhHGoND4PxLIeCQCWEBY9agjQCoMSwgor8Zy1SCoHtm23YNFGEgCQmtZXPHIEQRb4sgR5UBO1VRJrUCQ8Gj6PFoD6vCQJSDwD9Jq0gqBa7a3q/LFnwCxko7efNk4eaLNMJeL+i68RT9+BDWAI2VIOg9WMQafF6Dluc90rRsZV3CE/iugqYblWazfTSvbaIC5DLiWpRX6jKzsRhnT2O3TWCmC8UPClGC20DCuJiqAJmOtIdbBMuwn7dN84+J+vEKGrDk8xtymyTqYdBzxgf2hAKtVuecBhFI4nV70PG60O50IQzDuC6b1cHAYu3tgK5poEB1Z3vLGa34SAEVv4+iCNzGFTSarcR2e7vbYKMinM8NgNPfI8TJ3k6+NLgfKhC7jm6cgwQk/JuL9+D7wULtySJffPaprBLkSvvoSnW6Gf5CJqOXQBLq+UWFJ6gtPSOJxbXs48FNbAGV3ic/f/X6AmT4HK1g5gyQYGiF2ALY+0WQRKEn48EuydAKsQIY849Bkp7vgyztjgeycMZ+ij/JfVAF6TzH90OQJQyvQYEipfZcxX02Dcp+xAVTyzI1LQOyUDhVgWTnnPEDUCBv5kAWQ1dTgAEvcJW0gdjaMkEWy9oFFTiDAyxqClAcx6kd0kIpha7gfoSgcApLwMaeTOPP1JbyoSVgsatWR8ASiJO5ehMaV+3EdqrJ3DioQNvFj6Xl/hTbSRGa4PzgZo6gSJU3TRwvOdnUYSasifm/6jjYFLR7wZmAKtxRaLuSRxC9hDtKhPusd9oCGdwkZvFep264IAlFnx4uUPx+6QUB1onheniAhmthGswUfQxdgxwOZlonq0SjMGD78YIGQ+mfkGKHmYTGZ6CN+XwXF/EqkCKUjlCESrfgF7jAzzvxE7hQPsP8ujjvEdpxoAWMqtCj0G9RuXQbsTI0RywSajEPOr35hP6WuZ49nzUfrELwJMjVPrEtyG/NThTJfWzbrMUOSGtLdNvfJhqhH9Nuw1ss6xL+5r3XcPHuEt5duhCEkwsmPBQpk/A3133GrUD7O26jGQ/ITULWsPd2ATe0hnWD3qfrYQgYtQL5I5VNC0+QNcgSJE8MbmwNhCcmthb/e1GrdHvB2s4C0mAYeu3be4X90bqJINwJvIc4R9fhtoEyeYH3YLx6QgHn/v1aBOIJ3DIiHv1Cso3XT50Gne+/LuNctfBB28pBWZzvvnk27avEQ77Kv/+XcKZPPOJZOSj8wQ9flWZ9PfeUsvLPiyPOxe/Ycr0HHujzUcSeOD/eKyc1W+iYtfL8eYFHGcyXWAHWQzXi4cNpPj9OqoPulbsU9TrORU6Cy4yT+q8GZA24zpQw+XsEy6IvOIStU8dxUoVw6T979BUpYl5yzCS3J4WAv7CcyQg+QFqBUQbK4OUhKnTAmCh8NF5oYmSiLoBXhYiXsFUI2s9khR7lAwmyEYQS24fWAAAAAElFTkSuQmCC'
                "
                alt="avatar"
              />
              <label for="avatar-upload">{{
                cvInfo.userInfo.avatar ? sectionLabelTranslations.yourInfo.change : sectionLabelTranslations.yourInfo.upload
              }}</label>
              <input
                style="display: none"
                id="avatar-upload"
                type="file"
                @change="onFileChange($event)"
              />
            </div>
            <div class="md-layout md-gutter">
              <div class="md-layout-item md-small-size-100">
                <md-field>
                  <label for="first-name">{{sectionLabelTranslations.yourInfo.name}}</label>
                  <md-input v-model="cvInfo.userInfo.name" />
                </md-field>
              </div>

              <div class="md-layout-item md-small-size-100">
                <md-field>
                  <label for="first-name">{{sectionLabelTranslations.yourInfo.jobTitle}}</label>
                  <md-input v-model="cvInfo.userInfo.jobTitle" />
                </md-field>
              </div>
            </div>
            <div class="md-layout md-gutter">
              <div class="md-layout-item md-small-size-100">
                <md-field>
                  <label for="first-name">{{sectionLabelTranslations.yourInfo.phone}}</label>
                  <md-input v-model="cvInfo.userInfo.phone" />
                  <PhoneIcon fillColor="rgba(0,0,0,0.54)" />
                </md-field>
              </div>

              <div class="md-layout-item md-small-size-100">
                <md-field>
                  <label for="age">{{sectionLabelTranslations.yourInfo.email}}</label>
                  <md-input v-model="cvInfo.userInfo.email" />
                  <EmailIcon fillColor="rgba(0,0,0,0.54)" />
                </md-field>
              </div>
            </div>
            <div class="md-layout md-gutter">
              <div class="md-layout-item md-small-size-100">
                <md-field>
                  <label for="first-name">{{sectionLabelTranslations.yourInfo.country}}</label>
                  <md-input v-model="cvInfo.userInfo.country" />
                </md-field>
              </div>

              <div class="md-layout-item md-small-size-100">
                <md-field>
                  <label for="age">{{sectionLabelTranslations.yourInfo.city}}</label>
                  <md-input v-model="cvInfo.userInfo.city" />
                </md-field>
              </div>
            </div>
          </md-card-content>
        </md-card>
      </md-step>

      <md-step id="third" :md-label="sectionTitleTranslations.summary">
        <md-card class="md-layout-item md-size-100 md-small-size-100">
          <md-card-header>
            <div class="md-title">{{sectionTitleTranslations.summary}}</div>
          </md-card-header>

          <md-card-content>
            <div class="md-layout md-gutter">
              <div class="md-layout-item md-small-size-100">
                <md-field>
                  <label>Textarea</label>
                  <md-textarea
                    v-model="cvInfo.summary.description"
                  ></md-textarea>
                </md-field>
              </div>
            </div>
          </md-card-content>
        </md-card>
      </md-step>
      <md-step id="fourth" :md-label="sectionTitleTranslations.proffesionalExperiance">
        <md-card class="md-layout-item md-size-100 md-small-size-100">
          <md-card-header>
            <div class="md-title">{{sectionTitleTranslations.proffesionalExperiance}}</div>
          </md-card-header>

          <md-card-content>
            <md-card
              class="md-layout-item md-small-size-100"
              style="margin-bottom: 15px"
              v-for="(item, index) of cvInfo.proffesionalExperiance"
              :key="index"
            >
              <md-card-header>
                <h3>{{sectionLabelTranslations.proffesionalExperiance.job}} {{ index + 1 }}</h3>
              </md-card-header>
              <md-card-content>
                <div class="md-layout md-gutter">
                  <div class="md-layout-item md-small-size-100">
                    <md-field>
                      <label for="first-name">{{sectionLabelTranslations.proffesionalExperiance.jobTitle}}</label>
                      <md-input v-model="item.jobTitle" />
                    </md-field>
                    <div class="md-layout md-gutter">
                      <div class="md-layout-item md-small-size-100">
                        <md-field>
                          <label for="first-name">{{sectionLabelTranslations.proffesionalExperiance.companyName}}</label>
                          <md-input v-model="item.companyName" />
                        </md-field>
                      </div>

                      <div class="md-layout-item md-small-size-100">
                        <md-field>
                          <label for="first-name">{{sectionLabelTranslations.proffesionalExperiance.companyResidance}}</label>
                          <md-input v-model="item.companyResidance" />
                        </md-field>
                      </div>
                    </div>
                    <div class="md-layout md-gutter">
                      <div class="md-layout-item md-small-size-100">
                        <md-field>
                          <label for="first-name">{{sectionLabelTranslations.proffesionalExperiance.yearFrom}}</label>
                          <md-input v-model="item.yearFrom" />
                          <CalendarIcon fillColor="rgba(0,0,0,0.54)" />
                        </md-field>
                      </div>

                      <div class="md-layout-item md-small-size-100">
                        <md-field>
                          <label for="first-name">{{sectionLabelTranslations.proffesionalExperiance.yearTo}}</label>
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
                        <h3>{{sectionLabelTranslations.proffesionalExperiance.jobDetail}} {{ index + 1 }}</h3>
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
        </md-card></md-step
      >
      <md-step id="fifth" :md-label="sectionTitleTranslations.projects">
        <md-card class="md-layout-item md-size-100 md-small-size-100">
          <md-card-header>
            <div class="md-title">{{sectionTitleTranslations.projects}}</div>
          </md-card-header>

          <md-card-content>
            <md-card
              class="md-layout-item md-small-size-100"
              style="margin-bottom: 15px"
              v-for="(item, index) of cvInfo.projects"
              :key="index"
            >
              <md-card-header>
                <h3>{{sectionLabelTranslations.projects.project}} {{ index + 1 }}</h3>
              </md-card-header>
              <md-card-content>
                <div class="md-layout md-gutter">
                  <div class="md-layout-item md-small-size-100">
                    <md-field>
                      <label for="first-name">{{sectionLabelTranslations.proffesionalExperiance.projectName}}</label>
                      <md-input v-model="item.projectTitle" />
                    </md-field>
                    <div class="md-layout md-gutter">
                      <div class="md-layout-item md-small-size-100">
                        <md-field>
                          <label for="first-name">{{sectionLabelTranslations.proffesionalExperiance.projectResidance}}</label>
                          <md-input v-model="item.projectResidance" />
                        </md-field>
                      </div>

                      <div class="md-layout-item md-small-size-100">
                        <md-field>
                          <label for="first-name">{{sectionLabelTranslations.proffesionalExperiance.projectDescription}}</label>
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
                        <h3>{{sectionLabelTranslations.proffesionalExperiance.projectDetail}} {{ index + 1 }}</h3>
                      </md-card-header>
                      <md-card-content>
                        <div class="md-layout md-gutter">
                          <div class="md-layout-item md-small-size-100">
                            <md-field>
                              <label for="first-name">{{sectionLabelTranslations.proffesionalExperiance.projectDetail}}</label>
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
        </md-card></md-step
      >
      <md-step id="sixth" :md-label="sectionTitleTranslations.education">
        <md-card class="md-layout-item md-size-100 md-small-size-100">
          <md-card-header>
            <div class="md-title">{{sectionTitleTranslations.education}}</div>
          </md-card-header>

          <md-card-content>
            <md-card
              class="md-layout-item md-small-size-100"
              style="margin-bottom: 15px"
              v-for="(item, index) of cvInfo.education"
              :key="index"
            >
              <md-card-header>
                <h3>{{sectionLabelTranslations.education.school}} {{ index + 1 }}</h3>
              </md-card-header>
              <md-card-content>
                <div class="md-layout md-gutter">
                  <div class="md-layout-item md-small-size-100">
                    <div class="md-layout md-gutter">
                      <div class="md-layout-item md-small-size-100">
                        <md-field>
                          <label for="first-name">{{sectionLabelTranslations.education.schoolName}}</label>
                          <md-input v-model="item.schoolName" />
                          <AccountSchoolIcon fillColor="rgba(0,0,0,0.54)" />
                        </md-field>
                      </div>

                      <div class="md-layout-item md-small-size-100">
                        <md-field>
                          <label for="first-name">{{sectionLabelTranslations.education.schoolTitle}}</label>
                          <md-input v-model="item.schoolTitle" />
                          <SchoolIcon fillColor="rgba(0,0,0,0.54)" />
                        </md-field>
                      </div>
                    </div>
                    <md-field>
                      <label for="first-name">{{sectionLabelTranslations.education.schoolResidance}}</label>
                      <md-input v-model="item.schoolResidance" />
                      <CityIcon fillColor="rgba(0,0,0,0.54)" />
                    </md-field>
                    <div class="md-layout md-gutter">
                      <div class="md-layout-item md-small-size-100">
                        <md-field>
                          <label for="first-name">{{sectionLabelTranslations.education.yearFrom}}</label>
                          <md-input v-model="item.yearFrom" />
                          <CalendarIcon fillColor="rgba(0,0,0,0.54)" />
                        </md-field>
                      </div>

                      <div class="md-layout-item md-small-size-100">
                        <md-field>
                          <label for="first-name">{{sectionLabelTranslations.education.yearTo}}</label>
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
      </md-step>
      <md-step id="seventh" :md-label="sectionTitleTranslations.skills">
        <md-card class="md-layout-item md-size-100 md-small-size-100">
          <md-card-header>
            <div class="md-title">{{sectionTitleTranslations.skills}}</div>
          </md-card-header>

          <md-card-content>
            <md-card
              class="md-layout-item md-small-size-100"
              style="margin-bottom: 15px"
              v-for="(item, index) of cvInfo.skills"
              :key="index"
            >
              <md-card-header>
                <h3>{{sectionLabelTranslations.skills.skill}} {{ index + 1 }}</h3>
              </md-card-header>
              <md-card-content>
                <div class="md-layout md-gutter">
                  <div class="md-layout-item md-small-size-100">
                    <md-field>
                      <label for="first-name">{{sectionLabelTranslations.skills.skillName}}</label>
                      <md-input v-model="item.skillName" />
                    </md-field>
                    <md-card
                      class="md-layout-item md-small-size-100"
                      style="margin-bottom: 15px"
                      v-for="(itemDetail, index) of item.setOfSkills"
                      :key="index"
                    >
                      <md-card-header>
                        <h3>{{sectionLabelTranslations.skills.skillDetail}} {{ index + 1 }}</h3>
                      </md-card-header>
                      <md-card-content>
                        <div class="md-layout md-gutter">
                          <div class="md-layout-item md-small-size-100">
                            <md-field>
                              <label for="first-name">{{sectionLabelTranslations.skills.skillDetail}}</label>
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
      </md-step>
      <md-step id="eight" :md-label="sectionTitleTranslations.languages">
        <md-card class="md-layout-item md-size-100 md-small-size-100">
          <md-card-header>
            <div class="md-title">{{sectionTitleTranslations.languages}}</div>
          </md-card-header>

          <md-card-content>
            <md-card
              class="md-layout-item md-small-size-100"
              style="margin-bottom: 15px"
              v-for="(item, index) of cvInfo.languages"
              :key="index"
            >
              <md-card-header>
                <h3>{{sectionLabelTranslations.languages.language}} {{ index + 1 }}</h3>
              </md-card-header>
              <md-card-content>
                <div class="md-layout md-gutter">
                  <div class="md-layout-item md-small-size-100">
                    <div class="md-layout md-gutter">
                      <div class="md-layout-item md-small-size-100">
                        <md-field>
                          <label for="first-name">{{sectionLabelTranslations.languages.languageName}}</label>
                          <md-input v-model="item.name" />
                        </md-field>
                      </div>

                      <div class="md-layout-item md-small-size-100">
                        <md-field>
                          <label for="first-name">{{sectionLabelTranslations.languages.languageLevel}}</label>
                          <md-input v-model="item.level" />
                        </md-field>
                      </div>
                    </div>
                    <md-field>
                      <label for="first-name">{{sectionLabelTranslations.languages.rating}}</label>
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
      </md-step>
      <md-step id="ninth" :md-label="sectionTitleTranslations.hobbies">
        <md-card class="md-layout-item md-size-100 md-small-size-100">
          <md-card-header>
            <div class="md-title">{{sectionTitleTranslations.hobbies}}</div>
          </md-card-header>

          <md-card-content>
            <md-card
              class="md-layout-item md-small-size-100"
              style="margin-bottom: 15px"
              v-for="(item, index) of cvInfo.hobbies"
              :key="index"
            >
              <md-card-header>
                <h3>{{sectionLabelTranslations.hobbies.hobby}} {{ index + 1 }}</h3>
              </md-card-header>
              <md-card-content>
                <div class="md-layout md-gutter">
                  <div class="md-layout-item md-small-size-100">
                    <md-field>
                      <label for="first-name">{{sectionLabelTranslations.hobbies.hobbyName}}</label>
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
      </md-step>
      <md-step id="tenth" :md-label="sectionTitleTranslations.social">
        <md-card class="md-layout-item md-size-100 md-small-size-100">
          <md-card-header>
            <div class="md-title">{{sectionTitleTranslations.social}}</div>
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
      </md-step>
    </md-steppers>
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
import { useCvStore } from "@/stores/cv";
import VSwatches from "vue-swatches";
import "vue-swatches/dist/vue-swatches.css";

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
    VSwatches,
  },
  data() {
    return {
      cvInfo: null,
      sampleTextFont: "Sample text for preview.",
    };
  },
  computed: {
    sectionTitleTranslations() {
      return useCvStore().getCvTranslationSections;
    },
    sectionLabelTranslations() {
      return useCvStore().getCvTranslationSectionLabels;
    }
  },
  mounted() {
    this.cvInfo = useCvStore().getCvInfo;
  },
  methods: {
    onFileChange(e) {
      let files = e.target.files;
      let fileReader = new FileReader();
      fileReader.readAsDataURL(files[0]);
      var base64 = "";
      fileReader.onload = () => {
        base64 = fileReader.result;
        console.log(base64, "hej");
        this.cvInfo.userInfo.avatar = base64;
      };
    },
    saveCvInfo() {
      this.cvStore.setCvInfo(this.cvInfo);
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