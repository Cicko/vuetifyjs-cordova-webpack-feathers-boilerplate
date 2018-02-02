<template>
    <form class="mt-5 mr-5 ml-5">
        <v-text-field
                label="Text"
                v-model="text"
                :error-messages="textErrors"
                @input="$v.text.$touch()"
                @blur="$v.text.$touch()"
                required
        ></v-text-field>
        <v-btn @click="submit">submit</v-btn>
        <v-btn @click="clear">clear</v-btn>
    </form>
</template>

<script>
  import { validationMixin } from 'vuelidate'
  import { required, minLength } from 'vuelidate/lib/validators'
  import feathers from '../feathers'

  export default {
    mixins: [validationMixin],
    validations: {
      text: { required, minLength: minLength(10) }
    },
    data () {
      return {
        text: ''
      }
    },
    methods: {
      async submit () {
        this.$v.$touch()
        feathers.service('list').create({
          text: this.text
        })
      },
      clear () {
        this.$v.$reset()
        this.text = ''
      }
    },
    computed: {
      textErrors () {
        const errors = []
        if (!this.$v.text.$dirty) return errors
        !this.$v.text.minLength && errors.push('Text must be at least 10 characters long')
        !this.$v.text.required && errors.push('Text is required.')
        return errors
      }
    }
  }
</script>