<template>
  <nav>
    <v-snackbar v-model="snackbar" :timeout="4000" top color="primary">
      <span>프로젝트가 성공적으로 추가 되었습니다.</span>
      <v-btn class="ml-5" @click="snackbar=false">닫기</v-btn>
    </v-snackbar>
    <v-app-bar flat app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-app-bar-title>
        <!-- <span class="font-weight-light">Projects</span> -->
        <div class="headline pr-8">
          <router-link to="/" style="color:black; text-decoration:none;">PROJECTS</router-link>
        </div>
      </v-app-bar-title>
      <v-spacer />

      <!--dropdown menu-->
      <div class="text-center">
        <v-menu offset-y>
          <template v-slot:activator="{on, attrs}">
            <v-btn dark v-bind="attrs" v-on="on">
              <h4>메뉴</h4>
            </v-btn>
          </template>
          <v-list>
            <v-list-item v-for="link in links" :key="link.text" router :to="link.route">
              <v-list-item-title>{{ link.text }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>

      <v-btn depressed>
        <span>로그아웃</span>
        <v-icon right>mdi-format-horizontal-align-right</v-icon>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" app color="info">
      <v-layout column align-center>
        <v-flex class="mt-8">
          <v-avatar size="100">
            <img src="@/assets/images/avatar-01.png" alt="" />
          </v-avatar>
          <p class="white--text subheading mt-3 text-center">
            Mr. Kim
          </p>
        </v-flex>
        <v-flex class="mt-2 mb-4">
          <Popup @projectAdded="snackbar=true" />
        </v-flex>
      </v-layout>
      <v-list>
        <v-list-item v-for="link in links" :key="link.text" router :to="link.route">
          <v-list-item-icon>
            <v-icon class="white--text">{{ link.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title class="white--text">
              {{ link.text }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
import Popup from './Popup'

export default {
  components: {Popup},
  data() {
    return {
      drawer: true,
      snackbar: false,
      links: [
        {icon: 'mdi-view-dashboard', text: 'Home', route: '/'},
        {icon: 'mdi-webpack ', text: 'Projects', route: '/projects'},
        {icon: 'mdi-semantic-web ', text: 'Members', route: '/introduce'},
      ],
    }
  },
}
</script>

<style></style>
