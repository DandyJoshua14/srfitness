(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/components/ui/card.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Card": (()=>Card),
    "CardContent": (()=>CardContent),
    "CardDescription": (()=>CardDescription),
    "CardFooter": (()=>CardFooter),
    "CardHeader": (()=>CardHeader),
    "CardTitle": (()=>CardTitle)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
;
;
const Card = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("rounded-lg border bg-card text-card-foreground shadow-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 9,
        columnNumber: 3
    }, this));
_c1 = Card;
Card.displayName = "Card";
const CardHeader = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c2 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex flex-col space-y-1.5 p-6", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 24,
        columnNumber: 3
    }, this));
_c3 = CardHeader;
CardHeader.displayName = "CardHeader";
const CardTitle = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c4 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-2xl font-semibold leading-none tracking-tight", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 36,
        columnNumber: 3
    }, this));
_c5 = CardTitle;
CardTitle.displayName = "CardTitle";
const CardDescription = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c6 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-sm text-muted-foreground", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 51,
        columnNumber: 3
    }, this));
_c7 = CardDescription;
CardDescription.displayName = "CardDescription";
const CardContent = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c8 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("p-6 pt-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 63,
        columnNumber: 3
    }, this));
_c9 = CardContent;
CardContent.displayName = "CardContent";
const CardFooter = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c10 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex items-center p-6 pt-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 71,
        columnNumber: 3
    }, this));
_c11 = CardFooter;
CardFooter.displayName = "CardFooter";
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11;
__turbopack_context__.k.register(_c, "Card$React.forwardRef");
__turbopack_context__.k.register(_c1, "Card");
__turbopack_context__.k.register(_c2, "CardHeader$React.forwardRef");
__turbopack_context__.k.register(_c3, "CardHeader");
__turbopack_context__.k.register(_c4, "CardTitle$React.forwardRef");
__turbopack_context__.k.register(_c5, "CardTitle");
__turbopack_context__.k.register(_c6, "CardDescription$React.forwardRef");
__turbopack_context__.k.register(_c7, "CardDescription");
__turbopack_context__.k.register(_c8, "CardContent$React.forwardRef");
__turbopack_context__.k.register(_c9, "CardContent");
__turbopack_context__.k.register(_c10, "CardFooter$React.forwardRef");
__turbopack_context__.k.register(_c11, "CardFooter");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/features/vote/contestant-card.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>ContestantCard)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check-big.js [app-client] (ecmascript) <export default as CheckCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
;
function ContestantCard({ contestant, isVotable, isSelected, onSelect }) {
    const cardProps = {
        onClick: isVotable ? onSelect : undefined,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("overflow-hidden bg-zinc-800 border-2 transition-all duration-200 ease-in-out relative group", isVotable && "cursor-pointer hover:border-amber-400/50 hover:scale-105", isSelected ? "border-amber-400 scale-105 shadow-lg shadow-amber-400/20" : "border-transparent", !isVotable && "border-zinc-700")
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
        ...cardProps,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                className: "p-0 aspect-square relative",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        src: contestant.image,
                        alt: contestant.name,
                        layout: "fill",
                        objectFit: contestant.objectFit || 'cover',
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("transition-transform duration-300", isVotable && "group-hover:scale-110"),
                        style: {
                            objectPosition: contestant.objectPosition || 'center'
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/features/vote/contestant-card.tsx",
                        lineNumber: 39,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"
                    }, void 0, false, {
                        fileName: "[project]/src/components/features/vote/contestant-card.tsx",
                        lineNumber: 47,
                        columnNumber: 17
                    }, this),
                    isSelected && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-2 right-2 bg-amber-400 text-black rounded-full h-6 w-6 flex items-center justify-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                            className: "h-4 w-4"
                        }, void 0, false, {
                            fileName: "[project]/src/components/features/vote/contestant-card.tsx",
                            lineNumber: 50,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/features/vote/contestant-card.tsx",
                        lineNumber: 49,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/features/vote/contestant-card.tsx",
                lineNumber: 38,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardFooter"], {
                className: "p-2 bg-zinc-900/80 absolute bottom-0 w-full",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center w-full",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "font-bold text-sm text-white truncate",
                            children: contestant.name
                        }, void 0, false, {
                            fileName: "[project]/src/components/features/vote/contestant-card.tsx",
                            lineNumber: 56,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xs text-amber-400 truncate",
                            children: contestant.category
                        }, void 0, false, {
                            fileName: "[project]/src/components/features/vote/contestant-card.tsx",
                            lineNumber: 57,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/features/vote/contestant-card.tsx",
                    lineNumber: 55,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/features/vote/contestant-card.tsx",
                lineNumber: 54,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/features/vote/contestant-card.tsx",
        lineNumber: 37,
        columnNumber: 9
    }, this);
}
_c = ContestantCard;
var _c;
__turbopack_context__.k.register(_c, "ContestantCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/ui/select.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Select": (()=>Select),
    "SelectContent": (()=>SelectContent),
    "SelectGroup": (()=>SelectGroup),
    "SelectItem": (()=>SelectItem),
    "SelectLabel": (()=>SelectLabel),
    "SelectScrollDownButton": (()=>SelectScrollDownButton),
    "SelectScrollUpButton": (()=>SelectScrollUpButton),
    "SelectSeparator": (()=>SelectSeparator),
    "SelectTrigger": (()=>SelectTrigger),
    "SelectValue": (()=>SelectValue)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-select/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-up.js [app-client] (ecmascript) <export default as ChevronUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
;
const Select = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"];
const SelectGroup = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"];
const SelectValue = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Value"];
const SelectTrigger = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c = ({ className, children, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Trigger"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1", className),
        ...props,
        children: [
            children,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                asChild: true,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                    className: "h-4 w-4 opacity-50"
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/select.tsx",
                    lineNumber: 29,
                    columnNumber: 7
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/ui/select.tsx",
                lineNumber: 28,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/select.tsx",
        lineNumber: 19,
        columnNumber: 3
    }, this));
_c1 = SelectTrigger;
SelectTrigger.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Trigger"].displayName;
const SelectScrollUpButton = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollUpButton"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex cursor-default items-center justify-center py-1", className),
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUp$3e$__["ChevronUp"], {
            className: "h-4 w-4"
        }, void 0, false, {
            fileName: "[project]/src/components/ui/select.tsx",
            lineNumber: 47,
            columnNumber: 5
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ui/select.tsx",
        lineNumber: 39,
        columnNumber: 3
    }, this));
_c2 = SelectScrollUpButton;
SelectScrollUpButton.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollUpButton"].displayName;
const SelectScrollDownButton = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollDownButton"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex cursor-default items-center justify-center py-1", className),
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
            className: "h-4 w-4"
        }, void 0, false, {
            fileName: "[project]/src/components/ui/select.tsx",
            lineNumber: 64,
            columnNumber: 5
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ui/select.tsx",
        lineNumber: 56,
        columnNumber: 3
    }, this));
_c3 = SelectScrollDownButton;
SelectScrollDownButton.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollDownButton"].displayName;
const SelectContent = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c4 = ({ className, children, position = "popper", ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Portal"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"], {
            ref: ref,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1", className),
            position: position,
            ...props,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SelectScrollUpButton, {}, void 0, false, {
                    fileName: "[project]/src/components/ui/select.tsx",
                    lineNumber: 86,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Viewport"], {
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("p-1", position === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"),
                    children: children
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/select.tsx",
                    lineNumber: 87,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SelectScrollDownButton, {}, void 0, false, {
                    fileName: "[project]/src/components/ui/select.tsx",
                    lineNumber: 96,
                    columnNumber: 7
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ui/select.tsx",
            lineNumber: 75,
            columnNumber: 5
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ui/select.tsx",
        lineNumber: 74,
        columnNumber: 3
    }, this));
_c5 = SelectContent;
SelectContent.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"].displayName;
const SelectLabel = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c6 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("py-1.5 pl-8 pr-2 text-sm font-semibold", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/select.tsx",
        lineNumber: 106,
        columnNumber: 3
    }, this));
_c7 = SelectLabel;
SelectLabel.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"].displayName;
const SelectItem = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c8 = ({ className, children, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Item"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", className),
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ItemIndicator"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                        className: "h-4 w-4"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/select.tsx",
                        lineNumber: 128,
                        columnNumber: 9
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/select.tsx",
                    lineNumber: 127,
                    columnNumber: 7
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/ui/select.tsx",
                lineNumber: 126,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ItemText"], {
                children: children
            }, void 0, false, {
                fileName: "[project]/src/components/ui/select.tsx",
                lineNumber: 132,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/select.tsx",
        lineNumber: 118,
        columnNumber: 3
    }, this));
_c9 = SelectItem;
SelectItem.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Item"].displayName;
const SelectSeparator = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c10 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Separator"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("-mx-1 my-1 h-px bg-muted", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/select.tsx",
        lineNumber: 141,
        columnNumber: 3
    }, this));
_c11 = SelectSeparator;
SelectSeparator.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Separator"].displayName;
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11;
__turbopack_context__.k.register(_c, "SelectTrigger$React.forwardRef");
__turbopack_context__.k.register(_c1, "SelectTrigger");
__turbopack_context__.k.register(_c2, "SelectScrollUpButton");
__turbopack_context__.k.register(_c3, "SelectScrollDownButton");
__turbopack_context__.k.register(_c4, "SelectContent$React.forwardRef");
__turbopack_context__.k.register(_c5, "SelectContent");
__turbopack_context__.k.register(_c6, "SelectLabel$React.forwardRef");
__turbopack_context__.k.register(_c7, "SelectLabel");
__turbopack_context__.k.register(_c8, "SelectItem$React.forwardRef");
__turbopack_context__.k.register(_c9, "SelectItem");
__turbopack_context__.k.register(_c10, "SelectSeparator$React.forwardRef");
__turbopack_context__.k.register(_c11, "SelectSeparator");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/data:9b701a [app-client] (ecmascript) <text/javascript>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
/* __next_internal_action_entry_do_not_use__ [{"4074337a044cd269bb88fa2d15f93e38f7b350b297":"sendNominationEmail"},"src/app/actions.ts",""] */ __turbopack_context__.s({
    "sendNominationEmail": (()=>sendNominationEmail)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
"use turbopack no side effects";
;
var sendNominationEmail = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("4074337a044cd269bb88fa2d15f93e38f7b350b297", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "sendNominationEmail"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYWN0aW9ucy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJcbid1c2Ugc2VydmVyJztcblxuaW1wb3J0IHsgeiB9IGZyb20gJ3pvZCc7XG5pbXBvcnQgeyBhZGRWb3RlIH0gZnJvbSAnQC9zZXJ2aWNlcy9maXJlc3RvcmUnO1xuXG4vLyBFeHBsaWNpdGx5IHJlYWQgZW52aXJvbm1lbnQgdmFyaWFibGVzIGF0IHRoZSB0b3AgbGV2ZWxcbmNvbnN0IFdFTUFfQUxBVF9TVUJTQ1JJUFRJT05fS0VZID0gcHJvY2Vzcy5lbnYuV0VNQV9BTEFUX1NVQlNDUklQVElPTl9LRVk7XG5jb25zdCBXRU1BX0FMQVRfU09VUkNFX0FDQ09VTlQgPSBwcm9jZXNzLmVudi5XRU1BX0FMQVRfU09VUkNFX0FDQ09VTlQ7XG5jb25zdCBXRU1BX0FMQVRfQ0hBTk5FTF9JRCA9IHByb2Nlc3MuZW52LldFTUFfQUxBVF9DSEFOTkVMX0lEO1xuY29uc3QgTkVYVF9QVUJMSUNfQkFTRV9VUkwgPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19CQVNFX1VSTDtcblxuXG5jb25zdCBub21pbmF0aW9uRm9ybVNjaGVtYSA9IHoub2JqZWN0KHtcbiAgY2F0ZWdvcnk6IHouc3RyaW5nKCksXG4gIG5vbWluZWVOYW1lOiB6LnN0cmluZygpLFxuICBub21pbmVlUGhvbmU6IHouc3RyaW5nKCksXG4gIG5vbWluYXRpb25SZWFzb246IHouc3RyaW5nKCksXG4gIG5vbWluYXRvck5hbWU6IHouc3RyaW5nKCksXG4gIG5vbWluYXRvclBob25lOiB6LnN0cmluZygpLFxufSk7XG5cbmNvbnN0IHZvdGVTY2hlbWEgPSB6Lm9iamVjdCh7XG4gIGNvbnRlc3RhbnRJZDogei5zdHJpbmcoKSxcbiAgY29udGVzdGFudE5hbWU6IHouc3RyaW5nKCksXG4gIGNvbnRlc3RhbnRDYXRlZ29yeTogei5zdHJpbmcoKSxcbiAgbnVtYmVyT2ZWb3Rlczogei5udW1iZXIoKS5pbnQoKS5wb3NpdGl2ZSgpLFxufSk7XG5cbmNvbnN0IHdlbWFQYXltZW50U3RhdHVzU2NoZW1hID0gei5vYmplY3Qoe1xuICBjaGFubmVsSWQ6IHouc3RyaW5nKCksXG4gIHRyYW5zYWN0aW9uUmVmZXJlbmNlOiB6LnN0cmluZygpLFxufSk7XG5cbmNvbnN0IHdlbWFQYXltZW50UmVxdWVzdFNjaGVtYSA9IHoub2JqZWN0KHtcbiAgYW1vdW50OiB6Lm51bWJlcigpLFxuICBjb250ZXN0YW50SWQ6IHouc3RyaW5nKCksXG4gIGNvbnRlc3RhbnROYW1lOiB6LnN0cmluZygpLFxuICBjb250ZXN0YW50Q2F0ZWdvcnk6IHouc3RyaW5nKCksXG4gIG51bWJlck9mVm90ZXM6IHoubnVtYmVyKCksXG59KTtcblxuY29uc3Qgd2VtYVBheW1lbnRWYWxpZGF0aW9uU2NoZW1hID0gei5vYmplY3Qoe1xuICBjaGFubmVsSWQ6IHouc3RyaW5nKCksXG4gIHRyYW5zYWN0aW9uUmVmZXJlbmNlOiB6LnN0cmluZygpLFxuICBwbGF0Zm9ybVRyYW5zYWN0aW9uUmVmZXJlbmNlOiB6LnN0cmluZygpLFxuICBvdHA6IHouc3RyaW5nKCksXG59KTtcblxuY29uc3QgcmVtaXRhUGF5bWVudFJlcXVlc3RTY2hlbWEgPSB6Lm9iamVjdCh7XG4gICAgYW1vdW50OiB6Lm51bWJlcigpLFxuICAgIGNoYXJnZTogei5udW1iZXIoKSxcbiAgICB0cmFuc2FjdGlvblJlZmVyZW5jZTogei5zdHJpbmcoKSxcbiAgICBjdXN0b21lckVtYWlsOiB6LnN0cmluZygpLmVtYWlsKCksXG4gICAgY3VzdG9tZXJOYW1lOiB6LnN0cmluZygpLFxuICAgIGN1c3RvbWVyUGhvbmVOdW1iZXI6IHouc3RyaW5nKCksXG4gICAgZGVzY3JpcHRpb246IHouc3RyaW5nKCksXG59KTtcblxuY29uc3QgcmVtaXRhUmVjZWlwdFNjaGVtYSA9IHoub2JqZWN0KHtcbiAgcnJyOiB6LnN0cmluZygpLFxufSk7XG5cbmNvbnN0IHJlbWl0YVJyclZhbGlkYXRpb25TY2hlbWEgPSB6Lm9iamVjdCh7XG4gIHJycjogei5zdHJpbmcoKSxcbiAgY2hhbm5lbElkOiB6LnN0cmluZygpLFxufSk7XG5cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNlbmROb21pbmF0aW9uRW1haWwoZm9ybURhdGE6IHouaW5mZXI8dHlwZW9mIG5vbWluYXRpb25Gb3JtU2NoZW1hPikge1xuICBcbiAgLy8gMS4gVmFsaWRhdGUgdGhlIGRhdGEgb24gdGhlIHNlcnZlclxuICBjb25zdCB2YWxpZGF0ZWRGaWVsZHMgPSBub21pbmF0aW9uRm9ybVNjaGVtYS5zYWZlUGFyc2UoZm9ybURhdGEpO1xuICBpZiAoIXZhbGlkYXRlZEZpZWxkcy5zdWNjZXNzKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgZXJyb3I6ICdJbnZhbGlkIGZvcm0gZGF0YS4nLFxuICAgIH07XG4gIH1cblxuICBjb25zdCB7IGNhdGVnb3J5LCBub21pbmVlTmFtZSwgbm9taW5lZVBob25lLCBub21pbmF0aW9uUmVhc29uLCBub21pbmF0b3JOYW1lLCBub21pbmF0b3JQaG9uZSB9ID0gdmFsaWRhdGVkRmllbGRzLmRhdGE7XG5cbiAgLy8gMi4gTG9nIHRoZSBkYXRhIHRvIHRoZSBzZXJ2ZXIgY29uc29sZSAodGhpcyB3aWxsIHdvcmsgd2l0aG91dCBhbnkgc2V0dXApXG4gIGNvbnNvbGUubG9nKCdOZXcgTm9taW5hdGlvbiBSZWNlaXZlZDonKTtcbiAgY29uc29sZS5sb2coe1xuICAgIGNhdGVnb3J5LFxuICAgIG5vbWluZWVOYW1lLFxuICAgIG5vbWluZWVQaG9uZSxcbiAgICBub21pbmF0aW9uUmVhc29uLFxuICAgIG5vbWluYXRvck5hbWUsXG4gICAgbm9taW5hdG9yUGhvbmUsXG4gIH0pO1xuXG4gIHRyeSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ0VtYWlsIHNlbmRpbmcgZmFpbGVkOicsIGVycm9yKTtcbiAgICByZXR1cm4ge1xuICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICBlcnJvcjogJ1NvcnJ5LCB3ZSBjb3VsZG5cXCd0IHN1Ym1pdCB5b3VyIG5vbWluYXRpb24gYXQgdGhpcyB0aW1lLicsXG4gICAgfTtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcmVjb3JkVm90ZSh2b3RlRGF0YTogei5pbmZlcjx0eXBlb2Ygdm90ZVNjaGVtYT4pIHtcbiAgY29uc3QgdmFsaWRhdGVkRmllbGRzID0gdm90ZVNjaGVtYS5zYWZlUGFyc2Uodm90ZURhdGEpO1xuXG4gIGlmICghdmFsaWRhdGVkRmllbGRzLnN1Y2Nlc3MpIHtcbiAgICByZXR1cm4ge1xuICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICBlcnJvcjogJ0ludmFsaWQgdm90ZSBkYXRhIHByb3ZpZGVkLicsXG4gICAgfTtcbiAgfVxuXG4gIHRyeSB7XG4gICAgYXdhaXQgYWRkVm90ZSh2YWxpZGF0ZWRGaWVsZHMuZGF0YSk7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gcmVjb3JkIHZvdGUgaW4gU2VydmVyIEFjdGlvbjogXCIsIGVycm9yKTtcbiAgICByZXR1cm4ge1xuICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICBlcnJvcjogJ1RoZXJlIHdhcyBhbiBlcnJvciByZWNvcmRpbmcgeW91ciB2b3RlIHRvIHRoZSBkYXRhYmFzZS4nXG4gICAgfTtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlV2VtYUFsYXRQYXltZW50KHBheW1lbnREYXRhOiB6LmluZmVyPHR5cGVvZiB3ZW1hUGF5bWVudFJlcXVlc3RTY2hlbWE+KSB7XG4gIGNvbnN0IHZhbGlkYXRlZEZpZWxkcyA9IHdlbWFQYXltZW50UmVxdWVzdFNjaGVtYS5zYWZlUGFyc2UocGF5bWVudERhdGEpO1xuICBpZiAoIXZhbGlkYXRlZEZpZWxkcy5zdWNjZXNzKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnSW52YWxpZCBwYXltZW50IGRhdGEgcHJvdmlkZWQuJyB9O1xuICB9XG4gIFxuICBpZiAoIVdFTUFfQUxBVF9TVUJTQ1JJUFRJT05fS0VZIHx8ICFXRU1BX0FMQVRfU09VUkNFX0FDQ09VTlQgfHwgIVdFTUFfQUxBVF9DSEFOTkVMX0lEKSB7XG4gICAgY29uc29sZS5lcnJvcihcIldlbWEgQWxhdCBlbnZpcm9ubWVudCB2YXJpYWJsZXMgYXJlIG5vdCBzZXQuXCIpO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJQYXltZW50IGdhdGV3YXkgaXMgbm90IGNvbmZpZ3VyZWQgY29ycmVjdGx5LlwiIH07XG4gIH1cblxuICBjb25zdCB7IGFtb3VudCwgY29udGVzdGFudElkLCBjb250ZXN0YW50TmFtZSwgY29udGVzdGFudENhdGVnb3J5LCBudW1iZXJPZlZvdGVzIH0gPSB2YWxpZGF0ZWRGaWVsZHMuZGF0YTtcblxuICBjb25zdCB0cmFuc2FjdGlvblJlZmVyZW5jZSA9IGBTUkYtVk9URS0ke2NvbnRlc3RhbnRJZH0tJHtEYXRlLm5vdygpfWA7XG4gIGNvbnN0IG5hcnJhdGlvbiA9IGBWb3RlIGZvciAke2NvbnRlc3RhbnROYW1lfSBpbiAke2NvbnRlc3RhbnRDYXRlZ29yeX1gO1xuXG4gIGNvbnN0IGJvZHkgPSB7XG4gICAgYW1vdW50OiBhbW91bnQsXG4gICAgc291cmNlQWNjb3VudE51bWJlcjogV0VNQV9BTEFUX1NPVVJDRV9BQ0NPVU5ULFxuICAgIGNoYW5uZWxJZDogV0VNQV9BTEFUX0NIQU5ORUxfSUQsXG4gICAgbmFycmF0aW9uOiBuYXJyYXRpb24sXG4gICAgdHJhbnNhY3Rpb25SZWZlcmVuY2U6IHRyYW5zYWN0aW9uUmVmZXJlbmNlXG4gIH07XG5cbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCdodHRwczovL3dlbWEtYWxhdGRldi1hcGltZ3QuYXp1cmUtYXBpLm5ldC9hbGF0LXBheS9hcGkvRWNvbW1lcmNlVHJhbnNmZXIvdHJhbnNmZXItZnVuZC1yZXF1ZXN0Jywge1xuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShib2R5KSxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgJ0NhY2hlLUNvbnRyb2wnOiAnbm8tY2FjaGUnLFxuICAgICAgICAnT2NwLUFwaW0tU3Vic2NyaXB0aW9uLUtleSc6IFdFTUFfQUxBVF9TVUJTQ1JJUFRJT05fS0VZLFxuICAgICAgfVxuICAgIH0pO1xuICAgIFxuICAgIGNvbnN0IHJlc3BvbnNlVGV4dCA9IGF3YWl0IHJlc3BvbnNlLnRleHQoKTtcbiAgICBjb25zb2xlLmxvZyhcIldlbWEgQWxhdCB0cmFuc2Zlci1mdW5kLXJlcXVlc3QgcmVzcG9uc2Ugc3RhdHVzOlwiLCByZXNwb25zZS5zdGF0dXMpO1xuICAgIGNvbnNvbGUubG9nKFwiV2VtYSBBbGF0IHRyYW5zZmVyLWZ1bmQtcmVxdWVzdCByZXNwb25zZSBib2R5OlwiLCByZXNwb25zZVRleHQpO1xuXG4gICAgaWYgKHJlc3BvbnNlLm9rKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCBkYXRhID0gSlNPTi5wYXJzZShyZXNwb25zZVRleHQpO1xuICAgICAgICAgICAgLy8gQXNzdW1pbmcgdGhlIHBsYXRmb3JtVHJhbnNhY3Rpb25SZWZlcmVuY2UgaXMgaW4gdGhlIHJlc3BvbnNlIGJvZHkuXG4gICAgICAgICAgICAvLyBUaGlzIG1heSBuZWVkIHRvIGFkanVzdG1lbnQgYmFzZWQgb24gdGhlIGFjdHVhbCBBUEkgcmVzcG9uc2Ugc3RydWN0dXJlLlxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiB0cnVlLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiUGF5bWVudCBpbml0aWF0ZWQuIFBsZWFzZSBlbnRlciBPVFAuXCIsXG4gICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgICBwbGF0Zm9ybVRyYW5zYWN0aW9uUmVmZXJlbmNlOiBkYXRhLnBsYXRmb3JtVHJhbnNhY3Rpb25SZWZlcmVuY2UsIC8vIEFkanVzdCB0aGlzIGtleSBiYXNlZCBvbiBhY3R1YWwgcmVzcG9uc2VcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNhY3Rpb25SZWZlcmVuY2U6IHRyYW5zYWN0aW9uUmVmZXJlbmNlLFxuICAgICAgICAgICAgICAgICAgICBjaGFubmVsSWQ6IFdFTUFfQUxBVF9DSEFOTkVMX0lELFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gcGFyc2UgSlNPTiBmcm9tIFdlbWEgQWxhdCByZXNwb25zZVwiLCBlKTtcbiAgICAgICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiUmVjZWl2ZWQgYW4gdW5yZWFkYWJsZSByZXNwb25zZSBmcm9tIHBheW1lbnQgZ2F0ZXdheS5cIiB9O1xuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGBQYXltZW50IGluaXRpYXRpb24gZmFpbGVkOiAke3Jlc3BvbnNlVGV4dH1gLCBzdGF0dXM6IHJlc3BvbnNlLnN0YXR1cyB9O1xuICAgIH1cblxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBjYWxsaW5nIFdlbWEgQWxhdCBBUEk6XCIsIGVycm9yKTtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiQ291bGQgbm90IGNvbm5lY3QgdG8gdGhlIHBheW1lbnQgZ2F0ZXdheS5cIiB9O1xuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB2YWxpZGF0ZVdlbWFBbGF0UGF5bWVudCh2YWxpZGF0aW9uRGF0YTogei5pbmZlcjx0eXBlb2Ygd2VtYVBheW1lbnRWYWxpZGF0aW9uU2NoZW1hPikge1xuICAgIGNvbnN0IHZhbGlkYXRlZEZpZWxkcyA9IHdlbWFQYXltZW50VmFsaWRhdGlvblNjaGVtYS5zYWZlUGFyc2UodmFsaWRhdGlvbkRhdGEpO1xuICAgIGlmICghdmFsaWRhdGVkRmllbGRzLnN1Y2Nlc3MpIHtcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnSW52YWxpZCB2YWxpZGF0aW9uIGRhdGEgcHJvdmlkZWQuJyB9O1xuICAgIH1cblxuICAgIGlmICghV0VNQV9BTEFUX1NVQlNDUklQVElPTl9LRVkpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIldlbWEgQWxhdCBzdWJzY3JpcHRpb24ga2V5IGlzIG5vdCBzZXQuXCIpO1xuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiUGF5bWVudCBnYXRld2F5IGlzIG5vdCBjb25maWd1cmVkIGNvcnJlY3RseS5cIiB9O1xuICAgIH1cblxuICAgIGNvbnN0IHsgY2hhbm5lbElkLCB0cmFuc2FjdGlvblJlZmVyZW5jZSwgcGxhdGZvcm1UcmFuc2FjdGlvblJlZmVyZW5jZSwgb3RwIH0gPSB2YWxpZGF0ZWRGaWVsZHMuZGF0YTtcblxuICAgIGNvbnN0IGJvZHkgPSB7XG4gICAgICAgIGNoYW5uZWxJZCxcbiAgICAgICAgdHJhbnNhY3Rpb25SZWZlcmVuY2UsXG4gICAgICAgIHBsYXRmb3JtVHJhbnNhY3Rpb25SZWZlcmVuY2UsXG4gICAgICAgIG90cCxcbiAgICB9O1xuXG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly93ZW1hLWFsYXRkZXYtYXBpbWd0LmF6dXJlLWFwaS5uZXQvYWxhdC1wYXkvYXBpL0Vjb21tZXJjZVRyYW5zZmVyL3RyYW5zZmVyLWZ1bmQtdmFsaWRhdGlvbicsIHtcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoYm9keSksXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICAgICAnQ2FjaGUtQ29udHJvbCc6ICduby1jYWNoZScsXG4gICAgICAgICAgICAgICAgJ09jcC1BcGltLVN1YnNjcmlwdGlvbi1LZXknOiBXRU1BX0FMQVRfU1VCU0NSSVBUSU9OX0tFWSxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgcmVzcG9uc2VUZXh0ID0gYXdhaXQgcmVzcG9uc2UudGV4dCgpO1xuICAgICAgICBjb25zb2xlLmxvZyhcIldlbWEgQWxhdCB0cmFuc2Zlci1mdW5kLXZhbGlkYXRpb24gcmVzcG9uc2Ugc3RhdHVzOlwiLCByZXNwb25zZS5zdGF0dXMpO1xuICAgICAgICBjb25zb2xlLmxvZyhcIldlbWEgQWxhdCB0cmFuc2Zlci1mdW5kLXZhbGlkYXRpb24gcmVzcG9uc2UgYm9keTpcIiwgcmVzcG9uc2VUZXh0KTtcbiAgICAgICAgXG4gICAgICAgIGlmKHJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBtZXNzYWdlOiBcIlBheW1lbnQgdmFsaWRhdGVkIHN1Y2Nlc3NmdWxseSFcIiB9O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBgT1RQIHZhbGlkYXRpb24gZmFpbGVkOiAke3Jlc3BvbnNlVGV4dH1gIH07XG4gICAgICAgIH1cblxuICAgIH0gY2F0Y2goZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGNhbGxpbmcgV2VtYSBBbGF0IHZhbGlkYXRpb24gQVBJOlwiLCBlcnJvcik7XG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJDb3VsZCBub3QgY29ubmVjdCB0byB0aGUgcGF5bWVudCBnYXRld2F5IGZvciB2YWxpZGF0aW9uLlwiIH07XG4gICAgfVxufVxuXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjaGVja1dlbWFBbGF0VHJhbnNhY3Rpb25TdGF0dXMoc3RhdHVzRGF0YTogei5pbmZlcjx0eXBlb2Ygd2VtYVBheW1lbnRTdGF0dXNTY2hlbWE+KSB7XG4gICAgY29uc3QgdmFsaWRhdGVkRmllbGRzID0gd2VtYVBheW1lbnRTdGF0dXNTY2hlbWEuc2FmZVBhcnNlKHN0YXR1c0RhdGEpO1xuICAgIGlmICghdmFsaWRhdGVkRmllbGRzLnN1Y2Nlc3MpIHtcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnSW52YWxpZCB0cmFuc2FjdGlvbiBkYXRhJyB9O1xuICAgIH1cblxuICAgIGNvbnN0IHsgY2hhbm5lbElkLCB0cmFuc2FjdGlvblJlZmVyZW5jZSB9ID0gdmFsaWRhdGVkRmllbGRzLmRhdGE7XG5cbiAgICBjb25zdCB3ZW1hQWxhdFVybCA9IGBodHRwczovL3dlbWEtYWxhdGRldi1hcGltZ3QuYXp1cmUtYXBpLm5ldC9hbGF0LXBheS9hcGkvRWNvbW1lcmNlVHJhbnNmZXIvQ2hlY2tUcmFuc2FjdGlvblN0YXR1cy8ke2NoYW5uZWxJZH0vJHt0cmFuc2FjdGlvblJlZmVyZW5jZX1gO1xuXG4gICAgaWYgKCFXRU1BX0FMQVRfU1VCU0NSSVBUSU9OX0tFWSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiV2VtYSBBbGF0IHN1YnNjcmlwdGlvbiBrZXkgaXMgbm90IHNldCBpbiBlbnZpcm9ubWVudCB2YXJpYWJsZXMuXCIpO1xuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiUGF5bWVudCBnYXRld2F5IGlzIG5vdCBjb25maWd1cmVkLlwiIH07XG4gICAgfVxuICAgIFxuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2god2VtYUFsYXRVcmwsIHtcbiAgICAgICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgJ0NhY2hlLUNvbnRyb2wnOiAnbm8tY2FjaGUnLFxuICAgICAgICAgICAgICAgICdPY3AtQXBpbS1TdWJzY3JpcHRpb24tS2V5JzogV0VNQV9BTEFUX1NVQlNDUklQVElPTl9LRVksXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IHJlc3VsdFRleHQgPSBhd2FpdCByZXNwb25zZS50ZXh0KCk7XG4gICAgICAgIGNvbnN0IHJlc3VsdFN0YXR1cyA9IHJlc3BvbnNlLnN0YXR1cztcbiAgICAgICAgY29uc29sZS5sb2coJ1dlbWEgQWxhdCBTdGF0dXM6JywgcmVzdWx0U3RhdHVzKTtcbiAgICAgICAgY29uc29sZS5sb2coJ1dlbWEgQWxhdCBSZXNwb25zZTonLCByZXN1bHRUZXh0KTtcblxuICAgICAgICBpZiAocmVzcG9uc2Uub2spIHtcbiAgICAgICAgICAgIC8vIEFzc3VtaW5nIGEgMjAwIE9LIHJlc3BvbnNlIG1lYW5zIHN1Y2Nlc3MuIFlvdSBtaWdodCBuZWVkIHRvIGFkanVzdCBiYXNlZCBvbiB0aGUgYWN0dWFsIEFQSSByZXNwb25zZSBjb250ZW50LlxuICAgICAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgc3RhdHVzOiByZXN1bHRTdGF0dXMsIGRhdGE6IHJlc3VsdFRleHQgfTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogYEZhaWxlZCB0byBjaGVjayB0cmFuc2FjdGlvbiBzdGF0dXM6ICR7cmVzdWx0VGV4dH1gLCBzdGF0dXM6IHJlc3VsdFN0YXR1cyB9O1xuICAgICAgICB9XG5cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgY2FsbGluZyBXZW1hIEFsYXQgQVBJOlwiLCBlcnJvcik7XG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJDb3VsZCBub3QgY29ubmVjdCB0byB0aGUgcGF5bWVudCBnYXRld2F5LlwiIH07XG4gICAgfVxufVxuXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVSZW1pdGFQYXltZW50KHBheW1lbnREYXRhOiB6LmluZmVyPHR5cGVvZiByZW1pdGFQYXltZW50UmVxdWVzdFNjaGVtYT4pIHtcbiAgICBjb25zdCB2YWxpZGF0ZWRGaWVsZHMgPSByZW1pdGFQYXltZW50UmVxdWVzdFNjaGVtYS5zYWZlUGFyc2UocGF5bWVudERhdGEpO1xuICAgIGlmICghdmFsaWRhdGVkRmllbGRzLnN1Y2Nlc3MpIHtcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIkludmFsaWQgUmVtaXRhIHBheW1lbnQgZGF0YS5cIiB9O1xuICAgIH1cblxuICAgIC8vIE5PVEU6IFRoaXMgZW5kcG9pbnQgZG9lcyBub3Qgc2VlbSB0byByZXF1aXJlIHRoZSBPY3AtQXBpbS1TdWJzY3JpcHRpb24tS2V5IGJhc2VkIG9uIHRoZSB1c2VyJ3Mgc25pcHBldC5cbiAgICAvLyBUaGlzIG1heSBuZWVkIHRvIGJlIGFkanVzdGVkLlxuXG4gICAgY29uc3QgeyBhbW91bnQsIGNoYXJnZSwgdHJhbnNhY3Rpb25SZWZlcmVuY2UsIGN1c3RvbWVyRW1haWwsIGN1c3RvbWVyTmFtZSwgY3VzdG9tZXJQaG9uZU51bWJlciwgZGVzY3JpcHRpb24gfSA9IHZhbGlkYXRlZEZpZWxkcy5kYXRhO1xuXG4gICAgLy8gTk9URTogTWFueSBmaWVsZHMgYXJlIG1pc3NpbmcgZnJvbSB0aGUgaW5wdXQgYW5kIGFyZSBoYXJkY29kZWQgYXMgcGxhY2Vob2xkZXJzLlxuICAgIC8vIFRoaXMgZnVuY3Rpb24gd2lsbCBuZWVkIHRvIGJlIHVwZGF0ZWQgd2l0aCByZWFsIGRhdGEuXG4gICAgY29uc3QgYm9keSA9IHtcbiAgICAgICAgY2hhbm5lbElkOiBcInN0cmluZ1wiLCAvLyBQbGFjZWhvbGRlclxuICAgICAgICBjaWY6IFwic3RyaW5nXCIsIC8vIFBsYWNlaG9sZGVyXG4gICAgICAgIGN1c3RvbWVyQWNjb3VudDogXCJzdHJpbmdcIiwgLy8gUGxhY2Vob2xkZXJcbiAgICAgICAgYW1vdW50OiBhbW91bnQsXG4gICAgICAgIGNoYXJnZTogY2hhcmdlLFxuICAgICAgICB0cmFuc2FjdGlvblJlZmVyZW5jZTogdHJhbnNhY3Rpb25SZWZlcmVuY2UsXG4gICAgICAgIGN1c3RvbWVyRW1haWw6IGN1c3RvbWVyRW1haWwsXG4gICAgICAgIGN1c3RvbWVyUGhvbmVOdW1iZXI6IGN1c3RvbWVyUGhvbmVOdW1iZXIsXG4gICAgICAgIGN1c3RvbWVyTmFtZTogY3VzdG9tZXJOYW1lLFxuICAgICAgICBycnI6IFwic3RyaW5nXCIsIC8vIFBsYWNlaG9sZGVyXG4gICAgICAgIHBheWVyRW1haWw6IGN1c3RvbWVyRW1haWwsIC8vIEFzc3VtaW5nIHBheWVyIGlzIHRoZSBjdXN0b21lclxuICAgICAgICBwYXllck5hbWU6IGN1c3RvbWVyTmFtZSwgLy8gQXNzdW1pbmcgcGF5ZXIgaXMgdGhlIGN1c3RvbWVyXG4gICAgICAgIHBheWVyTnVtYmVyOiBjdXN0b21lclBob25lTnVtYmVyLCAvLyBBc3N1bWluZyBwYXllciBpcyB0aGUgY3VzdG9tZXJcbiAgICAgICAgZGVzY3JpcHRpb246IGRlc2NyaXB0aW9uLFxuICAgICAgICBiaWxsQXV0aE9wdGlvbnM6IHtcbiAgICAgICAgICAgIHBpbjogXCJzdHJpbmdcIiwgLy8gUGxhY2Vob2xkZXJcbiAgICAgICAgICAgIG90cDogXCJzdHJpbmdcIiwgLy8gUGxhY2Vob2xkZXJcbiAgICAgICAgICAgIGJpb21ldHJpY1BvbGljeTogXCJzdHJpbmdcIiwgLy8gUGxhY2Vob2xkZXJcbiAgICAgICAgICAgIGJpb21ldHJpY1Rva2VuOiBcInN0cmluZ1wiLCAvLyBQbGFjZWhvbGRlclxuICAgICAgICAgICAgcGxhdGZvcm1UcmFuc2FjdGlvblJlZmVyZW5jZTogXCJzdHJpbmdcIiwgLy8gUGxhY2Vob2xkZXJcbiAgICAgICAgICAgIGF1dGhlbnRpY2F0aW9uVHlwZTogMCAvLyBQbGFjZWhvbGRlclxuICAgICAgICB9XG4gICAgfTtcblxuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vd2VtYS1hbGF0ZGV2LWFwaW1ndC5henVyZS1hcGkubmV0L3JlbWl0YS1wYXltZW50cy9hcGkvUmVtaXRhUGF5bWVudC9QYXlSZW1pdGFCaWxsJywge1xuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShib2R5KSxcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgICAgICdDYWNoZS1Db250cm9sJzogJ25vLWNhY2hlJyxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgcmVzcG9uc2VUZXh0ID0gYXdhaXQgcmVzcG9uc2UudGV4dCgpO1xuICAgICAgICBjb25zb2xlLmxvZyhcIlJlbWl0YSBQYXlSZW1pdGFCaWxsIHJlc3BvbnNlIHN0YXR1czpcIiwgcmVzcG9uc2Uuc3RhdHVzKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJSZW1pdGEgUGF5UmVtaXRhQmlsbCByZXNwb25zZSBib2R5OlwiLCByZXNwb25zZVRleHQpO1xuICAgICAgICBcbiAgICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBtZXNzYWdlOiBcIlJlbWl0YSBwYXltZW50IHByb2Nlc3NlZCBzdWNjZXNzZnVsbHkuXCIsIGRhdGE6IEpTT04ucGFyc2UocmVzcG9uc2VUZXh0KSB9O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBgUmVtaXRhIHBheW1lbnQgZmFpbGVkOiAke3Jlc3BvbnNlVGV4dH1gIH07XG4gICAgICAgIH1cblxuICAgIH0gY2F0Y2goZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGNhbGxpbmcgUmVtaXRhIFBheVJlbWl0YUJpbGwgQVBJOlwiLCBlcnJvcik7XG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJDb3VsZCBub3QgY29ubmVjdCB0byB0aGUgUmVtaXRhIHBheW1lbnQgZ2F0ZXdheS5cIiB9O1xuICAgIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHByaW50UmVtaXRhUmVjZWlwdChyZWNlaXB0RGF0YTogei5pbmZlcjx0eXBlb2YgcmVtaXRhUmVjZWlwdFNjaGVtYT4pIHtcbiAgICBjb25zdCB2YWxpZGF0ZWRGaWVsZHMgPSByZW1pdGFSZWNlaXB0U2NoZW1hLnNhZmVQYXJzZShyZWNlaXB0RGF0YSk7XG4gICAgaWYgKCF2YWxpZGF0ZWRGaWVsZHMuc3VjY2Vzcykge1xuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiSW52YWxpZCBSZW1pdGEgcmVjZWlwdCBkYXRhLlwiIH07XG4gICAgfVxuXG4gICAgY29uc3QgeyBycnIgfSA9IHZhbGlkYXRlZEZpZWxkcy5kYXRhO1xuXG4gICAgY29uc3QgcmVtaXRhVXJsID0gYGh0dHBzOi8vd2VtYS1hbGF0ZGV2LWFwaW1ndC5henVyZS1hcGkubmV0L3JlbWl0YS1wYXltZW50cy9hcGkvUmVtaXRhUGF5bWVudC9QcmludFJlbWl0YVJlY2VpcHQvJHtycnJ9YDtcblxuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2gocmVtaXRhVXJsLCB7XG4gICAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICdDYWNoZS1Db250cm9sJzogJ25vLWNhY2hlJyxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgcmVzcG9uc2VUZXh0ID0gYXdhaXQgcmVzcG9uc2UudGV4dCgpO1xuICAgICAgICBjb25zb2xlLmxvZyhcIlJlbWl0YSBQcmludFJlbWl0YVJlY2VpcHQgcmVzcG9uc2Ugc3RhdHVzOlwiLCByZXNwb25zZS5zdGF0dXMpO1xuICAgICAgICBjb25zb2xlLmxvZyhcIlJlbWl0YSBQcmludFJlbWl0YVJlY2VpcHQgcmVzcG9uc2UgYm9keTpcIiwgcmVzcG9uc2VUZXh0KTtcbiAgICAgICAgXG4gICAgICAgIGlmIChyZXNwb25zZS5vaykge1xuICAgICAgICAgICAgLy8gRGVwZW5kaW5nIG9uIHdoYXQgdGhlIEFQSSByZXR1cm5zIChlLmcuLCBIVE1MLCBhIFVSTCB0byBhIFBERiksXG4gICAgICAgICAgICAvLyB0aGlzIHJlc3BvbnNlIHdpbGwgbmVlZCB0byBiZSBoYW5kbGVkIGJ5IHRoZSBjbGllbnQuXG4gICAgICAgICAgICAvLyBGb3Igbm93LCB3ZSdsbCBqdXN0IHJldHVybiB0aGUgdGV4dCBjb250ZW50LlxuICAgICAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgcmVjZWlwdERhdGE6IHJlc3BvbnNlVGV4dCB9O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBgRmFpbGVkIHRvIGZldGNoIFJlbWl0YSByZWNlaXB0OiAke3Jlc3BvbnNlVGV4dH1gIH07XG4gICAgICAgIH1cblxuICAgIH0gY2F0Y2goZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGNhbGxpbmcgUmVtaXRhIFByaW50UmVtaXRhUmVjZWlwdCBBUEk6XCIsIGVycm9yKTtcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIkNvdWxkIG5vdCBjb25uZWN0IHRvIHRoZSBSZW1pdGEgcGF5bWVudCBnYXRld2F5IHRvIHByaW50IHJlY2VpcHQuXCIgfTtcbiAgICB9XG59XG5cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHZhbGlkYXRlUmVtaXRhUnJyKHZhbGlkYXRpb25EYXRhOiB6LmluZmVyPHR5cGVvZiByZW1pdGFScnJWYWxpZGF0aW9uU2NoZW1hPikge1xuICAgIGNvbnN0IHZhbGlkYXRlZEZpZWxkcyA9IHJlbWl0YVJyclZhbGlkYXRpb25TY2hlbWEuc2FmZVBhcnNlKHZhbGlkYXRpb25EYXRhKTtcbiAgICBpZiAoIXZhbGlkYXRlZEZpZWxkcy5zdWNjZXNzKSB7XG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJJbnZhbGlkIFJlbWl0YSBSUlIgdmFsaWRhdGlvbiBkYXRhLlwiIH07XG4gICAgfVxuXG4gICAgY29uc3QgeyBycnIsIGNoYW5uZWxJZCB9ID0gdmFsaWRhdGVkRmllbGRzLmRhdGE7XG5cbiAgICBjb25zdCByZW1pdGFVcmwgPSBgaHR0cHM6Ly93ZW1hLWFsYXRkZXYtYXBpbWd0LmF6dXJlLWFwaS5uZXQvcmVtaXRhLXBheW1lbnRzL2FwaS9SZW1pdGFQYXltZW50L1ZhbGlkYXRlUnJyLyR7cnJyfS8ke2NoYW5uZWxJZH1gO1xuXG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChyZW1pdGFVcmwsIHtcbiAgICAgICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgJ0NhY2hlLUNvbnRyb2wnOiAnbm8tY2FjaGUnLFxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCByZXNwb25zZVRleHQgPSBhd2FpdCByZXNwb25zZS50ZXh0KCk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiUmVtaXRhIFZhbGlkYXRlUnJyIHJlc3BvbnNlIHN0YXR1czpcIiwgcmVzcG9uc2Uuc3RhdHVzKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJSZW1pdGEgVmFsaWRhdGVScnIgcmVzcG9uc2UgYm9keTpcIiwgcmVzcG9uc2VUZXh0KTtcbiAgICAgICAgXG4gICAgICAgIGlmIChyZXNwb25zZS5vaykge1xuICAgICAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgbWVzc2FnZTogXCJSZW1pdGEgUlJSIHZhbGlkYXRlZCBzdWNjZXNzZnVsbHkuXCIsIGRhdGE6IEpTT04ucGFyc2UocmVzcG9uc2VUZXh0KSB9O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBgRmFpbGVkIHRvIHZhbGlkYXRlIFJlbWl0YSBSUlI6ICR7cmVzcG9uc2VUZXh0fWAgfTtcbiAgICAgICAgfVxuXG4gICAgfSBjYXRjaChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgY2FsbGluZyBSZW1pdGEgVmFsaWRhdGVScnIgQVBJOlwiLCBlcnJvcik7XG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJDb3VsZCBub3QgY29ubmVjdCB0byB0aGUgUmVtaXRhIHBheW1lbnQgZ2F0ZXdheSB0byB2YWxpZGF0ZSBSUlIuXCIgfTtcbiAgICB9XG59XG4gICAgXG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IitSQXFFc0IifQ==
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/vote/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>VotePage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$textarea$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/textarea.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/label.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$award$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Award$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/award.js [app-client] (ecmascript) <export default as Award>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/star.js [app-client] (ecmascript) <export default as Star>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/use-toast.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$features$2f$vote$2f$contestant$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/features/vote/contestant-card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/dropdown-menu.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/select.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/form.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-hook-form/dist/index.esm.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hookform$2f$resolvers$2f$zod$2f$dist$2f$zod$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@hookform/resolvers/zod/dist/zod.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod/lib/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$data$3a$9b701a__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/data:9b701a [app-client] (ecmascript) <text/javascript>");
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
;
;
const generalCategories = [
    {
        title: "Fitness Trainer/Coach of the Year"
    },
    {
        title: "Fitness Club Coach of the Year"
    },
    {
        title: "Inspirational Weight-Loss Journey"
    },
    {
        title: "Foundation Fitness Award"
    },
    {
        title: "Mental Health & Wellness Advocate"
    },
    {
        title: "Art and Wellness Advocate"
    },
    {
        title: "Life Champion Award - Overcomers series"
    },
    {
        title: "Foundation Fitness Hero Award"
    },
    {
        title: "Educators Recognition series"
    },
    {
        title: "Fitness Event Of The Year (Coaches)"
    },
    {
        title: "Fitness Event Of The Year (Clubs)"
    }
];
const recognitionCategories = [
    {
        title: "Community Fitness Hero of the Year"
    },
    {
        title: "Care-Givers Advocate"
    },
    {
        title: "Health Care Treatment Advocate"
    },
    {
        title: "Pharmaceutical Service Champion"
    },
    {
        title: "Physiotherapist of the Year"
    }
];
const organizationsCategories = [
    {
        title: "Corporate Wellness Champion"
    },
    {
        title: "Corporate Social Responsibility Champion"
    },
    {
        title: "Gym of the Year"
    }
];
const allAwardCategories = [
    ...generalCategories,
    ...recognitionCategories,
    ...organizationsCategories
].map((c)=>c.title);
const contestants = [
    {
        id: '1',
        name: 'Coach NTB',
        category: 'Fitness Trainer/Coach of the Year',
        image: '/ntb2.JPG'
    },
    {
        id: '2',
        name: 'Coach Tawani',
        category: 'Fitness Trainer/Coach of the Year',
        image: '/Tawani.jpg'
    },
    {
        id: '3',
        name: 'Body Quest',
        category: 'Fitness Trainer/Coach of the Year',
        image: '/bodyq.jpg'
    },
    {
        id: '22',
        name: 'Coach George',
        category: 'Fitness Trainer/Coach of the Year',
        image: '/george.jpg'
    },
    {
        id: '23',
        name: 'Coach Collins',
        category: 'Fitness Trainer/Coach of the Year',
        image: '/collins.jpg'
    },
    {
        id: '4',
        name: 'Pharm. Mrs. Onwudiwe Blessing',
        category: 'Inspirational Weight-Loss Journey',
        image: '/bles.JPG',
        objectPosition: 'center 25%'
    },
    {
        id: '5',
        name: 'Mrs Virtue Michael Okoi',
        category: 'Inspirational Weight-Loss Journey',
        image: '/okoi.JPG'
    },
    {
        id: '40',
        name: 'Inspiree One',
        category: 'Inspirational Weight-Loss Journey',
        image: 'https://placehold.co/400x400.png?text=Inspiree+1'
    },
    {
        id: '6',
        name: 'David L',
        category: 'Community Fitness Hero of the Year',
        image: 'https://placehold.co/400x400.png?text=David+L'
    },
    {
        id: '24',
        name: 'Jane F.',
        category: 'Community Fitness Hero of the Year',
        image: 'https://placehold.co/400x400.png?text=Jane+F'
    },
    {
        id: '25',
        name: 'Mike R.',
        category: 'Community Fitness Hero of the Year',
        image: 'https://placehold.co/400x400.png?text=Mike+R'
    },
    // Professionals
    {
        id: '7',
        name: 'Nurse Joy',
        category: 'Care-Givers Advocate',
        image: 'https://placehold.co/400x400.png?text=Nurse+J'
    },
    {
        id: '26',
        name: 'Nurse Michael',
        category: 'Care-Givers Advocate',
        image: 'https://placehold.co/400x400.png?text=Nurse+M'
    },
    {
        id: '27',
        name: 'Nurse Ada',
        category: 'Care-Givers Advocate',
        image: 'https://placehold.co/400x400.png?text=Nurse+A'
    },
    {
        id: '8',
        name: 'Dr. Mike',
        category: 'Health Care Treatment Advocate',
        image: 'https://placehold.co/400x400.png?text=Dr+M'
    },
    {
        id: '28',
        name: 'Dr. Chen',
        category: 'Health Care Treatment Advocate',
        image: 'https://placehold.co/400x400.png?text=Dr+C'
    },
    {
        id: '29',
        name: 'Dr. Okonjo',
        category: 'Health Care Treatment Advocate',
        image: 'https://placehold.co/400x400.png?text=Dr+O'
    },
    {
        id: '9',
        name: 'PharmaPlus',
        category: 'Pharmaceutical Service Champion',
        image: 'https://placehold.co/400x400.png?text=Rx+'
    },
    {
        id: '30',
        name: 'HealthFirst Pharmacy',
        category: 'Pharmaceutical Service Champion',
        image: 'https://placehold.co/400x400.png?text=HF+Rx'
    },
    {
        id: '31',
        name: 'Care Pharmacy',
        category: 'Pharmaceutical Service Champion',
        image: 'https://placehold.co/400x400.png?text=Care+Rx'
    },
    {
        id: '10',
        name: 'Sarah Lee, RPT',
        category: 'Physiotherapist of the Year',
        image: 'https://placehold.co/400x400.png?text=SL'
    },
    {
        id: '32',
        name: 'Femi Ade, RPT',
        category: 'Physiotherapist of the Year',
        image: 'https://placehold.co/400x400.png?text=FA'
    },
    {
        id: '33',
        name: 'Chioma Obi, RPT',
        category: 'Physiotherapist of the Year',
        image: 'https://placehold.co/400x400.png?text=CO'
    },
    // Organizations
    {
        id: '11',
        name: 'Wellness Inc.',
        category: 'Corporate Wellness Champion',
        image: 'https://placehold.co/400x400.png?text=W+Inc'
    },
    {
        id: '34',
        name: 'HealthyCo',
        category: 'Corporate Wellness Champion',
        image: 'https://placehold.co/400x400.png?text=HC'
    },
    {
        id: '35',
        name: 'TeamUp Corp',
        category: 'Corporate Wellness Champion',
        image: 'https://placehold.co/400x400.png?text=TU'
    },
    {
        id: '12',
        name: 'GoodWorks LLC',
        category: 'Corporate Social Responsibility Champion',
        image: 'https://placehold.co/400x400.png?text=GW+LLC'
    },
    {
        id: '36',
        name: 'Community First',
        category: 'Corporate Social Responsibility Champion',
        image: 'https://placehold.co/400x400.png?text=CF'
    },
    {
        id: '37',
        name: 'GiveBack Inc',
        category: 'Corporate Social Responsibility Champion',
        image: 'https://placehold.co/400x400.png?text=GB'
    },
    // New contestants
    {
        id: '13',
        name: 'Coach Tunde',
        category: 'Fitness Club Coach of the Year',
        image: 'https://placehold.co/400x400.png?text=CT'
    },
    {
        id: '14',
        name: 'Coach Aisha',
        category: 'Fitness Club Coach of the Year',
        image: 'https://placehold.co/400x400.png?text=CA'
    },
    {
        id: '41',
        name: 'Coach Bola',
        category: 'Fitness Club Coach of the Year',
        image: 'https://placehold.co/400x400.png?text=CB'
    },
    {
        id: '48',
        name: 'Coach Ifiok',
        category: 'Fitness Club Coach of the Year',
        image: '/ifiok.jpg'
    },
    {
        id: '49',
        name: 'Coach Ofonime',
        category: 'Fitness Club Coach of the Year',
        image: '/ofon.JPG'
    },
    {
        id: '50',
        name: 'Coach Bigname',
        category: 'Fitness Club Coach of the Year',
        image: '/Bigname.jpg'
    },
    {
        id: '15',
        name: 'Victor\'s Fitness',
        category: 'Gym of the Year',
        image: 'https://placehold.co/400x400.png?text=VF'
    },
    {
        id: '16',
        name: 'Romaan Fitness',
        category: 'Gym of the Year',
        image: 'https://placehold.co/400x400.png?text=RF'
    },
    {
        id: '17',
        name: 'Hogis Fitness',
        category: 'Gym of the Year',
        image: '/hogis.png'
    },
    {
        id: '18',
        name: '1480 AZ GYM (NAVY GYM)',
        category: 'Gym of the Year',
        image: '/az.jpg',
        objectPosition: 'center 20%'
    },
    {
        id: '19',
        name: 'Oma',
        category: 'Art and Wellness Advocate',
        image: 'https://placehold.co/400x400.png?text=OMA'
    },
    {
        id: '20',
        name: 'Lifeclinicng',
        category: 'Art and Wellness Advocate',
        image: '/dr ken.jpg'
    },
    {
        id: '21',
        name: 'Hannah Bassey-Duke',
        category: 'Art and Wellness Advocate',
        image: '/han.jpg'
    },
    {
        id: '42',
        name: '300 Tawani Fitness Day-Out',
        category: 'Fitness Event Of The Year (Coaches)',
        image: '/tawani.JPG'
    },
    {
        id: '43',
        name: 'The Exclusive Workout Exibition',
        category: 'Fitness Event Of The Year (Coaches)',
        image: '/dbb.png'
    },
    {
        id: '44',
        name: 'Event Coache C',
        category: 'Fitness Event Of The Year (Coaches)',
        image: 'https://placehold.co/400x400.png?text=EC-C'
    },
    {
        id: '45',
        name: 'Calabar Walkhathon',
        category: 'Fitness Event Of The Year (Clubs)',
        image: '/walk2.png',
        objectFit: 'contain'
    },
    {
        id: '46',
        name: 'Pro Fitness',
        category: 'Fitness Event Of The Year (Clubs)',
        image: '/profitness.jpg',
        objectFit: 'contain'
    },
    {
        id: '47',
        name: 'Micki Fitness',
        category: 'Fitness Event Of The Year (Clubs)',
        image: '/miki.jpeg'
    }
];
const nominationFormSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].object({
    category: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].string().min(1, "Please select an award category."),
    nomineeName: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].string().min(2, "Nominee name must be at least 2 characters."),
    nomineePhone: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].string().min(10, "Please enter a valid phone number."),
    nominationReason: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].string().min(10, "Please provide a reason for the nomination."),
    nominatorName: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].string().min(2, "Please enter your name."),
    nominatorPhone: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].string().min(10, "Please enter your phone number.")
});
const voteOptions = [
    {
        base: 10,
        free: 2,
        label: "10 Votes + 2 Free"
    },
    {
        base: 50,
        free: 3,
        label: "50 Votes + 3 Free"
    },
    {
        base: 100,
        free: 5,
        label: "100 Votes + 5 Free"
    },
    {
        base: 500,
        free: 10,
        label: "500 Votes + 10 Free"
    },
    {
        base: 1000,
        free: 20,
        label: "1000 Votes + 20 Bonus"
    }
];
function VotePage() {
    _s();
    const { toast } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [isPending, startTransition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransition"])();
    const [selectedContestant, setSelectedContestant] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [selectedCategory, setSelectedCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("All Categories");
    const [numberOfVotes, setNumberOfVotes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(String(voteOptions[0].base));
    const form = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useForm"])({
        resolver: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hookform$2f$resolvers$2f$zod$2f$dist$2f$zod$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["zodResolver"])(nominationFormSchema),
        defaultValues: {
            category: "",
            nomineeName: "",
            nomineePhone: "",
            nominationReason: "",
            nominatorName: "",
            nominatorPhone: ""
        }
    });
    const handleNominationSubmit = (values)=>{
        startTransition(async ()=>{
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$data$3a$9b701a__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["sendNominationEmail"])(values);
            if (result.success) {
                toast({
                    title: "Nomination Submitted!",
                    description: "Thank you for nominating. We will review your submission."
                });
                form.reset();
            } else {
                toast({
                    title: "Submission Failed",
                    description: result.error,
                    variant: "destructive"
                });
            }
        });
    };
    const handleProceedToVote = ()=>{
        if (!selectedContestant) {
            toast({
                title: "No Contestant Selected",
                description: "Please select a contestant before proceeding.",
                variant: "destructive"
            });
            return;
        }
        const selectedVoteOption = voteOptions.find((o)=>o.base === parseInt(numberOfVotes));
        if (!selectedVoteOption) {
            toast({
                title: "Invalid Vote Amount",
                description: "Please select a valid number of votes.",
                variant: "destructive"
            });
            return;
        }
        const totalVotes = selectedVoteOption.base + selectedVoteOption.free;
        const { id, name, category } = selectedContestant;
        const query = new URLSearchParams({
            id,
            name,
            category,
            votes: String(totalVotes)
        }).toString();
        router.push(`/checkout?${query}`);
    };
    const recognitionCategoryTitles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "VotePage.useMemo[recognitionCategoryTitles]": ()=>new Set(recognitionCategories.map({
                "VotePage.useMemo[recognitionCategoryTitles]": (c)=>c.title
            }["VotePage.useMemo[recognitionCategoryTitles]"]))
    }["VotePage.useMemo[recognitionCategoryTitles]"], []);
    const votableContestants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "VotePage.useMemo[votableContestants]": ()=>{
            return contestants.filter({
                "VotePage.useMemo[votableContestants]": (c)=>!recognitionCategoryTitles.has(c.category)
            }["VotePage.useMemo[votableContestants]"]);
        }
    }["VotePage.useMemo[votableContestants]"], [
        recognitionCategoryTitles
    ]);
    const recognitionContestants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "VotePage.useMemo[recognitionContestants]": ()=>{
            return contestants.filter({
                "VotePage.useMemo[recognitionContestants]": (c)=>recognitionCategoryTitles.has(c.category)
            }["VotePage.useMemo[recognitionContestants]"]);
        }
    }["VotePage.useMemo[recognitionContestants]"], [
        recognitionCategoryTitles
    ]);
    const filteredContestants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "VotePage.useMemo[filteredContestants]": ()=>{
            if (selectedCategory === "All Categories") {
                return votableContestants;
            }
            return votableContestants.filter({
                "VotePage.useMemo[filteredContestants]": (c)=>c.category === selectedCategory
            }["VotePage.useMemo[filteredContestants]"]);
        }
    }["VotePage.useMemo[filteredContestants]"], [
        selectedCategory,
        votableContestants
    ]);
    const isCategoryActive = (mainCategory, subCategories)=>{
        if (selectedCategory === mainCategory) return true;
        return subCategories.some((sub)=>sub.title === selectedCategory);
    };
    const categoriesToDisplay = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "VotePage.useMemo[categoriesToDisplay]": ()=>{
            if (selectedCategory === "All Categories") {
                const categoriesWithContestants = new Set(votableContestants.map({
                    "VotePage.useMemo[categoriesToDisplay]": (c)=>c.category
                }["VotePage.useMemo[categoriesToDisplay]"]));
                return [
                    ...generalCategories,
                    ...organizationsCategories
                ].map({
                    "VotePage.useMemo[categoriesToDisplay]": (c)=>c.title
                }["VotePage.useMemo[categoriesToDisplay]"]).filter({
                    "VotePage.useMemo[categoriesToDisplay]": (cat)=>categoriesWithContestants.has(cat)
                }["VotePage.useMemo[categoriesToDisplay]"]);
            }
            return [
                selectedCategory
            ];
        }
    }["VotePage.useMemo[categoriesToDisplay]"], [
        selectedCategory,
        votableContestants
    ]);
    const renderDropdown = (mainTitle, subItems)=>{
        const isActive = isCategoryActive(mainTitle, subItems);
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenu"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuTrigger"], {
                    asChild: true,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        variant: "outline",
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("border-amber-400/30 text-amber-300 hover:bg-amber-400/10 hover:text-amber-200", isActive && "bg-amber-400/20 ring-2 ring-amber-400 text-amber-200"),
                        children: [
                            mainTitle,
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                className: "ml-2 h-4 w-4"
                            }, void 0, false, {
                                fileName: "[project]/src/app/vote/page.tsx",
                                lineNumber: 241,
                                columnNumber: 37
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/vote/page.tsx",
                        lineNumber: 234,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/vote/page.tsx",
                    lineNumber: 233,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuContent"], {
                    className: "bg-zinc-900 border-amber-400/30 text-amber-300",
                    children: subItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                            onSelect: ()=>setSelectedCategory(item.title),
                            className: "cursor-pointer hover:!bg-amber-400/20 focus:!bg-amber-400/20",
                            children: item.title
                        }, item.title, false, {
                            fileName: "[project]/src/app/vote/page.tsx",
                            lineNumber: 246,
                            columnNumber: 26
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/app/vote/page.tsx",
                    lineNumber: 244,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/vote/page.tsx",
            lineNumber: 232,
            columnNumber: 13
        }, this);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-black text-white min-h-screen",
        style: {
            backgroundImage: `url('/black-bg.jpeg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-black/80 backdrop-blur-sm min-h-screen",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                        className: "text-center mb-12 md:mb-16",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                src: "/SR.jpg",
                                alt: "SR Fitness Awards Logo",
                                width: 96,
                                height: 96,
                                className: "h-24 w-24 mx-auto mb-4 rounded-full",
                                "data-ai-hint": "awards logo",
                                priority: true
                            }, void 0, false, {
                                fileName: "[project]/src/app/vote/page.tsx",
                                lineNumber: 265,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "font-headline text-2xl text-amber-400 tracking-wider",
                                children: "IDENTIFY, RECOGNIZE & CELEBRATE FITNESS INDUSTRY EXCELLENCE"
                            }, void 0, false, {
                                fileName: "[project]/src/app/vote/page.tsx",
                                lineNumber: 274,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/vote/page.tsx",
                        lineNumber: 264,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-12 md:mb-16 flex justify-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            src: "/VOTEG.png",
                            alt: "SR Fitness Awards Voting Guide with pricing",
                            width: 800,
                            height: 800,
                            className: "rounded-lg shadow-2xl shadow-amber-500/20 max-w-full sm:max-w-lg md:max-w-xl",
                            "data-ai-hint": "voting guide",
                            priority: true
                        }, void 0, false, {
                            fileName: "[project]/src/app/vote/page.tsx",
                            lineNumber: 280,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/vote/page.tsx",
                        lineNumber: 279,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                        className: "space-y-16",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                id: "vote",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid lg:grid-cols-2 gap-8 md:gap-12 items-start",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                            className: "bg-zinc-900/50 border-amber-400/30 text-white shadow-2xl shadow-amber-500/10",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                                            className: "font-headline text-4xl text-amber-400",
                                                            children: "Vote for a Contestant"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/vote/page.tsx",
                                                            lineNumber: 297,
                                                            columnNumber: 41
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardDescription"], {
                                                            className: "text-zinc-400",
                                                            children: "1. Select a category, then choose a contestant below."
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/vote/page.tsx",
                                                            lineNumber: 298,
                                                            columnNumber: 41
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/vote/page.tsx",
                                                    lineNumber: 296,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "mb-6",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "font-semibold text-zinc-300 mb-3",
                                                                    children: "Filter by Category:"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/vote/page.tsx",
                                                                    lineNumber: 302,
                                                                    columnNumber: 45
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex flex-wrap items-center gap-2",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                                            variant: "outline",
                                                                            onClick: ()=>setSelectedCategory("All Categories"),
                                                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("border-amber-400/30 text-amber-300 hover:bg-amber-400/10 hover:text-amber-200", selectedCategory === "All Categories" && "bg-amber-400/20 ring-2 ring-amber-400 text-amber-200"),
                                                                            children: "All Categories"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/vote/page.tsx",
                                                                            lineNumber: 304,
                                                                            columnNumber: 49
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "h-6 w-px bg-amber-400/30"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/vote/page.tsx",
                                                                            lineNumber: 314,
                                                                            columnNumber: 49
                                                                        }, this),
                                                                        renderDropdown("General", generalCategories),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "h-6 w-px bg-amber-400/30"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/vote/page.tsx",
                                                                            lineNumber: 316,
                                                                            columnNumber: 49
                                                                        }, this),
                                                                        renderDropdown("Organizations", organizationsCategories)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/vote/page.tsx",
                                                                    lineNumber: 303,
                                                                    columnNumber: 45
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/vote/page.tsx",
                                                            lineNumber: 301,
                                                            columnNumber: 41
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "space-y-8",
                                                            children: categoriesToDisplay.map((category)=>{
                                                                const contestantsForCategory = filteredContestants.filter((c)=>c.category === category);
                                                                if (contestantsForCategory.length === 0) return null;
                                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                            className: "font-headline text-2xl text-amber-300 mb-4 pb-2 border-b border-amber-400/20",
                                                                            children: category
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/vote/page.tsx",
                                                                            lineNumber: 327,
                                                                            columnNumber: 57
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "grid grid-cols-2 md:grid-cols-3 gap-4",
                                                                            children: contestantsForCategory.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$features$2f$vote$2f$contestant$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                                    contestant: c,
                                                                                    isVotable: true,
                                                                                    isSelected: selectedContestant?.id === c.id,
                                                                                    onSelect: ()=>{
                                                                                        if (selectedContestant?.id === c.id) {
                                                                                            setSelectedContestant(null);
                                                                                        } else {
                                                                                            setSelectedContestant(c);
                                                                                        }
                                                                                    }
                                                                                }, c.id, false, {
                                                                                    fileName: "[project]/src/app/vote/page.tsx",
                                                                                    lineNumber: 330,
                                                                                    columnNumber: 65
                                                                                }, this))
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/vote/page.tsx",
                                                                            lineNumber: 328,
                                                                            columnNumber: 57
                                                                        }, this)
                                                                    ]
                                                                }, category, true, {
                                                                    fileName: "[project]/src/app/vote/page.tsx",
                                                                    lineNumber: 326,
                                                                    columnNumber: 53
                                                                }, this);
                                                            })
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/vote/page.tsx",
                                                            lineNumber: 320,
                                                            columnNumber: 42
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/vote/page.tsx",
                                                    lineNumber: 300,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/vote/page.tsx",
                                            lineNumber: 295,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-8 sticky top-24",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                                className: "bg-zinc-900/50 border-amber-400/30 text-white shadow-2xl shadow-amber-500/10",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                                                className: "font-headline text-4xl text-amber-400",
                                                                children: "2. Complete Your Vote"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/vote/page.tsx",
                                                                lineNumber: 355,
                                                                columnNumber: 45
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardDescription"], {
                                                                className: "text-zinc-400",
                                                                children: "After selecting a contestant, confirm the number of votes and click below."
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/vote/page.tsx",
                                                                lineNumber: 356,
                                                                columnNumber: 45
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/vote/page.tsx",
                                                        lineNumber: 354,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                                        children: [
                                                            selectedContestant ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "bg-zinc-800/70 p-4 rounded-lg space-y-4",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "text-center",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                className: "text-zinc-300 mb-1",
                                                                                children: "You have selected:"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/vote/page.tsx",
                                                                                lineNumber: 364,
                                                                                columnNumber: 57
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                className: "font-bold text-amber-300 text-xl",
                                                                                children: selectedContestant.name
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/vote/page.tsx",
                                                                                lineNumber: 365,
                                                                                columnNumber: 57
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                className: "text-xs text-zinc-400",
                                                                                children: selectedContestant.category
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/vote/page.tsx",
                                                                                lineNumber: 366,
                                                                                columnNumber: 57
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/vote/page.tsx",
                                                                        lineNumber: 363,
                                                                        columnNumber: 53
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                                                className: "text-zinc-300 font-semibold mb-2 block text-center",
                                                                                children: "Number of Votes:"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/vote/page.tsx",
                                                                                lineNumber: 369,
                                                                                columnNumber: 57
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                                                                                onValueChange: setNumberOfVotes,
                                                                                defaultValue: numberOfVotes,
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                                                                                        className: "bg-zinc-800 border-zinc-700 focus:ring-amber-400 w-full",
                                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectValue"], {
                                                                                            placeholder: "Select number of votes"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/app/vote/page.tsx",
                                                                                            lineNumber: 372,
                                                                                            columnNumber: 65
                                                                                        }, this)
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/vote/page.tsx",
                                                                                        lineNumber: 371,
                                                                                        columnNumber: 61
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectContent"], {
                                                                                        className: "bg-zinc-900 border-amber-400/30 text-amber-300",
                                                                                        children: voteOptions.map((v)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                                                                value: String(v.base),
                                                                                                className: "cursor-pointer hover:!bg-amber-400/20 focus:!bg-amber-400/20",
                                                                                                children: v.label
                                                                                            }, v.base, false, {
                                                                                                fileName: "[project]/src/app/vote/page.tsx",
                                                                                                lineNumber: 376,
                                                                                                columnNumber: 69
                                                                                            }, this))
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/vote/page.tsx",
                                                                                        lineNumber: 374,
                                                                                        columnNumber: 61
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/app/vote/page.tsx",
                                                                                lineNumber: 370,
                                                                                columnNumber: 57
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/vote/page.tsx",
                                                                        lineNumber: 368,
                                                                        columnNumber: 54
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/vote/page.tsx",
                                                                lineNumber: 362,
                                                                columnNumber: 49
                                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "bg-zinc-800/50 p-4 rounded-lg text-center h-24 flex items-center justify-center",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-zinc-400",
                                                                    children: "Please select a contestant to vote for."
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/vote/page.tsx",
                                                                    lineNumber: 384,
                                                                    columnNumber: 53
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/vote/page.tsx",
                                                                lineNumber: 383,
                                                                columnNumber: 49
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                                size: "lg",
                                                                className: "w-full mt-6 bg-amber-500 text-black font-bold text-lg hover:bg-amber-400 disabled:bg-zinc-600 disabled:text-zinc-400 disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-105",
                                                                onClick: handleProceedToVote,
                                                                disabled: !selectedContestant,
                                                                children: [
                                                                    "Proceed to Vote ",
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                                        className: "ml-2 h-5 w-5"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/vote/page.tsx",
                                                                        lineNumber: 393,
                                                                        columnNumber: 65
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/vote/page.tsx",
                                                                lineNumber: 387,
                                                                columnNumber: 45
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-xs text-zinc-500 mt-4 text-center",
                                                                children: "You will be taken to a final confirmation page with payment details."
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/vote/page.tsx",
                                                                lineNumber: 395,
                                                                columnNumber: 45
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/vote/page.tsx",
                                                        lineNumber: 360,
                                                        columnNumber: 41
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/vote/page.tsx",
                                                lineNumber: 353,
                                                columnNumber: 37
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/vote/page.tsx",
                                            lineNumber: 352,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/vote/page.tsx",
                                    lineNumber: 294,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/vote/page.tsx",
                                lineNumber: 293,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                id: "recognition",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                    className: "bg-zinc-900/50 border-amber-400/30 text-white shadow-2xl shadow-amber-500/10",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                                                        className: "h-10 w-10 text-amber-400"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/vote/page.tsx",
                                                        lineNumber: 409,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                                                className: "font-headline text-4xl text-amber-400",
                                                                children: "Recognition Awards"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/vote/page.tsx",
                                                                lineNumber: 411,
                                                                columnNumber: 45
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardDescription"], {
                                                                className: "text-zinc-400",
                                                                children: "Honoring excellence in specialized fields. These categories are for recognition only and are not part of the public vote."
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/vote/page.tsx",
                                                                lineNumber: 412,
                                                                columnNumber: 45
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/vote/page.tsx",
                                                        lineNumber: 410,
                                                        columnNumber: 41
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/vote/page.tsx",
                                                lineNumber: 408,
                                                columnNumber: 37
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/vote/page.tsx",
                                            lineNumber: 407,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-8",
                                                children: recognitionCategories.map((category)=>{
                                                    const contestantsForCategory = recognitionContestants.filter((c)=>c.category === category.title);
                                                    if (contestantsForCategory.length === 0) return null;
                                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                className: "font-headline text-2xl text-amber-300 mb-4 pb-2 border-b border-amber-400/20",
                                                                children: category.title
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/vote/page.tsx",
                                                                lineNumber: 424,
                                                                columnNumber: 53
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4",
                                                                children: contestantsForCategory.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$features$2f$vote$2f$contestant$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                        contestant: c,
                                                                        isVotable: false
                                                                    }, c.id, false, {
                                                                        fileName: "[project]/src/app/vote/page.tsx",
                                                                        lineNumber: 427,
                                                                        columnNumber: 61
                                                                    }, this))
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/vote/page.tsx",
                                                                lineNumber: 425,
                                                                columnNumber: 53
                                                            }, this)
                                                        ]
                                                    }, category.title, true, {
                                                        fileName: "[project]/src/app/vote/page.tsx",
                                                        lineNumber: 423,
                                                        columnNumber: 49
                                                    }, this);
                                                })
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/vote/page.tsx",
                                                lineNumber: 417,
                                                columnNumber: 37
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/vote/page.tsx",
                                            lineNumber: 416,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/vote/page.tsx",
                                    lineNumber: 406,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/vote/page.tsx",
                                lineNumber: 405,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                id: "nominate",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                    className: "bg-zinc-900/50 border-amber-400/30 text-white shadow-2xl shadow-amber-500/10",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$award$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Award$3e$__["Award"], {
                                                        className: "h-10 w-10 text-amber-400"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/vote/page.tsx",
                                                        lineNumber: 447,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                                                className: "font-headline text-4xl text-amber-400",
                                                                children: "Online Nomination Form"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/vote/page.tsx",
                                                                lineNumber: 449,
                                                                columnNumber: 45
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardDescription"], {
                                                                className: "text-zinc-400",
                                                                children: "Think someone deserves an award? Nominate them here!"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/vote/page.tsx",
                                                                lineNumber: 450,
                                                                columnNumber: 45
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/vote/page.tsx",
                                                        lineNumber: 448,
                                                        columnNumber: 41
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/vote/page.tsx",
                                                lineNumber: 446,
                                                columnNumber: 37
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/vote/page.tsx",
                                            lineNumber: 445,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Form"], {
                                                ...form,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                                    onSubmit: form.handleSubmit(handleNominationSubmit),
                                                    className: "space-y-6",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "grid md:grid-cols-2 gap-6",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormField"], {
                                                                    control: form.control,
                                                                    name: "category",
                                                                    render: ({ field })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormItem"], {
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormLabel"], {
                                                                                    className: "text-zinc-300",
                                                                                    children: "Award Category"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/vote/page.tsx",
                                                                                    lineNumber: 463,
                                                                                    columnNumber: 61
                                                                                }, void 0),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                                                                                    onValueChange: field.onChange,
                                                                                    defaultValue: field.value,
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormControl"], {
                                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                                                                                                className: "bg-zinc-800 border-zinc-700 focus:ring-amber-400",
                                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectValue"], {
                                                                                                    placeholder: "Select an award to nominate for"
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/src/app/vote/page.tsx",
                                                                                                    lineNumber: 467,
                                                                                                    columnNumber: 73
                                                                                                }, void 0)
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/app/vote/page.tsx",
                                                                                                lineNumber: 466,
                                                                                                columnNumber: 69
                                                                                            }, void 0)
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/app/vote/page.tsx",
                                                                                            lineNumber: 465,
                                                                                            columnNumber: 65
                                                                                        }, void 0),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectContent"], {
                                                                                            className: "bg-zinc-900 border-amber-400/30 text-amber-300",
                                                                                            children: allAwardCategories.map((cat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                                                                    value: cat,
                                                                                                    className: "cursor-pointer hover:!bg-amber-400/20 focus:!bg-amber-400/20",
                                                                                                    children: cat
                                                                                                }, cat, false, {
                                                                                                    fileName: "[project]/src/app/vote/page.tsx",
                                                                                                    lineNumber: 472,
                                                                                                    columnNumber: 73
                                                                                                }, void 0))
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/app/vote/page.tsx",
                                                                                            lineNumber: 470,
                                                                                            columnNumber: 65
                                                                                        }, void 0)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/src/app/vote/page.tsx",
                                                                                    lineNumber: 464,
                                                                                    columnNumber: 61
                                                                                }, void 0),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormMessage"], {}, void 0, false, {
                                                                                    fileName: "[project]/src/app/vote/page.tsx",
                                                                                    lineNumber: 476,
                                                                                    columnNumber: 61
                                                                                }, void 0)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/vote/page.tsx",
                                                                            lineNumber: 462,
                                                                            columnNumber: 57
                                                                        }, void 0)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/vote/page.tsx",
                                                                    lineNumber: 458,
                                                                    columnNumber: 49
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormField"], {
                                                                    control: form.control,
                                                                    name: "nomineeName",
                                                                    render: ({ field })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormItem"], {
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormLabel"], {
                                                                                    className: "text-zinc-300",
                                                                                    children: "Nominee's Full Name"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/vote/page.tsx",
                                                                                    lineNumber: 485,
                                                                                    columnNumber: 61
                                                                                }, void 0),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormControl"], {
                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                                                        placeholder: "e.g., John Doe",
                                                                                        ...field,
                                                                                        className: "bg-zinc-800 border-zinc-700 focus:ring-amber-400"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/vote/page.tsx",
                                                                                        lineNumber: 487,
                                                                                        columnNumber: 65
                                                                                    }, void 0)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/vote/page.tsx",
                                                                                    lineNumber: 486,
                                                                                    columnNumber: 61
                                                                                }, void 0),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormMessage"], {}, void 0, false, {
                                                                                    fileName: "[project]/src/app/vote/page.tsx",
                                                                                    lineNumber: 489,
                                                                                    columnNumber: 61
                                                                                }, void 0)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/vote/page.tsx",
                                                                            lineNumber: 484,
                                                                            columnNumber: 57
                                                                        }, void 0)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/vote/page.tsx",
                                                                    lineNumber: 480,
                                                                    columnNumber: 50
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormField"], {
                                                                    control: form.control,
                                                                    name: "nomineePhone",
                                                                    render: ({ field })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormItem"], {
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormLabel"], {
                                                                                    className: "text-zinc-300",
                                                                                    children: "Nominee's Phone Number"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/vote/page.tsx",
                                                                                    lineNumber: 498,
                                                                                    columnNumber: 61
                                                                                }, void 0),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormControl"], {
                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                                                        placeholder: "e.g., 08012345678",
                                                                                        ...field,
                                                                                        className: "bg-zinc-800 border-zinc-700 focus:ring-amber-400"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/vote/page.tsx",
                                                                                        lineNumber: 500,
                                                                                        columnNumber: 65
                                                                                    }, void 0)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/vote/page.tsx",
                                                                                    lineNumber: 499,
                                                                                    columnNumber: 61
                                                                                }, void 0),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormMessage"], {}, void 0, false, {
                                                                                    fileName: "[project]/src/app/vote/page.tsx",
                                                                                    lineNumber: 502,
                                                                                    columnNumber: 61
                                                                                }, void 0)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/vote/page.tsx",
                                                                            lineNumber: 497,
                                                                            columnNumber: 57
                                                                        }, void 0)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/vote/page.tsx",
                                                                    lineNumber: 493,
                                                                    columnNumber: 49
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormField"], {
                                                                    control: form.control,
                                                                    name: "nominationReason",
                                                                    render: ({ field })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormItem"], {
                                                                            className: "md:col-span-2",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormLabel"], {
                                                                                    className: "text-zinc-300",
                                                                                    children: "Reason for Nomination"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/vote/page.tsx",
                                                                                    lineNumber: 511,
                                                                                    columnNumber: 61
                                                                                }, void 0),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormControl"], {
                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$textarea$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Textarea"], {
                                                                                        placeholder: "Briefly explain why they deserve this award...",
                                                                                        ...field,
                                                                                        className: "bg-zinc-800 border-zinc-700 focus:ring-amber-400",
                                                                                        rows: 4
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/vote/page.tsx",
                                                                                        lineNumber: 513,
                                                                                        columnNumber: 65
                                                                                    }, void 0)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/vote/page.tsx",
                                                                                    lineNumber: 512,
                                                                                    columnNumber: 61
                                                                                }, void 0),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormMessage"], {}, void 0, false, {
                                                                                    fileName: "[project]/src/app/vote/page.tsx",
                                                                                    lineNumber: 515,
                                                                                    columnNumber: 61
                                                                                }, void 0)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/vote/page.tsx",
                                                                            lineNumber: 510,
                                                                            columnNumber: 57
                                                                        }, void 0)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/vote/page.tsx",
                                                                    lineNumber: 506,
                                                                    columnNumber: 49
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "md:col-span-2 border-t border-zinc-700 pt-6 space-y-6",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormField"], {
                                                                            control: form.control,
                                                                            name: "nominatorName",
                                                                            render: ({ field })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormItem"], {
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormLabel"], {
                                                                                            className: "text-zinc-300",
                                                                                            children: "Your Name (Nominator)"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/app/vote/page.tsx",
                                                                                            lineNumber: 525,
                                                                                            columnNumber: 65
                                                                                        }, void 0),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormControl"], {
                                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                                                                placeholder: "Your full name",
                                                                                                ...field,
                                                                                                className: "bg-zinc-800 border-zinc-700 focus:ring-amber-400"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/app/vote/page.tsx",
                                                                                                lineNumber: 527,
                                                                                                columnNumber: 69
                                                                                            }, void 0)
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/app/vote/page.tsx",
                                                                                            lineNumber: 526,
                                                                                            columnNumber: 65
                                                                                        }, void 0),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormMessage"], {}, void 0, false, {
                                                                                            fileName: "[project]/src/app/vote/page.tsx",
                                                                                            lineNumber: 529,
                                                                                            columnNumber: 65
                                                                                        }, void 0)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/src/app/vote/page.tsx",
                                                                                    lineNumber: 524,
                                                                                    columnNumber: 61
                                                                                }, void 0)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/vote/page.tsx",
                                                                            lineNumber: 520,
                                                                            columnNumber: 54
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormField"], {
                                                                            control: form.control,
                                                                            name: "nominatorPhone",
                                                                            render: ({ field })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormItem"], {
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormLabel"], {
                                                                                            className: "text-zinc-300",
                                                                                            children: "Your Phone Number"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/app/vote/page.tsx",
                                                                                            lineNumber: 538,
                                                                                            columnNumber: 65
                                                                                        }, void 0),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormControl"], {
                                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                                                                placeholder: "Your contact phone number",
                                                                                                ...field,
                                                                                                className: "bg-zinc-800 border-zinc-700 focus:ring-amber-400"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/app/vote/page.tsx",
                                                                                                lineNumber: 540,
                                                                                                columnNumber: 69
                                                                                            }, void 0)
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/app/vote/page.tsx",
                                                                                            lineNumber: 539,
                                                                                            columnNumber: 65
                                                                                        }, void 0),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormMessage"], {}, void 0, false, {
                                                                                            fileName: "[project]/src/app/vote/page.tsx",
                                                                                            lineNumber: 542,
                                                                                            columnNumber: 65
                                                                                        }, void 0)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/src/app/vote/page.tsx",
                                                                                    lineNumber: 537,
                                                                                    columnNumber: 61
                                                                                }, void 0)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/vote/page.tsx",
                                                                            lineNumber: 533,
                                                                            columnNumber: 54
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/vote/page.tsx",
                                                                    lineNumber: 519,
                                                                    columnNumber: 50
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/vote/page.tsx",
                                                            lineNumber: 457,
                                                            columnNumber: 45
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                            type: "submit",
                                                            size: "lg",
                                                            className: "w-full md:w-auto bg-amber-500 text-black font-bold hover:bg-amber-400 disabled:opacity-75",
                                                            disabled: isPending,
                                                            children: [
                                                                isPending ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                                                    className: "mr-2 h-4 w-4 animate-spin"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/vote/page.tsx",
                                                                    lineNumber: 549,
                                                                    columnNumber: 62
                                                                }, this) : null,
                                                                isPending ? 'Submitting...' : 'Submit Nomination'
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/vote/page.tsx",
                                                            lineNumber: 548,
                                                            columnNumber: 45
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/vote/page.tsx",
                                                    lineNumber: 456,
                                                    columnNumber: 41
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/vote/page.tsx",
                                                lineNumber: 455,
                                                columnNumber: 37
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/vote/page.tsx",
                                            lineNumber: 454,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/vote/page.tsx",
                                    lineNumber: 444,
                                    columnNumber: 30
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/vote/page.tsx",
                                lineNumber: 443,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/vote/page.tsx",
                        lineNumber: 291,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/vote/page.tsx",
                lineNumber: 263,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/vote/page.tsx",
            lineNumber: 262,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/vote/page.tsx",
        lineNumber: 256,
        columnNumber: 9
    }, this);
}
_s(VotePage, "wLNJnQJCD0HlvAD/Wh57Ik+Kk+Y=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransition"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useForm"]
    ];
});
_c = VotePage;
var _c;
__turbopack_context__.k.register(_c, "VotePage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_9a8e0c0d._.js.map