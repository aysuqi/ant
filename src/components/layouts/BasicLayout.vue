<template>
  <div>
    <a-layout id="components-layout-demo-side" style="min-height: 100vh">
      <a-layout-sider :trigger="null" collapsible v-model="collapsed">
        <div class="logo" />
        <sider-menu></sider-menu>
      </a-layout-sider>
      <a-layout>
        <a-layout-header style="background: #fff; padding: 0">
          <a-icon
            class="trigger"
            :type="collapsed ? 'menu-unfold' : 'menu-fold'"
            @click="() => (collapsed = !collapsed)"
          />
          <Head></Head>
        </a-layout-header>
        <a-layout-content style="margin: 0 16px">
          <router-view></router-view>
        </a-layout-content>
        <a-layout-footer style="text-align: center">
          <Foot></Foot>
        </a-layout-footer>
      </a-layout>
    </a-layout>
  </div>
</template>

<script>
import Head from "./Head";
import Foot from "./Foot";
import SiderMenu from "./SideMenu";

export default {
  components: {
    Head,
    Foot,
    SiderMenu
  },
  data() {
    return {
      collapsed: false
    };
  }
};
</script>

<style>
#components-layout-demo-side .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}
.trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

.trigger:hover {
  color: #1890ff;
}
</style>
