import React, { lazy } from "react";

export default [
    {
        path: "/home",
        name: "Home",
        exact: false,
        component: lazy(() => import("../pages/Home" /* webpackChunkName: "home"*/))
    },
    {
        path: "/about",
        name: "About",
        exact: true,
        component: lazy(() => import("../pages/About"  /* webpackChunkName: "about"*/))
    },
    {
        path: "/mycomponent",
        name: "My COmponent",
        exact: true,
        component: () => <h2>My componet</h2>
    },
];