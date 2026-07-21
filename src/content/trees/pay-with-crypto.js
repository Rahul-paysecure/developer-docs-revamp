import { defineDocument } from '../schema.js';

export const payWithCryptoTreeDocument = defineDocument({
  "schemaVersion": 1,
  "slug": "pay-with-crypto",
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
                    "id": "pay-with-crypto.doclink.0001",
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
                    "id": "pay-with-crypto.doclink.0002",
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
                "id": "pay-with-crypto.div.0003",
                "value": "Pay with Crypto"
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
                "id": "pay-with-crypto.h1.0004",
                "value": "Pay with Crypto"
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
                "id": "pay-with-crypto.p.0005",
                "value": "Pay with Crypto lets you price a purchase in fiat while your customer settles in cryptocurrency. You create the purchase in a fiat currency with "
              },
              {
                "type": "element",
                "tag": "code",
                "props": {},
                "children": [
                  {
                    "type": "text",
                    "id": "pay-with-crypto.code.0006",
                    "value": "paymentMethod: \"PAY-WITH-CRYPTO\""
                  }
                ]
              },
              {
                "type": "text",
                "id": "pay-with-crypto.p.0007",
                "value": " and Paysecure returns a "
              },
              {
                "type": "element",
                "tag": "code",
                "props": {},
                "children": [
                  {
                    "type": "text",
                    "id": "pay-with-crypto.code.0008",
                    "value": "checkout_url"
                  }
                ]
              },
              {
                "type": "text",
                "id": "pay-with-crypto.p.0009",
                "value": ". On the hosted checkout the customer picks a token and network, and Paysecure shows a unique wallet address, a QR code and the exact crypto amount to send. On blockchain confirmation Paysecure updates the status and fires a webhook. This is a pay-in only rail."
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
                "id": "pay-with-crypto.overview.0010",
                "value": "Overview"
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
                "id": "pay-with-crypto.p.0011",
                "value": "You keep your prices in fiat; the customer chooses the token and network they want to pay with. Paysecure works out the crypto amount from your fiat total, presents a hosted checkout that shows a one-off wallet address and QR code, and confirms the payment over webhooks once the on-chain transfer clears. No crypto operations are needed on your side."
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
                        "id": "pay-with-crypto.b.0012",
                        "value": "Fiat pricing, crypto settlement:"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "pay-with-crypto.li.0013",
                    "value": " quote and charge in fiat (EUR in these examples), the customer pays on-chain."
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
                        "id": "pay-with-crypto.b.0014",
                        "value": "Hosted checkout:"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "pay-with-crypto.li.0015",
                    "value": " token and network selection, the wallet address, the QR code and the exact amount all live in a secure hosted page returned via "
                  },
                  {
                    "type": "element",
                    "tag": "code",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "pay-with-crypto.code.0016",
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
                        "id": "pay-with-crypto.b.0017",
                        "value": "Unique wallet address per purchase:"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "pay-with-crypto.li.0018",
                    "value": " each purchase gets its own address and QR code to keep reconciliation clean."
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
                        "id": "pay-with-crypto.b.0019",
                        "value": "Exact-amount transfer:"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "pay-with-crypto.li.0020",
                    "value": " the customer sends the displayed crypto amount by scanning the QR code or pasting the address into their wallet."
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
                        "id": "pay-with-crypto.b.0021",
                        "value": "Asynchronous confirmation:"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "pay-with-crypto.li.0022",
                    "value": " the payment is confirmed on blockchain confirmation, not at redirect, so treat the webhook as the source of truth."
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
                        "id": "pay-with-crypto.b.0023",
                        "value": "Pay-in only:"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "pay-with-crypto.li.0024",
                    "value": " Pay with Crypto collects payments; it does not process payouts."
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
              "id": "concepts"
            },
            "children": [
              {
                "type": "text",
                "id": "pay-with-crypto.concepts.0025",
                "value": "Concepts"
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
                                "id": "pay-with-crypto.th.0026",
                                "value": "Concept"
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
                                "id": "pay-with-crypto.th.0027",
                                "value": "Detail"
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
                                    "id": "pay-with-crypto.b.0028",
                                    "value": "Method code"
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
                                "id": "pay-with-crypto.td.0029",
                                "value": "PayIn uses "
                              },
                              {
                                "type": "element",
                                "tag": "code",
                                "props": {},
                                "children": [
                                  {
                                    "type": "text",
                                    "id": "pay-with-crypto.code.0030",
                                    "value": "PAY-WITH-CRYPTO"
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
                                "tag": "b",
                                "props": {
                                  "style": {
                                    "color": "var(--ink)"
                                  }
                                },
                                "children": [
                                  {
                                    "type": "text",
                                    "id": "pay-with-crypto.b.0031",
                                    "value": "Hosted checkout"
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
                                "id": "pay-with-crypto.td.0032",
                                "value": "All customer interactions (token and network selection, the wallet address, the QR code and the exact amount) happen in a secure hosted page returned via "
                              },
                              {
                                "type": "element",
                                "tag": "code",
                                "props": {},
                                "children": [
                                  {
                                    "type": "text",
                                    "id": "pay-with-crypto.code.0033",
                                    "value": "checkout_url"
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
                                "tag": "b",
                                "props": {
                                  "style": {
                                    "color": "var(--ink)"
                                  }
                                },
                                "children": [
                                  {
                                    "type": "text",
                                    "id": "pay-with-crypto.b.0034",
                                    "value": "Token and network selection"
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
                                "id": "pay-with-crypto.td.0035",
                                "value": "The customer chooses their preferred cryptocurrency token and a supported network on the checkout page."
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
                                    "id": "pay-with-crypto.b.0036",
                                    "value": "Unique wallet address and QR code"
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
                                "id": "pay-with-crypto.td.0037",
                                "value": "The checkout generates a one-off receiving address and a QR code for the selected token and network."
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
                                    "id": "pay-with-crypto.b.0038",
                                    "value": "Exact-amount transfer"
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
                                "id": "pay-with-crypto.td.0039",
                                "value": "Paysecure converts the fiat total into the selected crypto and shows the exact amount to send. The customer pays by scanning the QR code or sending the amount to the address."
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
                                    "id": "pay-with-crypto.b.0040",
                                    "value": "Asynchronous confirmation"
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
                                "id": "pay-with-crypto.td.0041",
                                "value": "The purchase stays in "
                              },
                              {
                                "type": "element",
                                "tag": "code",
                                "props": {},
                                "children": [
                                  {
                                    "type": "text",
                                    "id": "pay-with-crypto.code.0042",
                                    "value": "payment_in_process"
                                  }
                                ]
                              },
                              {
                                "type": "text",
                                "id": "pay-with-crypto.td.0043",
                                "value": " until the blockchain confirmation arrives, then Paysecure updates the status and fires a webhook."
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
                                    "id": "pay-with-crypto.b.0044",
                                    "value": "Minimum amount"
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
                                "id": "pay-with-crypto.td.0045",
                                "value": "The minimum transaction amount is "
                              },
                              {
                                "type": "element",
                                "tag": "code",
                                "props": {},
                                "children": [
                                  {
                                    "type": "text",
                                    "id": "pay-with-crypto.code.0046",
                                    "value": "10.00 EUR"
                                  }
                                ]
                              },
                              {
                                "type": "text",
                                "id": "pay-with-crypto.td.0047",
                                "value": ". Anything below that is declined with error code "
                              },
                              {
                                "type": "element",
                                "tag": "code",
                                "props": {},
                                "children": [
                                  {
                                    "type": "text",
                                    "id": "pay-with-crypto.code.0048",
                                    "value": "107"
                                  }
                                ]
                              },
                              {
                                "type": "text",
                                "id": "pay-with-crypto.td.0049",
                                "value": ". The maximum is as configured for your merchant account."
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
                        "id": "pay-with-crypto.b.0050",
                        "value": "On-chain transfers are irreversible."
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "pay-with-crypto.p.0051",
                    "value": " The customer must send the exact amount to the address shown, on the network they selected. A transfer on the wrong network cannot be recovered."
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
              "id": "payment-flow"
            },
            "children": [
              {
                "type": "text",
                "id": "pay-with-crypto.payment-flow.0052",
                "value": "Payment flow"
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
                    "type": "element",
                    "tag": "b",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "pay-with-crypto.b.0053",
                        "value": "Create the purchase:"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "pay-with-crypto.li.0054",
                    "value": " call "
                  },
                  {
                    "type": "element",
                    "tag": "code",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "pay-with-crypto.code.0055",
                        "value": "POST /purchases/"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "pay-with-crypto.li.0056",
                    "value": " with "
                  },
                  {
                    "type": "element",
                    "tag": "code",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "pay-with-crypto.code.0057",
                        "value": "paymentMethod: \"PAY-WITH-CRYPTO\""
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "pay-with-crypto.li.0058",
                    "value": ", the fiat currency and total, the "
                  },
                  {
                    "type": "element",
                    "tag": "code",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "pay-with-crypto.code.0059",
                        "value": "client"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "pay-with-crypto.li.0060",
                    "value": " billing details, and your "
                  },
                  {
                    "type": "element",
                    "tag": "code",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "pay-with-crypto.code.0061",
                        "value": "success_redirect"
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
                        "id": "pay-with-crypto.code.0062",
                        "value": "pending_redirect"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "pay-with-crypto.li.0063",
                    "value": " and "
                  },
                  {
                    "type": "element",
                    "tag": "code",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "pay-with-crypto.code.0064",
                        "value": "failure_redirect"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "pay-with-crypto.li.0065",
                    "value": ". Paysecure returns a "
                  },
                  {
                    "type": "element",
                    "tag": "code",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "pay-with-crypto.code.0066",
                        "value": "purchaseId"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "pay-with-crypto.li.0067",
                    "value": " and a "
                  },
                  {
                    "type": "element",
                    "tag": "code",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "pay-with-crypto.code.0068",
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
                        "id": "pay-with-crypto.b.0069",
                        "value": "Read the checkout URL:"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "pay-with-crypto.li.0070",
                    "value": " the Purchase API response carries the "
                  },
                  {
                    "type": "element",
                    "tag": "code",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "pay-with-crypto.code.0071",
                        "value": "checkout_url"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "pay-with-crypto.li.0072",
                    "value": " for the hosted crypto payment experience."
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
                        "id": "pay-with-crypto.b.0073",
                        "value": "Redirect to the hosted page:"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "pay-with-crypto.li.0074",
                    "value": " send the customer to the "
                  },
                  {
                    "type": "element",
                    "tag": "code",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "pay-with-crypto.code.0075",
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
                        "id": "pay-with-crypto.b.0076",
                        "value": "Token and network selection:"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "pay-with-crypto.li.0077",
                    "value": " on the checkout page the customer selects their preferred cryptocurrency token and a supported network."
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
                        "id": "pay-with-crypto.b.0078",
                        "value": "Payment details shown:"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "pay-with-crypto.li.0079",
                    "value": " the checkout displays the details needed to complete the transaction, including the wallet address, the QR code, the exact crypto amount and the selected network."
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
                        "id": "pay-with-crypto.b.0080",
                        "value": "Customer pays:"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "pay-with-crypto.li.0081",
                    "value": " the customer completes the payment by either scanning the QR code with a supported wallet, or sending the displayed crypto amount to the wallet address."
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
                        "id": "pay-with-crypto.b.0082",
                        "value": "Confirmation and webhook:"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "pay-with-crypto.li.0083",
                    "value": " once the blockchain transaction is confirmed, Paysecure updates the payment status and sends a webhook notification to your configured callback URL. Reconcile against the webhook, or poll "
                  },
                  {
                    "type": "element",
                    "tag": "code",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "pay-with-crypto.code.0084",
                        "value": "GET /purchases/{purchaseId}/"
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
                "id": "pay-with-crypto.p.0085",
                "value": "Field-level request and response shapes are in the "
              },
              {
                "type": "element",
                "tag": "DocLink",
                "props": {
                  "className": "inline",
                  "href": "/api-pay-with-crypto#payin"
                },
                "children": [
                  {
                    "type": "text",
                    "id": "pay-with-crypto.doclink.0086",
                    "value": "Pay with Crypto API reference"
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
              "id": "over-under"
            },
            "children": [
              {
                "type": "text",
                "id": "pay-with-crypto.over-under.0087",
                "value": "Over- and underpayment"
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
                "id": "pay-with-crypto.p.0088",
                "value": "Because the customer sends the crypto amount manually from their own wallet, they can pay a little less or a little more than the amount you invoiced. Pay with Crypto handles both cases with two dedicated statuses:"
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
                                "id": "pay-with-crypto.th.0089",
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
                                "id": "pay-with-crypto.th.0090",
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
                                  "className": "pill amber"
                                },
                                "children": [
                                  {
                                    "type": "text",
                                    "id": "pay-with-crypto.span.0091",
                                    "value": "partial_paid"
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
                                "id": "pay-with-crypto.td.0092",
                                "value": "Underpayment. The customer sent less than the invoiced amount."
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
                                    "id": "pay-with-crypto.span.0093",
                                    "value": "over_paid"
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
                                "id": "pay-with-crypto.td.0094",
                                "value": "Overpayment. The customer sent more than the invoiced amount."
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
                "id": "pay-with-crypto.p.0095",
                "value": "Both outcomes are surfaced in three places: the merchant dashboard, the status API ("
              },
              {
                "type": "element",
                "tag": "code",
                "props": {},
                "children": [
                  {
                    "type": "text",
                    "id": "pay-with-crypto.code.0096",
                    "value": "GET /purchases/{purchaseId}/"
                  }
                ]
              },
              {
                "type": "text",
                "id": "pay-with-crypto.p.0097",
                "value": ") and the webhook notification. Treat them as outcomes to reconcile rather than clean successes."
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
                "id": "pay-with-crypto.p.0098",
                "value": "The webhook envelope is the same as any PayIn event, a "
              },
              {
                "type": "element",
                "tag": "code",
                "props": {},
                "children": [
                  {
                    "type": "text",
                    "id": "pay-with-crypto.code.0099",
                    "value": "message"
                  }
                ]
              },
              {
                "type": "text",
                "id": "pay-with-crypto.p.0100",
                "value": " object with the full purchase and a top-level "
              },
              {
                "type": "element",
                "tag": "code",
                "props": {},
                "children": [
                  {
                    "type": "text",
                    "id": "pay-with-crypto.code.0101",
                    "value": "status"
                  }
                ]
              },
              {
                "type": "text",
                "id": "pay-with-crypto.p.0102",
                "value": ". For these two outcomes the top-level "
              },
              {
                "type": "element",
                "tag": "code",
                "props": {},
                "children": [
                  {
                    "type": "text",
                    "id": "pay-with-crypto.code.0103",
                    "value": "status"
                  }
                ]
              },
              {
                "type": "text",
                "id": "pay-with-crypto.p.0104",
                "value": " is "
              },
              {
                "type": "element",
                "tag": "code",
                "props": {},
                "children": [
                  {
                    "type": "text",
                    "id": "pay-with-crypto.code.0105",
                    "value": "over_paid"
                  }
                ]
              },
              {
                "type": "text",
                "id": "pay-with-crypto.p.0106",
                "value": " or "
              },
              {
                "type": "element",
                "tag": "code",
                "props": {},
                "children": [
                  {
                    "type": "text",
                    "id": "pay-with-crypto.code.0107",
                    "value": "partial_paid"
                  }
                ]
              },
              {
                "type": "text",
                "id": "pay-with-crypto.p.0108",
                "value": ", and "
              },
              {
                "type": "element",
                "tag": "code",
                "props": {},
                "children": [
                  {
                    "type": "text",
                    "id": "pay-with-crypto.code.0109",
                    "value": "message.status"
                  }
                ]
              },
              {
                "type": "text",
                "id": "pay-with-crypto.p.0110",
                "value": " carries the uppercase form ("
              },
              {
                "type": "element",
                "tag": "code",
                "props": {},
                "children": [
                  {
                    "type": "text",
                    "id": "pay-with-crypto.code.0111",
                    "value": "OVER_PAID"
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
                    "id": "pay-with-crypto.code.0112",
                    "value": "PARTIAL_PAID"
                  }
                ]
              },
              {
                "type": "text",
                "id": "pay-with-crypto.p.0113",
                "value": "). The final step in "
              },
              {
                "type": "element",
                "tag": "code",
                "props": {},
                "children": [
                  {
                    "type": "text",
                    "id": "pay-with-crypto.code.0114",
                    "value": "message.status_history"
                  }
                ]
              },
              {
                "type": "text",
                "id": "pay-with-crypto.p.0115",
                "value": " records the same outcome."
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
                        "id": "pay-with-crypto.span.0116",
                        "value": "Webhook · over_paid"
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
                        "id": "pay-with-crypto.button.0117",
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
                    "value": "{\n  "
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
                        "id": "pay-with-crypto.span.0118",
                        "value": "\"message\""
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
                        "id": "pay-with-crypto.span.0119",
                        "value": "\"purchaseId\""
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
                        "id": "pay-with-crypto.span.0120",
                        "value": "\"6a50f3430c177fa609c7aa9a\""
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": ",\n    "
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
                        "id": "pay-with-crypto.span.0121",
                        "value": "\"client\""
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": ": {\n      "
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
                        "id": "pay-with-crypto.span.0122",
                        "value": "\"customerId\""
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
                        "id": "pay-with-crypto.span.0123",
                        "value": "\"NA\""
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": ",\n      "
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
                        "id": "pay-with-crypto.span.0124",
                        "value": "\"email\""
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
                        "id": "pay-with-crypto.span.0125",
                        "value": "\"alex5@gmail.com\""
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": ",\n      "
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
                        "id": "pay-with-crypto.span.0126",
                        "value": "\"phone\""
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
                        "id": "pay-with-crypto.span.0127",
                        "value": "\"+44 07932665877\""
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": ",\n      "
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
                        "id": "pay-with-crypto.span.0128",
                        "value": "\"full_name\""
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
                        "id": "pay-with-crypto.span.0129",
                        "value": "\"Alex F\""
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": ",\n      "
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
                        "id": "pay-with-crypto.span.0130",
                        "value": "\"date_of_birth\""
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
                        "id": "pay-with-crypto.span.0131",
                        "value": "\"1994-07-10\""
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": ",\n      "
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
                        "id": "pay-with-crypto.span.0132",
                        "value": "\"street_address\""
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
                        "id": "pay-with-crypto.span.0133",
                        "value": "\"Flat 61 Priory Court Wideford Drive Romford RM7 0FY\""
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": ",\n      "
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
                        "id": "pay-with-crypto.span.0134",
                        "value": "\"country\""
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
                        "id": "pay-with-crypto.span.0135",
                        "value": "\"GB\""
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": ",\n      "
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
                        "id": "pay-with-crypto.span.0136",
                        "value": "\"city\""
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
                        "id": "pay-with-crypto.span.0137",
                        "value": "\"London\""
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": ",\n      "
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
                        "id": "pay-with-crypto.span.0138",
                        "value": "\"zip_code\""
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
                        "id": "pay-with-crypto.span.0139",
                        "value": "\"234567\""
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": ",\n      "
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
                        "id": "pay-with-crypto.span.0140",
                        "value": "\"cc\""
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": ": [],\n      "
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
                        "id": "pay-with-crypto.span.0141",
                        "value": "\"bcc\""
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": ": [],\n      "
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
                        "id": "pay-with-crypto.span.0142",
                        "value": "\"stateCode\""
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
                        "id": "pay-with-crypto.span.0143",
                        "value": "\"LO\""
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": "\n    },\n    "
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
                        "id": "pay-with-crypto.span.0144",
                        "value": "\"updated_on\""
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
                        "id": "pay-with-crypto.span.0145",
                        "value": "1783690281"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": ",\n    "
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
                        "id": "pay-with-crypto.span.0146",
                        "value": "\"type\""
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
                        "id": "pay-with-crypto.span.0147",
                        "value": "\"purchase\""
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": ",\n    "
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
                        "id": "pay-with-crypto.span.0148",
                        "value": "\"paymentMethod\""
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
                        "id": "pay-with-crypto.span.0149",
                        "value": "\"PAY-WITH-CRYPTO\""
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": ",\n    "
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
                        "id": "pay-with-crypto.span.0150",
                        "value": "\"amountUnit\""
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
                        "id": "pay-with-crypto.span.0151",
                        "value": "\"MAJOR\""
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": ",\n    "
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
                        "id": "pay-with-crypto.span.0152",
                        "value": "\"errorMsg\""
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
                        "id": "pay-with-crypto.span.0153",
                        "value": "\"Transaction succeeded-APPROVED\""
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": ",\n    "
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
                        "id": "pay-with-crypto.span.0154",
                        "value": "\"errorCode\""
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
                        "id": "pay-with-crypto.span.0155",
                        "value": "\"NA\""
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": ",\n    "
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
                        "id": "pay-with-crypto.span.0156",
                        "value": "\"created_on\""
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
                        "id": "pay-with-crypto.span.0157",
                        "value": "1783690051"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": ",\n    "
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
                        "id": "pay-with-crypto.span.0158",
                        "value": "\"merchantRef\""
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
                        "id": "pay-with-crypto.span.0159",
                        "value": "\"6a50f3430c177fa609c7aa9a\""
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": ",\n    "
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
                        "id": "pay-with-crypto.span.0160",
                        "value": "\"purchase\""
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": ": {\n      "
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
                        "id": "pay-with-crypto.span.0161",
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
                        "id": "pay-with-crypto.span.0162",
                        "value": "\"EUR\""
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": ",\n      "
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
                        "id": "pay-with-crypto.span.0163",
                        "value": "\"products\""
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": ": [\n        {\n          "
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
                        "id": "pay-with-crypto.span.0164",
                        "value": "\"name\""
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
                        "id": "pay-with-crypto.span.0165",
                        "value": "\"e-commerce\""
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": ",\n          "
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
                        "id": "pay-with-crypto.span.0166",
                        "value": "\"quantity\""
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
                        "id": "pay-with-crypto.span.0167",
                        "value": "1"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": ",\n          "
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
                        "id": "pay-with-crypto.span.0168",
                        "value": "\"price\""
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
                        "id": "pay-with-crypto.span.0169",
                        "value": "11.5"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": ",\n          "
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
                        "id": "pay-with-crypto.span.0170",
                        "value": "\"discount\""
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
                        "id": "pay-with-crypto.span.0171",
                        "value": "0"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": ",\n          "
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
                        "id": "pay-with-crypto.span.0172",
                        "value": "\"tax_percent\""
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
                        "id": "pay-with-crypto.span.0173",
                        "value": "\"0.00\""
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": "\n        }\n      ],\n      "
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
                        "id": "pay-with-crypto.span.0174",
                        "value": "\"total\""
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
                        "id": "pay-with-crypto.span.0175",
                        "value": "11.5"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": ",\n      "
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
                        "id": "pay-with-crypto.span.0176",
                        "value": "\"requestAmount\""
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
                        "id": "pay-with-crypto.span.0177",
                        "value": "11.5"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": "\n    },\n    "
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
                        "id": "pay-with-crypto.span.0178",
                        "value": "\"payment\""
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": ": {\n      "
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
                        "id": "pay-with-crypto.span.0179",
                        "value": "\"is_outgoing\""
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
                        "id": "pay-with-crypto.span.0180",
                        "value": "false"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": ",\n      "
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
                        "id": "pay-with-crypto.span.0181",
                        "value": "\"payment_type\""
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
                        "id": "pay-with-crypto.span.0182",
                        "value": "\"PURCHASE\""
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": ",\n      "
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
                        "id": "pay-with-crypto.span.0183",
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
                        "id": "pay-with-crypto.span.0184",
                        "value": "11.5"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": ",\n      "
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
                        "id": "pay-with-crypto.span.0185",
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
                        "id": "pay-with-crypto.span.0186",
                        "value": "\"EUR\""
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": ",\n      "
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
                        "id": "pay-with-crypto.span.0187",
                        "value": "\"net_amount\""
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
                        "id": "pay-with-crypto.span.0188",
                        "value": "11.5"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": ",\n      "
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
                        "id": "pay-with-crypto.span.0189",
                        "value": "\"paid_on\""
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
                        "id": "pay-with-crypto.span.0190",
                        "value": "1783690060"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": "\n    },\n    "
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
                        "id": "pay-with-crypto.span.0191",
                        "value": "\"transaction_data\""
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": ": {\n      "
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
                        "id": "pay-with-crypto.span.0192",
                        "value": "\"flow\""
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
                        "id": "pay-with-crypto.span.0193",
                        "value": "\"payform\""
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": ",\n      "
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
                        "id": "pay-with-crypto.span.0194",
                        "value": "\"attempts\""
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": ": [\n        {\n          "
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
                        "id": "pay-with-crypto.span.0195",
                        "value": "\"type\""
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
                        "id": "pay-with-crypto.span.0196",
                        "value": "\"execute\""
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": ",\n          "
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
                        "id": "pay-with-crypto.span.0197",
                        "value": "\"payment_method\""
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
                        "id": "pay-with-crypto.span.0198",
                        "value": "\"PAY-WITH-CRYPTO\""
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": ",\n          "
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
                        "id": "pay-with-crypto.span.0199",
                        "value": "\"flow\""
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
                        "id": "pay-with-crypto.span.0200",
                        "value": "\"payform\""
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": ",\n          "
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
                        "id": "pay-with-crypto.span.0201",
                        "value": "\"successful\""
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
                        "id": "pay-with-crypto.span.0202",
                        "value": "true"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": ",\n          "
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
                        "id": "pay-with-crypto.span.0203",
                        "value": "\"processing_time\""
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
                        "id": "pay-with-crypto.span.0204",
                        "value": "1783690060"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": ",\n          "
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
                        "id": "pay-with-crypto.span.0205",
                        "value": "\"extra\""
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": ": {\n            "
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
                        "id": "pay-with-crypto.span.0206",
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
                        "id": "pay-with-crypto.span.0207",
                        "value": "11.5"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": ",\n            "
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
                        "id": "pay-with-crypto.span.0208",
                        "value": "\"masked_pan\""
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
                        "id": "pay-with-crypto.span.0209",
                        "value": "\"PAY-WITH-CRYPTO\""
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": "\n          }\n        }\n      ]\n    },\n    "
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
                        "id": "pay-with-crypto.span.0210",
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
                        "id": "pay-with-crypto.span.0211",
                        "value": "\"OVER_PAID\""
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": ",\n    "
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
                        "id": "pay-with-crypto.span.0212",
                        "value": "\"status_history\""
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": ": [\n      {\n        "
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
                        "id": "pay-with-crypto.span.0213",
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
                        "id": "pay-with-crypto.span.0214",
                        "value": "\"created\""
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": ",\n        "
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
                        "id": "pay-with-crypto.span.0215",
                        "value": "\"timestamp\""
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
                        "id": "pay-with-crypto.span.0216",
                        "value": "1783690051"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": "\n      },\n      {\n        "
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
                        "id": "pay-with-crypto.span.0217",
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
                        "id": "pay-with-crypto.span.0218",
                        "value": "\"pending_execute\""
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": ",\n        "
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
                        "id": "pay-with-crypto.span.0219",
                        "value": "\"timestamp\""
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
                        "id": "pay-with-crypto.span.0220",
                        "value": "1783690060"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": "\n      },\n      {\n        "
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
                        "id": "pay-with-crypto.span.0221",
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
                        "id": "pay-with-crypto.span.0222",
                        "value": "\"payment_in_process\""
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": ",\n        "
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
                        "id": "pay-with-crypto.span.0223",
                        "value": "\"timestamp\""
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
                        "id": "pay-with-crypto.span.0224",
                        "value": "1783690063"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": "\n      },\n      {\n        "
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
                        "id": "pay-with-crypto.span.0225",
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
                        "id": "pay-with-crypto.span.0226",
                        "value": "\"over_paid\""
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": ",\n        "
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
                        "id": "pay-with-crypto.span.0227",
                        "value": "\"timestamp\""
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
                        "id": "pay-with-crypto.span.0228",
                        "value": "1783690281"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": "\n      }\n    ],\n    "
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
                        "id": "pay-with-crypto.span.0229",
                        "value": "\"is_test\""
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
                        "id": "pay-with-crypto.span.0230",
                        "value": "false"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": ",\n    "
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
                        "id": "pay-with-crypto.span.0231",
                        "value": "\"brand_id\""
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
                        "id": "pay-with-crypto.span.0232",
                        "value": "\"59c5ed48-caf9-464a-ba54-26e1e02bc1bc\""
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": ",\n    "
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
                        "id": "pay-with-crypto.span.0233",
                        "value": "\"reference_generated\""
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
                        "id": "pay-with-crypto.span.0234",
                        "value": "\"PS1903\""
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": ",\n    "
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
                        "id": "pay-with-crypto.span.0235",
                        "value": "\"refund_upto\""
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
                        "id": "pay-with-crypto.span.0236",
                        "value": "1794054463"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": ",\n    "
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
                        "id": "pay-with-crypto.span.0237",
                        "value": "\"totalRefunded\""
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
                        "id": "pay-with-crypto.span.0238",
                        "value": "0"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": ",\n    "
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
                        "id": "pay-with-crypto.span.0239",
                        "value": "\"paidOn\""
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
                        "id": "pay-with-crypto.span.0240",
                        "value": "0"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": ",\n    "
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
                        "id": "pay-with-crypto.span.0241",
                        "value": "\"receivedAmt\""
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
                        "id": "pay-with-crypto.span.0242",
                        "value": "0"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": ",\n    "
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
                        "id": "pay-with-crypto.span.0243",
                        "value": "\"refund_availability\""
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
                        "id": "pay-with-crypto.span.0244",
                        "value": "\"NONE\""
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": ",\n    "
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
                        "id": "pay-with-crypto.span.0245",
                        "value": "\"refundable_amount\""
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
                        "id": "pay-with-crypto.span.0246",
                        "value": "11.5"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": ",\n    "
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
                        "id": "pay-with-crypto.span.0247",
                        "value": "\"success_callback\""
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
                        "id": "pay-with-crypto.span.0248",
                        "value": "\"https://your.success.callback.com\""
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": ",\n    "
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
                        "id": "pay-with-crypto.span.0249",
                        "value": "\"failure_callback\""
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
                        "id": "pay-with-crypto.span.0250",
                        "value": "\"https://your.failure.callback.com\""
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": ",\n    "
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
                        "id": "pay-with-crypto.span.0251",
                        "value": "\"platform\""
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
                        "id": "pay-with-crypto.span.0252",
                        "value": "\"API\""
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": ",\n    "
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
                        "id": "pay-with-crypto.span.0253",
                        "value": "\"checkout_url\""
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
                        "id": "pay-with-crypto.span.0254",
                        "value": "\"https://checkout.paysecure.net/payments/56253f7c3fe1a8fe9679f5abcfecab74/\""
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": "\n  },\n  "
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
                        "id": "pay-with-crypto.span.0255",
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
                        "id": "pay-with-crypto.span.0256",
                        "value": "\"over_paid\""
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": "\n}"
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
                        "id": "pay-with-crypto.span.0257",
                        "value": "Webhook · partial_paid"
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
                        "id": "pay-with-crypto.button.0258",
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
                    "value": "{\n  "
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
                        "id": "pay-with-crypto.span.0259",
                        "value": "\"message\""
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
                        "id": "pay-with-crypto.span.0260",
                        "value": "\"purchaseId\""
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
                        "id": "pay-with-crypto.span.0261",
                        "value": "\"6a50f24533779459985eb258\""
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": ",\n    "
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
                        "id": "pay-with-crypto.span.0262",
                        "value": "\"client\""
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": ": {\n      "
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
                        "id": "pay-with-crypto.span.0263",
                        "value": "\"customerId\""
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
                        "id": "pay-with-crypto.span.0264",
                        "value": "\"NA\""
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": ",\n      "
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
                        "id": "pay-with-crypto.span.0265",
                        "value": "\"email\""
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
                        "id": "pay-with-crypto.span.0266",
                        "value": "\"alex5@gmail.com\""
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": ",\n      "
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
                        "id": "pay-with-crypto.span.0267",
                        "value": "\"phone\""
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
                        "id": "pay-with-crypto.span.0268",
                        "value": "\"+44 07932665877\""
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": ",\n      "
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
                        "id": "pay-with-crypto.span.0269",
                        "value": "\"full_name\""
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
                        "id": "pay-with-crypto.span.0270",
                        "value": "\"Alex F\""
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": ",\n      "
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
                        "id": "pay-with-crypto.span.0271",
                        "value": "\"date_of_birth\""
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
                        "id": "pay-with-crypto.span.0272",
                        "value": "\"1994-07-10\""
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": ",\n      "
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
                        "id": "pay-with-crypto.span.0273",
                        "value": "\"street_address\""
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
                        "id": "pay-with-crypto.span.0274",
                        "value": "\"Flat 61 Priory Court Wideford Drive Romford RM7 0FY\""
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": ",\n      "
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
                        "id": "pay-with-crypto.span.0275",
                        "value": "\"country\""
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
                        "id": "pay-with-crypto.span.0276",
                        "value": "\"GB\""
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": ",\n      "
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
                        "id": "pay-with-crypto.span.0277",
                        "value": "\"city\""
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
                        "id": "pay-with-crypto.span.0278",
                        "value": "\"London\""
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": ",\n      "
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
                        "id": "pay-with-crypto.span.0279",
                        "value": "\"zip_code\""
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
                        "id": "pay-with-crypto.span.0280",
                        "value": "\"234567\""
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": ",\n      "
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
                        "id": "pay-with-crypto.span.0281",
                        "value": "\"cc\""
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": ": [],\n      "
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
                        "id": "pay-with-crypto.span.0282",
                        "value": "\"bcc\""
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": ": [],\n      "
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
                        "id": "pay-with-crypto.span.0283",
                        "value": "\"stateCode\""
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
                        "id": "pay-with-crypto.span.0284",
                        "value": "\"LO\""
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": "\n    },\n    "
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
                        "id": "pay-with-crypto.span.0285",
                        "value": "\"updated_on\""
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
                        "id": "pay-with-crypto.span.0286",
                        "value": "1783690015"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": ",\n    "
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
                        "id": "pay-with-crypto.span.0287",
                        "value": "\"type\""
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
                        "id": "pay-with-crypto.span.0288",
                        "value": "\"purchase\""
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": ",\n    "
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
                        "id": "pay-with-crypto.span.0289",
                        "value": "\"paymentMethod\""
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
                        "id": "pay-with-crypto.span.0290",
                        "value": "\"PAY-WITH-CRYPTO\""
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": ",\n    "
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
                        "id": "pay-with-crypto.span.0291",
                        "value": "\"amountUnit\""
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
                        "id": "pay-with-crypto.span.0292",
                        "value": "\"MAJOR\""
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": ",\n    "
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
                        "id": "pay-with-crypto.span.0293",
                        "value": "\"errorMsg\""
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
                        "id": "pay-with-crypto.span.0294",
                        "value": "\"Transaction succeeded-APPROVED\""
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": ",\n    "
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
                        "id": "pay-with-crypto.span.0295",
                        "value": "\"errorCode\""
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
                        "id": "pay-with-crypto.span.0296",
                        "value": "\"NA\""
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": ",\n    "
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
                        "id": "pay-with-crypto.span.0297",
                        "value": "\"created_on\""
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
                        "id": "pay-with-crypto.span.0298",
                        "value": "1783689797"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": ",\n    "
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
                        "id": "pay-with-crypto.span.0299",
                        "value": "\"merchantRef\""
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
                        "id": "pay-with-crypto.span.0300",
                        "value": "\"6a50f24533779459985eb258\""
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": ",\n    "
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
                        "id": "pay-with-crypto.span.0301",
                        "value": "\"purchase\""
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": ": {\n      "
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
                        "id": "pay-with-crypto.span.0302",
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
                        "id": "pay-with-crypto.span.0303",
                        "value": "\"EUR\""
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": ",\n      "
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
                        "id": "pay-with-crypto.span.0304",
                        "value": "\"products\""
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": ": [\n        {\n          "
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
                        "id": "pay-with-crypto.span.0305",
                        "value": "\"name\""
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
                        "id": "pay-with-crypto.span.0306",
                        "value": "\"e-commerce\""
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": ",\n          "
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
                        "id": "pay-with-crypto.span.0307",
                        "value": "\"quantity\""
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
                        "id": "pay-with-crypto.span.0308",
                        "value": "1"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": ",\n          "
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
                        "id": "pay-with-crypto.span.0309",
                        "value": "\"price\""
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
                        "id": "pay-with-crypto.span.0310",
                        "value": "11.5"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": ",\n          "
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
                        "id": "pay-with-crypto.span.0311",
                        "value": "\"discount\""
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
                        "id": "pay-with-crypto.span.0312",
                        "value": "0"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": ",\n          "
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
                        "id": "pay-with-crypto.span.0313",
                        "value": "\"tax_percent\""
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
                        "id": "pay-with-crypto.span.0314",
                        "value": "\"0.00\""
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": "\n        }\n      ],\n      "
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
                        "id": "pay-with-crypto.span.0315",
                        "value": "\"total\""
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
                        "id": "pay-with-crypto.span.0316",
                        "value": "11.5"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": ",\n      "
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
                        "id": "pay-with-crypto.span.0317",
                        "value": "\"requestAmount\""
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
                        "id": "pay-with-crypto.span.0318",
                        "value": "11.5"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": "\n    },\n    "
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
                        "id": "pay-with-crypto.span.0319",
                        "value": "\"payment\""
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": ": {\n      "
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
                        "id": "pay-with-crypto.span.0320",
                        "value": "\"is_outgoing\""
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
                        "id": "pay-with-crypto.span.0321",
                        "value": "false"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": ",\n      "
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
                        "id": "pay-with-crypto.span.0322",
                        "value": "\"payment_type\""
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
                        "id": "pay-with-crypto.span.0323",
                        "value": "\"PURCHASE\""
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": ",\n      "
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
                        "id": "pay-with-crypto.span.0324",
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
                        "id": "pay-with-crypto.span.0325",
                        "value": "11.5"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": ",\n      "
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
                        "id": "pay-with-crypto.span.0326",
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
                        "id": "pay-with-crypto.span.0327",
                        "value": "\"EUR\""
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": ",\n      "
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
                        "id": "pay-with-crypto.span.0328",
                        "value": "\"net_amount\""
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
                        "id": "pay-with-crypto.span.0329",
                        "value": "11.5"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": ",\n      "
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
                        "id": "pay-with-crypto.span.0330",
                        "value": "\"paid_on\""
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
                        "id": "pay-with-crypto.span.0331",
                        "value": "1783689803"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": "\n    },\n    "
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
                        "id": "pay-with-crypto.span.0332",
                        "value": "\"transaction_data\""
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": ": {\n      "
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
                        "id": "pay-with-crypto.span.0333",
                        "value": "\"flow\""
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
                        "id": "pay-with-crypto.span.0334",
                        "value": "\"payform\""
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": ",\n      "
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
                        "id": "pay-with-crypto.span.0335",
                        "value": "\"attempts\""
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": ": [\n        {\n          "
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
                        "id": "pay-with-crypto.span.0336",
                        "value": "\"type\""
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
                        "id": "pay-with-crypto.span.0337",
                        "value": "\"execute\""
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": ",\n          "
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
                        "id": "pay-with-crypto.span.0338",
                        "value": "\"payment_method\""
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
                        "id": "pay-with-crypto.span.0339",
                        "value": "\"PAY-WITH-CRYPTO\""
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": ",\n          "
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
                        "id": "pay-with-crypto.span.0340",
                        "value": "\"flow\""
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
                        "id": "pay-with-crypto.span.0341",
                        "value": "\"payform\""
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": ",\n          "
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
                        "id": "pay-with-crypto.span.0342",
                        "value": "\"successful\""
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
                        "id": "pay-with-crypto.span.0343",
                        "value": "true"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": ",\n          "
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
                        "id": "pay-with-crypto.span.0344",
                        "value": "\"processing_time\""
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
                        "id": "pay-with-crypto.span.0345",
                        "value": "1783689803"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": ",\n          "
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
                        "id": "pay-with-crypto.span.0346",
                        "value": "\"extra\""
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": ": {\n            "
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
                        "id": "pay-with-crypto.span.0347",
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
                        "id": "pay-with-crypto.span.0348",
                        "value": "11.5"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": ",\n            "
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
                        "id": "pay-with-crypto.span.0349",
                        "value": "\"masked_pan\""
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
                        "id": "pay-with-crypto.span.0350",
                        "value": "\"PAY-WITH-CRYPTO\""
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": "\n          }\n        }\n      ]\n    },\n    "
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
                        "id": "pay-with-crypto.span.0351",
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
                        "id": "pay-with-crypto.span.0352",
                        "value": "\"PARTIAL_PAID\""
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": ",\n    "
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
                        "id": "pay-with-crypto.span.0353",
                        "value": "\"status_history\""
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": ": [\n      {\n        "
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
                        "id": "pay-with-crypto.span.0354",
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
                        "id": "pay-with-crypto.span.0355",
                        "value": "\"created\""
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": ",\n        "
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
                        "id": "pay-with-crypto.span.0356",
                        "value": "\"timestamp\""
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
                        "id": "pay-with-crypto.span.0357",
                        "value": "1783689797"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": "\n      },\n      {\n        "
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
                        "id": "pay-with-crypto.span.0358",
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
                        "id": "pay-with-crypto.span.0359",
                        "value": "\"pending_execute\""
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": ",\n        "
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
                        "id": "pay-with-crypto.span.0360",
                        "value": "\"timestamp\""
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
                        "id": "pay-with-crypto.span.0361",
                        "value": "1783689803"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": "\n      },\n      {\n        "
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
                        "id": "pay-with-crypto.span.0362",
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
                        "id": "pay-with-crypto.span.0363",
                        "value": "\"payment_in_process\""
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": ",\n        "
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
                        "id": "pay-with-crypto.span.0364",
                        "value": "\"timestamp\""
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
                        "id": "pay-with-crypto.span.0365",
                        "value": "1783689807"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": "\n      },\n      {\n        "
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
                        "id": "pay-with-crypto.span.0366",
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
                        "id": "pay-with-crypto.span.0367",
                        "value": "\"partial_paid\""
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": ",\n        "
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
                        "id": "pay-with-crypto.span.0368",
                        "value": "\"timestamp\""
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
                        "id": "pay-with-crypto.span.0369",
                        "value": "1783690015"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": "\n      }\n    ],\n    "
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
                        "id": "pay-with-crypto.span.0370",
                        "value": "\"is_test\""
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
                        "id": "pay-with-crypto.span.0371",
                        "value": "false"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": ",\n    "
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
                        "id": "pay-with-crypto.span.0372",
                        "value": "\"brand_id\""
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
                        "id": "pay-with-crypto.span.0373",
                        "value": "\"59c5ed48-caf9-464a-ba54-26e1e02bc1bc\""
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": ",\n    "
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
                        "id": "pay-with-crypto.span.0374",
                        "value": "\"reference_generated\""
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
                        "id": "pay-with-crypto.span.0375",
                        "value": "\"PS1902\""
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": ",\n    "
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
                        "id": "pay-with-crypto.span.0376",
                        "value": "\"refund_upto\""
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
                        "id": "pay-with-crypto.span.0377",
                        "value": "1794054207"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": ",\n    "
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
                        "id": "pay-with-crypto.span.0378",
                        "value": "\"totalRefunded\""
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
                        "id": "pay-with-crypto.span.0379",
                        "value": "0"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": ",\n    "
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
                        "id": "pay-with-crypto.span.0380",
                        "value": "\"paidOn\""
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
                        "id": "pay-with-crypto.span.0381",
                        "value": "1783690015"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": ",\n    "
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
                        "id": "pay-with-crypto.span.0382",
                        "value": "\"receivedAmt\""
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
                        "id": "pay-with-crypto.span.0383",
                        "value": "0"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": ",\n    "
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
                        "id": "pay-with-crypto.span.0384",
                        "value": "\"refund_availability\""
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
                        "id": "pay-with-crypto.span.0385",
                        "value": "\"NONE\""
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": ",\n    "
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
                        "id": "pay-with-crypto.span.0386",
                        "value": "\"refundable_amount\""
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
                        "id": "pay-with-crypto.span.0387",
                        "value": "11.5"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": ",\n    "
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
                        "id": "pay-with-crypto.span.0388",
                        "value": "\"success_callback\""
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
                        "id": "pay-with-crypto.span.0389",
                        "value": "\"https://your.success.callback.com\""
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": ",\n    "
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
                        "id": "pay-with-crypto.span.0390",
                        "value": "\"failure_callback\""
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
                        "id": "pay-with-crypto.span.0391",
                        "value": "\"https://your.failure.callback.com\""
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": ",\n    "
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
                        "id": "pay-with-crypto.span.0392",
                        "value": "\"platform\""
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
                        "id": "pay-with-crypto.span.0393",
                        "value": "\"API\""
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": ",\n    "
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
                        "id": "pay-with-crypto.span.0394",
                        "value": "\"checkout_url\""
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
                        "id": "pay-with-crypto.span.0395",
                        "value": "\"https://checkout.paysecure.net/payments/89017dd8b4bc558ceba6860a7960d478/\""
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": "\n  },\n  "
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
                        "id": "pay-with-crypto.span.0396",
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
                        "id": "pay-with-crypto.span.0397",
                        "value": "\"partial_paid\""
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": "\n}"
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
            "tag": "p",
            "props": {},
            "children": [
              {
                "type": "text",
                "id": "pay-with-crypto.p.0398",
                "value": "To reconcile, compare the amount received against the amount invoiced. The status response reports the received amount ("
              },
              {
                "type": "element",
                "tag": "code",
                "props": {},
                "children": [
                  {
                    "type": "text",
                    "id": "pay-with-crypto.code.0399",
                    "value": "receivedAmt"
                  }
                ]
              },
              {
                "type": "text",
                "id": "pay-with-crypto.p.0400",
                "value": ") alongside the purchase "
              },
              {
                "type": "element",
                "tag": "code",
                "props": {},
                "children": [
                  {
                    "type": "text",
                    "id": "pay-with-crypto.code.0401",
                    "value": "total"
                  }
                ]
              },
              {
                "type": "text",
                "id": "pay-with-crypto.p.0402",
                "value": ", so you can measure the difference. The purchase stays refundable up to its "
              },
              {
                "type": "element",
                "tag": "code",
                "props": {},
                "children": [
                  {
                    "type": "text",
                    "id": "pay-with-crypto.code.0403",
                    "value": "refundable_amount"
                  }
                ]
              },
              {
                "type": "text",
                "id": "pay-with-crypto.p.0404",
                "value": ", so an overpayment can be returned through a separate refund arrangement, and an underpayment can be topped up, chased or written off according to your own policy."
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
                        "id": "pay-with-crypto.b.0405",
                        "value": "Do not treat "
                      },
                      {
                        "type": "element",
                        "tag": "code",
                        "props": {},
                        "children": [
                          {
                            "type": "text",
                            "id": "pay-with-crypto.code.0406",
                            "value": "partial_paid"
                          }
                        ]
                      },
                      {
                        "type": "text",
                        "id": "pay-with-crypto.b.0407",
                        "value": " or "
                      },
                      {
                        "type": "element",
                        "tag": "code",
                        "props": {},
                        "children": [
                          {
                            "type": "text",
                            "id": "pay-with-crypto.code.0408",
                            "value": "over_paid"
                          }
                        ]
                      },
                      {
                        "type": "text",
                        "id": "pay-with-crypto.b.0409",
                        "value": " as "
                      },
                      {
                        "type": "element",
                        "tag": "code",
                        "props": {},
                        "children": [
                          {
                            "type": "text",
                            "id": "pay-with-crypto.code.0410",
                            "value": "paid"
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
                    "id": "pay-with-crypto.p.0411",
                    "value": " Only "
                  },
                  {
                    "type": "element",
                    "tag": "code",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "pay-with-crypto.code.0412",
                        "value": "paid"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "pay-with-crypto.p.0413",
                    "value": " means the exact invoiced amount arrived. For the other two, check the received amount before you fulfil the order."
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
              "id": "limits"
            },
            "children": [
              {
                "type": "text",
                "id": "pay-with-crypto.limits.0414",
                "value": "Transaction limits"
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
                                "id": "pay-with-crypto.th.0415",
                                "value": "Parameter"
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
                                "id": "pay-with-crypto.th.0416",
                                "value": "Value"
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
                                "id": "pay-with-crypto.td.0417",
                                "value": "Minimum transaction amount"
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
                                    "id": "pay-with-crypto.code.0418",
                                    "value": "10.00 EUR"
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
                                "id": "pay-with-crypto.td.0419",
                                "value": "Maximum transaction amount"
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
                                "id": "pay-with-crypto.td.0420",
                                "value": "As configured for your merchant account"
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
                "id": "pay-with-crypto.p.0421",
                "value": "A purchase below the minimum is declined with error code "
              },
              {
                "type": "element",
                "tag": "code",
                "props": {},
                "children": [
                  {
                    "type": "text",
                    "id": "pay-with-crypto.code.0422",
                    "value": "107"
                  }
                ]
              },
              {
                "type": "text",
                "id": "pay-with-crypto.p.0423",
                "value": " and the message \"Amount is less than the minimum we can process, action can not be completed. Minimum amount should be: 10.00 EUR\"."
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
                "id": "pay-with-crypto.testing.0424",
                "value": "Testing and going live"
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
                "id": "pay-with-crypto.p.0425",
                "value": "Confirm Pay with Crypto is enabled for your brand with your account manager, along with your success, pending and failure redirect URLs and your webhook callback URLs. In the sandbox, fund a supported wallet (for example MetaMask or Phantom) from the relevant testnet faucet, then complete a payment by scanning the QR code or sending the displayed amount. See "
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
                    "id": "pay-with-crypto.doclink.0426",
                    "value": "Testing APMs"
                  }
                ]
              },
              {
                "type": "text",
                "id": "pay-with-crypto.p.0427",
                "value": " for what can and cannot be tested."
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
                        "id": "pay-with-crypto.b.0428",
                        "value": "Pay-in only."
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "pay-with-crypto.p.0429",
                    "value": " Pay with Crypto collects payments; it does not process payouts. Handle any return of funds through a separate refund arrangement."
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
                "id": "pay-with-crypto.apis.0430",
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
            "tag": "p",
            "props": {},
            "children": [
              {
                "type": "text",
                "id": "pay-with-crypto.p.0431",
                "value": "The request and response reference, with a live try-it runner, is on the API page."
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
              "className": "cards c3"
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
                  "href": "/api-pay-with-crypto#payin"
                },
                "children": [
                  {
                    "type": "element",
                    "tag": "h4",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "pay-with-crypto.h4.0432",
                        "value": "Create purchase →"
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
                        "id": "pay-with-crypto.p.0433",
                        "value": "Create a Pay with Crypto PayIn and read the hosted "
                      },
                      {
                        "type": "element",
                        "tag": "code",
                        "props": {},
                        "children": [
                          {
                            "type": "text",
                            "id": "pay-with-crypto.code.0434",
                            "value": "checkout_url"
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
                "type": "text",
                "value": "\n        "
              },
              {
                "type": "element",
                "tag": "DocLink",
                "props": {
                  "className": "card",
                  "href": "/api-pay-with-crypto#payin-status"
                },
                "children": [
                  {
                    "type": "element",
                    "tag": "h4",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "pay-with-crypto.h4.0435",
                        "value": "Get status →"
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
                        "id": "pay-with-crypto.p.0436",
                        "value": "Poll the purchase for its final state, including "
                      },
                      {
                        "type": "element",
                        "tag": "code",
                        "props": {},
                        "children": [
                          {
                            "type": "text",
                            "id": "pay-with-crypto.code.0437",
                            "value": "over_paid"
                          }
                        ]
                      },
                      {
                        "type": "text",
                        "id": "pay-with-crypto.p.0438",
                        "value": " and "
                      },
                      {
                        "type": "element",
                        "tag": "code",
                        "props": {},
                        "children": [
                          {
                            "type": "text",
                            "id": "pay-with-crypto.code.0439",
                            "value": "partial_paid"
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
                "type": "text",
                "value": "\n        "
              },
              {
                "type": "element",
                "tag": "DocLink",
                "props": {
                  "className": "card",
                  "href": "/webhooks"
                },
                "children": [
                  {
                    "type": "element",
                    "tag": "h4",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "pay-with-crypto.h4.0440",
                        "value": "Webhooks →"
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
                        "id": "pay-with-crypto.p.0441",
                        "value": "Confirm the final state over signed webhooks."
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
                  "updated": "Last updated 11 Jul 2026 · v2.4"
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
                      "href": "/cryptobridge"
                    },
                    "children": [
                      {
                        "type": "element",
                        "tag": "small",
                        "props": {},
                        "children": [
                          {
                            "type": "text",
                            "id": "pay-with-crypto.small.0442",
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
                            "id": "pay-with-crypto.b.0443",
                            "value": "← CryptoBridge"
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
                      "href": "/virtual-accounts"
                    },
                    "children": [
                      {
                        "type": "element",
                        "tag": "small",
                        "props": {},
                        "children": [
                          {
                            "type": "text",
                            "id": "pay-with-crypto.small.0444",
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
                            "id": "pay-with-crypto.b.0445",
                            "value": "Virtual Accounts (Korea) →"
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
