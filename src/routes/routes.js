import Access from "@/pages/Layout/LoginLayout.vue";

import Login from "@/components/views/LoginView.vue";

const routes = [
    {
        path: "/",
        component: Access,
        redirect: "/login",
        children: [
            {
                path: "login",
                name: "Login",
                component: Login,
            },
        ]
    },
]

export default routes;