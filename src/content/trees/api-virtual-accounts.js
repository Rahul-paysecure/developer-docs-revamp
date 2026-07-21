import { defineDocument } from '../schema.js';

export const ApiVirtualAccountsTreeDocument = defineDocument({
  "schemaVersion": 1,
  "slug": "api-virtual-accounts",
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
                    "id": "api-virtual-accounts.doclink.0001",
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
                  "href": "/api-reference"
                },
                "children": [
                  {
                    "type": "text",
                    "id": "api-virtual-accounts.doclink.0002",
                    "value": "API Reference"
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
                "id": "api-virtual-accounts.div.0003",
                "value": "Virtual Accounts (South Korea)"
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
              "className": "api-section",
              "id": "va-overview",
              "style": {
                "display": "block"
              }
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
                  "className": "api-prose"
                },
                "children": [
                  {
                    "type": "text",
                    "value": "\n          "
                  },
                  {
                    "type": "element",
                    "tag": "h1",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "api-virtual-accounts.h1.0004",
                        "value": "Virtual Accounts API"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": "\n          "
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
                        "id": "api-virtual-accounts.p.0005",
                        "value": "A Virtual Account is a unique bank account number issued for a single customer or transaction, so funds reconcile automatically. The same Purchases API creates the PayIn; what pins it to Virtual Accounts is the "
                      },
                      {
                        "type": "element",
                        "tag": "code",
                        "props": {},
                        "children": [
                          {
                            "type": "text",
                            "id": "api-virtual-accounts.code.0006",
                            "value": "paymentMethod"
                          }
                        ]
                      },
                      {
                        "type": "text",
                        "id": "api-virtual-accounts.p.0007",
                        "value": " code. The response carries a continuation URL that shows the customer their unique account details, and a get status call returns the full purchase and its history."
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": "\n          "
                  },
                  {
                    "type": "element",
                    "tag": "p",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "api-virtual-accounts.p.0008",
                        "value": "Concepts, the PayIn flow and going live live in the "
                      },
                      {
                        "type": "element",
                        "tag": "DocLink",
                        "props": {
                          "className": "inline",
                          "href": "/virtual-accounts"
                        },
                        "children": [
                          {
                            "type": "text",
                            "id": "api-virtual-accounts.doclink.0009",
                            "value": "Virtual Accounts guide"
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
                    "value": "\n          "
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
                        "value": "\n            "
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
                                        "id": "api-virtual-accounts.th.0010",
                                        "value": "Operation"
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
                                        "id": "api-virtual-accounts.th.0011",
                                        "value": "Method code"
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
                                        "id": "api-virtual-accounts.th.0012",
                                        "value": "Endpoint"
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
                                            "id": "api-virtual-accounts.b.0013",
                                            "value": "PayIn (collect)"
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
                                        "tag": "code",
                                        "props": {},
                                        "children": [
                                          {
                                            "type": "text",
                                            "id": "api-virtual-accounts.code.0014",
                                            "value": "VIRTUAL-ACCOUNT"
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
                                        "tag": "code",
                                        "props": {},
                                        "children": [
                                          {
                                            "type": "text",
                                            "id": "api-virtual-accounts.code.0015",
                                            "value": "POST /purchases"
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
                                            "id": "api-virtual-accounts.b.0016",
                                            "value": "PayIn status"
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
                                  },
                                  {
                                    "type": "element",
                                    "tag": "td",
                                    "props": {},
                                    "children": [
                                      {
                                        "type": "element",
                                        "tag": "code",
                                        "props": {},
                                        "children": [
                                          {
                                            "type": "text",
                                            "id": "api-virtual-accounts.code.0017",
                                            "value": "GET /purchases/{purchaseId}/"
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
                        "value": "\n          "
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": "\n          "
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
                        "value": "\n            "
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
                                  "d": "M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"
                                },
                                "children": []
                              },
                              {
                                "type": "element",
                                "tag": "path",
                                "props": {
                                  "d": "M4 22v-7"
                                },
                                "children": []
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "type": "text",
                        "value": "\n            "
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
                                "id": "api-virtual-accounts.b.0018",
                                "value": "KRW only, and asynchronous."
                              }
                            ]
                          },
                          {
                            "type": "text",
                            "id": "api-virtual-accounts.p.0019",
                            "value": " Country must be "
                          },
                          {
                            "type": "element",
                            "tag": "code",
                            "props": {},
                            "children": [
                              {
                                "type": "text",
                                "id": "api-virtual-accounts.code.0020",
                                "value": "KR"
                              }
                            ]
                          },
                          {
                            "type": "text",
                            "id": "api-virtual-accounts.p.0021",
                            "value": " and currency "
                          },
                          {
                            "type": "element",
                            "tag": "code",
                            "props": {},
                            "children": [
                              {
                                "type": "text",
                                "id": "api-virtual-accounts.code.0022",
                                "value": "KRW"
                              }
                            ]
                          },
                          {
                            "type": "text",
                            "id": "api-virtual-accounts.p.0023",
                            "value": ". A purchase can sit in "
                          },
                          {
                            "type": "element",
                            "tag": "code",
                            "props": {},
                            "children": [
                              {
                                "type": "text",
                                "id": "api-virtual-accounts.code.0024",
                                "value": "payment_in_process"
                              }
                            ]
                          },
                          {
                            "type": "text",
                            "id": "api-virtual-accounts.p.0025",
                            "value": " while the customer completes the transfer from their banking app, so treat the webhook, not the redirect, as the source of truth."
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
            "value": "\n\n      "
          },
          {
            "type": "element",
            "tag": "div",
            "props": {
              "className": "api-section",
              "id": "payin"
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
                  "className": "api-prose"
                },
                "children": [
                  {
                    "type": "text",
                    "value": "\n          "
                  },
                  {
                    "type": "element",
                    "tag": "h2",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "api-virtual-accounts.h2.0026",
                        "value": "PayIn: create a purchase"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": "\n          "
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
                            "id": "api-virtual-accounts.span.0027",
                            "value": "POST"
                          }
                        ]
                      },
                      {
                        "type": "text",
                        "id": "api-virtual-accounts.div.0028",
                        "value": "/purchases"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": "\n          "
                  },
                  {
                    "type": "element",
                    "tag": "p",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "api-virtual-accounts.p.0029",
                        "value": "Same envelope as the "
                      },
                      {
                        "type": "element",
                        "tag": "DocLink",
                        "props": {
                          "className": "inline",
                          "href": "/api-reference#create-purchase"
                        },
                        "children": [
                          {
                            "type": "text",
                            "id": "api-virtual-accounts.doclink.0030",
                            "value": "core purchase"
                          }
                        ]
                      },
                      {
                        "type": "text",
                        "id": "api-virtual-accounts.p.0031",
                        "value": ", pinned to Virtual Accounts with "
                      },
                      {
                        "type": "element",
                        "tag": "code",
                        "props": {},
                        "children": [
                          {
                            "type": "text",
                            "id": "api-virtual-accounts.code.0032",
                            "value": "paymentMethod"
                          }
                        ]
                      },
                      {
                        "type": "text",
                        "id": "api-virtual-accounts.p.0033",
                        "value": ". Paysecure returns a purchase ID and a "
                      },
                      {
                        "type": "element",
                        "tag": "code",
                        "props": {},
                        "children": [
                          {
                            "type": "text",
                            "id": "api-virtual-accounts.code.0034",
                            "value": "checkout_url"
                          }
                        ]
                      },
                      {
                        "type": "text",
                        "id": "api-virtual-accounts.p.0035",
                        "value": " for the customer to continue, where they are shown their unique bank account details. The customer then adds that account as a beneficiary in their banking app and transfers the amount; Paysecure sends a webhook when the funds arrive."
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": "\n          "
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
                        "value": "\n            "
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
                            "tag": "img",
                            "props": {
                              "src": "/assets/virtual-accounts-01-unnamed-2.png",
                              "alt": "Virtual Account PayIn API flow: create the purchase, the customer is shown a unique bank account, transfers the funds, and Get Status plus a webhook confirm the payment",
                              "loading": "lazy"
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
                        "tag": "figcaption",
                        "props": {},
                        "children": [
                          {
                            "type": "text",
                            "id": "api-virtual-accounts.figcaption.0036",
                            "value": "Figure 1 · PayIn API flow"
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
                    "type": "element",
                    "tag": "h3",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "api-virtual-accounts.h3.0037",
                        "value": "Request parameters"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": "\n          "
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
                        "value": "\n            "
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
                                        "id": "api-virtual-accounts.th.0038",
                                        "value": "Field"
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
                                        "id": "api-virtual-accounts.th.0039",
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
                                        "id": "api-virtual-accounts.th.0040",
                                        "value": "Required"
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
                                        "id": "api-virtual-accounts.th.0041",
                                        "value": "Description"
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
                                        "tag": "code",
                                        "props": {},
                                        "children": [
                                          {
                                            "type": "text",
                                            "id": "api-virtual-accounts.code.0042",
                                            "value": "paymentMethod"
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
                                        "id": "api-virtual-accounts.td.0043",
                                        "value": "string"
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
                                        "id": "api-virtual-accounts.td.0044",
                                        "value": "Required"
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
                                        "tag": "code",
                                        "props": {},
                                        "children": [
                                          {
                                            "type": "text",
                                            "id": "api-virtual-accounts.code.0045",
                                            "value": "VIRTUAL-ACCOUNT"
                                          }
                                        ]
                                      },
                                      {
                                        "type": "text",
                                        "value": "."
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
                                        "tag": "code",
                                        "props": {},
                                        "children": [
                                          {
                                            "type": "text",
                                            "id": "api-virtual-accounts.code.0046",
                                            "value": "purchase.currency"
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
                                        "id": "api-virtual-accounts.td.0047",
                                        "value": "string"
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
                                        "id": "api-virtual-accounts.td.0048",
                                        "value": "Required"
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
                                        "id": "api-virtual-accounts.td.0049",
                                        "value": "Must be "
                                      },
                                      {
                                        "type": "element",
                                        "tag": "code",
                                        "props": {},
                                        "children": [
                                          {
                                            "type": "text",
                                            "id": "api-virtual-accounts.code.0050",
                                            "value": "KRW"
                                          }
                                        ]
                                      },
                                      {
                                        "type": "text",
                                        "value": "."
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
                                        "tag": "code",
                                        "props": {},
                                        "children": [
                                          {
                                            "type": "text",
                                            "id": "api-virtual-accounts.code.0051",
                                            "value": "purchase.products[].name"
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
                                        "id": "api-virtual-accounts.td.0052",
                                        "value": "string"
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
                                        "id": "api-virtual-accounts.td.0053",
                                        "value": "Required"
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
                                        "id": "api-virtual-accounts.td.0054",
                                        "value": "Name of the product or service."
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
                                        "tag": "code",
                                        "props": {},
                                        "children": [
                                          {
                                            "type": "text",
                                            "id": "api-virtual-accounts.code.0055",
                                            "value": "purchase.products[].price"
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
                                        "id": "api-virtual-accounts.td.0056",
                                        "value": "number"
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
                                        "id": "api-virtual-accounts.td.0057",
                                        "value": "Required"
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
                                        "id": "api-virtual-accounts.td.0058",
                                        "value": "Price in major units. KRW has no minor units, so KRW 100 is sent as "
                                      },
                                      {
                                        "type": "element",
                                        "tag": "code",
                                        "props": {},
                                        "children": [
                                          {
                                            "type": "text",
                                            "id": "api-virtual-accounts.code.0059",
                                            "value": "100"
                                          }
                                        ]
                                      },
                                      {
                                        "type": "text",
                                        "value": "."
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
                                        "tag": "code",
                                        "props": {},
                                        "children": [
                                          {
                                            "type": "text",
                                            "id": "api-virtual-accounts.code.0060",
                                            "value": "client.email"
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
                                        "id": "api-virtual-accounts.td.0061",
                                        "value": "string"
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
                                        "id": "api-virtual-accounts.td.0062",
                                        "value": "Required"
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
                                        "id": "api-virtual-accounts.td.0063",
                                        "value": "Customer email address."
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
                                        "tag": "code",
                                        "props": {},
                                        "children": [
                                          {
                                            "type": "text",
                                            "id": "api-virtual-accounts.code.0064",
                                            "value": "client.full_name"
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
                                        "id": "api-virtual-accounts.td.0065",
                                        "value": "string"
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
                                        "id": "api-virtual-accounts.td.0066",
                                        "value": "Required"
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
                                        "id": "api-virtual-accounts.td.0067",
                                        "value": "Customer full name."
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
                                        "tag": "code",
                                        "props": {},
                                        "children": [
                                          {
                                            "type": "text",
                                            "id": "api-virtual-accounts.code.0068",
                                            "value": "client.street_address"
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
                                        "id": "api-virtual-accounts.td.0069",
                                        "value": "string"
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
                                        "id": "api-virtual-accounts.td.0070",
                                        "value": "Required"
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
                                        "id": "api-virtual-accounts.td.0071",
                                        "value": "Customer street address."
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
                                        "tag": "code",
                                        "props": {},
                                        "children": [
                                          {
                                            "type": "text",
                                            "id": "api-virtual-accounts.code.0072",
                                            "value": "client.city"
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
                                        "id": "api-virtual-accounts.td.0073",
                                        "value": "string"
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
                                        "id": "api-virtual-accounts.td.0074",
                                        "value": "Required"
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
                                        "id": "api-virtual-accounts.td.0075",
                                        "value": "Customer city."
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
                                        "tag": "code",
                                        "props": {},
                                        "children": [
                                          {
                                            "type": "text",
                                            "id": "api-virtual-accounts.code.0076",
                                            "value": "client.zip_code"
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
                                        "id": "api-virtual-accounts.td.0077",
                                        "value": "string"
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
                                        "id": "api-virtual-accounts.td.0078",
                                        "value": "Required"
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
                                        "id": "api-virtual-accounts.td.0079",
                                        "value": "Customer postal code."
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
                                        "tag": "code",
                                        "props": {},
                                        "children": [
                                          {
                                            "type": "text",
                                            "id": "api-virtual-accounts.code.0080",
                                            "value": "client.phone"
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
                                        "id": "api-virtual-accounts.td.0081",
                                        "value": "string"
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
                                        "id": "api-virtual-accounts.td.0082",
                                        "value": "Required"
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
                                        "id": "api-virtual-accounts.td.0083",
                                        "value": "Customer phone number in international format."
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
                                        "tag": "code",
                                        "props": {},
                                        "children": [
                                          {
                                            "type": "text",
                                            "id": "api-virtual-accounts.code.0084",
                                            "value": "client.country"
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
                                        "id": "api-virtual-accounts.td.0085",
                                        "value": "string"
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
                                        "id": "api-virtual-accounts.td.0086",
                                        "value": "Required"
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
                                        "id": "api-virtual-accounts.td.0087",
                                        "value": "ISO 3166 alpha-2, upper case. Must be "
                                      },
                                      {
                                        "type": "element",
                                        "tag": "code",
                                        "props": {},
                                        "children": [
                                          {
                                            "type": "text",
                                            "id": "api-virtual-accounts.code.0088",
                                            "value": "KR"
                                          }
                                        ]
                                      },
                                      {
                                        "type": "text",
                                        "id": "api-virtual-accounts.td.0089",
                                        "value": " for Virtual Accounts."
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
                                        "tag": "code",
                                        "props": {},
                                        "children": [
                                          {
                                            "type": "text",
                                            "id": "api-virtual-accounts.code.0090",
                                            "value": "client.stateCode"
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
                                        "id": "api-virtual-accounts.td.0091",
                                        "value": "string"
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
                                        "id": "api-virtual-accounts.td.0092",
                                        "value": "Required"
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
                                        "id": "api-virtual-accounts.td.0093",
                                        "value": "Province or city code, upper case, for example "
                                      },
                                      {
                                        "type": "element",
                                        "tag": "code",
                                        "props": {},
                                        "children": [
                                          {
                                            "type": "text",
                                            "id": "api-virtual-accounts.code.0094",
                                            "value": "11"
                                          }
                                        ]
                                      },
                                      {
                                        "type": "text",
                                        "id": "api-virtual-accounts.td.0095",
                                        "value": " for Seoul."
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
                                        "tag": "code",
                                        "props": {},
                                        "children": [
                                          {
                                            "type": "text",
                                            "id": "api-virtual-accounts.code.0096",
                                            "value": "client.date_of_birth"
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
                                        "id": "api-virtual-accounts.td.0097",
                                        "value": "string"
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
                                        "id": "api-virtual-accounts.td.0098",
                                        "value": "Required"
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
                                        "id": "api-virtual-accounts.td.0099",
                                        "value": "Customer date of birth in "
                                      },
                                      {
                                        "type": "element",
                                        "tag": "code",
                                        "props": {},
                                        "children": [
                                          {
                                            "type": "text",
                                            "id": "api-virtual-accounts.code.0100",
                                            "value": "YYYY-MM-DD"
                                          }
                                        ]
                                      },
                                      {
                                        "type": "text",
                                        "id": "api-virtual-accounts.td.0101",
                                        "value": " format."
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
                                        "tag": "code",
                                        "props": {},
                                        "children": [
                                          {
                                            "type": "text",
                                            "id": "api-virtual-accounts.code.0102",
                                            "value": "brand_id"
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
                                        "id": "api-virtual-accounts.td.0103",
                                        "value": "string"
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
                                        "id": "api-virtual-accounts.td.0104",
                                        "value": "Required"
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
                                        "id": "api-virtual-accounts.td.0105",
                                        "value": "From the Dashboard section of your merchant account."
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
                                        "tag": "code",
                                        "props": {},
                                        "children": [
                                          {
                                            "type": "text",
                                            "id": "api-virtual-accounts.code.0106",
                                            "value": "success_redirect"
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
                                        "id": "api-virtual-accounts.td.0107",
                                        "value": "url"
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
                                        "id": "api-virtual-accounts.td.0108",
                                        "value": "Required"
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
                                        "id": "api-virtual-accounts.td.0109",
                                        "value": "Where the customer returns after a successful payment."
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
                                        "tag": "code",
                                        "props": {},
                                        "children": [
                                          {
                                            "type": "text",
                                            "id": "api-virtual-accounts.code.0110",
                                            "value": "pending_redirect"
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
                                        "id": "api-virtual-accounts.td.0111",
                                        "value": "url"
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
                                        "id": "api-virtual-accounts.td.0112",
                                        "value": "Required"
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
                                        "id": "api-virtual-accounts.td.0113",
                                        "value": "Where the customer returns while the payment is still pending."
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
                                        "tag": "code",
                                        "props": {},
                                        "children": [
                                          {
                                            "type": "text",
                                            "id": "api-virtual-accounts.code.0114",
                                            "value": "failure_redirect"
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
                                        "id": "api-virtual-accounts.td.0115",
                                        "value": "url"
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
                                        "id": "api-virtual-accounts.td.0116",
                                        "value": "Required"
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
                                        "id": "api-virtual-accounts.td.0117",
                                        "value": "Where the customer returns after a failed payment."
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
                                        "tag": "code",
                                        "props": {},
                                        "children": [
                                          {
                                            "type": "text",
                                            "id": "api-virtual-accounts.code.0118",
                                            "value": "success_callback"
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
                                        "id": "api-virtual-accounts.td.0119",
                                        "value": "url"
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
                                        "id": "api-virtual-accounts.td.0120",
                                        "value": "Recommended"
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
                                        "id": "api-virtual-accounts.td.0121",
                                        "value": "Server-to-server webhook Paysecure POSTs to on success. Use this, not the redirect, as the source of truth."
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
                                        "tag": "code",
                                        "props": {},
                                        "children": [
                                          {
                                            "type": "text",
                                            "id": "api-virtual-accounts.code.0122",
                                            "value": "failure_callback"
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
                                        "id": "api-virtual-accounts.td.0123",
                                        "value": "url"
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
                                        "id": "api-virtual-accounts.td.0124",
                                        "value": "Recommended"
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
                                        "id": "api-virtual-accounts.td.0125",
                                        "value": "Server-to-server webhook Paysecure POSTs to on failure."
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
                        "value": "\n          "
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": "\n          "
                  },
                  {
                    "type": "element",
                    "tag": "h3",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "api-virtual-accounts.h3.0126",
                        "value": "Response fields"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": "\n          "
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
                        "value": "\n            "
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
                                        "id": "api-virtual-accounts.th.0127",
                                        "value": "Field"
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
                                        "id": "api-virtual-accounts.th.0128",
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
                                        "id": "api-virtual-accounts.th.0129",
                                        "value": "Description"
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
                                        "tag": "code",
                                        "props": {},
                                        "children": [
                                          {
                                            "type": "text",
                                            "id": "api-virtual-accounts.code.0130",
                                            "value": "purchaseId"
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
                                        "id": "api-virtual-accounts.td.0131",
                                        "value": "string"
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
                                        "id": "api-virtual-accounts.td.0132",
                                        "value": "Unique purchase identifier generated by Paysecure."
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
                                        "tag": "code",
                                        "props": {},
                                        "children": [
                                          {
                                            "type": "text",
                                            "id": "api-virtual-accounts.code.0133",
                                            "value": "status"
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
                                        "id": "api-virtual-accounts.td.0134",
                                        "value": "string"
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
                                        "id": "api-virtual-accounts.td.0135",
                                        "value": "Current status: "
                                      },
                                      {
                                        "type": "element",
                                        "tag": "code",
                                        "props": {},
                                        "children": [
                                          {
                                            "type": "text",
                                            "id": "api-virtual-accounts.code.0136",
                                            "value": "CREATED"
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
                                            "id": "api-virtual-accounts.code.0137",
                                            "value": "payment_in_process"
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
                                            "id": "api-virtual-accounts.code.0138",
                                            "value": "paid"
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
                                            "id": "api-virtual-accounts.code.0139",
                                            "value": "expired"
                                          }
                                        ]
                                      },
                                      {
                                        "type": "text",
                                        "id": "api-virtual-accounts.td.0140",
                                        "value": " or "
                                      },
                                      {
                                        "type": "element",
                                        "tag": "code",
                                        "props": {},
                                        "children": [
                                          {
                                            "type": "text",
                                            "id": "api-virtual-accounts.code.0141",
                                            "value": "error"
                                          }
                                        ]
                                      },
                                      {
                                        "type": "text",
                                        "id": "api-virtual-accounts.td.0142",
                                        "value": ". Also repeated in "
                                      },
                                      {
                                        "type": "element",
                                        "tag": "code",
                                        "props": {},
                                        "children": [
                                          {
                                            "type": "text",
                                            "id": "api-virtual-accounts.code.0143",
                                            "value": "status_history"
                                          }
                                        ]
                                      },
                                      {
                                        "type": "text",
                                        "value": "."
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
                                        "tag": "code",
                                        "props": {},
                                        "children": [
                                          {
                                            "type": "text",
                                            "id": "api-virtual-accounts.code.0144",
                                            "value": "paymentMethod"
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
                                        "id": "api-virtual-accounts.td.0145",
                                        "value": "string"
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
                                        "id": "api-virtual-accounts.td.0146",
                                        "value": "The method used, "
                                      },
                                      {
                                        "type": "element",
                                        "tag": "code",
                                        "props": {},
                                        "children": [
                                          {
                                            "type": "text",
                                            "id": "api-virtual-accounts.code.0147",
                                            "value": "VIRTUAL-ACCOUNT"
                                          }
                                        ]
                                      },
                                      {
                                        "type": "text",
                                        "value": "."
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
                                        "tag": "code",
                                        "props": {},
                                        "children": [
                                          {
                                            "type": "text",
                                            "id": "api-virtual-accounts.code.0148",
                                            "value": "amountUnit"
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
                                        "id": "api-virtual-accounts.td.0149",
                                        "value": "string"
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
                                        "tag": "code",
                                        "props": {},
                                        "children": [
                                          {
                                            "type": "text",
                                            "id": "api-virtual-accounts.code.0150",
                                            "value": "MAJOR"
                                          }
                                        ]
                                      },
                                      {
                                        "type": "text",
                                        "id": "api-virtual-accounts.td.0151",
                                        "value": " for full currency units, "
                                      },
                                      {
                                        "type": "element",
                                        "tag": "code",
                                        "props": {},
                                        "children": [
                                          {
                                            "type": "text",
                                            "id": "api-virtual-accounts.code.0152",
                                            "value": "MINOR"
                                          }
                                        ]
                                      },
                                      {
                                        "type": "text",
                                        "id": "api-virtual-accounts.td.0153",
                                        "value": " for subunits."
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
                                        "tag": "code",
                                        "props": {},
                                        "children": [
                                          {
                                            "type": "text",
                                            "id": "api-virtual-accounts.code.0154",
                                            "value": "errorMsg"
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
                                        "id": "api-virtual-accounts.td.0155",
                                        "value": "string"
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
                                        "id": "api-virtual-accounts.td.0156",
                                        "value": "Human-readable result or, on failure, the error detail."
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
                                        "tag": "code",
                                        "props": {},
                                        "children": [
                                          {
                                            "type": "text",
                                            "id": "api-virtual-accounts.code.0157",
                                            "value": "merchantRef"
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
                                            "id": "api-virtual-accounts.code.0158",
                                            "value": "merchantName"
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
                                        "id": "api-virtual-accounts.td.0159",
                                        "value": "string"
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
                                        "id": "api-virtual-accounts.td.0160",
                                        "value": "Your reference echoed back (or an internal id) and your registered merchant name."
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
                                        "tag": "code",
                                        "props": {},
                                        "children": [
                                          {
                                            "type": "text",
                                            "id": "api-virtual-accounts.code.0161",
                                            "value": "client"
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
                                        "id": "api-virtual-accounts.td.0162",
                                        "value": "object"
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
                                        "id": "api-virtual-accounts.td.0163",
                                        "value": "Echo of the customer: "
                                      },
                                      {
                                        "type": "element",
                                        "tag": "code",
                                        "props": {},
                                        "children": [
                                          {
                                            "type": "text",
                                            "id": "api-virtual-accounts.code.0164",
                                            "value": "email"
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
                                            "id": "api-virtual-accounts.code.0165",
                                            "value": "phone"
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
                                            "id": "api-virtual-accounts.code.0166",
                                            "value": "full_name"
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
                                            "id": "api-virtual-accounts.code.0167",
                                            "value": "country"
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
                                            "id": "api-virtual-accounts.code.0168",
                                            "value": "city"
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
                                            "id": "api-virtual-accounts.code.0169",
                                            "value": "zip_code"
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
                                            "id": "api-virtual-accounts.code.0170",
                                            "value": "stateCode"
                                          }
                                        ]
                                      },
                                      {
                                        "type": "text",
                                        "value": ". "
                                      },
                                      {
                                        "type": "element",
                                        "tag": "code",
                                        "props": {},
                                        "children": [
                                          {
                                            "type": "text",
                                            "id": "api-virtual-accounts.code.0171",
                                            "value": "customerId"
                                          }
                                        ]
                                      },
                                      {
                                        "type": "text",
                                        "id": "api-virtual-accounts.td.0172",
                                        "value": " is "
                                      },
                                      {
                                        "type": "element",
                                        "tag": "code",
                                        "props": {},
                                        "children": [
                                          {
                                            "type": "text",
                                            "id": "api-virtual-accounts.code.0173",
                                            "value": "NA"
                                          }
                                        ]
                                      },
                                      {
                                        "type": "text",
                                        "id": "api-virtual-accounts.td.0174",
                                        "value": " when the customer is not saved."
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
                                        "tag": "code",
                                        "props": {},
                                        "children": [
                                          {
                                            "type": "text",
                                            "id": "api-virtual-accounts.code.0175",
                                            "value": "purchase"
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
                                        "id": "api-virtual-accounts.td.0176",
                                        "value": "object"
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
                                        "tag": "code",
                                        "props": {},
                                        "children": [
                                          {
                                            "type": "text",
                                            "id": "api-virtual-accounts.code.0177",
                                            "value": "currency"
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
                                            "id": "api-virtual-accounts.code.0178",
                                            "value": "products[]"
                                          }
                                        ]
                                      },
                                      {
                                        "type": "text",
                                        "id": "api-virtual-accounts.td.0179",
                                        "value": " (name, quantity, price, discount, tax_percent) and "
                                      },
                                      {
                                        "type": "element",
                                        "tag": "code",
                                        "props": {},
                                        "children": [
                                          {
                                            "type": "text",
                                            "id": "api-virtual-accounts.code.0180",
                                            "value": "total"
                                          }
                                        ]
                                      },
                                      {
                                        "type": "text",
                                        "value": "."
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
                                        "tag": "code",
                                        "props": {},
                                        "children": [
                                          {
                                            "type": "text",
                                            "id": "api-virtual-accounts.code.0181",
                                            "value": "reference_generated"
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
                                        "id": "api-virtual-accounts.td.0182",
                                        "value": "string"
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
                                        "id": "api-virtual-accounts.td.0183",
                                        "value": "Human-readable Paysecure reference for the purchase."
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
                                        "tag": "code",
                                        "props": {},
                                        "children": [
                                          {
                                            "type": "text",
                                            "id": "api-virtual-accounts.code.0184",
                                            "value": "status_history[]"
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
                                        "id": "api-virtual-accounts.td.0185",
                                        "value": "array"
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
                                        "id": "api-virtual-accounts.td.0186",
                                        "value": "Every status the purchase passed through, each with a UNIX "
                                      },
                                      {
                                        "type": "element",
                                        "tag": "code",
                                        "props": {},
                                        "children": [
                                          {
                                            "type": "text",
                                            "id": "api-virtual-accounts.code.0187",
                                            "value": "timestamp"
                                          }
                                        ]
                                      },
                                      {
                                        "type": "text",
                                        "value": "."
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
                                        "tag": "code",
                                        "props": {},
                                        "children": [
                                          {
                                            "type": "text",
                                            "id": "api-virtual-accounts.code.0188",
                                            "value": "checkout_url"
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
                                        "id": "api-virtual-accounts.td.0189",
                                        "value": "string"
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
                                        "id": "api-virtual-accounts.td.0190",
                                        "value": "Continuation URL to send the customer to, where they are shown their unique bank account details for the transfer."
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
                                        "tag": "code",
                                        "props": {},
                                        "children": [
                                          {
                                            "type": "text",
                                            "id": "api-virtual-accounts.code.0191",
                                            "value": "is_test"
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
                                        "id": "api-virtual-accounts.td.0192",
                                        "value": "boolean"
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
                                        "tag": "code",
                                        "props": {},
                                        "children": [
                                          {
                                            "type": "text",
                                            "id": "api-virtual-accounts.code.0193",
                                            "value": "true"
                                          }
                                        ]
                                      },
                                      {
                                        "type": "text",
                                        "id": "api-virtual-accounts.td.0194",
                                        "value": " for a test purchase, "
                                      },
                                      {
                                        "type": "element",
                                        "tag": "code",
                                        "props": {},
                                        "children": [
                                          {
                                            "type": "text",
                                            "id": "api-virtual-accounts.code.0195",
                                            "value": "false"
                                          }
                                        ]
                                      },
                                      {
                                        "type": "text",
                                        "id": "api-virtual-accounts.td.0196",
                                        "value": " in live."
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
                        "value": "\n          "
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": "\n          "
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
                        "value": "\n            "
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
                                  "d": "M12 16v-4M12 8h.01"
                                },
                                "children": []
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "type": "text",
                        "value": "\n            "
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
                                "id": "api-virtual-accounts.b.0197",
                                "value": "Send the customer to "
                              },
                              {
                                "type": "element",
                                "tag": "code",
                                "props": {},
                                "children": [
                                  {
                                    "type": "text",
                                    "id": "api-virtual-accounts.code.0198",
                                    "value": "checkout_url"
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
                            "id": "api-virtual-accounts.p.0199",
                            "value": " This is the continuation URL that displays the unique bank account details the customer must transfer to. Reconcile on the webhook or Get Status, not on the redirect back."
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
                    "type": "element",
                    "tag": "div",
                    "props": {
                      "className": "callout info"
                    },
                    "children": [
                      {
                        "type": "text",
                        "value": "\n            "
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
                                  "d": "M12 16v-4M12 8h.01"
                                },
                                "children": []
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "type": "text",
                        "value": "\n            "
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
                                "id": "api-virtual-accounts.b.0200",
                                "value": "Brand ID and API key."
                              }
                            ]
                          },
                          {
                            "type": "text",
                            "id": "api-virtual-accounts.p.0201",
                            "value": " To generate a purchase you must pass the "
                          },
                          {
                            "type": "element",
                            "tag": "code",
                            "props": {},
                            "children": [
                              {
                                "type": "text",
                                "id": "api-virtual-accounts.code.0202",
                                "value": "brand_id"
                              }
                            ]
                          },
                          {
                            "type": "text",
                            "id": "api-virtual-accounts.p.0203",
                            "value": " in the request body and the API key in the header. Both are in the Dashboard section of your merchant account login."
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
                "tag": "div",
                "props": {
                  "className": "api-code"
                },
                "children": [
                  {
                    "type": "element",
                    "tag": "div",
                    "props": {
                      "className": "sticky"
                    },
                    "children": [
                      {
                        "type": "text",
                        "value": "\n          "
                      },
                      {
                        "type": "element",
                        "tag": "TryIt",
                        "props": {
                          "method": "POST",
                          "url": "/purchases",
                          "config": {
                            "fields": [
                              {
                                "k": "client.email",
                                "v": "user@example.com",
                                "req": true
                              },
                              {
                                "k": "client.street_address",
                                "v": "1 Test Street",
                                "req": true
                              },
                              {
                                "k": "client.city",
                                "v": "Seoul",
                                "req": true
                              },
                              {
                                "k": "client.full_name",
                                "v": "Test User",
                                "req": true
                              },
                              {
                                "k": "client.zip_code",
                                "v": "10001",
                                "req": true
                              },
                              {
                                "k": "client.country",
                                "v": "KR",
                                "req": true
                              },
                              {
                                "k": "client.stateCode",
                                "v": "11",
                                "req": true
                              },
                              {
                                "k": "client.phone",
                                "v": "+15555550123",
                                "req": true
                              },
                              {
                                "k": "client.date_of_birth",
                                "v": "1990-01-01",
                                "req": true
                              },
                              {
                                "k": "purchase.currency",
                                "v": "KRW",
                                "req": true
                              },
                              {
                                "k": "purchase.products[0].name",
                                "v": "Test User",
                                "req": true
                              },
                              {
                                "k": "purchase.products[0].price",
                                "v": "100",
                                "req": true
                              },
                              {
                                "k": "paymentMethod",
                                "v": "VIRTUAL-ACCOUNT",
                                "req": true
                              },
                              {
                                "k": "brand_id",
                                "v": "{{BrandId}}",
                                "req": true
                              },
                              {
                                "k": "success_redirect",
                                "v": "https://merchant.example/success-redirect",
                                "req": true
                              },
                              {
                                "k": "pending_redirect",
                                "v": "https://merchant.example/pending-redirect",
                                "req": true
                              },
                              {
                                "k": "failure_redirect",
                                "v": "https://merchant.example/failure-redirect",
                                "req": true
                              },
                              {
                                "k": "success_callback",
                                "v": "https://merchant.example/success-callback",
                                "req": false
                              },
                              {
                                "k": "failure_callback",
                                "v": "https://merchant.example/failure-callback",
                                "req": false
                              }
                            ],
                            "status": "202 Accepted",
                            "response": {
                              "purchaseId": "68441c2a7559cf659fd7e835",
                              "status": "CREATED",
                              "paymentMethod": "VIRTUAL-ACCOUNT",
                              "amountUnit": "MAJOR",
                              "errorMsg": "",
                              "merchantRef": "order-12345",
                              "merchantName": "Test Merchant",
                              "client": {
                                "customerId": "NA",
                                "email": "user@example.com",
                                "phone": "+15555550123",
                                "full_name": "Test User",
                                "country": "KR",
                                "city": "Seoul",
                                "zip_code": "10001",
                                "stateCode": "11"
                              },
                              "purchase": {
                                "currency": "KRW",
                                "products": [
                                  {
                                    "name": "Test User",
                                    "quantity": 1,
                                    "price": 100
                                  }
                                ],
                                "total": 100
                              },
                              "reference_generated": "PS19963",
                              "status_history": [
                                {
                                  "status": "created",
                                  "timestamp": 1749294123
                                }
                              ],
                              "checkout_url": "https://app.paysecure.net/payments/68441c2a7559cf659fd7e835/",
                              "is_test": false
                            },
                            "errorStatus": "400 Bad Request",
                            "errorResponse": {
                              "message": "some Mandatory Parameter are missing",
                              "code": "Invalid_Parameter"
                            }
                          }
                        },
                        "children": []
                      },
                      {
                        "type": "text",
                        "value": "\n        "
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
              "className": "api-section",
              "id": "payin-status"
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
                  "className": "api-prose"
                },
                "children": [
                  {
                    "type": "text",
                    "value": "\n          "
                  },
                  {
                    "type": "element",
                    "tag": "h2",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "api-virtual-accounts.h2.0204",
                        "value": "PayIn: get status"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": "\n          "
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
                            "id": "api-virtual-accounts.span.0205",
                            "value": "GET"
                          }
                        ]
                      },
                      {
                        "type": "text",
                        "id": "api-virtual-accounts.div.0206",
                        "value": "/purchases/{purchaseId}/"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": "\n          "
                  },
                  {
                    "type": "element",
                    "tag": "p",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "api-virtual-accounts.p.0207",
                        "value": "Returns all the details of a purchase (PayIn), including its status history and the "
                      },
                      {
                        "type": "element",
                        "tag": "code",
                        "props": {},
                        "children": [
                          {
                            "type": "text",
                            "id": "api-virtual-accounts.code.0208",
                            "value": "checkout_url"
                          }
                        ]
                      },
                      {
                        "type": "text",
                        "id": "api-virtual-accounts.p.0209",
                        "value": ". With respect to bank transfers, the purchase request is synonymous with the PayIn request. You must pass the "
                      },
                      {
                        "type": "element",
                        "tag": "code",
                        "props": {},
                        "children": [
                          {
                            "type": "text",
                            "id": "api-virtual-accounts.code.0210",
                            "value": "purchaseId"
                          }
                        ]
                      },
                      {
                        "type": "text",
                        "id": "api-virtual-accounts.p.0211",
                        "value": " in the API URL."
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": "\n          "
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
                        "value": "\n            "
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
                                        "id": "api-virtual-accounts.th.0212",
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
                                        "id": "api-virtual-accounts.th.0213",
                                        "value": "Meaning"
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
                                            "id": "api-virtual-accounts.span.0214",
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
                                        "id": "api-virtual-accounts.td.0215",
                                        "value": "Funds received and matched"
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
                                            "id": "api-virtual-accounts.span.0216",
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
                                        "id": "api-virtual-accounts.td.0217",
                                        "value": "Customer is completing the transfer in their bank"
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
                                            "id": "api-virtual-accounts.span.0218",
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
                                        "id": "api-virtual-accounts.td.0219",
                                        "value": "Not completed within the payment window"
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
                                            "id": "api-virtual-accounts.span.0220",
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
                                        "id": "api-virtual-accounts.td.0221",
                                        "value": "Failed; see "
                                      },
                                      {
                                        "type": "element",
                                        "tag": "code",
                                        "props": {},
                                        "children": [
                                          {
                                            "type": "text",
                                            "id": "api-virtual-accounts.code.0222",
                                            "value": "transaction_data.attempts.error"
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
                        "value": "\n          "
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": "\n          "
                  },
                  {
                    "type": "element",
                    "tag": "p",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "api-virtual-accounts.p.0223",
                        "value": "If there are any errors, the response follows the format "
                      },
                      {
                        "type": "element",
                        "tag": "code",
                        "props": {},
                        "children": [
                          {
                            "type": "text",
                            "id": "api-virtual-accounts.code.0224",
                            "value": "{ \"message\": \"descriptive error message\", \"code\": \"error_code\" }"
                          }
                        ]
                      },
                      {
                        "type": "text",
                        "id": "api-virtual-accounts.p.0225",
                        "value": ". See the status code section for further details."
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": "\n          "
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
                        "id": "api-virtual-accounts.p.0226",
                        "value": "Full request and response fields for the core purchase are in the "
                      },
                      {
                        "type": "element",
                        "tag": "DocLink",
                        "props": {
                          "className": "inline",
                          "href": "/api-reference#create-purchase"
                        },
                        "children": [
                          {
                            "type": "text",
                            "id": "api-virtual-accounts.doclink.0227",
                            "value": "Purchases API"
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
                  "className": "api-code"
                },
                "children": [
                  {
                    "type": "element",
                    "tag": "div",
                    "props": {
                      "className": "sticky"
                    },
                    "children": [
                      {
                        "type": "text",
                        "value": "\n          "
                      },
                      {
                        "type": "element",
                        "tag": "TryIt",
                        "props": {
                          "method": "GET",
                          "url": "/purchases/{purchaseId}/",
                          "config": {
                            "fields": [],
                            "status": "200 OK",
                            "response": {
                              "purchaseId": "65f95faa70fe897720c40a15",
                              "status": "paid",
                              "paymentMethod": "VIRTUAL-ACCOUNT",
                              "amountUnit": "MAJOR",
                              "errorMsg": "Transaction succeeded-APPROVED",
                              "client": {
                                "customerId": "NA",
                                "email": "user@example.com",
                                "full_name": "Test User",
                                "country": "KR",
                                "city": "Seoul",
                                "zip_code": "10001",
                                "stateCode": "11"
                              },
                              "purchase": {
                                "currency": "KRW",
                                "products": [
                                  {
                                    "name": "Test User",
                                    "quantity": 1,
                                    "price": 100
                                  }
                                ],
                                "total": 100
                              },
                              "reference_generated": "PS2697",
                              "status_history": [
                                {
                                  "status": "created",
                                  "timestamp": 1710841770
                                }
                              ],
                              "checkout_url": "https://app.paysecure.net/payments/65f95faa70fe897720c40a15/",
                              "is_test": false
                            },
                            "errorStatus": "400 Bad Request",
                            "errorResponse": {
                              "message": "Error Message",
                              "code": "error_code"
                            }
                          }
                        },
                        "children": []
                      },
                      {
                        "type": "text",
                        "value": "\n        "
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
                  "updated": "Last updated 09 Jul 2026 · v2.4"
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
                      "href": "/api-pay-with-crypto"
                    },
                    "children": [
                      {
                        "type": "element",
                        "tag": "small",
                        "props": {},
                        "children": [
                          {
                            "type": "text",
                            "id": "api-virtual-accounts.small.0228",
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
                            "id": "api-virtual-accounts.b.0229",
                            "value": "← Pay with Crypto"
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
                      "href": "/api-paypal"
                    },
                    "children": [
                      {
                        "type": "element",
                        "tag": "small",
                        "props": {},
                        "children": [
                          {
                            "type": "text",
                            "id": "api-virtual-accounts.small.0230",
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
                            "id": "api-virtual-accounts.b.0231",
                            "value": "PayPal →"
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
