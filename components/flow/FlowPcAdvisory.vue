<template>
  <div id="advisory" :class="$style.Advisory">
    <div :class="$style.AdvisoryContainer">
      <div :class="$style.AdvisoryContents">
        <div>
          <span :class="$style.AdvisoryContentsTitleSmall">{{
            $t('発熱患者等の受診相談先')
          }}</span>
        </div>
        <div :class="[$style.AdvisoryContentsColsSentense, 'mt-4']">
          <strong>まずは、<span>かかりつけ医など</span>の身近な医療機関に<span>電話で相談</span></strong>
        </div>
        <div :class="[$style.AdvisoryContentsColsSentense, $style.AdvisoryContentsColsSentenseL, 'mt-4']">
          <p>相談する医療機関に迷う場合は「石川県発熱患者等受診相談センター」に電話相談</p>
        </div>

        <!-- <div>
          <div :class="[$style.AdvisoryBoxContainer, $style.AdvisoryWhiteBox]">
            <span :class="$style.AdvisoryWhiteBoxSentense">
              {{ $t('24時間対応') }}
            </span>
          </div>
        </div> -->
      </div>

      <div :class="$style.AdvisoryContents">
        <div>
          <div :class="$style.AdvisoryCallCenter">石川県発熱患者等受診相談センター</div>
          <div>
            <div :class="[$style.AdvisoryBoxContainer, $style.AdvisoryWhiteBox]">
              <span :class="$style.AdvisoryWhiteBoxSentense">
                {{ $t('24時間対応') }}
              </span>
            </div>
            <div>0120 - 540 - 004</div>
          </div>

        </div>

        <!--<div :class="$style.AdvisoryContentsDiv">
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
        </div> -->
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

  &CallCenter {
    // padding-top: 1em !important;
    font-feature-settings: 'palt';
    font-size:16px;
  }

  &Container {
    display: flex;
    flex-direction: column;
    justify-content: center;
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

    &ColsSentenseL {
      text-align: left !important;
    }

    &ColsSentense {
      font-size: 16px;
      line-height: 24px;
      padding-top: 1em !important;
      // text-align: left !important;

      strong {
        font-size: 18px;
      }

      span {
        font-size: 24px;
      }

      p {
        font-size: 16px;
        font-weight: bold;
      }
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
    margin-top: 12px;
    margin-bottom: 12px;

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
