import { defineDocument } from '../schema.js';

export const paymentMethodsTreeDocument = defineDocument({
  "schemaVersion": 1,
  "slug": "payment-methods",
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
                    "id": "payment-methods.doclink.0001",
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
                    "id": "payment-methods.doclink.0002",
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
                "id": "payment-methods.div.0003",
                "value": "Payment methods"
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
                "id": "payment-methods.h1.0004",
                "value": "Payment methods"
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
                "id": "payment-methods.p.0005",
                "value": "Every method Paysecure supports, how each one flows, and what changes in your "
              },
              {
                "type": "element",
                "tag": "code",
                "props": {},
                "children": [
                  {
                    "type": "text",
                    "id": "payment-methods.code.0006",
                    "value": "POST /purchases/"
                  }
                ]
              },
              {
                "type": "text",
                "id": "payment-methods.p.0007",
                "value": " request and response. Full request/response detail lives in the "
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
                    "id": "payment-methods.doclink.0008",
                    "value": "API Reference"
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
              "className": "callout info"
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
                        "tag": "rect",
                        "props": {
                          "x": "3",
                          "y": "3",
                          "width": "7",
                          "height": "7",
                          "rx": "1"
                        },
                        "children": []
                      },
                      {
                        "type": "element",
                        "tag": "rect",
                        "props": {
                          "x": "14",
                          "y": "3",
                          "width": "7",
                          "height": "7",
                          "rx": "1"
                        },
                        "children": []
                      },
                      {
                        "type": "element",
                        "tag": "rect",
                        "props": {
                          "x": "14",
                          "y": "14",
                          "width": "7",
                          "height": "7",
                          "rx": "1"
                        },
                        "children": []
                      },
                      {
                        "type": "element",
                        "tag": "rect",
                        "props": {
                          "x": "3",
                          "y": "14",
                          "width": "7",
                          "height": "7",
                          "rx": "1"
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
                        "id": "payment-methods.b.0009",
                        "value": "One integration pattern:"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "payment-methods.p.0010",
                    "value": " all methods share the purchase envelope. You change the "
                  },
                  {
                    "type": "element",
                    "tag": "code",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "payment-methods.code.0011",
                        "value": "paymentMethod"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "payment-methods.p.0012",
                    "value": " code, match the currency, and sometimes add "
                  },
                  {
                    "type": "element",
                    "tag": "code",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "payment-methods.code.0013",
                        "value": "extraParam"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "payment-methods.p.0014",
                    "value": " fields; the rest is identical."
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
              "id": "matrix"
            },
            "children": [
              {
                "type": "text",
                "id": "payment-methods.matrix.0015",
                "value": "Capability matrix"
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
                                "id": "payment-methods.th.0016",
                                "value": "Method family"
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
                                "id": "payment-methods.th.0017",
                                "value": "Regions"
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
                                "id": "payment-methods.th.0018",
                                "value": "Refunds"
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
                                "id": "payment-methods.th.0019",
                                "value": "Recurring"
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
                                "id": "payment-methods.th.0020",
                                "value": "Payouts"
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
                                    "id": "payment-methods.b.0021",
                                    "value": "Cards"
                                  }
                                ]
                              },
                              {
                                "type": "text",
                                "id": "payment-methods.td.0022",
                                "value": " (Visa · MC)"
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
                                "id": "payment-methods.td.0023",
                                "value": "Global"
                              }
                            ]
                          },
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
                                    "id": "payment-methods.span.0024",
                                    "value": "Yes + partial"
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
                                "type": "element",
                                "tag": "span",
                                "props": {
                                  "className": "pill green"
                                },
                                "children": [
                                  {
                                    "type": "text",
                                    "id": "payment-methods.span.0025",
                                    "value": "CIT / MIT"
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
                                "id": "payment-methods.td.0026",
                                "value": "Via Virtual Cards"
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
                                    "id": "payment-methods.b.0027",
                                    "value": "Apple Pay / Google Pay"
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
                                "id": "payment-methods.td.0028",
                                "value": "60–70+ markets"
                              }
                            ]
                          },
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
                                    "id": "payment-methods.span.0029",
                                    "value": "Yes"
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
                                "type": "element",
                                "tag": "span",
                                "props": {
                                  "className": "pill green"
                                },
                                "children": [
                                  {
                                    "type": "text",
                                    "id": "payment-methods.span.0030",
                                    "value": "Via token"
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
                                "value": "–"
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
                                    "id": "payment-methods.b.0031",
                                    "value": "Interac"
                                  }
                                ]
                              },
                              {
                                "type": "text",
                                "id": "payment-methods.td.0032",
                                "value": " (3 variants)"
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
                                "id": "payment-methods.td.0033",
                                "value": "Canada"
                              }
                            ]
                          },
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
                                    "id": "payment-methods.span.0034",
                                    "value": "PayOut-based"
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
                                "type": "element",
                                "tag": "span",
                                "props": {
                                  "className": "pill gray"
                                },
                                "children": [
                                  {
                                    "type": "text",
                                    "id": "payment-methods.span.0035",
                                    "value": "No"
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
                                "type": "element",
                                "tag": "span",
                                "props": {
                                  "className": "pill green"
                                },
                                "children": [
                                  {
                                    "type": "text",
                                    "id": "payment-methods.span.0036",
                                    "value": "Yes"
                                  }
                                ]
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
                                    "id": "payment-methods.b.0037",
                                    "value": "Bank transfers / Open Banking"
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
                                "id": "payment-methods.td.0038",
                                "value": "EUR · UK · multi"
                              }
                            ]
                          },
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
                                    "id": "payment-methods.span.0039",
                                    "value": "Method-dependent"
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
                                "type": "element",
                                "tag": "span",
                                "props": {
                                  "className": "pill gray"
                                },
                                "children": [
                                  {
                                    "type": "text",
                                    "id": "payment-methods.span.0040",
                                    "value": "No"
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
                                "type": "element",
                                "tag": "span",
                                "props": {
                                  "className": "pill green"
                                },
                                "children": [
                                  {
                                    "type": "text",
                                    "id": "payment-methods.span.0041",
                                    "value": "Yes"
                                  }
                                ]
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
                                    "id": "payment-methods.b.0042",
                                    "value": "Local APMs"
                                  }
                                ]
                              },
                              {
                                "type": "text",
                                "id": "payment-methods.td.0043",
                                "value": " (PIX, UPI, SPEI…)"
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
                                "id": "payment-methods.td.0044",
                                "value": "BR · IN · MX · EG · Africa · AU · KR"
                              }
                            ]
                          },
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
                                    "id": "payment-methods.span.0045",
                                    "value": "Method-dependent"
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
                                "type": "element",
                                "tag": "span",
                                "props": {
                                  "className": "pill gray"
                                },
                                "children": [
                                  {
                                    "type": "text",
                                    "id": "payment-methods.span.0046",
                                    "value": "No"
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
                                "id": "payment-methods.td.0047",
                                "value": "Most"
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
                                    "id": "payment-methods.b.0048",
                                    "value": "Crypto"
                                  }
                                ]
                              },
                              {
                                "type": "text",
                                "id": "payment-methods.td.0049",
                                "value": " (Paymint · CryptoBridge · On Ramp)"
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
                                "id": "payment-methods.td.0050",
                                "value": "Global"
                              }
                            ]
                          },
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
                                    "id": "payment-methods.span.0051",
                                    "value": "Manual"
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
                                "type": "element",
                                "tag": "span",
                                "props": {
                                  "className": "pill gray"
                                },
                                "children": [
                                  {
                                    "type": "text",
                                    "id": "payment-methods.span.0052",
                                    "value": "No"
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
                                "value": "–"
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
              "id": "cards"
            },
            "children": [
              {
                "type": "text",
                "id": "payment-methods.cards.0053",
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
                        "id": "payment-methods.b.0054",
                        "value": "Create purchase"
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
                        "id": "payment-methods.span.0055",
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
                        "id": "payment-methods.b.0056",
                        "value": "Execute S2S"
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
                        "id": "payment-methods.span.0057",
                        "value": "card details"
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
                        "id": "payment-methods.b.0058",
                        "value": "3DS2"
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
                        "id": "payment-methods.span.0059",
                        "value": "callback_url"
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
                        "id": "payment-methods.b.0060",
                        "value": "paid / error"
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
                        "id": "payment-methods.span.0061",
                        "value": "webhook"
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
                "type": "element",
                "tag": "b",
                "props": {},
                "children": [
                  {
                    "type": "text",
                    "id": "payment-methods.b.0062",
                    "value": "Extra parameters:"
                  }
                ]
              },
              {
                "type": "text",
                "id": "payment-methods.p.0063",
                "value": " none on the purchase; the S2S call adds card fields ("
              },
              {
                "type": "element",
                "tag": "code",
                "props": {},
                "children": [
                  {
                    "type": "text",
                    "id": "payment-methods.code.0064",
                    "value": "card_number"
                  }
                ]
              },
              {
                "type": "text",
                "value": ", "
              },
              {
                "type": "element",
                "tag": "code",
                "props": {},
                "children": [
                  {
                    "type": "text",
                    "id": "payment-methods.code.0065",
                    "value": "expires"
                  }
                ]
              },
              {
                "type": "text",
                "value": ", "
              },
              {
                "type": "element",
                "tag": "code",
                "props": {},
                "children": [
                  {
                    "type": "text",
                    "id": "payment-methods.code.0066",
                    "value": "cvc"
                  }
                ]
              },
              {
                "type": "text",
                "value": ", "
              },
              {
                "type": "element",
                "tag": "code",
                "props": {},
                "children": [
                  {
                    "type": "text",
                    "id": "payment-methods.code.0067",
                    "value": "cardholder_name"
                  }
                ]
              },
              {
                "type": "text",
                "id": "payment-methods.p.0068",
                "value": ") plus device data ("
              },
              {
                "type": "element",
                "tag": "code",
                "props": {},
                "children": [
                  {
                    "type": "text",
                    "id": "payment-methods.code.0069",
                    "value": "remote_ip"
                  }
                ]
              },
              {
                "type": "text",
                "value": ", "
              },
              {
                "type": "element",
                "tag": "code",
                "props": {},
                "children": [
                  {
                    "type": "text",
                    "id": "payment-methods.code.0070",
                    "value": "user_agent"
                  }
                ]
              },
              {
                "type": "text",
                "id": "payment-methods.p.0071",
                "value": ", screen and locale signals) that feeds 3DS2 risk scoring."
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
                "type": "element",
                "tag": "b",
                "props": {},
                "children": [
                  {
                    "type": "text",
                    "id": "payment-methods.b.0072",
                    "value": "Response change:"
                  }
                ]
              },
              {
                "type": "text",
                "id": "payment-methods.p.0073",
                "value": " S2S returns "
              },
              {
                "type": "element",
                "tag": "code",
                "props": {},
                "children": [
                  {
                    "type": "text",
                    "id": "payment-methods.code.0074",
                    "value": "status: \"pending\""
                  }
                ]
              },
              {
                "type": "text",
                "id": "payment-methods.p.0075",
                "value": " with a "
              },
              {
                "type": "element",
                "tag": "code",
                "props": {},
                "children": [
                  {
                    "type": "text",
                    "id": "payment-methods.code.0076",
                    "value": "callback_url"
                  }
                ]
              },
              {
                "type": "text",
                "id": "payment-methods.p.0077",
                "value": ": redirect the customer there for authentication, then confirm the final status."
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
                "id": "payment-methods.p.0078",
                "value": "Deep-dive: "
              },
              {
                "type": "element",
                "tag": "DocLink",
                "props": {
                  "className": "inline",
                  "href": "/cards"
                },
                "children": [
                  {
                    "type": "text",
                    "id": "payment-methods.doclink.0079",
                    "value": "Cards guide"
                  }
                ]
              },
              {
                "type": "text",
                "value": " · "
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
                    "id": "payment-methods.doclink.0080",
                    "value": "2D payments"
                  }
                ]
              },
              {
                "type": "text",
                "value": " · "
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
                    "id": "payment-methods.doclink.0081",
                    "value": "3D Secure"
                  }
                ]
              },
              {
                "type": "text",
                "id": "payment-methods.p.0082",
                "value": " · API: "
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
                    "id": "payment-methods.doclink.0083",
                    "value": "Cards S2S reference"
                  }
                ]
              },
              {
                "type": "text",
                "id": "payment-methods.p.0084",
                "value": " · Test: "
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
                    "id": "payment-methods.doclink.0085",
                    "value": "test cards"
                  }
                ]
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
              "id": "wallets"
            },
            "children": [
              {
                "type": "text",
                "id": "payment-methods.wallets.0086",
                "value": "Apple Pay & Google Pay"
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
                        "id": "payment-methods.b.0087",
                        "value": "Wallet button"
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
                        "id": "payment-methods.span.0088",
                        "value": "your page or hosted"
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
                        "id": "payment-methods.b.0089",
                        "value": "Encrypted token"
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
                        "id": "payment-methods.span.0090",
                        "value": "DPAN payload"
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
                        "id": "payment-methods.b.0091",
                        "value": "Create purchase"
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
                        "id": "payment-methods.span.0092",
                        "value": "+ extraParam"
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
                        "id": "payment-methods.b.0093",
                        "value": "paid"
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
                        "id": "payment-methods.span.0094",
                        "value": "webhook"
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
                "id": "payment-methods.p.0095",
                "value": "Each wallet works three ways: on the "
              },
              {
                "type": "element",
                "tag": "b",
                "props": {},
                "children": [
                  {
                    "type": "text",
                    "id": "payment-methods.b.0096",
                    "value": "Paysecure cashier"
                  }
                ]
              },
              {
                "type": "text",
                "id": "payment-methods.p.0097",
                "value": " (button on the hosted cashier, zero client work), via "
              },
              {
                "type": "element",
                "tag": "b",
                "props": {},
                "children": [
                  {
                    "type": "text",
                    "id": "payment-methods.b.0098",
                    "value": "Redirect"
                  }
                ]
              },
              {
                "type": "text",
                "id": "payment-methods.p.0099",
                "value": " (the customer is redirected to the PSP's cashier, which loads the wallet button), or "
              },
              {
                "type": "element",
                "tag": "b",
                "props": {},
                "children": [
                  {
                    "type": "text",
                    "id": "payment-methods.b.0100",
                    "value": "Seamless"
                  }
                ]
              },
              {
                "type": "text",
                "id": "payment-methods.p.0101",
                "value": " (your button, your UX, token passed server-to-server)."
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
                "type": "element",
                "tag": "b",
                "props": {},
                "children": [
                  {
                    "type": "text",
                    "id": "payment-methods.b.0102",
                    "value": "Extra parameters (Seamless):"
                  }
                ]
              },
              {
                "type": "text",
                "id": "payment-methods.p.0103",
                "value": " the wallet SDK's encrypted payload goes in "
              },
              {
                "type": "element",
                "tag": "code",
                "props": {},
                "children": [
                  {
                    "type": "text",
                    "id": "payment-methods.code.0104",
                    "value": "extraParam.googlepay_param"
                  }
                ]
              },
              {
                "type": "text",
                "value": " / "
              },
              {
                "type": "element",
                "tag": "code",
                "props": {},
                "children": [
                  {
                    "type": "text",
                    "id": "payment-methods.code.0105",
                    "value": "extraParam.applepay_param"
                  }
                ]
              },
              {
                "type": "text",
                "id": "payment-methods.p.0106",
                "value": ", with "
              },
              {
                "type": "element",
                "tag": "code",
                "props": {},
                "children": [
                  {
                    "type": "text",
                    "id": "payment-methods.code.0107",
                    "value": "paymentMethod"
                  }
                ]
              },
              {
                "type": "text",
                "id": "payment-methods.p.0108",
                "value": " set to "
              },
              {
                "type": "element",
                "tag": "code",
                "props": {},
                "children": [
                  {
                    "type": "text",
                    "id": "payment-methods.code.0109",
                    "value": "GOOGLEPAY"
                  }
                ]
              },
              {
                "type": "text",
                "value": " / "
              },
              {
                "type": "element",
                "tag": "code",
                "props": {},
                "children": [
                  {
                    "type": "text",
                    "id": "payment-methods.code.0110",
                    "value": "APPLEPAY"
                  }
                ]
              },
              {
                "type": "text",
                "id": "payment-methods.p.0111",
                "value": ". Apple Pay additionally needs merchant validation (two-way TLS with Apple) before the sheet opens."
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
                "type": "element",
                "tag": "b",
                "props": {},
                "children": [
                  {
                    "type": "text",
                    "id": "payment-methods.b.0112",
                    "value": "Response change:"
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
                    "id": "payment-methods.code.0113",
                    "value": "payment.method"
                  }
                ]
              },
              {
                "type": "text",
                "id": "payment-methods.p.0114",
                "value": " reports the wallet; the token is a "
              },
              {
                "type": "element",
                "tag": "code",
                "props": {},
                "children": [
                  {
                    "type": "text",
                    "id": "payment-methods.code.0115",
                    "value": "DPAN"
                  }
                ]
              },
              {
                "type": "text",
                "id": "payment-methods.p.0116",
                "value": ": never assert on PAN-style values."
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
                "id": "payment-methods.p.0117",
                "value": "Guides: "
              },
              {
                "type": "element",
                "tag": "DocLink",
                "props": {
                  "className": "inline",
                  "href": "/googlepay"
                },
                "children": [
                  {
                    "type": "text",
                    "id": "payment-methods.doclink.0118",
                    "value": "Google Pay"
                  }
                ]
              },
              {
                "type": "text",
                "value": " / "
              },
              {
                "type": "element",
                "tag": "DocLink",
                "props": {
                  "className": "inline",
                  "href": "/applepay"
                },
                "children": [
                  {
                    "type": "text",
                    "id": "payment-methods.doclink.0119",
                    "value": "Apple Pay"
                  }
                ]
              },
              {
                "type": "text",
                "id": "payment-methods.p.0120",
                "value": " · API: "
              },
              {
                "type": "element",
                "tag": "DocLink",
                "props": {
                  "className": "inline",
                  "href": "/api-googlepay"
                },
                "children": [
                  {
                    "type": "text",
                    "id": "payment-methods.doclink.0121",
                    "value": "Google Pay"
                  }
                ]
              },
              {
                "type": "text",
                "value": " / "
              },
              {
                "type": "element",
                "tag": "DocLink",
                "props": {
                  "className": "inline",
                  "href": "/api-applepay"
                },
                "children": [
                  {
                    "type": "text",
                    "id": "payment-methods.doclink.0122",
                    "value": "Apple Pay"
                  }
                ]
              },
              {
                "type": "text",
                "id": "payment-methods.p.0123",
                "value": " · Note: wallets are validated in "
              },
              {
                "type": "element",
                "tag": "DocLink",
                "props": {
                  "className": "inline",
                  "href": "/test-apm-simulator"
                },
                "children": [
                  {
                    "type": "text",
                    "id": "payment-methods.doclink.0124",
                    "value": "live, not sandbox"
                  }
                ]
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
              "id": "interac"
            },
            "children": [
              {
                "type": "text",
                "id": "payment-methods.interac.0125",
                "value": "Interac & bank APMs"
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
                        "id": "payment-methods.b.0126",
                        "value": "Create purchase"
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
                        "id": "payment-methods.span.0127",
                        "value": "paymentMethod pinned"
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
                        "id": "payment-methods.b.0128",
                        "value": "Bank / provider flow"
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
                        "id": "payment-methods.span.0129",
                        "value": "checkout_url"
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
                        "id": "payment-methods.b.0130",
                        "value": "payment_in_process"
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
                        "id": "payment-methods.span.0131",
                        "value": "minutes, not seconds"
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
                        "id": "payment-methods.b.0132",
                        "value": "paid / expired"
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
                        "id": "payment-methods.span.0133",
                        "value": "webhook"
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
                "id": "payment-methods.p.0134",
                "value": "Interac comes in three variants, e-Transfer, Request Money, Interac Express, all CAD-only with PayIn, PayOut, and balance APIs. Open Banking covers EUR and UK bank redirects."
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
                "type": "element",
                "tag": "b",
                "props": {},
                "children": [
                  {
                    "type": "text",
                    "id": "payment-methods.b.0135",
                    "value": "Extra parameters:"
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
                    "id": "payment-methods.code.0136",
                    "value": "paymentMethod: \"INTERAC-ETRANSFER\""
                  }
                ]
              },
              {
                "type": "text",
                "id": "payment-methods.p.0137",
                "value": " (or variant code), currency must be "
              },
              {
                "type": "element",
                "tag": "code",
                "props": {},
                "children": [
                  {
                    "type": "text",
                    "id": "payment-methods.code.0138",
                    "value": "CAD"
                  }
                ]
              },
              {
                "type": "text",
                "id": "payment-methods.p.0139",
                "value": "; open banking uses "
              },
              {
                "type": "element",
                "tag": "code",
                "props": {},
                "children": [
                  {
                    "type": "text",
                    "id": "payment-methods.code.0140",
                    "value": "OPEN-BANKING"
                  }
                ]
              },
              {
                "type": "text",
                "id": "payment-methods.p.0141",
                "value": " with local currency."
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
                "type": "element",
                "tag": "b",
                "props": {},
                "children": [
                  {
                    "type": "text",
                    "id": "payment-methods.b.0142",
                    "value": "Response change:"
                  }
                ]
              },
              {
                "type": "text",
                "id": "payment-methods.p.0143",
                "value": " completion is asynchronous, expect "
              },
              {
                "type": "element",
                "tag": "code",
                "props": {},
                "children": [
                  {
                    "type": "text",
                    "id": "payment-methods.code.0144",
                    "value": "payment_in_process"
                  }
                ]
              },
              {
                "type": "text",
                "id": "payment-methods.p.0145",
                "value": " after the redirect and treat the webhook as truth. Abandoned flows end as "
              },
              {
                "type": "element",
                "tag": "code",
                "props": {},
                "children": [
                  {
                    "type": "text",
                    "id": "payment-methods.code.0146",
                    "value": "expired"
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
            "props": {
              "className": "sec-note"
            },
            "children": [
              {
                "type": "text",
                "id": "payment-methods.p.0147",
                "value": "Guide: "
              },
              {
                "type": "element",
                "tag": "DocLink",
                "props": {
                  "className": "inline",
                  "href": "/interac-etransfer"
                },
                "children": [
                  {
                    "type": "text",
                    "id": "payment-methods.doclink.0148",
                    "value": "Interac e-Transfer"
                  }
                ]
              },
              {
                "type": "text",
                "id": "payment-methods.p.0149",
                "value": " · API: "
              },
              {
                "type": "element",
                "tag": "DocLink",
                "props": {
                  "className": "inline",
                  "href": "/api-interac-etransfer"
                },
                "children": [
                  {
                    "type": "text",
                    "id": "payment-methods.doclink.0150",
                    "value": "Interac e-Transfer"
                  }
                ]
              },
              {
                "type": "text",
                "value": ", "
              },
              {
                "type": "element",
                "tag": "DocLink",
                "props": {
                  "className": "inline",
                  "href": "/api-apms"
                },
                "children": [
                  {
                    "type": "text",
                    "id": "payment-methods.doclink.0151",
                    "value": "Bank & local APMs"
                  }
                ]
              },
              {
                "type": "text",
                "id": "payment-methods.p.0152",
                "value": " · Note: APMs are validated in "
              },
              {
                "type": "element",
                "tag": "DocLink",
                "props": {
                  "className": "inline",
                  "href": "/test-apm-simulator"
                },
                "children": [
                  {
                    "type": "text",
                    "id": "payment-methods.doclink.0153",
                    "value": "live, not sandbox"
                  }
                ]
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
              "id": "local"
            },
            "children": [
              {
                "type": "text",
                "id": "payment-methods.local.0154",
                "value": "Local APMs: PIX, UPI, SPEI & more"
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
                "id": "payment-methods.p.0155",
                "value": "Push and QR/intent rails where the response carries payment instructions rather than a card form: PIX returns a QR ("
              },
              {
                "type": "element",
                "tag": "code",
                "props": {},
                "children": [
                  {
                    "type": "text",
                    "id": "payment-methods.code.0156",
                    "value": "pix_payload"
                  }
                ]
              },
              {
                "type": "text",
                "id": "payment-methods.p.0157",
                "value": "), SPEI a CLABE account, Virtual Accounts (South Korea) a bank account number, UPI ("
              },
              {
                "type": "element",
                "tag": "code",
                "props": {},
                "children": [
                  {
                    "type": "text",
                    "id": "payment-methods.code.0158",
                    "value": "UPI-QR"
                  }
                ]
              },
              {
                "type": "text",
                "value": "/"
              },
              {
                "type": "element",
                "tag": "code",
                "props": {},
                "children": [
                  {
                    "type": "text",
                    "id": "payment-methods.code.0159",
                    "value": "UPI-INTENT"
                  }
                ]
              },
              {
                "type": "text",
                "id": "payment-methods.p.0160",
                "value": ") is paid via a UPI app or QR scan, no payer VPA collected."
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
                "type": "element",
                "tag": "b",
                "props": {},
                "children": [
                  {
                    "type": "text",
                    "id": "payment-methods.b.0161",
                    "value": "Method codes:"
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
                    "id": "payment-methods.code.0162",
                    "value": "PIX"
                  }
                ]
              },
              {
                "type": "text",
                "value": ", "
              },
              {
                "type": "element",
                "tag": "code",
                "props": {},
                "children": [
                  {
                    "type": "text",
                    "id": "payment-methods.code.0163",
                    "value": "UPI-QR"
                  }
                ]
              },
              {
                "type": "text",
                "value": ", "
              },
              {
                "type": "element",
                "tag": "code",
                "props": {},
                "children": [
                  {
                    "type": "text",
                    "id": "payment-methods.code.0164",
                    "value": "UPI-INTENT"
                  }
                ]
              },
              {
                "type": "text",
                "value": ", "
              },
              {
                "type": "element",
                "tag": "code",
                "props": {},
                "children": [
                  {
                    "type": "text",
                    "id": "payment-methods.code.0165",
                    "value": "SPEI"
                  }
                ]
              },
              {
                "type": "text",
                "value": ", "
              },
              {
                "type": "element",
                "tag": "code",
                "props": {},
                "children": [
                  {
                    "type": "text",
                    "id": "payment-methods.code.0166",
                    "value": "FAWRYPAY"
                  }
                ]
              },
              {
                "type": "text",
                "value": ", "
              },
              {
                "type": "element",
                "tag": "code",
                "props": {},
                "children": [
                  {
                    "type": "text",
                    "id": "payment-methods.code.0167",
                    "value": "VIRTUAL-ACCOUNT"
                  }
                ]
              },
              {
                "type": "text",
                "id": "payment-methods.p.0168",
                "value": ". PIX also needs the client's "
              },
              {
                "type": "element",
                "tag": "code",
                "props": {},
                "children": [
                  {
                    "type": "text",
                    "id": "payment-methods.code.0169",
                    "value": "tax_number"
                  }
                ]
              },
              {
                "type": "text",
                "id": "payment-methods.p.0170",
                "value": " (CPF/CNPJ)."
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
                "type": "element",
                "tag": "b",
                "props": {},
                "children": [
                  {
                    "type": "text",
                    "id": "payment-methods.b.0171",
                    "value": "Response change:"
                  }
                ]
              },
              {
                "type": "text",
                "id": "payment-methods.p.0172",
                "value": " for PIX, instructions arrive in the "
              },
              {
                "type": "element",
                "tag": "code",
                "props": {},
                "children": [
                  {
                    "type": "text",
                    "id": "payment-methods.code.0173",
                    "value": "pix_payload"
                  }
                ]
              },
              {
                "type": "text",
                "id": "payment-methods.p.0174",
                "value": " object ("
              },
              {
                "type": "element",
                "tag": "code",
                "props": {},
                "children": [
                  {
                    "type": "text",
                    "id": "payment-methods.code.0175",
                    "value": "qr_code"
                  }
                ]
              },
              {
                "type": "text",
                "id": "payment-methods.p.0176",
                "value": " Base64 image, "
              },
              {
                "type": "element",
                "tag": "code",
                "props": {},
                "children": [
                  {
                    "type": "text",
                    "id": "payment-methods.code.0177",
                    "value": "payload"
                  }
                ]
              },
              {
                "type": "text",
                "id": "payment-methods.p.0178",
                "value": " string, "
              },
              {
                "type": "element",
                "tag": "code",
                "props": {},
                "children": [
                  {
                    "type": "text",
                    "id": "payment-methods.code.0179",
                    "value": "expiration_date"
                  }
                ]
              },
              {
                "type": "text",
                "id": "payment-methods.p.0180",
                "value": "), render them and wait for the webhook."
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
                "id": "payment-methods.p.0181",
                "value": "API: "
              },
              {
                "type": "element",
                "tag": "DocLink",
                "props": {
                  "className": "inline",
                  "href": "/api-apms"
                },
                "children": [
                  {
                    "type": "text",
                    "id": "payment-methods.doclink.0182",
                    "value": "Bank & local APMs reference"
                  }
                ]
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
              "id": "crypto"
            },
            "children": [
              {
                "type": "text",
                "id": "payment-methods.crypto.0183",
                "value": "Crypto"
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
                        "id": "payment-methods.b.0184",
                        "value": "Create purchase"
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
                        "id": "payment-methods.span.0185",
                        "value": "CRYPTO-BRIDGE"
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
                        "id": "payment-methods.b.0186",
                        "value": "Pick token + network"
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
                        "id": "payment-methods.span.0187",
                        "value": "on hosted checkout"
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
                        "id": "payment-methods.b.0188",
                        "value": "On-chain confirm"
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
                        "id": "payment-methods.span.0189",
                        "value": "network-dependent"
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
                        "id": "payment-methods.b.0190",
                        "value": "paid"
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
                        "id": "payment-methods.span.0191",
                        "value": "fiat-priced settlement"
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
                "id": "payment-methods.p.0192",
                "value": "Three rails: Paymint (fiat-in, crypto wallet settlement), CryptoBridge (multi-asset, fiat-priced), On Ramp (fiat-to-crypto for customers without coins). "
              },
              {
                "type": "element",
                "tag": "b",
                "props": {},
                "children": [
                  {
                    "type": "text",
                    "id": "payment-methods.b.0193",
                    "value": "CryptoBridge is pay-in only"
                  }
                ]
              },
              {
                "type": "text",
                "id": "payment-methods.p.0194",
                "value": ": a hosted pop-up handles wallet/exchange linking and on-chain detail; no refunds or payouts on this rail."
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
                "type": "element",
                "tag": "b",
                "props": {},
                "children": [
                  {
                    "type": "text",
                    "id": "payment-methods.b.0195",
                    "value": "Method code:"
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
                    "id": "payment-methods.code.0196",
                    "value": "CRYPTO-BRIDGE"
                  }
                ]
              },
              {
                "type": "text",
                "id": "payment-methods.p.0197",
                "value": " (verified); Paymint and On Ramp are hosted flows, confirm their codes with your account manager."
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
                "type": "element",
                "tag": "b",
                "props": {},
                "children": [
                  {
                    "type": "text",
                    "id": "payment-methods.b.0198",
                    "value": "Extra parameters:"
                  }
                ]
              },
              {
                "type": "text",
                "id": "payment-methods.p.0199",
                "value": " CryptoBridge takes "
              },
              {
                "type": "element",
                "tag": "code",
                "props": {},
                "children": [
                  {
                    "type": "text",
                    "id": "payment-methods.code.0200",
                    "value": "extraParam.toAddress[]"
                  }
                ]
              },
              {
                "type": "text",
                "id": "payment-methods.p.0201",
                "value": " (each with "
              },
              {
                "type": "element",
                "tag": "code",
                "props": {},
                "children": [
                  {
                    "type": "text",
                    "id": "payment-methods.code.0202",
                    "value": "symbol"
                  }
                ]
              },
              {
                "type": "text",
                "value": ", "
              },
              {
                "type": "element",
                "tag": "code",
                "props": {},
                "children": [
                  {
                    "type": "text",
                    "id": "payment-methods.code.0203",
                    "value": "networkName"
                  }
                ]
              },
              {
                "type": "text",
                "value": ", "
              },
              {
                "type": "element",
                "tag": "code",
                "props": {},
                "children": [
                  {
                    "type": "text",
                    "id": "payment-methods.code.0204",
                    "value": "address"
                  }
                ]
              },
              {
                "type": "text",
                "id": "payment-methods.p.0205",
                "value": ") for your receiver wallets."
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
                "id": "payment-methods.p.0206",
                "value": "API: "
              },
              {
                "type": "element",
                "tag": "DocLink",
                "props": {
                  "className": "inline",
                  "href": "/api-crypto"
                },
                "children": [
                  {
                    "type": "text",
                    "id": "payment-methods.doclink.0207",
                    "value": "Crypto reference"
                  }
                ]
              },
              {
                "type": "text",
                "id": "payment-methods.p.0208",
                "value": " · Note: crypto is validated in "
              },
              {
                "type": "element",
                "tag": "DocLink",
                "props": {
                  "className": "inline",
                  "href": "/test-apm-simulator"
                },
                "children": [
                  {
                    "type": "text",
                    "id": "payment-methods.doclink.0209",
                    "value": "live, not sandbox"
                  }
                ]
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
              "id": "all-methods"
            },
            "children": [
              {
                "type": "text",
                "id": "payment-methods.all-methods.0210",
                "value": "All methods A–Z"
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
                                "id": "payment-methods.th.0211",
                                "value": "Method"
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
                                "id": "payment-methods.th.0212",
                                "value": "Category"
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
                                "id": "payment-methods.th.0213",
                                "value": "Region"
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
                                "id": "payment-methods.th.0214",
                                "value": "Reference"
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
                                "id": "payment-methods.td.0215",
                                "value": "Apple Pay (Redirect / Seamless)"
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
                                "id": "payment-methods.td.0216",
                                "value": "Wallet"
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
                                "id": "payment-methods.td.0217",
                                "value": "60+ markets"
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "td",
                            "props": {},
                            "children": [
                              {
                                "type": "element",
                                "tag": "DocLink",
                                "props": {
                                  "className": "inline",
                                  "href": "/api-applepay"
                                },
                                "children": [
                                  {
                                    "type": "text",
                                    "id": "payment-methods.doclink.0218",
                                    "value": "API"
                                  }
                                ]
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
                                "id": "payment-methods.td.0219",
                                "value": "Bank Transfers (PayIn / PayOut / Balance)"
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
                                "id": "payment-methods.td.0220",
                                "value": "Bank"
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
                                "id": "payment-methods.td.0221",
                                "value": "Multi"
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "td",
                            "props": {},
                            "children": [
                              {
                                "type": "element",
                                "tag": "DocLink",
                                "props": {
                                  "className": "inline",
                                  "href": "/api-apms"
                                },
                                "children": [
                                  {
                                    "type": "text",
                                    "id": "payment-methods.doclink.0222",
                                    "value": "API"
                                  }
                                ]
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
                                "id": "payment-methods.td.0223",
                                "value": "Card Payments (Purchase / S2S)"
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
                                "id": "payment-methods.td.0224",
                                "value": "Cards"
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
                                "id": "payment-methods.td.0225",
                                "value": "Global"
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "td",
                            "props": {},
                            "children": [
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
                                    "id": "payment-methods.doclink.0226",
                                    "value": "API"
                                  }
                                ]
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
                                "id": "payment-methods.td.0227",
                                "value": "CryptoBridge"
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
                                "id": "payment-methods.td.0228",
                                "value": "Crypto"
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
                                "id": "payment-methods.td.0229",
                                "value": "Global"
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "td",
                            "props": {},
                            "children": [
                              {
                                "type": "element",
                                "tag": "DocLink",
                                "props": {
                                  "className": "inline",
                                  "href": "/api-crypto"
                                },
                                "children": [
                                  {
                                    "type": "text",
                                    "id": "payment-methods.doclink.0230",
                                    "value": "API"
                                  }
                                ]
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
                                "id": "payment-methods.td.0231",
                                "value": "FawryPay"
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
                                "id": "payment-methods.td.0232",
                                "value": "Local APM"
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
                                "id": "payment-methods.td.0233",
                                "value": "Egypt"
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "td",
                            "props": {},
                            "children": [
                              {
                                "type": "element",
                                "tag": "DocLink",
                                "props": {
                                  "className": "inline",
                                  "href": "/api-apms"
                                },
                                "children": [
                                  {
                                    "type": "text",
                                    "id": "payment-methods.doclink.0234",
                                    "value": "API"
                                  }
                                ]
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
                                "id": "payment-methods.td.0235",
                                "value": "Google Pay (Redirect / Seamless)"
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
                                "id": "payment-methods.td.0236",
                                "value": "Wallet"
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
                                "id": "payment-methods.td.0237",
                                "value": "70+ markets"
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "td",
                            "props": {},
                            "children": [
                              {
                                "type": "element",
                                "tag": "DocLink",
                                "props": {
                                  "className": "inline",
                                  "href": "/api-googlepay"
                                },
                                "children": [
                                  {
                                    "type": "text",
                                    "id": "payment-methods.doclink.0238",
                                    "value": "API"
                                  }
                                ]
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
                                "id": "payment-methods.td.0239",
                                "value": "Interac e-Transfer / Request Money / Express"
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
                                "id": "payment-methods.td.0240",
                                "value": "Bank"
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
                                "id": "payment-methods.td.0241",
                                "value": "Canada"
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "td",
                            "props": {},
                            "children": [
                              {
                                "type": "element",
                                "tag": "DocLink",
                                "props": {
                                  "className": "inline",
                                  "href": "/api-interac-etransfer"
                                },
                                "children": [
                                  {
                                    "type": "text",
                                    "id": "payment-methods.doclink.0242",
                                    "value": "API"
                                  }
                                ]
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
                                "id": "payment-methods.td.0243",
                                "value": "MobileMoney"
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
                                "id": "payment-methods.td.0244",
                                "value": "Local APM"
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
                                "id": "payment-methods.td.0245",
                                "value": "Africa"
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "td",
                            "props": {},
                            "children": [
                              {
                                "type": "element",
                                "tag": "DocLink",
                                "props": {
                                  "className": "inline",
                                  "href": "/api-apms"
                                },
                                "children": [
                                  {
                                    "type": "text",
                                    "id": "payment-methods.doclink.0246",
                                    "value": "API"
                                  }
                                ]
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
                                "id": "payment-methods.td.0247",
                                "value": "Neosurf · Voucher Payments"
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
                                "id": "payment-methods.td.0248",
                                "value": "Voucher"
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
                                "id": "payment-methods.td.0249",
                                "value": "EU +"
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "td",
                            "props": {},
                            "children": [
                              {
                                "type": "element",
                                "tag": "DocLink",
                                "props": {
                                  "className": "inline",
                                  "href": "/api-apms"
                                },
                                "children": [
                                  {
                                    "type": "text",
                                    "id": "payment-methods.doclink.0250",
                                    "value": "API"
                                  }
                                ]
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
                                "id": "payment-methods.td.0251",
                                "value": "On Ramp"
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
                                "id": "payment-methods.td.0252",
                                "value": "Crypto"
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
                                "id": "payment-methods.td.0253",
                                "value": "Global"
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "td",
                            "props": {},
                            "children": [
                              {
                                "type": "element",
                                "tag": "DocLink",
                                "props": {
                                  "className": "inline",
                                  "href": "/api-crypto"
                                },
                                "children": [
                                  {
                                    "type": "text",
                                    "id": "payment-methods.doclink.0254",
                                    "value": "API"
                                  }
                                ]
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
                                "id": "payment-methods.td.0255",
                                "value": "Open Banking"
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
                                "id": "payment-methods.td.0256",
                                "value": "Bank"
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
                                "id": "payment-methods.td.0257",
                                "value": "EUR · UK"
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "td",
                            "props": {},
                            "children": [
                              {
                                "type": "element",
                                "tag": "DocLink",
                                "props": {
                                  "className": "inline",
                                  "href": "/api-apms"
                                },
                                "children": [
                                  {
                                    "type": "text",
                                    "id": "payment-methods.doclink.0258",
                                    "value": "API"
                                  }
                                ]
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
                                "id": "payment-methods.td.0259",
                                "value": "PayID"
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
                                "id": "payment-methods.td.0260",
                                "value": "Bank"
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
                                "id": "payment-methods.td.0261",
                                "value": "Australia"
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "td",
                            "props": {},
                            "children": [
                              {
                                "type": "element",
                                "tag": "DocLink",
                                "props": {
                                  "className": "inline",
                                  "href": "/api-apms"
                                },
                                "children": [
                                  {
                                    "type": "text",
                                    "id": "payment-methods.doclink.0262",
                                    "value": "API"
                                  }
                                ]
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
                                "id": "payment-methods.td.0263",
                                "value": "Paymint · Crypto Wallet"
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
                                "id": "payment-methods.td.0264",
                                "value": "Crypto"
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
                                "id": "payment-methods.td.0265",
                                "value": "Global"
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "td",
                            "props": {},
                            "children": [
                              {
                                "type": "element",
                                "tag": "DocLink",
                                "props": {
                                  "className": "inline",
                                  "href": "/api-crypto"
                                },
                                "children": [
                                  {
                                    "type": "text",
                                    "id": "payment-methods.doclink.0266",
                                    "value": "API"
                                  }
                                ]
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
                                "id": "payment-methods.td.0267",
                                "value": "Paypal Wallet"
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
                                "id": "payment-methods.td.0268",
                                "value": "Wallet"
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
                                "id": "payment-methods.td.0269",
                                "value": "Global"
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "td",
                            "props": {},
                            "children": [
                              {
                                "type": "element",
                                "tag": "DocLink",
                                "props": {
                                  "className": "inline",
                                  "href": "/api-apms"
                                },
                                "children": [
                                  {
                                    "type": "text",
                                    "id": "payment-methods.doclink.0270",
                                    "value": "API"
                                  }
                                ]
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
                                "id": "payment-methods.td.0271",
                                "value": "PIX"
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
                                "id": "payment-methods.td.0272",
                                "value": "Local APM"
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
                                "id": "payment-methods.td.0273",
                                "value": "Brazil"
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "td",
                            "props": {},
                            "children": [
                              {
                                "type": "element",
                                "tag": "DocLink",
                                "props": {
                                  "className": "inline",
                                  "href": "/api-apms"
                                },
                                "children": [
                                  {
                                    "type": "text",
                                    "id": "payment-methods.doclink.0274",
                                    "value": "API"
                                  }
                                ]
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
                                "id": "payment-methods.td.0275",
                                "value": "SPEI Payments"
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
                                "id": "payment-methods.td.0276",
                                "value": "Local APM"
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
                                "id": "payment-methods.td.0277",
                                "value": "Mexico"
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "td",
                            "props": {},
                            "children": [
                              {
                                "type": "element",
                                "tag": "DocLink",
                                "props": {
                                  "className": "inline",
                                  "href": "/api-apms"
                                },
                                "children": [
                                  {
                                    "type": "text",
                                    "id": "payment-methods.doclink.0278",
                                    "value": "API"
                                  }
                                ]
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
                                "id": "payment-methods.td.0279",
                                "value": "UPI Solution / ThirdParty UPI"
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
                                "id": "payment-methods.td.0280",
                                "value": "Local APM"
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
                                "id": "payment-methods.td.0281",
                                "value": "India"
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "td",
                            "props": {},
                            "children": [
                              {
                                "type": "element",
                                "tag": "DocLink",
                                "props": {
                                  "className": "inline",
                                  "href": "/api-apms"
                                },
                                "children": [
                                  {
                                    "type": "text",
                                    "id": "payment-methods.doclink.0282",
                                    "value": "API"
                                  }
                                ]
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
                                "id": "payment-methods.td.0283",
                                "value": "Virtual Accounts"
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
                                "id": "payment-methods.td.0284",
                                "value": "Bank"
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
                                "id": "payment-methods.td.0285",
                                "value": "South Korea"
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "td",
                            "props": {},
                            "children": [
                              {
                                "type": "element",
                                "tag": "DocLink",
                                "props": {
                                  "className": "inline",
                                  "href": "/api-apms"
                                },
                                "children": [
                                  {
                                    "type": "text",
                                    "id": "payment-methods.doclink.0286",
                                    "value": "API"
                                  }
                                ]
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
                                "id": "payment-methods.td.0287",
                                "value": "Virtual Cards Payout"
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
                                "id": "payment-methods.td.0288",
                                "value": "Payout"
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
                                "id": "payment-methods.td.0289",
                                "value": "Multi"
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "td",
                            "props": {},
                            "children": [
                              {
                                "type": "element",
                                "tag": "DocLink",
                                "props": {
                                  "className": "inline",
                                  "href": "/api-apms"
                                },
                                "children": [
                                  {
                                    "type": "text",
                                    "id": "payment-methods.doclink.0290",
                                    "value": "API"
                                  }
                                ]
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
            "tag": "h2",
            "props": {
              "id": "refund-payout-rules"
            },
            "children": [
              {
                "type": "text",
                "id": "payment-methods.refund-payout-rules.0291",
                "value": "Refund & payout rules per rail"
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
                "id": "payment-methods.p.0292",
                "value": "Refund behaviour differs by rail, several methods have no on-rail refund, so a refund is executed as an outbound payout:"
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
                                "id": "payment-methods.th.0293",
                                "value": "Rail"
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
                                "id": "payment-methods.th.0294",
                                "value": "PayIn model"
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
                                "id": "payment-methods.th.0295",
                                "value": "Refunds"
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
                                "id": "payment-methods.th.0296",
                                "value": "Payouts"
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
                                "id": "payment-methods.td.0297",
                                "value": "Cards (S2S + 3DS)"
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
                                "id": "payment-methods.td.0298",
                                "value": "Server-to-server"
                              }
                            ]
                          },
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
                                    "id": "payment-methods.span.0299",
                                    "value": "On-rail"
                                  }
                                ]
                              },
                              {
                                "type": "text",
                                "id": "payment-methods.td.0300",
                                "value": " full & partial"
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
                                "id": "payment-methods.td.0301",
                                "value": "Via Virtual Cards"
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
                                "id": "payment-methods.td.0302",
                                "value": "PayID (AU)"
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "td",
                            "props": {},
                            "children": [
                              {
                                "type": "element",
                                "tag": "b",
                                "props": {},
                                "children": [
                                  {
                                    "type": "text",
                                    "id": "payment-methods.b.0303",
                                    "value": "Hosted only"
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
                                "type": "element",
                                "tag": "span",
                                "props": {
                                  "className": "pill amber"
                                },
                                "children": [
                                  {
                                    "type": "text",
                                    "id": "payment-methods.span.0304",
                                    "value": "As outbound payout"
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
                                "type": "element",
                                "tag": "span",
                                "props": {
                                  "className": "pill green"
                                },
                                "children": [
                                  {
                                    "type": "text",
                                    "id": "payment-methods.span.0305",
                                    "value": "Via API"
                                  }
                                ]
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
                                "id": "payment-methods.td.0306",
                                "value": "PIX (BR)"
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
                                "id": "payment-methods.td.0307",
                                "value": "Dynamic QR"
                              }
                            ]
                          },
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
                                    "id": "payment-methods.span.0308",
                                    "value": "Method-dependent"
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
                                "type": "element",
                                "tag": "span",
                                "props": {
                                  "className": "pill green"
                                },
                                "children": [
                                  {
                                    "type": "text",
                                    "id": "payment-methods.span.0309",
                                    "value": "DICT-validated"
                                  }
                                ]
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
                                "id": "payment-methods.td.0310",
                                "value": "SPEI (MX)"
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
                                "id": "payment-methods.td.0311",
                                "value": "CLABE-based"
                              }
                            ]
                          },
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
                                    "id": "payment-methods.span.0312",
                                    "value": "Method-dependent"
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
                                "type": "element",
                                "tag": "span",
                                "props": {
                                  "className": "pill green"
                                },
                                "children": [
                                  {
                                    "type": "text",
                                    "id": "payment-methods.span.0313",
                                    "value": "To CLABE / card / mobile"
                                  }
                                ]
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
                                "id": "payment-methods.td.0314",
                                "value": "Fawry (EG)"
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
                                "id": "payment-methods.td.0315",
                                "value": "Reference code"
                              }
                            ]
                          },
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
                                    "id": "payment-methods.span.0316",
                                    "value": "Via ops"
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
                                "type": "element",
                                "tag": "span",
                                "props": {
                                  "className": "pill gray"
                                },
                                "children": [
                                  {
                                    "type": "text",
                                    "id": "payment-methods.span.0317",
                                    "value": "Coming soon"
                                  }
                                ]
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
                                "id": "payment-methods.td.0318",
                                "value": "Mobile Money (Africa)"
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
                                "id": "payment-methods.td.0319",
                                "value": "Wallet push"
                              }
                            ]
                          },
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
                                    "id": "payment-methods.span.0320",
                                    "value": "As outbound payout"
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
                                "type": "element",
                                "tag": "span",
                                "props": {
                                  "className": "pill green"
                                },
                                "children": [
                                  {
                                    "type": "text",
                                    "id": "payment-methods.span.0321",
                                    "value": "Yes"
                                  }
                                ]
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
                                "id": "payment-methods.td.0322",
                                "value": "Neosurf"
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
                                "id": "payment-methods.td.0323",
                                "value": "Voucher / MyNeosurf"
                              }
                            ]
                          },
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
                                    "id": "payment-methods.span.0324",
                                    "value": "To original source"
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
                                "type": "element",
                                "tag": "span",
                                "props": {
                                  "className": "pill green"
                                },
                                "children": [
                                  {
                                    "type": "text",
                                    "id": "payment-methods.span.0325",
                                    "value": "To MyNeosurf"
                                  }
                                ]
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
                                "id": "payment-methods.td.0326",
                                "value": "CryptoBridge"
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
                                "id": "payment-methods.td.0327",
                                "value": "Hosted pop-up"
                              }
                            ]
                          },
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
                                    "id": "payment-methods.span.0328",
                                    "value": "None"
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
                                "type": "element",
                                "tag": "span",
                                "props": {
                                  "className": "pill red"
                                },
                                "children": [
                                  {
                                    "type": "text",
                                    "id": "payment-methods.span.0329",
                                    "value": "None"
                                  }
                                ]
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
                "id": "payment-methods.p.0330",
                "value": "Method availability depends on your account configuration, see "
              },
              {
                "type": "element",
                "tag": "DocLink",
                "props": {
                  "className": "inline",
                  "href": "/dashboard#pre-live"
                },
                "children": [
                  {
                    "type": "text",
                    "id": "payment-methods.doclink.0331",
                    "value": "pre-live configuration"
                  }
                ]
              },
              {
                "type": "text",
                "id": "payment-methods.p.0332",
                "value": " in the Dashboard guide."
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
                  "updated": "Last updated 05 Jul 2026 · v2.4"
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
                            "id": "payment-methods.small.0333",
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
                            "id": "payment-methods.b.0334",
                            "value": "← Reporting"
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
                            "id": "payment-methods.small.0335",
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
                            "id": "payment-methods.b.0336",
                            "value": "Cards →"
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
