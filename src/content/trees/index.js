import { defineDocument } from '../schema.js';

export const indexTreeDocument = defineDocument({
  "schemaVersion": 1,
  "slug": "index",
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
              "className": "hero-band"
            },
            "children": [
              {
                "type": "text",
                "value": "\n        "
              },
              {
                "type": "element",
                "tag": "h1",
                "props": {},
                "children": [
                  {
                    "type": "text",
                    "id": "index.h1.0001",
                    "value": "Paysecure Developer Documentation"
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
                "props": {
                  "className": "lead"
                },
                "children": [
                  {
                    "type": "text",
                    "id": "index.p.0002",
                    "value": "One unified API to accept global payments, send payouts, and optimise routing across 250+ providers, integrate once, reach every rail."
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
                  "className": "hero-cta"
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
                      "className": "btn-primary",
                      "href": "/quickstart"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "index.doclink.0003",
                        "value": "Make your first payment →"
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
                      "className": "btn-ghost",
                      "href": "/sandbox-credentials"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "index.doclink.0004",
                        "value": "Get sandbox keys"
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
                  "className": "trust-badges"
                },
                "children": [
                  {
                    "type": "text",
                    "value": "\n          "
                  },
                  {
                    "type": "element",
                    "tag": "span",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "index.span.0005",
                        "value": "PCI DSS"
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
                        "id": "index.span.0006",
                        "value": "3DS2 / SCA"
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
                        "id": "index.span.0007",
                        "value": "250+ PSPs"
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
                        "id": "index.span.0008",
                        "value": "Signed webhooks"
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
            "tag": "h2",
            "props": {
              "id": "paths"
            },
            "children": [
              {
                "type": "text",
                "id": "index.paths.0009",
                "value": "Choose your integration path"
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
                "id": "index.p.0010",
                "value": "Three ways to integrate, pick by how much of the payment UI you want to own."
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
              "className": "paths"
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
                  "className": "path",
                  "href": "/getting-started"
                },
                "children": [
                  {
                    "type": "text",
                    "value": "\n          "
                  },
                  {
                    "type": "element",
                    "tag": "span",
                    "props": {
                      "className": "tag"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "index.span.0011",
                        "value": "Fastest"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": "\n          "
                  },
                  {
                    "type": "element",
                    "tag": "h4",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "index.h4.0012",
                        "value": "Hosted Cashier"
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
                        "id": "index.p.0013",
                        "value": "Redirect to a Paysecure-hosted payment page. PCI burden stays with us. Live in a day."
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
                "tag": "DocLink",
                "props": {
                  "className": "path",
                  "href": "/api-cards"
                },
                "children": [
                  {
                    "type": "text",
                    "value": "\n          "
                  },
                  {
                    "type": "element",
                    "tag": "span",
                    "props": {
                      "className": "tag"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "index.span.0014",
                        "value": "Most control"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": "\n          "
                  },
                  {
                    "type": "element",
                    "tag": "h4",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "index.h4.0015",
                        "value": "Server-to-Server API"
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
                        "id": "index.p.0016",
                        "value": "Full API integration with your own checkout UI, two calls: create purchase, execute S2S."
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
                "tag": "DocLink",
                "props": {
                  "className": "path",
                  "href": "/getting-started"
                },
                "children": [
                  {
                    "type": "text",
                    "value": "\n          "
                  },
                  {
                    "type": "element",
                    "tag": "span",
                    "props": {
                      "className": "tag"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "index.span.0017",
                        "value": "Embedded"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": "\n          "
                  },
                  {
                    "type": "element",
                    "tag": "h4",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "index.h4.0018",
                        "value": "Embeddable Checkout"
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
                        "id": "index.p.0019",
                        "value": "Drop our checkout into your page as an iframe or Embedded Elements. Your look, our rails."
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
            "tag": "h2",
            "props": {
              "id": "products"
            },
            "children": [
              {
                "type": "text",
                "id": "index.products.0020",
                "value": "Core products"
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
                  "href": "/product-payments"
                },
                "children": [
                  {
                    "type": "text",
                    "value": "\n          "
                  },
                  {
                    "type": "element",
                    "tag": "div",
                    "props": {
                      "className": "ci"
                    },
                    "children": [
                      {
                        "type": "element",
                        "tag": "svg",
                        "props": {
                          "viewBox": "0 0 24 24",
                          "fill": "none",
                          "stroke": "var(--purple)",
                          "strokeWidth": "1.8",
                          "strokeLinecap": "round",
                          "strokeLinejoin": "round",
                          "width": "18",
                          "height": "18"
                        },
                        "children": [
                          {
                            "type": "element",
                            "tag": "circle",
                            "props": {
                              "cx": "8",
                              "cy": "8",
                              "r": "6"
                            },
                            "children": []
                          },
                          {
                            "type": "element",
                            "tag": "path",
                            "props": {
                              "d": "M18.09 10.37A6 6 0 1 1 10.34 18"
                            },
                            "children": []
                          },
                          {
                            "type": "element",
                            "tag": "path",
                            "props": {
                              "d": "M7 6h1v4"
                            },
                            "children": []
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
                    "tag": "h4",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "index.h4.0021",
                        "value": "Payments & pay-ins"
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
                        "id": "index.p.0022",
                        "value": "Cards, Apple/Google Pay, Interac, PIX, UPI, bank transfers, and crypto through one API."
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": "\n          "
                  },
                  {
                    "type": "element",
                    "tag": "span",
                    "props": {
                      "className": "go"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "index.span.0023",
                        "value": "Explore payments →"
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
                "tag": "DocLink",
                "props": {
                  "className": "card",
                  "href": "/product-payouts"
                },
                "children": [
                  {
                    "type": "text",
                    "value": "\n          "
                  },
                  {
                    "type": "element",
                    "tag": "div",
                    "props": {
                      "className": "ci"
                    },
                    "children": [
                      {
                        "type": "element",
                        "tag": "svg",
                        "props": {
                          "viewBox": "0 0 24 24",
                          "fill": "none",
                          "stroke": "var(--purple)",
                          "strokeWidth": "1.8",
                          "strokeLinecap": "round",
                          "strokeLinejoin": "round",
                          "width": "18",
                          "height": "18"
                        },
                        "children": [
                          {
                            "type": "element",
                            "tag": "path",
                            "props": {
                              "d": "M22 2L11 13"
                            },
                            "children": []
                          },
                          {
                            "type": "element",
                            "tag": "path",
                            "props": {
                              "d": "M22 2l-7 20-4-9-9-4 20-7z"
                            },
                            "children": []
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
                    "tag": "h4",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "index.h4.0024",
                        "value": "Payouts"
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
                        "id": "index.p.0025",
                        "value": "Send funds to customers, sellers, and contractors via Interac, cards, SPEI, PIX, and more."
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": "\n          "
                  },
                  {
                    "type": "element",
                    "tag": "span",
                    "props": {
                      "className": "go"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "index.span.0026",
                        "value": "Explore payouts →"
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
                "tag": "DocLink",
                "props": {
                  "className": "card",
                  "href": "/product-recurring"
                },
                "children": [
                  {
                    "type": "text",
                    "value": "\n          "
                  },
                  {
                    "type": "element",
                    "tag": "div",
                    "props": {
                      "className": "ci"
                    },
                    "children": [
                      {
                        "type": "element",
                        "tag": "svg",
                        "props": {
                          "viewBox": "0 0 24 24",
                          "fill": "none",
                          "stroke": "var(--purple)",
                          "strokeWidth": "1.8",
                          "strokeLinecap": "round",
                          "strokeLinejoin": "round",
                          "width": "18",
                          "height": "18"
                        },
                        "children": [
                          {
                            "type": "element",
                            "tag": "path",
                            "props": {
                              "d": "M17 1l4 4-4 4"
                            },
                            "children": []
                          },
                          {
                            "type": "element",
                            "tag": "path",
                            "props": {
                              "d": "M3 11V9a4 4 0 0 1 4-4h14"
                            },
                            "children": []
                          },
                          {
                            "type": "element",
                            "tag": "path",
                            "props": {
                              "d": "M7 23l-4-4 4-4"
                            },
                            "children": []
                          },
                          {
                            "type": "element",
                            "tag": "path",
                            "props": {
                              "d": "M21 13v2a4 4 0 0 1-4 4H3"
                            },
                            "children": []
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
                    "tag": "h4",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "index.h4.0027",
                        "value": "Recurring & subscriptions"
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
                        "id": "index.p.0028",
                        "value": "Register a mandate once (CIT) and charge merchant-initiated transactions (MIT) on your cycle."
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": "\n          "
                  },
                  {
                    "type": "element",
                    "tag": "span",
                    "props": {
                      "className": "go"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "index.span.0029",
                        "value": "Explore recurring →"
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
                "tag": "DocLink",
                "props": {
                  "className": "card",
                  "href": "/product-cashier"
                },
                "children": [
                  {
                    "type": "text",
                    "value": "\n          "
                  },
                  {
                    "type": "element",
                    "tag": "div",
                    "props": {
                      "className": "ci"
                    },
                    "children": [
                      {
                        "type": "element",
                        "tag": "svg",
                        "props": {
                          "viewBox": "0 0 24 24",
                          "fill": "none",
                          "stroke": "var(--purple)",
                          "strokeWidth": "1.8",
                          "strokeLinecap": "round",
                          "strokeLinejoin": "round",
                          "width": "18",
                          "height": "18"
                        },
                        "children": [
                          {
                            "type": "element",
                            "tag": "circle",
                            "props": {
                              "cx": "9",
                              "cy": "21",
                              "r": "1"
                            },
                            "children": []
                          },
                          {
                            "type": "element",
                            "tag": "circle",
                            "props": {
                              "cx": "20",
                              "cy": "21",
                              "r": "1"
                            },
                            "children": []
                          },
                          {
                            "type": "element",
                            "tag": "path",
                            "props": {
                              "d": "M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"
                            },
                            "children": []
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
                    "tag": "h4",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "index.h4.0030",
                        "value": "Cashier & orchestration"
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
                        "id": "index.p.0031",
                        "value": "Hosted and embeddable checkout with smart routing, cascading retries, and failover."
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": "\n          "
                  },
                  {
                    "type": "element",
                    "tag": "span",
                    "props": {
                      "className": "go"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "index.span.0032",
                        "value": "Explore cashier →"
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
            "tag": "h2",
            "props": {
              "id": "testing"
            },
            "children": [
              {
                "type": "text",
                "id": "index.testing.0033",
                "value": "Set up your test environment"
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
                  "href": "/sandbox-credentials"
                },
                "children": [
                  {
                    "type": "text",
                    "value": "\n          "
                  },
                  {
                    "type": "element",
                    "tag": "div",
                    "props": {
                      "className": "ci"
                    },
                    "children": [
                      {
                        "type": "element",
                        "tag": "svg",
                        "props": {
                          "viewBox": "0 0 24 24",
                          "fill": "none",
                          "stroke": "var(--purple)",
                          "strokeWidth": "1.8",
                          "strokeLinecap": "round",
                          "strokeLinejoin": "round",
                          "width": "18",
                          "height": "18"
                        },
                        "children": [
                          {
                            "type": "element",
                            "tag": "path",
                            "props": {
                              "d": "M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"
                            },
                            "children": []
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
                    "tag": "h4",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "index.h4.0034",
                        "value": "Sandbox credentials"
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
                        "id": "index.p.0035",
                        "value": "The Is Sandbox flag, API keys, and how sandbox differs from live."
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": "\n          "
                  },
                  {
                    "type": "element",
                    "tag": "span",
                    "props": {
                      "className": "go"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "index.span.0036",
                        "value": "Get set up →"
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
                "tag": "DocLink",
                "props": {
                  "className": "card",
                  "href": "/test-cards"
                },
                "children": [
                  {
                    "type": "text",
                    "value": "\n          "
                  },
                  {
                    "type": "element",
                    "tag": "div",
                    "props": {
                      "className": "ci"
                    },
                    "children": [
                      {
                        "type": "element",
                        "tag": "svg",
                        "props": {
                          "viewBox": "0 0 24 24",
                          "fill": "none",
                          "stroke": "var(--purple)",
                          "strokeWidth": "1.8",
                          "strokeLinecap": "round",
                          "strokeLinejoin": "round",
                          "width": "18",
                          "height": "18"
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
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": "\n          "
                  },
                  {
                    "type": "element",
                    "tag": "h4",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "index.h4.0037",
                        "value": "Test cards"
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
                        "id": "index.p.0038",
                        "value": "Sandbox card numbers for every scenario, success, 3DS2, declines."
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": "\n          "
                  },
                  {
                    "type": "element",
                    "tag": "span",
                    "props": {
                      "className": "go"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "index.span.0039",
                        "value": "View test cards →"
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
                "tag": "DocLink",
                "props": {
                  "className": "card",
                  "href": "/test-apm-simulator"
                },
                "children": [
                  {
                    "type": "text",
                    "value": "\n          "
                  },
                  {
                    "type": "element",
                    "tag": "div",
                    "props": {
                      "className": "ci"
                    },
                    "children": [
                      {
                        "type": "element",
                        "tag": "svg",
                        "props": {
                          "viewBox": "0 0 24 24",
                          "fill": "none",
                          "stroke": "var(--purple)",
                          "strokeWidth": "1.8",
                          "strokeLinecap": "round",
                          "strokeLinejoin": "round",
                          "width": "18",
                          "height": "18"
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
                    "value": "\n          "
                  },
                  {
                    "type": "element",
                    "tag": "h4",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "index.h4.0040",
                        "value": "Testing APMs"
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
                        "id": "index.p.0041",
                        "value": "How to validate Interac, wallets, and crypto flows safely."
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": "\n          "
                  },
                  {
                    "type": "element",
                    "tag": "span",
                    "props": {
                      "className": "go"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "index.span.0042",
                        "value": "Open the guide →"
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
            "tag": "h2",
            "props": {
              "id": "methods"
            },
            "children": [
              {
                "type": "text",
                "id": "index.methods.0043",
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
            "props": {},
            "children": [
              {
                "type": "text",
                "id": "index.p.0044",
                "value": "One purchase API, every rail, detailed on a single page so there's one source of truth."
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
              "className": "method-groups"
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
                  "className": "mgroup"
                },
                "children": [
                  {
                    "type": "text",
                    "value": "\n          "
                  },
                  {
                    "type": "element",
                    "tag": "div",
                    "props": {
                      "className": "mg-label"
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
                        "id": "index.div.0045",
                        "value": "Cards & wallets"
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
                      "href": "/payment-methods#cards"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "index.doclink.0046",
                        "value": "Cards · Visa & Mastercard"
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
                      "href": "/payment-methods#wallets"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "index.doclink.0047",
                        "value": "Apple Pay"
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
                      "href": "/payment-methods#wallets"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "index.doclink.0048",
                        "value": "Google Pay"
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
                  "className": "mgroup"
                },
                "children": [
                  {
                    "type": "text",
                    "value": "\n          "
                  },
                  {
                    "type": "element",
                    "tag": "div",
                    "props": {
                      "className": "mg-label"
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
                          "strokeLinejoin": "round"
                        },
                        "children": [
                          {
                            "type": "element",
                            "tag": "path",
                            "props": {
                              "d": "M3 21h18M3 10h18M5 6l7-3 7 3M4 10v11M20 10v11M8 14v3M12 14v3M16 14v3"
                            },
                            "children": []
                          }
                        ]
                      },
                      {
                        "type": "text",
                        "id": "index.div.0049",
                        "value": "Bank & local rails"
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
                      "href": "/payment-methods#interac"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "index.doclink.0050",
                        "value": "Interac · Canada"
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
                      "href": "/payment-methods#local"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "index.doclink.0051",
                        "value": "PIX · UPI · SPEI"
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
                      "href": "/payment-methods#interac"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "index.doclink.0052",
                        "value": "Open Banking · EU & UK"
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
                      "className": "more",
                      "href": "/payment-methods#all-methods"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "index.doclink.0053",
                        "value": "+ 6 more →"
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
                  "className": "mgroup"
                },
                "children": [
                  {
                    "type": "text",
                    "value": "\n          "
                  },
                  {
                    "type": "element",
                    "tag": "div",
                    "props": {
                      "className": "mg-label"
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
                              "d": "M9.5 7.5h4a2 2 0 0 1 0 4h-4zm0 4h4.5a2 2 0 0 1 0 4H9.5z"
                            },
                            "children": []
                          },
                          {
                            "type": "element",
                            "tag": "path",
                            "props": {
                              "d": "M11 5.5v13"
                            },
                            "children": []
                          }
                        ]
                      },
                      {
                        "type": "text",
                        "id": "index.div.0054",
                        "value": "Crypto & vouchers"
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
                      "href": "/payment-methods#crypto"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "index.doclink.0055",
                        "value": "Crypto deposits & on-ramp"
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
                      "href": "/payment-methods#local"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "index.doclink.0056",
                        "value": "Neosurf vouchers"
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
                      "className": "more",
                      "href": "/payment-methods#all-methods"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "index.doclink.0057",
                        "value": "All methods A–Z →"
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
                "id": "index.p.0058",
                "value": "Availability per account is configured by your account manager, see "
              },
              {
                "type": "element",
                "tag": "DocLink",
                "props": {
                  "className": "inline",
                  "href": "/payment-methods"
                },
                "children": [
                  {
                    "type": "text",
                    "id": "index.doclink.0059",
                    "value": "the full matrix"
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
              "id": "security"
            },
            "children": [
              {
                "type": "text",
                "id": "index.security.0060",
                "value": "Security & compliance"
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
                  "href": "/cards#threeds"
                },
                "children": [
                  {
                    "type": "text",
                    "value": "\n          "
                  },
                  {
                    "type": "element",
                    "tag": "div",
                    "props": {
                      "className": "ci"
                    },
                    "children": [
                      {
                        "type": "element",
                        "tag": "svg",
                        "props": {
                          "viewBox": "0 0 24 24",
                          "fill": "none",
                          "stroke": "var(--purple)",
                          "strokeWidth": "1.8",
                          "strokeLinecap": "round",
                          "strokeLinejoin": "round",
                          "width": "18",
                          "height": "18"
                        },
                        "children": [
                          {
                            "type": "element",
                            "tag": "path",
                            "props": {
                              "d": "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
                            },
                            "children": []
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
                    "tag": "h4",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "index.h4.0061",
                        "value": "3D Secure (3DS2)"
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
                        "id": "index.p.0062",
                        "value": "Strong customer authentication with liability shift on verified transactions."
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": "\n          "
                  },
                  {
                    "type": "element",
                    "tag": "span",
                    "props": {
                      "className": "go"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "index.span.0063",
                        "value": "How 3DS works →"
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
                "tag": "DocLink",
                "props": {
                  "className": "card",
                  "href": "/api-tokenisation"
                },
                "children": [
                  {
                    "type": "text",
                    "value": "\n          "
                  },
                  {
                    "type": "element",
                    "tag": "div",
                    "props": {
                      "className": "ci"
                    },
                    "children": [
                      {
                        "type": "element",
                        "tag": "svg",
                        "props": {
                          "viewBox": "0 0 24 24",
                          "fill": "none",
                          "stroke": "var(--purple)",
                          "strokeWidth": "1.8",
                          "strokeLinecap": "round",
                          "strokeLinejoin": "round",
                          "width": "18",
                          "height": "18"
                        },
                        "children": [
                          {
                            "type": "element",
                            "tag": "circle",
                            "props": {
                              "cx": "12",
                              "cy": "12",
                              "r": "9"
                            },
                            "children": []
                          },
                          {
                            "type": "element",
                            "tag": "path",
                            "props": {
                              "d": "M9 12l2 2 4-4"
                            },
                            "children": []
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
                    "tag": "h4",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "index.h4.0064",
                        "value": "Network tokenisation"
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
                        "id": "index.p.0065",
                        "value": "Scheme tokens instead of stored PANs, higher approvals, lower PCI exposure."
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": "\n          "
                  },
                  {
                    "type": "element",
                    "tag": "span",
                    "props": {
                      "className": "go"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "index.span.0066",
                        "value": "Tokenisation API →"
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
                "tag": "DocLink",
                "props": {
                  "className": "card",
                  "href": "/webhooks#signing"
                },
                "children": [
                  {
                    "type": "text",
                    "value": "\n          "
                  },
                  {
                    "type": "element",
                    "tag": "div",
                    "props": {
                      "className": "ci"
                    },
                    "children": [
                      {
                        "type": "element",
                        "tag": "svg",
                        "props": {
                          "viewBox": "0 0 24 24",
                          "fill": "none",
                          "stroke": "var(--purple)",
                          "strokeWidth": "1.8",
                          "strokeLinecap": "round",
                          "strokeLinejoin": "round",
                          "width": "18",
                          "height": "18"
                        },
                        "children": [
                          {
                            "type": "element",
                            "tag": "circle",
                            "props": {
                              "cx": "18",
                              "cy": "5",
                              "r": "3"
                            },
                            "children": []
                          },
                          {
                            "type": "element",
                            "tag": "circle",
                            "props": {
                              "cx": "6",
                              "cy": "12",
                              "r": "3"
                            },
                            "children": []
                          },
                          {
                            "type": "element",
                            "tag": "circle",
                            "props": {
                              "cx": "18",
                              "cy": "19",
                              "r": "3"
                            },
                            "children": []
                          },
                          {
                            "type": "element",
                            "tag": "path",
                            "props": {
                              "d": "M8.59 13.51l6.83 3.98M15.41 6.51l-6.82 3.98"
                            },
                            "children": []
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
                    "tag": "h4",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "index.h4.0067",
                        "value": "Signed webhooks"
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
                        "id": "index.p.0068",
                        "value": "Every delivery signed with SHA256withRSA, verify it's Paysecure, untampered."
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": "\n          "
                  },
                  {
                    "type": "element",
                    "tag": "span",
                    "props": {
                      "className": "go"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "index.span.0069",
                        "value": "Verify signatures →"
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
            "tag": "h2",
            "props": {
              "id": "resources"
            },
            "children": [
              {
                "type": "text",
                "id": "index.resources.0070",
                "value": "Developer resources"
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
                  "href": "/api-reference"
                },
                "children": [
                  {
                    "type": "text",
                    "value": "\n          "
                  },
                  {
                    "type": "element",
                    "tag": "div",
                    "props": {
                      "className": "ci"
                    },
                    "children": [
                      {
                        "type": "element",
                        "tag": "svg",
                        "props": {
                          "viewBox": "0 0 24 24",
                          "fill": "none",
                          "stroke": "var(--purple)",
                          "strokeWidth": "1.8",
                          "strokeLinecap": "round",
                          "strokeLinejoin": "round",
                          "width": "18",
                          "height": "18"
                        },
                        "children": [
                          {
                            "type": "element",
                            "tag": "path",
                            "props": {
                              "d": "M16 18l6-6-6-6M8 6l-6 6 6 6"
                            },
                            "children": []
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
                    "tag": "h4",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "index.h4.0071",
                        "value": "API Reference"
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
                        "id": "index.p.0072",
                        "value": "Every endpoint with a live request builder, try calls right from the page."
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": "\n          "
                  },
                  {
                    "type": "element",
                    "tag": "span",
                    "props": {
                      "className": "go"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "index.span.0073",
                        "value": "Open the reference →"
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
                "tag": "DocLink",
                "props": {
                  "className": "card",
                  "href": "/webhooks"
                },
                "children": [
                  {
                    "type": "text",
                    "value": "\n          "
                  },
                  {
                    "type": "element",
                    "tag": "div",
                    "props": {
                      "className": "ci"
                    },
                    "children": [
                      {
                        "type": "element",
                        "tag": "svg",
                        "props": {
                          "viewBox": "0 0 24 24",
                          "fill": "none",
                          "stroke": "var(--purple)",
                          "strokeWidth": "1.8",
                          "strokeLinecap": "round",
                          "strokeLinejoin": "round",
                          "width": "18",
                          "height": "18"
                        },
                        "children": [
                          {
                            "type": "element",
                            "tag": "circle",
                            "props": {
                              "cx": "18",
                              "cy": "5",
                              "r": "3"
                            },
                            "children": []
                          },
                          {
                            "type": "element",
                            "tag": "circle",
                            "props": {
                              "cx": "6",
                              "cy": "12",
                              "r": "3"
                            },
                            "children": []
                          },
                          {
                            "type": "element",
                            "tag": "circle",
                            "props": {
                              "cx": "18",
                              "cy": "19",
                              "r": "3"
                            },
                            "children": []
                          },
                          {
                            "type": "element",
                            "tag": "path",
                            "props": {
                              "d": "M8.59 13.51l6.83 3.98M15.41 6.51l-6.82 3.98"
                            },
                            "children": []
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
                    "tag": "h4",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "index.h4.0074",
                        "value": "Webhooks"
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
                        "id": "index.p.0075",
                        "value": "PayIn & payout events, payload schemas, and signature verification code."
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": "\n          "
                  },
                  {
                    "type": "element",
                    "tag": "span",
                    "props": {
                      "className": "go"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "index.span.0076",
                        "value": "Read webhooks →"
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
                "tag": "DocLink",
                "props": {
                  "className": "card",
                  "href": "/errors"
                },
                "children": [
                  {
                    "type": "text",
                    "value": "\n          "
                  },
                  {
                    "type": "element",
                    "tag": "div",
                    "props": {
                      "className": "ci"
                    },
                    "children": [
                      {
                        "type": "element",
                        "tag": "svg",
                        "props": {
                          "viewBox": "0 0 24 24",
                          "fill": "none",
                          "stroke": "var(--purple)",
                          "strokeWidth": "1.8",
                          "strokeLinecap": "round",
                          "strokeLinejoin": "round",
                          "width": "18",
                          "height": "18"
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
                              "d": "M12 8v4M12 16h.01"
                            },
                            "children": []
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
                    "tag": "h4",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "index.h4.0077",
                        "value": "Statuses & errors"
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
                        "id": "index.p.0078",
                        "value": "The transaction lifecycle and the full error catalogue with fixes."
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": "\n          "
                  },
                  {
                    "type": "element",
                    "tag": "span",
                    "props": {
                      "className": "go"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "index.span.0079",
                        "value": "View statuses →"
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
                "tag": "DocLink",
                "props": {
                  "className": "card",
                  "href": "/operations"
                },
                "children": [
                  {
                    "type": "text",
                    "value": "\n          "
                  },
                  {
                    "type": "element",
                    "tag": "div",
                    "props": {
                      "className": "ci"
                    },
                    "children": [
                      {
                        "type": "element",
                        "tag": "svg",
                        "props": {
                          "viewBox": "0 0 24 24",
                          "fill": "none",
                          "stroke": "var(--purple)",
                          "strokeWidth": "1.8",
                          "strokeLinecap": "round",
                          "strokeLinejoin": "round",
                          "width": "18",
                          "height": "18"
                        },
                        "children": [
                          {
                            "type": "element",
                            "tag": "path",
                            "props": {
                              "d": "M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"
                            },
                            "children": []
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
                    "tag": "h4",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "index.h4.0080",
                        "value": "Operations"
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
                        "id": "index.p.0081",
                        "value": "Settlement, reconciliation, refunds, disputes, payout review, and rate limits."
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": "\n          "
                  },
                  {
                    "type": "element",
                    "tag": "span",
                    "props": {
                      "className": "go"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "index.span.0082",
                        "value": "Open operations →"
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
                          "d": "M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"
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
                        "id": "index.b.0083",
                        "value": "Need help?"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "index.p.0084",
                    "value": " Reach the integrations team at "
                  },
                  {
                    "type": "element",
                    "tag": "a",
                    "props": {
                      "className": "inline",
                      "href": "mailto:info@paysecure.net"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "index.a.0085",
                        "value": "info@paysecure.net"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "index.p.0086",
                    "value": ", support is available during standard business hours. Operations and admin users: see the "
                  },
                  {
                    "type": "element",
                    "tag": "DocLink",
                    "props": {
                      "className": "inline",
                      "href": "/dashboard"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "index.doclink.0087",
                        "value": "Merchant Dashboard guide"
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
                  "updated": "Last updated 05 Jul 2026 · API v1"
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
                    "tag": "span",
                    "props": {
                      "style": {
                        "flex": "1"
                      }
                    },
                    "children": []
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
                      "href": "/getting-started"
                    },
                    "children": [
                      {
                        "type": "element",
                        "tag": "small",
                        "props": {},
                        "children": [
                          {
                            "type": "text",
                            "id": "index.small.0088",
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
                            "id": "index.b.0089",
                            "value": "Getting started →"
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
