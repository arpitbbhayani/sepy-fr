<template>
  <sui-form-field>
    <label v-if="label">
      <sui-icon v-if="iconname" :name="iconname" />
      {{ label }}
      <span v-if="isrequired" class="ui red text">
        *
      </span>
    </label>
    <label v-else>&nbsp;</label>
    <textarea
      :placeholder="placeholder"
      :value="value"
      :rows="rows"
      :readonly="readonly"
      type="text"
      @keyup="updateCharactersRemaining"
      @input="updateSelf($event.target.value)"
    />
    <p v-if="showremaining" class="ui right floated grey mini text">
      <i>{{ charactersRemaining }} characters remaining</i>
    </p>
  </sui-form-field>
</template>

<script>
export default {
  name: 'DTextarea',
  components: {},
  props: {
    value: {
      type: String,
      required: false,
      default: ''
    },
    label: {
      type: String,
      required: false,
      default: ''
    },
    isrequired: {
      type: Boolean,
      required: false,
      default: false
    },
    iconname: {
      type: String,
      required: false,
      default: ''
    },
    placeholder: {
      type: String,
      required: false,
      default: ''
    },
    showremaining: {
      type: Boolean,
      required: false,
      default: false
    },
    maxchars: {
      type: Number,
      required: false,
      default: 0
    },
    rows: {
      type: Number,
      required: false,
      default: 3
    },
    readonly: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  data() {
    return {
      charactersRemaining: this.maxchars
    }
  },
  methods: {
    updateCharactersRemaining() {
      this.charactersRemaining = this.maxchars - this.value.length
    },
    updateSelf(value) {
      this.$emit('input', value)
    }
  }
}
</script>
