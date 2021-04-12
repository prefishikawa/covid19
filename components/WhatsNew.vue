<template>
  <div class="WhatsNew">
    <div class="WhatsNew-heading">
      <h3 class="WhatsNew-title">
        <v-icon size="24" class="WhatsNew-title-icon">
          mdi-information
        </v-icon>
        {{ $t('最新のお知らせ') }}
      </h3>
      <!-- <span class="WhatsNew-link-to-emergency-page"> -->
        <!-- <v-icon size="20" class="WhatsNew-link-to-emergency-page-icon">
          mdi-bullhorn
        </v-icon>
        <external-link
          url="https://www.pref.ishikawa.lg.jp/kansen/monitoring.html"
          :label="$t('現在 ステージⅡ（感染拡大警報）')"
        /> -->
        <!-- <a class="ExternalLink" href="https://www.pref.ishikawa.lg.jp/kansen/monitoring.html" target="_blank">現在 <strong>ステージⅡ（感染拡大注意報）</strong><i aria-label="別タブで開く" role="img" class="v-icon notranslate ExternalLinkIcon mdi mdi-open-in-new theme--light" style="font-size: 15px;"></i>
        </a>
      </span> -->
    </div>
    <ul class="WhatsNew-list">
      <li v-for="(item, i) in items" :key="i" class="WhatsNew-list-item">
        <a
          v-if="item.url != ''"
          class="WhatsNew-list-item-anchor"
          :href="item.url"
          target="_blank"
          rel="noopener noreferrer"
        >
          <time
            class="WhatsNew-list-item-anchor-time px-2"
            :datetime="formattedDate(item.date)"
          >
            {{ formattedDateForDisplay(item.date) }}
          </time>
          <span class="WhatsNew-list-item-anchor-link">
            {{ item.text }}
            <v-icon
              v-if="!isInternalLink(item.url)"
              class="WhatsNew-item-ExternalLinkIcon"
              size="12"
            >
              mdi-open-in-new
            </v-icon>
          </span>
        </a>
        <span
          v-else
          class="WhatsNew-list-item-anchor"
          target="_blank"
          rel="noopener noreferrer"
        >
          <time
            class="WhatsNew-list-item-anchor-time px-2"
            :datetime="formattedDate(item.date)"
          >
            {{ formattedDateForDisplay(item.date) }}
          </time>
          <span class="WhatsNew-list-item-anchor-link">
            {{ item.text }}
            <v-icon
              v-if="!isInternalLink(item.url)"
              class="WhatsNew-item-ExternalLinkIcon"
              size="12"
            >
              mdi-open-in-new
            </v-icon>
          </span>
        </span>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import ExternalLink from '@/components/ExternalLink.vue'

import {
  convertDateByCountryPreferTimeFormat,
  convertDateToISO8601Format
} from '@/utils/formatDate'

export default Vue.extend({
  components: { ExternalLink },
  props: {
    items: {
      type: Array,
      required: true
    }
  },
  methods: {
    isInternalLink(path: string): boolean {
      return !/^https?:\/\//.test(path)
    },
    formattedDate(dateString: string) {
      return convertDateToISO8601Format(dateString)
    },
    formattedDateForDisplay(dateString: string) {
      return convertDateByCountryPreferTimeFormat(dateString, this.$i18n.locale)
    }
  }
})
</script>

<style lang="scss">
.WhatsNew {
  @include card-container();

  padding: 10px;
  margin-bottom: 20px;

  .WhatsNew-heading {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    margin-bottom: 12px;

    .WhatsNew-title {
      display: flex;
      align-items: center;
      color: $gray-2;
      @include card-h2();
      &-icon {
        margin: 3px;
      }
    }

    .WhatsNew-link-to-emergency-page {
      // 感染拡大警報の色
      // background-color: rgba(255, 165, 0, 1);
      // border: 2px solid rgba(255, 165, 0, 1);
      // 感染拡大注意報の背景色
      background-color: rgb(255, 255, 68);
      border: 2px solid rgb(255, 255, 68);
      color: #000;
      // color: $gray-2;
      border-radius: 4px;
      font-size: 1rem;
      padding: 4px 8px;

      .ExternalLink {
        // color: $gray-2 !important;
        color: #000 !important;
        text-decoration: none;

        &:hover {
          // background-color: $white;
          // border-radius: 4px;
          // color: #999 !important;
          opacity: 0.6;
        }
      }

      > span {
        @include button-text('sm');
      }

      @include lessThan($small) {
        margin-top: 4px;
      }

      .mdi-open-in-new::before {
        color: #000;
      }
    }
  }

  .WhatsNew-list {
    padding-left: 0;
    list-style-type: none;

    &-item {
      &-anchor {
        text-decoration: none;
        margin: 5px;
        font-size: 14px;

        @include lessThan($medium) {
          display: flex;
          flex-wrap: wrap;
        }

        &-time {
          flex: 0 0 90px;

          @include lessThan($medium) {
            flex: 0 0 100%;
          }

          color: $gray-1;
        }

        &-link {
          flex: 0 1 auto;

          @include text-link();

          @include lessThan($medium) {
            padding-left: 8px;
          }
        }

        &-ExternalLinkIcon {
          margin-left: 2px;
          color: $gray-3 !important;
        }
      }
    }
  }
  span.WhatsNew-list-item-anchor {
    .WhatsNew-list-item-anchor-link {
      color: #333 !important;
      text-decoration: none !important;
    }
  }
}
</style>
