(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/page.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/store.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function Home() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            const session = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSession"])();
            router.replace(session ? "/dashboard" : "/login");
        }
    }["Home.useEffect"], [
        router
    ]);
    return null;
}
_s(Home, "vQduR7x+OPXj6PSmJyFnf+hU7bg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = Home;
var _c;
__turbopack_context__.k.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/store.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getCourts",
    ()=>getCourts,
    "getDuration",
    ()=>getDuration,
    "getQueues",
    ()=>getQueues,
    "getSession",
    ()=>getSession,
    "logout",
    ()=>logout,
    "saveCourts",
    ()=>saveCourts,
    "saveDuration",
    ()=>saveDuration,
    "saveQueues",
    ()=>saveQueues,
    "setSession",
    ()=>setSession
]);
// Session, courts, and queue state live in localStorage (single-device demo).
// Registered players and their skill level live in Supabase (see lib/players.js).
const SESSION_KEY = "courtapp_session";
const COURTS_KEY = "courtapp_courts_v2";
const QUEUES_KEY = "courtapp_queues_v2";
const DURATION_KEY = "courtapp_duration";
function read(key, fallback) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    try {
        const raw = window.localStorage.getItem(key);
        return raw ? JSON.parse(raw) : fallback;
    } catch  {
        return fallback;
    }
}
function write(key, value) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    window.localStorage.setItem(key, JSON.stringify(value));
}
function getSession() {
    return read(SESSION_KEY, null);
}
function setSession(session) {
    write(SESSION_KEY, session);
}
function logout() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    window.localStorage.removeItem(SESSION_KEY);
}
// ---------- Courts ----------
// Each court: { id, name, players: [names], queueLabel, endsAt, running }
const DEFAULT_COURTS = [
    {
        id: 1,
        name: "Court 1",
        players: [],
        queueLabel: null,
        endsAt: null,
        running: false
    },
    {
        id: 2,
        name: "Court 2",
        players: [],
        queueLabel: null,
        endsAt: null,
        running: false
    },
    {
        id: 3,
        name: "Court 3",
        players: [],
        queueLabel: null,
        endsAt: null,
        running: false
    }
];
function getCourts() {
    return read(COURTS_KEY, DEFAULT_COURTS);
}
function saveCourts(courts) {
    write(COURTS_KEY, courts);
}
function getQueues() {
    return read(QUEUES_KEY, []);
}
function saveQueues(queues) {
    write(QUEUES_KEY, queues);
}
function getDuration() {
    return read(DURATION_KEY, 20);
}
function saveDuration(minutes) {
    write(DURATION_KEY, minutes);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/node_modules/next/navigation.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/navigation.js [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=_11zuzbj._.js.map