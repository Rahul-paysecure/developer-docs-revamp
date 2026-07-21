import React from 'react';

const h = React.createElement;

export const ICON_NODES = {
  "home": h(React.Fragment, null,
      h("path", {"d":"M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"}),
      h("path", {"d":"M9 22V12h6v10"})
  ),
  "book": h(React.Fragment, null,
      h("path", {"d":"M4 19.5A2.5 2.5 0 0 1 6.5 17H20"}),
      h("path", {"d":"M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"})
  ),
  "zap": h(React.Fragment, null,
      h("path", {"d":"M13 2L3 14h9l-1 8 10-12h-9l1-8z"})
  ),
  "key": h(React.Fragment, null,
      h("path", {"d":"M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"})
  ),
  "sliders": h(React.Fragment, null,
      h("path", {"d":"M4 21v-7M4 10V3M12 21v-9M12 8V3M20 21v-5M20 12V3M1 14h6M9 8h6M17 16h6"})
  ),
  "card": h(React.Fragment, null,
      h("rect", {"x":"1","y":"4","width":"22","height":"16","rx":"2"}),
      h("path", {"d":"M1 10h22"})
  ),
  "flask": h(React.Fragment, null,
      h("path", {"d":"M9 3h6M10 3v6l-5.5 9.5A2 2 0 0 0 6.2 21h11.6a2 2 0 0 0 1.7-2.5L14 9V3"}),
      h("path", {"d":"M7.5 15h9"})
  ),
  "grid": h(React.Fragment, null,
      h("rect", {"x":"3","y":"3","width":"7","height":"7","rx":"1"}),
      h("rect", {"x":"14","y":"3","width":"7","height":"7","rx":"1"}),
      h("rect", {"x":"14","y":"14","width":"7","height":"7","rx":"1"}),
      h("rect", {"x":"3","y":"14","width":"7","height":"7","rx":"1"})
  ),
  "coins": h(React.Fragment, null,
      h("circle", {"cx":"8","cy":"8","r":"6"}),
      h("path", {"d":"M18.09 10.37A6 6 0 1 1 10.34 18"}),
      h("path", {"d":"M7 6h1v4"})
  ),
  "send": h(React.Fragment, null,
      h("path", {"d":"M22 2L11 13"}),
      h("path", {"d":"M22 2l-7 20-4-9-9-4 20-7z"})
  ),
  "cart": h(React.Fragment, null,
      h("circle", {"cx":"9","cy":"21","r":"1"}),
      h("circle", {"cx":"20","cy":"21","r":"1"}),
      h("path", {"d":"M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"})
  ),
  "token": h(React.Fragment, null,
      h("circle", {"cx":"12","cy":"12","r":"9"}),
      h("path", {"d":"M9 12l2 2 4-4"})
  ),
  "repeat": h(React.Fragment, null,
      h("path", {"d":"M17 1l4 4-4 4"}),
      h("path", {"d":"M3 11V9a4 4 0 0 1 4-4h14"}),
      h("path", {"d":"M7 23l-4-4 4-4"}),
      h("path", {"d":"M21 13v2a4 4 0 0 1-4 4H3"})
  ),
  "chart": h(React.Fragment, null,
      h("path", {"d":"M18 20V10M12 20V4M6 20v-6"})
  ),
  "globe": h(React.Fragment, null,
      h("circle", {"cx":"12","cy":"12","r":"10"}),
      h("path", {"d":"M2 12h20"}),
      h("path", {"d":"M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"})
  ),
  "wallet": h(React.Fragment, null,
      h("path", {"d":"M20 7H4a2 2 0 0 1 0-4h14a1 1 0 0 1 1 1v3z"}),
      h("path", {"d":"M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"}),
      h("path", {"d":"M18 12a2 2 0 0 0 0 4h4v-4h-4z"})
  ),
  "bank": h(React.Fragment, null,
      h("path", {"d":"M3 21h18M3 10h18M5 6l7-3 7 3M4 10v11M20 10v11M8 14v3M12 14v3M16 14v3"})
  ),
  "crypto": h(React.Fragment, null,
      h("circle", {"cx":"12","cy":"12","r":"10"}),
      h("path", {"d":"M9.5 7.5h4a2 2 0 0 1 0 4h-4zm0 4h4.5a2 2 0 0 1 0 4H9.5z"}),
      h("path", {"d":"M11 5.5v13"})
  ),
  "list": h(React.Fragment, null,
      h("path", {"d":"M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01"})
  ),
  "alert": h(React.Fragment, null,
      h("circle", {"cx":"12","cy":"12","r":"10"}),
      h("path", {"d":"M12 8v4M12 16h.01"})
  ),
  "wrench": h(React.Fragment, null,
      h("path", {"d":"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"})
  ),
  "file": h(React.Fragment, null,
      h("path", {"d":"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"}),
      h("path", {"d":"M14 2v6h6"})
  ),
  "box": h(React.Fragment, null,
      h("path", {"d":"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"}),
      h("path", {"d":"M3.27 6.96L12 12l8.73-5.04M12 22V12"})
  ),
  "plus": h(React.Fragment, null,
      h("circle", {"cx":"12","cy":"12","r":"10"}),
      h("path", {"d":"M12 8v8M8 12h8"})
  ),
  "eye": h(React.Fragment, null,
      h("path", {"d":"M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"}),
      h("circle", {"cx":"12","cy":"12","r":"3"})
  ),
  "xcircle": h(React.Fragment, null,
      h("circle", {"cx":"12","cy":"12","r":"10"}),
      h("path", {"d":"M15 9l-6 6M9 9l6 6"})
  ),
  "rotate": h(React.Fragment, null,
      h("path", {"d":"M1 4v6h6"}),
      h("path", {"d":"M3.51 15a9 9 0 1 0 2.13-9.36L1 10"})
  ),
  "clock": h(React.Fragment, null,
      h("circle", {"cx":"12","cy":"12","r":"10"}),
      h("path", {"d":"M12 6v6l4 2"})
  ),
  "hook": h(React.Fragment, null,
      h("circle", {"cx":"18","cy":"5","r":"3"}),
      h("circle", {"cx":"6","cy":"12","r":"3"}),
      h("circle", {"cx":"18","cy":"19","r":"3"}),
      h("path", {"d":"M8.59 13.51l6.83 3.98M15.41 6.51l-6.82 3.98"})
  ),
  "shield": h(React.Fragment, null,
      h("path", {"d":"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"})
  ),
  "search": h(React.Fragment, null,
      h("circle", {"cx":"11","cy":"11","r":"8"}),
      h("path", {"d":"M21 21l-4.35-4.35"})
  ),
  "sun": h(React.Fragment, null,
      h("circle", {"cx":"12","cy":"12","r":"5"}),
      h("path", {"d":"M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"})
  ),
  "moon": h(React.Fragment, null,
      h("path", {"d":"M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"})
  ),
  "menu": h(React.Fragment, null,
      h("path", {"d":"M3 12h18M3 6h18M3 18h18"})
  ),
  "tag": h(React.Fragment, null,
      h("path", {"d":"M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"}),
      h("path", {"d":"M7 7h.01"})
  ),
  "shuffle": h(React.Fragment, null,
      h("path", {"d":"M16 3h5v5"}),
      h("path", {"d":"M4 20L21 3"}),
      h("path", {"d":"M21 16v5h-5"}),
      h("path", {"d":"M15 15l6 6"}),
      h("path", {"d":"M4 4l5 5"})
  ),
  "ban": h(React.Fragment, null,
      h("circle", {"cx":"12","cy":"12","r":"10"}),
      h("path", {"d":"M4.93 4.93l14.14 14.14"})
  )
};
