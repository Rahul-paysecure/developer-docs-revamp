import { defineDocument } from '../schema.js';

export const cardsTreeDocument = defineDocument({
  "schemaVersion": 1,
  "slug": "cards",
  "blocks": [
    {
      "id": "document-tree",
      "type": "tree",
      "root": {
        "type": "element",
        "tag": "fragment",
        "props": {},
        "children": [
          {
            "type": "text",
            "value": "\n\n      "
          },
          {
            "type": "element",
            "tag": "div",
            "props": {
              "className": "crumbs"
            },
            "children": [
              {
                "type": "element",
                "tag": "DocLink",
                "props": {
                  "href": "/"
                },
                "children": [
                  {
                    "type": "text",
                    "id": "cards.doclink.0001",
                    "value": "Home"
                  }
                ]
              },
              {
                "type": "element",
                "tag": "span",
                "props": {
                  "className": "sep"
                },
                "children": [
                  {
                    "type": "text",
                    "value": "/"
                  }
                ]
              },
              {
                "type": "element",
                "tag": "DocLink",
                "props": {
                  "href": "/payment-methods"
                },
                "children": [
                  {
                    "type": "text",
                    "id": "cards.doclink.0002",
                    "value": "Payment Methods"
                  }
                ]
              },
              {
                "type": "element",
                "tag": "span",
                "props": {
                  "className": "sep"
                },
                "children": [
                  {
                    "type": "text",
                    "value": "/"
                  }
                ]
              },
              {
                "type": "text",
                "id": "cards.div.0003",
                "value": "Cards"
              }
            ]
          },
          {
            "type": "text",
            "value": "\n      "
          },
          {
            "type": "element",
            "tag": "h1",
            "props": {},
            "children": [
              {
                "type": "text",
                "id": "cards.h1.0004",
                "value": "Card payments, a detailed introduction"
              }
            ]
          },
          {
            "type": "text",
            "value": "\n      "
          },
          {
            "type": "element",
            "tag": "p",
            "props": {
              "className": "lead"
            },
            "children": [
              {
                "type": "text",
                "id": "cards.p.0005",
                "value": "Everyone involved in a card payment, how the money actually moves, and the two ways Paysecure can process your card traffic: 2D (no authentication) and 3D (3DS2 authenticated)."
              }
            ]
          },
          {
            "type": "text",
            "value": "\n\n      "
          },
          {
            "type": "element",
            "tag": "h2",
            "props": {
              "id": "players"
            },
            "children": [
              {
                "type": "text",
                "id": "cards.players.0006",
                "value": "Who is involved in a card payment"
              }
            ]
          },
          {
            "type": "text",
            "value": "\n      "
          },
          {
            "type": "element",
            "tag": "p",
            "props": {},
            "children": [
              {
                "type": "text",
                "id": "cards.p.0007",
                "value": "Every online card payment passes through the same chain of parties in seconds. Knowing who does what makes the statuses, fees and error messages in the rest of these docs much easier to reason about."
              }
            ]
          },
          {
            "type": "text",
            "value": "\n      "
          },
          {
            "type": "element",
            "tag": "figure",
            "props": {
              "className": "shot"
            },
            "children": [
              {
                "type": "text",
                "value": "\n        "
              },
              {
                "type": "element",
                "tag": "svg",
                "props": {
                  "viewBox": "0 0 760 212",
                  "width": "100%",
                  "role": "img",
                  "aria-label": "The chain of parties in a card payment, with the authorisation and settlement paths",
                  "xmlns": "http://www.w3.org/2000/svg",
                  "style": {
                    "display": "block"
                  },
                  "fontFamily": "Inter,system-ui,sans-serif"
                },
                "children": [
                  {
                    "type": "text",
                    "value": "\n          "
                  },
                  {
                    "type": "element",
                    "tag": "defs",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "value": "\n            "
                      },
                      {
                        "type": "element",
                        "tag": "marker",
                        "props": {
                          "id": "pl-arr",
                          "viewBox": "0 0 10 10",
                          "refX": "9",
                          "refY": "5",
                          "markerWidth": "7",
                          "markerHeight": "7",
                          "orient": "auto-start-reverse"
                        },
                        "children": [
                          {
                            "type": "element",
                            "tag": "path",
                            "props": {
                              "d": "M0 0L10 5L0 10z",
                              "fill": "var(--purple)"
                            },
                            "children": []
                          }
                        ]
                      },
                      {
                        "type": "text",
                        "value": "\n            "
                      },
                      {
                        "type": "element",
                        "tag": "marker",
                        "props": {
                          "id": "pl-arr-g",
                          "viewBox": "0 0 10 10",
                          "refX": "9",
                          "refY": "5",
                          "markerWidth": "7",
                          "markerHeight": "7",
                          "orient": "auto-start-reverse"
                        },
                        "children": [
                          {
                            "type": "element",
                            "tag": "path",
                            "props": {
                              "d": "M0 0L10 5L0 10z",
                              "fill": "var(--green)"
                            },
                            "children": []
                          }
                        ]
                      },
                      {
                        "type": "text",
                        "value": "\n            "
                      },
                      {
                        "type": "element",
                        "tag": "marker",
                        "props": {
                          "id": "pl-arr-am",
                          "viewBox": "0 0 10 10",
                          "refX": "9",
                          "refY": "5",
                          "markerWidth": "7",
                          "markerHeight": "7",
                          "orient": "auto-start-reverse"
                        },
                        "children": [
                          {
                            "type": "element",
                            "tag": "path",
                            "props": {
                              "d": "M0 0L10 5L0 10z",
                              "fill": "var(--amber)"
                            },
                            "children": []
                          }
                        ]
                      },
                      {
                        "type": "text",
                        "value": "\n          "
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": "\n          "
                  },
                  {
                    "type": "text",
                    "value": "\n          "
                  },
                  {
                    "type": "element",
                    "tag": "text",
                    "props": {
                      "x": "380",
                      "y": "18",
                      "textAnchor": "middle",
                      "fontSize": "10",
                      "fontWeight": "700",
                      "letterSpacing": "1",
                      "fill": "var(--muted)"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "cards.text.0008",
                        "value": "PAYMENT REQUEST, LEFT TO RIGHT"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": "\n          "
                  },
                  {
                    "type": "text",
                    "value": "\n          "
                  },
                  {
                    "type": "element",
                    "tag": "line",
                    "props": {
                      "x1": "695",
                      "y1": "102",
                      "x2": "695",
                      "y2": "176",
                      "stroke": "var(--border)",
                      "strokeDasharray": "3 3"
                    },
                    "children": []
                  },
                  {
                    "type": "text",
                    "value": "\n          "
                  },
                  {
                    "type": "element",
                    "tag": "line",
                    "props": {
                      "x1": "65",
                      "y1": "102",
                      "x2": "65",
                      "y2": "138",
                      "stroke": "var(--border)",
                      "strokeDasharray": "3 3"
                    },
                    "children": []
                  },
                  {
                    "type": "text",
                    "value": "\n          "
                  },
                  {
                    "type": "element",
                    "tag": "line",
                    "props": {
                      "x1": "191",
                      "y1": "102",
                      "x2": "191",
                      "y2": "176",
                      "stroke": "var(--border)",
                      "strokeDasharray": "3 3"
                    },
                    "children": []
                  },
                  {
                    "type": "text",
                    "value": "\n          "
                  },
                  {
                    "type": "text",
                    "value": "\n          "
                  },
                  {
                    "type": "element",
                    "tag": "rect",
                    "props": {
                      "x": "10",
                      "y": "30",
                      "width": "110",
                      "height": "72",
                      "rx": "10",
                      "fill": "var(--purple-50)",
                      "stroke": "var(--border)"
                    },
                    "children": []
                  },
                  {
                    "type": "text",
                    "value": "\n          "
                  },
                  {
                    "type": "element",
                    "tag": "circle",
                    "props": {
                      "cx": "24",
                      "cy": "38",
                      "r": "8",
                      "fill": "var(--purple)"
                    },
                    "children": []
                  },
                  {
                    "type": "element",
                    "tag": "text",
                    "props": {
                      "x": "24",
                      "y": "41.5",
                      "textAnchor": "middle",
                      "fontSize": "9",
                      "fontWeight": "700",
                      "fill": "#FFFFFF"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "cards.text.0009",
                        "value": "1"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": "\n          "
                  },
                  {
                    "type": "element",
                    "tag": "g",
                    "props": {
                      "transform": "translate(56,39) scale(0.75)",
                      "fill": "none",
                      "stroke": "var(--purple)",
                      "strokeWidth": "1.8",
                      "strokeLinecap": "round",
                      "strokeLinejoin": "round"
                    },
                    "children": [
                      {
                        "type": "element",
                        "tag": "path",
                        "props": {
                          "d": "M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"
                        },
                        "children": []
                      },
                      {
                        "type": "element",
                        "tag": "circle",
                        "props": {
                          "cx": "12",
                          "cy": "7",
                          "r": "4"
                        },
                        "children": []
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": "\n          "
                  },
                  {
                    "type": "element",
                    "tag": "text",
                    "props": {
                      "x": "65",
                      "y": "78",
                      "textAnchor": "middle",
                      "fontSize": "12",
                      "fontWeight": "600",
                      "fill": "var(--ink)"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "cards.text.0010",
                        "value": "Cardholder"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": "\n          "
                  },
                  {
                    "type": "element",
                    "tag": "text",
                    "props": {
                      "x": "65",
                      "y": "92",
                      "textAnchor": "middle",
                      "fontSize": "10",
                      "fill": "var(--muted)"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "cards.text.0011",
                        "value": "pays with their card"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": "\n          "
                  },
                  {
                    "type": "element",
                    "tag": "line",
                    "props": {
                      "x1": "120",
                      "y1": "66",
                      "x2": "132",
                      "y2": "66",
                      "stroke": "var(--purple)",
                      "markerEnd": "url(#pl-arr)"
                    },
                    "children": []
                  },
                  {
                    "type": "text",
                    "value": "\n          "
                  },
                  {
                    "type": "text",
                    "value": "\n          "
                  },
                  {
                    "type": "element",
                    "tag": "rect",
                    "props": {
                      "x": "136",
                      "y": "30",
                      "width": "110",
                      "height": "72",
                      "rx": "10",
                      "fill": "var(--purple-50)",
                      "stroke": "var(--border)"
                    },
                    "children": []
                  },
                  {
                    "type": "text",
                    "value": "\n          "
                  },
                  {
                    "type": "element",
                    "tag": "circle",
                    "props": {
                      "cx": "150",
                      "cy": "38",
                      "r": "8",
                      "fill": "var(--purple)"
                    },
                    "children": []
                  },
                  {
                    "type": "element",
                    "tag": "text",
                    "props": {
                      "x": "150",
                      "y": "41.5",
                      "textAnchor": "middle",
                      "fontSize": "9",
                      "fontWeight": "700",
                      "fill": "#FFFFFF"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "cards.text.0012",
                        "value": "2"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": "\n          "
                  },
                  {
                    "type": "element",
                    "tag": "g",
                    "props": {
                      "transform": "translate(182,39) scale(0.75)",
                      "fill": "none",
                      "stroke": "var(--purple)",
                      "strokeWidth": "1.8",
                      "strokeLinecap": "round",
                      "strokeLinejoin": "round"
                    },
                    "children": [
                      {
                        "type": "element",
                        "tag": "rect",
                        "props": {
                          "x": "2",
                          "y": "3",
                          "width": "20",
                          "height": "14",
                          "rx": "2"
                        },
                        "children": []
                      },
                      {
                        "type": "element",
                        "tag": "path",
                        "props": {
                          "d": "M8 21h8M12 17v4"
                        },
                        "children": []
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": "\n          "
                  },
                  {
                    "type": "element",
                    "tag": "text",
                    "props": {
                      "x": "191",
                      "y": "78",
                      "textAnchor": "middle",
                      "fontSize": "12",
                      "fontWeight": "600",
                      "fill": "var(--ink)"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "cards.text.0013",
                        "value": "Your site"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": "\n          "
                  },
                  {
                    "type": "element",
                    "tag": "text",
                    "props": {
                      "x": "191",
                      "y": "92",
                      "textAnchor": "middle",
                      "fontSize": "10",
                      "fill": "var(--muted)"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "cards.text.0014",
                        "value": "initiates the payment"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": "\n          "
                  },
                  {
                    "type": "element",
                    "tag": "line",
                    "props": {
                      "x1": "246",
                      "y1": "66",
                      "x2": "258",
                      "y2": "66",
                      "stroke": "var(--purple)",
                      "markerEnd": "url(#pl-arr)"
                    },
                    "children": []
                  },
                  {
                    "type": "text",
                    "value": "\n          "
                  },
                  {
                    "type": "text",
                    "value": "\n          "
                  },
                  {
                    "type": "element",
                    "tag": "rect",
                    "props": {
                      "x": "262",
                      "y": "30",
                      "width": "110",
                      "height": "72",
                      "rx": "10",
                      "fill": "var(--purple)"
                    },
                    "children": []
                  },
                  {
                    "type": "text",
                    "value": "\n          "
                  },
                  {
                    "type": "element",
                    "tag": "circle",
                    "props": {
                      "cx": "276",
                      "cy": "38",
                      "r": "8",
                      "fill": "#FFFFFF"
                    },
                    "children": []
                  },
                  {
                    "type": "element",
                    "tag": "text",
                    "props": {
                      "x": "276",
                      "y": "41.5",
                      "textAnchor": "middle",
                      "fontSize": "9",
                      "fontWeight": "700",
                      "fill": "var(--purple)"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "cards.text.0015",
                        "value": "3"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": "\n          "
                  },
                  {
                    "type": "element",
                    "tag": "g",
                    "props": {
                      "transform": "translate(308,39) scale(0.75)",
                      "fill": "none",
                      "stroke": "#FFFFFF",
                      "strokeWidth": "1.8",
                      "strokeLinecap": "round",
                      "strokeLinejoin": "round"
                    },
                    "children": [
                      {
                        "type": "element",
                        "tag": "path",
                        "props": {
                          "d": "M16 3h5v5"
                        },
                        "children": []
                      },
                      {
                        "type": "element",
                        "tag": "path",
                        "props": {
                          "d": "M4 20L21 3"
                        },
                        "children": []
                      },
                      {
                        "type": "element",
                        "tag": "path",
                        "props": {
                          "d": "M21 16v5h-5"
                        },
                        "children": []
                      },
                      {
                        "type": "element",
                        "tag": "path",
                        "props": {
                          "d": "M15 15l6 6"
                        },
                        "children": []
                      },
                      {
                        "type": "element",
                        "tag": "path",
                        "props": {
                          "d": "M4 4l5 5"
                        },
                        "children": []
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": "\n          "
                  },
                  {
                    "type": "element",
                    "tag": "text",
                    "props": {
                      "x": "317",
                      "y": "78",
                      "textAnchor": "middle",
                      "fontSize": "12",
                      "fontWeight": "600",
                      "fill": "#FFFFFF"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "cards.text.0016",
                        "value": "Paysecure"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": "\n          "
                  },
                  {
                    "type": "element",
                    "tag": "text",
                    "props": {
                      "x": "317",
                      "y": "92",
                      "textAnchor": "middle",
                      "fontSize": "10",
                      "fill": "#E9D5FF"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "cards.text.0017",
                        "value": "risk checks + routing"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": "\n          "
                  },
                  {
                    "type": "element",
                    "tag": "line",
                    "props": {
                      "x1": "372",
                      "y1": "66",
                      "x2": "384",
                      "y2": "66",
                      "stroke": "var(--purple)",
                      "markerEnd": "url(#pl-arr)"
                    },
                    "children": []
                  },
                  {
                    "type": "text",
                    "value": "\n          "
                  },
                  {
                    "type": "text",
                    "value": "\n          "
                  },
                  {
                    "type": "element",
                    "tag": "rect",
                    "props": {
                      "x": "388",
                      "y": "30",
                      "width": "110",
                      "height": "72",
                      "rx": "10",
                      "fill": "var(--purple-50)",
                      "stroke": "var(--border)"
                    },
                    "children": []
                  },
                  {
                    "type": "text",
                    "value": "\n          "
                  },
                  {
                    "type": "element",
                    "tag": "circle",
                    "props": {
                      "cx": "402",
                      "cy": "38",
                      "r": "8",
                      "fill": "var(--purple)"
                    },
                    "children": []
                  },
                  {
                    "type": "element",
                    "tag": "text",
                    "props": {
                      "x": "402",
                      "y": "41.5",
                      "textAnchor": "middle",
                      "fontSize": "9",
                      "fontWeight": "700",
                      "fill": "#FFFFFF"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "cards.text.0018",
                        "value": "4"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": "\n          "
                  },
                  {
                    "type": "element",
                    "tag": "g",
                    "props": {
                      "transform": "translate(434,39) scale(0.75)",
                      "fill": "none",
                      "stroke": "var(--purple)",
                      "strokeWidth": "1.8",
                      "strokeLinecap": "round",
                      "strokeLinejoin": "round"
                    },
                    "children": [
                      {
                        "type": "element",
                        "tag": "path",
                        "props": {
                          "d": "M3 21h18M5 21V10M9.5 21V10M14.5 21V10M19 21V10M2 10l10-7 10 7z"
                        },
                        "children": []
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": "\n          "
                  },
                  {
                    "type": "element",
                    "tag": "text",
                    "props": {
                      "x": "443",
                      "y": "78",
                      "textAnchor": "middle",
                      "fontSize": "12",
                      "fontWeight": "600",
                      "fill": "var(--ink)"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "cards.text.0019",
                        "value": "Acquirer"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": "\n          "
                  },
                  {
                    "type": "element",
                    "tag": "text",
                    "props": {
                      "x": "443",
                      "y": "92",
                      "textAnchor": "middle",
                      "fontSize": "10",
                      "fill": "var(--muted)"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "cards.text.0020",
                        "value": "merchant-side bank"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": "\n          "
                  },
                  {
                    "type": "element",
                    "tag": "line",
                    "props": {
                      "x1": "498",
                      "y1": "66",
                      "x2": "510",
                      "y2": "66",
                      "stroke": "var(--purple)",
                      "markerEnd": "url(#pl-arr)"
                    },
                    "children": []
                  },
                  {
                    "type": "text",
                    "value": "\n          "
                  },
                  {
                    "type": "text",
                    "value": "\n          "
                  },
                  {
                    "type": "element",
                    "tag": "rect",
                    "props": {
                      "x": "514",
                      "y": "30",
                      "width": "110",
                      "height": "72",
                      "rx": "10",
                      "fill": "var(--purple-50)",
                      "stroke": "var(--border)"
                    },
                    "children": []
                  },
                  {
                    "type": "text",
                    "value": "\n          "
                  },
                  {
                    "type": "element",
                    "tag": "circle",
                    "props": {
                      "cx": "528",
                      "cy": "38",
                      "r": "8",
                      "fill": "var(--purple)"
                    },
                    "children": []
                  },
                  {
                    "type": "element",
                    "tag": "text",
                    "props": {
                      "x": "528",
                      "y": "41.5",
                      "textAnchor": "middle",
                      "fontSize": "9",
                      "fontWeight": "700",
                      "fill": "#FFFFFF"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "cards.text.0021",
                        "value": "5"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": "\n          "
                  },
                  {
                    "type": "element",
                    "tag": "g",
                    "props": {
                      "transform": "translate(560,39) scale(0.75)",
                      "fill": "none",
                      "stroke": "var(--purple)",
                      "strokeWidth": "1.8",
                      "strokeLinecap": "round",
                      "strokeLinejoin": "round"
                    },
                    "children": [
                      {
                        "type": "element",
                        "tag": "circle",
                        "props": {
                          "cx": "12",
                          "cy": "12",
                          "r": "10"
                        },
                        "children": []
                      },
                      {
                        "type": "element",
                        "tag": "path",
                        "props": {
                          "d": "M2 12h20"
                        },
                        "children": []
                      },
                      {
                        "type": "element",
                        "tag": "path",
                        "props": {
                          "d": "M12 2a15 15 0 0 1 0 20a15 15 0 0 1 0-20z"
                        },
                        "children": []
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": "\n          "
                  },
                  {
                    "type": "element",
                    "tag": "text",
                    "props": {
                      "x": "569",
                      "y": "78",
                      "textAnchor": "middle",
                      "fontSize": "12",
                      "fontWeight": "600",
                      "fill": "var(--ink)"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "cards.text.0022",
                        "value": "Card scheme"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": "\n          "
                  },
                  {
                    "type": "element",
                    "tag": "text",
                    "props": {
                      "x": "569",
                      "y": "92",
                      "textAnchor": "middle",
                      "fontSize": "10",
                      "fill": "var(--muted)"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "cards.text.0023",
                        "value": "Visa / Mastercard rails"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": "\n          "
                  },
                  {
                    "type": "element",
                    "tag": "line",
                    "props": {
                      "x1": "624",
                      "y1": "66",
                      "x2": "636",
                      "y2": "66",
                      "stroke": "var(--purple)",
                      "markerEnd": "url(#pl-arr)"
                    },
                    "children": []
                  },
                  {
                    "type": "text",
                    "value": "\n          "
                  },
                  {
                    "type": "text",
                    "value": "\n          "
                  },
                  {
                    "type": "element",
                    "tag": "rect",
                    "props": {
                      "x": "640",
                      "y": "30",
                      "width": "110",
                      "height": "72",
                      "rx": "10",
                      "fill": "var(--purple-50)",
                      "stroke": "var(--border)"
                    },
                    "children": []
                  },
                  {
                    "type": "text",
                    "value": "\n          "
                  },
                  {
                    "type": "element",
                    "tag": "circle",
                    "props": {
                      "cx": "654",
                      "cy": "38",
                      "r": "8",
                      "fill": "var(--purple)"
                    },
                    "children": []
                  },
                  {
                    "type": "element",
                    "tag": "text",
                    "props": {
                      "x": "654",
                      "y": "41.5",
                      "textAnchor": "middle",
                      "fontSize": "9",
                      "fontWeight": "700",
                      "fill": "#FFFFFF"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "cards.text.0024",
                        "value": "6"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": "\n          "
                  },
                  {
                    "type": "element",
                    "tag": "g",
                    "props": {
                      "transform": "translate(686,39) scale(0.75)",
                      "fill": "none",
                      "stroke": "var(--purple)",
                      "strokeWidth": "1.8",
                      "strokeLinecap": "round",
                      "strokeLinejoin": "round"
                    },
                    "children": [
                      {
                        "type": "element",
                        "tag": "rect",
                        "props": {
                          "x": "1",
                          "y": "4",
                          "width": "22",
                          "height": "16",
                          "rx": "2"
                        },
                        "children": []
                      },
                      {
                        "type": "element",
                        "tag": "path",
                        "props": {
                          "d": "M1 10h22"
                        },
                        "children": []
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": "\n          "
                  },
                  {
                    "type": "element",
                    "tag": "text",
                    "props": {
                      "x": "695",
                      "y": "78",
                      "textAnchor": "middle",
                      "fontSize": "12",
                      "fontWeight": "600",
                      "fill": "var(--ink)"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "cards.text.0025",
                        "value": "Issuer"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": "\n          "
                  },
                  {
                    "type": "element",
                    "tag": "text",
                    "props": {
                      "x": "695",
                      "y": "92",
                      "textAnchor": "middle",
                      "fontSize": "10",
                      "fill": "var(--muted)"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "cards.text.0026",
                        "value": "approves or declines"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": "\n          "
                  },
                  {
                    "type": "text",
                    "value": "\n          "
                  },
                  {
                    "type": "element",
                    "tag": "text",
                    "props": {
                      "x": "380",
                      "y": "130",
                      "textAnchor": "middle",
                      "fontSize": "10.5",
                      "fontWeight": "600",
                      "fill": "var(--green)"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "cards.text.0027",
                        "value": "Approval or decline returns down the same chain, in seconds"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": "\n          "
                  },
                  {
                    "type": "element",
                    "tag": "line",
                    "props": {
                      "x1": "695",
                      "y1": "138",
                      "x2": "69",
                      "y2": "138",
                      "stroke": "var(--green)",
                      "strokeDasharray": "5 4",
                      "markerEnd": "url(#pl-arr-g)"
                    },
                    "children": []
                  },
                  {
                    "type": "text",
                    "value": "\n          "
                  },
                  {
                    "type": "text",
                    "value": "\n          "
                  },
                  {
                    "type": "element",
                    "tag": "text",
                    "props": {
                      "x": "380",
                      "y": "168",
                      "textAnchor": "middle",
                      "fontSize": "10.5",
                      "fontWeight": "600",
                      "fill": "var(--amber)"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "cards.text.0028",
                        "value": "Settlement: the money follows days later, net of interchange and scheme fees"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": "\n          "
                  },
                  {
                    "type": "element",
                    "tag": "line",
                    "props": {
                      "x1": "695",
                      "y1": "176",
                      "x2": "195",
                      "y2": "176",
                      "stroke": "var(--amber)",
                      "strokeDasharray": "5 4",
                      "markerEnd": "url(#pl-arr-am)"
                    },
                    "children": []
                  },
                  {
                    "type": "text",
                    "value": "\n        "
                  }
                ]
              },
              {
                "type": "text",
                "value": "\n        "
              },
              {
                "type": "element",
                "tag": "figcaption",
                "props": {},
                "children": [
                  {
                    "type": "text",
                    "id": "cards.figcaption.0029",
                    "value": "Figure 1: The chain of parties every card payment passes through, with the authorisation and settlement paths"
                  }
                ]
              },
              {
                "type": "text",
                "value": "\n      "
              }
            ]
          },
          {
            "type": "text",
            "value": "\n      "
          },
          {
            "type": "element",
            "tag": "div",
            "props": {
              "className": "tbl-wrap"
            },
            "children": [
              {
                "type": "text",
                "value": "\n        "
              },
              {
                "type": "element",
                "tag": "table",
                "props": {
                  "className": "tbl"
                },
                "children": [
                  {
                    "type": "element",
                    "tag": "tbody",
                    "props": {},
                    "children": [
                      {
                        "type": "element",
                        "tag": "tr",
                        "props": {},
                        "children": [
                          {
                            "type": "element",
                            "tag": "th",
                            "props": {},
                            "children": [
                              {
                                "type": "text",
                                "id": "cards.th.0030",
                                "value": "Player"
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "th",
                            "props": {},
                            "children": [
                              {
                                "type": "text",
                                "id": "cards.th.0031",
                                "value": "Role in the journey"
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "type": "element",
                        "tag": "tr",
                        "props": {},
                        "children": [
                          {
                            "type": "element",
                            "tag": "td",
                            "props": {},
                            "children": [
                              {
                                "type": "element",
                                "tag": "b",
                                "props": {
                                  "style": {
                                    "color": "var(--ink)"
                                  }
                                },
                                "children": [
                                  {
                                    "type": "text",
                                    "id": "cards.b.0032",
                                    "value": "Cardholder"
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "td",
                            "props": {},
                            "children": [
                              {
                                "type": "text",
                                "id": "cards.td.0033",
                                "value": "Your customer. Owns the card and, on 3D traffic, is the person the issuer authenticates."
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "type": "element",
                        "tag": "tr",
                        "props": {},
                        "children": [
                          {
                            "type": "element",
                            "tag": "td",
                            "props": {},
                            "children": [
                              {
                                "type": "element",
                                "tag": "b",
                                "props": {
                                  "style": {
                                    "color": "var(--ink)"
                                  }
                                },
                                "children": [
                                  {
                                    "type": "text",
                                    "id": "cards.b.0034",
                                    "value": "Merchant (you)"
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "td",
                            "props": {},
                            "children": [
                              {
                                "type": "text",
                                "id": "cards.td.0035",
                                "value": "Initiates the payment, on the hosted cashier or from your own server, and owns the customer experience, receipts and refunds."
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "type": "element",
                        "tag": "tr",
                        "props": {},
                        "children": [
                          {
                            "type": "element",
                            "tag": "td",
                            "props": {},
                            "children": [
                              {
                                "type": "element",
                                "tag": "b",
                                "props": {
                                  "style": {
                                    "color": "var(--ink)"
                                  }
                                },
                                "children": [
                                  {
                                    "type": "text",
                                    "id": "cards.b.0036",
                                    "value": "Paysecure"
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "td",
                            "props": {},
                            "children": [
                              {
                                "type": "text",
                                "id": "cards.td.0037",
                                "value": "Gateway and orchestration layer. Collects or receives the card data, runs risk checks (Trust Score, whitelisting, Rule Engine), routes each transaction to the best-performing MID and acquirer, handles 3DS and tokenisation, and reports the result back to you by response and signed webhook."
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "type": "element",
                        "tag": "tr",
                        "props": {},
                        "children": [
                          {
                            "type": "element",
                            "tag": "td",
                            "props": {},
                            "children": [
                              {
                                "type": "element",
                                "tag": "b",
                                "props": {
                                  "style": {
                                    "color": "var(--ink)"
                                  }
                                },
                                "children": [
                                  {
                                    "type": "text",
                                    "id": "cards.b.0038",
                                    "value": "Acquirer"
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "td",
                            "props": {},
                            "children": [
                              {
                                "type": "text",
                                "id": "cards.td.0039",
                                "value": "The merchant-side bank that processes the payment and routes it into the card network. Paysecure maintains the acquirer relationships, so you never integrate one directly."
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "type": "element",
                        "tag": "tr",
                        "props": {},
                        "children": [
                          {
                            "type": "element",
                            "tag": "td",
                            "props": {},
                            "children": [
                              {
                                "type": "element",
                                "tag": "b",
                                "props": {
                                  "style": {
                                    "color": "var(--ink)"
                                  }
                                },
                                "children": [
                                  {
                                    "type": "text",
                                    "id": "cards.b.0040",
                                    "value": "Card scheme"
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "td",
                            "props": {},
                            "children": [
                              {
                                "type": "text",
                                "id": "cards.td.0041",
                                "value": "Visa, Mastercard and the other networks. They connect acquirers to issuers, set the rules and the interchange and scheme fees, and run supporting services such as tokenisation (VTS / MDES) and the 3DS directory server."
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "type": "element",
                        "tag": "tr",
                        "props": {},
                        "children": [
                          {
                            "type": "element",
                            "tag": "td",
                            "props": {},
                            "children": [
                              {
                                "type": "element",
                                "tag": "b",
                                "props": {
                                  "style": {
                                    "color": "var(--ink)"
                                  }
                                },
                                "children": [
                                  {
                                    "type": "text",
                                    "id": "cards.b.0042",
                                    "value": "Issuer"
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "td",
                            "props": {},
                            "children": [
                              {
                                "type": "text",
                                "id": "cards.td.0043",
                                "value": "The cardholder's bank. Extends the credit or holds the account, makes the final approve-or-decline decision, and on 3D traffic authenticates the customer through its Access Control Server (ACS)."
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "text",
                "value": "\n      "
              }
            ]
          },
          {
            "type": "text",
            "value": "\n      "
          },
          {
            "type": "element",
            "tag": "p",
            "props": {
              "className": "sec-note"
            },
            "children": [
              {
                "type": "text",
                "id": "cards.p.0044",
                "value": "Two supporting players appear elsewhere in these docs: the scheme's "
              },
              {
                "type": "element",
                "tag": "b",
                "props": {},
                "children": [
                  {
                    "type": "text",
                    "id": "cards.b.0045",
                    "value": "token service"
                  }
                ]
              },
              {
                "type": "text",
                "id": "cards.p.0046",
                "value": " (VTS / MDES), which issues "
              },
              {
                "type": "element",
                "tag": "DocLink",
                "props": {
                  "className": "inline",
                  "href": "/product-tokenisation"
                },
                "children": [
                  {
                    "type": "text",
                    "id": "cards.doclink.0047",
                    "value": "network tokens"
                  }
                ]
              },
              {
                "type": "text",
                "id": "cards.p.0048",
                "value": ", and the issuer's "
              },
              {
                "type": "element",
                "tag": "b",
                "props": {},
                "children": [
                  {
                    "type": "text",
                    "id": "cards.b.0049",
                    "value": "ACS"
                  }
                ]
              },
              {
                "type": "text",
                "id": "cards.p.0050",
                "value": ", which runs the "
              },
              {
                "type": "element",
                "tag": "DocLink",
                "props": {
                  "className": "inline",
                  "href": "/3ds"
                },
                "children": [
                  {
                    "type": "text",
                    "id": "cards.doclink.0051",
                    "value": "3DS challenge"
                  }
                ]
              },
              {
                "type": "text",
                "value": "."
              }
            ]
          },
          {
            "type": "text",
            "value": "\n\n      "
          },
          {
            "type": "element",
            "tag": "h2",
            "props": {
              "id": "flow"
            },
            "children": [
              {
                "type": "text",
                "id": "cards.flow.0052",
                "value": "Anatomy of a card payment"
              }
            ]
          },
          {
            "type": "text",
            "value": "\n      "
          },
          {
            "type": "element",
            "tag": "div",
            "props": {
              "className": "diagram"
            },
            "children": [
              {
                "type": "text",
                "value": "\n        "
              },
              {
                "type": "element",
                "tag": "div",
                "props": {
                  "className": "dbox"
                },
                "children": [
                  {
                    "type": "element",
                    "tag": "b",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "cards.b.0053",
                        "value": "1 · Create"
                      }
                    ]
                  },
                  {
                    "type": "element",
                    "tag": "span",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "cards.span.0054",
                        "value": "POST /purchases/"
                      }
                    ]
                  }
                ]
              },
              {
                "type": "text",
                "value": "\n        "
              },
              {
                "type": "element",
                "tag": "span",
                "props": {
                  "className": "darr"
                },
                "children": [
                  {
                    "type": "text",
                    "value": "→"
                  }
                ]
              },
              {
                "type": "text",
                "value": "\n        "
              },
              {
                "type": "element",
                "tag": "div",
                "props": {
                  "className": "dbox"
                },
                "children": [
                  {
                    "type": "element",
                    "tag": "b",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "cards.b.0055",
                        "value": "2 · Authenticate"
                      }
                    ]
                  },
                  {
                    "type": "element",
                    "tag": "span",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "cards.span.0056",
                        "value": "3DS2 (3D traffic only)"
                      }
                    ]
                  }
                ]
              },
              {
                "type": "text",
                "value": "\n        "
              },
              {
                "type": "element",
                "tag": "span",
                "props": {
                  "className": "darr"
                },
                "children": [
                  {
                    "type": "text",
                    "value": "→"
                  }
                ]
              },
              {
                "type": "text",
                "value": "\n        "
              },
              {
                "type": "element",
                "tag": "div",
                "props": {
                  "className": "dbox hl"
                },
                "children": [
                  {
                    "type": "element",
                    "tag": "b",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "cards.b.0057",
                        "value": "3 · Authorise"
                      }
                    ]
                  },
                  {
                    "type": "element",
                    "tag": "span",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "cards.span.0058",
                        "value": "Issuer approves"
                      }
                    ]
                  }
                ]
              },
              {
                "type": "text",
                "value": "\n        "
              },
              {
                "type": "element",
                "tag": "span",
                "props": {
                  "className": "darr"
                },
                "children": [
                  {
                    "type": "text",
                    "value": "→"
                  }
                ]
              },
              {
                "type": "text",
                "value": "\n        "
              },
              {
                "type": "element",
                "tag": "div",
                "props": {
                  "className": "dbox"
                },
                "children": [
                  {
                    "type": "element",
                    "tag": "b",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "cards.b.0059",
                        "value": "4 · Capture"
                      }
                    ]
                  },
                  {
                    "type": "element",
                    "tag": "span",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "cards.span.0060",
                        "value": "Funds claimed"
                      }
                    ]
                  }
                ]
              },
              {
                "type": "text",
                "value": "\n      "
              }
            ]
          },
          {
            "type": "text",
            "value": "\n      "
          },
          {
            "type": "element",
            "tag": "p",
            "props": {},
            "children": [
              {
                "type": "text",
                "id": "cards.p.0061",
                "value": "On the hosted cashier, steps 2 to 4 are handled for you. On a direct server-to-server integration you make two calls: "
              },
              {
                "type": "element",
                "tag": "code",
                "props": {},
                "children": [
                  {
                    "type": "text",
                    "id": "cards.code.0062",
                    "value": "POST /purchases/"
                  }
                ]
              },
              {
                "type": "text",
                "id": "cards.p.0063",
                "value": " to create the purchase, then "
              },
              {
                "type": "element",
                "tag": "code",
                "props": {},
                "children": [
                  {
                    "type": "text",
                    "id": "cards.code.0064",
                    "value": "POST /p/{purchaseId}/?s2s=true"
                  }
                ]
              },
              {
                "type": "text",
                "id": "cards.p.0065",
                "value": " with the card details; full shapes in the "
              },
              {
                "type": "element",
                "tag": "DocLink",
                "props": {
                  "className": "inline",
                  "href": "/api-cards"
                },
                "children": [
                  {
                    "type": "text",
                    "id": "cards.doclink.0066",
                    "value": "Cards S2S reference"
                  }
                ]
              },
              {
                "type": "text",
                "value": "."
              }
            ]
          },
          {
            "type": "text",
            "value": "\n      "
          },
          {
            "type": "element",
            "tag": "p",
            "props": {},
            "children": [
              {
                "type": "text",
                "id": "cards.p.0067",
                "value": "Authorisation moves no money. It places a hold on the cardholder's funds; "
              },
              {
                "type": "element",
                "tag": "b",
                "props": {},
                "children": [
                  {
                    "type": "text",
                    "id": "cards.b.0068",
                    "value": "capture"
                  }
                ]
              },
              {
                "type": "text",
                "id": "cards.p.0069",
                "value": " claims them (immediately by default, or later with "
              },
              {
                "type": "element",
                "tag": "DocLink",
                "props": {
                  "className": "inline",
                  "href": "/api-preauth"
                },
                "children": [
                  {
                    "type": "text",
                    "id": "cards.doclink.0070",
                    "value": "pre-authorization"
                  }
                ]
              },
              {
                "type": "text",
                "id": "cards.p.0071",
                "value": "), and "
              },
              {
                "type": "element",
                "tag": "b",
                "props": {},
                "children": [
                  {
                    "type": "text",
                    "id": "cards.b.0072",
                    "value": "settlement"
                  }
                ]
              },
              {
                "type": "text",
                "id": "cards.p.0073",
                "value": " is when the acquirer actually pays out, typically days later, net of fees. Two fees are baked into every transaction: "
              },
              {
                "type": "element",
                "tag": "b",
                "props": {},
                "children": [
                  {
                    "type": "text",
                    "id": "cards.b.0074",
                    "value": "interchange"
                  }
                ]
              },
              {
                "type": "text",
                "id": "cards.p.0075",
                "value": ", set by the schemes and paid to the issuer (the bulk of the cost, varying by card type, channel and your MCC), and "
              },
              {
                "type": "element",
                "tag": "b",
                "props": {},
                "children": [
                  {
                    "type": "text",
                    "id": "cards.b.0076",
                    "value": "scheme fees"
                  }
                ]
              },
              {
                "type": "text",
                "id": "cards.p.0077",
                "value": " paid to the network itself. Settlement and reconciliation reporting is covered in "
              },
              {
                "type": "element",
                "tag": "DocLink",
                "props": {
                  "className": "inline",
                  "href": "/operations"
                },
                "children": [
                  {
                    "type": "text",
                    "id": "cards.doclink.0078",
                    "value": "Operations"
                  }
                ]
              },
              {
                "type": "text",
                "value": "."
              }
            ]
          },
          {
            "type": "text",
            "value": "\n      "
          },
          {
            "type": "element",
            "tag": "p",
            "props": {},
            "children": [
              {
                "type": "text",
                "id": "cards.p.0079",
                "value": "Server-to-server mode processes the payment at the server level, so the payer's browser or app never touches the API directly. That lets you build a setup which keeps payers away from platform resources, at the cost of taking on PCI scope for the card data you handle."
              }
            ]
          },
          {
            "type": "text",
            "value": "\n\n      "
          },
          {
            "type": "element",
            "tag": "figure",
            "props": {
              "className": "shot"
            },
            "children": [
              {
                "type": "text",
                "value": "\n        "
              },
              {
                "type": "element",
                "tag": "div",
                "props": {
                  "className": "imgs"
                },
                "children": [
                  {
                    "type": "element",
                    "tag": "video",
                    "props": {
                      "controls": true,
                      "preload": "metadata",
                      "playsInline": true,
                      "style": {
                        "width": "100%",
                        "display": "block",
                        "border": "1px solid var(--border)",
                        "borderRadius": "10px",
                        "background": "#fff",
                        "boxShadow": "0 2px 10px rgba(15,23,42,.05)"
                      }
                    },
                    "children": [
                      {
                        "type": "element",
                        "tag": "source",
                        "props": {
                          "src": "/assets/cards-video-flow.mp4",
                          "type": "video/mp4"
                        },
                        "children": []
                      },
                      {
                        "type": "text",
                        "id": "cards.video.0080",
                        "value": "Your browser does not support the video tag."
                      }
                    ]
                  }
                ]
              },
              {
                "type": "text",
                "value": "\n        "
              },
              {
                "type": "element",
                "tag": "figcaption",
                "props": {},
                "children": [
                  {
                    "type": "text",
                    "id": "cards.figcaption.0081",
                    "value": "Video: Card payment flow"
                  }
                ]
              },
              {
                "type": "text",
                "value": "\n      "
              }
            ]
          },
          {
            "type": "text",
            "value": "\n\n      "
          },
          {
            "type": "element",
            "tag": "h2",
            "props": {
              "id": "threeds"
            },
            "children": [
              {
                "type": "text",
                "id": "cards.threeds.0082",
                "value": "2D and 3D: the two ways to process cards"
              }
            ]
          },
          {
            "type": "text",
            "value": "\n      "
          },
          {
            "type": "element",
            "tag": "p",
            "props": {},
            "children": [
              {
                "type": "text",
                "id": "cards.p.0083",
                "value": "The names come from the 3D Secure protocol's \"three domains\": the acquirer domain (you, your acquirer), the issuer domain (the cardholder and their bank), and the interoperability domain (the scheme infrastructure connecting them for authentication). A "
              },
              {
                "type": "element",
                "tag": "b",
                "props": {},
                "children": [
                  {
                    "type": "text",
                    "id": "cards.b.0084",
                    "value": "3D"
                  }
                ]
              },
              {
                "type": "text",
                "id": "cards.p.0085",
                "value": " payment uses all three: the issuer authenticates the cardholder before authorisation. A "
              },
              {
                "type": "element",
                "tag": "b",
                "props": {},
                "children": [
                  {
                    "type": "text",
                    "id": "cards.b.0086",
                    "value": "2D"
                  }
                ]
              },
              {
                "type": "text",
                "id": "cards.p.0087",
                "value": " payment skips the interoperability domain entirely: card details go straight to authorisation with no customer verification."
              }
            ]
          },
          {
            "type": "text",
            "value": "\n      "
          },
          {
            "type": "element",
            "tag": "p",
            "props": {},
            "children": [
              {
                "type": "text",
                "id": "cards.p.0088",
                "value": "On Paysecure this is a MID-level configuration, not a different API: the same two S2S calls serve both, and cascading rules in the "
              },
              {
                "type": "element",
                "tag": "DocLink",
                "props": {
                  "className": "inline",
                  "href": "/dash-rule-engine"
                },
                "children": [
                  {
                    "type": "text",
                    "id": "cards.doclink.0089",
                    "value": "Rule Engine"
                  }
                ]
              },
              {
                "type": "text",
                "id": "cards.p.0090",
                "value": " can retry a failed 2D transaction on another MID, including a 3D one."
              }
            ]
          },
          {
            "type": "text",
            "value": "\n      "
          },
          {
            "type": "element",
            "tag": "div",
            "props": {
              "className": "tbl-wrap"
            },
            "children": [
              {
                "type": "text",
                "value": "\n        "
              },
              {
                "type": "element",
                "tag": "table",
                "props": {
                  "className": "tbl"
                },
                "children": [
                  {
                    "type": "element",
                    "tag": "tbody",
                    "props": {},
                    "children": [
                      {
                        "type": "element",
                        "tag": "tr",
                        "props": {},
                        "children": [
                          {
                            "type": "element",
                            "tag": "th",
                            "props": {},
                            "children": [
                              {
                                "type": "text",
                                "value": " "
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "th",
                            "props": {},
                            "children": [
                              {
                                "type": "text",
                                "id": "cards.th.0091",
                                "value": "2D processing"
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "th",
                            "props": {},
                            "children": [
                              {
                                "type": "text",
                                "id": "cards.th.0092",
                                "value": "3D processing"
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "type": "element",
                        "tag": "tr",
                        "props": {},
                        "children": [
                          {
                            "type": "element",
                            "tag": "td",
                            "props": {},
                            "children": [
                              {
                                "type": "element",
                                "tag": "b",
                                "props": {
                                  "style": {
                                    "color": "var(--ink)"
                                  }
                                },
                                "children": [
                                  {
                                    "type": "text",
                                    "id": "cards.b.0093",
                                    "value": "Cardholder authentication"
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "td",
                            "props": {},
                            "children": [
                              {
                                "type": "text",
                                "id": "cards.td.0094",
                                "value": "None"
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "td",
                            "props": {},
                            "children": [
                              {
                                "type": "text",
                                "id": "cards.td.0095",
                                "value": "3DS2, frictionless or challenge"
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "type": "element",
                        "tag": "tr",
                        "props": {},
                        "children": [
                          {
                            "type": "element",
                            "tag": "td",
                            "props": {},
                            "children": [
                              {
                                "type": "element",
                                "tag": "b",
                                "props": {
                                  "style": {
                                    "color": "var(--ink)"
                                  }
                                },
                                "children": [
                                  {
                                    "type": "text",
                                    "id": "cards.b.0096",
                                    "value": "Checkout friction"
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "td",
                            "props": {},
                            "children": [
                              {
                                "type": "text",
                                "id": "cards.td.0097",
                                "value": "Lowest, no extra step ever"
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "td",
                            "props": {},
                            "children": [
                              {
                                "type": "text",
                                "id": "cards.td.0098",
                                "value": "Low on frictionless, one step on challenge"
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "type": "element",
                        "tag": "tr",
                        "props": {},
                        "children": [
                          {
                            "type": "element",
                            "tag": "td",
                            "props": {},
                            "children": [
                              {
                                "type": "element",
                                "tag": "b",
                                "props": {
                                  "style": {
                                    "color": "var(--ink)"
                                  }
                                },
                                "children": [
                                  {
                                    "type": "text",
                                    "id": "cards.b.0099",
                                    "value": "Fraud chargeback liability"
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "td",
                            "props": {},
                            "children": [
                              {
                                "type": "text",
                                "id": "cards.td.0100",
                                "value": "Stays with you"
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "td",
                            "props": {},
                            "children": [
                              {
                                "type": "text",
                                "id": "cards.td.0101",
                                "value": "Shifts to the issuer once authenticated"
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "type": "element",
                        "tag": "tr",
                        "props": {},
                        "children": [
                          {
                            "type": "element",
                            "tag": "td",
                            "props": {},
                            "children": [
                              {
                                "type": "element",
                                "tag": "b",
                                "props": {
                                  "style": {
                                    "color": "var(--ink)"
                                  }
                                },
                                "children": [
                                  {
                                    "type": "text",
                                    "id": "cards.b.0102",
                                    "value": "SCA markets (EEA / UK)"
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "td",
                            "props": {},
                            "children": [
                              {
                                "type": "text",
                                "id": "cards.td.0103",
                                "value": "Generally not permitted for consumer traffic"
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "td",
                            "props": {},
                            "children": [
                              {
                                "type": "text",
                                "id": "cards.td.0104",
                                "value": "Required, 3DS2 satisfies SCA"
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "type": "element",
                        "tag": "tr",
                        "props": {},
                        "children": [
                          {
                            "type": "element",
                            "tag": "td",
                            "props": {},
                            "children": [
                              {
                                "type": "element",
                                "tag": "b",
                                "props": {
                                  "style": {
                                    "color": "var(--ink)"
                                  }
                                },
                                "children": [
                                  {
                                    "type": "text",
                                    "id": "cards.b.0105",
                                    "value": "Typical use"
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "td",
                            "props": {},
                            "children": [
                              {
                                "type": "text",
                                "id": "cards.td.0106",
                                "value": "Trusted repeat customers, non-SCA markets, conversion-critical flows"
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "td",
                            "props": {},
                            "children": [
                              {
                                "type": "text",
                                "id": "cards.td.0107",
                                "value": "Most live consumer traffic, high-risk verticals, SCA markets"
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "text",
                "value": "\n      "
              }
            ]
          },
          {
            "type": "text",
            "value": "\n      "
          },
          {
            "type": "element",
            "tag": "p",
            "props": {},
            "children": [
              {
                "type": "text",
                "id": "cards.p.0108",
                "value": "Each mode has its own guide:"
              }
            ]
          },
          {
            "type": "text",
            "value": "\n      "
          },
          {
            "type": "element",
            "tag": "div",
            "props": {
              "className": "cards c2"
            },
            "children": [
              {
                "type": "text",
                "value": "\n        "
              },
              {
                "type": "element",
                "tag": "DocLink",
                "props": {
                  "className": "card",
                  "href": "/cards-2d"
                },
                "children": [
                  {
                    "type": "element",
                    "tag": "h4",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "cards.h4.0109",
                        "value": "2D payments →"
                      }
                    ]
                  },
                  {
                    "type": "element",
                    "tag": "p",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "cards.p.0110",
                        "value": "Unauthenticated processing: flow, when it fits, trade-offs and the risk controls to pair with it."
                      }
                    ]
                  }
                ]
              },
              {
                "type": "text",
                "value": "\n        "
              },
              {
                "type": "element",
                "tag": "DocLink",
                "props": {
                  "className": "card",
                  "href": "/3ds"
                },
                "children": [
                  {
                    "type": "element",
                    "tag": "h4",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "cards.h4.0111",
                        "value": "3D Secure →"
                      }
                    ]
                  },
                  {
                    "type": "element",
                    "tag": "p",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "cards.p.0112",
                        "value": "Authenticated processing: frictionless vs challenge, SCA and exemptions, liability shift."
                      }
                    ]
                  }
                ]
              },
              {
                "type": "text",
                "value": "\n      "
              }
            ]
          },
          {
            "type": "text",
            "value": "\n\n      "
          },
          {
            "type": "element",
            "tag": "h2",
            "props": {
              "id": "create"
            },
            "children": [
              {
                "type": "text",
                "id": "cards.create.0113",
                "value": "Creating a card purchase (S2S)"
              }
            ]
          },
          {
            "type": "text",
            "value": "\n      "
          },
          {
            "type": "element",
            "tag": "p",
            "props": {},
            "children": [
              {
                "type": "text",
                "id": "cards.p.0114",
                "value": "Step 1 is the same "
              },
              {
                "type": "element",
                "tag": "code",
                "props": {},
                "children": [
                  {
                    "type": "text",
                    "id": "cards.code.0115",
                    "value": "POST /purchases/"
                  }
                ]
              },
              {
                "type": "text",
                "id": "cards.p.0116",
                "value": " call as the quickstart; if no "
              },
              {
                "type": "element",
                "tag": "code",
                "props": {},
                "children": [
                  {
                    "type": "text",
                    "id": "cards.code.0117",
                    "value": "paymentMethod"
                  }
                ]
              },
              {
                "type": "text",
                "id": "cards.p.0118",
                "value": " is pinned, the response returns a "
              },
              {
                "type": "element",
                "tag": "code",
                "props": {},
                "children": [
                  {
                    "type": "text",
                    "id": "cards.code.0119",
                    "value": "checkout_url"
                  }
                ]
              },
              {
                "type": "text",
                "id": "cards.p.0120",
                "value": " to the hosted cashier and Paysecure handles everything from there. Step 2, for direct integrations, executes the purchase server-to-server with the card and device details."
              }
            ]
          },
          {
            "type": "text",
            "value": "\n      "
          },
          {
            "type": "element",
            "tag": "p",
            "props": {},
            "children": [
              {
                "type": "text",
                "id": "cards.p.0121",
                "value": "When the issuer requires authentication (3D traffic), the S2S call returns "
              },
              {
                "type": "element",
                "tag": "code",
                "props": {},
                "children": [
                  {
                    "type": "text",
                    "id": "cards.code.0122",
                    "value": "status: \"pending\""
                  }
                ]
              },
              {
                "type": "text",
                "id": "cards.p.0123",
                "value": " with a "
              },
              {
                "type": "element",
                "tag": "code",
                "props": {},
                "children": [
                  {
                    "type": "text",
                    "id": "cards.code.0124",
                    "value": "callback_url"
                  }
                ]
              },
              {
                "type": "text",
                "id": "cards.p.0125",
                "value": "; redirect the customer there and resume on return. On 2D traffic the same redirect completes processing without an authentication screen."
              }
            ]
          },
          {
            "type": "text",
            "value": "\n      "
          },
          {
            "type": "element",
            "tag": "p",
            "props": {
              "className": "sec-note"
            },
            "children": [
              {
                "type": "text",
                "id": "cards.p.0126",
                "value": "Full request and response shapes, error messages and a live request builder are in the "
              },
              {
                "type": "element",
                "tag": "DocLink",
                "props": {
                  "className": "inline",
                  "href": "/api-cards"
                },
                "children": [
                  {
                    "type": "text",
                    "id": "cards.doclink.0127",
                    "value": "Cards S2S API reference"
                  }
                ]
              },
              {
                "type": "text",
                "value": "."
              }
            ]
          },
          {
            "type": "text",
            "value": "\n\n      "
          },
          {
            "type": "element",
            "tag": "h2",
            "props": {
              "id": "statuses"
            },
            "children": [
              {
                "type": "text",
                "id": "cards.statuses.0128",
                "value": "Purchase statuses"
              }
            ]
          },
          {
            "type": "text",
            "value": "\n      "
          },
          {
            "type": "element",
            "tag": "div",
            "props": {
              "className": "tbl-wrap"
            },
            "children": [
              {
                "type": "text",
                "value": "\n        "
              },
              {
                "type": "element",
                "tag": "table",
                "props": {
                  "className": "tbl"
                },
                "children": [
                  {
                    "type": "element",
                    "tag": "tbody",
                    "props": {},
                    "children": [
                      {
                        "type": "element",
                        "tag": "tr",
                        "props": {},
                        "children": [
                          {
                            "type": "element",
                            "tag": "th",
                            "props": {},
                            "children": [
                              {
                                "type": "text",
                                "id": "cards.th.0129",
                                "value": "Status"
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "th",
                            "props": {},
                            "children": [
                              {
                                "type": "text",
                                "id": "cards.th.0130",
                                "value": "Meaning"
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "th",
                            "props": {},
                            "children": [
                              {
                                "type": "text",
                                "id": "cards.th.0131",
                                "value": "Terminal?"
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "type": "element",
                        "tag": "tr",
                        "props": {},
                        "children": [
                          {
                            "type": "element",
                            "tag": "td",
                            "props": {},
                            "children": [
                              {
                                "type": "element",
                                "tag": "span",
                                "props": {
                                  "className": "pill gray"
                                },
                                "children": [
                                  {
                                    "type": "text",
                                    "id": "cards.span.0132",
                                    "value": "created"
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "td",
                            "props": {},
                            "children": [
                              {
                                "type": "text",
                                "id": "cards.td.0133",
                                "value": "Purchase created, customer hasn't paid yet"
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "td",
                            "props": {},
                            "children": [
                              {
                                "type": "text",
                                "id": "cards.td.0134",
                                "value": "No"
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "type": "element",
                        "tag": "tr",
                        "props": {},
                        "children": [
                          {
                            "type": "element",
                            "tag": "td",
                            "props": {},
                            "children": [
                              {
                                "type": "element",
                                "tag": "span",
                                "props": {
                                  "className": "pill blue"
                                },
                                "children": [
                                  {
                                    "type": "text",
                                    "id": "cards.span.0135",
                                    "value": "pending_execute"
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "td",
                            "props": {},
                            "children": [
                              {
                                "type": "text",
                                "id": "cards.td.0136",
                                "value": "S2S accepted, customer must complete the "
                              },
                              {
                                "type": "element",
                                "tag": "code",
                                "props": {},
                                "children": [
                                  {
                                    "type": "text",
                                    "id": "cards.code.0137",
                                    "value": "callback_url"
                                  }
                                ]
                              },
                              {
                                "type": "text",
                                "id": "cards.td.0138",
                                "value": " step"
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "td",
                            "props": {},
                            "children": [
                              {
                                "type": "text",
                                "id": "cards.td.0139",
                                "value": "No"
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "type": "element",
                        "tag": "tr",
                        "props": {},
                        "children": [
                          {
                            "type": "element",
                            "tag": "td",
                            "props": {},
                            "children": [
                              {
                                "type": "element",
                                "tag": "span",
                                "props": {
                                  "className": "pill amber"
                                },
                                "children": [
                                  {
                                    "type": "text",
                                    "id": "cards.span.0140",
                                    "value": "overdue"
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "td",
                            "props": {},
                            "children": [
                              {
                                "type": "text",
                                "id": "cards.td.0141",
                                "value": "S2S not called within the overdue window (~2 h)"
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "td",
                            "props": {},
                            "children": [
                              {
                                "type": "text",
                                "id": "cards.td.0142",
                                "value": "No"
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "type": "element",
                        "tag": "tr",
                        "props": {},
                        "children": [
                          {
                            "type": "element",
                            "tag": "td",
                            "props": {},
                            "children": [
                              {
                                "type": "element",
                                "tag": "span",
                                "props": {
                                  "className": "pill amber"
                                },
                                "children": [
                                  {
                                    "type": "text",
                                    "id": "cards.span.0143",
                                    "value": "payment_in_process"
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "td",
                            "props": {},
                            "children": [
                              {
                                "type": "text",
                                "id": "cards.td.0144",
                                "value": "Payment is under processing"
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "td",
                            "props": {},
                            "children": [
                              {
                                "type": "text",
                                "id": "cards.td.0145",
                                "value": "No"
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "type": "element",
                        "tag": "tr",
                        "props": {},
                        "children": [
                          {
                            "type": "element",
                            "tag": "td",
                            "props": {},
                            "children": [
                              {
                                "type": "element",
                                "tag": "span",
                                "props": {
                                  "className": "pill green"
                                },
                                "children": [
                                  {
                                    "type": "text",
                                    "id": "cards.span.0146",
                                    "value": "paid"
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "td",
                            "props": {},
                            "children": [
                              {
                                "type": "text",
                                "id": "cards.td.0147",
                                "value": "Transaction successful"
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "td",
                            "props": {},
                            "children": [
                              {
                                "type": "text",
                                "id": "cards.td.0148",
                                "value": "Yes"
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "type": "element",
                        "tag": "tr",
                        "props": {},
                        "children": [
                          {
                            "type": "element",
                            "tag": "td",
                            "props": {},
                            "children": [
                              {
                                "type": "element",
                                "tag": "span",
                                "props": {
                                  "className": "pill red"
                                },
                                "children": [
                                  {
                                    "type": "text",
                                    "id": "cards.span.0149",
                                    "value": "error"
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "td",
                            "props": {},
                            "children": [
                              {
                                "type": "text",
                                "id": "cards.td.0150",
                                "value": "Transaction failed, details in "
                              },
                              {
                                "type": "element",
                                "tag": "code",
                                "props": {},
                                "children": [
                                  {
                                    "type": "text",
                                    "id": "cards.code.0151",
                                    "value": "errorMsg"
                                  }
                                ]
                              },
                              {
                                "type": "text",
                                "id": "cards.td.0152",
                                "value": " and "
                              },
                              {
                                "type": "element",
                                "tag": "code",
                                "props": {},
                                "children": [
                                  {
                                    "type": "text",
                                    "id": "cards.code.0153",
                                    "value": "transaction_data.attempts.error"
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "td",
                            "props": {},
                            "children": [
                              {
                                "type": "text",
                                "id": "cards.td.0154",
                                "value": "Retryable"
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "type": "element",
                        "tag": "tr",
                        "props": {},
                        "children": [
                          {
                            "type": "element",
                            "tag": "td",
                            "props": {},
                            "children": [
                              {
                                "type": "element",
                                "tag": "span",
                                "props": {
                                  "className": "pill gray"
                                },
                                "children": [
                                  {
                                    "type": "text",
                                    "id": "cards.span.0155",
                                    "value": "cancelled"
                                  }
                                ]
                              },
                              {
                                "type": "text",
                                "value": " · "
                              },
                              {
                                "type": "element",
                                "tag": "span",
                                "props": {
                                  "className": "pill gray"
                                },
                                "children": [
                                  {
                                    "type": "text",
                                    "id": "cards.span.0156",
                                    "value": "expired"
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "td",
                            "props": {},
                            "children": [
                              {
                                "type": "text",
                                "id": "cards.td.0157",
                                "value": "Cancelled via API (only from "
                              },
                              {
                                "type": "element",
                                "tag": "code",
                                "props": {},
                                "children": [
                                  {
                                    "type": "text",
                                    "id": "cards.code.0158",
                                    "value": "created"
                                  }
                                ]
                              },
                              {
                                "type": "text",
                                "id": "cards.td.0159",
                                "value": ") / never completed in time"
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "td",
                            "props": {},
                            "children": [
                              {
                                "type": "text",
                                "id": "cards.td.0160",
                                "value": "Yes"
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "text",
                "value": "\n      "
              }
            ]
          },
          {
            "type": "text",
            "value": "\n      "
          },
          {
            "type": "element",
            "tag": "p",
            "props": {
              "className": "sec-note"
            },
            "children": [
              {
                "type": "text",
                "id": "cards.p.0161",
                "value": "Full catalogue including refund and chargeback statuses: "
              },
              {
                "type": "element",
                "tag": "DocLink",
                "props": {
                  "className": "inline",
                  "href": "/errors#statuses"
                },
                "children": [
                  {
                    "type": "text",
                    "id": "cards.doclink.0162",
                    "value": "Transaction statuses"
                  }
                ]
              },
              {
                "type": "text",
                "value": "."
              }
            ]
          },
          {
            "type": "text",
            "value": "\n\n      "
          },
          {
            "type": "element",
            "tag": "h2",
            "props": {
              "id": "capture"
            },
            "children": [
              {
                "type": "text",
                "id": "cards.capture.0163",
                "value": "Capture, void & refunds"
              }
            ]
          },
          {
            "type": "text",
            "value": "\n      "
          },
          {
            "type": "element",
            "tag": "ul",
            "props": {
              "className": "list"
            },
            "children": [
              {
                "type": "text",
                "value": "\n        "
              },
              {
                "type": "element",
                "tag": "li",
                "props": {},
                "children": [
                  {
                    "type": "element",
                    "tag": "b",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "cards.b.0164",
                        "value": "Auto-capture (default):"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "cards.li.0165",
                    "value": " authorisation and capture happen together, right for most e-commerce and deposits."
                  }
                ]
              },
              {
                "type": "text",
                "value": "\n        "
              },
              {
                "type": "element",
                "tag": "li",
                "props": {},
                "children": [
                  {
                    "type": "element",
                    "tag": "b",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "cards.b.0166",
                        "value": "Delayed capture:"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "cards.li.0167",
                    "value": " authorise now with "
                  },
                  {
                    "type": "element",
                    "tag": "code",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "cards.code.0168",
                        "value": "skipCapture: true"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "cards.li.0169",
                    "value": ", capture within the hold window via "
                  },
                  {
                    "type": "element",
                    "tag": "code",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "cards.code.0170",
                        "value": "POST /purchases/{id}/capture/"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "cards.li.0171",
                    "value": ": see the "
                  },
                  {
                    "type": "element",
                    "tag": "DocLink",
                    "props": {
                      "className": "inline",
                      "href": "/api-preauth"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "cards.doclink.0172",
                        "value": "Pre-Authorization API"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": "."
                  }
                ]
              },
              {
                "type": "text",
                "value": "\n        "
              },
              {
                "type": "element",
                "tag": "li",
                "props": {},
                "children": [
                  {
                    "type": "element",
                    "tag": "b",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "cards.b.0173",
                        "value": "Void:"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "cards.li.0174",
                    "value": " release an uncaptured authorisation with "
                  },
                  {
                    "type": "element",
                    "tag": "code",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "cards.code.0175",
                        "value": "GET /purchases/{id}/cancel/"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "cards.li.0176",
                    "value": ": free, no chargeback exposure."
                  }
                ]
              },
              {
                "type": "text",
                "value": "\n        "
              },
              {
                "type": "element",
                "tag": "li",
                "props": {},
                "children": [
                  {
                    "type": "element",
                    "tag": "b",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "cards.b.0177",
                        "value": "Refunds:"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": " "
                  },
                  {
                    "type": "element",
                    "tag": "code",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "cards.code.0178",
                        "value": "GET /purchases/{id}/refund/"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "cards.li.0179",
                    "value": " for a full refund, or "
                  },
                  {
                    "type": "element",
                    "tag": "code",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "cards.code.0180",
                        "value": "POST /purchases/{id}/refund"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "cards.li.0181",
                    "value": " with a decimal "
                  },
                  {
                    "type": "element",
                    "tag": "code",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "cards.code.0182",
                        "value": "amount"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "cards.li.0183",
                    "value": " for a partial refund. Refunds are asynchronous, confirm on the "
                  },
                  {
                    "type": "element",
                    "tag": "code",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "cards.code.0184",
                        "value": "refunded"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "cards.li.0185",
                    "value": " webhook. Full request/response shapes in the "
                  },
                  {
                    "type": "element",
                    "tag": "DocLink",
                    "props": {
                      "className": "inline",
                      "href": "/api-reference"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "cards.doclink.0186",
                        "value": "API reference"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": "."
                  }
                ]
              },
              {
                "type": "text",
                "value": "\n      "
              }
            ]
          },
          {
            "type": "text",
            "value": "\n\n      "
          },
          {
            "type": "element",
            "tag": "h2",
            "props": {
              "id": "recurring"
            },
            "children": [
              {
                "type": "text",
                "id": "cards.recurring.0187",
                "value": "Saved cards & recurring"
              }
            ]
          },
          {
            "type": "text",
            "value": "\n      "
          },
          {
            "type": "element",
            "tag": "p",
            "props": {},
            "children": [
              {
                "type": "text",
                "id": "cards.p.0188",
                "value": "Tokenise a card during a customer-initiated payment, then charge it later without the customer present. On an S2S call, set "
              },
              {
                "type": "element",
                "tag": "code",
                "props": {},
                "children": [
                  {
                    "type": "text",
                    "id": "cards.code.0189",
                    "value": "remember_card: \"on\""
                  }
                ]
              },
              {
                "type": "text",
                "id": "cards.p.0190",
                "value": " to save the card at the first payment:"
              }
            ]
          },
          {
            "type": "text",
            "value": "\n      "
          },
          {
            "type": "element",
            "tag": "div",
            "props": {
              "className": "tbl-wrap"
            },
            "children": [
              {
                "type": "text",
                "value": "\n        "
              },
              {
                "type": "element",
                "tag": "table",
                "props": {
                  "className": "tbl"
                },
                "children": [
                  {
                    "type": "element",
                    "tag": "tbody",
                    "props": {},
                    "children": [
                      {
                        "type": "element",
                        "tag": "tr",
                        "props": {},
                        "children": [
                          {
                            "type": "element",
                            "tag": "th",
                            "props": {},
                            "children": [
                              {
                                "type": "text",
                                "id": "cards.th.0191",
                                "value": "Transaction"
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "th",
                            "props": {},
                            "children": [
                              {
                                "type": "text",
                                "id": "cards.th.0192",
                                "value": "Type"
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "th",
                            "props": {},
                            "children": [
                              {
                                "type": "text",
                                "id": "cards.th.0193",
                                "value": "3DS required"
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "type": "element",
                        "tag": "tr",
                        "props": {},
                        "children": [
                          {
                            "type": "element",
                            "tag": "td",
                            "props": {},
                            "children": [
                              {
                                "type": "text",
                                "id": "cards.td.0194",
                                "value": "First payment, card saved"
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "td",
                            "props": {},
                            "children": [
                              {
                                "type": "text",
                                "id": "cards.td.0195",
                                "value": "CIT, customer-initiated"
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "td",
                            "props": {},
                            "children": [
                              {
                                "type": "text",
                                "id": "cards.td.0196",
                                "value": "Yes"
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "type": "element",
                        "tag": "tr",
                        "props": {},
                        "children": [
                          {
                            "type": "element",
                            "tag": "td",
                            "props": {},
                            "children": [
                              {
                                "type": "text",
                                "id": "cards.td.0197",
                                "value": "One-click repeat purchase"
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "td",
                            "props": {},
                            "children": [
                              {
                                "type": "text",
                                "id": "cards.td.0198",
                                "value": "CIT with token"
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "td",
                            "props": {},
                            "children": [
                              {
                                "type": "text",
                                "id": "cards.td.0199",
                                "value": "Usually frictionless"
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "type": "element",
                        "tag": "tr",
                        "props": {},
                        "children": [
                          {
                            "type": "element",
                            "tag": "td",
                            "props": {},
                            "children": [
                              {
                                "type": "text",
                                "id": "cards.td.0200",
                                "value": "Subscription / retry billing"
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "td",
                            "props": {},
                            "children": [
                              {
                                "type": "text",
                                "id": "cards.td.0201",
                                "value": "MIT, merchant-initiated"
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "td",
                            "props": {},
                            "children": [
                              {
                                "type": "text",
                                "id": "cards.td.0202",
                                "value": "Exempt (uses initial mandate)"
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "text",
                "value": "\n      "
              }
            ]
          },
          {
            "type": "text",
            "value": "\n      "
          },
          {
            "type": "element",
            "tag": "p",
            "props": {
              "className": "sec-note"
            },
            "children": [
              {
                "type": "text",
                "id": "cards.p.0203",
                "value": "Saved cards are upgraded to scheme network tokens automatically; see the "
              },
              {
                "type": "element",
                "tag": "DocLink",
                "props": {
                  "className": "inline",
                  "href": "/product-tokenisation"
                },
                "children": [
                  {
                    "type": "text",
                    "id": "cards.doclink.0204",
                    "value": "Tokenisation guide"
                  }
                ]
              },
              {
                "type": "text",
                "id": "cards.p.0205",
                "value": ". MIT retry logic and mandates are covered in "
              },
              {
                "type": "element",
                "tag": "DocLink",
                "props": {
                  "className": "inline",
                  "href": "/product-recurring"
                },
                "children": [
                  {
                    "type": "text",
                    "id": "cards.doclink.0206",
                    "value": "Recurring payments"
                  }
                ]
              },
              {
                "type": "text",
                "value": "."
              }
            ]
          },
          {
            "type": "text",
            "value": "\n\n      "
          },
          {
            "type": "element",
            "tag": "div",
            "props": {
              "className": "callout success"
            },
            "children": [
              {
                "type": "text",
                "value": "\n        "
              },
              {
                "type": "element",
                "tag": "span",
                "props": {
                  "className": "ico"
                },
                "children": [
                  {
                    "type": "element",
                    "tag": "svg",
                    "props": {
                      "viewBox": "0 0 24 24",
                      "fill": "none",
                      "stroke": "currentColor",
                      "strokeWidth": "1.8",
                      "strokeLinecap": "round",
                      "strokeLinejoin": "round",
                      "width": "16",
                      "height": "16",
                      "aria-hidden": "true"
                    },
                    "children": [
                      {
                        "type": "element",
                        "tag": "path",
                        "props": {
                          "d": "M9 3h6M10 3v6l-5.5 9.5A2 2 0 0 0 6.2 21h11.6a2 2 0 0 0 1.7-2.5L14 9V3"
                        },
                        "children": []
                      },
                      {
                        "type": "element",
                        "tag": "path",
                        "props": {
                          "d": "M7.5 15h9"
                        },
                        "children": []
                      }
                    ]
                  }
                ]
              },
              {
                "type": "text",
                "value": "\n        "
              },
              {
                "type": "element",
                "tag": "p",
                "props": {},
                "children": [
                  {
                    "type": "element",
                    "tag": "b",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "cards.b.0207",
                        "value": "Next:"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "cards.p.0208",
                    "value": " read the "
                  },
                  {
                    "type": "element",
                    "tag": "DocLink",
                    "props": {
                      "className": "inline",
                      "href": "/cards-2d"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "cards.doclink.0209",
                        "value": "2D"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "cards.p.0210",
                    "value": " and "
                  },
                  {
                    "type": "element",
                    "tag": "DocLink",
                    "props": {
                      "className": "inline",
                      "href": "/3ds"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "cards.doclink.0211",
                        "value": "3D"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "cards.p.0212",
                    "value": " guides, run the full card test matrix with the "
                  },
                  {
                    "type": "element",
                    "tag": "DocLink",
                    "props": {
                      "className": "inline",
                      "href": "/test-cards"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "cards.doclink.0213",
                        "value": "test cards"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "cards.p.0214",
                    "value": ", then wire up "
                  },
                  {
                    "type": "element",
                    "tag": "DocLink",
                    "props": {
                      "className": "inline",
                      "href": "/dashboard-configuration#webhooks"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "cards.doclink.0215",
                        "value": "webhooks"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "cards.p.0216",
                    "value": " for payment confirmation."
                  }
                ]
              },
              {
                "type": "text",
                "value": "\n      "
              }
            ]
          },
          {
            "type": "text",
            "value": "\n\n      "
          },
          {
            "type": "element",
            "tag": "div",
            "props": {
              "className": "pg-foot"
            },
            "children": [
              {
                "type": "text",
                "value": "\n        "
              },
              {
                "type": "element",
                "tag": "Helpful",
                "props": {
                  "updated": "Last updated 13 Jul 2026 · v2.4"
                },
                "children": []
              },
              {
                "type": "text",
                "value": "\n        "
              },
              {
                "type": "element",
                "tag": "div",
                "props": {
                  "className": "prevnext"
                },
                "children": [
                  {
                    "type": "text",
                    "value": "\n          "
                  },
                  {
                    "type": "element",
                    "tag": "DocLink",
                    "props": {
                      "className": "pn",
                      "href": "/payment-methods"
                    },
                    "children": [
                      {
                        "type": "element",
                        "tag": "small",
                        "props": {},
                        "children": [
                          {
                            "type": "text",
                            "id": "cards.small.0217",
                            "value": "Previous"
                          }
                        ]
                      },
                      {
                        "type": "element",
                        "tag": "b",
                        "props": {},
                        "children": [
                          {
                            "type": "text",
                            "id": "cards.b.0218",
                            "value": "← Payment methods"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": "\n          "
                  },
                  {
                    "type": "element",
                    "tag": "DocLink",
                    "props": {
                      "className": "pn next",
                      "href": "/cards-2d"
                    },
                    "children": [
                      {
                        "type": "element",
                        "tag": "small",
                        "props": {},
                        "children": [
                          {
                            "type": "text",
                            "id": "cards.small.0219",
                            "value": "Next"
                          }
                        ]
                      },
                      {
                        "type": "element",
                        "tag": "b",
                        "props": {},
                        "children": [
                          {
                            "type": "text",
                            "id": "cards.b.0220",
                            "value": "2D payments →"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": "\n        "
                  }
                ]
              },
              {
                "type": "text",
                "value": "\n      "
              }
            ]
          },
          {
            "type": "text",
            "value": "\n"
          }
        ]
      }
    }
  ]
});
