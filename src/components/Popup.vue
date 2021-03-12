<template>
  <v-dialog max-width="600">
    <template v-slot:activator="{on, attrs}">
      <v-btn color="red lighten-1" large dark v-bind="attrs" v-on="on">
        Add new project
      </v-btn>
    </template>
    <v-card>
      <v-card-title>
        <div class="title">프로젝트 만들기</div>
      </v-card-title>
      <v-card-text>
        <v-form class="px-3" ref="form">
          <v-text-field
            v-model="title"
            :rules="inputRules"
            label="제목"
            prepend-icon="mdi-folder"
          />
          <v-menu
            v-model="menu2"
            :close-on-content-click="false"
            :nudge-right="40"
            transition="scale-transition"
            offset-y
            min-width="auto"
          >
            <template v-slot:activator="{on, attrs}">
              <v-text-field
                v-model="due"
                :rules="inputRules" 
                label="날짜"
                prepend-icon="mdi-calendar"
                readonly
                v-bind="attrs"
                v-on="on"
              />
            </template>
            <v-date-picker v-model="due" @input="menu2 = false" />
          </v-menu>
          <v-textarea v-model="content" :rules="inputRules" label="내용" prepend-icon="mdi-playlist-edit" />
          <v-btn @click="submit" depressed class="success mx-0 mt-3">Add Project</v-btn>
        </v-form>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
// import format from 'date-fns/format'

export default {
  data() {
    return {
      title: '',
      content: '',
      due: '',
      inputRules: [v => v.length >= 8 || '8글자 이상이어야 합니다.'],
    }
  },
  methods: {
    submit() {
      if(this.$refs.form.validate()){
        console.log(this.title, this.content)

      }
    },
  },
  // computed: {
  //   formateedDate() {
  //     return this.due ? format(this.due, 'YYYY/MM/DD') : ''
  //   },
  // },
}
</script>

<style></style>
