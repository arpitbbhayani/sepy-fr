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
    <input
      :placeholder="placeholder"
      :value="value"
      :type="ispassword ? 'password' : 'text'"
      :readonly="readonly"
      @keyup="updateCharactersRemaining"
      @input="updateSelf($event.target.value)"
    />
    <p
      v-if="showremaining"
      :class="['ui right floated', charactersRemainingColor, 'tiny text']"
    >
      <i>{{ charactersRemaining }} characters remaining</i>
    </p>
    <p v-if="description" class="ui right floated tiny grey text">
      <i>{{ description }}</i>
    </p>
  </sui-form-field>
</template>

<script>
export default {
  name: 'DInput',
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
    ispassword: {
      type: Boolean,
      required: false,
      default: false
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
    description: {
      type: String,
      required: false,
      default: ''
    },
    readonly: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  data() {
    return {
      charactersRemaining: this.maxchars,
      charactersRemainingColor: 'grey'
    }
  },
  methods: {
    updateCharactersRemaining() {
      this.charactersRemaining = this.maxchars - this.value.length
      const pc = this.charactersRemaining / this.maxchars
      if (pc <= 0) {
        this.charactersRemainingColor = 'red'
      } else if (pc <= 0.25) {
        this.charactersRemainingColor = 'orange'
      } else if (pc <= 0.5) {
        this.charactersRemainingColor = 'yellow'
      } else {
        this.charactersRemainingColor = 'grey'
      }
    },
    updateSelf(value) {
      this.$emit('input', value)
    }
  }
}
</script>
