import { defineDocument } from '../schema.js';

export const cards2dTreeDocument = defineDocument({
  "schemaVersion": 1,
  "slug": "cards-2d",
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
                    "id": "cards-2d.doclink.0001",
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
                    "id": "cards-2d.doclink.0002",
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
                "type": "element",
                "tag": "DocLink",
                "props": {
                  "href": "/cards"
                },
                "children": [
                  {
                    "type": "text",
                    "id": "cards-2d.doclink.0003",
                    "value": "Cards"
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
                "id": "cards-2d.div.0004",
                "value": "2D Payments"
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
                "id": "cards-2d.h1.0005",
                "value": "2D payments"
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
                "id": "cards-2d.p.0006",
                "value": "Card processing without cardholder authentication: the fastest checkout there is, in exchange for keeping the fraud liability yourself."
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
              "id": "overview"
            },
            "children": [
              {
                "type": "text",
                "id": "cards-2d.overview.0007",
                "value": "What a 2D payment is"
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
                "id": "cards-2d.p.0008",
                "value": "A 2D (two-domain) payment involves only the acquirer domain (you, Paysecure, your acquirer) and the issuer domain (the cardholder and their bank). The card number, expiry and CVC go straight to authorisation; the issuer decides on the transaction data alone and the customer is never asked to verify themselves. A 3D payment adds the third, interoperability domain, where the "
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
                    "id": "cards-2d.doclink.0009",
                    "value": "3DS2 authentication"
                  }
                ]
              },
              {
                "type": "text",
                "id": "cards-2d.p.0010",
                "value": " runs before authorisation."
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
                "id": "cards-2d.p.0011",
                "value": "Because there is no authentication step, a 2D payment has the lowest possible checkout friction: no OTP, no bank-app hop, no redirect screen the customer can abandon. The price is that the transaction is unauthenticated, so fraud chargeback liability stays with you, and issuers scrutinise the authorisation harder."
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
                "id": "cards-2d.flow.0012",
                "value": "How a 2D payment flows"
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
                  "viewBox": "0 0 760 434",
                  "width": "100%",
                  "role": "img",
                  "aria-label": "Sequence diagram of a 2D card payment",
                  "xmlns": "http://www.w3.org/2000/svg",
                  "style": {
                    "display": "block"
                  }
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
                          "id": "td-arr",
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
                              "fill": "var(--muted)"
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
                    "tag": "line",
                    "props": {
                      "x1": "80",
                      "y1": "42",
                      "x2": "80",
                      "y2": "386",
                      "stroke": "var(--border)",
                      "strokeDasharray": "4 4"
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
                      "x1": "250",
                      "y1": "42",
                      "x2": "250",
                      "y2": "386",
                      "stroke": "var(--border)",
                      "strokeDasharray": "4 4"
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
                      "x1": "430",
                      "y1": "42",
                      "x2": "430",
                      "y2": "386",
                      "stroke": "var(--border)",
                      "strokeDasharray": "4 4"
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
                      "x1": "590",
                      "y1": "42",
                      "x2": "590",
                      "y2": "386",
                      "stroke": "var(--border)",
                      "strokeDasharray": "4 4"
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
                      "x1": "705",
                      "y1": "42",
                      "x2": "705",
                      "y2": "386",
                      "stroke": "var(--border)",
                      "strokeDasharray": "4 4"
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
                      "x": "30",
                      "y": "8",
                      "width": "100",
                      "height": "30",
                      "rx": "8",
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
                    "tag": "text",
                    "props": {
                      "x": "80",
                      "y": "27",
                      "textAnchor": "middle",
                      "fontSize": "12",
                      "fontWeight": "600",
                      "fill": "var(--ink)",
                      "fontFamily": "Inter,system-ui,sans-serif"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "cards-2d.text.0013",
                        "value": "Customer"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": "\n          "
                  },
                  {
                    "type": "element",
                    "tag": "rect",
                    "props": {
                      "x": "190",
                      "y": "8",
                      "width": "120",
                      "height": "30",
                      "rx": "8",
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
                    "tag": "text",
                    "props": {
                      "x": "250",
                      "y": "27",
                      "textAnchor": "middle",
                      "fontSize": "12",
                      "fontWeight": "600",
                      "fill": "var(--ink)",
                      "fontFamily": "Inter,system-ui,sans-serif"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "cards-2d.text.0014",
                        "value": "Your server"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": "\n          "
                  },
                  {
                    "type": "element",
                    "tag": "rect",
                    "props": {
                      "x": "370",
                      "y": "8",
                      "width": "120",
                      "height": "30",
                      "rx": "8",
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
                    "tag": "text",
                    "props": {
                      "x": "430",
                      "y": "27",
                      "textAnchor": "middle",
                      "fontSize": "12",
                      "fontWeight": "600",
                      "fill": "#FFFFFF",
                      "fontFamily": "Inter,system-ui,sans-serif"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "cards-2d.text.0015",
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
                    "tag": "rect",
                    "props": {
                      "x": "518",
                      "y": "8",
                      "width": "144",
                      "height": "30",
                      "rx": "8",
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
                    "tag": "text",
                    "props": {
                      "x": "590",
                      "y": "27",
                      "textAnchor": "middle",
                      "fontSize": "12",
                      "fontWeight": "600",
                      "fill": "var(--ink)",
                      "fontFamily": "Inter,system-ui,sans-serif"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "cards-2d.text.0016",
                        "value": "Acquirer + scheme"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": "\n          "
                  },
                  {
                    "type": "element",
                    "tag": "rect",
                    "props": {
                      "x": "660",
                      "y": "8",
                      "width": "90",
                      "height": "30",
                      "rx": "8",
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
                    "tag": "text",
                    "props": {
                      "x": "705",
                      "y": "27",
                      "textAnchor": "middle",
                      "fontSize": "12",
                      "fontWeight": "600",
                      "fill": "var(--ink)",
                      "fontFamily": "Inter,system-ui,sans-serif"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "cards-2d.text.0017",
                        "value": "Issuer"
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
                      "x": "165",
                      "y": "78",
                      "textAnchor": "middle",
                      "fontSize": "11",
                      "fill": "var(--body)",
                      "fontFamily": "Inter,system-ui,sans-serif"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "cards-2d.text.0018",
                        "value": "1 · Submits card details"
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
                      "x1": "80",
                      "y1": "86",
                      "x2": "246",
                      "y2": "86",
                      "stroke": "var(--muted)",
                      "markerEnd": "url(#td-arr)"
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
                      "x": "340",
                      "y": "110",
                      "textAnchor": "middle",
                      "fontSize": "11",
                      "fill": "var(--body)",
                      "fontFamily": "Inter,system-ui,sans-serif"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "cards-2d.text.0019",
                        "value": "2 · Create + execute"
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
                      "x": "340",
                      "y": "123",
                      "textAnchor": "middle",
                      "fontSize": "11",
                      "fill": "var(--body)",
                      "fontFamily": "Inter,system-ui,sans-serif"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "cards-2d.text.0020",
                        "value": "(S2S or hosted cashier)"
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
                      "x1": "250",
                      "y1": "130",
                      "x2": "426",
                      "y2": "130",
                      "stroke": "var(--muted)",
                      "markerEnd": "url(#td-arr)"
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
                      "x": "330",
                      "y": "156",
                      "width": "200",
                      "height": "32",
                      "rx": "8",
                      "fill": "var(--bg-side)",
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
                    "tag": "text",
                    "props": {
                      "x": "430",
                      "y": "169",
                      "textAnchor": "middle",
                      "fontSize": "11",
                      "fill": "var(--ink)",
                      "fontFamily": "Inter,system-ui,sans-serif"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "cards-2d.text.0021",
                        "value": "3 · Risk checks, then routed"
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
                      "x": "430",
                      "y": "182",
                      "textAnchor": "middle",
                      "fontSize": "11",
                      "fill": "var(--ink)",
                      "fontFamily": "Inter,system-ui,sans-serif"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "cards-2d.text.0022",
                        "value": "to a 2D MID"
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
                      "x": "510",
                      "y": "211",
                      "textAnchor": "middle",
                      "fontSize": "11",
                      "fill": "var(--body)",
                      "fontFamily": "Inter,system-ui,sans-serif"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "cards-2d.text.0023",
                        "value": "4 · Authorisation request"
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
                      "x1": "430",
                      "y1": "218",
                      "x2": "586",
                      "y2": "218",
                      "stroke": "var(--muted)",
                      "markerEnd": "url(#td-arr)"
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
                      "x": "647",
                      "y": "242",
                      "textAnchor": "middle",
                      "fontSize": "11",
                      "fill": "var(--body)",
                      "fontFamily": "Inter,system-ui,sans-serif"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "cards-2d.text.0024",
                        "value": "5 · Routed to"
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
                      "x": "647",
                      "y": "255",
                      "textAnchor": "middle",
                      "fontSize": "11",
                      "fill": "var(--body)",
                      "fontFamily": "Inter,system-ui,sans-serif"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "cards-2d.text.0025",
                        "value": "the issuer"
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
                      "x1": "590",
                      "y1": "262",
                      "x2": "701",
                      "y2": "262",
                      "stroke": "var(--muted)",
                      "markerEnd": "url(#td-arr)"
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
                      "x": "630",
                      "y": "284",
                      "width": "120",
                      "height": "32",
                      "rx": "8",
                      "fill": "var(--bg-side)",
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
                    "tag": "text",
                    "props": {
                      "x": "690",
                      "y": "297",
                      "textAnchor": "middle",
                      "fontSize": "11",
                      "fill": "var(--ink)",
                      "fontFamily": "Inter,system-ui,sans-serif"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "cards-2d.text.0026",
                        "value": "6 · Approves or"
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
                      "x": "690",
                      "y": "310",
                      "textAnchor": "middle",
                      "fontSize": "11",
                      "fill": "var(--ink)",
                      "fontFamily": "Inter,system-ui,sans-serif"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "cards-2d.text.0027",
                        "value": "declines, data only"
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
                      "x": "567",
                      "y": "336",
                      "textAnchor": "middle",
                      "fontSize": "11",
                      "fill": "var(--body)",
                      "fontFamily": "Inter,system-ui,sans-serif"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "cards-2d.text.0028",
                        "value": "7 · Result returns"
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
                      "x1": "705",
                      "y1": "344",
                      "x2": "434",
                      "y2": "344",
                      "stroke": "var(--muted)",
                      "markerEnd": "url(#td-arr)"
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
                      "x": "340",
                      "y": "364",
                      "textAnchor": "middle",
                      "fontSize": "11",
                      "fill": "var(--body)",
                      "fontFamily": "Inter,system-ui,sans-serif"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "cards-2d.text.0029",
                        "value": "8 · Status "
                      },
                      {
                        "type": "element",
                        "tag": "tspan",
                        "props": {
                          "fontFamily": "'JetBrains Mono',monospace",
                          "fill": "var(--purple)"
                        },
                        "children": [
                          {
                            "type": "text",
                            "id": "cards-2d.tspan.0030",
                            "value": "paid"
                          }
                        ]
                      },
                      {
                        "type": "text",
                        "id": "cards-2d.text.0031",
                        "value": " or "
                      },
                      {
                        "type": "element",
                        "tag": "tspan",
                        "props": {
                          "fontFamily": "'JetBrains Mono',monospace",
                          "fill": "var(--purple)"
                        },
                        "children": [
                          {
                            "type": "text",
                            "id": "cards-2d.tspan.0032",
                            "value": "error"
                          }
                        ]
                      },
                      {
                        "type": "text",
                        "id": "cards-2d.text.0033",
                        "value": ", signed webhook"
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
                      "x1": "430",
                      "y1": "372",
                      "x2": "254",
                      "y2": "372",
                      "stroke": "var(--muted)",
                      "markerEnd": "url(#td-arr)"
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
                      "y": "410",
                      "textAnchor": "middle",
                      "fontSize": "11",
                      "fill": "var(--muted)",
                      "fontFamily": "Inter,system-ui,sans-serif"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "cards-2d.text.0034",
                        "value": "No authentication step anywhere: the issuer decides on the transaction data alone,"
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
                      "x": "380",
                      "y": "424",
                      "textAnchor": "middle",
                      "fontSize": "11",
                      "fill": "var(--muted)",
                      "fontFamily": "Inter,system-ui,sans-serif"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "cards-2d.text.0035",
                        "value": "and fraud chargeback liability stays with you."
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
                "value": "\n        "
              },
              {
                "type": "element",
                "tag": "figcaption",
                "props": {},
                "children": [
                  {
                    "type": "text",
                    "id": "cards-2d.figcaption.0036",
                    "value": "Figure 1: A 2D card payment, authorisation with no authentication step"
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
                "id": "cards-2d.p.0037",
                "value": "The integration is identical to 3D traffic: the same two S2S calls, the same "
              },
              {
                "type": "element",
                "tag": "code",
                "props": {},
                "children": [
                  {
                    "type": "text",
                    "id": "cards-2d.code.0038",
                    "value": "callback_url"
                  }
                ]
              },
              {
                "type": "text",
                "id": "cards-2d.p.0039",
                "value": " redirect (it completes processing without showing the customer an authentication screen), the same statuses and webhooks. Only the MID configuration differs, so switching traffic between modes needs no code change."
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
              "id": "when"
            },
            "children": [
              {
                "type": "text",
                "id": "cards-2d.when.0040",
                "value": "When 2D fits"
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
                        "id": "cards-2d.b.0041",
                        "value": "Non-SCA markets:"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "cards-2d.li.0042",
                    "value": " in regions without a strong-customer-authentication mandate, 2D is a common default where fraud rates allow. In the EEA and UK, PSD2 makes unauthenticated consumer payments generally impermissible, so 2D is effectively unavailable there."
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
                        "id": "cards-2d.b.0043",
                        "value": "Trusted, known customers:"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "cards-2d.li.0044",
                    "value": " repeat buyers with clean history, especially combined with "
                  },
                  {
                    "type": "element",
                    "tag": "DocLink",
                    "props": {
                      "className": "inline",
                      "href": "/api-cards#check-whitelist"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "cards-2d.doclink.0045",
                        "value": "whitelisting"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "cards-2d.li.0046",
                    "value": ", where an extra challenge costs more in conversion than it saves in fraud."
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
                        "id": "cards-2d.b.0047",
                        "value": "Conversion-critical flows:"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "cards-2d.li.0048",
                    "value": " low-value, high-frequency purchases where every abandoned challenge is lost revenue and the fraud exposure per transaction is small."
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
              "id": "tradeoffs"
            },
            "children": [
              {
                "type": "text",
                "id": "cards-2d.tradeoffs.0049",
                "value": "The trade-offs"
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
                                "id": "cards-2d.th.0050",
                                "value": "You gain"
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
                                "id": "cards-2d.th.0051",
                                "value": "You accept"
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
                                "id": "cards-2d.td.0052",
                                "value": "The lowest-friction checkout possible: no OTP, redirect or app hop to abandon"
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
                                "id": "cards-2d.td.0053",
                                "value": "Fraud chargeback liability stays with you; there is no liability shift without authentication"
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
                                "id": "cards-2d.td.0054",
                                "value": "No authentication failures or timeouts in the funnel"
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
                                "id": "cards-2d.td.0055",
                                "value": "Higher fraud and chargeback exposure, which feeds your scheme fraud-rate monitoring"
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
                                "id": "cards-2d.td.0056",
                                "value": "Slightly faster processing (no authentication round-trip)"
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
                                "id": "cards-2d.td.0057",
                                "value": "Issuers scrutinise unauthenticated payments harder and may decline where they would approve an authenticated one, or demand a step-up (\"soft decline\")"
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
            "tag": "div",
            "props": {
              "className": "callout warn"
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
                          "d": "M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"
                        },
                        "children": []
                      },
                      {
                        "type": "element",
                        "tag": "path",
                        "props": {
                          "d": "M12 9v4M12 17h.01"
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
                        "id": "cards-2d.b.0058",
                        "value": "Watch your chargeback rate."
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "cards-2d.p.0059",
                    "value": " Schemes monitor merchant fraud ratios, and sustained high rates on 2D traffic can trigger fines or programme placement. Pair 2D processing with the risk controls below, and keep 3D available as the fallback."
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
              "id": "risk-controls"
            },
            "children": [
              {
                "type": "text",
                "id": "cards-2d.risk-controls.0060",
                "value": "Risk controls to pair with 2D"
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
              "className": "checklist"
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
                        "id": "cards-2d.b.0061",
                        "value": "Trust Score:"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "cards-2d.li.0062",
                    "value": " read the "
                  },
                  {
                    "type": "element",
                    "tag": "DocLink",
                    "props": {
                      "className": "inline",
                      "href": "/api-trust-score"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "cards-2d.doclink.0063",
                        "value": "risk score"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "cards-2d.li.0064",
                    "value": " per transaction and gate high-risk payments to 3D or block them"
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
                        "id": "cards-2d.b.0065",
                        "value": "Whitelisting:"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "cards-2d.li.0066",
                    "value": " restrict 2D processing to "
                  },
                  {
                    "type": "element",
                    "tag": "DocLink",
                    "props": {
                      "className": "inline",
                      "href": "/api-cards#check-whitelist"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "cards-2d.doclink.0067",
                        "value": "whitelisted cards and customers"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "cards-2d.li.0068",
                    "value": " you already trust"
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
                        "id": "cards-2d.b.0069",
                        "value": "Rule Engine:"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "cards-2d.li.0070",
                    "value": " use "
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
                        "id": "cards-2d.doclink.0071",
                        "value": "routing and cascading rules"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "cards-2d.li.0072",
                    "value": ", including retrying a failed 2D transaction on a 3D MID so soft declines recover automatically"
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
                        "id": "cards-2d.b.0073",
                        "value": "Limits:"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "cards-2d.li.0074",
                    "value": " cap transaction and velocity limits (hourly, daily, weekly, monthly) in the "
                  },
                  {
                    "type": "element",
                    "tag": "DocLink",
                    "props": {
                      "className": "inline",
                      "href": "/dashboard-configuration"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "cards-2d.doclink.0075",
                        "value": "dashboard risk settings"
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
                        "id": "cards-2d.b.0076",
                        "value": "Global blocking:"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "cards-2d.li.0077",
                    "value": " block problem BINs, cards, countries and IPs via "
                  },
                  {
                    "type": "element",
                    "tag": "DocLink",
                    "props": {
                      "className": "inline",
                      "href": "/dash-global-blocking"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "cards-2d.doclink.0078",
                        "value": "Global Blocking"
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
              "id": "config"
            },
            "children": [
              {
                "type": "text",
                "id": "cards-2d.config.0079",
                "value": "Enabling 2D processing"
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
                "id": "cards-2d.p.0080",
                "value": "2D versus 3D is configured per MID by your account manager, based on your vertical, markets and risk profile. Portfolios are commonly mixed: 2D for trusted traffic, 3D for the rest, with Rule Engine rules deciding which MID each transaction hits. No integration change is needed to move between the two."
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
              "id": "testing"
            },
            "children": [
              {
                "type": "text",
                "id": "cards-2d.testing.0081",
                "value": "Testing"
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
              "className": "checklist"
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
                    "type": "text",
                    "id": "cards-2d.li.0082",
                    "value": "The "
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
                        "id": "cards-2d.doclink.0083",
                        "value": "sandbox test cards"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "cards-2d.li.0084",
                    "value": " include a 2D/3D matrix; 2D cards authorise or decline with no challenge step"
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
                    "type": "text",
                    "id": "cards-2d.li.0085",
                    "value": "Confirm your "
                  },
                  {
                    "type": "element",
                    "tag": "code",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "cards-2d.code.0086",
                        "value": "callback_url"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "cards-2d.li.0087",
                    "value": " handling works when no challenge is shown: the customer should land back on your redirect URL without noticing an intermediate step"
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
                    "type": "text",
                    "id": "cards-2d.li.0088",
                    "value": "Verify the final "
                  },
                  {
                    "type": "element",
                    "tag": "code",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "cards-2d.code.0089",
                        "value": "paid"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "cards-2d.li.0090",
                    "value": " or "
                  },
                  {
                    "type": "element",
                    "tag": "code",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "cards-2d.code.0091",
                        "value": "error"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "cards-2d.li.0092",
                    "value": " on the webhook, exactly as for 3D traffic"
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
              "id": "apis"
            },
            "children": [
              {
                "type": "text",
                "id": "cards-2d.apis.0093",
                "value": "APIs"
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
                  "href": "/api-cards#twod-flow"
                },
                "children": [
                  {
                    "type": "element",
                    "tag": "h4",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "cards-2d.h4.0094",
                        "value": "Cards S2S API: 2D processing →"
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
                        "id": "cards-2d.p.0095",
                        "value": "The exact call sequence and what differs from 3D at the API level."
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
                  "href": "/api-trust-score"
                },
                "children": [
                  {
                    "type": "element",
                    "tag": "h4",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "cards-2d.h4.0096",
                        "value": "Trust Score API →"
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
                        "id": "cards-2d.p.0097",
                        "value": "Per-transaction risk scoring to gate your 2D traffic."
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
                      "href": "/cards"
                    },
                    "children": [
                      {
                        "type": "element",
                        "tag": "small",
                        "props": {},
                        "children": [
                          {
                            "type": "text",
                            "id": "cards-2d.small.0098",
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
                            "id": "cards-2d.b.0099",
                            "value": "← Cards"
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
                      "href": "/3ds"
                    },
                    "children": [
                      {
                        "type": "element",
                        "tag": "small",
                        "props": {},
                        "children": [
                          {
                            "type": "text",
                            "id": "cards-2d.small.0100",
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
                            "id": "cards-2d.b.0101",
                            "value": "3D Secure →"
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
