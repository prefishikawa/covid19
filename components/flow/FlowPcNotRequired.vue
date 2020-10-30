<template>
  <div :class="$style.flowContainer">
    <!-- <h3 :class="$style.sectionTitle">
      <i18n path="帰国者・接触者外来 {advice} と判断された場合" tag="p">
        <template v-slot:advice>
          <strong>
            {{ $t('受診が不要') }}
          </strong>
        </template>
      </i18n>
    </h3> -->
    <div :class="$style.actionContainer">
      <ul :class="$style.actions">
        <li :class="$style.actionsList">
          <img
            :class="$style.actionsListIcon"
            src="/flow/house-24px.svg"
            aria-hidden="true"
            alt=" "
          />
          {{ $t('自宅で安静に過ごす') }}
        </li>
        <li :class="$style.actionsList">
          <img
            :class="$style.actionsListIcon"
            src="/flow/apartment-24px.svg"
            aria-hidden="true"
            alt=" "
          />
          {{ $t('症状に応じた治療を受ける') }}
        </li>
      </ul>
      <div :class="$style.nextAction">
        <i18n path="{getWorse}{advisory}" :class="$style.content">
          <template v-slot:getWorse>
            <span>{{ $t('症状が良くならない場合は') }}</span>
          </template>
          <template v-slot:advisory>
            <strong :class="$style.badLink">
              <!-- <a href="#advisory"> -->
                {{ $t('受診した医療機関等') }}
                <!-- <v-icon size="18">
                  mdi-open-in-new
                </v-icon><br>
                <span>{{ $t('（新型コロナ受診相談窓口）') }}</span> -->
              <!-- </a> -->
            </strong>
            <span>に再度ご相談ください</span>
          </template>
        </i18n>
      </div>
    </div>
  </div>
</template>

<style module lang="scss">
.flowContainer {
  @include card-container();

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  padding: 20px;
  height: 100%;
  color: $gray-2;
}

.sectionTitle {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100%;
  margin-bottom: 1rem;

  strong {
    margin: 0 0.2em;
    font-size: 26px;
    font-weight: bold;
  }
}

.actionContainer {
  display: flex;
  justify-content: space-between;
}

.actions {
  width: 49%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 0 !important; // FIXME: for ul element
}

.actionsList {
  list-style-type: none;
  text-align: start;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;

  &Icon {
    min-width: 30px;
    min-height: 30px;
    display: block;
    margin-right: 10px;
  }
}

.icon {
  margin-right: 10px;
}

.nextAction {
  width: 49%;
  padding: 1rem;
  border: $green-1 1.5px solid;
  border-radius: 4px;
  text-align: center;

  .content {
    display: flex;
    flex-direction: column;
    height: 100%;
    // justify-content: space-around;
    justify-content: center;
    font-feature-settings: 'palt';
  }

  strong {
    font-size: 1.25rem;
    span {
      font-size: 0.75rem;
    }
  }
}

.badLink {
  a {
    text-decoration: none;
    font-weight: bold;

    &:hover {
      text-decoration: underline;
    }
  }
}
</style>
