<template>
  <div :class="$style.container">
    <h4 id="consult" :class="[$style.heading, $style.fzXLarge]">
      {{ $t('帰国者・接触者 相談センター') }}
      <small :class="[$style.break, $style.fzRegular, $style.mt5]">{{
        $t('（新型コロナ受診相談窓口）')
      }}</small>
    </h4>
    <p :class="[$style.open, $style.fzSmall]">
      <span>{{ $t('24時間対応') }}</span>
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
      <dd>076-234-5106</dd>
      <dt>石川県健康福祉部健康推進課</dt>
      <dd>076-225-1670</dd>
    </dl>
    <dl>
      <div :class="$style.daytime">
        <dd :class="[$style.link, $style.fzNumeric, $style.AdvisoryLink]">
          <a
            href="https://www.pref.ishikawa.lg.jp/kansen/corona.html#center"
            target="_blank"
            rel="noopener noreferrer"
          >
            {{ $t('各保健所の電話番号はこちら') }}
            <v-icon size="16">
              mdi-open-in-new
            </v-icon>
          </a>
        </dd>
      </div>
    </dl>
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
