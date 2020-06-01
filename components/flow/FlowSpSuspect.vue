<template>
  <div :class="$style.container">
    <p :class="$style.heading">
      <span :class="$style.fzMedium">{{ $t('その他') }}</span>
    </p>

    <ul :class="[$style.rectContainer, $style.triple]">
      <li :class="$style.symptom">
        {{ $t('感染の不安') }}
      </li>
      <li :class="$style.symptom">
        {{ $t('感染の予防法') }}
      </li>
    </ul>
    <p :class="$style.duration">などの相談</p>

    <div :class="$style.callcenter">
      <p :class="$style.fzLarge">
        {{ $t('一般相談窓口') }}
      </p>
      <dl :class="$style.telCenter">
        <dt>石川県感染拡大防止県民相談センター</dt>
        <dd>076-225-1921</dd>
      </dl>
    </div>
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
