<template>
  <v-card class="DataView" :loading="loading">
    <div class="DataView-Inner">
      <div class="DataView-Header">
        <h3
          class="DataView-Title"
          :class="!!$slots.infoPanel ? 'with-infoPanel' : ''"
        >
          {{ title }}
        </h3>
        <slot name="infoPanel" />
      </div>
      <div class="DataView-Description">
        <slot name="description" />
      </div>
      <div>
        <slot name="button" />
      </div>
      <div class="DataView-CardText">
        <slot />
      </div>
      <div class="DataView-Description">
        <slot name="additionalDescription" />
        <slot name="footer-description" />
      </div>
      <div class="DataView-Footer">
        <div class="Footer-Left">
          <slot name="footer" />
          <div>
            {{ $t('{date} 更新', { date }) }}
          </div>
        </div>
    
        <data-view-share
          v-if="this.$route.query.embed != 'true'"
          :title="title"
          :title-id="titleId"
          class="Footer-Right"
        />
      </div>
    </div>
  </v-card>
</template>

<script lang="ts">
import Vue from 'vue'
import { convertDatetimeToISO8601Format } from '@/utils/formatDate'
import DataViewShare from '@/components/DataViewShare.vue'

export default Vue.extend({
  // components: { DataViewExpantionPanel, DataViewShare },
  components: { DataViewShare },
  props: {
    title: {
      type: String,
      default: ''
    },
    titleId: {
      type: String,
      default: ''
    },
    date: {
      type: String,
      default: ''
    },
    loading: {
      type: Boolean,
      required: false,
      default: false
    },
    url: {
      type: String,
      default: ''
    }
  },
  computed: {
    formattedDate(): string {
      return convertDatetimeToISO8601Format(this.date)
    },
  },
})
</script>

<style lang="scss">
.DataView {
  height: 100%;
  @include card-container();

  .LegendStickyChart {
    margin: 16px 0;
    position: relative;
    overflow: hidden;
    .scrollable {
      overflow-x: scroll;
      &::-webkit-scrollbar {
        height: 4px;
        background-color: rgba(0, 0, 0, 0.01);
      }
      &::-webkit-scrollbar-thumb {
        background-color: rgba(0, 0, 0, 0.07);
      }
    }
    .sticky-legend {
      position: absolute;
      top: 0;
      pointer-events: none;
    }
  }

  &-Header {
    display: flex;
    align-items: flex-start;
    flex-flow: column;
    padding: 0 10px;

    @include largerThan($medium) {
      padding: 0 5px;
    }

    @include largerThan($large) {
      justify-content: space-between;
      flex-flow: row;
      padding: 0;

      &.with-dataSetPanel {
        flex-flow: column;
      }
    }
  }

  &-DataInfo {
    &-summary {
      color: $gray-2;
      font-family: Hiragino Sans, sans-serif;
      font-style: normal;
      font-size: 30px;
      line-height: 30px;
      white-space: nowrap;

      &-unit {
        font-size: 0.6em;
        width: 100%;
      }
    }

    &-date {
      font-size: 12px;
      line-height: 12px;
      color: $gray-3;
      width: 100%;
      display: inline-block;
    }
  }

  &-Inner {
    display: flex;
    flex-flow: column;
    justify-content: space-between;
    padding: 22px;
    height: 100%;
  }

  &-Title {
    width: 100%;
    margin-bottom: 10px;
    font-size: 1.15rem;
    line-height: 1.5;
    font-weight: normal;
    color: $gray-2;

    @include largerThan($large) {
      margin-bottom: 0;
      &.with-infoPanel {
        width: 50%;
      }
    }
  }

  &-CardText {
    margin: 16px 0;
  }

  &-Description {
    margin: 10px 0 20px;
    font-size: 12px;
    color: $gray-3;

    p {
      margin: 0;
    }

    ul,
    ol {
      list-style: disc inside;
      padding-left: 1em;

      li {
        margin-left: 1.5em;
        text-indent: -1.5em;
      }
    }

    i {
      display: inline-block;
      width: 2.5em;
      height: 1em;
      &:first-child {
        background: #1b4d30;
      }
      &:last-child {
        background: #c5e2c6;
      }
    }
  }

  &-CardTextForXS {
    margin-bottom: 46px;
    margin-top: 70px;
  }

  &-Embed {
    background-color: $gray-5;
  }

  &-Footer {
    @include font-size(12);

    padding: 0 !important;
    display: flex;
    justify-content: space-between;
    color: $gray-3 !important;
    text-align: right;
    background-color: $white !important;
    .Permalink {
      color: $gray-3 !important;
    }

    .OpenDataLink {
      text-decoration: none;

      .ExternalLinkIcon {
        vertical-align: text-bottom;
      }
    }

    .Footer-Left {
      text-align: left;
    }

    .Footer-Right {
      display: flex;
      align-items: flex-end;
    }
  }
}

textarea {
  font: 400 11px system-ui;
  width: 100%;
  height: 2.4rem;
}
</style>
