<template>
  <div :class="$style.container">
    <h4 id="consult" :class="[$style.heading, $style.fzXLarge]">
      {{ $t('発熱患者等の受診相談先') }}
    </h4>
    <p :class="[$style.break, $style.fzRegular, $style.mt30, $style.alignCenter]">
        まずは、<span :class="$style.fzXLarge">かかりつけ医など</span>の身近な医療機関に<span :class="$style.fzXLarge">電話で相談</span>
    </p>
    <p :class="[$style.break, $style.fzRegular, $style.mt30]">
      相談する医療機関に迷う場合は「石川県発熱患者等受診相談センター」に電話相談
    </p>
    <p :class="[$style.break, $style.fzRegular, $style.mt30, $style.alignCenter]">
      石川県発熱患者等受診相談センター
    </p>
    <p :class="[$style.open, $style.fzSmall]">
      <span>{{ $t('24時間対応') }}</span>
    </p>
    <p :class="[$style.break, $style.fzRegular, $style.mt10, $style.alignCenter]">
      0120 - 540 - 004
    </p>
  </div>
</template>

<script lang="ts">
import PhoneIcon from '@/static/flow/responsive/phone.svg'

export default {
  components: { PhoneIcon }
}
</script>

<style module lang="scss">
@import '@/components/flow/flow_sp.scss';

// advisory
.telCenter {
  padding: 0 px2vw(10) px2vw(20);
  text-align: center;
  dt {
    padding-top: 20px;
  }
}
.open {
  margin-top: px2vw(20);
  display: flex;
  justify-content: center;

  > span {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: $white;
    color: $green-1;
    padding: px2vw(20) px2vw(40);
    border-radius: px2vw(6);
  }
}

.AdvisoryLink {
  text-align: center;
  a {
    text-decoration: underline !important;
  }
}

.daytime {
  margin-top: px2vw(20);
  display: flex;

  > * {
    padding: px2vw(20) px2vw(10);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .title {
    text-align: center;
    flex-basis: 40%;
  }

  .link {

    > a {
      text-decoration: none;
    }
  }
}

.night {
  margin: px2vw(30) auto;
  padding-left: 0 !important;
  text-align: center;

  > li {
    list-style-type: none;

    &:not(:first-child) {
      margin-top: px2vw(20);
    }
  }
}

@include largerThan($small) {
  $vw: 960;

  .open {
    margin-top: px2vw(20, $vw);

    > span {
      padding: px2vw(20) px2vw(40, $vw);
      border-radius: px2vw(6, $vw);
    }
  }

  .daytime {
    margin-top: px2vw(20, $vw);

    > * {
      padding: px2vw(30) px2vw(10, $vw);
    }
  }

  .night {
    margin: px2vw(30, $vw) auto;

    > li {
      &:not(:first-child) {
        margin-top: px2vw(20, $vw);
      }
    }
  }
}
</style>
