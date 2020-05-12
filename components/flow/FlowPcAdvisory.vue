<template>
  <div :class="$style.Advisory">
    <div :class="$style.AdvisoryContainer">
      <div :class="$style.AdvisoryContents">
        <div>
          <span :class="$style.AdvisoryContentsTitleSmall">{{
            $t('帰国者・接触者 相談センター')
          }}</span>
        </div>
        <div :class="[$style.AdvisoryContentsColsSentense_17Ilp, 'mt-4']">
          {{ $t('（新型コロナ受診相談窓口）') }}
        </div>
        <div>
          <div :class="[$style.AdvisoryBoxContainer, $style.AdvisoryWhiteBox]">
            <span :class="$style.AdvisoryWhiteBoxSentense">
              {{ $t('24時間対応') }}
            </span>
          </div>
        </div>
      </div>

      <div :class="$style.AdvisoryContents">
        <dl>
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
        <div :class="$style.AdvisoryContentsDiv">
          <div
            :class="[
              $style.AdvisoryLink,
              $style.AdvisoryBlockCentering
            ]"
          >
            <a
              href="https://www.pref.ishikawa.lg.jp/kansen/corona.html#center"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>{{ $t('各保健所の電話番号等はこちら') }}</span>
              <v-icon size="18">
                mdi-open-in-new
              </v-icon>
            </a>
          </div>
        </div>
      </div>

      <div :class="$style.AdvisoryContents">
        <div v-if="!['ja', 'ja-basic'].includes($i18n.locale)" class="pt-8">
          <span>{{ $t('ひまわり') }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style module lang="scss">
.Advisory {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  color: $gray-2;

  &Container {
    background-color: $gray-5;
    border-radius: 4px;
    height: 100%;
    padding: 30px 20px 20px 20px;
    // margin-bottom: 10px;
    text-align: center;
  }

  &Contents {
    font-weight: bold;

    // &:not(:first-child) {
    //   border-top: 0.5px solid $gray-4;
    // }

    &Title {
      font-size: 26px;
      line-height: 28px;
      &Small {
        font-size: 20px;
      }
    }

    &Title2 {
      font-size: 18px;
    }

    &SubTitle {
      font-size: 18px;
    }

    &ColsSentense {
      line-height: 18px;
    }

    &Div {
      margin-top: 20px
    }
  }

  &BlockCentering {
    display: flex;
    justify-content: center;
  }

  &Link {
    line-height: 22px;
    text-align: left;
    text-decoration: none;

    a {
      // color: rgba(0, 0, 0, 0.87);
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }
  }

  &TelephoneArea {
    display: inline-flex;
  }

  &Telephone {
    display: flex;
    align-items: center;
    font-size: 27px;
    font-weight: bold;

    &:link,
    &:visited,
    &:hover,
    &:active,
    &:focus {
      color: inherit;
      text-decoration: none;
    }

    &:visited,
    &:hover,
    &:active,
    &:focus {
      @media screen {
        // printだとoutlineが太くなってしまい読みにくいので、消す処理
        outline: 1px dotted $gray-3;
      }
    }

    &Icon {
      display: inline-block;
      margin-right: 5px;
      width: 26px;
      height: 26px;
    }
  }

  &BoxContainer {
    border-radius: 4px;
    text-align: center;
    padding: 20px 10px;
    margin: 24px auto;
  }

  &WhiteBox {
    background-color: $white;
    max-width: 160px;
    padding: 8px;

    &Sentense {
      color: $green-1;
      font-size: 14px;
      font-weight: bold;
    }
  }
  dl {
    dt {
      margin-top: 20px;
    }
  }
}
</style>
