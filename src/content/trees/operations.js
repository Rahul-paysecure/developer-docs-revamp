import { defineDocument } from '../schema.js';

export const operationsTreeDocument = defineDocument({
  "schemaVersion": 1,
  "slug": "operations",
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
                    "id": "operations.doclink.0001",
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
                    "id": "operations.doclink.0002",
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
                "id": "operations.div.0003",
                "value": "Operations"
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
                "id": "operations.h1.0004",
                "value": "Operations"
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
                "id": "operations.p.0005",
                "value": "What happens after the payment: settlement, reconciliation, refunds, disputes, payout review, and the platform limits your integration should respect. These are the questions a merchant-dev gets asked once the happy path works."
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
                        "id": "operations.b.0006",
                        "value": "Account-specific values."
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "operations.p.0007",
                    "value": " Settlement timing, enabled currencies, payout thresholds, and any hard rate limit are configured per merchant account. Where a figure isn't published in the API, confirm it with your account manager; this page flags those points rather than guessing."
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
              "id": "settlement"
            },
            "children": [
              {
                "type": "text",
                "id": "operations.settlement.0008",
                "value": "Settlement"
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
                "id": "operations.p.0009",
                "value": "Settlement is the transfer of collected funds (net of fees and any rolling reserve) from Paysecure to your account. Timing, currency, fee schedule, and rolling-reserve percentage are set on your account, so treat the figures below as structure, not commitments, confirm the specifics with your account manager."
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
                "id": "operations.p.0010",
                "value": "Each webhook and Get-Status payload already carries the per-transaction economics you'll reconcile against: "
              },
              {
                "type": "element",
                "tag": "code",
                "props": {},
                "children": [
                  {
                    "type": "text",
                    "id": "operations.code.0011",
                    "value": "transFees"
                  }
                ]
              },
              {
                "type": "text",
                "id": "operations.p.0012",
                "value": " (transaction fee), "
              },
              {
                "type": "element",
                "tag": "code",
                "props": {},
                "children": [
                  {
                    "type": "text",
                    "id": "operations.code.0013",
                    "value": "fx_Currency"
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
                    "id": "operations.code.0014",
                    "value": "fx_Amount"
                  }
                ]
              },
              {
                "type": "text",
                "id": "operations.p.0015",
                "value": " (FX applied), "
              },
              {
                "type": "element",
                "tag": "code",
                "props": {},
                "children": [
                  {
                    "type": "text",
                    "id": "operations.code.0016",
                    "value": "rollingReserve"
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
                    "id": "operations.code.0017",
                    "value": "mdr"
                  }
                ]
              },
              {
                "type": "text",
                "id": "operations.p.0018",
                "value": " (merchant discount rate), "
              },
              {
                "type": "element",
                "tag": "code",
                "props": {},
                "children": [
                  {
                    "type": "text",
                    "id": "operations.code.0019",
                    "value": "net_amount"
                  }
                ]
              },
              {
                "type": "text",
                "id": "operations.p.0020",
                "value": ", and "
              },
              {
                "type": "element",
                "tag": "code",
                "props": {},
                "children": [
                  {
                    "type": "text",
                    "id": "operations.code.0021",
                    "value": "fee_amount"
                  }
                ]
              },
              {
                "type": "text",
                "id": "operations.p.0022",
                "value": " under "
              },
              {
                "type": "element",
                "tag": "code",
                "props": {},
                "children": [
                  {
                    "type": "text",
                    "id": "operations.code.0023",
                    "value": "payment"
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
                "id": "operations.p.0024",
                "value": "If you are on the "
              },
              {
                "type": "element",
                "tag": "b",
                "props": {},
                "children": [
                  {
                    "type": "text",
                    "id": "operations.b.0025",
                    "value": "Global Collection"
                  }
                ]
              },
              {
                "type": "text",
                "id": "operations.p.0026",
                "value": " (partner/orchestration) product, settlement records are queryable:"
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
              "className": "endpoint-sig"
            },
            "children": [
              {
                "type": "element",
                "tag": "span",
                "props": {
                  "className": "method get"
                },
                "children": [
                  {
                    "type": "text",
                    "id": "operations.span.0027",
                    "value": "GET"
                  }
                ]
              },
              {
                "type": "text",
                "id": "operations.div.0028",
                "value": "/external/gc/partner/settlements"
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
              "className": "code"
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
                  "className": "code-head"
                },
                "children": [
                  {
                    "type": "element",
                    "tag": "span",
                    "props": {
                      "className": "fname"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "operations.span.0029",
                        "value": "List settlements"
                      }
                    ]
                  },
                  {
                    "type": "element",
                    "tag": "button",
                    "props": {
                      "className": "code-copy"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "operations.button.0030",
                        "value": "Copy"
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
                "tag": "pre",
                "props": {},
                "children": [
                  {
                    "type": "text",
                    "id": "operations.pre.0031",
                    "value": "GET "
                  },
                  {
                    "type": "element",
                    "tag": "span",
                    "props": {
                      "className": "tok-s"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "operations.span.0032",
                        "value": "/external/gc/partner/settlements?fromDate=2026-01-01&toDate=2026-07-01&status=settled&pageNo=1&size=10"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": "\n\n"
                  },
                  {
                    "type": "element",
                    "tag": "span",
                    "props": {
                      "className": "tok-c"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "operations.span.0033",
                        "value": "// 200 OK"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": "\n{\n  "
                  },
                  {
                    "type": "element",
                    "tag": "span",
                    "props": {
                      "className": "tok-p"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "operations.span.0034",
                        "value": "\"status\""
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": ": "
                  },
                  {
                    "type": "element",
                    "tag": "span",
                    "props": {
                      "className": "tok-s"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "operations.span.0035",
                        "value": "\"success\""
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": ",\n  "
                  },
                  {
                    "type": "element",
                    "tag": "span",
                    "props": {
                      "className": "tok-p"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "operations.span.0036",
                        "value": "\"data\""
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": ": {\n    "
                  },
                  {
                    "type": "element",
                    "tag": "span",
                    "props": {
                      "className": "tok-p"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "operations.span.0037",
                        "value": "\"settlements\""
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": ": [\n      { "
                  },
                  {
                    "type": "element",
                    "tag": "span",
                    "props": {
                      "className": "tok-p"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "operations.span.0038",
                        "value": "\"settlementId\""
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": ": "
                  },
                  {
                    "type": "element",
                    "tag": "span",
                    "props": {
                      "className": "tok-s"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "operations.span.0039",
                        "value": "\"1234\""
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": ", "
                  },
                  {
                    "type": "element",
                    "tag": "span",
                    "props": {
                      "className": "tok-p"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "operations.span.0040",
                        "value": "\"amount\""
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": ": "
                  },
                  {
                    "type": "element",
                    "tag": "span",
                    "props": {
                      "className": "tok-n"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "operations.span.0041",
                        "value": "100"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": ", "
                  },
                  {
                    "type": "element",
                    "tag": "span",
                    "props": {
                      "className": "tok-p"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "operations.span.0042",
                        "value": "\"currency\""
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": ": "
                  },
                  {
                    "type": "element",
                    "tag": "span",
                    "props": {
                      "className": "tok-s"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "operations.span.0043",
                        "value": "\"USD\""
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": ", "
                  },
                  {
                    "type": "element",
                    "tag": "span",
                    "props": {
                      "className": "tok-p"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "operations.span.0044",
                        "value": "\"status\""
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": ": "
                  },
                  {
                    "type": "element",
                    "tag": "span",
                    "props": {
                      "className": "tok-s"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "operations.span.0045",
                        "value": "\"settled\""
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": ", "
                  },
                  {
                    "type": "element",
                    "tag": "span",
                    "props": {
                      "className": "tok-p"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "operations.span.0046",
                        "value": "\"settledOn\""
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": ": "
                  },
                  {
                    "type": "element",
                    "tag": "span",
                    "props": {
                      "className": "tok-n"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "operations.span.0047",
                        "value": "1750000000"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": " }\n    ],\n    "
                  },
                  {
                    "type": "element",
                    "tag": "span",
                    "props": {
                      "className": "tok-p"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "operations.span.0048",
                        "value": "\"pagination\""
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": ": { "
                  },
                  {
                    "type": "element",
                    "tag": "span",
                    "props": {
                      "className": "tok-p"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "operations.span.0049",
                        "value": "\"currentPage\""
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": ": "
                  },
                  {
                    "type": "element",
                    "tag": "span",
                    "props": {
                      "className": "tok-n"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "operations.span.0050",
                        "value": "1"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": ", "
                  },
                  {
                    "type": "element",
                    "tag": "span",
                    "props": {
                      "className": "tok-p"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "operations.span.0051",
                        "value": "\"pageSize\""
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": ": "
                  },
                  {
                    "type": "element",
                    "tag": "span",
                    "props": {
                      "className": "tok-n"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "operations.span.0052",
                        "value": "10"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": ", "
                  },
                  {
                    "type": "element",
                    "tag": "span",
                    "props": {
                      "className": "tok-p"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "operations.span.0053",
                        "value": "\"totalElements\""
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": ": "
                  },
                  {
                    "type": "element",
                    "tag": "span",
                    "props": {
                      "className": "tok-n"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "operations.span.0054",
                        "value": "2"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": ", "
                  },
                  {
                    "type": "element",
                    "tag": "span",
                    "props": {
                      "className": "tok-p"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "operations.span.0055",
                        "value": "\"totalPages\""
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": ": "
                  },
                  {
                    "type": "element",
                    "tag": "span",
                    "props": {
                      "className": "tok-n"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "operations.span.0056",
                        "value": "1"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": ", "
                  },
                  {
                    "type": "element",
                    "tag": "span",
                    "props": {
                      "className": "tok-p"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "operations.span.0057",
                        "value": "\"hasNext\""
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": ": "
                  },
                  {
                    "type": "element",
                    "tag": "span",
                    "props": {
                      "className": "tok-k"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "operations.span.0058",
                        "value": "false"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": " }\n  }\n}"
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
              "id": "reconciliation"
            },
            "children": [
              {
                "type": "text",
                "id": "operations.reconciliation.0059",
                "value": "Reconciliation"
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
                "id": "operations.p.0060",
                "value": "Reconciliation ties your order to a Paysecure transaction and, ultimately, to a settlement line. The thread that stitches it together is your own "
              },
              {
                "type": "element",
                "tag": "code",
                "props": {},
                "children": [
                  {
                    "type": "text",
                    "id": "operations.code.0061",
                    "value": "merchantRef"
                  }
                ]
              },
              {
                "type": "text",
                "id": "operations.p.0062",
                "value": ": set it on every "
              },
              {
                "type": "element",
                "tag": "code",
                "props": {},
                "children": [
                  {
                    "type": "text",
                    "id": "operations.code.0063",
                    "value": "/purchases"
                  }
                ]
              },
              {
                "type": "text",
                "id": "operations.p.0064",
                "value": " and "
              },
              {
                "type": "element",
                "tag": "code",
                "props": {},
                "children": [
                  {
                    "type": "text",
                    "id": "operations.code.0065",
                    "value": "/payout"
                  }
                ]
              },
              {
                "type": "text",
                "id": "operations.p.0066",
                "value": " call. It dedupes retries and lets you retrieve a transaction even when the original response was lost."
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
                "id": "operations.p.0067",
                "value": "The Transaction Reporting API is the reconciliation workhorse:"
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
              "className": "endpoint-sig"
            },
            "children": [
              {
                "type": "element",
                "tag": "span",
                "props": {
                  "className": "method get"
                },
                "children": [
                  {
                    "type": "text",
                    "id": "operations.span.0068",
                    "value": "GET"
                  }
                ]
              },
              {
                "type": "text",
                "id": "operations.div.0069",
                "value": "/external/transactions/list"
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
              "className": "code"
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
                  "className": "code-head"
                },
                "children": [
                  {
                    "type": "element",
                    "tag": "span",
                    "props": {
                      "className": "fname"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "operations.span.0070",
                        "value": "List transactions (filter & paginate)"
                      }
                    ]
                  },
                  {
                    "type": "element",
                    "tag": "button",
                    "props": {
                      "className": "code-copy"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "operations.button.0071",
                        "value": "Copy"
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
                "tag": "pre",
                "props": {},
                "children": [
                  {
                    "type": "text",
                    "id": "operations.pre.0072",
                    "value": "GET "
                  },
                  {
                    "type": "element",
                    "tag": "span",
                    "props": {
                      "className": "tok-s"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "operations.span.0073",
                        "value": "/external/transactions/list"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": "\n      "
                  },
                  {
                    "type": "element",
                    "tag": "span",
                    "props": {
                      "className": "tok-s"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "operations.span.0074",
                        "value": "?page_no=1&page_size=10"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": "\n      "
                  },
                  {
                    "type": "element",
                    "tag": "span",
                    "props": {
                      "className": "tok-s"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "operations.span.0075",
                        "value": "&start_date=2026-06-01 00:00:00 +05:30"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": "\n      "
                  },
                  {
                    "type": "element",
                    "tag": "span",
                    "props": {
                      "className": "tok-s"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "operations.span.0076",
                        "value": "&end_date=2026-06-30 00:00:00 +05:30"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": "\n      "
                  },
                  {
                    "type": "element",
                    "tag": "span",
                    "props": {
                      "className": "tok-s"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "operations.span.0077",
                        "value": "&status=paid&currency=USD&is_sandbox=false"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": "\n      "
                  },
                  {
                    "type": "element",
                    "tag": "span",
                    "props": {
                      "className": "tok-s"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "operations.span.0078",
                        "value": "&customer_id=NA"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": "\n\n"
                  },
                  {
                    "type": "element",
                    "tag": "span",
                    "props": {
                      "className": "tok-c"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "operations.span.0079",
                        "value": "// data.transactions[] + pagination (totalElements, totalPages)"
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
                "id": "operations.p.0080",
                "value": "Then pull one transaction's full detail, including sub-transactions (attempts, fees, refunds), for line-level reconciliation:"
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
              "className": "endpoint-sig"
            },
            "children": [
              {
                "type": "element",
                "tag": "span",
                "props": {
                  "className": "method get"
                },
                "children": [
                  {
                    "type": "text",
                    "id": "operations.span.0081",
                    "value": "GET"
                  }
                ]
              },
              {
                "type": "text",
                "id": "operations.div.0082",
                "value": "/external/transactions/data/{transaction_id}"
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
              "className": "code"
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
                  "className": "code-head"
                },
                "children": [
                  {
                    "type": "element",
                    "tag": "span",
                    "props": {
                      "className": "fname"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "operations.span.0083",
                        "value": "Detailed transaction"
                      }
                    ]
                  },
                  {
                    "type": "element",
                    "tag": "button",
                    "props": {
                      "className": "code-copy"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "operations.button.0084",
                        "value": "Copy"
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
                "tag": "pre",
                "props": {},
                "children": [
                  {
                    "type": "text",
                    "id": "operations.pre.0085",
                    "value": "GET "
                  },
                  {
                    "type": "element",
                    "tag": "span",
                    "props": {
                      "className": "tok-s"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "operations.span.0086",
                        "value": "/external/transactions/data/69e20fd9…?include_subtransactions=true"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": "\n\n"
                  },
                  {
                    "type": "element",
                    "tag": "span",
                    "props": {
                      "className": "tok-c"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "operations.span.0087",
                        "value": "// 200 OK · data: { transaction_id, amount, currency, status,"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": "\n"
                  },
                  {
                    "type": "element",
                    "tag": "span",
                    "props": {
                      "className": "tok-c"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "operations.span.0088",
                        "value": "//   sub_transactions:[{ type, amount, currency }, …] }"
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
                "id": "operations.p.0089",
                "value": "A clean reconciliation loop: match your order → "
              },
              {
                "type": "element",
                "tag": "code",
                "props": {},
                "children": [
                  {
                    "type": "text",
                    "id": "operations.code.0090",
                    "value": "merchantRef"
                  }
                ]
              },
              {
                "type": "text",
                "value": " → "
              },
              {
                "type": "element",
                "tag": "code",
                "props": {},
                "children": [
                  {
                    "type": "text",
                    "id": "operations.code.0091",
                    "value": "transaction_id"
                  }
                ]
              },
              {
                "type": "text",
                "id": "operations.p.0092",
                "value": " → settlement line. Filter by "
              },
              {
                "type": "element",
                "tag": "code",
                "props": {},
                "children": [
                  {
                    "type": "text",
                    "id": "operations.code.0093",
                    "value": "last_updated_start"
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
                    "id": "operations.code.0094",
                    "value": "last_updated_end"
                  }
                ]
              },
              {
                "type": "text",
                "id": "operations.p.0095",
                "value": " for incremental pulls."
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
              "id": "refunds"
            },
            "children": [
              {
                "type": "text",
                "id": "operations.refunds.0096",
                "value": "Refunds, full & partial"
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
                "id": "operations.p.0097",
                "value": "A full refund is a "
              },
              {
                "type": "element",
                "tag": "code",
                "props": {},
                "children": [
                  {
                    "type": "text",
                    "id": "operations.code.0098",
                    "value": "GET"
                  }
                ]
              },
              {
                "type": "text",
                "id": "operations.p.0099",
                "value": " on the purchase's refund endpoint (see the "
              },
              {
                "type": "element",
                "tag": "DocLink",
                "props": {
                  "className": "inline",
                  "href": "/api-reference#refund"
                },
                "children": [
                  {
                    "type": "text",
                    "id": "operations.doclink.0100",
                    "value": "API reference"
                  }
                ]
              },
              {
                "type": "text",
                "id": "operations.p.0101",
                "value": "). Only purchases in "
              },
              {
                "type": "element",
                "tag": "code",
                "props": {},
                "children": [
                  {
                    "type": "text",
                    "id": "operations.code.0102",
                    "value": "paid"
                  }
                ]
              },
              {
                "type": "text",
                "id": "operations.p.0103",
                "value": " can be refunded; the status moves "
              },
              {
                "type": "element",
                "tag": "code",
                "props": {},
                "children": [
                  {
                    "type": "text",
                    "id": "operations.code.0104",
                    "value": "paid → refund_in_process → refunded"
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
                "type": "element",
                "tag": "b",
                "props": {},
                "children": [
                  {
                    "type": "text",
                    "id": "operations.b.0105",
                    "value": "Partial refunds"
                  }
                ]
              },
              {
                "type": "text",
                "id": "operations.p.0106",
                "value": " refund a portion of a paid purchase, and you can issue several until the total refunded equals the original amount:"
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
              "className": "endpoint-sig"
            },
            "children": [
              {
                "type": "element",
                "tag": "span",
                "props": {
                  "className": "method post"
                },
                "children": [
                  {
                    "type": "text",
                    "id": "operations.span.0107",
                    "value": "POST"
                  }
                ]
              },
              {
                "type": "text",
                "id": "operations.div.0108",
                "value": "/purchases/{purchaseId}/refund"
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
              "className": "code"
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
                  "className": "code-head"
                },
                "children": [
                  {
                    "type": "element",
                    "tag": "span",
                    "props": {
                      "className": "fname"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "operations.span.0109",
                        "value": "Partial refund + status"
                      }
                    ]
                  },
                  {
                    "type": "element",
                    "tag": "button",
                    "props": {
                      "className": "code-copy"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "operations.button.0110",
                        "value": "Copy"
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
                "tag": "pre",
                "props": {},
                "children": [
                  {
                    "type": "text",
                    "id": "operations.pre.0111",
                    "value": "POST "
                  },
                  {
                    "type": "element",
                    "tag": "span",
                    "props": {
                      "className": "tok-s"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "operations.span.0112",
                        "value": "/purchases/{purchaseId}/refund"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": "\n{ "
                  },
                  {
                    "type": "element",
                    "tag": "span",
                    "props": {
                      "className": "tok-p"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "operations.span.0113",
                        "value": "\"amount\""
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": ": "
                  },
                  {
                    "type": "element",
                    "tag": "span",
                    "props": {
                      "className": "tok-s"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "operations.span.0114",
                        "value": "\"5.12\""
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": " }   "
                  },
                  {
                    "type": "element",
                    "tag": "span",
                    "props": {
                      "className": "tok-c"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "operations.span.0115",
                        "value": "// > 0 and ≤ remaining refundable"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": "\n\n"
                  },
                  {
                    "type": "element",
                    "tag": "span",
                    "props": {
                      "className": "tok-c"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "operations.span.0116",
                        "value": "// Check refund progress"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "operations.pre.0117",
                    "value": "\nPOST "
                  },
                  {
                    "type": "element",
                    "tag": "span",
                    "props": {
                      "className": "tok-s"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "operations.span.0118",
                        "value": "/refundStatus/{purchaseId}/"
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
                    "type": "text",
                    "id": "operations.p.0119",
                    "value": "The refund amount must be greater than 0 and must not exceed the remaining refundable amount. Track the running total yourself, the API rejects a refund that would take the total over the original purchase amount."
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
              "id": "disputes"
            },
            "children": [
              {
                "type": "text",
                "id": "operations.disputes.0120",
                "value": "Disputes & chargebacks"
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
                "id": "operations.p.0121",
                "value": "A chargeback is a forced reversal initiated by the cardholder's bank. In Paysecure it surfaces as the terminal status "
              },
              {
                "type": "element",
                "tag": "code",
                "props": {},
                "children": [
                  {
                    "type": "text",
                    "id": "operations.code.0122",
                    "value": "chargeback"
                  }
                ]
              },
              {
                "type": "text",
                "id": "operations.p.0123",
                "value": " (and "
              },
              {
                "type": "element",
                "tag": "code",
                "props": {},
                "children": [
                  {
                    "type": "text",
                    "id": "operations.code.0124",
                    "value": "fraud_refunded"
                  }
                ]
              },
              {
                "type": "text",
                "id": "operations.p.0125",
                "value": " where a refund is driven by fraud). There is "
              },
              {
                "type": "element",
                "tag": "b",
                "props": {},
                "children": [
                  {
                    "type": "text",
                    "id": "operations.b.0126",
                    "value": "no self-service dispute API"
                  }
                ]
              },
              {
                "type": "text",
                "id": "operations.p.0127",
                "value": " in the current docs, chargebacks are handled as a manual process with your account team, and any chargeback / rolling-reserve fees appear on the transaction as "
              },
              {
                "type": "element",
                "tag": "code",
                "props": {},
                "children": [
                  {
                    "type": "text",
                    "id": "operations.code.0128",
                    "value": "chargeBackFee"
                  }
                ]
              },
              {
                "type": "text",
                "id": "operations.p.0129",
                "value": " and "
              },
              {
                "type": "element",
                "tag": "code",
                "props": {},
                "children": [
                  {
                    "type": "text",
                    "id": "operations.code.0130",
                    "value": "rollingReserve"
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
                "id": "operations.p.0131",
                "value": "What you should build for:"
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
                    "type": "text",
                    "id": "operations.li.0132",
                    "value": "Subscribe to the "
                  },
                  {
                    "type": "element",
                    "tag": "code",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "operations.code.0133",
                        "value": "chargeback"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "operations.li.0134",
                    "value": " and "
                  },
                  {
                    "type": "element",
                    "tag": "code",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "operations.code.0135",
                        "value": "refunded"
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
                        "id": "operations.code.0136",
                        "value": "fraud_refunded"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "operations.li.0137",
                    "value": " webhook events and reverse the order fulfilment when they fire."
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
                    "id": "operations.li.0138",
                    "value": "Keep the transaction's "
                  },
                  {
                    "type": "element",
                    "tag": "code",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "operations.code.0139",
                        "value": "merchantRef"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "operations.li.0140",
                    "value": " and "
                  },
                  {
                    "type": "element",
                    "tag": "code",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "operations.code.0141",
                        "value": "reference_generated"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "operations.li.0142",
                    "value": " to hand for evidence requests."
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
                    "id": "operations.li.0143",
                    "value": "Confirm your dispute-response window and evidence process with your account manager; these are operational, not API-driven."
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
              "id": "payout-review"
            },
            "children": [
              {
                "type": "text",
                "id": "operations.payout-review.0144",
                "value": "Payout manual review"
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
                "id": "operations.p.0145",
                "value": "When a payout threshold is configured, a payout that trips the threshold is either auto-rejected or routed for "
              },
              {
                "type": "element",
                "tag": "b",
                "props": {},
                "children": [
                  {
                    "type": "text",
                    "id": "operations.b.0146",
                    "value": "manual review"
                  }
                ]
              },
              {
                "type": "text",
                "id": "operations.p.0147",
                "value": " (status "
              },
              {
                "type": "element",
                "tag": "code",
                "props": {},
                "children": [
                  {
                    "type": "text",
                    "id": "operations.code.0148",
                    "value": "pending_review"
                  }
                ]
              },
              {
                "type": "text",
                "id": "operations.p.0149",
                "value": "). A reviewer approves or rejects it, optionally with remarks:"
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
              "className": "code"
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
                  "className": "code-head"
                },
                "children": [
                  {
                    "type": "element",
                    "tag": "span",
                    "props": {
                      "className": "fname"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "operations.span.0152",
                        "value": "Approve or reject a payout under review"
                      }
                    ]
                  },
                  {
                    "type": "element",
                    "tag": "button",
                    "props": {
                      "className": "code-copy"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "operations.button.0153",
                        "value": "Copy"
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
                "tag": "pre",
                "props": {},
                "children": [
                  {
                    "type": "text",
                    "id": "operations.pre.0157",
                    "value": "POST "
                  },
                  {
                    "type": "element",
                    "tag": "span",
                    "props": {
                      "className": "tok-s"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "operations.span.0158",
                        "value": "/payouts/{payout_id}/action?action=approve"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": "   "
                  },
                  {
                    "type": "element",
                    "tag": "span",
                    "props": {
                      "className": "tok-c"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "operations.span.0159",
                        "value": "// or action=reject"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": "\n{ "
                  },
                  {
                    "type": "element",
                    "tag": "span",
                    "props": {
                      "className": "tok-p"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "operations.span.0160",
                        "value": "\"remarks\""
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": ": "
                  },
                  {
                    "type": "element",
                    "tag": "span",
                    "props": {
                      "className": "tok-s"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "operations.span.0161",
                        "value": "\"Verified against KYC\""
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": " }   "
                  },
                  {
                    "type": "element",
                    "tag": "span",
                    "props": {
                      "className": "tok-c"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "operations.span.0162",
                        "value": "// optional"
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
                "id": "operations.p.0163",
                "value": "A "
              },
              {
                "type": "element",
                "tag": "code",
                "props": {},
                "children": [
                  {
                    "type": "text",
                    "id": "operations.code.0164",
                    "value": "pending_review"
                  }
                ]
              },
              {
                "type": "text",
                "id": "operations.p.0165",
                "value": " payout fires a webhook, see "
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
                    "id": "operations.doclink.0166",
                    "value": "Payout webhooks"
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
              "id": "currencies"
            },
            "children": [
              {
                "type": "text",
                "id": "operations.currencies.0167",
                "value": "Currencies"
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
                "id": "operations.p.0168",
                "value": "Paysecure supports a broad currency set, but "
              },
              {
                "type": "element",
                "tag": "b",
                "props": {},
                "children": [
                  {
                    "type": "text",
                    "id": "operations.b.0169",
                    "value": "the currencies enabled for your account are configured by your account manager"
                  }
                ]
              },
              {
                "type": "text",
                "id": "operations.p.0170",
                "value": ": a purchase in a currency that isn't enabled returns "
              },
              {
                "type": "element",
                "tag": "code",
                "props": {},
                "children": [
                  {
                    "type": "text",
                    "id": "operations.code.0171",
                    "value": "Only \"curr_name\" currency is allowed"
                  }
                ]
              },
              {
                "type": "text",
                "id": "operations.p.0172",
                "value": ". There is no public per-method currency matrix in the API; ask your account team for the exact list enabled on your account and per payment method."
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
                "id": "operations.p.0173",
                "value": "Format rules that "
              },
              {
                "type": "element",
                "tag": "i",
                "props": {},
                "children": [
                  {
                    "type": "text",
                    "id": "operations.i.0174",
                    "value": "are"
                  }
                ]
              },
              {
                "type": "text",
                "id": "operations.p.0175",
                "value": " fixed: prices are decimals to 2 places (e.g. "
              },
              {
                "type": "element",
                "tag": "code",
                "props": {},
                "children": [
                  {
                    "type": "text",
                    "id": "operations.code.0176",
                    "value": "10.37"
                  }
                ]
              },
              {
                "type": "text",
                "id": "operations.p.0177",
                "value": "), currency codes are ISO 4217, and each APM is tied to its local currency (PIX→BRL, SPEI→MXN, UPI→INR, Interac→CAD, etc.)."
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
              "id": "limits"
            },
            "children": [
              {
                "type": "text",
                "id": "operations.limits.0178",
                "value": "Rate limits & retries"
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
                "id": "operations.p.0179",
                "value": "Paysecure returns "
              },
              {
                "type": "element",
                "tag": "code",
                "props": {},
                "children": [
                  {
                    "type": "text",
                    "id": "operations.code.0180",
                    "value": "429 Too many requests"
                  }
                ]
              },
              {
                "type": "text",
                "id": "operations.p.0181",
                "value": " when you exceed the request rate, but "
              },
              {
                "type": "element",
                "tag": "b",
                "props": {},
                "children": [
                  {
                    "type": "text",
                    "id": "operations.b.0182",
                    "value": "the specific numeric limit is not published"
                  }
                ]
              },
              {
                "type": "text",
                "id": "operations.p.0183",
                "value": ": confirm your account's ceiling with your account manager. Build defensively regardless:"
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
                    "type": "text",
                    "id": "operations.li.0184",
                    "value": "Implement "
                  },
                  {
                    "type": "element",
                    "tag": "b",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "operations.b.0185",
                        "value": "exponential backoff"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "operations.li.0186",
                    "value": " on "
                  },
                  {
                    "type": "element",
                    "tag": "code",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "operations.code.0187",
                        "value": "429"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "operations.li.0188",
                    "value": " and "
                  },
                  {
                    "type": "element",
                    "tag": "code",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "operations.code.0189",
                        "value": "5xx"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "operations.li.0190",
                    "value": " responses; don't hammer a retry loop."
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
                    "id": "operations.li.0191",
                    "value": "For "
                  },
                  {
                    "type": "element",
                    "tag": "code",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "operations.code.0192",
                        "value": "4xx"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "operations.li.0193",
                    "value": " other than 429, parse "
                  },
                  {
                    "type": "element",
                    "tag": "code",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "operations.code.0194",
                        "value": "{ message, code }"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "operations.li.0195",
                    "value": " and handle each error rather than retrying blindly (see "
                  },
                  {
                    "type": "element",
                    "tag": "DocLink",
                    "props": {
                      "className": "inline",
                      "href": "/errors"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "operations.doclink.0196",
                        "value": "Statuses & errors"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": ")."
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
                    "id": "operations.li.0197",
                    "value": "Use "
                  },
                  {
                    "type": "element",
                    "tag": "code",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "operations.code.0198",
                        "value": "merchantRef"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "operations.li.0199",
                    "value": " so a retried create-purchase is de-duplicated rather than double-charging."
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
                  "updated": "Last updated 05 Jul 2026 · v2.5"
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
                      "href": "/errors"
                    },
                    "children": [
                      {
                        "type": "element",
                        "tag": "small",
                        "props": {},
                        "children": [
                          {
                            "type": "text",
                            "id": "operations.small.0200",
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
                            "id": "operations.b.0201",
                            "value": "← Statuses & errors"
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
                      "href": "/webhooks"
                    },
                    "children": [
                      {
                        "type": "element",
                        "tag": "small",
                        "props": {},
                        "children": [
                          {
                            "type": "text",
                            "id": "operations.small.0202",
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
                            "id": "operations.b.0203",
                            "value": "Webhooks →"
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
