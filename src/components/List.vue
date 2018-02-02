<template>
    <v-list three-line>
        <v-subheader v-text="'List of messages'"></v-subheader>
        <template v-for="message in messages">
            <v-divider></v-divider>
            <v-list-tile>
                {{message.text}}
            </v-list-tile>
        </template>
    </v-list>
</template>

<script>

import feathers from '../feathers'

export default {
  data () {
    return {
      messages: []
    }
  },
  created () {
    this.getMessages()

    feathers.service('list').on('created', message => {
      this.messages.push(message)
    })
  },
  methods: {
    async getMessages () {
      const response = await feathers.service('list').find()
      this.messages = response.data
    }
  }
}
</script>