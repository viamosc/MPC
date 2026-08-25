(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/dashboard/page.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DashboardPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/store.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$players$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/players.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$requests$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/requests.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tiers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/tiers.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$formatName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/formatName.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CourtCard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/CourtCard.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$QueueBoard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/QueueBoard.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$PresentPanel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/PresentPanel.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$RequestsPanel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/RequestsPanel.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$PlayerPanel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/PlayerPanel.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$TeamManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/TeamManager.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/cache.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/supabaseClient.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$EditProfileModal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/EditProfileModal.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$SuspendedPanel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/SuspendedPanel.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
let nextQueueId = 1;
function newQueueId() {
    return `q${Date.now()}_${nextQueueId++}`;
}
function DashboardPage() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [session, setSessionState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [courts, setCourts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [queues, setQueues] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [duration, setDuration] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(20);
    const [requests, setRequests] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]); // admin: all pending requests
    const [myRequest, setMyRequest] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null); // player: own pending request, or null
    const [players, setPlayers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loadingPlayers, setLoadingPlayers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [ready, setReady] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [playersError, setPlayersError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [sidebarOpen, setSidebarOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [autoPlayIn, setAutoPlayIn] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [autoDuration, setAutoDuration] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [editingProfile, setEditingProfile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const activeCourts = courts.filter((c)=>c.active !== false);
    const courtsEmpty = courts.every((c)=>!c.running && (c.players || []).length === 0);
    const canPlay = courtsEmpty && queues.length >= activeCourts.length && queues[0]?.players.length === 4 && queues[1]?.players.length === 4 && queues[2]?.players.length === 4;
    const refreshPlayers = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "DashboardPage.useCallback[refreshPlayers]": async ()=>{
            setLoadingPlayers(true);
            try {
                const data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$players$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAllPlayers"])();
                setPlayers(data);
                setPlayersError("");
            } catch (err) {
                setPlayersError(err.message);
            }
            setLoadingPlayers(false);
        }
    }["DashboardPage.useCallback[refreshPlayers]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DashboardPage.useEffect": ()=>{
            const s = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSession"])();
            if (!s) {
                router.replace("/login");
                return;
            }
            setSessionState(s);
            refreshPlayers();
            const unsubscribePlayers = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$players$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["subscribeToPlayers"])(refreshPlayers);
            ({
                "DashboardPage.useEffect": async ()=>{
                    try {
                        const state = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAppState"])();
                        setCourts(state.courts || []);
                        setQueues(state.queues || []);
                        setDuration(state.duration ?? 20);
                    } catch (err) {
                        setPlayersError(err.message);
                    }
                    setReady(true);
                }
            })["DashboardPage.useEffect"]();
            const unsubscribe = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["subscribeToAppState"])({
                "DashboardPage.useEffect.unsubscribe": (newState)=>{
                    if (newState.courts) setCourts(newState.courts);
                    if (newState.queues) setQueues(newState.queues);
                    if (newState.duration != null) setDuration(newState.duration);
                }
            }["DashboardPage.useEffect.unsubscribe"]);
            return ({
                "DashboardPage.useEffect": ()=>{
                    unsubscribe();
                    unsubscribePlayers();
                }
            })["DashboardPage.useEffect"];
        }
    }["DashboardPage.useEffect"], [
        router,
        refreshPlayers
    ]);
    // Live-updates player rows (present/absent, team assignment, etc.) so
    // changes made by the admin — including direct toggles that don't go
    // through the request flow — show up on every device without a refresh.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DashboardPage.useEffect": ()=>{
            if (!session) return;
            const channel = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].channel("players_changes").on("postgres_changes", {
                event: "*",
                schema: "public",
                table: "players"
            }, {
                "DashboardPage.useEffect.channel": ()=>refreshPlayers()
            }["DashboardPage.useEffect.channel"]).subscribe();
            return ({
                "DashboardPage.useEffect": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].removeChannel(channel)
            })["DashboardPage.useEffect"];
        }
    }["DashboardPage.useEffect"], [
        session,
        refreshPlayers
    ]);
    function playBuzzer() {
        const audio = new Audio("/sounds/alarm.mp3");
        audio.volume = 0.8;
        audio.play().then(()=>{
            setTimeout(()=>{
                audio.pause();
                audio.currentTime = 0;
            }, 10000); // 10,000 ms = 10 seconds
        }).catch(()=>{});
    }
    function persistQueues(next) {
        setQueues(next);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["saveQueues"])(next).catch((err)=>setPlayersError(err.message));
    }
    function persistCourts(next) {
        setCourts(next);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["saveCourts"])(next).catch((err)=>setPlayersError(err.message));
    }
    function handleToggleCourtActive(courtId) {
        const nextCourts = courts.map((c)=>c.id === courtId ? {
                ...c,
                active: c.active === false ? true : false
            } : c);
        persistCourts(nextCourts);
    }
    function getAvailable(playersList, queuesList, courtsList) {
        const queuedIds = new Set(queuesList.flatMap((q)=>(q.players || []).filter(Boolean).map((p)=>p.id)));
        const onCourtIds = new Set(courtsList.flatMap((c)=>(c.players || []).filter(Boolean).map((p)=>p.id)));
        return playersList.filter((p)=>p.present && !queuedIds.has(p.id) && !onCourtIds.has(p.id));
    }
    async function handleToggleSuspendPlayer(player, suspended) {
        // Optimistically update local state
        const updatedPlayers = players.map((p)=>p.id === player.id ? {
                ...p,
                suspended,
                present: suspended ? false : p.present
            } : p);
        setPlayers(updatedPlayers);
        // If suspended, remove player from queues immediately
        if (suspended) {
            const next = queues.map((q)=>({
                    ...q,
                    players: q.players.filter((p)=>p.id !== player.id)
                }));
            persistQueues(next);
        }
        try {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$players$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setPlayerSuspended"])(player.id, suspended);
            if (suspended) {
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$players$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setPlayerPresent"])(player.id, false);
            }
        } catch (err) {
            setPlayersError(err.message);
        }
    }
    async function handleTogglePresent(player) {
        const nextPresent = !player.present;
        const updatedPlayers = players.map((p)=>p.id === player.id ? {
                ...p,
                present: nextPresent
            } : p);
        setPlayers(updatedPlayers);
        try {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$players$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setPlayerPresent"])(player.id, nextPresent);
        } catch (err) {
            setPlayersError(err.message);
        }
        if (!nextPresent) {
            const next = queues.map((q)=>({
                    ...q,
                    players: q.players.filter((p)=>p.id !== player.id)
                }));
            persistQueues(next);
        }
    }
    async function handleMarkAllAbsent() {
        const confirmed = window.confirm("Are you sure you want to mark ALL present players as absent?");
        if (!confirmed) return;
        const presentPlayers = players.filter((p)=>p.present);
        if (presentPlayers.length === 0) return;
        // Optimistically set all players as absent locally
        const updatedPlayers = players.map((p)=>({
                ...p,
                present: false
            }));
        setPlayers(updatedPlayers);
        // Clear queues
        persistQueues([]);
        // Update backend
        try {
            await Promise.all(presentPlayers.map((p)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$players$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setPlayerPresent"])(p.id, false)));
        } catch (err) {
            setPlayersError(err.message);
        }
    }
    function handleQueuePlayer(player) {
        const next = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tiers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assignPresentPlayer"])(player, queues, players, newQueueId);
        persistQueues(next);
    }
    function handleQueueTeam(teamId) {
        const teammates = players.filter((p)=>p.team_id === teamId && p.present);
        if (teammates.length === 0) return;
        const teamIds = new Set(teammates.map((p)=>p.id));
        const cleared = queues.map((q)=>({
                ...q,
                players: q.players.filter((p)=>!teamIds.has(p.id))
            }));
        persistQueues([
            ...cleared,
            {
                id: newQueueId(),
                players: teammates
            }
        ]);
    }
    function isPlayerQueuedOrPlaying(playerId) {
        const onCourt = courts.some((c)=>(c.players || []).some((p)=>p.id === playerId));
        const inQueue = queues.some((q)=>(q.players || []).some((p)=>p.id === playerId));
        return onCourt || inQueue;
    }
    function handleRequestPresent(player) {
        setMyRequest({
            id: "pending",
            player_id: player.id,
            player_name: player.name,
            type: "presence",
            team_id: null,
            created_at: new Date().toISOString()
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$requests$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createPresenceRequest"])(player.id, player.name).catch((err)=>{
            setPlayersError(err.message);
            setMyRequest(null);
        });
    }
    function handleRequestCreateTeam(player, teamName) {
        const chosenName = teamName?.trim() || "Team";
        setMyRequest({
            id: "pending",
            player_id: player.id,
            player_name: player.name,
            type: "team_create",
            team_id: chosenName,
            created_at: new Date().toISOString()
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$requests$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createTeamCreateRequest"])(player.id, player.name, chosenName).catch((err)=>{
            setPlayersError(err.message);
            setMyRequest(null);
        });
    }
    function handleRequestJoinTeam(player, teamId) {
        setMyRequest({
            id: "pending",
            player_id: player.id,
            player_name: player.name,
            type: "team_join",
            team_id: teamId,
            created_at: new Date().toISOString()
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$requests$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createTeamJoinRequest"])(player.id, player.name, teamId).catch((err)=>{
            setPlayersError(err.message);
            setMyRequest(null);
        });
    }
    function handleCancelRequest(player) {
        setMyRequest(null);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$requests$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cancelRequest"])(player.id).catch((err)=>setPlayersError(err.message));
    }
    // Approving any request type (presence, team create, team join) marks the
    // player present and auto-queues them — but only if they aren't already
    // queued/playing, to avoid placing them into a second queue.
    function handleApproveRequest(request) {
        setRequests((prev)=>prev.filter((r)=>r.id !== request.id));
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$requests$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveRequest"])(request.id).catch((err)=>setPlayersError(err.message));
        const player = players.find((p)=>p.id === request.player_id);
        if (!player) return;
        let updatedPlayer = {
            ...player,
            present: true
        };
        if (request.type === "team_create") {
            const chosenLabel = request.team_id || "Team";
            updatedPlayer.team_id = chosenLabel;
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$players$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setPlayerTeam"])(player.id, chosenLabel).catch((err)=>setPlayersError(err.message));
        } else if (request.type === "team_join") {
            updatedPlayer.team_id = request.team_id;
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$players$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setPlayerTeam"])(player.id, request.team_id).catch((err)=>setPlayersError(err.message));
        }
        const updatedPlayers = players.map((p)=>p.id === player.id ? updatedPlayer : p);
        setPlayers(updatedPlayers);
        if (!player.present) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$players$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setPlayerPresent"])(player.id, true).catch((err)=>setPlayersError(err.message));
        }
        if (!isPlayerQueuedOrPlaying(player.id) && request.type !== "team_create" && request.type !== "team_join") {
            const next = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tiers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assignPresentPlayer"])(updatedPlayer, queues, updatedPlayers, newQueueId);
            persistQueues(next);
        }
    }
    function handleDenyRequest(requestId) {
        setRequests((prev)=>prev.filter((r)=>r.id !== requestId));
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$requests$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveRequest"])(requestId).catch((err)=>setPlayersError(err.message));
    }
    async function handleSetPlayerTeam(playerId, teamId) {
        setPlayers((prev)=>prev.map((p)=>p.id === playerId ? {
                    ...p,
                    team_id: teamId || null
                } : p));
        try {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$players$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setPlayerTeam"])(playerId, teamId);
        } catch (err) {
            setPlayersError(err.message);
        }
    }
    function handleDeleteTeam(teamId, members) {
        const memberIds = new Set(members.map((m)=>m.id));
        setPlayers((prev)=>prev.map((p)=>memberIds.has(p.id) ? {
                    ...p,
                    team_id: null
                } : p));
        for (const m of members){
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$players$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setPlayerTeam"])(m.id, "").catch((err)=>setPlayersError(err.message));
        }
    }
    function handleAddPlayerToTeam(teamId, playerId) {
        handleSetPlayerTeam(playerId, teamId);
    }
    function handleRemovePlayerFromTeam(playerId) {
        handleSetPlayerTeam(playerId, "");
    }
    function handleLeaveTeamSelf(player) {
        handleSetPlayerTeam(player.id, "");
    }
    function handleRemovePlayerFromQueue(queueId, playerId) {
        const next = queues.map((q)=>q.id === queueId ? {
                ...q,
                players: q.players.filter((p)=>p.id !== playerId)
            } : q);
        persistQueues(next);
    }
    function handleAddPlayerToQueue(queueId, player) {
        const next = queues.map((q)=>q.id === queueId && q.players.length < 4 ? {
                ...q,
                players: [
                    ...q.players,
                    player
                ]
            } : q);
        persistQueues(next);
    }
    function handleDeleteQueue(queueId) {
        persistQueues(queues.filter((q)=>q.id !== queueId));
    }
    function handleAddQueue() {
        persistQueues([
            ...queues,
            {
                id: newQueueId(),
                players: []
            }
        ]);
    }
    function handlePlay() {
        const activeList = courts.filter((c)=>c.active !== false);
        if (activeList.length === 0 || queues.length < activeList.length) return;
        const queuesToPlay = queues.slice(0, activeList.length);
        const isEveryQueueFull = queuesToPlay.every((q)=>q.players.length === 4);
        if (!isEveryQueueFull) return;
        const endsAt = Date.now() + duration * 60 * 1000;
        let activeIndex = 0;
        const nextCourts = courts.map((court)=>{
            if (court.active === false) return court;
            const q = queuesToPlay[activeIndex];
            activeIndex++;
            return {
                ...court,
                players: q.players.map((p)=>({
                        id: p.id,
                        name: p.name
                    })),
                queueLabel: `Queue ${activeIndex}`,
                endsAt,
                running: true
            };
        });
        persistCourts(nextCourts);
        persistQueues(queues.slice(activeList.length));
    }
    function handleMatchFinished() {
        const playingCourts = courts.filter((c)=>c.players.length > 0);
        if (playingCourts.length === 0) return;
        const nextCourts = courts.map((c)=>c.players.length > 0 ? {
                ...c,
                players: [],
                queueLabel: null,
                endsAt: null,
                running: false
            } : c);
        persistCourts(nextCourts);
        let next = queues;
        for (const court of playingCourts){
            for (const freed of court.players){
                const fullPlayer = players.find((p)=>p.id === freed.id);
                if (fullPlayer && fullPlayer.present) {
                    next = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tiers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assignPresentPlayer"])(fullPlayer, next, players, newQueueId);
                }
            }
        }
        persistQueues(next);
    }
    function handleDurationChange(minutes, manual = true) {
        if (manual) setAutoDuration(false);
        setDuration(minutes);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["saveDuration"])(minutes).catch((err)=>setPlayersError(err.message));
    }
    // Counts full (4-player) courts and full (4-player) queues — i.e. complete
    // teams currently playing or waiting to play. Partially-filled queues
    // don't count.
    function countFullTeams(courtsList, queuesList) {
        const courtTeams = courtsList.filter((c)=>(c.players || []).length === 4).length;
        const queueTeams = queuesList.filter((q)=>(q.players || []).length === 4).length;
        return courtTeams + queueTeams;
    }
    function handleLogout() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logout"])();
        router.replace("/login");
    }
    const isAdmin = session?.role === "admin";
    const currentPlayer = session ? players.find((p)=>p.id === session.id) : null;
    const showSidebar = isAdmin && sidebarOpen || !isAdmin && !!currentPlayer;
    const currentPlayerId = currentPlayer?.id ?? null;
    // Requests are scoped per-role: admin subscribes to every pending request,
    // a player only ever fetches/subscribes to their own single row so other
    // players' requests never reach their client.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DashboardPage.useEffect": ()=>{
            if (!session) return;
            if (isAdmin) {
                let cancelled = false;
                const refresh = {
                    "DashboardPage.useEffect.refresh": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$requests$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAllRequests"])().then({
                            "DashboardPage.useEffect.refresh": (data)=>{
                                if (!cancelled) setRequests(data);
                            }
                        }["DashboardPage.useEffect.refresh"]).catch({
                            "DashboardPage.useEffect.refresh": (err)=>setPlayersError(err.message)
                        }["DashboardPage.useEffect.refresh"])
                }["DashboardPage.useEffect.refresh"];
                refresh();
                const unsubscribe = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$requests$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["subscribeToAllRequests"])(refresh);
                return ({
                    "DashboardPage.useEffect": ()=>{
                        cancelled = true;
                        unsubscribe();
                    }
                })["DashboardPage.useEffect"];
            }
            if (currentPlayerId) {
                let cancelled = false;
                const refresh = {
                    "DashboardPage.useEffect.refresh": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$requests$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getOwnRequest"])(currentPlayerId).then({
                            "DashboardPage.useEffect.refresh": (data)=>{
                                if (!cancelled) setMyRequest(data);
                            }
                        }["DashboardPage.useEffect.refresh"]).catch({
                            "DashboardPage.useEffect.refresh": (err)=>setPlayersError(err.message)
                        }["DashboardPage.useEffect.refresh"])
                }["DashboardPage.useEffect.refresh"];
                refresh();
                const unsubscribe = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$requests$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["subscribeToOwnRequest"])(currentPlayerId, {
                    "DashboardPage.useEffect.unsubscribe": ()=>{
                        refresh();
                        refreshPlayers();
                    }
                }["DashboardPage.useEffect.unsubscribe"]);
                return ({
                    "DashboardPage.useEffect": ()=>{
                        cancelled = true;
                        unsubscribe();
                    }
                })["DashboardPage.useEffect"];
            }
        }
    }["DashboardPage.useEffect"], [
        session,
        isAdmin,
        currentPlayerId,
        refreshPlayers
    ]);
    // Auto match length: 6 full teams (courts + queues combined) -> 20m,
    // 7+ -> 15m. Only applies while autoDuration is on; a manual change via
    // handleDurationChange turns it off so the admin's choice sticks.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DashboardPage.useEffect": ()=>{
            if (!isAdmin || !autoDuration) return;
            const totalTeams = countFullTeams(courts, queues);
            const target = totalTeams >= 7 ? 15 : 20;
            if (target !== duration) {
                handleDurationChange(target, false);
            }
        }
    }["DashboardPage.useEffect"], [
        isAdmin,
        autoDuration,
        courts,
        queues
    ]);
    // Auto "Match finished": once a running court's timer (endsAt) has
    // passed, trigger the same logic the button does. Button stays visible.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DashboardPage.useEffect": ()=>{
            if (!isAdmin) return;
            const interval = setInterval({
                "DashboardPage.useEffect.interval": ()=>{
                    const expired = courts.some({
                        "DashboardPage.useEffect.interval.expired": (c)=>c.running && c.endsAt && Date.now() >= c.endsAt
                    }["DashboardPage.useEffect.interval.expired"]);
                    if (expired) {
                        playBuzzer();
                        handleMatchFinished();
                    }
                }
            }["DashboardPage.useEffect.interval"], 1000);
            return ({
                "DashboardPage.useEffect": ()=>clearInterval(interval)
            })["DashboardPage.useEffect"];
        }
    }["DashboardPage.useEffect"], [
        isAdmin,
        courts,
        queues,
        players
    ]);
    // Auto "Play": once queues 1-3 are full (canPlay), wait 1 minute then
    // trigger the same logic the button does, unless it stops being ready
    // before the minute is up. Button stays visible.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DashboardPage.useEffect": ()=>{
            if (!isAdmin || !canPlay || !courtsEmpty) {
                setAutoPlayIn(null);
                return;
            }
            const target = Date.now() + 60 * 1000;
            setAutoPlayIn(60);
            const tick = setInterval({
                "DashboardPage.useEffect.tick": ()=>{
                    const secsLeft = Math.max(0, Math.ceil((target - Date.now()) / 1000));
                    setAutoPlayIn(secsLeft);
                }
            }["DashboardPage.useEffect.tick"], 1000);
            const timeout = setTimeout({
                "DashboardPage.useEffect.timeout": ()=>{
                    handlePlay();
                }
            }["DashboardPage.useEffect.timeout"], 60 * 1000);
            return ({
                "DashboardPage.useEffect": ()=>{
                    clearInterval(tick);
                    clearTimeout(timeout);
                }
            })["DashboardPage.useEffect"];
        }
    }["DashboardPage.useEffect"], [
        isAdmin,
        canPlay,
        courtsEmpty,
        queues,
        courts,
        duration
    ]);
    if (!ready) return null;
    const available = getAvailable(players, queues, courts);
    const statusMap = {};
    for (const c of courts){
        for (const p of c.players || []){
            if (p) statusMap[p.id] = "playing";
        }
    }
    for (const q of queues){
        for (const p of q.players || []){
            if (p && !statusMap[p.id]) statusMap[p.id] = "queued";
        }
    }
    const nextToPlayIds = new Set(queues.slice(0, 3).flatMap((q)=>(q.players || []).filter(Boolean).map((p)=>p.id)));
    const myStatus = session ? statusMap[session.id] === "playing" ? "playing" : nextToPlayIds.has(session.id) ? "next" : null : null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "min-h-screen bg-[var(--background)]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "border-b border-[var(--border)] bg-[var(--surface)]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-6xl mx-auto px-4 py-4 flex items-center justify-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "w-3 h-3 rounded-full bg-[var(--yellow)]"
                                }, void 0, false, {
                                    fileName: "[project]/app/dashboard/page.js",
                                    lineNumber: 631,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "font-semibold tracking-tight",
                                    children: "Miagao Pickleball Club"
                                }, void 0, false, {
                                    fileName: "[project]/app/dashboard/page.js",
                                    lineNumber: 632,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/dashboard/page.js",
                            lineNumber: 630,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setEditingProfile(true),
                                    className: "text-sm text-gray-500 hover:text-[var(--blue)] font-medium transition-colors",
                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$formatName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatPlayerName"])(session?.name)
                                }, void 0, false, {
                                    fileName: "[project]/app/dashboard/page.js",
                                    lineNumber: 635,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handleLogout,
                                    className: "text-sm text-[var(--blue)] font-medium",
                                    children: "Log out"
                                }, void 0, false, {
                                    fileName: "[project]/app/dashboard/page.js",
                                    lineNumber: 641,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/dashboard/page.js",
                            lineNumber: 634,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/dashboard/page.js",
                    lineNumber: 629,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/dashboard/page.js",
                lineNumber: 628,
                columnNumber: 7
            }, this),
            myStatus === "playing" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-green-600 text-white text-sm font-medium text-center py-2 px-4",
                children: [
                    "You're currently playing, ",
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$formatName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatPlayerName"])(session?.name)
                ]
            }, void 0, true, {
                fileName: "[project]/app/dashboard/page.js",
                lineNumber: 649,
                columnNumber: 9
            }, this),
            myStatus === "next" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-red-600 text-white text-sm font-medium text-center py-2 px-4",
                children: [
                    "You're next to play, ",
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$formatName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatPlayerName"])(session?.name)
                ]
            }, void 0, true, {
                fileName: "[project]/app/dashboard/page.js",
                lineNumber: 654,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `max-w-6xl mx-auto px-4 py-8 grid grid-cols-1 gap-8 ${showSidebar ? "lg:grid-cols-[1fr_280px]" : "lg:grid-cols-1"}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between mb-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "text-sm font-medium text-gray-500 uppercase tracking-wide",
                                                children: "Courts"
                                            }, void 0, false, {
                                                fileName: "[project]/app/dashboard/page.js",
                                                lineNumber: 667,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-3",
                                                children: [
                                                    isAdmin && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: handleMatchFinished,
                                                        disabled: !courts.some((c)=>c.players.length > 0),
                                                        className: "text-sm text-[var(--blue)] font-medium disabled:opacity-40 disabled:cursor-not-allowed",
                                                        children: "Match finished"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/page.js",
                                                        lineNumber: 672,
                                                        columnNumber: 19
                                                    }, this),
                                                    isAdmin && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>setSidebarOpen((o)=>!o),
                                                        className: "text-sm text-gray-400 hover:text-[var(--blue)] font-medium",
                                                        title: sidebarOpen ? "Hide panel" : "Show panel",
                                                        children: sidebarOpen ? "› Hide panel" : "‹ Show panel"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/page.js",
                                                        lineNumber: 681,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/dashboard/page.js",
                                                lineNumber: 670,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/dashboard/page.js",
                                        lineNumber: 666,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-1 sm:grid-cols-3 gap-4",
                                        children: courts.map((court)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CourtCard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                court: court,
                                                isAdmin: isAdmin,
                                                onToggleActive: handleToggleCourtActive
                                            }, court.id, false, {
                                                fileName: "[project]/app/dashboard/page.js",
                                                lineNumber: 693,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/page.js",
                                        lineNumber: 691,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/dashboard/page.js",
                                lineNumber: 665,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                children: [
                                    isAdmin && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-wrap items-center justify-between gap-3 mb-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "text-sm text-gray-500",
                                                        children: "Match length"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/page.js",
                                                        lineNumber: 707,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: `flex items-center rounded-lg border border-[var(--border)] overflow-hidden transition-opacity ${autoDuration ? "opacity-50 pointer-events-none bg-gray-50" : "opacity-100"}`,
                                                        children: [
                                                            [
                                                                15,
                                                                20
                                                            ].map((mins)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    type: "button",
                                                                    onClick: ()=>handleDurationChange(mins, true),
                                                                    className: `px-3 py-1 text-sm font-medium transition-colors ${duration === mins ? "bg-[var(--blue)] text-white" : "bg-white text-gray-600 hover:bg-gray-50"}`,
                                                                    children: [
                                                                        mins,
                                                                        "m"
                                                                    ]
                                                                }, mins, true, {
                                                                    fileName: "[project]/app/dashboard/page.js",
                                                                    lineNumber: 714,
                                                                    columnNumber: 21
                                                                }, this)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "number",
                                                                min: "1",
                                                                value: duration,
                                                                onChange: (e)=>handleDurationChange(Number(e.target.value) || 1, true),
                                                                className: "w-16 px-2 py-1 text-sm border-l border-[var(--border)] bg-transparent text-center focus:outline-none"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/dashboard/page.js",
                                                                lineNumber: 727,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/dashboard/page.js",
                                                        lineNumber: 710,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center p-0.5 rounded-lg border border-[var(--border)] bg-gray-100 text-xs font-medium",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                type: "button",
                                                                onClick: ()=>setAutoDuration(true),
                                                                title: "Auto: 7+ full teams (courts + queues) -> 15m, else 20m",
                                                                className: `px-2.5 py-1 rounded-md transition-all ${autoDuration ? "bg-white text-[var(--blue)] shadow-sm font-semibold" : "text-gray-500 hover:text-gray-800"}`,
                                                                children: "Auto"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/dashboard/page.js",
                                                                lineNumber: 738,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                type: "button",
                                                                onClick: ()=>setAutoDuration(false),
                                                                className: `px-2.5 py-1 rounded-md transition-all ${!autoDuration ? "bg-white text-gray-900 shadow-sm font-semibold" : "text-gray-500 hover:text-gray-800"}`,
                                                                children: "Manual"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/dashboard/page.js",
                                                                lineNumber: 750,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/dashboard/page.js",
                                                        lineNumber: 737,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/dashboard/page.js",
                                                lineNumber: 706,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: handlePlay,
                                                        disabled: !canPlay,
                                                        className: "rounded-lg bg-[var(--blue)] text-white font-medium text-sm px-5 py-2 hover:bg-[var(--blue-dark)] transition-colors disabled:opacity-40 disabled:cursor-not-allowed",
                                                        children: "▶ Play — send queues 1–3 to courts"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/page.js",
                                                        lineNumber: 767,
                                                        columnNumber: 19
                                                    }, this),
                                                    autoPlayIn != null && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-xs text-gray-400",
                                                        children: [
                                                            "Automatically starts in ",
                                                            autoPlayIn,
                                                            "s"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/dashboard/page.js",
                                                        lineNumber: 775,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/dashboard/page.js",
                                                lineNumber: 766,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/dashboard/page.js",
                                        lineNumber: 705,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$QueueBoard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        queues: queues,
                                        availablePlayers: available,
                                        onRemovePlayer: handleRemovePlayerFromQueue,
                                        onAddPlayer: handleAddPlayerToQueue,
                                        onDeleteQueue: handleDeleteQueue,
                                        onAddQueue: handleAddQueue,
                                        readOnly: !isAdmin
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/page.js",
                                        lineNumber: 783,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/dashboard/page.js",
                                lineNumber: 703,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/dashboard/page.js",
                        lineNumber: 664,
                        columnNumber: 9
                    }, this),
                    isAdmin && sidebarOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                        className: "space-y-4",
                        children: [
                            playersError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-red-600 mb-3",
                                children: playersError
                            }, void 0, false, {
                                fileName: "[project]/app/dashboard/page.js",
                                lineNumber: 798,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$RequestsPanel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                requests: requests,
                                onApprove: handleApproveRequest,
                                onDeny: handleDenyRequest
                            }, void 0, false, {
                                fileName: "[project]/app/dashboard/page.js",
                                lineNumber: 801,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$PresentPanel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                players: players,
                                statusMap: statusMap,
                                onTogglePresent: handleTogglePresent,
                                onQueuePlayer: handleQueuePlayer,
                                onMarkAllAbsent: handleMarkAllAbsent,
                                loading: loadingPlayers,
                                onAddPlayerToTeam: handleAddPlayerToTeam,
                                onRemovePlayerFromTeam: handleRemovePlayerFromTeam,
                                onDeleteTeam: handleDeleteTeam,
                                onQueueTeam: handleQueueTeam
                            }, void 0, false, {
                                fileName: "[project]/app/dashboard/page.js",
                                lineNumber: 807,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$SuspendedPanel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                players: players,
                                onToggleSuspend: handleToggleSuspendPlayer,
                                loading: loadingPlayers
                            }, void 0, false, {
                                fileName: "[project]/app/dashboard/page.js",
                                lineNumber: 819,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/dashboard/page.js",
                        lineNumber: 796,
                        columnNumber: 11
                    }, this),
                    !isAdmin && currentPlayer && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                        children: [
                            playersError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-red-600 mb-3",
                                children: playersError
                            }, void 0, false, {
                                fileName: "[project]/app/dashboard/page.js",
                                lineNumber: 830,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$PlayerPanel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                player: currentPlayer,
                                myRequest: myRequest,
                                players: players,
                                onRequestPresent: handleRequestPresent,
                                onCancelRequest: handleCancelRequest,
                                onMarkAbsent: handleTogglePresent,
                                onRequestCreateTeam: handleRequestCreateTeam,
                                onRequestJoinTeam: handleRequestJoinTeam,
                                onLeaveTeam: handleLeaveTeamSelf
                            }, void 0, false, {
                                fileName: "[project]/app/dashboard/page.js",
                                lineNumber: 833,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/dashboard/page.js",
                        lineNumber: 828,
                        columnNumber: 11
                    }, this),
                    editingProfile && currentPlayer && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$EditProfileModal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        player: currentPlayer,
                        onClose: ()=>setEditingProfile(false),
                        onSaved: (updated)=>{
                            setPlayers((prev)=>prev.map((p)=>p.id === updated.id ? updated : p));
                            setSessionState((s)=>({
                                    ...s,
                                    name: updated.name
                                }));
                        }
                    }, void 0, false, {
                        fileName: "[project]/app/dashboard/page.js",
                        lineNumber: 848,
                        columnNumber: 3
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/dashboard/page.js",
                lineNumber: 659,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/dashboard/page.js",
        lineNumber: 627,
        columnNumber: 5
    }, this);
}
_s(DashboardPage, "3hRwBRRv+gwyRhC+ZpVIexnkATc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = DashboardPage;
var _c;
__turbopack_context__.k.register(_c, "DashboardPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/CourtCard.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CourtCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$formatName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/formatName.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function formatTime(ms) {
    if (ms <= 0) return "0:00";
    const totalSeconds = Math.ceil(ms / 1000);
    const m = Math.floor(totalSeconds / 60);
    const s = totalSeconds % 60;
    return `${m}:${String(s).padStart(2, "0")}`;
}
function CourtCard({ court, isAdmin, onToggleActive }) {
    _s();
    const [now, setNow] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(Date.now());
    const isOff = court.active === false;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CourtCard.useEffect": ()=>{
            if (!court.running || isOff) return;
            const interval = setInterval({
                "CourtCard.useEffect.interval": ()=>setNow(Date.now())
            }["CourtCard.useEffect.interval"], 1000);
            return ({
                "CourtCard.useEffect": ()=>clearInterval(interval)
            })["CourtCard.useEffect"];
        }
    }["CourtCard.useEffect"], [
        court.running,
        isOff
    ]);
    const remaining = court.endsAt ? court.endsAt - now : 0;
    const timeUp = court.running && remaining <= 0;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `rounded-xl p-5 border transition-all ${isOff ? "bg-gray-100/70 border-gray-200 opacity-60" : "bg-green-50 border-green-200"}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between mb-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: `font-medium ${isOff ? "text-gray-400" : "text-gray-800"}`,
                                children: court.name
                            }, void 0, false, {
                                fileName: "[project]/components/CourtCard.js",
                                lineNumber: 37,
                                columnNumber: 11
                            }, this),
                            isOff && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[10px] font-semibold uppercase tracking-wider bg-gray-200 text-gray-600 px-1.5 py-0.5 rounded",
                                children: "Off"
                            }, void 0, false, {
                                fileName: "[project]/components/CourtCard.js",
                                lineNumber: 41,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/CourtCard.js",
                        lineNumber: 36,
                        columnNumber: 9
                    }, this),
                    isAdmin && onToggleActive && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>onToggleActive(court.id),
                        className: `text-xs px-2 py-0.5 rounded font-medium border transition-colors ${isOff ? "bg-white text-gray-700 border-gray-300 hover:bg-gray-50" : "bg-red-50 text-red-600 border-red-200 hover:bg-red-100"}`,
                        children: isOff ? "Turn On" : "Turn Off"
                    }, void 0, false, {
                        fileName: "[project]/components/CourtCard.js",
                        lineNumber: 48,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/CourtCard.js",
                lineNumber: 35,
                columnNumber: 7
            }, this),
            isOff ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-sm text-gray-400 italic mb-3",
                children: "Court is disabled"
            }, void 0, false, {
                fileName: "[project]/components/CourtCard.js",
                lineNumber: 62,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    court.running && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `text-sm font-medium mb-3 ${timeUp ? "text-red-600" : "text-[var(--blue)]"}`,
                        children: timeUp ? "Time's up" : formatTime(remaining)
                    }, void 0, false, {
                        fileName: "[project]/components/CourtCard.js",
                        lineNumber: 66,
                        columnNumber: 13
                    }, this),
                    (court.players || []).length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-gray-400 mb-3",
                        children: "Waiting for players."
                    }, void 0, false, {
                        fileName: "[project]/components/CourtCard.js",
                        lineNumber: 76,
                        columnNumber: 13
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        className: "space-y-1.5 mb-3",
                        children: court.players.map((player, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                className: "text-sm rounded-lg border border-[var(--border)] bg-white px-3 py-1.5",
                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$formatName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatPlayerName"])(player?.name ?? player)
                            }, player?.id ?? i, false, {
                                fileName: "[project]/components/CourtCard.js",
                                lineNumber: 80,
                                columnNumber: 17
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/CourtCard.js",
                        lineNumber: 78,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/CourtCard.js",
                lineNumber: 64,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/CourtCard.js",
        lineNumber: 28,
        columnNumber: 5
    }, this);
}
_s(CourtCard, "qIstTaHXAspKZoclBFL0Q8ycoIo=");
_c = CourtCard;
var _c;
__turbopack_context__.k.register(_c, "CourtCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/EditProfileModal.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>EditProfileModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$players$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/players.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tiers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/tiers.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function EditProfileModal({ player, onClose, onSaved }) {
    _s();
    const [form, setForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        name: player.name || "",
        email: player.email || "",
        skill_level: player.skill_level || __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tiers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TIERS"][0],
        password: "",
        confirmPassword: ""
    });
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    function handleChange(e) {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    }
    async function handleSubmit(e) {
        e.preventDefault();
        setError("");
        if (!form.name || !form.email) {
            setError("Name and email are required.");
            return;
        }
        if (form.password && form.password !== form.confirmPassword) {
            setError("Passwords do not match.");
            return;
        }
        setLoading(true);
        const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$players$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updatePlayer"])(player.id, {
            name: form.name,
            email: form.email,
            skill_level: form.skill_level,
            password: form.password || undefined
        });
        setLoading(false);
        if (!result.ok) {
            setError(result.error);
            return;
        }
        onSaved(result.player);
        onClose();
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 bg-black/40 flex items-center justify-center px-4 z-50",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full max-w-sm bg-[var(--surface)] border border-[var(--border)] rounded-xl p-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between mb-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-lg font-medium",
                            children: "Edit profile"
                        }, void 0, false, {
                            fileName: "[project]/components/EditProfileModal.js",
                            lineNumber: 57,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onClose,
                            className: "text-sm text-gray-400 hover:text-gray-600",
                            children: "✕"
                        }, void 0, false, {
                            fileName: "[project]/components/EditProfileModal.js",
                            lineNumber: 58,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/EditProfileModal.js",
                    lineNumber: 56,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    onSubmit: handleSubmit,
                    className: "space-y-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-sm mb-1",
                                    htmlFor: "name",
                                    children: "Name"
                                }, void 0, false, {
                                    fileName: "[project]/components/EditProfileModal.js",
                                    lineNumber: 68,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    id: "name",
                                    name: "name",
                                    type: "text",
                                    value: form.name,
                                    onChange: handleChange,
                                    className: "w-full rounded-lg border border-[var(--border)] px-3 py-2 text-sm"
                                }, void 0, false, {
                                    fileName: "[project]/components/EditProfileModal.js",
                                    lineNumber: 69,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/EditProfileModal.js",
                            lineNumber: 67,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-sm mb-1",
                                    htmlFor: "email",
                                    children: "Email"
                                }, void 0, false, {
                                    fileName: "[project]/components/EditProfileModal.js",
                                    lineNumber: 80,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    id: "email",
                                    name: "email",
                                    type: "email",
                                    value: form.email,
                                    onChange: handleChange,
                                    className: "w-full rounded-lg border border-[var(--border)] px-3 py-2 text-sm"
                                }, void 0, false, {
                                    fileName: "[project]/components/EditProfileModal.js",
                                    lineNumber: 81,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/EditProfileModal.js",
                            lineNumber: 79,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-sm mb-1",
                                    htmlFor: "skill_level",
                                    children: "Skill level"
                                }, void 0, false, {
                                    fileName: "[project]/components/EditProfileModal.js",
                                    lineNumber: 92,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                    id: "skill_level",
                                    name: "skill_level",
                                    value: form.skill_level,
                                    onChange: handleChange,
                                    className: "w-full rounded-lg border border-[var(--border)] px-3 py-2 text-sm bg-white",
                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tiers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TIERS"].map((tier)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: tier,
                                            children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tiers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TIER_LABELS"][tier]
                                        }, tier, false, {
                                            fileName: "[project]/components/EditProfileModal.js",
                                            lineNumber: 101,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/components/EditProfileModal.js",
                                    lineNumber: 93,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/EditProfileModal.js",
                            lineNumber: 91,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-sm mb-1",
                                    htmlFor: "password",
                                    children: [
                                        "New password ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-gray-400",
                                            children: "(leave blank to keep current)"
                                        }, void 0, false, {
                                            fileName: "[project]/components/EditProfileModal.js",
                                            lineNumber: 110,
                                            columnNumber: 28
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/EditProfileModal.js",
                                    lineNumber: 109,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    id: "password",
                                    name: "password",
                                    type: "password",
                                    value: form.password,
                                    onChange: handleChange,
                                    className: "w-full rounded-lg border border-[var(--border)] px-3 py-2 text-sm",
                                    placeholder: "••••••••"
                                }, void 0, false, {
                                    fileName: "[project]/components/EditProfileModal.js",
                                    lineNumber: 112,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/EditProfileModal.js",
                            lineNumber: 108,
                            columnNumber: 11
                        }, this),
                        form.password && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-sm mb-1",
                                    htmlFor: "confirmPassword",
                                    children: "Confirm new password"
                                }, void 0, false, {
                                    fileName: "[project]/components/EditProfileModal.js",
                                    lineNumber: 125,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    id: "confirmPassword",
                                    name: "confirmPassword",
                                    type: "password",
                                    value: form.confirmPassword,
                                    onChange: handleChange,
                                    className: "w-full rounded-lg border border-[var(--border)] px-3 py-2 text-sm",
                                    placeholder: "••••••••"
                                }, void 0, false, {
                                    fileName: "[project]/components/EditProfileModal.js",
                                    lineNumber: 126,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/EditProfileModal.js",
                            lineNumber: 124,
                            columnNumber: 13
                        }, this),
                        error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm text-red-600",
                            children: error
                        }, void 0, false, {
                            fileName: "[project]/components/EditProfileModal.js",
                            lineNumber: 138,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: onClose,
                                    className: "flex-1 rounded-lg bg-gray-100 text-gray-600 py-2 text-sm font-medium hover:bg-gray-200 transition-colors",
                                    children: "Cancel"
                                }, void 0, false, {
                                    fileName: "[project]/components/EditProfileModal.js",
                                    lineNumber: 141,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "submit",
                                    disabled: loading,
                                    className: "flex-1 rounded-lg bg-[var(--blue)] text-white py-2 text-sm font-medium hover:bg-[var(--blue-dark)] transition-colors disabled:opacity-60",
                                    children: loading ? "Saving…" : "Save changes"
                                }, void 0, false, {
                                    fileName: "[project]/components/EditProfileModal.js",
                                    lineNumber: 148,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/EditProfileModal.js",
                            lineNumber: 140,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/EditProfileModal.js",
                    lineNumber: 66,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/EditProfileModal.js",
            lineNumber: 55,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/EditProfileModal.js",
        lineNumber: 54,
        columnNumber: 5
    }, this);
}
_s(EditProfileModal, "NZ/lbOsbO5QoI5Zf27ShOJX3LkI=");
_c = EditProfileModal;
var _c;
__turbopack_context__.k.register(_c, "EditProfileModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/PlayerPanel.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PlayerPanel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tiers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/tiers.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$formatName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/formatName.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function describeRequest(request) {
    if (request.type === "team_create") return "Create a new team";
    if (request.type === "team_join") return `Join ${request.team_id}`;
    return "Present + auto-queue";
}
function PlayerPanel({ player, myRequest, players, onRequestPresent, onCancelRequest, onMarkAbsent, onRequestCreateTeam, onRequestJoinTeam, onLeaveTeam }) {
    _s();
    const [customTeamName, setCustomTeamName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [selectedTeam, setSelectedTeam] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    if (!player) return null;
    const hasPendingRequest = !!myRequest;
    const teamIds = Array.from(new Set(players.filter((p)=>p.team_id && p.team_id !== player.team_id).map((p)=>p.team_id))).sort();
    const teammates = player.team_id ? players.filter((p)=>p.team_id === player.team_id) : [];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-4",
        children: [
            hasPendingRequest && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-[var(--surface)] border border-[var(--border)] rounded-xl p-5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-sm font-medium text-gray-500 uppercase tracking-wide mb-3",
                        children: "Pending request"
                    }, void 0, false, {
                        fileName: "[project]/components/PlayerPanel.js",
                        lineNumber: 48,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-[var(--yellow-dark)] bg-yellow-50 rounded-lg px-3 py-2 mb-3",
                        children: [
                            describeRequest(myRequest),
                            " — waiting for admin approval."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/PlayerPanel.js",
                        lineNumber: 51,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>onCancelRequest(player),
                        className: "w-full text-sm font-medium rounded-lg px-4 py-2 bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors",
                        children: "Cancel request"
                    }, void 0, false, {
                        fileName: "[project]/components/PlayerPanel.js",
                        lineNumber: 54,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/PlayerPanel.js",
                lineNumber: 47,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-[var(--surface)] border border-[var(--border)] rounded-xl p-5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-sm font-medium text-gray-500 uppercase tracking-wide mb-4",
                        children: "My status"
                    }, void 0, false, {
                        fileName: "[project]/components/PlayerPanel.js",
                        lineNumber: 64,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-1.5 mb-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "inline-block text-[11px] font-medium rounded-full px-2 py-0.5 bg-gray-100 text-gray-600",
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tiers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TIER_LABELS"][player.skill_level]
                            }, void 0, false, {
                                fileName: "[project]/components/PlayerPanel.js",
                                lineNumber: 69,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: `inline-block text-[11px] font-medium rounded-full px-2 py-0.5 ${player.present ? "bg-green-600 text-white" : "bg-gray-100 text-gray-500"}`,
                                children: player.present ? "Present" : "Absent"
                            }, void 0, false, {
                                fileName: "[project]/components/PlayerPanel.js",
                                lineNumber: 72,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/PlayerPanel.js",
                        lineNumber: 68,
                        columnNumber: 9
                    }, this),
                    player.present ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>{
                            const confirmed = window.confirm("Are you sure you want to mark yourself as absent?");
                            if (confirmed) {
                                onMarkAbsent(player);
                            }
                        },
                        className: "w-full text-sm font-medium rounded-lg px-4 py-2 bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors",
                        children: "Mark myself absent"
                    }, void 0, false, {
                        fileName: "[project]/components/PlayerPanel.js",
                        lineNumber: 84,
                        columnNumber: 9
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>onRequestPresent(player),
                        disabled: hasPendingRequest,
                        className: "w-full text-sm font-medium rounded-lg px-4 py-2 bg-[var(--blue)] text-white hover:bg-[var(--blue-dark)] transition-colors disabled:opacity-40 disabled:cursor-not-allowed",
                        children: "Request: Present + auto-queue"
                    }, void 0, false, {
                        fileName: "[project]/components/PlayerPanel.js",
                        lineNumber: 98,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/PlayerPanel.js",
                lineNumber: 63,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-[var(--surface)] border border-[var(--border)] rounded-xl p-5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-sm font-medium text-gray-500 uppercase tracking-wide mb-4",
                        children: "Team"
                    }, void 0, false, {
                        fileName: "[project]/components/PlayerPanel.js",
                        lineNumber: 109,
                        columnNumber: 9
                    }, this),
                    player.team_id ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm font-medium",
                                children: player.team_id
                            }, void 0, false, {
                                fileName: "[project]/components/PlayerPanel.js",
                                lineNumber: 115,
                                columnNumber: 13
                            }, this),
                            teammates.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "space-y-1",
                                children: teammates.map((m)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        className: "text-xs text-gray-500",
                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$formatName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatPlayerName"])(m.name)
                                    }, m.id, false, {
                                        fileName: "[project]/components/PlayerPanel.js",
                                        lineNumber: 119,
                                        columnNumber: 19
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/PlayerPanel.js",
                                lineNumber: 117,
                                columnNumber: 15
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-gray-400",
                                children: "No teammates yet."
                            }, void 0, false, {
                                fileName: "[project]/components/PlayerPanel.js",
                                lineNumber: 125,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>onLeaveTeam(player),
                                className: "text-xs text-gray-400 hover:text-red-600",
                                children: "Leave team"
                            }, void 0, false, {
                                fileName: "[project]/components/PlayerPanel.js",
                                lineNumber: 127,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/PlayerPanel.js",
                        lineNumber: 114,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        placeholder: "Team name…",
                                        value: customTeamName,
                                        onChange: (e)=>setCustomTeamName(e.target.value),
                                        disabled: hasPendingRequest,
                                        className: "w-full rounded-lg border border-[var(--border)] px-3 py-2 text-sm disabled:opacity-40"
                                    }, void 0, false, {
                                        fileName: "[project]/components/PlayerPanel.js",
                                        lineNumber: 137,
                                        columnNumber: 3
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>{
                                            if (customTeamName.trim()) {
                                                onRequestCreateTeam(player, customTeamName.trim());
                                                setCustomTeamName("");
                                            }
                                        },
                                        disabled: hasPendingRequest || !customTeamName.trim(),
                                        className: "shrink-0 text-sm font-medium rounded-lg px-4 py-2 bg-[var(--blue)] text-white hover:bg-[var(--blue-dark)] transition-colors disabled:opacity-40 disabled:cursor-not-allowed",
                                        children: "+ Create"
                                    }, void 0, false, {
                                        fileName: "[project]/components/PlayerPanel.js",
                                        lineNumber: 145,
                                        columnNumber: 3
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/PlayerPanel.js",
                                lineNumber: 136,
                                columnNumber: 1
                            }, this),
                            teamIds.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        value: selectedTeam,
                                        onChange: (e)=>setSelectedTeam(e.target.value),
                                        disabled: hasPendingRequest,
                                        className: "flex-1 rounded-lg border border-[var(--border)] px-2 py-1.5 text-sm bg-white disabled:opacity-40",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "",
                                                children: "Choose a team…"
                                            }, void 0, false, {
                                                fileName: "[project]/components/PlayerPanel.js",
                                                lineNumber: 166,
                                                columnNumber: 19
                                            }, this),
                                            teamIds.map((id)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: id,
                                                    children: id
                                                }, id, false, {
                                                    fileName: "[project]/components/PlayerPanel.js",
                                                    lineNumber: 168,
                                                    columnNumber: 21
                                                }, this))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/PlayerPanel.js",
                                        lineNumber: 160,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>{
                                            if (!selectedTeam) return;
                                            onRequestJoinTeam(player, selectedTeam);
                                            setSelectedTeam("");
                                        },
                                        disabled: !selectedTeam || hasPendingRequest,
                                        className: "text-sm font-medium rounded-lg px-3 py-1.5 bg-gray-100 text-gray-600 hover:bg-gray-200 disabled:opacity-40 disabled:cursor-not-allowed transition-colors",
                                        children: "Request to join"
                                    }, void 0, false, {
                                        fileName: "[project]/components/PlayerPanel.js",
                                        lineNumber: 173,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/PlayerPanel.js",
                                lineNumber: 159,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/PlayerPanel.js",
                        lineNumber: 135,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/PlayerPanel.js",
                lineNumber: 108,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/PlayerPanel.js",
        lineNumber: 45,
        columnNumber: 5
    }, this);
}
_s(PlayerPanel, "LXpDNATePhtxNqt53/B2pt9Mx6M=");
_c = PlayerPanel;
var _c;
__turbopack_context__.k.register(_c, "PlayerPanel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/PresentPanel.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PresentPanel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tiers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/tiers.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$formatName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/formatName.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$TeamManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/TeamManager.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const TIER_COLORS = {
    newbie: "bg-gray-100 text-gray-600",
    beginner: "bg-blue-50 text-[var(--blue)]",
    novice: "bg-yellow-50 text-[var(--yellow-dark)]",
    intermediate: "bg-[var(--blue)] text-white",
    executive: "bg-slate-900 text-amber-300"
};
const STATUS_LABELS = {
    playing: "Playing",
    queued: "In queue"
};
const STATUS_STYLES = {
    playing: "bg-[var(--yellow)] text-[var(--blue-dark)]",
    queued: "bg-yellow-100 text-[var(--yellow-dark)]"
};
function PlayerRow({ p, status, onTogglePresent, onQueuePlayer }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
        className: "flex items-center justify-between gap-2 text-sm py-2",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "min-w-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "break-words",
                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$formatName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatPlayerName"])(p.name)
                    }, void 0, false, {
                        fileName: "[project]/components/PresentPanel.js",
                        lineNumber: 30,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-1.5 mt-0.5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: `inline-block text-[11px] font-medium rounded-full px-2 py-0.5 ${TIER_COLORS[p.skill_level] ?? "bg-gray-100 text-gray-600"}`,
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tiers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TIER_LABELS"][p.skill_level]
                            }, void 0, false, {
                                fileName: "[project]/components/PresentPanel.js",
                                lineNumber: 32,
                                columnNumber: 11
                            }, this),
                            status && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: `inline-block text-[11px] font-medium rounded-full px-2 py-0.5 ${STATUS_STYLES[status]}`,
                                children: STATUS_LABELS[status]
                            }, void 0, false, {
                                fileName: "[project]/components/PresentPanel.js",
                                lineNumber: 40,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/PresentPanel.js",
                        lineNumber: 31,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/PresentPanel.js",
                lineNumber: 29,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-1.5 shrink-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>{
                            if (p.present) {
                                const confirmed = window.confirm(`Are you sure you want to mark ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$formatName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatPlayerName"])(p.name)} as absent?`);
                                if (!confirmed) return;
                            }
                            onTogglePresent(p);
                        },
                        className: `text-xs font-medium rounded-full px-3 py-1 transition-colors ${p.present ? "bg-gray-100 text-gray-500 hover:bg-gray-200" : "bg-green-600 text-white hover:bg-green-700"}`,
                        children: p.present ? "Mark as Absent" : "Mark as Present"
                    }, void 0, false, {
                        fileName: "[project]/components/PresentPanel.js",
                        lineNumber: 49,
                        columnNumber: 9
                    }, this),
                    p.present && !status && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>onQueuePlayer(p),
                        className: "text-xs font-medium rounded-full w-7 h-7 flex items-center justify-center bg-[var(--blue)] text-white hover:bg-[var(--blue-dark)] transition-colors",
                        children: "Q"
                    }, void 0, false, {
                        fileName: "[project]/components/PresentPanel.js",
                        lineNumber: 68,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/PresentPanel.js",
                lineNumber: 48,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/PresentPanel.js",
        lineNumber: 28,
        columnNumber: 5
    }, this);
}
_c = PlayerRow;
function PlayerList({ players, statusMap, onTogglePresent, onQueuePlayer, emptyLabel }) {
    if (players.length === 0) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-sm text-gray-400",
            children: emptyLabel
        }, void 0, false, {
            fileName: "[project]/components/PresentPanel.js",
            lineNumber: 82,
            columnNumber: 12
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
        className: "max-h-80 overflow-y-auto divide-y divide-[var(--border)]",
        children: players.map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PlayerRow, {
                p: p,
                status: statusMap ? statusMap[p.id] : null,
                onTogglePresent: onTogglePresent,
                onQueuePlayer: onQueuePlayer
            }, p.id, false, {
                fileName: "[project]/components/PresentPanel.js",
                lineNumber: 87,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/components/PresentPanel.js",
        lineNumber: 85,
        columnNumber: 5
    }, this);
}
_c1 = PlayerList;
function CollapsiblePanel({ title, children, defaultOpen = true }) {
    _s();
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(defaultOpen);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-[var(--surface)] border border-[var(--border)] rounded-xl p-5",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>setOpen((o)=>!o),
                className: "w-full flex items-center justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-sm font-medium text-gray-500 uppercase tracking-wide",
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/components/PresentPanel.js",
                        lineNumber: 107,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-gray-400 text-xs",
                        children: open ? "▲" : "▼"
                    }, void 0, false, {
                        fileName: "[project]/components/PresentPanel.js",
                        lineNumber: 110,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/PresentPanel.js",
                lineNumber: 103,
                columnNumber: 7
            }, this),
            open && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-4",
                children: children
            }, void 0, false, {
                fileName: "[project]/components/PresentPanel.js",
                lineNumber: 112,
                columnNumber: 16
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/PresentPanel.js",
        lineNumber: 102,
        columnNumber: 5
    }, this);
}
_s(CollapsiblePanel, "pG0khZI24VrkSmCZcWM9qqrVMh4=");
_c2 = CollapsiblePanel;
function PresentPanel({ players, statusMap, onTogglePresent, onQueuePlayer, onMarkAllAbsent, loading, // team management passthrough
onAddPlayerToTeam, onRemovePlayerFromTeam, onDeleteTeam, onQueueTeam }) {
    _s1();
    const [presentSearch, setPresentSearch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [absentSearch, setAbsentSearch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const present = players.filter((p)=>p.present);
    const absent = players.filter((p)=>!p.present);
    const filteredPresent = present.filter((p)=>p.name.toLowerCase().includes(presentSearch.toLowerCase()));
    const filteredAbsent = absent.filter((p)=>p.name.toLowerCase().includes(absentSearch.toLowerCase()));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CollapsiblePanel, {
                title: `Present (${present.length})`,
                children: [
                    present.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-end mb-2",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onMarkAllAbsent,
                            className: "text-xs font-medium text-red-600 hover:text-red-700 hover:underline transition-colors",
                            children: "Mark all absent"
                        }, void 0, false, {
                            fileName: "[project]/components/PresentPanel.js",
                            lineNumber: 148,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/PresentPanel.js",
                        lineNumber: 147,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "text",
                        value: presentSearch,
                        onChange: (e)=>setPresentSearch(e.target.value),
                        placeholder: "Search present players…",
                        className: "w-full rounded-lg border border-[var(--border)] px-3 py-1.5 text-sm mb-3"
                    }, void 0, false, {
                        fileName: "[project]/components/PresentPanel.js",
                        lineNumber: 156,
                        columnNumber: 9
                    }, this),
                    loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-gray-400",
                        children: "Loading…"
                    }, void 0, false, {
                        fileName: "[project]/components/PresentPanel.js",
                        lineNumber: 164,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PlayerList, {
                        players: filteredPresent,
                        statusMap: statusMap,
                        onTogglePresent: onTogglePresent,
                        onQueuePlayer: onQueuePlayer,
                        emptyLabel: presentSearch ? "No matches." : "No one marked present yet."
                    }, void 0, false, {
                        fileName: "[project]/components/PresentPanel.js",
                        lineNumber: 166,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/PresentPanel.js",
                lineNumber: 145,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CollapsiblePanel, {
                title: `Absent (${absent.length})`,
                defaultOpen: false,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "text",
                        value: absentSearch,
                        onChange: (e)=>setAbsentSearch(e.target.value),
                        placeholder: "Search absent players…",
                        className: "w-full rounded-lg border border-[var(--border)] px-3 py-1.5 text-sm mb-3"
                    }, void 0, false, {
                        fileName: "[project]/components/PresentPanel.js",
                        lineNumber: 179,
                        columnNumber: 9
                    }, this),
                    loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-gray-400",
                        children: "Loading…"
                    }, void 0, false, {
                        fileName: "[project]/components/PresentPanel.js",
                        lineNumber: 187,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PlayerList, {
                        players: filteredAbsent,
                        statusMap: null,
                        onTogglePresent: onTogglePresent,
                        onQueuePlayer: onQueuePlayer,
                        emptyLabel: absentSearch ? "No matches." : "Everyone registered is present."
                    }, void 0, false, {
                        fileName: "[project]/components/PresentPanel.js",
                        lineNumber: 189,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/PresentPanel.js",
                lineNumber: 178,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CollapsiblePanel, {
                title: "Team",
                defaultOpen: false,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-h-80 overflow-y-auto",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$TeamManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        players: players,
                        onAddPlayer: onAddPlayerToTeam,
                        onRemovePlayer: onRemovePlayerFromTeam,
                        onDeleteTeam: onDeleteTeam,
                        onQueueTeam: onQueueTeam
                    }, void 0, false, {
                        fileName: "[project]/components/PresentPanel.js",
                        lineNumber: 203,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/PresentPanel.js",
                    lineNumber: 202,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/PresentPanel.js",
                lineNumber: 201,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/PresentPanel.js",
        lineNumber: 144,
        columnNumber: 5
    }, this);
}
_s1(PresentPanel, "Onr6JcR83gwzk53+nc8DwJ2xx8o=");
_c3 = PresentPanel;
var _c, _c1, _c2, _c3;
__turbopack_context__.k.register(_c, "PlayerRow");
__turbopack_context__.k.register(_c1, "PlayerList");
__turbopack_context__.k.register(_c2, "CollapsiblePanel");
__turbopack_context__.k.register(_c3, "PresentPanel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/QueueBoard.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>QueueBoard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tiers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/tiers.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$formatName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/formatName.js [app-client] (ecmascript)");
"use client";
;
;
;
function QueueBoard({ queues, availablePlayers, onRemovePlayer, onAddPlayer, onDeleteQueue, onAddQueue, readOnly = false }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between mb-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-sm font-medium text-gray-500 uppercase tracking-wide",
                        children: "Queues"
                    }, void 0, false, {
                        fileName: "[project]/components/QueueBoard.js",
                        lineNumber: 18,
                        columnNumber: 9
                    }, this),
                    !readOnly && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onAddQueue,
                        className: "text-sm text-[var(--blue)] font-medium",
                        children: "+ New queue"
                    }, void 0, false, {
                        fileName: "[project]/components/QueueBoard.js",
                        lineNumber: 22,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/QueueBoard.js",
                lineNumber: 17,
                columnNumber: 7
            }, this),
            queues.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-sm text-gray-400",
                children: "No one queued yet. Mark players present to fill a queue automatically."
            }, void 0, false, {
                fileName: "[project]/components/QueueBoard.js",
                lineNumber: 32,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 sm:grid-cols-3 gap-4",
                children: queues.map((queue, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `rounded-xl p-4 ${i < 3 ? "bg-yellow-50/50 border border-yellow-200" : "bg-[var(--surface)] border border-[var(--border)]"}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between mb-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "font-medium text-[var(--blue-dark)]",
                                        children: [
                                            "Queue ",
                                            i + 1,
                                            " ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xs font-normal text-gray-400",
                                                children: [
                                                    queue.players.length,
                                                    "/4"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/QueueBoard.js",
                                                lineNumber: 49,
                                                columnNumber: 19
                                            }, this),
                                            queue.players.length === 4 && queue.players[0] && queue.players.every((p)=>p && p.team_id && p.team_id === queue.players[0].team_id) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "ml-2 text-[11px] font-medium rounded-full px-2 py-0.5 bg-purple-100 text-purple-700",
                                                children: queue.players[0].team_id
                                            }, void 0, false, {
                                                fileName: "[project]/components/QueueBoard.js",
                                                lineNumber: 57,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/QueueBoard.js",
                                        lineNumber: 47,
                                        columnNumber: 17
                                    }, this),
                                    !readOnly && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>onDeleteQueue(queue.id),
                                        className: "text-xs text-gray-400 hover:text-red-600",
                                        children: "Delete"
                                    }, void 0, false, {
                                        fileName: "[project]/components/QueueBoard.js",
                                        lineNumber: 63,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/QueueBoard.js",
                                lineNumber: 46,
                                columnNumber: 15
                            }, this),
                            queue.players.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-gray-400 mb-3",
                                children: "Empty."
                            }, void 0, false, {
                                fileName: "[project]/components/QueueBoard.js",
                                lineNumber: 73,
                                columnNumber: 17
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "space-y-1.5 mb-3",
                                children: queue.players.map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        className: "flex items-center justify-between gap-2 text-sm rounded-lg border border-[var(--border)] bg-white px-3 py-1.5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "break-words",
                                                children: [
                                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$formatName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatPlayerName"])(p.name),
                                                    " ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-xs text-gray-400",
                                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tiers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TIER_LABELS"][p.skill_level]
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/QueueBoard.js",
                                                        lineNumber: 83,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/QueueBoard.js",
                                                lineNumber: 81,
                                                columnNumber: 23
                                            }, this),
                                            !readOnly && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>onRemovePlayer(queue.id, p.id),
                                                className: "text-xs text-gray-400 hover:text-red-600 shrink-0",
                                                children: "Remove"
                                            }, void 0, false, {
                                                fileName: "[project]/components/QueueBoard.js",
                                                lineNumber: 88,
                                                columnNumber: 25
                                            }, this)
                                        ]
                                    }, p.id, true, {
                                        fileName: "[project]/components/QueueBoard.js",
                                        lineNumber: 77,
                                        columnNumber: 21
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/QueueBoard.js",
                                lineNumber: 75,
                                columnNumber: 17
                            }, this),
                            !readOnly && queue.players.length < 4 && availablePlayers.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                value: "",
                                onChange: (e)=>{
                                    const player = availablePlayers.find((p)=>p.id === e.target.value);
                                    if (player) onAddPlayer(queue.id, player);
                                },
                                className: "w-full rounded-lg border border-[var(--border)] px-2 py-1.5 text-sm bg-white",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "",
                                        children: "+ Add player…"
                                    }, void 0, false, {
                                        fileName: "[project]/components/QueueBoard.js",
                                        lineNumber: 111,
                                        columnNumber: 17
                                    }, this),
                                    [
                                        ...availablePlayers
                                    ].sort((a, b)=>a.name.localeCompare(b.name)).map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: p.id,
                                            children: [
                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$formatName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatPlayerName"])(p.name),
                                                " (",
                                                __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tiers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TIER_LABELS"][p.skill_level],
                                                ")"
                                            ]
                                        }, p.id, true, {
                                            fileName: "[project]/components/QueueBoard.js",
                                            lineNumber: 115,
                                            columnNumber: 21
                                        }, this))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/QueueBoard.js",
                                lineNumber: 101,
                                columnNumber: 17
                            }, this)
                        ]
                    }, queue.id, true, {
                        fileName: "[project]/components/QueueBoard.js",
                        lineNumber: 38,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/QueueBoard.js",
                lineNumber: 36,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/QueueBoard.js",
        lineNumber: 16,
        columnNumber: 5
    }, this);
}
_c = QueueBoard;
var _c;
__turbopack_context__.k.register(_c, "QueueBoard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/RequestsPanel.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>RequestsPanel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$formatName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/formatName.js [app-client] (ecmascript)");
"use client";
;
;
function describeRequest(request) {
    if (request.type === "team_create") return "Create a new team";
    if (request.type === "team_join") return `Join ${request.team_id}`;
    return "Present + auto-queue";
}
function timeAgo(isoString) {
    const secs = Math.max(0, Math.floor((Date.now() - new Date(isoString).getTime()) / 1000));
    if (secs < 60) return "just now";
    const mins = Math.floor(secs / 60);
    if (mins < 60) return `${mins}m ago`;
    const hrs = Math.floor(mins / 60);
    return `${hrs}h ago`;
}
function RequestsPanel({ requests, onApprove, onDeny }) {
    const sorted = [
        ...requests
    ].sort((a, b)=>new Date(a.created_at) - new Date(b.created_at));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-[var(--surface)] border border-[var(--border)] rounded-xl p-5",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between mb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-sm font-medium text-gray-500 uppercase tracking-wide",
                        children: "Requests"
                    }, void 0, false, {
                        fileName: "[project]/components/RequestsPanel.js",
                        lineNumber: 28,
                        columnNumber: 9
                    }, this),
                    requests.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "inline-flex items-center justify-center text-[11px] font-semibold rounded-full min-w-[1.25rem] h-5 px-1.5 bg-red-600 text-white",
                        children: requests.length
                    }, void 0, false, {
                        fileName: "[project]/components/RequestsPanel.js",
                        lineNumber: 32,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/RequestsPanel.js",
                lineNumber: 27,
                columnNumber: 7
            }, this),
            sorted.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-sm text-gray-400",
                children: "No pending requests."
            }, void 0, false, {
                fileName: "[project]/components/RequestsPanel.js",
                lineNumber: 39,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                className: "space-y-2 max-h-80 overflow-y-auto",
                children: sorted.map((r)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        className: "flex items-center justify-between gap-2 text-sm border border-[var(--border)] rounded-lg px-3 py-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "min-w-0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "break-words font-medium",
                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$formatName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatPlayerName"])(r.player_name)
                                    }, void 0, false, {
                                        fileName: "[project]/components/RequestsPanel.js",
                                        lineNumber: 48,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-gray-500",
                                        children: describeRequest(r)
                                    }, void 0, false, {
                                        fileName: "[project]/components/RequestsPanel.js",
                                        lineNumber: 49,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-gray-400",
                                        children: timeAgo(r.created_at)
                                    }, void 0, false, {
                                        fileName: "[project]/components/RequestsPanel.js",
                                        lineNumber: 50,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/RequestsPanel.js",
                                lineNumber: 47,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-1.5 shrink-0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>onApprove(r),
                                        className: "text-xs font-medium rounded-full px-3 py-1 bg-green-600 text-white hover:bg-green-700 transition-colors",
                                        children: "Approve"
                                    }, void 0, false, {
                                        fileName: "[project]/components/RequestsPanel.js",
                                        lineNumber: 53,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>onDeny(r.id),
                                        className: "text-xs font-medium rounded-full px-3 py-1 bg-gray-100 text-gray-500 hover:bg-gray-200 transition-colors",
                                        children: "Deny"
                                    }, void 0, false, {
                                        fileName: "[project]/components/RequestsPanel.js",
                                        lineNumber: 59,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/RequestsPanel.js",
                                lineNumber: 52,
                                columnNumber: 15
                            }, this)
                        ]
                    }, r.id, true, {
                        fileName: "[project]/components/RequestsPanel.js",
                        lineNumber: 43,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/RequestsPanel.js",
                lineNumber: 41,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/RequestsPanel.js",
        lineNumber: 26,
        columnNumber: 5
    }, this);
}
_c = RequestsPanel;
var _c;
__turbopack_context__.k.register(_c, "RequestsPanel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/SuspendedPanel.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SuspendedPanel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tiers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/tiers.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$formatName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/formatName.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
const TIER_COLORS = {
    newbie: "bg-gray-100 text-gray-600",
    beginner: "bg-blue-50 text-[var(--blue)]",
    novice: "bg-yellow-50 text-[var(--yellow-dark)]",
    intermediate: "bg-[var(--blue)] text-white",
    executive: "bg-slate-900 text-amber-300"
};
function SuspendedPlayerRow({ player, onToggleSuspend }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
        className: "flex items-center justify-between gap-2 text-sm py-2",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "min-w-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "break-words font-medium text-gray-800 line-through decoration-gray-400",
                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$formatName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatPlayerName"])(player.name)
                    }, void 0, false, {
                        fileName: "[project]/components/SuspendedPanel.js",
                        lineNumber: 19,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-1.5 mt-0.5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: `inline-block text-[11px] font-medium rounded-full px-2 py-0.5 ${TIER_COLORS[player.skill_level] ?? "bg-gray-100 text-gray-600"}`,
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tiers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TIER_LABELS"][player.skill_level]
                            }, void 0, false, {
                                fileName: "[project]/components/SuspendedPanel.js",
                                lineNumber: 23,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "inline-block text-[11px] font-medium rounded-full px-2 py-0.5 bg-red-100 text-red-700",
                                children: "Suspended"
                            }, void 0, false, {
                                fileName: "[project]/components/SuspendedPanel.js",
                                lineNumber: 30,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/SuspendedPanel.js",
                        lineNumber: 22,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/SuspendedPanel.js",
                lineNumber: 18,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-1.5 shrink-0",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: ()=>onToggleSuspend(player, false),
                    className: "text-xs font-medium rounded-full px-3 py-1 bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors",
                    children: "Unsuspend"
                }, void 0, false, {
                    fileName: "[project]/components/SuspendedPanel.js",
                    lineNumber: 36,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/SuspendedPanel.js",
                lineNumber: 35,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/SuspendedPanel.js",
        lineNumber: 17,
        columnNumber: 5
    }, this);
}
_c = SuspendedPlayerRow;
function CollapsiblePanel({ title, children, defaultOpen = false }) {
    _s();
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(defaultOpen);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-[var(--surface)] border border-[var(--border)] rounded-xl p-5",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>setOpen((o)=>!o),
                className: "w-full flex items-center justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-sm font-medium text-gray-500 uppercase tracking-wide",
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/components/SuspendedPanel.js",
                        lineNumber: 55,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-gray-400 text-xs",
                        children: open ? "▲" : "▼"
                    }, void 0, false, {
                        fileName: "[project]/components/SuspendedPanel.js",
                        lineNumber: 58,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/SuspendedPanel.js",
                lineNumber: 51,
                columnNumber: 7
            }, this),
            open && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-4",
                children: children
            }, void 0, false, {
                fileName: "[project]/components/SuspendedPanel.js",
                lineNumber: 60,
                columnNumber: 16
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/SuspendedPanel.js",
        lineNumber: 50,
        columnNumber: 5
    }, this);
}
_s(CollapsiblePanel, "pG0khZI24VrkSmCZcWM9qqrVMh4=");
_c1 = CollapsiblePanel;
function SuspendedPanel({ players = [], onToggleSuspend, loading = false }) {
    _s1();
    const [search, setSearch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [selectedPlayerId, setSelectedPlayerId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [isAdding, setIsAdding] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const suspendedPlayers = players.filter((p)=>p.suspended);
    const eligiblePlayers = players.filter((p)=>!p.suspended);
    const filteredSuspended = suspendedPlayers.filter((p)=>p.name.toLowerCase().includes(search.toLowerCase()));
    const handleConfirmSuspend = ()=>{
        if (!selectedPlayerId) return;
        const playerToSuspend = players.find((p)=>p.id === selectedPlayerId);
        if (playerToSuspend) {
            onToggleSuspend(playerToSuspend, true);
            setSelectedPlayerId("");
            setIsAdding(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CollapsiblePanel, {
        title: `Suspended (${suspendedPlayers.length})`,
        children: [
            !isAdding ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-end mb-3",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: ()=>setIsAdding(true),
                    className: "text-xs font-medium text-red-600 hover:text-red-700 hover:underline transition-colors",
                    children: "+ Suspend player"
                }, void 0, false, {
                    fileName: "[project]/components/SuspendedPanel.js",
                    lineNumber: 95,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/SuspendedPanel.js",
                lineNumber: 94,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-4 p-3 rounded-lg border border-red-200 bg-red-50/50 space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "block text-xs font-medium text-gray-700",
                        children: "Select player to suspend"
                    }, void 0, false, {
                        fileName: "[project]/components/SuspendedPanel.js",
                        lineNumber: 104,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                value: selectedPlayerId,
                                onChange: (e)=>setSelectedPlayerId(e.target.value),
                                className: "w-full rounded-lg border border-[var(--border)] px-3 py-1.5 text-sm bg-white focus:outline-none",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "",
                                        children: "Choose player…"
                                    }, void 0, false, {
                                        fileName: "[project]/components/SuspendedPanel.js",
                                        lineNumber: 113,
                                        columnNumber: 15
                                    }, this),
                                    eligiblePlayers.map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: p.id,
                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$formatName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatPlayerName"])(p.name)
                                        }, p.id, false, {
                                            fileName: "[project]/components/SuspendedPanel.js",
                                            lineNumber: 115,
                                            columnNumber: 17
                                        }, this))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/SuspendedPanel.js",
                                lineNumber: 108,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleConfirmSuspend,
                                disabled: !selectedPlayerId,
                                className: "text-xs font-medium rounded-full px-3 py-1.5 bg-red-600 text-white hover:bg-red-700 transition-colors disabled:opacity-40 disabled:cursor-not-allowed shrink-0",
                                children: "Confirm"
                            }, void 0, false, {
                                fileName: "[project]/components/SuspendedPanel.js",
                                lineNumber: 120,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>{
                                    setIsAdding(false);
                                    setSelectedPlayerId("");
                                },
                                className: "text-xs font-medium text-gray-500 hover:text-gray-700 px-2 py-1.5 shrink-0",
                                children: "Cancel"
                            }, void 0, false, {
                                fileName: "[project]/components/SuspendedPanel.js",
                                lineNumber: 127,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/SuspendedPanel.js",
                        lineNumber: 107,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/SuspendedPanel.js",
                lineNumber: 103,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                type: "text",
                value: search,
                onChange: (e)=>setSearch(e.target.value),
                placeholder: "Search suspended players…",
                className: "w-full rounded-lg border border-[var(--border)] px-3 py-1.5 text-sm mb-3"
            }, void 0, false, {
                fileName: "[project]/components/SuspendedPanel.js",
                lineNumber: 140,
                columnNumber: 7
            }, this),
            loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-sm text-gray-400",
                children: "Loading…"
            }, void 0, false, {
                fileName: "[project]/components/SuspendedPanel.js",
                lineNumber: 149,
                columnNumber: 9
            }, this) : filteredSuspended.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-sm text-gray-400",
                children: search ? "No matches." : "No suspended players."
            }, void 0, false, {
                fileName: "[project]/components/SuspendedPanel.js",
                lineNumber: 151,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                className: "max-h-80 overflow-y-auto divide-y divide-[var(--border)]",
                children: filteredSuspended.map((player)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SuspendedPlayerRow, {
                        player: player,
                        onToggleSuspend: onToggleSuspend
                    }, player.id, false, {
                        fileName: "[project]/components/SuspendedPanel.js",
                        lineNumber: 157,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/SuspendedPanel.js",
                lineNumber: 155,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/SuspendedPanel.js",
        lineNumber: 92,
        columnNumber: 5
    }, this);
}
_s1(SuspendedPanel, "bs6FYz3Mgjhx+JuPdH3LbaoDCRw=");
_c2 = SuspendedPanel;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "SuspendedPlayerRow");
__turbopack_context__.k.register(_c1, "CollapsiblePanel");
__turbopack_context__.k.register(_c2, "SuspendedPanel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/TeamManager.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TeamManager
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$formatName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/formatName.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function TeamManager({ players, onAddPlayer, onRemovePlayer, onDeleteTeam }) {
    _s();
    const [pendingTeams, setPendingTeams] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [newTeamInput, setNewTeamInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [showInput, setShowInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const teamMap = {};
    for (const p of players){
        if (!p.team_id) continue;
        if (!teamMap[p.team_id]) teamMap[p.team_id] = [];
        teamMap[p.team_id].push(p);
    }
    for (const id of pendingTeams){
        if (!teamMap[id]) teamMap[id] = [];
    }
    const teamIds = Object.keys(teamMap);
    const unassignedPresent = players.filter((p)=>p.present && !p.team_id);
    function handleCreateTeam() {
        const trimmed = newTeamInput.trim();
        if (!trimmed) return;
        if (!pendingTeams.includes(trimmed) && !teamMap[trimmed]) {
            setPendingTeams((prev)=>[
                    ...prev,
                    trimmed
                ]);
        }
        setNewTeamInput("");
        setShowInput(false);
    }
    function handleDelete(teamId) {
        setPendingTeams((prev)=>prev.filter((id)=>id !== teamId));
        onDeleteTeam(teamId, teamMap[teamId] || []);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-[var(--surface)] border border-[var(--border)] rounded-xl p-5 mb-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between mb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-sm font-medium text-gray-500 uppercase tracking-wide",
                        children: "Teams"
                    }, void 0, false, {
                        fileName: "[project]/components/TeamManager.js",
                        lineNumber: 42,
                        columnNumber: 9
                    }, this),
                    !showInput && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setShowInput(true),
                        className: "text-sm text-[var(--blue)] font-medium",
                        children: "+ Team"
                    }, void 0, false, {
                        fileName: "[project]/components/TeamManager.js",
                        lineNumber: 46,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/TeamManager.js",
                lineNumber: 41,
                columnNumber: 7
            }, this),
            showInput && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-2 mb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "text",
                        placeholder: "Custom team name...",
                        value: newTeamInput,
                        onChange: (e)=>setNewTeamInput(e.target.value),
                        className: "w-full rounded-lg border border-[var(--border)] px-3 py-1.5 text-xs bg-white"
                    }, void 0, false, {
                        fileName: "[project]/components/TeamManager.js",
                        lineNumber: 54,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleCreateTeam,
                        className: "rounded-lg bg-[var(--blue)] text-white text-xs font-medium px-3 py-1.5",
                        children: "Add"
                    }, void 0, false, {
                        fileName: "[project]/components/TeamManager.js",
                        lineNumber: 61,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>{
                            setShowInput(false);
                            setNewTeamInput("");
                        },
                        className: "text-xs text-gray-400",
                        children: "Cancel"
                    }, void 0, false, {
                        fileName: "[project]/components/TeamManager.js",
                        lineNumber: 67,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/TeamManager.js",
                lineNumber: 53,
                columnNumber: 9
            }, this),
            teamIds.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-sm text-gray-400",
                children: "No teams yet."
            }, void 0, false, {
                fileName: "[project]/components/TeamManager.js",
                lineNumber: 80,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                className: "space-y-4",
                children: teamIds.map((teamId)=>{
                    const members = teamMap[teamId];
                    const presentCount = members.filter((m)=>m.present).length;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        className: "border border-[var(--border)] rounded-lg p-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between mb-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-sm font-medium",
                                        children: [
                                            teamId,
                                            " ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: presentCount === 4 ? "text-green-600" : "text-gray-400",
                                                children: [
                                                    "(",
                                                    presentCount,
                                                    "/4 present)"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/TeamManager.js",
                                                lineNumber: 91,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/TeamManager.js",
                                        lineNumber: 89,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>handleDelete(teamId),
                                        className: "text-xs text-gray-400 hover:text-red-600",
                                        children: "Delete"
                                    }, void 0, false, {
                                        fileName: "[project]/components/TeamManager.js",
                                        lineNumber: 95,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/TeamManager.js",
                                lineNumber: 88,
                                columnNumber: 17
                            }, this),
                            members.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-gray-400 mb-2",
                                children: "No members yet."
                            }, void 0, false, {
                                fileName: "[project]/components/TeamManager.js",
                                lineNumber: 104,
                                columnNumber: 19
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "space-y-1 mb-2",
                                children: members.map((m)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        className: "flex items-center justify-between text-xs",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: m.present ? "" : "text-gray-400",
                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$formatName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatPlayerName"])(m.name)
                                            }, void 0, false, {
                                                fileName: "[project]/components/TeamManager.js",
                                                lineNumber: 109,
                                                columnNumber: 25
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>onRemovePlayer(m.id),
                                                className: "text-gray-400 hover:text-red-600",
                                                children: "Remove"
                                            }, void 0, false, {
                                                fileName: "[project]/components/TeamManager.js",
                                                lineNumber: 112,
                                                columnNumber: 25
                                            }, this)
                                        ]
                                    }, m.id, true, {
                                        fileName: "[project]/components/TeamManager.js",
                                        lineNumber: 108,
                                        columnNumber: 23
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/TeamManager.js",
                                lineNumber: 106,
                                columnNumber: 19
                            }, this),
                            members.length < 4 && unassignedPresent.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                value: "",
                                onChange: (e)=>{
                                    if (e.target.value) onAddPlayer(teamId, e.target.value);
                                },
                                className: "w-full rounded-lg border border-[var(--border)] px-2 py-1 text-xs bg-white",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "",
                                        children: "+ Add player…"
                                    }, void 0, false, {
                                        fileName: "[project]/components/TeamManager.js",
                                        lineNumber: 131,
                                        columnNumber: 19
                                    }, this),
                                    [
                                        ...unassignedPresent
                                    ].sort((a, b)=>a.name.localeCompare(b.name)).map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: p.id,
                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$formatName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatPlayerName"])(p.name)
                                        }, p.id, false, {
                                            fileName: "[project]/components/TeamManager.js",
                                            lineNumber: 135,
                                            columnNumber: 23
                                        }, this))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/TeamManager.js",
                                lineNumber: 124,
                                columnNumber: 19
                            }, this)
                        ]
                    }, teamId, true, {
                        fileName: "[project]/components/TeamManager.js",
                        lineNumber: 87,
                        columnNumber: 15
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/components/TeamManager.js",
                lineNumber: 82,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/TeamManager.js",
        lineNumber: 40,
        columnNumber: 5
    }, this);
}
_s(TeamManager, "5ivX73mB2H5EGitusm5jCN+g4x4=");
_c = TeamManager;
var _c;
__turbopack_context__.k.register(_c, "TeamManager");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/formatName.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Formats a full name as "First I.I." — first name kept as-is, every
// subsequent word collapsed to its initial + period, no spaces between
// initials.
//
//   formatPlayerName("Darah Via Moscoso") -> "Darah V.M."
//   formatPlayerName("Alex Mart")         -> "Alex M."
//   formatPlayerName("Cher")              -> "Cher"
__turbopack_context__.s([
    "formatPlayerName",
    ()=>formatPlayerName
]);
function formatPlayerName(fullName) {
    if (!fullName) return "";
    const parts = fullName.trim().split(/\s+/);
    if (parts.length <= 1) return parts[0] || "";
    const [first, ...rest] = parts;
    const initials = rest.map((w)=>`${w[0].toUpperCase()}.`).join("");
    return `${first} ${initials}`;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/players.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getAllPlayers",
    ()=>getAllPlayers,
    "loginPlayer",
    ()=>loginPlayer,
    "registerPlayer",
    ()=>registerPlayer,
    "setPlayerPresent",
    ()=>setPlayerPresent,
    "setPlayerSuspended",
    ()=>setPlayerSuspended,
    "setPlayerTeam",
    ()=>setPlayerTeam,
    "subscribeToPlayers",
    ()=>subscribeToPlayers,
    "updatePlayer",
    ()=>updatePlayer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/supabaseClient.js [app-client] (ecmascript)");
;
async function registerPlayer({ name, email, password, skill_level }) {
    const { data: existing } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from("players").select("id").eq("email", email).maybeSingle();
    if (existing) {
        return {
            ok: false,
            error: "An account with this email already exists."
        };
    }
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from("players").insert({
        name,
        email,
        password,
        skill_level,
        present: false
    }).select().single();
    if (error) return {
        ok: false,
        error: error.message
    };
    return {
        ok: true,
        player: data
    };
}
async function loginPlayer({ email, password }) {
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from("players").select("*").eq("email", email).eq("password", password).maybeSingle();
    if (error) return {
        ok: false,
        error: error.message
    };
    if (!data) return {
        ok: false,
        error: "Incorrect email or password."
    };
    return {
        ok: true,
        player: data
    };
}
async function getAllPlayers() {
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from("players").select("*").order("created_at", {
        ascending: true
    });
    if (error) throw new Error(error.message);
    return data;
}
async function setPlayerPresent(id, present) {
    const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from("players").update({
        present
    }).eq("id", id);
    if (error) throw new Error(error.message);
}
async function setPlayerTeam(id, team_id) {
    const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from("players").update({
        team_id: team_id || null
    }).eq("id", id);
    if (error) throw new Error(error.message);
}
function subscribeToPlayers(onChange) {
    const channel = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].channel(`players_changes_${Math.random().toString(36).slice(2)}`).on("postgres_changes", {
        event: "*",
        schema: "public",
        table: "players"
    }, ()=>onChange()).subscribe();
    return ()=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].removeChannel(channel);
}
async function updatePlayer(id, { name, email, skill_level, password }) {
    if (email) {
        const { data: existing } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from("players").select("id").eq("email", email).neq("id", id).maybeSingle();
        if (existing) {
            return {
                ok: false,
                error: "An account with this email already exists."
            };
        }
    }
    const updates = {
        name,
        email,
        skill_level
    };
    if (password) updates.password = password;
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from("players").update(updates).eq("id", id).select().single();
    if (error) return {
        ok: false,
        error: error.message
    };
    return {
        ok: true,
        player: data
    };
}
async function setPlayerSuspended(playerId, suspended) {
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from("players").update({
        suspended
    }).eq("id", playerId).select().single();
    if (error) throw error;
    return data;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/requests.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cancelRequest",
    ()=>cancelRequest,
    "createPresenceRequest",
    ()=>createPresenceRequest,
    "createTeamCreateRequest",
    ()=>createTeamCreateRequest,
    "createTeamJoinRequest",
    ()=>createTeamJoinRequest,
    "getAllRequests",
    ()=>getAllRequests,
    "getOwnRequest",
    ()=>getOwnRequest,
    "resolveRequest",
    ()=>resolveRequest,
    "subscribeToAllRequests",
    ()=>subscribeToAllRequests,
    "subscribeToOwnRequest",
    ()=>subscribeToOwnRequest
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/supabaseClient.js [app-client] (ecmascript)");
;
// One row per pending player request. A unique constraint on player_id
// means submitting a new request just replaces any existing pending one
// for that player, rather than creating a duplicate — a player can only
// have a single request in flight at a time.
//
// type: "presence" | "team_create" | "team_join"
// team_id: only set for "team_join" (the team being requested to join).
// "team_create" doesn't carry a team_id — the admin's approval assigns
// the next "Team N" label at approval time, avoiding label collisions
// between two players creating teams at the same moment.
async function upsertRequest(playerId, playerName, type, teamId) {
    const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from("player_requests").upsert({
        player_id: playerId,
        player_name: playerName,
        type,
        team_id: teamId ?? null,
        created_at: new Date().toISOString()
    }, {
        onConflict: "player_id"
    });
    if (error) throw new Error(error.message);
}
function createPresenceRequest(playerId, playerName) {
    return upsertRequest(playerId, playerName, "presence", null);
}
function createTeamCreateRequest(playerId, playerName, teamName) {
    return upsertRequest(playerId, playerName, "team_create", teamName);
}
function createTeamJoinRequest(playerId, playerName, teamName) {
    return upsertRequest(playerId, playerName, "team_join", teamName);
}
async function cancelRequest(playerId) {
    const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from("player_requests").delete().eq("player_id", playerId);
    if (error) throw new Error(error.message);
}
async function resolveRequest(requestId) {
    const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from("player_requests").delete().eq("id", requestId);
    if (error) throw new Error(error.message);
}
async function getAllRequests() {
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from("player_requests").select("*").order("created_at", {
        ascending: true
    });
    if (error) throw new Error(error.message);
    return data;
}
async function getOwnRequest(playerId) {
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from("player_requests").select("*").eq("player_id", playerId).maybeSingle();
    if (error) throw new Error(error.message);
    return data;
}
function subscribeToAllRequests(onChange) {
    const channel = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].channel("player_requests_admin").on("postgres_changes", {
        event: "*",
        schema: "public",
        table: "player_requests"
    }, onChange).subscribe();
    return ()=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].removeChannel(channel);
}
function subscribeToOwnRequest(playerId, onChange) {
    const channel = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].channel(`player_requests_own_${playerId}`).on("postgres_changes", {
        event: "*",
        schema: "public",
        table: "player_requests",
        filter: `player_id=eq.${playerId}`
    }, onChange).subscribe();
    return ()=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].removeChannel(channel);
}
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
"[project]/lib/tiers.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Skill tiers, ordered low to high. Two players may share a queue only if
// their tiers are the same or adjacent (max 1 tier apart).
__turbopack_context__.s([
    "TIERS",
    ()=>TIERS,
    "TIER_LABELS",
    ()=>TIER_LABELS,
    "assignPlayerToQueues",
    ()=>assignPlayerToQueues,
    "assignPresentPlayer",
    ()=>assignPresentPlayer,
    "tierIndex",
    ()=>tierIndex
]);
const TIERS = [
    "newbie",
    "beginner",
    "novice",
    "intermediate",
    "executive"
];
const TIER_LABELS = {
    newbie: "New",
    beginner: "Beg",
    novice: "Nov",
    intermediate: "Int",
    executive: "Exec"
};
const TIER_INDEX = Object.fromEntries(_c1 = TIERS.map(_c = (t, i)=>[
        t,
        i
    ]));
_c2 = TIER_INDEX;
function tierIndex(skillLevel) {
    return TIER_INDEX[skillLevel] ?? 0;
}
function assignPlayerToQueues(player, queues, makeId) {
    for(let i = 0; i < queues.length; i++){
        const q = queues[i];
        if (q.players.length < 4) {
            const next = [
                ...queues
            ];
            next[i] = {
                ...q,
                players: [
                    ...q.players,
                    player
                ]
            };
            return next;
        }
    }
    return [
        ...queues,
        {
            id: makeId(),
            players: [
                player
            ]
        }
    ];
}
function assignPresentPlayer(player, queues, allPlayers, makeId) {
    if (player.team_id) {
        const teammates = allPlayers.filter((p)=>p.team_id === player.team_id && p.present);
        if (teammates.length > 1) {
            const teamIds = new Set(teammates.map((p)=>p.id));
            const cleared = queues.map((q)=>({
                    ...q,
                    players: q.players.filter((p)=>!teamIds.has(p.id))
                }));
            return [
                ...cleared,
                {
                    id: makeId(),
                    players: teammates
                }
            ];
        }
    }
    return assignPlayerToQueues(player, queues, makeId);
}
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "TIER_INDEX$Object.fromEntries$TIERS.map");
__turbopack_context__.k.register(_c1, "TIER_INDEX$Object.fromEntries");
__turbopack_context__.k.register(_c2, "TIER_INDEX");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_0blym45._.js.map