import { defineDocument } from '../schema.js';

export const productPreauthTreeDocument = defineDocument({
  "schemaVersion": 1,
  "slug": "product-preauth",
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
                    "id": "product-preauth.doclink.0001",
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
                  "href": "/guides"
                },
                "children": [
                  {
                    "type": "text",
                    "id": "product-preauth.doclink.0002",
                    "value": "Guides"
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
                "id": "product-preauth.div.0003",
                "value": "Products"
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
                "id": "product-preauth.div.0004",
                "value": "Pre-authorisation"
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
                "id": "product-preauth.h1.0005",
                "value": "Pre-authorisation"
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
                "id": "product-preauth.p.0006",
                "value": "Hold funds on a card now, take them later: authorise and capture as two separate moments, with a void option in between."
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
                "id": "product-preauth.overview.0007",
                "value": "What pre-authorisation is"
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
                "id": "product-preauth.p.0008",
                "value": "A normal card payment authorises and captures in one step: the issuer approves and the money is claimed immediately. A "
              },
              {
                "type": "element",
                "tag": "b",
                "props": {},
                "children": [
                  {
                    "type": "text",
                    "id": "product-preauth.b.0009",
                    "value": "pre-authorisation"
                  }
                ]
              },
              {
                "type": "text",
                "id": "product-preauth.p.0010",
                "value": " (also called auth only or manual capture) splits the two. The authorisation places a hold on the customer's funds without moving them; the "
              },
              {
                "type": "element",
                "tag": "b",
                "props": {},
                "children": [
                  {
                    "type": "text",
                    "id": "product-preauth.b.0011",
                    "value": "capture"
                  }
                ]
              },
              {
                "type": "text",
                "id": "product-preauth.p.0012",
                "value": ", whenever you trigger it, claims some or all of the held amount. If the order falls through, you "
              },
              {
                "type": "element",
                "tag": "b",
                "props": {},
                "children": [
                  {
                    "type": "text",
                    "id": "product-preauth.b.0013",
                    "value": "void"
                  }
                ]
              },
              {
                "type": "text",
                "id": "product-preauth.p.0014",
                "value": " the hold instead and the funds are released without anything ever leaving the customer's account."
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
                "id": "product-preauth.p.0015",
                "value": "The customer sees the hold as a pending charge on their statement. It disappears when you void it or it expires, or turns into the final charge when you capture. Because nothing settles until capture, a voided pre-auth costs neither side anything: no refund, no chargeback exposure, no fees on money that never moved."
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
              "id": "how-it-works"
            },
            "children": [
              {
                "type": "text",
                "id": "product-preauth.how-it-works.0016",
                "value": "How it works"
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
                "id": "product-preauth.p.0017",
                "value": "You create the purchase flagged for pre-authorisation, the customer pays exactly as they would for any card payment (3DS included), and the transaction parks in the "
              },
              {
                "type": "element",
                "tag": "code",
                "props": {},
                "children": [
                  {
                    "type": "text",
                    "id": "product-preauth.code.0018",
                    "value": "PREAUTHORIZED"
                  }
                ]
              },
              {
                "type": "text",
                "id": "product-preauth.p.0019",
                "value": " state. From there it takes one of three exits:"
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
                  "viewBox": "0 0 760 268",
                  "width": "100%",
                  "role": "img",
                  "aria-label": "Pre-authorisation flow: authorise, then capture, void or expire",
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
                          "id": "pa-arr",
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
                    "tag": "rect",
                    "props": {
                      "x": "15",
                      "y": "105",
                      "width": "135",
                      "height": "60",
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
                    "tag": "text",
                    "props": {
                      "x": "82",
                      "y": "130",
                      "textAnchor": "middle",
                      "fontSize": "12",
                      "fontWeight": "600",
                      "fill": "var(--ink)"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "product-preauth.text.0020",
                        "value": "1 · Create purchase"
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
                      "x": "82",
                      "y": "147",
                      "textAnchor": "middle",
                      "fontSize": "10.5",
                      "fill": "var(--muted)",
                      "fontFamily": "'JetBrains Mono',monospace"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "product-preauth.text.0021",
                        "value": "skip_capture: true"
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
                      "x1": "150",
                      "y1": "135",
                      "x2": "166",
                      "y2": "135",
                      "stroke": "var(--muted)",
                      "markerEnd": "url(#pa-arr)"
                    },
                    "children": []
                  },
                  {
                    "type": "text",
                    "value": "\n          "
                  },
                  {
                    "type": "element",
                    "tag": "rect",
                    "props": {
                      "x": "170",
                      "y": "105",
                      "width": "160",
                      "height": "60",
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
                    "tag": "text",
                    "props": {
                      "x": "250",
                      "y": "130",
                      "textAnchor": "middle",
                      "fontSize": "12",
                      "fontWeight": "600",
                      "fill": "var(--ink)"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "product-preauth.text.0022",
                        "value": "2 · Customer pays"
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
                      "x": "250",
                      "y": "147",
                      "textAnchor": "middle",
                      "fontSize": "10.5",
                      "fill": "var(--muted)"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "product-preauth.text.0023",
                        "value": "hosted or S2S, 3DS as usual"
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
                      "x1": "330",
                      "y1": "135",
                      "x2": "346",
                      "y2": "135",
                      "stroke": "var(--muted)",
                      "markerEnd": "url(#pa-arr)"
                    },
                    "children": []
                  },
                  {
                    "type": "text",
                    "value": "\n          "
                  },
                  {
                    "type": "element",
                    "tag": "rect",
                    "props": {
                      "x": "350",
                      "y": "105",
                      "width": "172",
                      "height": "60",
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
                    "tag": "text",
                    "props": {
                      "x": "436",
                      "y": "130",
                      "textAnchor": "middle",
                      "fontSize": "12",
                      "fontWeight": "600",
                      "fill": "#FFFFFF"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "product-preauth.text.0024",
                        "value": "3 · PREAUTHORIZED"
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
                      "x": "436",
                      "y": "147",
                      "textAnchor": "middle",
                      "fontSize": "10.5",
                      "fill": "#E9D5FF"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "product-preauth.text.0025",
                        "value": "funds held, not moved"
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
                      "x1": "522",
                      "y1": "120",
                      "x2": "604",
                      "y2": "55",
                      "stroke": "var(--muted)",
                      "markerEnd": "url(#pa-arr)"
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
                      "x1": "522",
                      "y1": "135",
                      "x2": "604",
                      "y2": "135",
                      "stroke": "var(--muted)",
                      "markerEnd": "url(#pa-arr)"
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
                      "x1": "522",
                      "y1": "150",
                      "x2": "604",
                      "y2": "215",
                      "stroke": "var(--muted)",
                      "markerEnd": "url(#pa-arr)"
                    },
                    "children": []
                  },
                  {
                    "type": "text",
                    "value": "\n          "
                  },
                  {
                    "type": "element",
                    "tag": "rect",
                    "props": {
                      "x": "608",
                      "y": "24",
                      "width": "140",
                      "height": "62",
                      "rx": "10",
                      "fill": "var(--green-50)",
                      "stroke": "var(--green)"
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
                      "x": "678",
                      "y": "44",
                      "textAnchor": "middle",
                      "fontSize": "12",
                      "fontWeight": "600",
                      "fill": "var(--ink)"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "product-preauth.text.0026",
                        "value": "Capture"
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
                      "x": "678",
                      "y": "59",
                      "textAnchor": "middle",
                      "fontSize": "9.5",
                      "fill": "var(--green)",
                      "fontFamily": "'JetBrains Mono',monospace"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "product-preauth.text.0027",
                        "value": "PAID / PARTIALLY_CAPTURED"
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
                      "x": "678",
                      "y": "74",
                      "textAnchor": "middle",
                      "fontSize": "10",
                      "fill": "var(--muted)"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "product-preauth.text.0028",
                        "value": "funds settle to you"
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
                      "x": "608",
                      "y": "104",
                      "width": "140",
                      "height": "62",
                      "rx": "10",
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
                      "x": "678",
                      "y": "124",
                      "textAnchor": "middle",
                      "fontSize": "12",
                      "fontWeight": "600",
                      "fill": "var(--ink)"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "product-preauth.text.0029",
                        "value": "Void"
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
                      "x": "678",
                      "y": "139",
                      "textAnchor": "middle",
                      "fontSize": "9.5",
                      "fill": "var(--muted)",
                      "fontFamily": "'JetBrains Mono',monospace"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "product-preauth.text.0030",
                        "value": "CANCELLED"
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
                      "x": "678",
                      "y": "154",
                      "textAnchor": "middle",
                      "fontSize": "10",
                      "fill": "var(--muted)"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "product-preauth.text.0031",
                        "value": "hold released, no cost"
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
                      "x": "608",
                      "y": "184",
                      "width": "140",
                      "height": "62",
                      "rx": "10",
                      "fill": "var(--amber-50)",
                      "stroke": "var(--amber)"
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
                      "x": "678",
                      "y": "204",
                      "textAnchor": "middle",
                      "fontSize": "12",
                      "fontWeight": "600",
                      "fill": "var(--ink)"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "product-preauth.text.0032",
                        "value": "No action"
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
                      "x": "678",
                      "y": "219",
                      "textAnchor": "middle",
                      "fontSize": "9.5",
                      "fill": "var(--amber)",
                      "fontFamily": "'JetBrains Mono',monospace"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "product-preauth.text.0033",
                        "value": "EXPIRED"
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
                      "x": "678",
                      "y": "234",
                      "textAnchor": "middle",
                      "fontSize": "10",
                      "fill": "var(--muted)"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "product-preauth.text.0034",
                        "value": "auto-released after window"
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
                      "x": "290",
                      "y": "215",
                      "textAnchor": "middle",
                      "fontSize": "10.5",
                      "fill": "var(--muted)"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "product-preauth.text.0035",
                        "value": "Once captured, the void path closes: returns from that point use"
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
                      "x": "290",
                      "y": "230",
                      "textAnchor": "middle",
                      "fontSize": "10.5",
                      "fill": "var(--muted)"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "product-preauth.text.0036",
                        "value": "refunds, exactly like any settled payment."
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
                    "id": "product-preauth.figcaption.0037",
                    "value": "Figure 1: The three exits from a pre-authorised payment"
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
                "id": "product-preauth.p.0038",
                "value": "Captures can be "
              },
              {
                "type": "element",
                "tag": "b",
                "props": {},
                "children": [
                  {
                    "type": "text",
                    "id": "product-preauth.b.0039",
                    "value": "full"
                  }
                ]
              },
              {
                "type": "text",
                "id": "product-preauth.p.0040",
                "value": " or "
              },
              {
                "type": "element",
                "tag": "b",
                "props": {},
                "children": [
                  {
                    "type": "text",
                    "id": "product-preauth.b.0041",
                    "value": "partial"
                  }
                ]
              },
              {
                "type": "text",
                "id": "product-preauth.p.0042",
                "value": ". On a partial capture you claim part of the hold and the remainder is released to the customer automatically; multiple partial captures on one authorisation are supported on request through support. You can never capture more than you authorised, so if the bill grows, create a fresh authorisation for the difference."
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
              "id": "use-cases"
            },
            "children": [
              {
                "type": "text",
                "id": "product-preauth.use-cases.0043",
                "value": "When to use it"
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
                                "id": "product-preauth.th.0044",
                                "value": "Use case"
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
                                "id": "product-preauth.th.0045",
                                "value": "How pre-auth helps"
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
                                    "id": "product-preauth.b.0046",
                                    "value": "E-commerce"
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
                                "id": "product-preauth.td.0047",
                                "value": "Authorise at checkout, capture when the order ships. Void without cost if stock runs out."
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
                                    "id": "product-preauth.b.0048",
                                    "value": "Hospitality"
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
                                "id": "product-preauth.td.0049",
                                "value": "Hold the estimated room charge at check-in, adjust and capture the real total at checkout."
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
                                    "id": "product-preauth.b.0050",
                                    "value": "Car rental"
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
                                "id": "product-preauth.td.0051",
                                "value": "Hold the estimated rental plus deposit, capture the final amount on return."
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
                                    "id": "product-preauth.b.0052",
                                    "value": "Subscriptions and trials"
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
                                "id": "product-preauth.td.0053",
                                "value": "Verify the card with a hold before a free trial, capture when billing actually begins."
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
                                    "id": "product-preauth.b.0054",
                                    "value": "Marketplaces"
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
                                "id": "product-preauth.td.0055",
                                "value": "Hold the buyer's funds at order time, capture only once the seller confirms dispatch."
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
            "value": "\n\n      "
          },
          {
            "type": "element",
            "tag": "h2",
            "props": {
              "id": "hold-window"
            },
            "children": [
              {
                "type": "text",
                "id": "product-preauth.hold-window.0056",
                "value": "How long a hold lasts"
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
                "id": "product-preauth.p.0057",
                "value": "The card schemes cap how long an authorisation stays valid. If you have not captured by the end of the window, the hold expires and the funds are released automatically; the authorisation cannot be revived, so a late charge needs a brand-new one."
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
                                "id": "product-preauth.th.0058",
                                "value": "Card scheme"
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
                                "id": "product-preauth.th.0059",
                                "value": "Standard hold period"
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
                                "id": "product-preauth.th.0060",
                                "value": "Extended hold (if available)"
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
                                "id": "product-preauth.td.0061",
                                "value": "Visa"
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
                                "id": "product-preauth.td.0062",
                                "value": "7 days"
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
                                "id": "product-preauth.td.0063",
                                "value": "Up to 30 days (select MCCs)"
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
                                "id": "product-preauth.td.0064",
                                "value": "Mastercard"
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
                                "id": "product-preauth.td.0065",
                                "value": "7 days"
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
                                "id": "product-preauth.td.0066",
                                "value": "Up to 30 days (select MCCs)"
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
                                "id": "product-preauth.td.0067",
                                "value": "American Express"
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
                                "id": "product-preauth.td.0068",
                                "value": "7 days"
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
                                "id": "product-preauth.td.0069",
                                "value": "Up to 30 days"
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
                                "id": "product-preauth.td.0070",
                                "value": "Discover"
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
                                "id": "product-preauth.td.0071",
                                "value": "10 days"
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
                                "id": "product-preauth.td.0072",
                                "value": "Not available"
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
                "id": "product-preauth.p.0073",
                "value": "Whether the extended window applies depends on your Merchant Category Code; confirm with your account manager. A voided hold typically disappears from the customer's statement within 1 to 3 business days, occasionally up to 7 depending on the issuer."
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
                "id": "product-preauth.statuses.0074",
                "value": "The journey in statuses"
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
                "id": "product-preauth.p.0075",
                "value": "The pre-auth lifecycle adds a handful of statuses to the normal purchase flow. The ones your order logic cares about:"
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
                                "id": "product-preauth.th.0076",
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
                                "id": "product-preauth.th.0077",
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
                                "id": "product-preauth.th.0078",
                                "value": "Your options"
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
                                    "id": "product-preauth.span.0079",
                                    "value": "PREAUTHORIZED"
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
                                "id": "product-preauth.td.0080",
                                "value": "Funds held successfully"
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
                                "id": "product-preauth.td.0081",
                                "value": "Capture or void"
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
                                    "id": "product-preauth.span.0082",
                                    "value": "PAID"
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
                                "id": "product-preauth.td.0083",
                                "value": "Full amount captured and settled"
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
                                "id": "product-preauth.td.0084",
                                "value": "Refund only"
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
                                    "id": "product-preauth.span.0085",
                                    "value": "PARTIALLY_CAPTURED"
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
                                "id": "product-preauth.td.0086",
                                "value": "Part captured, remainder released"
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
                                "id": "product-preauth.td.0087",
                                "value": "Refund only"
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
                                    "id": "product-preauth.span.0088",
                                    "value": "CANCELLED"
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
                                "id": "product-preauth.td.0089",
                                "value": "Voided before capture, hold released"
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
                                "id": "product-preauth.td.0090",
                                "value": "None, create a new authorisation"
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
                                    "id": "product-preauth.span.0091",
                                    "value": "EXPIRED"
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
                                "id": "product-preauth.td.0092",
                                "value": "Window lapsed without capture"
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
                                "id": "product-preauth.td.0093",
                                "value": "None, create a new authorisation"
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
                "id": "product-preauth.p.0094",
                "value": "Drive your order state from webhooks, not the browser redirect. The full lifecycle with in-process states is in the "
              },
              {
                "type": "element",
                "tag": "DocLink",
                "props": {
                  "className": "inline",
                  "href": "/api-preauth#status-lifecycle"
                },
                "children": [
                  {
                    "type": "text",
                    "id": "product-preauth.doclink.0095",
                    "value": "Pre-Authorization API reference"
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
              "id": "good-practice"
            },
            "children": [
              {
                "type": "text",
                "id": "product-preauth.good-practice.0096",
                "value": "Good practice"
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
                        "id": "product-preauth.b.0097",
                        "value": "Capture early."
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "product-preauth.li.0098",
                    "value": " Capture as soon as goods ship or the service is delivered. The longer a hold sits, the higher the risk of expiry, disputes and declined captures."
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
                        "id": "product-preauth.b.0099",
                        "value": "Decide within the window."
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "product-preauth.li.0100",
                    "value": " Build the capture-or-void decision into your fulfilment flow so holds never lapse by accident; an expired hold means asking the customer to pay again."
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
                        "id": "product-preauth.b.0101",
                        "value": "Tell the customer."
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "product-preauth.li.0102",
                    "value": " Say clearly at checkout that the charge is a hold and when the final amount will be taken; pending charges surprise people and drive support tickets."
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
                        "id": "product-preauth.b.0103",
                        "value": "3DS still applies."
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "product-preauth.li.0104",
                    "value": " Authenticated pre-auths carry the same "
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
                        "id": "product-preauth.doclink.0105",
                        "value": "liability shift"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "product-preauth.li.0106",
                    "value": " as any card payment; the authentication happens at authorise time, not capture time."
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
                        "id": "product-preauth.b.0107",
                        "value": "After capture, think refunds."
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "product-preauth.li.0108",
                    "value": " Void only exists before capture. Post-capture returns use the normal "
                  },
                  {
                    "type": "element",
                    "tag": "DocLink",
                    "props": {
                      "className": "inline",
                      "href": "/api-partial-refunds"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "product-preauth.doclink.0109",
                        "value": "full and partial refund"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "product-preauth.li.0110",
                    "value": " flow."
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
                "id": "product-preauth.apis.0111",
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
                  "href": "/api-preauth"
                },
                "children": [
                  {
                    "type": "element",
                    "tag": "h4",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "product-preauth.h4.0112",
                        "value": "Pre-Authorization API →"
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
                        "id": "product-preauth.p.0113",
                        "value": "Authorise with "
                      },
                      {
                        "type": "element",
                        "tag": "code",
                        "props": {},
                        "children": [
                          {
                            "type": "text",
                            "id": "product-preauth.code.0114",
                            "value": "skip_capture"
                          }
                        ]
                      },
                      {
                        "type": "text",
                        "id": "product-preauth.p.0115",
                        "value": ", capture (full or partial), void, and the full status lifecycle."
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
                  "href": "/api-partial-refunds"
                },
                "children": [
                  {
                    "type": "element",
                    "tag": "h4",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "product-preauth.h4.0116",
                        "value": "Partial refunds →"
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
                        "id": "product-preauth.p.0117",
                        "value": "Post-capture returns, multiple refunds up to the captured total."
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
                      "href": "/product-recurring"
                    },
                    "children": [
                      {
                        "type": "element",
                        "tag": "small",
                        "props": {},
                        "children": [
                          {
                            "type": "text",
                            "id": "product-preauth.small.0118",
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
                            "id": "product-preauth.b.0119",
                            "value": "← Recurring payments"
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
                      "href": "/product-reporting"
                    },
                    "children": [
                      {
                        "type": "element",
                        "tag": "small",
                        "props": {},
                        "children": [
                          {
                            "type": "text",
                            "id": "product-preauth.small.0120",
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
                            "id": "product-preauth.b.0121",
                            "value": "Reporting →"
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
