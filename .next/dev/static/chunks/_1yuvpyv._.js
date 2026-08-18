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
    "getAppState",
    ()=>getAppState,
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
    ()=>setSession,
    "subscribeToAppState",
    ()=>subscribeToAppState
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/supabaseClient.js [app-client] (ecmascript)");
// Session, courts, and queue state live in localStorage (single-device demo).
// Registered players and their skill level live in Supabase (see lib/players.js).
const SESSION_KEY = "pickleball_session";
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
;
const STATE_ROW_ID = 1;
async function getAppState() {
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from("app_state").select("courts, queues, duration").eq("id", STATE_ROW_ID).single();
    if (error) throw new Error(error.message);
    return data;
}
async function saveCourts(courts) {
    const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from("app_state").update({
        courts,
        updated_at: new Date().toISOString()
    }).eq("id", STATE_ROW_ID);
    if (error) throw new Error(error.message);
}
async function saveQueues(queues) {
    const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from("app_state").update({
        queues,
        updated_at: new Date().toISOString()
    }).eq("id", STATE_ROW_ID);
    if (error) throw new Error(error.message);
}
async function saveDuration(duration) {
    const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from("app_state").update({
        duration,
        updated_at: new Date().toISOString()
    }).eq("id", STATE_ROW_ID);
    if (error) throw new Error(error.message);
}
function subscribeToAppState(onChange) {
    const channel = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].channel("app_state_changes").on("postgres_changes", {
        event: "UPDATE",
        schema: "public",
        table: "app_state",
        filter: `id=eq.${STATE_ROW_ID}`
    }, (payload)=>onChange(payload.new)).subscribe();
    return ()=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].removeChannel(channel);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/supabaseClient.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "supabase",
    ()=>supabase
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@supabase/supabase-js/dist/index.mjs [app-client] (ecmascript) <locals>");
;
const supabaseUrl = ("TURBOPACK compile-time value", "https://dbahximqmrdyvuynrmul.supabase.co");
const supabaseAnonKey = ("TURBOPACK compile-time value", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRiYWh4aW1xbXJkeXZ1eW5ybXVsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODcwMjE3NjEsImV4cCI6MjEwMjU5Nzc2MX0.beAX8gQSL9ftsI8PJaDd61C4yvnMdtoIuv5kWooISVQ");
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createClient"])(supabaseUrl || "https://placeholder.supabase.co", supabaseAnonKey || "placeholder-anon-key");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_1yuvpyv._.js.map