module.exports = [
"[project]/app/dashboard/page.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DashboardPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/store.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$players$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/players.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$requests$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/requests.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tiers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/tiers.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CourtCard$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/CourtCard.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$QueueBoard$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/QueueBoard.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$PresentPanel$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/PresentPanel.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$RequestsPanel$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/RequestsPanel.js [app-ssr] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '@/components/PlayerPanel'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$TeamManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/TeamManager.js [app-ssr] (ecmascript)");
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
let nextQueueId = 1;
function newQueueId() {
    return `q${Date.now()}_${nextQueueId++}`;
}
function DashboardPage() {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const [session, setSessionState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [courts, setCourts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [queues, setQueues] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [duration, setDuration] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(20);
    const [requests, setRequests] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]); // admin: all pending requests
    const [myRequest, setMyRequest] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null); // player: own pending request, or null
    const [players, setPlayers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loadingPlayers, setLoadingPlayers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [ready, setReady] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [playersError, setPlayersError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [sidebarOpen, setSidebarOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [autoPlayIn, setAutoPlayIn] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const refreshPlayers = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async ()=>{
        setLoadingPlayers(true);
        try {
            const data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$players$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAllPlayers"])();
            setPlayers(data);
            setPlayersError("");
        } catch (err) {
            setPlayersError(err.message);
        }
        setLoadingPlayers(false);
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const s = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSession"])();
        if (!s) {
            router.replace("/login");
            return;
        }
        setSessionState(s);
        refreshPlayers();
        (async ()=>{
            try {
                const state = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAppState"])();
                setCourts(state.courts || []);
                setQueues(state.queues || []);
                setDuration(state.duration ?? 20);
            } catch (err) {
                setPlayersError(err.message);
            }
            setReady(true);
        })();
        const unsubscribe = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["subscribeToAppState"])((newState)=>{
            if (newState.courts) setCourts(newState.courts);
            if (newState.queues) setQueues(newState.queues);
            if (newState.duration != null) setDuration(newState.duration);
        });
        return ()=>unsubscribe();
    }, [
        router,
        refreshPlayers
    ]);
    function persistQueues(next) {
        setQueues(next);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["saveQueues"])(next).catch((err)=>setPlayersError(err.message));
    }
    function persistCourts(next) {
        setCourts(next);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["saveCourts"])(next).catch((err)=>setPlayersError(err.message));
    }
    function getAvailable(playersList, queuesList, courtsList) {
        const queuedIds = new Set(queuesList.flatMap((q)=>(q.players || []).filter(Boolean).map((p)=>p.id)));
        const onCourtIds = new Set(courtsList.flatMap((c)=>(c.players || []).filter(Boolean).map((p)=>p.id)));
        return playersList.filter((p)=>p.present && !queuedIds.has(p.id) && !onCourtIds.has(p.id));
    }
    async function handleTogglePresent(player) {
        const nextPresent = !player.present;
        const updatedPlayers = players.map((p)=>p.id === player.id ? {
                ...p,
                present: nextPresent
            } : p);
        setPlayers(updatedPlayers);
        try {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$players$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setPlayerPresent"])(player.id, nextPresent);
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
    function handleQueuePlayer(player) {
        const next = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tiers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assignPresentPlayer"])(player, queues, players, newQueueId);
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
    function handleRequestPresent(player) {
        setMyRequest({
            id: "pending",
            player_id: player.id,
            player_name: player.name,
            created_at: new Date().toISOString()
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$requests$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createPresenceRequest"])(player.id, player.name).catch((err)=>{
            setPlayersError(err.message);
            setMyRequest(null);
        });
    }
    function handleCancelRequest(player) {
        setMyRequest(null);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$requests$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cancelPresenceRequest"])(player.id).catch((err)=>setPlayersError(err.message));
    }
    function handleApproveRequest(request) {
        setRequests((prev)=>prev.filter((r)=>r.id !== request.id));
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$requests$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resolvePresenceRequest"])(request.id).catch((err)=>setPlayersError(err.message));
        const player = players.find((p)=>p.id === request.player_id);
        if (!player) return;
        const updatedPlayer = {
            ...player,
            present: true
        };
        const updatedPlayers = players.map((p)=>p.id === player.id ? updatedPlayer : p);
        setPlayers(updatedPlayers);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$players$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setPlayerPresent"])(player.id, true).catch((err)=>setPlayersError(err.message));
        const next = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tiers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assignPresentPlayer"])(updatedPlayer, queues, updatedPlayers, newQueueId);
        persistQueues(next);
    }
    function handleDenyRequest(requestId) {
        setRequests((prev)=>prev.filter((r)=>r.id !== requestId));
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$requests$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resolvePresenceRequest"])(requestId).catch((err)=>setPlayersError(err.message));
    }
    async function handleSetPlayerTeam(playerId, teamId) {
        setPlayers((prev)=>prev.map((p)=>p.id === playerId ? {
                    ...p,
                    team_id: teamId || null
                } : p));
        try {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$players$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setPlayerTeam"])(playerId, teamId);
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
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$players$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setPlayerTeam"])(m.id, "").catch((err)=>setPlayersError(err.message));
        }
    }
    function handleAddPlayerToTeam(teamId, playerId) {
        handleSetPlayerTeam(playerId, teamId);
    }
    function handleRemovePlayerFromTeam(playerId) {
        handleSetPlayerTeam(playerId, "");
    }
    function handleCreateTeamSelf(player) {
        const existingIds = players.map((p)=>p.team_id).filter(Boolean);
        const label = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$TeamManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["nextTeamLabel"])(existingIds);
        handleSetPlayerTeam(player.id, label);
    }
    function handleJoinTeamSelf(player, teamId) {
        handleSetPlayerTeam(player.id, teamId);
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
        if (queues.length < 3) return;
        const [q1, q2, q3, ...rest] = queues;
        if (q1.players.length !== 4 || q2.players.length !== 4 || q3.players.length !== 4) return;
        const endsAt = Date.now() + duration * 60 * 1000;
        const nextCourts = courts.map((court, i)=>{
            const q = [
                q1,
                q2,
                q3
            ][i];
            return {
                ...court,
                players: q.players.map((p)=>({
                        id: p.id,
                        name: p.name
                    })),
                queueLabel: `Queue ${i + 1}`,
                endsAt,
                running: true
            };
        });
        persistCourts(nextCourts);
        persistQueues(rest);
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
                    next = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tiers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assignPresentPlayer"])(fullPlayer, next, players, newQueueId);
                }
            }
        }
        persistQueues(next);
    }
    function handleDurationChange(minutes) {
        setDuration(minutes);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["saveDuration"])(minutes).catch((err)=>setPlayersError(err.message));
    }
    function handleLogout() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["logout"])();
        router.replace("/login");
    }
    const isAdmin = session?.role === "admin";
    const currentPlayer = session ? players.find((p)=>p.id === session.id) : null;
    const showSidebar = isAdmin && sidebarOpen || !isAdmin && !!currentPlayer;
    const currentPlayerId = currentPlayer?.id ?? null;
    // Requests are scoped per-role: admin subscribes to every pending request,
    // a player only ever fetches/subscribes to their own single row so other
    // players' requests never reach their client.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!session) return;
        if (isAdmin) {
            let cancelled = false;
            const refresh = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$requests$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAllPresenceRequests"])().then((data)=>{
                    if (!cancelled) setRequests(data);
                }).catch((err)=>setPlayersError(err.message));
            refresh();
            const unsubscribe = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$requests$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["subscribeToAllPresenceRequests"])(refresh);
            return ()=>{
                cancelled = true;
                unsubscribe();
            };
        }
        if (currentPlayerId) {
            let cancelled = false;
            const refresh = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$requests$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getOwnPresenceRequest"])(currentPlayerId).then((data)=>{
                    if (!cancelled) setMyRequest(data);
                }).catch((err)=>setPlayersError(err.message));
            refresh();
            const unsubscribe = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$requests$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["subscribeToOwnPresenceRequest"])(currentPlayerId, refresh);
            return ()=>{
                cancelled = true;
                unsubscribe();
            };
        }
    }, [
        session,
        isAdmin,
        currentPlayerId
    ]);
    const canPlay = queues.length >= 3 && queues[0]?.players.length === 4 && queues[1]?.players.length === 4 && queues[2]?.players.length === 4;
    // Auto "Match finished": once a running court's timer (endsAt) has
    // passed, trigger the same logic the button does. Button stays visible.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!isAdmin) return;
        const interval = setInterval(()=>{
            const expired = courts.some((c)=>c.running && c.endsAt && Date.now() >= c.endsAt);
            if (expired) handleMatchFinished();
        }, 1000);
        return ()=>clearInterval(interval);
    }, [
        isAdmin,
        courts,
        queues,
        players
    ]);
    // Auto "Play": once queues 1-3 are full (canPlay), wait 1 minute then
    // trigger the same logic the button does, unless it stops being ready
    // before the minute is up. Button stays visible.
    const courtsEmpty = courts.every((c)=>!c.running && (c.players || []).length === 0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!isAdmin || !canPlay || !courtsEmpty) {
            setAutoPlayIn(null);
            return;
        }
        const target = Date.now() + 60 * 1000;
        setAutoPlayIn(60);
        const tick = setInterval(()=>{
            const secsLeft = Math.max(0, Math.ceil((target - Date.now()) / 1000));
            setAutoPlayIn(secsLeft);
        }, 1000);
        const timeout = setTimeout(()=>{
            handlePlay();
        }, 60 * 1000);
        return ()=>{
            clearInterval(tick);
            clearTimeout(timeout);
        };
    }, [
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "min-h-screen bg-[var(--background)]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "border-b border-[var(--border)] bg-[var(--surface)]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-6xl mx-auto px-4 py-4 flex items-center justify-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "w-3 h-3 rounded-full bg-[var(--yellow)]"
                                }, void 0, false, {
                                    fileName: "[project]/app/dashboard/page.js",
                                    lineNumber: 439,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "font-semibold tracking-tight",
                                    children: "Miagao Pickleball Club"
                                }, void 0, false, {
                                    fileName: "[project]/app/dashboard/page.js",
                                    lineNumber: 440,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/dashboard/page.js",
                            lineNumber: 438,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-sm text-gray-500",
                                    children: session?.name
                                }, void 0, false, {
                                    fileName: "[project]/app/dashboard/page.js",
                                    lineNumber: 443,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handleLogout,
                                    className: "text-sm text-[var(--blue)] font-medium",
                                    children: "Log out"
                                }, void 0, false, {
                                    fileName: "[project]/app/dashboard/page.js",
                                    lineNumber: 444,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/dashboard/page.js",
                            lineNumber: 442,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/dashboard/page.js",
                    lineNumber: 437,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/dashboard/page.js",
                lineNumber: 436,
                columnNumber: 7
            }, this),
            myStatus === "playing" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-green-600 text-white text-sm font-medium text-center py-2 px-4",
                children: [
                    "You're currently playing, ",
                    session?.name
                ]
            }, void 0, true, {
                fileName: "[project]/app/dashboard/page.js",
                lineNumber: 452,
                columnNumber: 9
            }, this),
            myStatus === "next" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-red-600 text-white text-sm font-medium text-center py-2 px-4",
                children: [
                    "You're next to play, ",
                    session?.name
                ]
            }, void 0, true, {
                fileName: "[project]/app/dashboard/page.js",
                lineNumber: 457,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `max-w-6xl mx-auto px-4 py-8 grid grid-cols-1 gap-8 ${showSidebar ? "lg:grid-cols-[1fr_280px]" : "lg:grid-cols-1"}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between mb-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "text-sm font-medium text-gray-500 uppercase tracking-wide",
                                                children: "Courts"
                                            }, void 0, false, {
                                                fileName: "[project]/app/dashboard/page.js",
                                                lineNumber: 470,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-3",
                                                children: [
                                                    isAdmin && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: handleMatchFinished,
                                                        disabled: !courts.some((c)=>c.players.length > 0),
                                                        className: "text-sm text-[var(--blue)] font-medium disabled:opacity-40 disabled:cursor-not-allowed",
                                                        children: "Match finished"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/page.js",
                                                        lineNumber: 475,
                                                        columnNumber: 19
                                                    }, this),
                                                    isAdmin && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>setSidebarOpen((o)=>!o),
                                                        className: "text-sm text-gray-400 hover:text-[var(--blue)] font-medium",
                                                        title: sidebarOpen ? "Hide panel" : "Show panel",
                                                        children: sidebarOpen ? "› Hide panel" : "‹ Show panel"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/page.js",
                                                        lineNumber: 484,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/dashboard/page.js",
                                                lineNumber: 473,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/dashboard/page.js",
                                        lineNumber: 469,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-1 sm:grid-cols-3 gap-4",
                                        children: courts.map((court)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CourtCard$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                court: court
                                            }, court.id, false, {
                                                fileName: "[project]/app/dashboard/page.js",
                                                lineNumber: 496,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/page.js",
                                        lineNumber: 494,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/dashboard/page.js",
                                lineNumber: 468,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                children: [
                                    isAdmin && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-wrap items-center justify-between gap-3 mb-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "text-sm text-gray-500",
                                                        children: "Match length"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/page.js",
                                                        lineNumber: 505,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center rounded-lg border border-[var(--border)] overflow-hidden",
                                                        children: [
                                                            [
                                                                15,
                                                                20
                                                            ].map((mins)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    onClick: ()=>handleDurationChange(mins),
                                                                    className: `px-3 py-1 text-sm ${duration === mins ? "bg-[var(--blue)] text-white" : "bg-white text-gray-600"}`,
                                                                    children: [
                                                                        mins,
                                                                        "m"
                                                                    ]
                                                                }, mins, true, {
                                                                    fileName: "[project]/app/dashboard/page.js",
                                                                    lineNumber: 508,
                                                                    columnNumber: 23
                                                                }, this)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "number",
                                                                min: "1",
                                                                value: duration,
                                                                onChange: (e)=>handleDurationChange(Number(e.target.value) || 1),
                                                                className: "w-16 px-2 py-1 text-sm border-l border-[var(--border)]"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/dashboard/page.js",
                                                                lineNumber: 520,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/dashboard/page.js",
                                                        lineNumber: 506,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/dashboard/page.js",
                                                lineNumber: 504,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: handlePlay,
                                                        disabled: !canPlay,
                                                        className: "rounded-lg bg-[var(--blue)] text-white font-medium text-sm px-5 py-2 hover:bg-[var(--blue-dark)] transition-colors disabled:opacity-40 disabled:cursor-not-allowed",
                                                        children: "▶ Play — send queues 1–3 to courts"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/page.js",
                                                        lineNumber: 531,
                                                        columnNumber: 19
                                                    }, this),
                                                    autoPlayIn != null && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-xs text-gray-400",
                                                        children: [
                                                            "Automatically starts in ",
                                                            autoPlayIn,
                                                            "s"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/dashboard/page.js",
                                                        lineNumber: 539,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/dashboard/page.js",
                                                lineNumber: 530,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/dashboard/page.js",
                                        lineNumber: 503,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$QueueBoard$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        queues: queues,
                                        availablePlayers: available,
                                        onRemovePlayer: handleRemovePlayerFromQueue,
                                        onAddPlayer: handleAddPlayerToQueue,
                                        onDeleteQueue: handleDeleteQueue,
                                        onAddQueue: handleAddQueue,
                                        readOnly: !isAdmin
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/page.js",
                                        lineNumber: 547,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/dashboard/page.js",
                                lineNumber: 501,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/dashboard/page.js",
                        lineNumber: 467,
                        columnNumber: 9
                    }, this),
                    isAdmin && sidebarOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                        className: "space-y-4",
                        children: [
                            playersError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-red-600 mb-3",
                                children: playersError
                            }, void 0, false, {
                                fileName: "[project]/app/dashboard/page.js",
                                lineNumber: 562,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$RequestsPanel$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                requests: requests,
                                onApprove: handleApproveRequest,
                                onDeny: handleDenyRequest
                            }, void 0, false, {
                                fileName: "[project]/app/dashboard/page.js",
                                lineNumber: 565,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$PresentPanel$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                players: players,
                                statusMap: statusMap,
                                onTogglePresent: handleTogglePresent,
                                onQueuePlayer: handleQueuePlayer,
                                loading: loadingPlayers,
                                onAddPlayerToTeam: handleAddPlayerToTeam,
                                onRemovePlayerFromTeam: handleRemovePlayerFromTeam,
                                onDeleteTeam: handleDeleteTeam,
                                onQueueTeam: handleQueueTeam
                            }, void 0, false, {
                                fileName: "[project]/app/dashboard/page.js",
                                lineNumber: 571,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/dashboard/page.js",
                        lineNumber: 560,
                        columnNumber: 11
                    }, this),
                    !isAdmin && currentPlayer && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                        children: [
                            playersError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-red-600 mb-3",
                                children: playersError
                            }, void 0, false, {
                                fileName: "[project]/app/dashboard/page.js",
                                lineNumber: 588,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(PlayerPanel, {
                                player: currentPlayer,
                                hasPendingRequest: !!myRequest,
                                players: players,
                                onRequestPresent: handleRequestPresent,
                                onCancelRequest: handleCancelRequest,
                                onMarkAbsent: handleTogglePresent,
                                onCreateTeam: handleCreateTeamSelf,
                                onJoinTeam: handleJoinTeamSelf,
                                onLeaveTeam: handleLeaveTeamSelf
                            }, void 0, false, {
                                fileName: "[project]/app/dashboard/page.js",
                                lineNumber: 591,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/dashboard/page.js",
                        lineNumber: 586,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/dashboard/page.js",
                lineNumber: 462,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/dashboard/page.js",
        lineNumber: 435,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/CourtCard.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CourtCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
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
function CourtCard({ court }) {
    const [now, setNow] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(Date.now());
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!court.running) return;
        const interval = setInterval(()=>setNow(Date.now()), 1000);
        return ()=>clearInterval(interval);
    }, [
        court.running
    ]);
    const remaining = court.endsAt ? court.endsAt - now : 0;
    const timeUp = court.running && remaining <= 0;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-green-50 border border-green-200 rounded-xl p-5",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between mb-3",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "font-medium text-gray-800",
                    children: court.name
                }, void 0, false, {
                    fileName: "[project]/components/CourtCard.js",
                    lineNumber: 28,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/CourtCard.js",
                lineNumber: 27,
                columnNumber: 7
            }, this),
            court.running && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `text-sm font-medium mb-3 ${timeUp ? "text-red-600" : "text-[var(--blue)]"}`,
                children: timeUp ? "Time's up" : formatTime(remaining)
            }, void 0, false, {
                fileName: "[project]/components/CourtCard.js",
                lineNumber: 37,
                columnNumber: 9
            }, this),
            court.players.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-sm text-gray-400 mb-3",
                children: "Waiting for players."
            }, void 0, false, {
                fileName: "[project]/components/CourtCard.js",
                lineNumber: 47,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                className: "space-y-1.5 mb-3",
                children: court.players.map((player, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        className: "text-sm rounded-lg border border-[var(--border)] bg-white px-3 py-1.5",
                        children: player?.name ?? player
                    }, player?.id ?? i, false, {
                        fileName: "[project]/components/CourtCard.js",
                        lineNumber: 51,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/CourtCard.js",
                lineNumber: 49,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/CourtCard.js",
        lineNumber: 26,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/PresentPanel.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PresentPanel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tiers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/tiers.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$TeamManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/TeamManager.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
const TIER_COLORS = {
    newbie: "bg-gray-100 text-gray-600",
    beginner: "bg-blue-50 text-[var(--blue)]",
    novice: "bg-yellow-50 text-[var(--yellow-dark)]",
    intermediate: "bg-[var(--blue)] text-white"
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
        className: "flex items-center justify-between gap-2 text-sm py-2",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "min-w-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "break-words",
                        children: p.name
                    }, void 0, false, {
                        fileName: "[project]/components/PresentPanel.js",
                        lineNumber: 28,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-1.5 mt-0.5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: `inline-block text-[11px] font-medium rounded-full px-2 py-0.5 ${TIER_COLORS[p.skill_level] ?? "bg-gray-100 text-gray-600"}`,
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tiers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TIER_LABELS"][p.skill_level]
                            }, void 0, false, {
                                fileName: "[project]/components/PresentPanel.js",
                                lineNumber: 30,
                                columnNumber: 11
                            }, this),
                            status && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: `inline-block text-[11px] font-medium rounded-full px-2 py-0.5 ${STATUS_STYLES[status]}`,
                                children: STATUS_LABELS[status]
                            }, void 0, false, {
                                fileName: "[project]/components/PresentPanel.js",
                                lineNumber: 38,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/PresentPanel.js",
                        lineNumber: 29,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/PresentPanel.js",
                lineNumber: 27,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-1.5 shrink-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>onTogglePresent(p),
                        className: `text-xs font-medium rounded-full px-3 py-1 transition-colors ${p.present ? "bg-green-600 text-white hover:bg-green-700" : "bg-gray-100 text-gray-500 hover:bg-gray-200"}`,
                        children: p.present ? "Present" : "Absent"
                    }, void 0, false, {
                        fileName: "[project]/components/PresentPanel.js",
                        lineNumber: 47,
                        columnNumber: 9
                    }, this),
                    p.present && !status && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>onQueuePlayer(p),
                        className: "text-xs font-medium rounded-full w-7 h-7 flex items-center justify-center bg-[var(--blue)] text-white hover:bg-[var(--blue-dark)] transition-colors",
                        children: "Q"
                    }, void 0, false, {
                        fileName: "[project]/components/PresentPanel.js",
                        lineNumber: 58,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/PresentPanel.js",
                lineNumber: 46,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/PresentPanel.js",
        lineNumber: 26,
        columnNumber: 5
    }, this);
}
function PlayerList({ players, statusMap, onTogglePresent, onQueuePlayer, emptyLabel }) {
    if (players.length === 0) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-sm text-gray-400",
            children: emptyLabel
        }, void 0, false, {
            fileName: "[project]/components/PresentPanel.js",
            lineNumber: 72,
            columnNumber: 12
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
        className: "max-h-80 overflow-y-auto divide-y divide-[var(--border)]",
        children: players.map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(PlayerRow, {
                p: p,
                status: statusMap ? statusMap[p.id] : null,
                onTogglePresent: onTogglePresent,
                onQueuePlayer: onQueuePlayer
            }, p.id, false, {
                fileName: "[project]/components/PresentPanel.js",
                lineNumber: 77,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/components/PresentPanel.js",
        lineNumber: 75,
        columnNumber: 5
    }, this);
}
function CollapsiblePanel({ title, children, defaultOpen = true }) {
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(defaultOpen);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-[var(--surface)] border border-[var(--border)] rounded-xl p-5",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>setOpen((o)=>!o),
                className: "w-full flex items-center justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-sm font-medium text-gray-500 uppercase tracking-wide",
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/components/PresentPanel.js",
                        lineNumber: 97,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-gray-400 text-xs",
                        children: open ? "▲" : "▼"
                    }, void 0, false, {
                        fileName: "[project]/components/PresentPanel.js",
                        lineNumber: 100,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/PresentPanel.js",
                lineNumber: 93,
                columnNumber: 7
            }, this),
            open && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-4",
                children: children
            }, void 0, false, {
                fileName: "[project]/components/PresentPanel.js",
                lineNumber: 102,
                columnNumber: 16
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/PresentPanel.js",
        lineNumber: 92,
        columnNumber: 5
    }, this);
}
function PresentPanel({ players, statusMap, onTogglePresent, onQueuePlayer, loading, // team management passthrough
onAddPlayerToTeam, onRemovePlayerFromTeam, onDeleteTeam, onQueueTeam }) {
    const [presentSearch, setPresentSearch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [absentSearch, setAbsentSearch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const present = players.filter((p)=>p.present);
    const absent = players.filter((p)=>!p.present);
    const filteredPresent = present.filter((p)=>p.name.toLowerCase().includes(presentSearch.toLowerCase()));
    const filteredAbsent = absent.filter((p)=>p.name.toLowerCase().includes(absentSearch.toLowerCase()));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CollapsiblePanel, {
                title: `Present (${present.length})`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "text",
                        value: presentSearch,
                        onChange: (e)=>setPresentSearch(e.target.value),
                        placeholder: "Search present players…",
                        className: "w-full rounded-lg border border-[var(--border)] px-3 py-1.5 text-sm mb-3"
                    }, void 0, false, {
                        fileName: "[project]/components/PresentPanel.js",
                        lineNumber: 135,
                        columnNumber: 9
                    }, this),
                    loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-gray-400",
                        children: "Loading…"
                    }, void 0, false, {
                        fileName: "[project]/components/PresentPanel.js",
                        lineNumber: 143,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(PlayerList, {
                        players: filteredPresent,
                        statusMap: statusMap,
                        onTogglePresent: onTogglePresent,
                        onQueuePlayer: onQueuePlayer,
                        emptyLabel: presentSearch ? "No matches." : "No one marked present yet."
                    }, void 0, false, {
                        fileName: "[project]/components/PresentPanel.js",
                        lineNumber: 145,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/PresentPanel.js",
                lineNumber: 134,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CollapsiblePanel, {
                title: `Absent (${absent.length})`,
                defaultOpen: false,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "text",
                        value: absentSearch,
                        onChange: (e)=>setAbsentSearch(e.target.value),
                        placeholder: "Search absent players…",
                        className: "w-full rounded-lg border border-[var(--border)] px-3 py-1.5 text-sm mb-3"
                    }, void 0, false, {
                        fileName: "[project]/components/PresentPanel.js",
                        lineNumber: 158,
                        columnNumber: 9
                    }, this),
                    loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-gray-400",
                        children: "Loading…"
                    }, void 0, false, {
                        fileName: "[project]/components/PresentPanel.js",
                        lineNumber: 166,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(PlayerList, {
                        players: filteredAbsent,
                        statusMap: null,
                        onTogglePresent: onTogglePresent,
                        onQueuePlayer: onQueuePlayer,
                        emptyLabel: absentSearch ? "No matches." : "Everyone registered is present."
                    }, void 0, false, {
                        fileName: "[project]/components/PresentPanel.js",
                        lineNumber: 168,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/PresentPanel.js",
                lineNumber: 157,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CollapsiblePanel, {
                title: "Team",
                defaultOpen: false,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-h-80 overflow-y-auto",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$TeamManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        players: players,
                        onAddPlayer: onAddPlayerToTeam,
                        onRemovePlayer: onRemovePlayerFromTeam,
                        onDeleteTeam: onDeleteTeam,
                        onQueueTeam: onQueueTeam
                    }, void 0, false, {
                        fileName: "[project]/components/PresentPanel.js",
                        lineNumber: 182,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/PresentPanel.js",
                    lineNumber: 181,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/PresentPanel.js",
                lineNumber: 180,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/PresentPanel.js",
        lineNumber: 133,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/QueueBoard.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>QueueBoard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tiers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/tiers.js [app-ssr] (ecmascript)");
"use client";
;
;
function QueueBoard({ queues, availablePlayers, onRemovePlayer, onAddPlayer, onDeleteQueue, onAddQueue, readOnly = false }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between mb-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-sm font-medium text-gray-500 uppercase tracking-wide",
                        children: "Queues"
                    }, void 0, false, {
                        fileName: "[project]/components/QueueBoard.js",
                        lineNumber: 17,
                        columnNumber: 9
                    }, this),
                    !readOnly && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onAddQueue,
                        className: "text-sm text-[var(--blue)] font-medium",
                        children: "+ New queue"
                    }, void 0, false, {
                        fileName: "[project]/components/QueueBoard.js",
                        lineNumber: 21,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/QueueBoard.js",
                lineNumber: 16,
                columnNumber: 7
            }, this),
            queues.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-sm text-gray-400",
                children: "No one queued yet. Mark players present to fill a queue automatically."
            }, void 0, false, {
                fileName: "[project]/components/QueueBoard.js",
                lineNumber: 31,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 sm:grid-cols-3 gap-4",
                children: queues.map((queue, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `rounded-xl p-4 ${i < 3 ? "bg-yellow-50/50 border border-yellow-200" : "bg-[var(--surface)] border border-[var(--border)]"}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between mb-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "font-medium text-[var(--blue-dark)]",
                                        children: [
                                            "Queue ",
                                            i + 1,
                                            " ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xs font-normal text-gray-400",
                                                children: [
                                                    queue.players.length,
                                                    "/4"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/QueueBoard.js",
                                                lineNumber: 48,
                                                columnNumber: 19
                                            }, this),
                                            queue.players.length === 4 && queue.players[0] && queue.players.every((p)=>p && p.team_id && p.team_id === queue.players[0].team_id) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "ml-2 text-[11px] font-medium rounded-full px-2 py-0.5 bg-purple-100 text-purple-700",
                                                children: queue.players[0].team_id
                                            }, void 0, false, {
                                                fileName: "[project]/components/QueueBoard.js",
                                                lineNumber: 56,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/QueueBoard.js",
                                        lineNumber: 46,
                                        columnNumber: 17
                                    }, this),
                                    !readOnly && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>onDeleteQueue(queue.id),
                                        className: "text-xs text-gray-400 hover:text-red-600",
                                        children: "Delete"
                                    }, void 0, false, {
                                        fileName: "[project]/components/QueueBoard.js",
                                        lineNumber: 62,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/QueueBoard.js",
                                lineNumber: 45,
                                columnNumber: 15
                            }, this),
                            queue.players.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-gray-400 mb-3",
                                children: "Empty."
                            }, void 0, false, {
                                fileName: "[project]/components/QueueBoard.js",
                                lineNumber: 72,
                                columnNumber: 17
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "space-y-1.5 mb-3",
                                children: queue.players.map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        className: "flex items-center justify-between gap-2 text-sm rounded-lg border border-[var(--border)] bg-white px-3 py-1.5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "break-words",
                                                children: [
                                                    p.name,
                                                    " ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-xs text-gray-400",
                                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tiers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TIER_LABELS"][p.skill_level]
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/QueueBoard.js",
                                                        lineNumber: 82,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/QueueBoard.js",
                                                lineNumber: 80,
                                                columnNumber: 23
                                            }, this),
                                            !readOnly && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>onRemovePlayer(queue.id, p.id),
                                                className: "text-xs text-gray-400 hover:text-red-600 shrink-0",
                                                children: "Remove"
                                            }, void 0, false, {
                                                fileName: "[project]/components/QueueBoard.js",
                                                lineNumber: 87,
                                                columnNumber: 25
                                            }, this)
                                        ]
                                    }, p.id, true, {
                                        fileName: "[project]/components/QueueBoard.js",
                                        lineNumber: 76,
                                        columnNumber: 21
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/QueueBoard.js",
                                lineNumber: 74,
                                columnNumber: 17
                            }, this),
                            !readOnly && queue.players.length < 4 && availablePlayers.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                value: "",
                                onChange: (e)=>{
                                    const player = availablePlayers.find((p)=>p.id === e.target.value);
                                    if (player) onAddPlayer(queue.id, player);
                                },
                                className: "w-full rounded-lg border border-[var(--border)] px-2 py-1.5 text-sm bg-white",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "",
                                        children: "+ Add player…"
                                    }, void 0, false, {
                                        fileName: "[project]/components/QueueBoard.js",
                                        lineNumber: 110,
                                        columnNumber: 19
                                    }, this),
                                    availablePlayers.map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: p.id,
                                            children: [
                                                p.name,
                                                " (",
                                                __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tiers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TIER_LABELS"][p.skill_level],
                                                ")"
                                            ]
                                        }, p.id, true, {
                                            fileName: "[project]/components/QueueBoard.js",
                                            lineNumber: 112,
                                            columnNumber: 21
                                        }, this))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/QueueBoard.js",
                                lineNumber: 100,
                                columnNumber: 17
                            }, this)
                        ]
                    }, queue.id, true, {
                        fileName: "[project]/components/QueueBoard.js",
                        lineNumber: 37,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/QueueBoard.js",
                lineNumber: 35,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/QueueBoard.js",
        lineNumber: 15,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/RequestsPanel.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>RequestsPanel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
"use client";
;
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-[var(--surface)] border border-[var(--border)] rounded-xl p-5",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between mb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-sm font-medium text-gray-500 uppercase tracking-wide",
                        children: "Requests"
                    }, void 0, false, {
                        fileName: "[project]/components/RequestsPanel.js",
                        lineNumber: 20,
                        columnNumber: 9
                    }, this),
                    requests.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "inline-flex items-center justify-center text-[11px] font-semibold rounded-full min-w-[1.25rem] h-5 px-1.5 bg-red-600 text-white",
                        children: requests.length
                    }, void 0, false, {
                        fileName: "[project]/components/RequestsPanel.js",
                        lineNumber: 24,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/RequestsPanel.js",
                lineNumber: 19,
                columnNumber: 7
            }, this),
            sorted.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-sm text-gray-400",
                children: "No pending requests."
            }, void 0, false, {
                fileName: "[project]/components/RequestsPanel.js",
                lineNumber: 31,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                className: "space-y-2 max-h-80 overflow-y-auto",
                children: sorted.map((r)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        className: "flex items-center justify-between gap-2 text-sm border border-[var(--border)] rounded-lg px-3 py-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "min-w-0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "break-words font-medium",
                                        children: r.player_name
                                    }, void 0, false, {
                                        fileName: "[project]/components/RequestsPanel.js",
                                        lineNumber: 40,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-gray-400",
                                        children: timeAgo(r.created_at)
                                    }, void 0, false, {
                                        fileName: "[project]/components/RequestsPanel.js",
                                        lineNumber: 41,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/RequestsPanel.js",
                                lineNumber: 39,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-1.5 shrink-0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>onApprove(r),
                                        className: "text-xs font-medium rounded-full px-3 py-1 bg-green-600 text-white hover:bg-green-700 transition-colors",
                                        children: "Approve"
                                    }, void 0, false, {
                                        fileName: "[project]/components/RequestsPanel.js",
                                        lineNumber: 44,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>onDeny(r.id),
                                        className: "text-xs font-medium rounded-full px-3 py-1 bg-gray-100 text-gray-500 hover:bg-gray-200 transition-colors",
                                        children: "Deny"
                                    }, void 0, false, {
                                        fileName: "[project]/components/RequestsPanel.js",
                                        lineNumber: 50,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/RequestsPanel.js",
                                lineNumber: 43,
                                columnNumber: 15
                            }, this)
                        ]
                    }, r.id, true, {
                        fileName: "[project]/components/RequestsPanel.js",
                        lineNumber: 35,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/RequestsPanel.js",
                lineNumber: 33,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/RequestsPanel.js",
        lineNumber: 18,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/TeamManager.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TeamManager
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
function nextTeamLabel(existingIds) {
    const nums = existingIds.map((id)=>parseInt(String(id).replace(/^Team\s*/i, ""), 10)).filter((n)=>!Number.isNaN(n));
    const next = (nums.length ? Math.max(...nums) : 0) + 1;
    return `Team ${next}`;
}
function TeamManager({ players, onAddPlayer, onRemovePlayer, onDeleteTeam }) {
    // Teams with no members yet only exist in local state until a player is added.
    const [pendingTeams, setPendingTeams] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
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
    function handleAddTeam() {
        setPendingTeams((prev)=>[
                ...prev,
                nextTeamLabel(teamIds)
            ]);
    }
    function handleDelete(teamId) {
        setPendingTeams((prev)=>prev.filter((id)=>id !== teamId));
        onDeleteTeam(teamId, teamMap[teamId] || []);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-[var(--surface)] border border-[var(--border)] rounded-xl p-5 mb-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between mb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-sm font-medium text-gray-500 uppercase tracking-wide",
                        children: "Teams"
                    }, void 0, false, {
                        fileName: "[project]/components/TeamManager.js",
                        lineNumber: 41,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleAddTeam,
                        className: "text-sm text-[var(--blue)] font-medium",
                        children: "+ Team"
                    }, void 0, false, {
                        fileName: "[project]/components/TeamManager.js",
                        lineNumber: 44,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/TeamManager.js",
                lineNumber: 40,
                columnNumber: 7
            }, this),
            teamIds.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-sm text-gray-400",
                children: "No teams yet."
            }, void 0, false, {
                fileName: "[project]/components/TeamManager.js",
                lineNumber: 50,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                className: "space-y-4",
                children: teamIds.map((teamId)=>{
                    const members = teamMap[teamId];
                    const presentCount = members.filter((m)=>m.present).length;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        className: "border border-[var(--border)] rounded-lg p-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between mb-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-sm font-medium",
                                        children: [
                                            teamId,
                                            " ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: presentCount === 4 ? "text-green-600" : "text-gray-400",
                                                children: [
                                                    "(",
                                                    presentCount,
                                                    "/4 present)"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/TeamManager.js",
                                                lineNumber: 61,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/TeamManager.js",
                                        lineNumber: 59,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>handleDelete(teamId),
                                        className: "text-xs text-gray-400 hover:text-red-600",
                                        children: "Delete"
                                    }, void 0, false, {
                                        fileName: "[project]/components/TeamManager.js",
                                        lineNumber: 65,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/TeamManager.js",
                                lineNumber: 58,
                                columnNumber: 17
                            }, this),
                            members.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-gray-400 mb-2",
                                children: "No members yet."
                            }, void 0, false, {
                                fileName: "[project]/components/TeamManager.js",
                                lineNumber: 74,
                                columnNumber: 19
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "space-y-1 mb-2",
                                children: members.map((m)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        className: "flex items-center justify-between text-xs",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: m.present ? "" : "text-gray-400",
                                                children: m.name
                                            }, void 0, false, {
                                                fileName: "[project]/components/TeamManager.js",
                                                lineNumber: 79,
                                                columnNumber: 25
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>onRemovePlayer(m.id),
                                                className: "text-gray-400 hover:text-red-600",
                                                children: "Remove"
                                            }, void 0, false, {
                                                fileName: "[project]/components/TeamManager.js",
                                                lineNumber: 82,
                                                columnNumber: 25
                                            }, this)
                                        ]
                                    }, m.id, true, {
                                        fileName: "[project]/components/TeamManager.js",
                                        lineNumber: 78,
                                        columnNumber: 23
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/TeamManager.js",
                                lineNumber: 76,
                                columnNumber: 19
                            }, this),
                            members.length < 4 && unassignedPresent.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                value: "",
                                onChange: (e)=>{
                                    if (e.target.value) onAddPlayer(teamId, e.target.value);
                                },
                                className: "w-full rounded-lg border border-[var(--border)] px-2 py-1 text-xs bg-white",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "",
                                        children: "+ Add player…"
                                    }, void 0, false, {
                                        fileName: "[project]/components/TeamManager.js",
                                        lineNumber: 101,
                                        columnNumber: 21
                                    }, this),
                                    unassignedPresent.map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: p.id,
                                            children: p.name
                                        }, p.id, false, {
                                            fileName: "[project]/components/TeamManager.js",
                                            lineNumber: 103,
                                            columnNumber: 23
                                        }, this))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/TeamManager.js",
                                lineNumber: 94,
                                columnNumber: 19
                            }, this)
                        ]
                    }, teamId, true, {
                        fileName: "[project]/components/TeamManager.js",
                        lineNumber: 57,
                        columnNumber: 15
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/components/TeamManager.js",
                lineNumber: 52,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/TeamManager.js",
        lineNumber: 39,
        columnNumber: 5
    }, this);
}
}),
"[project]/lib/players.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
    "setPlayerTeam",
    ()=>setPlayerTeam
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/supabaseClient.js [app-ssr] (ecmascript)");
;
async function registerPlayer({ name, email, password, skill_level }) {
    const { data: existing } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from("players").select("id").eq("email", email).maybeSingle();
    if (existing) {
        return {
            ok: false,
            error: "An account with this email already exists."
        };
    }
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from("players").insert({
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
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from("players").select("*").eq("email", email).eq("password", password).maybeSingle();
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
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from("players").select("*").order("created_at", {
        ascending: true
    });
    if (error) throw new Error(error.message);
    return data;
}
async function setPlayerPresent(id, present) {
    const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from("players").update({
        present
    }).eq("id", id);
    if (error) throw new Error(error.message);
}
async function setPlayerTeam(id, team_id) {
    const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from("players").update({
        team_id: team_id || null
    }).eq("id", id);
    if (error) throw new Error(error.message);
}
}),
"[project]/lib/requests.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cancelPresenceRequest",
    ()=>cancelPresenceRequest,
    "createPresenceRequest",
    ()=>createPresenceRequest,
    "getAllPresenceRequests",
    ()=>getAllPresenceRequests,
    "getOwnPresenceRequest",
    ()=>getOwnPresenceRequest,
    "resolvePresenceRequest",
    ()=>resolvePresenceRequest,
    "subscribeToAllPresenceRequests",
    ()=>subscribeToAllPresenceRequests,
    "subscribeToOwnPresenceRequest",
    ()=>subscribeToOwnPresenceRequest
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/supabaseClient.js [app-ssr] (ecmascript)");
;
async function createPresenceRequest(playerId, playerName) {
    const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from("player_requests").upsert({
        player_id: playerId,
        player_name: playerName,
        created_at: new Date().toISOString()
    }, {
        onConflict: "player_id"
    });
    if (error) throw new Error(error.message);
}
async function cancelPresenceRequest(playerId) {
    const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from("player_requests").delete().eq("player_id", playerId);
    if (error) throw new Error(error.message);
}
async function resolvePresenceRequest(requestId) {
    const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from("player_requests").delete().eq("id", requestId);
    if (error) throw new Error(error.message);
}
async function getAllPresenceRequests() {
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from("player_requests").select("*").order("created_at", {
        ascending: true
    });
    if (error) throw new Error(error.message);
    return data;
}
async function getOwnPresenceRequest(playerId) {
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from("player_requests").select("*").eq("player_id", playerId).maybeSingle();
    if (error) throw new Error(error.message);
    return data;
}
function subscribeToAllPresenceRequests(onChange) {
    const channel = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].channel("player_requests_admin").on("postgres_changes", {
        event: "*",
        schema: "public",
        table: "player_requests"
    }, onChange).subscribe();
    return ()=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].removeChannel(channel);
}
function subscribeToOwnPresenceRequest(playerId, onChange) {
    const channel = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].channel(`player_requests_own_${playerId}`).on("postgres_changes", {
        event: "*",
        schema: "public",
        table: "player_requests",
        filter: `player_id=eq.${playerId}`
    }, onChange).subscribe();
    return ()=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].removeChannel(channel);
}
}),
"[project]/lib/store.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/supabaseClient.js [app-ssr] (ecmascript)");
// Session, courts, and queue state live in localStorage (single-device demo).
// Registered players and their skill level live in Supabase (see lib/players.js).
const SESSION_KEY = "pickleball_session";
function read(key, fallback) {
    if ("TURBOPACK compile-time truthy", 1) return fallback;
    //TURBOPACK unreachable
    ;
}
function write(key, value) {
    if ("TURBOPACK compile-time truthy", 1) return;
    //TURBOPACK unreachable
    ;
}
function getSession() {
    return read(SESSION_KEY, null);
}
function setSession(session) {
    write(SESSION_KEY, session);
}
function logout() {
    if ("TURBOPACK compile-time truthy", 1) return;
    //TURBOPACK unreachable
    ;
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
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from("app_state").select("courts, queues, duration").eq("id", STATE_ROW_ID).single();
    if (error) throw new Error(error.message);
    return data;
}
async function saveCourts(courts) {
    const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from("app_state").update({
        courts,
        updated_at: new Date().toISOString()
    }).eq("id", STATE_ROW_ID);
    if (error) throw new Error(error.message);
}
async function saveQueues(queues) {
    const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from("app_state").update({
        queues,
        updated_at: new Date().toISOString()
    }).eq("id", STATE_ROW_ID);
    if (error) throw new Error(error.message);
}
async function saveDuration(duration) {
    const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from("app_state").update({
        duration,
        updated_at: new Date().toISOString()
    }).eq("id", STATE_ROW_ID);
    if (error) throw new Error(error.message);
}
function subscribeToAppState(onChange) {
    const channel = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].channel("app_state_changes").on("postgres_changes", {
        event: "UPDATE",
        schema: "public",
        table: "app_state",
        filter: `id=eq.${STATE_ROW_ID}`
    }, (payload)=>onChange(payload.new)).subscribe();
    return ()=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].removeChannel(channel);
}
}),
"[project]/lib/supabaseClient.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "supabase",
    ()=>supabase
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@supabase/supabase-js/dist/index.mjs [app-ssr] (ecmascript) <locals>");
;
const supabaseUrl = ("TURBOPACK compile-time value", "https://dbahximqmrdyvuynrmul.supabase.co");
const supabaseAnonKey = ("TURBOPACK compile-time value", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRiYWh4aW1xbXJkeXZ1eW5ybXVsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODcwMjE3NjEsImV4cCI6MjEwMjU5Nzc2MX0.beAX8gQSL9ftsI8PJaDd61C4yvnMdtoIuv5kWooISVQ");
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createClient"])(supabaseUrl || "https://placeholder.supabase.co", supabaseAnonKey || "placeholder-anon-key");
}),
"[project]/lib/tiers.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
    "buildAutoQueues",
    ()=>buildAutoQueues,
    "tierIndex",
    ()=>tierIndex
]);
const TIERS = [
    "newbie",
    "beginner",
    "novice",
    "intermediate"
];
const TIER_LABELS = {
    newbie: "New",
    beginner: "Beg",
    novice: "Nov",
    intermediate: "Int"
};
const TIER_INDEX = Object.fromEntries(TIERS.map((t, i)=>[
        t,
        i
    ]));
function tierIndex(skillLevel) {
    return TIER_INDEX[skillLevel] ?? 0;
}
function buildAutoQueues(players) {
    const buckets = TIERS.map((tier)=>players.filter((p)=>p.skill_level === tier));
    const groups = [];
    let leftover = [];
    let leftoverRange = null;
    for(let i = 0; i < TIERS.length; i++){
        let pool = buckets[i].map((p)=>({
                ...p,
                tierIdx: i
            }));
        if (leftover.length) {
            const newMin = Math.min(leftoverRange[0], i);
            const newMax = Math.max(leftoverRange[1], i);
            if (newMax - newMin <= 1) {
                pool = [
                    ...leftover,
                    ...pool
                ];
            } else {
                groups.push(leftover);
            }
        }
        while(pool.length >= 4){
            groups.push(pool.splice(0, 4));
        }
        leftover = pool;
        leftoverRange = leftover.length ? [
            Math.min(...leftover.map((p)=>p.tierIdx)),
            Math.max(...leftover.map((p)=>p.tierIdx))
        ] : null;
    }
    if (leftover.length) groups.push(leftover);
    return groups.map((g)=>g.map(({ tierIdx, ...p })=>p));
}
function assignPlayerToQueues(player, queues, makeId) {
    const tIdx = tierIndex(player.skill_level);
    for(let i = 0; i < queues.length; i++){
        const q = queues[i];
        if (q.players.length >= 4) continue;
        if (q.players.length === 0) {
            const next = [
                ...queues
            ];
            next[i] = {
                ...q,
                players: [
                    player
                ]
            };
            return next;
        }
        const tiers = q.players.map((p)=>tierIndex(p.skill_level));
        const newMin = Math.min(...tiers, tIdx);
        const newMax = Math.max(...tiers, tIdx);
        if (newMax - newMin <= 1) {
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
}),
];

//# sourceMappingURL=_204zm5g._.js.map