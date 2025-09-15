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
"[project]/src/app/data:3c7756 [app-client] (ecmascript) <text/javascript>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
/* __next_internal_action_entry_do_not_use__ [{"4074337a044cd269bb88fa2d15f93e38f7b350b297":"sendNominationEmail"},"src/app/actions.ts",""] */ __turbopack_context__.s({
    "sendNominationEmail": (()=>sendNominationEmail)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
"use turbopack no side effects";
;
var sendNominationEmail = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("4074337a044cd269bb88fa2d15f93e38f7b350b297", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "sendNominationEmail"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYWN0aW9ucy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHNlcnZlcic7XG5cbmltcG9ydCB7IHogfSBmcm9tICd6b2QnO1xuaW1wb3J0IHsgYWRkTm9taW5hdGlvbiB9IGZyb20gJ0Avc2VydmljZXMvZmlyZXN0b3JlJztcbmltcG9ydCB7IFJlc2VuZCB9IGZyb20gJ3Jlc2VuZCc7XG5pbXBvcnQgeyByZWRpcmVjdCB9IGZyb20gJ25leHQvbmF2aWdhdGlvbic7XG5cbi8vIEV4cGxpY2l0bHkgcmVhZCBlbnZpcm9ubWVudCB2YXJpYWJsZXMgYXQgdGhlIHRvcCBsZXZlbFxuY29uc3QgTkVYVF9QVUJMSUNfQkFTRV9VUkwgPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19CQVNFX1VSTCB8fCAnaHR0cDovL2xvY2FsaG9zdDo5MDAyJztcbmNvbnN0IFJFU0VORF9BUElfS0VZID0gcHJvY2Vzcy5lbnYuUkVTRU5EX0FQSV9LRVk7XG5jb25zdCBQQVlTVEFDS19TRUNSRVRfS0VZID0gcHJvY2Vzcy5lbnYuUEFZU1RBQ0tfU0VDUkVUX0tFWTtcbi8vIFdlIHdpbGwgcmVhZCB0aGUgWmFwaWVyIFVSTCBpbnNpZGUgdGhlIGZ1bmN0aW9uIHRvIGVuc3VyZSBpdCdzIG5vdCBtaXNzZWQuXG5cbmNvbnN0IG5vbWluYXRpb25Gb3JtU2NoZW1hID0gei5vYmplY3Qoe1xuICBjYXRlZ29yeTogei5zdHJpbmcoKSxcbiAgbm9taW5lZU5hbWU6IHouc3RyaW5nKCksXG4gIG5vbWluZWVQaG9uZTogei5zdHJpbmcoKSxcbiAgbm9taW5hdGlvblJlYXNvbjogei5zdHJpbmcoKSxcbiAgbm9taW5hdG9yTmFtZTogei5zdHJpbmcoKSxcbiAgbm9taW5hdG9yUGhvbmU6IHouc3RyaW5nKCksXG59KTtcblxuY29uc3Qgdm90ZVNjaGVtYSA9IHoub2JqZWN0KHtcbiAgY29udGVzdGFudElkOiB6LnN0cmluZygpLFxuICBjb250ZXN0YW50TmFtZTogei5zdHJpbmcoKSxcbiAgY29udGVzdGFudENhdGVnb3J5OiB6LnN0cmluZygpLFxuICBudW1iZXJPZlZvdGVzOiB6Lm51bWJlcigpLmludCgpLnBvc2l0aXZlKCksXG59KTtcblxuY29uc3QgcmVtaXRhUGF5bWVudFJlcXVlc3RTY2hlbWEgPSB6Lm9iamVjdCh7XG4gIGFtb3VudDogei5udW1iZXIoKSxcbiAgY2hhcmdlOiB6Lm51bWJlcigpLFxuICB0cmFuc2FjdGlvblJlZmVyZW5jZTogei5zdHJpbmcoKSxcbiAgY3VzdG9tZXJFbWFpbDogei5zdHJpbmcoKS5lbWFpbCgpLFxuICBjdXN0b21lck5hbWU6IHouc3RyaW5nKCksXG4gIGN1c3RvbWVyUGhvbmVOdW1iZXI6IHouc3RyaW5nKCksXG4gIGRlc2NyaXB0aW9uOiB6LnN0cmluZygpLFxuICAvLyBQYXNzIGFsb25nIHZvdGUgZGF0YSBmb3IgcmVjb3JkaW5nXG4gIGNvbnRlc3RhbnRJZDogei5zdHJpbmcoKSxcbiAgY29udGVzdGFudE5hbWU6IHouc3RyaW5nKCksXG4gIGNvbnRlc3RhbnRDYXRlZ29yeTogei5zdHJpbmcoKSxcbiAgbnVtYmVyT2ZWb3Rlczogei5udW1iZXIoKSxcbn0pO1xuXG5jb25zdCByZW1pdGFSZWNlaXB0U2NoZW1hID0gei5vYmplY3Qoe1xuICBycnI6IHouc3RyaW5nKCksXG59KTtcblxuY29uc3QgcmVtaXRhUnJyVmFsaWRhdGlvblNjaGVtYSA9IHoub2JqZWN0KHtcbiAgcnJyOiB6LnN0cmluZygpLFxuICBjaGFubmVsSWQ6IHouc3RyaW5nKCksXG59KTtcblxuY29uc3QgcGF5c3RhY2tQYXltZW50UmVxdWVzdFNjaGVtYSA9IHoub2JqZWN0KHtcbiAgZW1haWw6IHouc3RyaW5nKCkuZW1haWwoKSxcbiAgYW1vdW50OiB6Lm51bWJlcigpLFxuICBtZXRhZGF0YTogei5vYmplY3Qoe1xuICAgIGNvbnRlc3RhbnRJZDogei5zdHJpbmcoKSxcbiAgICBjb250ZXN0YW50TmFtZTogei5zdHJpbmcoKSxcbiAgICBjb250ZXN0YW50Q2F0ZWdvcnk6IHouc3RyaW5nKCksXG4gICAgbnVtYmVyT2ZWb3Rlczogei5udW1iZXIoKSxcbiAgfSksXG59KTtcblxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc2VuZE5vbWluYXRpb25FbWFpbChmb3JtRGF0YTogei5pbmZlcjx0eXBlb2Ygbm9taW5hdGlvbkZvcm1TY2hlbWE+KSB7XG4gIGNvbnN0IHZhbGlkYXRlZEZpZWxkcyA9IG5vbWluYXRpb25Gb3JtU2NoZW1hLnNhZmVQYXJzZShmb3JtRGF0YSk7XG5cbiAgaWYgKCF2YWxpZGF0ZWRGaWVsZHMuc3VjY2Vzcykge1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ0ludmFsaWQgZm9ybSBkYXRhLicgfTtcbiAgfVxuICBcbiAgdHJ5IHtcbiAgICBjb25zdCB7IGNhdGVnb3J5LCBub21pbmVlTmFtZSwgbm9taW5lZVBob25lLCBub21pbmF0aW9uUmVhc29uLCBub21pbmF0b3JOYW1lLCBub21pbmF0b3JQaG9uZSB9ID0gdmFsaWRhdGVkRmllbGRzLmRhdGE7XG5cbiAgICAvLyAxLiBBdHRlbXB0IHRvIHNlbmQgZW1haWxcbiAgICBpZiAoUkVTRU5EX0FQSV9LRVkpIHtcbiAgICAgIGNvbnN0IHJlc2VuZCA9IG5ldyBSZXNlbmQoUkVTRU5EX0FQSV9LRVkpO1xuICAgICAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gYXdhaXQgcmVzZW5kLmVtYWlscy5zZW5kKHtcbiAgICAgICAgZnJvbTogJ1NSIEZpdG5lc3MgQXdhcmRzIDxub3JlcGx5QHNyZml0bmVzcy5jb20ubmc+JyxcbiAgICAgICAgdG86IFsnc2FtcHNvbjA3QG91dGxvb2suY29tJywgJ3NyZml0bmVzczI0N0BnbWFpbC5jb20nXSxcbiAgICAgICAgc3ViamVjdDogJ05ldyBBd2FyZCBOb21pbmF0aW9uIFJlY2VpdmVkIScsXG4gICAgICAgIGh0bWw6IGBcbiAgICAgICAgICA8aDE+TmV3IFNSIEZpdG5lc3MgQXdhcmQgTm9taW5hdGlvbjwvaDE+XG4gICAgICAgICAgPHA+QSBuZXcgbm9taW5hdGlvbiBoYXMgYmVlbiBzdWJtaXR0ZWQuIEhlcmUgYXJlIHRoZSBkZXRhaWxzOjwvcD5cbiAgICAgICAgICA8aDI+Tm9taW5lZSBEZXRhaWxzOjwvaDI+XG4gICAgICAgICAgPHVsPlxuICAgICAgICAgICAgPGxpPjxzdHJvbmc+Q2F0ZWdvcnk6PC9zdHJvbmc+ICR7Y2F0ZWdvcnl9PC9saT5cbiAgICAgICAgICAgIDxsaT48c3Ryb25nPk5hbWU6PC9zdHJvbmc+ICR7bm9taW5lZU5hbWV9PC9saT5cbiAgICAgICAgICAgIDxsaT48c3Ryb25nPlBob25lOjwvc3Ryb25nPiAke25vbWluZWVQaG9uZX08L2xpPlxuICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgPGgyPlJlYXNvbiBmb3IgTm9taW5hdGlvbjo8L2gyPlxuICAgICAgICAgIDxwPiR7bm9taW5hdGlvblJlYXNvbn08L3A+XG4gICAgICAgICAgPGhyIC8+XG4gICAgICAgICAgPGgyPk5vbWluYXRvciBEZXRhaWxzOjwvaDI+XG4gICAgICAgICAgPHVsPlxuICAgICAgICAgICAgPGxpPjxzdHJvbmc+TmFtZTo8L3N0cm9uZz4gJHtub21pbmF0b3JOYW1lfTwvbGk+XG4gICAgICAgICAgICA8bGk+PHN0cm9uZz5QaG9uZTo8L3N0cm9uZz4gJHtub21pbmF0b3JQaG9uZX08L2xpPlxuICAgICAgICAgIDwvdWw+XG4gICAgICAgIGAsXG4gICAgICB9KTtcblxuICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgIC8vIElmIGVtYWlsIGZhaWxzLCByZXR1cm4gYW4gZXJyb3IgYW5kIGRvIG5vdCBzYXZlIHRvIERCXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ1Jlc2VuZCBBUEkgRXJyb3I6JywgZXJyb3IpO1xuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdGYWlsZWQgdG8gc2VuZCBub21pbmF0aW9uIGVtYWlsLiBQbGVhc2UgdHJ5IGFnYWluLicgfTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLndhcm4oJ1Jlc2VuZCBBUEkga2V5IGlzIG5vdCBjb25maWd1cmVkLiBTa2lwcGluZyBlbWFpbCBzZW5kaW5nLicpO1xuICAgIH1cblxuICAgIC8vIDIuIElmIGVtYWlsIGlzIHNlbnQgKG9yIHNraXBwZWQpLCBzYXZlIHRvIEZpcmVzdG9yZVxuICAgIGF3YWl0IGFkZE5vbWluYXRpb24odmFsaWRhdGVkRmllbGRzLmRhdGEpO1xuICAgIFxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIG1lc3NhZ2U6ICdOb21pbmF0aW9uIHN1Ym1pdHRlZCBzdWNjZXNzZnVsbHkhJyB9O1xuXG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcignQW4gdW5leHBlY3RlZCBlcnJvciBvY2N1cnJlZCBpbiBzZW5kTm9taW5hdGlvbkVtYWlsOicsIGVycm9yKTtcbiAgICByZXR1cm4ge1xuICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICBlcnJvcjogJ0FuIHVuZXhwZWN0ZWQgc2VydmVyIGVycm9yIG9jY3VycmVkLiBQbGVhc2UgdHJ5IGFnYWluIGxhdGVyLicsXG4gICAgfTtcbiAgfVxufVxuXG4vKipcbiAqIFNlbmRzIHZvdGUgZGF0YSB0byBhIFphcGllciB3ZWJob29rLiBUaGlzIGlzIHRoZSBwcmltYXJ5IGFjdGlvbiBhZnRlciBhXG4gKiBwYXltZW50IGlzIHN1Y2Nlc3NmdWxseSB2ZXJpZmllZC5cbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJlY29yZFZvdGUodm90ZURhdGE6IHouaW5mZXI8dHlwZW9mIHZvdGVTY2hlbWE+KSB7XG4gIGNvbnN0IHZhbGlkYXRlZEZpZWxkcyA9IHZvdGVTY2hlbWEuc2FmZVBhcnNlKHZvdGVEYXRhKTtcblxuICBpZiAoIXZhbGlkYXRlZEZpZWxkcy5zdWNjZXNzKSB7XG4gICAgY29uc29sZS5lcnJvcihcIkludmFsaWQgdm90ZSBkYXRhIGZvciBaYXBpZXI6XCIsIHZhbGlkYXRlZEZpZWxkcy5lcnJvcik7XG4gICAgcmV0dXJuIHtcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgZXJyb3I6ICdJbnZhbGlkIHZvdGUgZGF0YSBwcm92aWRlZC4nLFxuICAgIH07XG4gIH1cblxuICAvLyBSZWFkIHRoZSBaYXBpZXIgd2ViaG9vayBVUkwgZnJvbSBlbnZpcm9ubWVudCB2YXJpYWJsZXMgKmluc2lkZSogdGhlIGZ1bmN0aW9uLlxuICAvLyBUaGlzIGVuc3VyZXMgdGhlIG1vc3QgY3VycmVudCB2YWx1ZSBpcyB1c2VkIGV2ZXJ5IHRpbWUgdGhlIGZ1bmN0aW9uIGlzIGNhbGxlZC5cbiAgY29uc3QgemFwaWVyV2ViaG9va1VybCA9IHByb2Nlc3MuZW52LlpBUElFUl9WT1RFX1dFQkhPT0tfVVJMO1xuICBcbiAgaWYgKCF6YXBpZXJXZWJob29rVXJsKSB7XG4gICAgY29uc29sZS5lcnJvcihcIlpBUElFUl9WT1RFX1dFQkhPT0tfVVJMIGlzIG5vdCBzZXQuIENhbm5vdCBzZW5kIHZvdGUgZGF0YS5cIik7XG4gICAgLy8gU2luY2UgWmFwaWVyIGlzIHRoZSBvbmx5IGRlc3RpbmF0aW9uLCB0aGlzIGlzIG5vdyBhIGNyaXRpY2FsIGZhaWx1cmUuXG4gICAgcmV0dXJuIHtcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgZXJyb3I6ICdJbnRlZ3JhdGlvbiBlbmRwb2ludCBpcyBub3QgY29uZmlndXJlZC4gUGxlYXNlIGNvbnRhY3Qgc3VwcG9ydC4nLFxuICAgIH07XG4gIH1cblxuICB0cnkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goemFwaWVyV2ViaG9va1VybCwge1xuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgLi4udmFsaWRhdGVkRmllbGRzLmRhdGEsXG4gICAgICAgIHRpbWVzdGFtcDogbmV3IERhdGUoKS50b0lTT1N0cmluZygpLFxuICAgICAgfSksXG4gICAgfSk7XG5cbiAgICBpZiAocmVzcG9uc2Uub2spIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJTdWNjZXNzZnVsbHkgc2VudCB2b3RlIGRhdGEgdG8gWmFwaWVyLlwiKTtcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgbWVzc2FnZTogXCJWb3RlIHN1Y2Nlc3NmdWxseSByZWNvcmRlZC5cIiB9O1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlQm9keSA9IGF3YWl0IHJlc3BvbnNlLnRleHQoKTtcbiAgICAgICAgY29uc29sZS5lcnJvcihgWmFwaWVyIHdlYmhvb2sgY2FsbCBmYWlsZWQgd2l0aCBzdGF0dXMgJHtyZXNwb25zZS5zdGF0dXN9OiAke3Jlc3BvbnNlQm9keX1gKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgICAgICBlcnJvcjogJ0ZhaWxlZCB0byBzZW5kIHZvdGUgZGF0YSB0byB0aGUgdHJhY2tpbmcgc3lzdGVtLicsXG4gICAgICAgIH07XG4gICAgfVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gdHJpZ2dlciBaYXBpZXIgd2ViaG9vayBkdWUgdG8gYSBuZXR3b3JrIG9yIGZldGNoIGVycm9yOlwiLCBlcnJvcik7XG4gICAgcmV0dXJuIHtcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgZXJyb3I6ICdDb3VsZCBub3QgY29ubmVjdCB0byB0aGUgdm90ZSB0cmFja2luZyBzeXN0ZW0uJyxcbiAgICB9O1xuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVQYXlzdGFja1BheW1lbnQocGF5bWVudERhdGE6IHouaW5mZXI8dHlwZW9mIHBheXN0YWNrUGF5bWVudFJlcXVlc3RTY2hlbWE+KSB7XG4gICAgY29uc3QgdmFsaWRhdGVkRmllbGRzID0gcGF5c3RhY2tQYXltZW50UmVxdWVzdFNjaGVtYS5zYWZlUGFyc2UocGF5bWVudERhdGEpO1xuICAgIGlmICghdmFsaWRhdGVkRmllbGRzLnN1Y2Nlc3MpIHtcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnSW52YWxpZCBwYXltZW50IGRhdGEgcHJvdmlkZWQuJyB9O1xuICAgIH1cblxuICAgIGlmICghUEFZU1RBQ0tfU0VDUkVUX0tFWSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiUGF5c3RhY2sgc2VjcmV0IGtleSBpcyBub3QgY29uZmlndXJlZC5cIik7XG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJQYXltZW50IGdhdGV3YXkgaXMgbm90IGNvbmZpZ3VyZWQgY29ycmVjdGx5LlwiIH07XG4gICAgfVxuXG4gICAgY29uc3QgeyBlbWFpbCwgYW1vdW50LCBtZXRhZGF0YSB9ID0gdmFsaWRhdGVkRmllbGRzLmRhdGE7XG4gICAgXG4gICAgLy8gRW5zdXJlIHRoZSBjYWxsYmFjayBVUkwgaXMgY29ycmVjdGx5IGZvcm1lZC5cbiAgICBjb25zdCBjYWxsYmFja1VybCA9IGAke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0JBU0VfVVJMIHx8ICdodHRwOi8vbG9jYWxob3N0OjkwMDInfS92b3RlL2NhbGxiYWNrYDtcblxuXG4gICAgY29uc3QgYm9keSA9IHtcbiAgICAgICAgZW1haWwsXG4gICAgICAgIGFtb3VudDogYW1vdW50ICogMTAwLCAvLyBQYXlzdGFjayBleHBlY3RzIGFtb3VudCBpbiBrb2JvXG4gICAgICAgIGNhbGxiYWNrX3VybDogY2FsbGJhY2tVcmwsXG4gICAgICAgIG1ldGFkYXRhLFxuICAgIH07XG5cbiAgICB0cnkge1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCdodHRwczovL2FwaS5wYXlzdGFjay5jby90cmFuc2FjdGlvbi9pbml0aWFsaXplJywge1xuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShib2R5KSxcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgICAgICdBdXRob3JpemF0aW9uJzogYEJlYXJlciAke1BBWVNUQUNLX1NFQ1JFVF9LRVl9YCxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICBcbiAgICAgICAgaWYgKGRhdGEuc3RhdHVzKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IHRydWUsXG4gICAgICAgICAgICAgICAgYXV0aG9yaXphdGlvblVybDogZGF0YS5kYXRhLmF1dGhvcml6YXRpb25fdXJsLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJQYXlzdGFjayBBUEkgZXJyb3I6XCIsIGRhdGEubWVzc2FnZSk7XG4gICAgICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGRhdGEubWVzc2FnZSB8fCAnUGF5bWVudCBpbml0aWF0aW9uIGZhaWxlZC4nIH07XG4gICAgICAgIH1cblxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBjYWxsaW5nIFBheXN0YWNrIEFQSTpcIiwgZXJyb3IpO1xuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiQ291bGQgbm90IGNvbm5lY3QgdG8gdGhlIHBheW1lbnQgZ2F0ZXdheS5cIiB9O1xuICAgIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHZlcmlmeVBheXN0YWNrUGF5bWVudChyZWZlcmVuY2U6IHN0cmluZykge1xuICAgIGlmICghcmVmZXJlbmNlKSB7XG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ05vIHBheW1lbnQgcmVmZXJlbmNlIHByb3ZpZGVkLicsIHN0YXR1czogJ2Vycm9yJyB9O1xuICAgIH1cblxuICAgIGlmICghUEFZU1RBQ0tfU0VDUkVUX0tFWSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiUGF5c3RhY2sgc2VjcmV0IGtleSBpcyBub3QgY29uZmlndXJlZC5cIik7XG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJQYXltZW50IGdhdGV3YXkgaXMgbm90IGNvbmZpZ3VyZWQgY29ycmVjdGx5LlwiLCBzdGF0dXM6ICdlcnJvcicgfTtcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwczovL2FwaS5wYXlzdGFjay5jby90cmFuc2FjdGlvbi92ZXJpZnkvJHtyZWZlcmVuY2V9YCwge1xuICAgICAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6IGBCZWFyZXIgJHtQQVlTVEFDS19TRUNSRVRfS0VZfWAsXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cbiAgICAgICAgaWYgKGRhdGEuc3RhdHVzICYmIGRhdGEuZGF0YS5zdGF0dXMgPT09ICdzdWNjZXNzJykge1xuICAgICAgICAgICAgY29uc3QgeyBjb250ZXN0YW50SWQsIGNvbnRlc3RhbnROYW1lLCBjb250ZXN0YW50Q2F0ZWdvcnksIG51bWJlck9mVm90ZXMgfSA9IGRhdGEuZGF0YS5tZXRhZGF0YTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8gVGhpcyBpcyB0aGUgY3J1Y2lhbCBzdGVwOiByZWNvcmQgdGhlIHZvdGUgb25seSBhZnRlciBzdWNjZXNzZnVsIHZlcmlmaWNhdGlvbi5cbiAgICAgICAgICAgIGNvbnN0IHZvdGVSZWNvcmRSZXN1bHQgPSBhd2FpdCByZWNvcmRWb3RlKHtcbiAgICAgICAgICAgICAgICBjb250ZXN0YW50SWQsXG4gICAgICAgICAgICAgICAgY29udGVzdGFudE5hbWUsXG4gICAgICAgICAgICAgICAgY29udGVzdGFudENhdGVnb3J5LFxuICAgICAgICAgICAgICAgIG51bWJlck9mVm90ZXM6IE51bWJlcihudW1iZXJPZlZvdGVzKSxcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpZiAodm90ZVJlY29yZFJlc3VsdC5zdWNjZXNzKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgXG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IHRydWUsIFxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiAnUGF5bWVudCB2ZXJpZmllZCBhbmQgdm90ZSByZWNvcmRlZCBzdWNjZXNzZnVsbHkhJyxcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzOiAnc3VjY2VzcycsXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgIHJldHVybiB7IFxuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiBmYWxzZSwgXG4gICAgICAgICAgICAgICAgICAgIGVycm9yOiBgUGF5bWVudCB3YXMgc3VjY2Vzc2Z1bCwgYnV0IHZvdGUgcmVjb3JkaW5nIGZhaWxlZC4gUGxlYXNlIGNvbnRhY3Qgc3VwcG9ydC4gRXJyb3I6ICR7dm90ZVJlY29yZFJlc3VsdC5lcnJvcn1gLFxuICAgICAgICAgICAgICAgICAgICBzdGF0dXM6ICdlcnJvcicsXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHsgXG4gICAgICAgICAgICAgICAgc3VjY2VzczogZmFsc2UsIFxuICAgICAgICAgICAgICAgIGVycm9yOiBgUGF5bWVudCB2ZXJpZmljYXRpb24gZmFpbGVkOiAke2RhdGEuZGF0YS5nYXRld2F5X3Jlc3BvbnNlfWAsXG4gICAgICAgICAgICAgICAgc3RhdHVzOiBkYXRhLmRhdGEuc3RhdHVzIHx8ICdmYWlsZWQnLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIHZlcmlmeWluZyBQYXlzdGFjayBwYXltZW50OlwiLCBlcnJvcik7XG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJDb3VsZCBub3QgY29ubmVjdCB0byB0aGUgcGF5bWVudCBnYXRld2F5IGZvciB2ZXJpZmljYXRpb24uXCIsIHN0YXR1czogJ2Vycm9yJyB9O1xuICAgIH1cbn1cblxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlUmVtaXRhUGF5bWVudChwYXltZW50RGF0YTogei5pbmZlcjx0eXBlb2YgcmVtaXRhUGF5bWVudFJlcXVlc3RTY2hlbWE+KSB7XG4gICAgY29uc3QgdmFsaWRhdGVkRmllbGRzID0gcmVtaXRhUGF5bWVudFJlcXVlc3RTY2hlbWEuc2FmZVBhcnNlKHBheW1lbnREYXRhKTtcbiAgICBpZiAoIXZhbGlkYXRlZEZpZWxkcy5zdWNjZXNzKSB7XG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJJbnZhbGlkIFJlbWl0YSBwYXltZW50IGRhdGEuXCIgfTtcbiAgICB9XG5cbiAgICAvLyBSZW1pdGEgQVBJIGtleSBpcyBtaXNzaW5nLiBBc3N1bWluZyBpdCdzIGFsc28gYSBzdWJzY3JpcHRpb24ga2V5LCBzaW1pbGFyIHRvIHRoZSBXZW1hIG9uZSB0aGF0IHdhcyByZW1vdmVkLlxuICAgIGNvbnN0IFJFTUlUQV9TVUJTQ1JJUFRJT05fS0VZID0gcHJvY2Vzcy5lbnYuUkVNSVRBX1NVQlNDUklQVElPTl9LRVk7XG4gICAgaWYgKCFSRU1JVEFfU1VCU0NSSVBUSU9OX0tFWSkge1xuICAgICAgY29uc29sZS5lcnJvcihcIlJlbWl0YSBzdWJzY3JpcHRpb24ga2V5IGlzIG5vdCBzZXQuXCIpO1xuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIlBheW1lbnQgZ2F0ZXdheSBpcyBub3QgY29uZmlndXJlZCBjb3JyZWN0bHkuXCIgfTtcbiAgICB9XG5cblxuICAgIGNvbnN0IHsgYW1vdW50LCBjaGFyZ2UsIHRyYW5zYWN0aW9uUmVmZXJlbmNlLCBjdXN0b21lckVtYWlsLCBjdXN0b21lck5hbWUsIGN1c3RvbWVyUGhvbmVOdW1iZXIsIGRlc2NyaXB0aW9uLCBjb250ZXN0YW50SWQsIGNvbnRlc3RhbnROYW1lLCBjb250ZXN0YW50Q2F0ZWdvcnksIG51bWJlck9mVm90ZXMgfSA9IHZhbGlkYXRlZEZpZWxkcy5kYXRhO1xuXG4gICAgY29uc3QgYm9keSA9IHtcbiAgICAgICAgLy8gLi4uIChSZW1pdGEgQVBJIHNwZWNpZmljIGJvZHksIHBsYWNlaG9sZGVycyBmb3Igc2ltcGxpY2l0eSlcbiAgICAgICAgY2hhbm5lbElkOiBcInN0cmluZ1wiLCBcbiAgICAgICAgY2lmOiBcInN0cmluZ1wiLCBcbiAgICAgICAgY3VzdG9tZXJBY2NvdW50OiBcInN0cmluZ1wiLCBcbiAgICAgICAgYW1vdW50OiBhbW91bnQsXG4gICAgICAgIGNoYXJnZTogY2hhcmdlLFxuICAgICAgICB0cmFuc2FjdGlvblJlZmVyZW5jZTogdHJhbnNhY3Rpb25SZWZlcmVuY2UsXG4gICAgICAgIGN1c3RvbWVyRW1haWw6IGN1c3RvbWVyRW1haWwsXG4gICAgICAgIGN1c3RvbWVyUGhvbmVOdW1iZXI6IGN1c3RvbWVyUGhvbmVOdW1iZXIsXG4gICAgICAgIGN1c3RvbWVyTmFtZTogY3VzdG9tZXJOYW1lLFxuICAgICAgICBycnI6IFwic3RyaW5nXCIsIFxuICAgICAgICBwYXllckVtYWlsOiBjdXN0b21lckVtYWlsLFxuICAgICAgICBwYXllck5hbWU6IGN1c3RvbWVyTmFtZSxcbiAgICAgICAgcGF5ZXJOdW1iZXI6IGN1c3RvbWVyUGhvbmVOdW1iZXIsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBkZXNjcmlwdGlvbixcbiAgICAgICAgYmlsbEF1dGhPcHRpb25zOiB7XG4gICAgICAgICAgICBwaW46IFwic3RyaW5nXCIsXG4gICAgICAgICAgICBvdHA6IFwic3RyaW5nXCIsXG4gICAgICAgICAgICBiaW9tZXRyaWNQb2xpY3k6IFwic3RyaW5nXCIsXG4gICAgICAgICAgICBiaW9tZXRyaWNUb2tlbjogXCJzdHJpbmdcIixcbiAgICAgICAgICAgIHBsYXRmb3JtVHJhbnNhY3Rpb25SZWZlcmVuY2U6IFwic3RyaW5nXCIsXG4gICAgICAgICAgICBhdXRoZW50aWNhdGlvblR5cGU6IDBcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICB0cnkge1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCdodHRwczovL3dlbWEtYWxhdGRldi1hcGltZ3QuYXp1cmUtYXBpLm5ldC9yZW1pdGEtcGF5bWVudHMvYXBpL1JlbWl0YVBheW1lbnQvUGF5UmVtaXRhQmlsbCcsIHtcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoYm9keSksXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICAgICAnQ2FjaGUtQ29udHJvbCc6ICduby1jYWNoZScsXG4gICAgICAgICAgICAgICAgJ09jcC1BcGltLVN1YnNjcmlwdGlvbi1LZXknOiBSRU1JVEFfU1VCU0NSSVBUSU9OX0tFWSxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgcmVzcG9uc2VUZXh0ID0gYXdhaXQgcmVzcG9uc2UudGV4dCgpO1xuICAgICAgICBjb25zb2xlLmxvZyhcIlJlbWl0YSBQYXlSZW1pdGFCaWxsIHJlc3BvbnNlIHN0YXR1czpcIiwgcmVzcG9uc2Uuc3RhdHVzKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJSZW1pdGEgUGF5UmVtaXRhQmlsbCByZXNwb25zZSBib2R5OlwiLCByZXNwb25zZVRleHQpO1xuICAgICAgICBcbiAgICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgICBjb25zdCB2b3RlRGF0YSA9IHsgY29udGVzdGFudElkLCBjb250ZXN0YW50TmFtZSwgY29udGVzdGFudENhdGVnb3J5LCBudW1iZXJPZlZvdGVzIH07XG4gICAgICAgICAgICBjb25zdCB2b3RlUmVjb3JkUmVzdWx0ID0gYXdhaXQgcmVjb3JkVm90ZSh2b3RlRGF0YSk7XG4gICAgICAgICAgICBpZiAodm90ZVJlY29yZFJlc3VsdC5zdWNjZXNzKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgbWVzc2FnZTogXCJSZW1pdGEgcGF5bWVudCBwcm9jZXNzZWQgYW5kIHZvdGUgcmVjb3JkZWQgc3VjY2Vzc2Z1bGx5LlwiLCBkYXRhOiBKU09OLnBhcnNlKHJlc3BvbnNlVGV4dCkgfTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBgUmVtaXRhIHBheW1lbnQgc3VjY2VlZGVkLCBidXQgdm90ZSByZWNvcmRpbmcgZmFpbGVkOiAke3ZvdGVSZWNvcmRSZXN1bHQuZXJyb3J9YCB9O1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDUwMCkge1xuICAgICAgICAgICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGBSZW1pdGEgcGF5bWVudCBmYWlsZWQgZHVlIHRvIGFuIGludGVybmFsIHNlcnZlciBlcnJvciBvbiB0aGUgZ2F0ZXdheS4gUGxlYXNlIHRyeSBhZ2FpbiBsYXRlciBvciBjb250YWN0IHN1cHBvcnQuYCB9O1xuICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogYFJlbWl0YSBwYXltZW50IGZhaWxlZDogJHtyZXNwb25zZVRleHR9YCB9O1xuICAgICAgICB9XG5cbiAgICB9IGNhdGNoKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBjYWxsaW5nIFJlbWl0YSBQYXlSZW1pdGFCaWxsIEFQSTpcIiwgZXJyb3IpO1xuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiQ291bGQgbm90IGNvbm5lY3QgdG8gdGhlIFJlbWl0YSBwYXltZW50IGdhdGV3YXkuXCIgfTtcbiAgICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBwcmludFJlbWl0YVJlY2VpcHQocmVjZWlwdERhdGE6IHouaW5mZXI8dHlwZW9mIHJlbWl0YVJlY2VpcHRTY2hlbWE+KSB7XG4gICAgY29uc3QgdmFsaWRhdGVkRmllbGRzID0gcmVtaXRhUmVjZWlwdFNjaGVtYS5zYWZlUGFyc2UocmVjZWlwdERhdGEpO1xuICAgIGlmICghdmFsaWRhdGVkRmllbGRzLnN1Y2Nlc3MpIHtcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIkludmFsaWQgUmVtaXRhIHJlY2VpcHQgZGF0YS5cIiB9O1xuICAgIH1cbiAgICBcbiAgICAvLyBSZW1pdGEgQVBJIGtleSBpcyBtaXNzaW5nLiBBc3N1bWluZyBpdCdzIGFsc28gYSBzdWJzY3JpcHRpb24ga2V5LlxuICAgIGNvbnN0IFJFTUlUQV9TVUJTQ1JJUFRJT05fS0VZID0gcHJvY2Vzcy5lbnYuUkVNSVRBX1NVQlNDUklQVElPTl9LRVk7XG4gICAgaWYgKCFSRU1JVEFfU1VCU0NSSVBUSU9OX0tFWSkge1xuICAgICAgY29uc29sZS5lcnJvcihcIlJlbWl0YSBzdWJzY3JpcHRpb24ga2V5IGlzIG5vdCBzZXQuXCIpO1xuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIlBheW1lbnQgZ2F0ZXdheSBpcyBub3QgY29uZmlndXJlZCBjb3JyZWN0bHkuXCIgfTtcbiAgICB9XG5cbiAgICBjb25zdCB7IHJyciB9ID0gdmFsaWRhdGVkRmllbGRzLmRhdGE7XG5cbiAgICBjb25zdCByZW1pdGFVcmwgPSBgaHR0cHM6Ly93ZW1hLWFsYXRkZXYtYXBpbWd0LmF6dXJlLWFwaS5uZXQvcmVtaXRhLXBheW1lbnRzL2FwaS9SZW1pdGFQYXltZW50L1ByaW50UmVtaXRhUmVjZWlwdC8ke3Jycn1gO1xuXG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChyZW1pdGFVcmwsIHtcbiAgICAgICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgJ0NhY2hlLUNvbnRyb2wnOiAnbm8tY2FjaGUnLFxuICAgICAgICAgICAgICAgICdPY3AtQXBpbS1TdWJzY3JpcHRpb24tS2V5JzogUkVNSVRBX1NVQlNDUklQVElPTl9LRVksXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlVGV4dCA9IGF3YWl0IHJlc3BvbnNlLnRleHQoKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJSZW1pdGEgUHJpbnRSZW1pdGFSZWNlaXB0IHJlc3BvbnNlIHN0YXR1czpcIiwgcmVzcG9uc2Uuc3RhdHVzKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJSZW1pdGEgUHJpbnRSZW1pdGFSZWNlaXB0IHJlc3BvbnNlIGJvZHk6XCIsIHJlc3BvbnNlVGV4dCk7XG4gICAgICAgIFxuICAgICAgICBpZiAocmVzcG9uc2Uub2spIHtcbiAgICAgICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIHJlY2VpcHREYXRhOiByZXNwb25zZVRleHQgfTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogYEZhaWxlZCB0byBmZXRjaCBSZW1pdGEgcmVjZWlwdDogJHtyZXNwb25zZVRleHR9YCB9O1xuICAgICAgICB9XG5cbiAgICB9IGNhdGNoKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBjYWxsaW5nIFJlbWl0YSBQcmludFJlbWl0YVJlY2VpcHQgQVBJOlwiLCBlcnJvcik7XG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJDb3VsZCBub3QgY29ubmVjdCB0byB0aGUgUmVtaXRhIHBheW1lbnQgZ2F0ZXdheSB0byBwcmludCByZWNlaXB0LlwiIH07XG4gICAgfVxufVxuXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB2YWxpZGF0ZVJlbWl0YVJycih2YWxpZGF0aW9uRGF0YTogei5pbmZlcjx0eXBlb2YgcmVtaXRhUnJyVmFsaWRhdGlvblNjaGVtYT4pIHtcbiAgICBjb25zdCB2YWxpZGF0ZWRGaWVsZHMgPSByZW1pdGFScnJWYWxpZGF0aW9uU2NoZW1hLnNhZmVQYXJzZSh2YWxpZGF0aW9uRGF0YSk7XG4gICAgaWYgKCF2YWxpZGF0ZWRGaWVsZHMuc3VjY2Vzcykge1xuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiSW52YWxpZCBSZW1pdGEgUlJSIHZhbGlkYXRpb24gZGF0YS5cIiB9O1xuICAgIH1cblxuICAgIC8vIFJlbWl0YSBBUEkga2V5IGlzIG1pc3NpbmcuIEFzc3VtaW5nIGl0J3MgYWxzbyBhIHN1YnNjcmlwdGlvbiBrZXkuXG4gICAgY29uc3QgUkVNSVRBX1NVQlNDUklQVElPTl9LRVkgPSBwcm9jZXNzLmVudi5SRU1JVEFfU1VCU0NSSVBUSU9OX0tFWTtcbiAgICBpZiAoIVJFTUlUQV9TVUJTQ1JJUFRJT05fS0VZKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwiUmVtaXRhIHN1YnNjcmlwdGlvbiBrZXkgaXMgbm90IHNldC5cIik7XG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiUGF5bWVudCBnYXRld2F5IGlzIG5vdCBjb25maWd1cmVkIGNvcnJlY3RseS5cIiB9O1xuICAgIH1cbiAgICBcbiAgICBjb25zdCB7IHJyciwgY2hhbm5lbElkIH0gPSB2YWxpZGF0ZWRGaWVsZHMuZGF0YTtcblxuICAgIGNvbnN0IHJlbWl0YVVybCA9IGBodHRwczovL3dlbWEtYWxhdGRldi1hcGltZ3QuYXp1cmUtYXBpLm5ldC9yZW1pdGEtcGF5bWVudHMvYXBpL1JlbWl0YVBheW1lbnQvVmFsaWRhdGVScnIvJHtycnJ9LyR7Y2hhbm5lbElkfWA7XG5cbiAgICB0cnkge1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHJlbWl0YVVybCwge1xuICAgICAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAnQ2FjaGUtQ29udHJvbCc6ICduby1jYWNoZScsXG4gICAgICAgICAgICAgICAgJ09jcC1BcGltLVN1YnNjcmlwdGlvbi1LZXknOiBSRU1JVEFfU1VCU0NSSVBUSU9OX0tFWSxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgcmVzcG9uc2VUZXh0ID0gYXdhaXQgcmVzcG9uc2UudGV4dCgpO1xuICAgICAgICBjb25zb2xlLmxvZyhcIlJlbWl0YSBWYWxpZGF0ZVJyciByZXNwb25zZSBzdGF0dXM6XCIsIHJlc3BvbnNlLnN0YXR1cyk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiUmVtaXRhIFZhbGlkYXRlUnJyIHJlc3BvbnNlIGJvZHk6XCIsIHJlc3BvbnNlVGV4dCk7XG4gICAgICAgIFxuICAgICAgICBpZiAocmVzcG9uc2Uub2spIHtcbiAgICAgICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIG1lc3NhZ2U6IFwiUmVtaXRhIFJSUiB2YWxpZGF0ZWQgc3VjY2Vzc2Z1bGx5LlwiLCBkYXRhOiBKU09OLnBhcnNlKHJlc3BvbnNlVGV4dCkgfTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogYEZhaWxlZCB0byB2YWxpZGF0ZSBSZW1pdGEgUlJSOiAke3Jlc3BvbnNlVGV4dH1gIH07XG4gICAgICAgIH1cblxuICAgIH0gY2F0Y2goZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGNhbGxpbmcgUmVtaXRhIFZhbGlkYXRlUnJyIEFQSTpcIiwgZXJyb3IpO1xuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiQ291bGQgbm90IGNvbm5lY3QgdG8gdGhlIFJlbWl0YSBwYXltZW50IGdhdGV3YXkgdG8gdmFsaWRhdGUgUlJSLlwiIH07XG4gICAgfVxufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiIrUkFpRXNCIn0=
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$data$3a$3c7756__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/data:3c7756 [app-client] (ecmascript) <text/javascript>");
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
        title: "Foundation Fitness Award"
    },
    {
        title: "Mental Health & Wellness Advocate"
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
        title: "Inspirational Weight-Loss Journey"
    },
    {
        title: "Art and Wellness Advocate"
    },
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
        id: '12',
        name: 'GoodWorks LLC',
        category: 'Corporate Social Responsibility Champion',
        image: 'https://placehold.co/400x400.png?text=GW+LLC'
    },
    // New contestants
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
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$data$3a$3c7756__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["sendNominationEmail"])(values);
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
                                lineNumber: 233,
                                columnNumber: 37
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/vote/page.tsx",
                        lineNumber: 226,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/vote/page.tsx",
                    lineNumber: 225,
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
                            lineNumber: 238,
                            columnNumber: 26
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/app/vote/page.tsx",
                    lineNumber: 236,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/vote/page.tsx",
            lineNumber: 224,
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
                                lineNumber: 257,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "font-headline text-2xl text-amber-400 tracking-wider",
                                children: "IDENTIFY, RECOGNIZE & CELEBRATE FITNESS INDUSTRY EXCELLENCE"
                            }, void 0, false, {
                                fileName: "[project]/src/app/vote/page.tsx",
                                lineNumber: 266,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/vote/page.tsx",
                        lineNumber: 256,
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
                            lineNumber: 272,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/vote/page.tsx",
                        lineNumber: 271,
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
                                                            lineNumber: 289,
                                                            columnNumber: 41
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardDescription"], {
                                                            className: "text-zinc-400",
                                                            children: "1. Select a category, then choose a contestant below."
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/vote/page.tsx",
                                                            lineNumber: 290,
                                                            columnNumber: 41
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/vote/page.tsx",
                                                    lineNumber: 288,
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
                                                                    lineNumber: 294,
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
                                                                            lineNumber: 296,
                                                                            columnNumber: 49
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "h-6 w-px bg-amber-400/30"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/vote/page.tsx",
                                                                            lineNumber: 306,
                                                                            columnNumber: 49
                                                                        }, this),
                                                                        renderDropdown("General", generalCategories),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "h-6 w-px bg-amber-400/30"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/vote/page.tsx",
                                                                            lineNumber: 308,
                                                                            columnNumber: 49
                                                                        }, this),
                                                                        renderDropdown("Organizations", organizationsCategories)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/vote/page.tsx",
                                                                    lineNumber: 295,
                                                                    columnNumber: 45
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/vote/page.tsx",
                                                            lineNumber: 293,
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
                                                                            lineNumber: 319,
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
                                                                                    lineNumber: 322,
                                                                                    columnNumber: 65
                                                                                }, this))
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/vote/page.tsx",
                                                                            lineNumber: 320,
                                                                            columnNumber: 57
                                                                        }, this)
                                                                    ]
                                                                }, category, true, {
                                                                    fileName: "[project]/src/app/vote/page.tsx",
                                                                    lineNumber: 318,
                                                                    columnNumber: 53
                                                                }, this);
                                                            })
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/vote/page.tsx",
                                                            lineNumber: 312,
                                                            columnNumber: 42
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/vote/page.tsx",
                                                    lineNumber: 292,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/vote/page.tsx",
                                            lineNumber: 287,
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
                                                                lineNumber: 347,
                                                                columnNumber: 45
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardDescription"], {
                                                                className: "text-zinc-400",
                                                                children: "After selecting a contestant, confirm the number of votes and click below."
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/vote/page.tsx",
                                                                lineNumber: 348,
                                                                columnNumber: 45
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/vote/page.tsx",
                                                        lineNumber: 346,
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
                                                                                lineNumber: 356,
                                                                                columnNumber: 57
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                className: "font-bold text-amber-300 text-xl",
                                                                                children: selectedContestant.name
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/vote/page.tsx",
                                                                                lineNumber: 357,
                                                                                columnNumber: 57
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                className: "text-xs text-zinc-400",
                                                                                children: selectedContestant.category
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/vote/page.tsx",
                                                                                lineNumber: 358,
                                                                                columnNumber: 57
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/vote/page.tsx",
                                                                        lineNumber: 355,
                                                                        columnNumber: 53
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                                                className: "text-zinc-300 font-semibold mb-2 block text-center",
                                                                                children: "Number of Votes:"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/vote/page.tsx",
                                                                                lineNumber: 361,
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
                                                                                            lineNumber: 364,
                                                                                            columnNumber: 65
                                                                                        }, this)
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/vote/page.tsx",
                                                                                        lineNumber: 363,
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
                                                                                                lineNumber: 368,
                                                                                                columnNumber: 69
                                                                                            }, this))
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/vote/page.tsx",
                                                                                        lineNumber: 366,
                                                                                        columnNumber: 61
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/app/vote/page.tsx",
                                                                                lineNumber: 362,
                                                                                columnNumber: 57
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/vote/page.tsx",
                                                                        lineNumber: 360,
                                                                        columnNumber: 54
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/vote/page.tsx",
                                                                lineNumber: 354,
                                                                columnNumber: 49
                                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "bg-zinc-800/50 p-4 rounded-lg text-center h-24 flex items-center justify-center",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-zinc-400",
                                                                    children: "Please select a contestant to vote for."
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/vote/page.tsx",
                                                                    lineNumber: 376,
                                                                    columnNumber: 53
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/vote/page.tsx",
                                                                lineNumber: 375,
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
                                                                        lineNumber: 385,
                                                                        columnNumber: 65
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/vote/page.tsx",
                                                                lineNumber: 379,
                                                                columnNumber: 45
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-xs text-zinc-500 mt-4 text-center",
                                                                children: "You will be taken to a final confirmation page with payment details."
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/vote/page.tsx",
                                                                lineNumber: 387,
                                                                columnNumber: 45
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/vote/page.tsx",
                                                        lineNumber: 352,
                                                        columnNumber: 41
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/vote/page.tsx",
                                                lineNumber: 345,
                                                columnNumber: 37
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/vote/page.tsx",
                                            lineNumber: 344,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/vote/page.tsx",
                                    lineNumber: 286,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/vote/page.tsx",
                                lineNumber: 285,
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
                                                        lineNumber: 401,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                                                className: "font-headline text-4xl text-amber-400",
                                                                children: "Recognition Awards"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/vote/page.tsx",
                                                                lineNumber: 403,
                                                                columnNumber: 45
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardDescription"], {
                                                                className: "text-zinc-400",
                                                                children: "Honoring excellence in specialized fields. These categories are for recognition only and are not part of the public vote."
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/vote/page.tsx",
                                                                lineNumber: 404,
                                                                columnNumber: 45
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/vote/page.tsx",
                                                        lineNumber: 402,
                                                        columnNumber: 41
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/vote/page.tsx",
                                                lineNumber: 400,
                                                columnNumber: 37
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/vote/page.tsx",
                                            lineNumber: 399,
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
                                                                lineNumber: 416,
                                                                columnNumber: 53
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4",
                                                                children: contestantsForCategory.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$features$2f$vote$2f$contestant$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                        contestant: c,
                                                                        isVotable: false
                                                                    }, c.id, false, {
                                                                        fileName: "[project]/src/app/vote/page.tsx",
                                                                        lineNumber: 419,
                                                                        columnNumber: 61
                                                                    }, this))
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/vote/page.tsx",
                                                                lineNumber: 417,
                                                                columnNumber: 53
                                                            }, this)
                                                        ]
                                                    }, category.title, true, {
                                                        fileName: "[project]/src/app/vote/page.tsx",
                                                        lineNumber: 415,
                                                        columnNumber: 49
                                                    }, this);
                                                })
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/vote/page.tsx",
                                                lineNumber: 409,
                                                columnNumber: 37
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/vote/page.tsx",
                                            lineNumber: 408,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/vote/page.tsx",
                                    lineNumber: 398,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/vote/page.tsx",
                                lineNumber: 397,
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
                                                        lineNumber: 439,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                                                className: "font-headline text-4xl text-amber-400",
                                                                children: "Online Nomination Form"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/vote/page.tsx",
                                                                lineNumber: 441,
                                                                columnNumber: 45
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardDescription"], {
                                                                className: "text-zinc-400",
                                                                children: "Think someone deserves an award? Nominate them here!"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/vote/page.tsx",
                                                                lineNumber: 442,
                                                                columnNumber: 45
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/vote/page.tsx",
                                                        lineNumber: 440,
                                                        columnNumber: 41
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/vote/page.tsx",
                                                lineNumber: 438,
                                                columnNumber: 37
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/vote/page.tsx",
                                            lineNumber: 437,
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
                                                                                    lineNumber: 455,
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
                                                                                                    lineNumber: 459,
                                                                                                    columnNumber: 73
                                                                                                }, void 0)
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/app/vote/page.tsx",
                                                                                                lineNumber: 458,
                                                                                                columnNumber: 69
                                                                                            }, void 0)
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/app/vote/page.tsx",
                                                                                            lineNumber: 457,
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
                                                                                                    lineNumber: 464,
                                                                                                    columnNumber: 73
                                                                                                }, void 0))
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/app/vote/page.tsx",
                                                                                            lineNumber: 462,
                                                                                            columnNumber: 65
                                                                                        }, void 0)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/src/app/vote/page.tsx",
                                                                                    lineNumber: 456,
                                                                                    columnNumber: 61
                                                                                }, void 0),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormMessage"], {}, void 0, false, {
                                                                                    fileName: "[project]/src/app/vote/page.tsx",
                                                                                    lineNumber: 468,
                                                                                    columnNumber: 61
                                                                                }, void 0)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/vote/page.tsx",
                                                                            lineNumber: 454,
                                                                            columnNumber: 57
                                                                        }, void 0)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/vote/page.tsx",
                                                                    lineNumber: 450,
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
                                                                                    lineNumber: 477,
                                                                                    columnNumber: 61
                                                                                }, void 0),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormControl"], {
                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                                                        placeholder: "e.g., John Doe",
                                                                                        ...field,
                                                                                        className: "bg-zinc-800 border-zinc-700 focus:ring-amber-400"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/vote/page.tsx",
                                                                                        lineNumber: 479,
                                                                                        columnNumber: 65
                                                                                    }, void 0)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/vote/page.tsx",
                                                                                    lineNumber: 478,
                                                                                    columnNumber: 61
                                                                                }, void 0),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormMessage"], {}, void 0, false, {
                                                                                    fileName: "[project]/src/app/vote/page.tsx",
                                                                                    lineNumber: 481,
                                                                                    columnNumber: 61
                                                                                }, void 0)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/vote/page.tsx",
                                                                            lineNumber: 476,
                                                                            columnNumber: 57
                                                                        }, void 0)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/vote/page.tsx",
                                                                    lineNumber: 472,
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
                                                                                    lineNumber: 490,
                                                                                    columnNumber: 61
                                                                                }, void 0),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormControl"], {
                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                                                        placeholder: "e.g., 08012345678",
                                                                                        ...field,
                                                                                        className: "bg-zinc-800 border-zinc-700 focus:ring-amber-400"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/vote/page.tsx",
                                                                                        lineNumber: 492,
                                                                                        columnNumber: 65
                                                                                    }, void 0)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/vote/page.tsx",
                                                                                    lineNumber: 491,
                                                                                    columnNumber: 61
                                                                                }, void 0),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormMessage"], {}, void 0, false, {
                                                                                    fileName: "[project]/src/app/vote/page.tsx",
                                                                                    lineNumber: 494,
                                                                                    columnNumber: 61
                                                                                }, void 0)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/vote/page.tsx",
                                                                            lineNumber: 489,
                                                                            columnNumber: 57
                                                                        }, void 0)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/vote/page.tsx",
                                                                    lineNumber: 485,
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
                                                                                    lineNumber: 503,
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
                                                                                        lineNumber: 505,
                                                                                        columnNumber: 65
                                                                                    }, void 0)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/vote/page.tsx",
                                                                                    lineNumber: 504,
                                                                                    columnNumber: 61
                                                                                }, void 0),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormMessage"], {}, void 0, false, {
                                                                                    fileName: "[project]/src/app/vote/page.tsx",
                                                                                    lineNumber: 507,
                                                                                    columnNumber: 61
                                                                                }, void 0)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/vote/page.tsx",
                                                                            lineNumber: 502,
                                                                            columnNumber: 57
                                                                        }, void 0)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/vote/page.tsx",
                                                                    lineNumber: 498,
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
                                                                                            lineNumber: 517,
                                                                                            columnNumber: 65
                                                                                        }, void 0),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormControl"], {
                                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                                                                placeholder: "Your full name",
                                                                                                ...field,
                                                                                                className: "bg-zinc-800 border-zinc-700 focus:ring-amber-400"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/app/vote/page.tsx",
                                                                                                lineNumber: 519,
                                                                                                columnNumber: 69
                                                                                            }, void 0)
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/app/vote/page.tsx",
                                                                                            lineNumber: 518,
                                                                                            columnNumber: 65
                                                                                        }, void 0),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormMessage"], {}, void 0, false, {
                                                                                            fileName: "[project]/src/app/vote/page.tsx",
                                                                                            lineNumber: 521,
                                                                                            columnNumber: 65
                                                                                        }, void 0)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/src/app/vote/page.tsx",
                                                                                    lineNumber: 516,
                                                                                    columnNumber: 61
                                                                                }, void 0)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/vote/page.tsx",
                                                                            lineNumber: 512,
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
                                                                                            lineNumber: 530,
                                                                                            columnNumber: 65
                                                                                        }, void 0),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormControl"], {
                                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                                                                placeholder: "Your contact phone number",
                                                                                                ...field,
                                                                                                className: "bg-zinc-800 border-zinc-700 focus:ring-amber-400"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/app/vote/page.tsx",
                                                                                                lineNumber: 532,
                                                                                                columnNumber: 69
                                                                                            }, void 0)
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/app/vote/page.tsx",
                                                                                            lineNumber: 531,
                                                                                            columnNumber: 65
                                                                                        }, void 0),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormMessage"], {}, void 0, false, {
                                                                                            fileName: "[project]/src/app/vote/page.tsx",
                                                                                            lineNumber: 534,
                                                                                            columnNumber: 65
                                                                                        }, void 0)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/src/app/vote/page.tsx",
                                                                                    lineNumber: 529,
                                                                                    columnNumber: 61
                                                                                }, void 0)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/vote/page.tsx",
                                                                            lineNumber: 525,
                                                                            columnNumber: 54
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/vote/page.tsx",
                                                                    lineNumber: 511,
                                                                    columnNumber: 50
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/vote/page.tsx",
                                                            lineNumber: 449,
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
                                                                    lineNumber: 541,
                                                                    columnNumber: 62
                                                                }, this) : null,
                                                                isPending ? 'Submitting...' : 'Submit Nomination'
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/vote/page.tsx",
                                                            lineNumber: 540,
                                                            columnNumber: 45
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/vote/page.tsx",
                                                    lineNumber: 448,
                                                    columnNumber: 41
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/vote/page.tsx",
                                                lineNumber: 447,
                                                columnNumber: 37
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/vote/page.tsx",
                                            lineNumber: 446,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/vote/page.tsx",
                                    lineNumber: 436,
                                    columnNumber: 30
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/vote/page.tsx",
                                lineNumber: 435,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/vote/page.tsx",
                        lineNumber: 283,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/vote/page.tsx",
                lineNumber: 255,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/vote/page.tsx",
            lineNumber: 254,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/vote/page.tsx",
        lineNumber: 248,
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

//# sourceMappingURL=src_c7d6b998._.js.map