<template>
  <div class="cv-tabs">
    <div
      @click="$emit('setactivetab', 0)"
      class="tab"
      :class="{ active: activeTab == 0 }"
    >
      {{ translation.form }}
    </div>
    <div class="line"></div>
    <div
      @click="$emit('setactivetab', 1)"
      class="tab"
      :class="{ active: activeTab == 1 }"
    >
      {{ translation.preview }}
    </div>
    <div class="line"></div>
    <div
      @click="$emit('setactivetab', 2)"
      class="tab"
      :class="{ active: activeTab == 2 }"
    >
      {{ translation.example }}
    </div>
  </div>
</template>

<script>
import { useCvStore } from "@/stores/cv";

export default {
  props: {
    activeTab: Number,
  },
  computed: {
    translation() {
      return useCvStore().getCvTranslationHeader;
    },
  },
};
</script>

<style>
.cv-tabs {
  position: fixed;
  top: 0;
  z-index: 100000;
  background: #fff;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid #e0e0e0;
  gap: 10px;
}

.line {
  height: 44px;
  width: 1px;
  background: #e0e0e0;
}

.tab {
  padding: 20px 30px;
  cursor: pointer;
  color: rgba(0, 0, 0, 0.87);
  font-weight: 500;
}

.tab:hover {
  color: #000;
  font-weight: 600;
}

.tab.active {
  color: #000;
  font-weight: 600;
  border-bottom: 1px solid #000;
}
</style>