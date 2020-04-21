<template>
  <div ref="Side" class="SideNavigation" tabindex="-1">
    <header class="SideNavigation-Header">
      <v-icon
        class="SideNavigation-OpenIcon"
        :aria-label="$t('サイドメニュー項目を開く')"
        @click="$emit('openNavi', $event)"
      >
        mdi-menu
      </v-icon>
      <h1 class="SideNavigation-HeaderTitle">
        <nuxt-link :to="localePath('/')" class="SideNavigation-HeaderLink">
          <img
            class="SideNavigation-HeaderLogo"
            src="/logo.svg"
            :alt="$t('石川県')"
          />
          <div class="SideNavigation-HeaderText">
            {{ $t('menu/新型コロナウイルス感染症') }}<br />{{
              $t('menu/対策サイト')
            }}
          </div>
        </nuxt-link>
      </h1>
    </header>

    <div :class="['SideNavigation-Body', { '-opened': isNaviOpen }]">
      <v-icon
        class="SideNavigation-CloseIcon"
        :aria-label="$t('サイドメニュー項目を閉じる')"
        @click="$emit('closeNavi', $event)"
      >
        mdi-close
      </v-icon>

      <nav class="SideNavigation-Menu">
        <!-- <div class="SideNavigation-Language">
          <div
            v-if="this.$i18n.locales.length > 1"
            class="SideNavigation-Language"
          >
            <label class="SideNavigation-LanguageLabel" for="LanguageSelector">
              {{ $t('多言語対応選択メニュー') }}
            </label>
            <language-selector />
          </div>
        </div> -->
        <menu-list :items="items" @click="$emit('closeNavi', $event)" />
      </nav>

      <footer class="SideNavigation-Footer">
        <div class="SideNavigation-Social">
          <a
            href="https://github.com/prefishikawa/covid19"
            target="_blank"
            rel="noopener noreferrer"
            class="SideNavigation-SocialLink"
          >
            <picture>
              <source srcset="/github.webp" type="image/webp" />
              <img src="/github.png" alt="GitHub" />
            </picture>
          </a>
        </div>
        <small class="SideNavigation-Copyright">
          {{ $t('このサイトの内容物は') }}
          <a
            :href="$t('https://creativecommons.org/licenses/by/4.0/deed.ja')"
            target="_blank"
            rel="license"
            class="SideNavigation-LicenseLink"
          >
            {{ $t('クリエイティブ・コモンズ 表示 4.0 ライセンス') }}
          </a>
          {{ $t('の下に提供されています。') }}
          <br />
          2020 Tokyo Metropolitan Government
        </small>
      </footer>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { TranslateResult } from 'vue-i18n'
import LanguageSelector from '@/components/LanguageSelector.vue'
import MenuList from '@/components/MenuList.vue'

type Item = {
  icon?: string
  title: TranslateResult
  link: string
  divider?: boolean
}

export default Vue.extend({
  components: {
    LanguageSelector,
    MenuList
  },
  props: {
    isNaviOpen: {
      type: Boolean,
      required: true
    }
  },
  computed: {
    items(): Item[] {
      return [
        {
          icon: 'mdi-chart-timeline-variant',
          title: this.$t('県内の最新感染動向'),
          link: this.localePath('/')
        },
        {
          icon: 'CovidIcon',
          title: this.$t('新型コロナウイルス感染症の相談受診の目安'),
          link: this.localePath('/flow'),
          divider: true
        },
        {
          title: this.$t('知事からのメッセージ（2020-4-20）'),
          link: ''
        },
        {
          title: this.$t('動画版'),
          link: 'https://www.videog.jp/player/1zd-s1WOQ2lo'
        },
        {
          title: this.$t('テキスト版'),
          link: 'https://www.pref.ishikawa.lg.jp/documents/text.pdf',
          divider: true
        },
        {
          title: this.$t('知事記者会見'),
          link: 'https://www.pref.ishikawa.lg.jp/chiji/kisya/r2/index.html'
        },
        {
          title: this.$t('健康福祉部長記者会見'),
          link: 'https://www.pref.ishikawa.lg.jp/kansen/kaiken.html'
        },
        {
          title: this.$t('石川県緊急事態措置について（2020-4-19）'),
          link: 'https://www.pref.ishikawa.lg.jp/kikaku/kinkyujitaisoti.html'
        },
        {
          title: this.$t('石川県緊急事態宣言（2020-4-13）'),
          link: 'https://www.pref.ishikawa.lg.jp/library_documents/kjs200413.pdf'
        },
        {
          title: this.$t('対策本部会議の開催状況'),
          link: 'https://www.pref.ishikawa.lg.jp/kansen/coronataisakuhonbu.html'
        },
        {
          title: this.$t('県民のみなさまへ'),
          link: 'https://www.pref.ishikawa.lg.jp/kansen/corona.html#1'
        },
        {
          title: this.$t('事業者のみなさまへ'),
          link: 'https://www.pref.ishikawa.lg.jp/kinyuu/kinyuu/korona.html'
        },
        {
          title: this.$t('農林漁業者のみなさまへ'),
          link: 'https://www.pref.ishikawa.lg.jp/nousei/sikin/index.html'
        },
        {
          title: this.$t('休業や失業で生活資金にお悩みのみなさまへ'),
          link: 'https://www.pref.ishikawa.lg.jp/kousei/seikatsufukushi/seikatsufukushi.html'
        },
        {
          title: this.$t('医療機関のみなさまへ'),
          link: 'https://www.pref.ishikawa.lg.jp/kansen/corona.html#2'
        },
        {
          title: this.$t('運転免許更新手続きが困難な方へ'),
          link: 'http://www2.police.pref.ishikawa.lg.jp/topics/topics089.html'
        },
        {
          title: this.$t('看護職員の臨時雇用求職者登録について'),
          link: 'https://www.pref.ishikawa.lg.jp/documents/kango_rinji.pdf'
        },
        {
          title: this.$t('軽症者向け宿泊療養を開始しました'),
          link: 'https://www.pref.ishikawa.lg.jp/library_documents/sy_ry.pdf'
        },
        {
          title: this.$t('消費者トラブルが発生しています（外部リンク）'),
          link: 'http://www.kokusen.go.jp/soudan_now/data/coronavirus.html'
        },
        {
          title: this.$t('臨時休館・休園する県有施設'),
          link: 'https://www.pref.ishikawa.lg.jp/kenmin/kouhou/shisetsu.html'
        },
        {
          title: this.$t('延期・中止する県主催イベント'),
          link: 'https://www.pref.ishikawa.lg.jp/kenmin/kouhou/eventcancel.html'
        },
        {
          title: this.$t('相談窓口一覧'),
          link: 'https://www.pref.ishikawa.lg.jp/kenmin/covid19/documents/contacts.pdf'
        },
        {
          title: this.$t('当サイトについて'),
          link: this.localePath('/about')
        },
        {
          title: this.$t('石川県公式ホームページ'),
          link: 'https://www.pref.ishikawa.lg.jp/'
        }
      ]
    }
  },
  watch: {
    $route: 'handleChageRoute'
  },
  methods: {
    handleChageRoute() {
      // nuxt-link で遷移するとフォーカスが残り続けるので $route を監視して SideNavigation にフォーカスする
      return this.$nextTick().then(() => {
        const $Side = this.$refs.Side as HTMLEmbedElement | undefined
        if ($Side) {
          $Side.focus()
        }
      })
    }
  }
})
</script>

<style lang="scss" scoped>
.SideNavigation {
  position: relative;
  @include lessThan($small) {
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.15);
  }
  &:focus {
    outline: 1px dotted $gray-3;
  }
}

.SideNavigation-Header {
  height: 64px;
  padding-left: 52px;
  @include largerThan($small) {
    height: auto;
    padding: 20px;
  }
  @include lessThan($small) {
    display: flex;
  }
  @include lessThan($tiny) {
    padding-left: 44px;
  }
}

.SideNavigation-OpenIcon {
  position: absolute;
  top: 0;
  left: 0;
  padding: 18px 8px 18px 16px;
  font-size: 28px;
  @include lessThan($tiny) {
    font-size: 24px;
    padding: 20px 10px;
  }
  @include largerThan($small) {
    display: none;
  }
}

.SideNavigation-CloseIcon {
  position: absolute;
  top: 0;
  left: 0;
  padding: 18px 8px 18px 16px;
  font-size: 28px;
  @include lessThan($tiny) {
    font-size: 24px;
    padding: 20px 10px;
  }
  @include largerThan($small) {
    display: none;
  }
}

.SideNavigation-HeaderTitle {
  width: 100%;
  font-size: 13px;
  color: #707070;
  @include largerThan($small) {
    margin: 0;
    margin-top: 10px;
  }
}

.SideNavigation-HeaderLink {
  display: flex;
  align-items: center;
  padding-right: 10px;
  @include lessThan($small) {
    height: 64px;
  }
  @include lessThan($tiny) {
    justify-content: space-between;
  }
  &:link,
  &:hover,
  &:focus,
  &:visited,
  &:active {
    color: inherit;
    text-decoration: none;
  }

  &:hover,
  &:focus {
    font-weight: bold;
  }

  &:focus {
    outline: dotted $gray-3 1px;
  }

  @include largerThan($small) {
    display: block;
    padding: 15px 0;
  }
}

.SideNavigation-HeaderLogo {
  @include lessThan($tiny) {
    width: 100px;
  }
}

.SideNavigation-HeaderText {
  margin: 10px 0 0 0;
  @include lessThan($small) {
    margin: 0 0 0 10px;
  }

  @include lessThan($tiny) {
    margin: 0;
  }
}

.SideNavigation-Body {
  padding: 0 20px 20px;
  @include lessThan($small) {
    display: none;
    padding: 0 36px 36px;
    &.-opened {
      position: fixed;
      top: 0;
      bottom: 0;
      left: 0;
      display: block !important;
      width: 100%;
      z-index: z-index-of(opened-side-navigation);
      background-color: $white;
      height: 100%;
      overflow: auto;
      -webkit-overflow-scrolling: touch;
    }
  }
}

.SideNavigation-Menu {
  @include lessThan($small) {
    padding-top: 50px;
  }
}

// .SideNavigation-LanguageLabel {
//   display: block;
//   margin-bottom: 5px;
//   font-size: 0.85rem;
// }

.SideNavigation-Footer {
  padding-top: 20px;
}

.SideNavigation-Social {
  display: flex;
}

.SideNavigation-SocialLink {
  border: 1px dotted transparent;
  border-radius: 30px;
  color: $gray-3;

  &:link,
  &:hover,
  &:visited,
  &:active {
    color: inherit;
    text-decoration: none;
  }

  &:focus {
    color: inherit;
    text-decoration: none;
    border: 1px dotted $gray-3;
    outline: none;
  }

  & + & {
    margin-left: 10px;
  }

  img {
    width: 30px;
  }
}

.SideNavigation-Copyright {
  display: block;
  margin-top: 15px;
  color: $gray-1;
  font-size: 10px;
  line-height: 1.3;
  font-weight: bold;
}

.SideNavigation-LicenseLink {
  &:focus {
    outline: 1px dotted $gray-3;
  }
}
</style>
