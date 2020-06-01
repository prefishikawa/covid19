<template>
  <div :class="$style.FlowComponent">
    <div :class="[$style.SubtleBox, $style.Box1]">
      <img
        :class="$style.Box1Icon"
        src="/flow/flow_arrow.svg"
        aria-hidden="true"
        alt=" "
      />
      <div :class="$style.RowItems">
        <div :class="$style.RowItemsHeader">
          その他
        </div>
      </div>
      <div :class="$style.RowItems">
        <div :class="$style.CheckBox">
          <img
            :class="$style.CheckBoxIcon"
            src="/flow/check_circle-24px.svg"
            aria-hidden="true"
            alt=" "
          />
          {{ $t('感染の不安') }}
        </div>
        <div :class="$style.CheckBox">
          <img
            :class="$style.CheckBoxIcon"
            src="/flow/check_circle-24px.svg"
            aria-hidden="true"
            alt=" "
          />
          {{ $t('感染の予防法') }}
        </div>
      </div>
      <div :class="$style.RowItems">
        <p :class="$style.explanation"><span>などの相談</span></p>
      </div>
    </div>

    <div :class="[$style.SubtleBox, $style.Box2, $style.Center]">
      <div :class="$style.LargerText">
        {{ $t('一般相談窓口') }}
      </div>
        <div :class="[$style.SubtleBoxContainer, $style.SubtleWhiteBox]">
          <span :class="$style.AdvisoryWhiteBoxSentense">
            9:00～18:00
          </span>
        </div>
      <dl :class="$style.telCenter">
        <dt>石川県感染拡大防止県民相談センター</dt>
        <dd>076-225-1921</dd>
      </dl>
    </div>
  </div>
</template>

<style module lang="scss">
.telCenter {
  font-weight: bold;
  dt {
    margin-top: 20px;
    &:first-child {
      margin-top: 10px;
    }
  }
}
.FlowComponent {
  color: $gray-2;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.Tel {
  @include largerThan($medium) {
    font-size: larger;
  }
}

.windowLink {
  line-height: 22px;
  text-align: left;
  text-decoration: none;
  margin-top: 20px !important;

  a {
    // color: rgba(0, 0, 0, 0.87);
    text-decoration: none;
    font-weight: bold;

    &:hover {
      text-decoration: underline;
    }
  }
}

.TelLink {
  display: flex;
  align-items: center;
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

.CheckBox {
  position: relative;
  border: 2px solid $green-1;
  border-radius: 4px;
  margin: 8px 0;
  padding: 10px;
  max-width: 200px;
  text-align: center;
  font-weight: bold;
  font-size: calc(0.875rem + ((1vw - 7.68px) * 0.8929));

  @include largerThan($large) {
    font-size: 20px;
  }

  &Icon {
    position: absolute;
    left: -8px;
    top: -8px;
    width: 24px;
    height: 24px;
  }

  &::before {
    position: absolute;
    left: -4px;
    top: -4px;
    width: 20px;
    height: 20px;
    background-color: white;
    content: '';
  }
}

.SubtleBox {
  @include card-container();

  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 0.5em;
}

.SubtleBoxContainer {
  border-radius: 4px;
  text-align: center;
  padding: 20px 10px;
  margin: 12px auto !important;
}

.SubtleWhiteBox {
  background-color: $gray-5;
  width: 100%;
  max-width: 160px;
  padding: 8px;
  color: $green-1;
  font-weight: bold;
  font-size: 14px;

  &Sentense {
    color: $green-1;
    font-size: 14px;
    font-weight: bold;
  }
}

.Box1 {
  position: relative;
  flex-grow: 0;
  flex-shrink: 0;
  width: calc(70% - 8px);
  flex-direction: row;
  padding: 20px;

  &Icon {
    position: absolute;
    bottom: 40%;
    right: -30px;
    z-index: 1;
    display: block;
    width: 46px;
    height: 46px;
  }
}

.Box2 {
  flex-grow: 0;
  flex-shrink: 0;
  width: calc(30% - 6px);
  flex-direction: column;
  justify-content: center;

  div {
    margin: 0.5em;
  }
}

.RowItems {
  flex-grow: 1;
  text-align: center;
  margin: 0 4px;
  flex-basis: 36%;
  // &:first-of-type {
  //   width: 26%;
  // }
  &:nth-of-type(2) {
    flex-basis: calc(28% - 20px);
  }

  // @include largerThan($large) {
  //   margin: 0 2em;
  // }
}

.RowItemsHeader {

  &Icon {
    display: block;
    margin: auto;
    width: 45px;
    height: 45px;
  }
}

.FlowArrow {
  position: absolute;
  margin: 0 -20px;
  z-index: 1;
}

.LargerText {
  font-size: 20px;
  font-weight: bold;
  @media print {
    width: 65%;
  }
}

.Center {
  text-align: center;
}

.SmallerText {
  font-size: smaller;
}

.explanation {
  text-align: center;
  span {
    display: inline-block;
    font-weight: bold;
    font-size: calc(0.875rem + ((1vw - 7.68px) * 0.8929));
    @include largerThan($large) {
      font-size: 20px;
    }
  }
}
</style>
