<template>
  <div class="introduce">
    <h1 class="subheading grey--text ml-6 mt-4">Members</h1>
    <v-container class="my-5">
      <v-layout row wrap>
        <v-flex xs12 sm6 md4 lg3 v-for="person in team" :key="person.name">
          <v-card flat class="text-center ma-3" style="background:#f5f5f5;">
            <v-responsive class="pt-4">
              <v-avatar size="85" class="grey lighten-2">
                <img :src="person.avatar" />
              </v-avatar>
            </v-responsive>
            <v-card-text>
              <div class="subheading black--text">{{ person.name }}</div>
              <div class="grey--text">{{ person.role }}</div>
            </v-card-text>
            <v-card-actions>
              <v-btn depressed class="grey--text">
                <v-icon small>mdi-message</v-icon>
                <span>메시지</span>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      team: [
        {
          name: 'Mr. Kim',
          role: 'Web designer',
          avatar: require('@/assets/images/avatar-01.png'),
        },
        {
          name: 'Mr. Choe',
          role: 'Data analytics',
          avatar: require('@/assets/images/avatar-02.png'),
        },
        {
          name: 'Ms. choe',
          role: 'Graphic designer',
          avatar: require('@/assets/images/avatar-03.png'),
        },
        {
          name: 'Min ho',
          role: 'Product manager',
          avatar: require('@/assets/images/avatar-04.png'),
        },
        {
          name: 'Terry',
          role: 'Marketing sales',
          avatar: require('@/assets/images/avatar-05.png'),
        },
      ],
    }
  },
}
</script>
