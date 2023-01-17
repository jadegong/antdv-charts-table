import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import Antd from 'ant-design-vue';

import routes from './router'
import App from './App.vue'
import AntdvChartsTable from '../packages';

import 'ant-design-vue/dist/antd.css';

const app = createApp(App)

// 创建路由实例，并传递配置
const router = createRouter({
    history: createWebHistory(),
    routes,
});

app.use(router)

app.use(Antd);
app.use(AntdvChartsTable);

app.mount('#app')
