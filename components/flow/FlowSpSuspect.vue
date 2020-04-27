<template>
  <div :class="$style.container">
    <p :class="$style.heading">
      <span :class="[$style.icon, $style.top]">
        <sentiment-icon aria-hidden="true" />
      </span>
      <span :class="$style.fzMedium">{{ $t('不安に思う方') }}</span>
    </p>

    <ul :class="[$style.rectContainer, $style.triple]">
      <li :class="$style.symptom">
        {{ $t('微熱') }}
      </li>
      <li :class="$style.symptom">
        {{ $t('軽い咳') }}
      </li>
      <li :class="$style.symptom">
        {{ $t('感染の不安') }}
      </li>
    </ul>

    <div :class="$style.callcenter">
      <p :class="$style.fzLarge">
        {{ $t('一般相談窓口') }}
      </p>
      <dl :class="$style.telCenter">
        <dt>南加賀保健福祉センター</dt>
        <dd>0761-22-0796</dd>
        <dt>石川中央保健福祉センター</dt>
        <dd>076-275-2250</dd>
        <dt>能登中部保健福祉センター</dt>
        <dd>0767-53-2482</dd>
        <dt>能登北部保健福祉センター</dt>
        <dd>0768-22-2011</dd>
        <dt>金沢市保健所</dt>
        <dd>076-234-5116</dd>
        <dt>石川県健康福祉部健康推進課</dt>
        <dd>076-225-1438</dd>
      </dl>
      <p :class="[$style.link, $style.fzNumeric, $style.windowLink]">
        <a
          href="https://www.pref.ishikawa.lg.jp/kansen/corona.html#contacts"
          target="_blank"
          rel="noopener noreferrer"
        >
          {{ $t('各保健所の電話番号はこちら') }}
          <v-icon size="16">
            mdi-open-in-new
          </v-icon>
        </a>
      </p>
    </div>

    <a
      v-scroll-to="{
        el: '#consult',
        onDone: onDoneScroll
      }"
      href="#consult"
      :class="[$style.button, $style.clickable]"
    >
      <span :class="$style.text">{{ $t('専門的な助言が必要な場合') }}</span>
      <arrow-forward-icon :class="$style.icon" />
    </a>
  </div>
</template>

<script lang="ts">
import { onDoneScroll } from '@/utils/vueScrollTo'
import ArrowForwardIcon from '@/static/flow/responsive/arrow_forward.svg'
import PhoneIcon from '@/static/flow/responsive/phone.svg'
import SentimentIcon from '@/static/flow/responsive/sentiment_very_dissatisfied.svg'

export default {
  components: { ArrowForwardIcon, PhoneIcon, SentimentIcon },
  methods: { onDoneScroll }
}
</script>

<style module lang="scss">
@import '@/components/flow/flow_sp.scss';
.windowLink {
  margin-top: 20px;
}
.telCenter {
  dt {
    padding-top:20px;
  }
}
.rectContainer {
  // suspect
  &.triple {
    margin-left: px2vw(-11);
    margin-right: px2vw(-11);

    > .symptom {
      margin-left: px2vw(11);
      margin-right: px2vw(11);
      flex-grow: 10;
    }
  }
}
// suspect
.callcenter {
  margin-top: px2vw(25);
  text-align: center;

  .open {
    margin-top: px2vw(10);
  }
}

@include largerThan($small) {
  $vw: 960;

  .rectContainer {
    &.triple {
      margin-left: px2vw(-11, $vw);
      margin-right: px2vw(-11, $vw);

      > .symptom {
        margin-left: px2vw(11, $vw);
        margin-right: px2vw(11, $vw);
      }
    }
  }
  // suspect
  .callcenter {
    margin-top: px2vw(25, $vw);

    .open {
      margin-top: px2vw(10, $vw);
    }
  }
}
</style>
