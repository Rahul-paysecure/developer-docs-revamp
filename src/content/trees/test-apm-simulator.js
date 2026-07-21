import { defineDocument } from '../schema.js';

export const testApmSimulatorTreeDocument = defineDocument({
  "schemaVersion": 1,
  "slug": "test-apm-simulator",
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
                    "id": "test-apm-simulator.doclink.0001",
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
                  "href": "/test-cards"
                },
                "children": [
                  {
                    "type": "text",
                    "id": "test-apm-simulator.doclink.0002",
                    "value": "Testing"
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
                "id": "test-apm-simulator.div.0003",
                "value": "Test APM simulator"
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
                "id": "test-apm-simulator.h1.0004",
                "value": "Testing APMs (Alternative Payment Methods)"
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
                "id": "test-apm-simulator.p.0005",
                "value": "How to validate Interac, PIX, UPI, wallets, bank transfers, and crypto, and why they behave differently from cards in testing."
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
                        "id": "test-apm-simulator.b.0006",
                        "value": "APMs cannot be tested in the sandbox."
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "test-apm-simulator.p.0007",
                    "value": " Only card payment testing is supported in sandbox. There is no APM simulator, to test any non-card method you validate it in "
                  },
                  {
                    "type": "element",
                    "tag": "b",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "test-apm-simulator.b.0008",
                        "value": "live mode with small real amounts"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "test-apm-simulator.p.0009",
                    "value": ", coordinated with your account manager."
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
              "id": "why"
            },
            "children": [
              {
                "type": "text",
                "id": "test-apm-simulator.why.0010",
                "value": "Why APMs aren't in sandbox"
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
                "id": "test-apm-simulator.p.0011",
                "value": "Card testing works in sandbox because Paysecure controls the full authorisation simulation (see "
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
                    "id": "test-apm-simulator.doclink.0012",
                    "value": "test cards"
                  }
                ]
              },
              {
                "type": "text",
                "id": "test-apm-simulator.p.0013",
                "value": "). APMs route to real external rails, banks, UPI apps, Interac, PIX, blockchain networks, that have no shared sandbox. So the honest position is: build against the documented request/response shapes, then prove each method end-to-end in live with a controlled small-value transaction."
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
              "id": "live-validation"
            },
            "children": [
              {
                "type": "text",
                "id": "test-apm-simulator.live-validation.0014",
                "value": "Recommended live-validation flow"
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
                "id": "test-apm-simulator.p.0015",
                "value": "Once your integration passes in sandbox with cards, and your account manager has enabled the APM and currency on your account:"
              }
            ]
          },
          {
            "type": "text",
            "value": "\n      "
          },
          {
            "type": "element",
            "tag": "ol",
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
                    "type": "text",
                    "id": "test-apm-simulator.li.0016",
                    "value": "Switch to "
                  },
                  {
                    "type": "element",
                    "tag": "b",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "test-apm-simulator.b.0017",
                        "value": "live"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "test-apm-simulator.li.0018",
                    "value": " mode (uncheck "
                  },
                  {
                    "type": "element",
                    "tag": "b",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "test-apm-simulator.b.0019",
                        "value": "Is Sandbox"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "test-apm-simulator.li.0020",
                    "value": ") and generate a live API key and Brand ID."
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
                    "id": "test-apm-simulator.li.0021",
                    "value": "Create a purchase pinned to the method with the real "
                  },
                  {
                    "type": "element",
                    "tag": "code",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "test-apm-simulator.code.0022",
                        "value": "paymentMethod"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "test-apm-simulator.li.0023",
                    "value": " code (e.g. "
                  },
                  {
                    "type": "element",
                    "tag": "code",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "test-apm-simulator.code.0024",
                        "value": "INTERAC-ETRANSFER"
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
                        "id": "test-apm-simulator.code.0025",
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
                        "id": "test-apm-simulator.code.0026",
                        "value": "UPI-QR"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "test-apm-simulator.li.0027",
                    "value": "), see each method's API page for the exact code and body."
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
                    "id": "test-apm-simulator.li.0028",
                    "value": "Use the "
                  },
                  {
                    "type": "element",
                    "tag": "b",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "test-apm-simulator.b.0029",
                        "value": "smallest amount"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "test-apm-simulator.li.0030",
                    "value": " the method and your account allow, with a real instrument you control."
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
                    "id": "test-apm-simulator.li.0031",
                    "value": "Complete the flow on the real provider (bank app, UPI app, wallet, or on-chain transfer)."
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
                    "id": "test-apm-simulator.li.0032",
                    "value": "Confirm the terminal webhook arrives and its "
                  },
                  {
                    "type": "element",
                    "tag": "code",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "test-apm-simulator.code.0033",
                        "value": "paysecure-sign"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "test-apm-simulator.li.0034",
                    "value": " verifies, then reconcile with "
                  },
                  {
                    "type": "element",
                    "tag": "DocLink",
                    "props": {
                      "className": "inline",
                      "href": "/webhooks"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "test-apm-simulator.doclink.0035",
                        "value": "Get Status"
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
                    "type": "text",
                    "id": "test-apm-simulator.li.0036",
                    "value": "Where the method supports PayOut, run one small payout and confirm the "
                  },
                  {
                    "type": "element",
                    "tag": "DocLink",
                    "props": {
                      "className": "inline",
                      "href": "/webhooks#payout"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "test-apm-simulator.doclink.0037",
                        "value": "payout webhook"
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
              "id": "checklist"
            },
            "children": [
              {
                "type": "text",
                "id": "test-apm-simulator.checklist.0038",
                "value": "Per-method go-live checklist"
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
                "id": "test-apm-simulator.p.0039",
                "value": "For every APM you enable, verify in live:"
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
                    "id": "test-apm-simulator.li.0040",
                    "value": "Success → assert the "
                  },
                  {
                    "type": "element",
                    "tag": "code",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "test-apm-simulator.code.0041",
                        "value": "paid"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "test-apm-simulator.li.0042",
                    "value": " webhook arrives and its "
                  },
                  {
                    "type": "element",
                    "tag": "code",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "test-apm-simulator.code.0043",
                        "value": "paysecure-sign"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "test-apm-simulator.li.0044",
                    "value": " verifies"
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
                    "id": "test-apm-simulator.li.0045",
                    "value": "Failure/abandon → assert the "
                  },
                  {
                    "type": "element",
                    "tag": "code",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "test-apm-simulator.code.0046",
                        "value": "error"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "test-apm-simulator.li.0047",
                    "value": " or "
                  },
                  {
                    "type": "element",
                    "tag": "code",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "test-apm-simulator.code.0048",
                        "value": "expired"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "test-apm-simulator.li.0049",
                    "value": " webhook with the right "
                  },
                  {
                    "type": "element",
                    "tag": "code",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "test-apm-simulator.code.0050",
                        "value": "errorMsg"
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
                    "type": "text",
                    "id": "test-apm-simulator.li.0051",
                    "value": "Refund (if the method supports it) → assert the "
                  },
                  {
                    "type": "element",
                    "tag": "code",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "test-apm-simulator.code.0052",
                        "value": "refunded"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "test-apm-simulator.li.0053",
                    "value": " webhook"
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
                    "id": "test-apm-simulator.li.0054",
                    "value": "Payout (if supported) → assert the payout "
                  },
                  {
                    "type": "element",
                    "tag": "code",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "test-apm-simulator.code.0055",
                        "value": "paid"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "test-apm-simulator.li.0056",
                    "value": " webhook and correct "
                  },
                  {
                    "type": "element",
                    "tag": "code",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "test-apm-simulator.code.0057",
                        "value": "payoutMethod"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "test-apm-simulator.li.0058",
                    "value": " code"
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
                    "id": "test-apm-simulator.li.0059",
                    "value": "Reconciliation → the purchase appears in "
                  },
                  {
                    "type": "element",
                    "tag": "DocLink",
                    "props": {
                      "className": "inline",
                      "href": "/operations#reconciliation"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "test-apm-simulator.doclink.0060",
                        "value": "Transaction Reporting"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "test-apm-simulator.li.0061",
                    "value": " with your "
                  },
                  {
                    "type": "element",
                    "tag": "code",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "test-apm-simulator.code.0062",
                        "value": "merchantRef"
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
                        "tag": "path",
                        "props": {
                          "d": "M9 18h6M10 22h4"
                        },
                        "children": []
                      },
                      {
                        "type": "element",
                        "tag": "path",
                        "props": {
                          "d": "M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5.76.76 1.23 1.52 1.41 2.5"
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
                        "id": "test-apm-simulator.b.0063",
                        "value": "Ask your account manager"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "test-apm-simulator.p.0064",
                    "value": " which APMs and currencies are enabled on your account, and the minimum live test amounts; these are account-configured and not published in the docs."
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
                      "href": "/test-cards"
                    },
                    "children": [
                      {
                        "type": "element",
                        "tag": "small",
                        "props": {},
                        "children": [
                          {
                            "type": "text",
                            "id": "test-apm-simulator.small.0065",
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
                            "id": "test-apm-simulator.b.0066",
                            "value": "← Test cards"
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
                            "id": "test-apm-simulator.small.0067",
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
                            "id": "test-apm-simulator.b.0068",
                            "value": "Payment methods →"
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
