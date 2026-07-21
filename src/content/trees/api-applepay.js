import { defineDocument } from '../schema.js';

export const ApiApplepayTreeDocument = defineDocument({
  "schemaVersion": 1,
  "slug": "api-applepay",
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
                    "id": "api-applepay.doclink.0001",
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
                    "id": "api-applepay.doclink.0002",
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
                "id": "api-applepay.div.0003",
                "value": "Apple Pay"
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
              "id": "applepay-overview",
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
                        "id": "api-applepay.h1.0004",
                        "value": "Apple Pay API"
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
                        "id": "api-applepay.p.0005",
                        "value": "One Purchases API serves every Apple Pay integration. What changes is the "
                      },
                      {
                        "type": "element",
                        "tag": "code",
                        "props": {},
                        "children": [
                          {
                            "type": "text",
                            "id": "api-applepay.code.0006",
                            "value": "paymentMethod"
                          }
                        ]
                      },
                      {
                        "type": "text",
                        "id": "api-applepay.p.0007",
                        "value": " code and, for server-to-server, the payload inside "
                      },
                      {
                        "type": "element",
                        "tag": "code",
                        "props": {},
                        "children": [
                          {
                            "type": "text",
                            "id": "api-applepay.code.0008",
                            "value": "extraParam.applepay_param"
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
                    "tag": "p",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "api-applepay.p.0009",
                        "value": "Concepts, Apple setup, certificate cases and flow selection live in the "
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
                            "id": "api-applepay.doclink.0010",
                            "value": "Apple Pay guide"
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
                    "tag": "p",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "api-applepay.p.0011",
                        "value": "All calls send "
                      },
                      {
                        "type": "element",
                        "tag": "code",
                        "props": {},
                        "children": [
                          {
                            "type": "text",
                            "id": "api-applepay.code.0012",
                            "value": "Authorization: Bearer {APIKey}"
                          }
                        ]
                      },
                      {
                        "type": "text",
                        "id": "api-applepay.p.0013",
                        "value": " and "
                      },
                      {
                        "type": "element",
                        "tag": "code",
                        "props": {},
                        "children": [
                          {
                            "type": "text",
                            "id": "api-applepay.code.0014",
                            "value": "Content-Type: application/json"
                          }
                        ]
                      },
                      {
                        "type": "text",
                        "id": "api-applepay.p.0015",
                        "value": " to the base URL "
                      },
                      {
                        "type": "element",
                        "tag": "code",
                        "props": {},
                        "children": [
                          {
                            "type": "text",
                            "id": "api-applepay.code.0016",
                            "value": "https://api.paysecure.net/api/v1"
                          }
                        ]
                      },
                      {
                        "type": "text",
                        "id": "api-applepay.p.0017",
                        "value": ". The same URL serves both environments; the key is bound to the Is Sandbox mode it was generated in. See "
                      },
                      {
                        "type": "element",
                        "tag": "DocLink",
                        "props": {
                          "className": "inline",
                          "href": "/api-reference#headers"
                        },
                        "children": [
                          {
                            "type": "text",
                            "id": "api-applepay.doclink.0018",
                            "value": "authentication and request headers"
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
                                        "id": "api-applepay.th.0019",
                                        "value": "Integration"
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
                                        "id": "api-applepay.th.0020",
                                        "value": "paymentMethod"
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
                                        "id": "api-applepay.th.0021",
                                        "value": "Apple Pay payload"
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
                                            "id": "api-applepay.b.0022",
                                            "value": "Paysecure cashier"
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
                                            "id": "api-applepay.code.0023",
                                            "value": "APPLEPAY"
                                          }
                                        ]
                                      },
                                      {
                                        "type": "text",
                                        "id": "api-applepay.td.0024",
                                        "value": ", or omit to show all methods"
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
                                        "id": "api-applepay.td.0025",
                                        "value": "None; the cashier collects and decrypts the token itself"
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
                                            "id": "api-applepay.b.0026",
                                            "value": "PSP cashier (redirect)"
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
                                            "id": "api-applepay.code.0027",
                                            "value": "APPLEPAY-REDIRECT"
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
                                        "id": "api-applepay.td.0028",
                                        "value": "None; the customer is redirected to the PSP's interface, where the Apple Pay JS loads"
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
                                            "id": "api-applepay.b.0029",
                                            "value": "Merchant cashier, encrypted"
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
                                            "id": "api-applepay.code.0030",
                                            "value": "APPLEPAY"
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
                                            "id": "api-applepay.code.0031",
                                            "value": "applepay_encrypted_payload"
                                          }
                                        ]
                                      },
                                      {
                                        "type": "text",
                                        "id": "api-applepay.td.0032",
                                        "value": ": the Apple token forwarded verbatim"
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
                                            "id": "api-applepay.b.0033",
                                            "value": "Merchant cashier, decrypted"
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
                                            "id": "api-applepay.code.0034",
                                            "value": "APPLEPAY"
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
                                            "id": "api-applepay.code.0035",
                                            "value": "applepay_decrypted_payload"
                                          }
                                        ]
                                      },
                                      {
                                        "type": "text",
                                        "id": "api-applepay.td.0036",
                                        "value": ": the decrypted message from your decryption layer"
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
                                "id": "api-applepay.b.0037",
                                "value": "Same code, two flows:"
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
                                "id": "api-applepay.code.0038",
                                "value": "APPLEPAY"
                              }
                            ]
                          },
                          {
                            "type": "text",
                            "id": "api-applepay.p.0039",
                            "value": " covers both the Paysecure cashier and your own cashier. Paysecure tells them apart by the presence of "
                          },
                          {
                            "type": "element",
                            "tag": "code",
                            "props": {},
                            "children": [
                              {
                                "type": "text",
                                "id": "api-applepay.code.0040",
                                "value": "extraParam.applepay_param"
                              }
                            ]
                          },
                          {
                            "type": "text",
                            "id": "api-applepay.p.0041",
                            "value": ": absent means the hosted cashier collects the token; present means you are submitting it server-to-server. There is no "
                          },
                          {
                            "type": "element",
                            "tag": "code",
                            "props": {},
                            "children": [
                              {
                                "type": "text",
                                "id": "api-applepay.code.0042",
                                "value": "PAYMENT_GATEWAY"
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
                                "id": "api-applepay.code.0043",
                                "value": "DIRECT"
                              }
                            ]
                          },
                          {
                            "type": "text",
                            "id": "api-applepay.p.0044",
                            "value": " split as with Google Pay; every token is encrypted to a Payment Processing Certificate on your Merchant ID."
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
                        "id": "api-applepay.h3.0045",
                        "value": "Endpoints"
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
                                    "tag": "td",
                                    "props": {},
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
                                            "id": "api-applepay.span.0046",
                                            "value": "POST"
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
                                            "id": "api-applepay.code.0047",
                                            "value": "/purchases/"
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
                                        "id": "api-applepay.td.0048",
                                        "value": "Create the purchase (all variants)"
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
                                          "className": "method get"
                                        },
                                        "children": [
                                          {
                                            "type": "text",
                                            "id": "api-applepay.span.0049",
                                            "value": "GET"
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
                                            "id": "api-applepay.code.0050",
                                            "value": "/purchases/{purchaseId}/"
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
                                        "id": "api-applepay.td.0051",
                                        "value": "Get status"
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
              "id": "redirect"
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
                        "id": "api-applepay.h2.0052",
                        "value": "Hosted and redirect flows"
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
                            "id": "api-applepay.span.0053",
                            "value": "POST"
                          }
                        ]
                      },
                      {
                        "type": "text",
                        "id": "api-applepay.div.0054",
                        "value": "/purchases/"
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
                        "id": "api-applepay.p.0055",
                        "value": "A standard purchase with no Apple Pay payload. Redirect the customer to the returned "
                      },
                      {
                        "type": "element",
                        "tag": "code",
                        "props": {},
                        "children": [
                          {
                            "type": "text",
                            "id": "api-applepay.code.0056",
                            "value": "checkout_url"
                          }
                        ]
                      },
                      {
                        "type": "text",
                        "id": "api-applepay.p.0057",
                        "value": ". Two variants:"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": "\n          "
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
                        "value": "\n            "
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
                                "id": "api-applepay.b.0058",
                                "value": "Paysecure cashier:"
                              }
                            ]
                          },
                          {
                            "type": "text",
                            "id": "api-applepay.li.0059",
                            "value": " set "
                          },
                          {
                            "type": "element",
                            "tag": "code",
                            "props": {},
                            "children": [
                              {
                                "type": "text",
                                "id": "api-applepay.code.0060",
                                "value": "paymentMethod: \"APPLEPAY\""
                              }
                            ]
                          },
                          {
                            "type": "text",
                            "id": "api-applepay.li.0061",
                            "value": " to deep-link straight into the Apple Pay experience on the Paysecure cashier, or omit it to show every method enabled for your brand. Paysecure renders the button, runs merchant validation, and decrypts the token."
                          }
                        ]
                      },
                      {
                        "type": "text",
                        "value": "\n            "
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
                                "id": "api-applepay.b.0062",
                                "value": "PSP cashier:"
                              }
                            ]
                          },
                          {
                            "type": "text",
                            "id": "api-applepay.li.0063",
                            "value": " set "
                          },
                          {
                            "type": "element",
                            "tag": "code",
                            "props": {},
                            "children": [
                              {
                                "type": "text",
                                "id": "api-applepay.code.0064",
                                "value": "paymentMethod: \"APPLEPAY-REDIRECT\""
                              }
                            ]
                          },
                          {
                            "type": "text",
                            "id": "api-applepay.li.0065",
                            "value": "; the customer is redirected to the PSP's interface, where the PSP's page loads the Apple Pay JS and shows the button."
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
                        "id": "api-applepay.h3.0066",
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
                                        "id": "api-applepay.th.0067",
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
                                        "id": "api-applepay.th.0068",
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
                                        "id": "api-applepay.th.0069",
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
                                        "id": "api-applepay.th.0070",
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
                                            "id": "api-applepay.code.0071",
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
                                        "id": "api-applepay.td.0072",
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
                                        "id": "api-applepay.td.0073",
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
                                        "id": "api-applepay.td.0074",
                                        "value": "ISO 4217 currency code."
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
                                            "id": "api-applepay.code.0075",
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
                                        "id": "api-applepay.td.0076",
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
                                        "id": "api-applepay.td.0077",
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
                                        "id": "api-applepay.td.0078",
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
                                            "id": "api-applepay.code.0079",
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
                                        "id": "api-applepay.td.0080",
                                        "value": "decimal"
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
                                        "id": "api-applepay.td.0081",
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
                                        "id": "api-applepay.td.0082",
                                        "value": "Price in decimal format, up to 2 decimals, major units (EUR 5 → "
                                      },
                                      {
                                        "type": "element",
                                        "tag": "code",
                                        "props": {},
                                        "children": [
                                          {
                                            "type": "text",
                                            "id": "api-applepay.code.0083",
                                            "value": "5.00"
                                          }
                                        ]
                                      },
                                      {
                                        "type": "text",
                                        "value": ")."
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
                                            "id": "api-applepay.code.0084",
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
                                        "id": "api-applepay.td.0085",
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
                                        "id": "api-applepay.td.0086",
                                        "value": "Optional"
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
                                            "id": "api-applepay.code.0087",
                                            "value": "APPLEPAY"
                                          }
                                        ]
                                      },
                                      {
                                        "type": "text",
                                        "id": "api-applepay.td.0088",
                                        "value": " to deep-link the Paysecure cashier, or "
                                      },
                                      {
                                        "type": "element",
                                        "tag": "code",
                                        "props": {},
                                        "children": [
                                          {
                                            "type": "text",
                                            "id": "api-applepay.code.0089",
                                            "value": "APPLEPAY-REDIRECT"
                                          }
                                        ]
                                      },
                                      {
                                        "type": "text",
                                        "id": "api-applepay.td.0090",
                                        "value": " for the PSP cashier. Omit to show every method enabled for your brand."
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
                                            "id": "api-applepay.code.0091",
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
                                        "id": "api-applepay.td.0092",
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
                                        "id": "api-applepay.td.0093",
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
                                        "id": "api-applepay.td.0094",
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
                                            "id": "api-applepay.code.0095",
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
                                        "id": "api-applepay.td.0096",
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
                                        "id": "api-applepay.td.0097",
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
                                        "id": "api-applepay.td.0098",
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
                                            "id": "api-applepay.code.0099",
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
                                        "id": "api-applepay.td.0100",
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
                                        "id": "api-applepay.td.0101",
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
                                        "id": "api-applepay.td.0102",
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
                                            "id": "api-applepay.code.0103",
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
                                        "id": "api-applepay.td.0104",
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
                                        "id": "api-applepay.td.0105",
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
                                        "id": "api-applepay.td.0106",
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
                                            "id": "api-applepay.code.0107",
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
                                        "id": "api-applepay.td.0108",
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
                                        "id": "api-applepay.td.0109",
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
                                        "id": "api-applepay.td.0110",
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
                                            "id": "api-applepay.code.0111",
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
                                        "id": "api-applepay.td.0112",
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
                                        "id": "api-applepay.td.0113",
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
                                        "id": "api-applepay.td.0114",
                                        "value": "Customer full name; at least two words recommended."
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
                                            "id": "api-applepay.code.0115",
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
                                        "id": "api-applepay.td.0116",
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
                                        "id": "api-applepay.td.0117",
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
                                        "id": "api-applepay.td.0118",
                                        "value": "Server-to-server callback Paysecure POSTs to on success. Use this, not the redirect, as the source of truth."
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
                                            "id": "api-applepay.code.0119",
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
                                        "id": "api-applepay.td.0120",
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
                                        "id": "api-applepay.td.0121",
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
                                        "id": "api-applepay.td.0122",
                                        "value": "Server-to-server callback Paysecure POSTs to on failure."
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
                                            "id": "api-applepay.code.0123",
                                            "value": "merchantRef"
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
                                        "id": "api-applepay.td.0124",
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
                                        "id": "api-applepay.td.0125",
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
                                        "id": "api-applepay.td.0126",
                                        "value": "Duplicate protection and retrieval if the response times out."
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
                                            "id": "api-applepay.code.0127",
                                            "value": "expireInMin"
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
                                        "id": "api-applepay.td.0128",
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
                                        "id": "api-applepay.td.0129",
                                        "value": "Optional"
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
                                        "id": "api-applepay.td.0130",
                                        "value": "Payment window in minutes. Unpaid purchases move to "
                                      },
                                      {
                                        "type": "element",
                                        "tag": "code",
                                        "props": {},
                                        "children": [
                                          {
                                            "type": "text",
                                            "id": "api-applepay.code.0131",
                                            "value": "expired"
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
                        "id": "api-applepay.h3.0132",
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
                                        "id": "api-applepay.th.0133",
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
                                        "id": "api-applepay.th.0134",
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
                                        "id": "api-applepay.th.0135",
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
                                            "id": "api-applepay.code.0136",
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
                                        "id": "api-applepay.td.0137",
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
                                        "id": "api-applepay.td.0138",
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
                                            "id": "api-applepay.code.0139",
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
                                        "id": "api-applepay.td.0140",
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
                                        "id": "api-applepay.td.0141",
                                        "value": "Current status: "
                                      },
                                      {
                                        "type": "element",
                                        "tag": "code",
                                        "props": {},
                                        "children": [
                                          {
                                            "type": "text",
                                            "id": "api-applepay.code.0142",
                                            "value": "created"
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
                                            "id": "api-applepay.code.0143",
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
                                            "id": "api-applepay.code.0144",
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
                                            "id": "api-applepay.code.0145",
                                            "value": "expired"
                                          }
                                        ]
                                      },
                                      {
                                        "type": "text",
                                        "id": "api-applepay.td.0146",
                                        "value": " or "
                                      },
                                      {
                                        "type": "element",
                                        "tag": "code",
                                        "props": {},
                                        "children": [
                                          {
                                            "type": "text",
                                            "id": "api-applepay.code.0147",
                                            "value": "error"
                                          }
                                        ]
                                      },
                                      {
                                        "type": "text",
                                        "id": "api-applepay.td.0148",
                                        "value": ". Also repeated in "
                                      },
                                      {
                                        "type": "element",
                                        "tag": "code",
                                        "props": {},
                                        "children": [
                                          {
                                            "type": "text",
                                            "id": "api-applepay.code.0149",
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
                                            "id": "api-applepay.code.0150",
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
                                        "id": "api-applepay.td.0151",
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
                                        "id": "api-applepay.td.0152",
                                        "value": "The method used, "
                                      },
                                      {
                                        "type": "element",
                                        "tag": "code",
                                        "props": {},
                                        "children": [
                                          {
                                            "type": "text",
                                            "id": "api-applepay.code.0153",
                                            "value": "APPLEPAY"
                                          }
                                        ]
                                      },
                                      {
                                        "type": "text",
                                        "id": "api-applepay.td.0154",
                                        "value": " or "
                                      },
                                      {
                                        "type": "element",
                                        "tag": "code",
                                        "props": {},
                                        "children": [
                                          {
                                            "type": "text",
                                            "id": "api-applepay.code.0155",
                                            "value": "APPLEPAY-REDIRECT"
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
                                            "id": "api-applepay.code.0156",
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
                                        "id": "api-applepay.td.0157",
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
                                            "id": "api-applepay.code.0158",
                                            "value": "MAJOR"
                                          }
                                        ]
                                      },
                                      {
                                        "type": "text",
                                        "id": "api-applepay.td.0159",
                                        "value": " for full currency units, "
                                      },
                                      {
                                        "type": "element",
                                        "tag": "code",
                                        "props": {},
                                        "children": [
                                          {
                                            "type": "text",
                                            "id": "api-applepay.code.0160",
                                            "value": "MINOR"
                                          }
                                        ]
                                      },
                                      {
                                        "type": "text",
                                        "id": "api-applepay.td.0161",
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
                                            "id": "api-applepay.code.0162",
                                            "value": "merchantRef"
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
                                        "id": "api-applepay.td.0163",
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
                                        "id": "api-applepay.td.0164",
                                        "value": "Your reference echoed back, or an internal id if none was sent."
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
                                            "id": "api-applepay.code.0165",
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
                                        "id": "api-applepay.td.0166",
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
                                        "id": "api-applepay.td.0167",
                                        "value": "Echo of the customer: "
                                      },
                                      {
                                        "type": "element",
                                        "tag": "code",
                                        "props": {},
                                        "children": [
                                          {
                                            "type": "text",
                                            "id": "api-applepay.code.0168",
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
                                            "id": "api-applepay.code.0169",
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
                                            "id": "api-applepay.code.0170",
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
                                            "id": "api-applepay.code.0171",
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
                                            "id": "api-applepay.code.0172",
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
                                            "id": "api-applepay.code.0173",
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
                                            "id": "api-applepay.code.0174",
                                            "value": "customerId"
                                          }
                                        ]
                                      },
                                      {
                                        "type": "text",
                                        "id": "api-applepay.td.0175",
                                        "value": " is "
                                      },
                                      {
                                        "type": "element",
                                        "tag": "code",
                                        "props": {},
                                        "children": [
                                          {
                                            "type": "text",
                                            "id": "api-applepay.code.0176",
                                            "value": "NA"
                                          }
                                        ]
                                      },
                                      {
                                        "type": "text",
                                        "id": "api-applepay.td.0177",
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
                                            "id": "api-applepay.code.0178",
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
                                        "id": "api-applepay.td.0179",
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
                                            "id": "api-applepay.code.0180",
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
                                            "id": "api-applepay.code.0181",
                                            "value": "products[]"
                                          }
                                        ]
                                      },
                                      {
                                        "type": "text",
                                        "id": "api-applepay.td.0182",
                                        "value": " (name, quantity, price, discount, tax_percent) and "
                                      },
                                      {
                                        "type": "element",
                                        "tag": "code",
                                        "props": {},
                                        "children": [
                                          {
                                            "type": "text",
                                            "id": "api-applepay.code.0183",
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
                                            "id": "api-applepay.code.0184",
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
                                        "id": "api-applepay.td.0185",
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
                                        "id": "api-applepay.td.0186",
                                        "value": "Hosted page to redirect the customer to for the Apple Pay experience."
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
                                            "id": "api-applepay.code.0187",
                                            "value": "direct_post_url"
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
                                        "id": "api-applepay.td.0188",
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
                                        "id": "api-applepay.td.0189",
                                        "value": "Direct-post endpoint for the payment session, where applicable."
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
                                            "id": "api-applepay.code.0190",
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
                                        "id": "api-applepay.td.0191",
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
                                        "id": "api-applepay.td.0192",
                                        "value": "Every status the purchase passed through, each with a UNIX "
                                      },
                                      {
                                        "type": "element",
                                        "tag": "code",
                                        "props": {},
                                        "children": [
                                          {
                                            "type": "text",
                                            "id": "api-applepay.code.0193",
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
                          "url": "/purchases/",
                          "config": {
                            "fields": [
                              {
                                "k": "client.email",
                                "v": "user@example.com",
                                "req": false
                              },
                              {
                                "k": "client.country",
                                "v": "GB",
                                "req": false
                              },
                              {
                                "k": "client.city",
                                "v": "London",
                                "req": false
                              },
                              {
                                "k": "client.stateCode",
                                "v": "RJ",
                                "req": false
                              },
                              {
                                "k": "client.street_address",
                                "v": "1 Test Street",
                                "req": false
                              },
                              {
                                "k": "client.zip_code",
                                "v": "10001",
                                "req": false
                              },
                              {
                                "k": "client.date_of_birth",
                                "v": "1990-01-01",
                                "req": false
                              },
                              {
                                "k": "client.phone",
                                "v": "+15555550123",
                                "req": false
                              },
                              {
                                "k": "client.full_name",
                                "v": "Test User",
                                "req": false
                              },
                              {
                                "k": "purchase.currency",
                                "v": "EUR",
                                "req": true
                              },
                              {
                                "k": "purchase.products[0].name",
                                "v": "Test User",
                                "req": true
                              },
                              {
                                "k": "purchase.products[0].price",
                                "v": "104.99",
                                "req": true
                              },
                              {
                                "k": "brand_id",
                                "v": "{{BrandId}}",
                                "req": true
                              },
                              {
                                "k": "paymentMethod",
                                "v": "APPLEPAY-REDIRECT",
                                "req": false
                              },
                              {
                                "k": "success_redirect",
                                "v": "https://merchant.example/success-redirect",
                                "req": true
                              },
                              {
                                "k": "pending_redirect",
                                "v": "https://merchant.example/pending-redirect",
                                "req": false
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
                              },
                              {
                                "k": "merchantRef",
                                "v": "order-12345",
                                "req": false
                              }
                            ],
                            "status": "202 Accepted",
                            "latency": "308 ms",
                            "response": {
                              "purchaseId": "9f1c2e7a5bae56fd5547a993",
                              "status": "created",
                              "paymentMethod": "APPLEPAY",
                              "amountUnit": "MAJOR",
                              "purchase": {
                                "currency": "EUR",
                                "total": 104.99
                              },
                              "checkout_url": "https://api.paysecure.net/payments/{token}/",
                              "status_history": [
                                {
                                  "status": "created",
                                  "timestamp": 1775034399
                                }
                              ]
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
              "className": "api-section",
              "id": "encrypted"
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
                        "id": "api-applepay.h2.0194",
                        "value": "Seamless: encrypted payload"
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
                            "id": "api-applepay.span.0195",
                            "value": "POST"
                          }
                        ]
                      },
                      {
                        "type": "text",
                        "id": "api-applepay.div.0196",
                        "value": "/purchases/"
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
                        "id": "api-applepay.p.0197",
                        "value": "You rendered the button, Apple returned the token: forward it exactly as received. Used for Paysecure decryption (your cert, or a Paysecure-supplied CSR) and for the processor-decryption variant. Merchant validation happens before this call, on your server or via Paysecure. The Apple token goes inside "
                      },
                      {
                        "type": "element",
                        "tag": "code",
                        "props": {},
                        "children": [
                          {
                            "type": "text",
                            "id": "api-applepay.code.0198",
                            "value": "extraParam.applepay_param"
                          }
                        ]
                      },
                      {
                        "type": "text",
                        "id": "api-applepay.p.0199",
                        "value": "; the core purchase fields ("
                      },
                      {
                        "type": "element",
                        "tag": "code",
                        "props": {},
                        "children": [
                          {
                            "type": "text",
                            "id": "api-applepay.code.0200",
                            "value": "purchase.currency"
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
                            "id": "api-applepay.code.0201",
                            "value": "purchase.products[]"
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
                            "id": "api-applepay.code.0202",
                            "value": "brand_id"
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
                            "id": "api-applepay.code.0203",
                            "value": "paymentMethod: \"APPLEPAY\""
                          }
                        ]
                      },
                      {
                        "type": "text",
                        "id": "api-applepay.p.0204",
                        "value": ") are the same as the Redirect flow above."
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
                        "id": "api-applepay.h3.0205",
                        "value": "applepay_param fields"
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
                                        "id": "api-applepay.th.0206",
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
                                        "id": "api-applepay.th.0207",
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
                                        "id": "api-applepay.th.0208",
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
                                        "id": "api-applepay.th.0209",
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
                                            "id": "api-applepay.code.0210",
                                            "value": "apple_merchant_id"
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
                                        "id": "api-applepay.td.0211",
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
                                        "id": "api-applepay.td.0212",
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
                                        "id": "api-applepay.td.0213",
                                        "value": "Your Apple Pay Merchant ID, e.g. "
                                      },
                                      {
                                        "type": "element",
                                        "tag": "code",
                                        "props": {},
                                        "children": [
                                          {
                                            "type": "text",
                                            "id": "api-applepay.code.0214",
                                            "value": "merchant.com.yourcompany.store"
                                          }
                                        ]
                                      },
                                      {
                                        "type": "text",
                                        "id": "api-applepay.td.0215",
                                        "value": ". Bound into the token key derivation."
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
                                            "id": "api-applepay.code.0216",
                                            "value": "applepay_encrypted_payload"
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
                                        "id": "api-applepay.td.0217",
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
                                        "id": "api-applepay.td.0218",
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
                                        "id": "api-applepay.td.0219",
                                        "value": "The exact "
                                      },
                                      {
                                        "type": "element",
                                        "tag": "code",
                                        "props": {},
                                        "children": [
                                          {
                                            "type": "text",
                                            "id": "api-applepay.code.0220",
                                            "value": "token.paymentData"
                                          }
                                        ]
                                      },
                                      {
                                        "type": "text",
                                        "id": "api-applepay.td.0221",
                                        "value": " object from Apple ("
                                      },
                                      {
                                        "type": "element",
                                        "tag": "code",
                                        "props": {},
                                        "children": [
                                          {
                                            "type": "text",
                                            "id": "api-applepay.code.0222",
                                            "value": "version"
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
                                            "id": "api-applepay.code.0223",
                                            "value": "data"
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
                                            "id": "api-applepay.code.0224",
                                            "value": "signature"
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
                                            "id": "api-applepay.code.0225",
                                            "value": "header"
                                          }
                                        ]
                                      },
                                      {
                                        "type": "text",
                                        "id": "api-applepay.td.0226",
                                        "value": "), passed as an escaped JSON string, not a parsed or re-serialised object. No re-encoding, no whitespace changes."
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
                        "id": "api-applepay.h3.0227",
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
                                        "id": "api-applepay.th.0228",
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
                                        "id": "api-applepay.th.0229",
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
                                        "id": "api-applepay.th.0230",
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
                                            "id": "api-applepay.code.0231",
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
                                        "id": "api-applepay.td.0232",
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
                                        "id": "api-applepay.td.0233",
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
                                            "id": "api-applepay.code.0234",
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
                                        "id": "api-applepay.td.0235",
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
                                        "id": "api-applepay.td.0236",
                                        "value": "Current status: "
                                      },
                                      {
                                        "type": "element",
                                        "tag": "code",
                                        "props": {},
                                        "children": [
                                          {
                                            "type": "text",
                                            "id": "api-applepay.code.0237",
                                            "value": "created"
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
                                            "id": "api-applepay.code.0238",
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
                                            "id": "api-applepay.code.0239",
                                            "value": "paid"
                                          }
                                        ]
                                      },
                                      {
                                        "type": "text",
                                        "id": "api-applepay.td.0240",
                                        "value": " or "
                                      },
                                      {
                                        "type": "element",
                                        "tag": "code",
                                        "props": {},
                                        "children": [
                                          {
                                            "type": "text",
                                            "id": "api-applepay.code.0241",
                                            "value": "error"
                                          }
                                        ]
                                      },
                                      {
                                        "type": "text",
                                        "id": "api-applepay.td.0242",
                                        "value": ". Also repeated in "
                                      },
                                      {
                                        "type": "element",
                                        "tag": "code",
                                        "props": {},
                                        "children": [
                                          {
                                            "type": "text",
                                            "id": "api-applepay.code.0243",
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
                                            "id": "api-applepay.code.0244",
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
                                        "id": "api-applepay.td.0245",
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
                                        "id": "api-applepay.td.0246",
                                        "value": "The method used, "
                                      },
                                      {
                                        "type": "element",
                                        "tag": "code",
                                        "props": {},
                                        "children": [
                                          {
                                            "type": "text",
                                            "id": "api-applepay.code.0247",
                                            "value": "APPLEPAY"
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
                                            "id": "api-applepay.code.0248",
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
                                        "id": "api-applepay.td.0249",
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
                                            "id": "api-applepay.code.0250",
                                            "value": "MAJOR"
                                          }
                                        ]
                                      },
                                      {
                                        "type": "text",
                                        "id": "api-applepay.td.0251",
                                        "value": " for full currency units, "
                                      },
                                      {
                                        "type": "element",
                                        "tag": "code",
                                        "props": {},
                                        "children": [
                                          {
                                            "type": "text",
                                            "id": "api-applepay.code.0252",
                                            "value": "MINOR"
                                          }
                                        ]
                                      },
                                      {
                                        "type": "text",
                                        "id": "api-applepay.td.0253",
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
                                            "id": "api-applepay.code.0254",
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
                                        "id": "api-applepay.td.0255",
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
                                            "id": "api-applepay.code.0256",
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
                                            "id": "api-applepay.code.0257",
                                            "value": "products[]"
                                          }
                                        ]
                                      },
                                      {
                                        "type": "text",
                                        "id": "api-applepay.td.0258",
                                        "value": " and "
                                      },
                                      {
                                        "type": "element",
                                        "tag": "code",
                                        "props": {},
                                        "children": [
                                          {
                                            "type": "text",
                                            "id": "api-applepay.code.0259",
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
                                            "id": "api-applepay.code.0260",
                                            "value": "transaction_data.attempts[]"
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
                                        "id": "api-applepay.td.0261",
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
                                        "id": "api-applepay.td.0262",
                                        "value": "One entry per authorisation attempt. On failure, "
                                      },
                                      {
                                        "type": "element",
                                        "tag": "code",
                                        "props": {},
                                        "children": [
                                          {
                                            "type": "text",
                                            "id": "api-applepay.code.0263",
                                            "value": "attempts[].error"
                                          }
                                        ]
                                      },
                                      {
                                        "type": "text",
                                        "id": "api-applepay.td.0264",
                                        "value": " carries the decline reason."
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
                                            "id": "api-applepay.code.0265",
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
                                        "id": "api-applepay.td.0266",
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
                                        "id": "api-applepay.td.0267",
                                        "value": "Redirect target when the credential needs customer interaction, for example a 3-D Secure step-up."
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
                                            "id": "api-applepay.code.0268",
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
                                        "id": "api-applepay.td.0269",
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
                                        "id": "api-applepay.td.0270",
                                        "value": "Every status the purchase passed through, each with a UNIX "
                                      },
                                      {
                                        "type": "element",
                                        "tag": "code",
                                        "props": {},
                                        "children": [
                                          {
                                            "type": "text",
                                            "id": "api-applepay.code.0271",
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
                      "className": "callout warn"
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
                                "id": "api-applepay.b.0272",
                                "value": "Token hygiene:"
                              }
                            ]
                          },
                          {
                            "type": "text",
                            "id": "api-applepay.p.0273",
                            "value": " never log the payment data in full (log a SHA-256 hash or "
                          },
                          {
                            "type": "element",
                            "tag": "code",
                            "props": {},
                            "children": [
                              {
                                "type": "text",
                                "id": "api-applepay.code.0274",
                                "value": "header.transactionId"
                              }
                            ]
                          },
                          {
                            "type": "text",
                            "id": "api-applepay.p.0275",
                            "value": "), never store it (single-use, short-lived), and submit promptly; the Apple merchant session expires five minutes after creation."
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
                          "url": "/purchases/",
                          "config": {
                            "fields": [
                              {
                                "k": "client.email",
                                "v": "user@example.com",
                                "req": false
                              },
                              {
                                "k": "purchase.currency",
                                "v": "USD",
                                "req": true
                              },
                              {
                                "k": "purchase.products[0].name",
                                "v": "Test User",
                                "req": true
                              },
                              {
                                "k": "purchase.products[0].price",
                                "v": "10.00",
                                "req": true
                              },
                              {
                                "k": "paymentMethod",
                                "v": "APPLEPAY",
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
                                "req": false
                              },
                              {
                                "k": "pending_redirect",
                                "v": "https://merchant.example/pending-redirect",
                                "req": false
                              },
                              {
                                "k": "failure_redirect",
                                "v": "https://merchant.example/failure-redirect",
                                "req": false
                              },
                              {
                                "k": "extraParam.applepay_param.applepay_token.version",
                                "v": "EC_v1",
                                "req": false
                              },
                              {
                                "k": "extraParam.applepay_param.applepay_token.data",
                                "v": "...",
                                "req": false
                              },
                              {
                                "k": "extraParam.applepay_param.applepay_token.signature",
                                "v": "...",
                                "req": false
                              },
                              {
                                "k": "extraParam.applepay_param.applepay_token.header.ephemeralPublicKey",
                                "v": "...",
                                "req": false
                              },
                              {
                                "k": "extraParam.applepay_param.applepay_token.header.publicKeyHash",
                                "v": "...",
                                "req": false
                              },
                              {
                                "k": "extraParam.applepay_param.applepay_token.header.transactionId",
                                "v": "...",
                                "req": false
                              }
                            ],
                            "status": "202 Accepted",
                            "latency": "412 ms",
                            "response": {
                              "purchaseId": "69cce01f5bae56fd5547a993",
                              "client": {
                                "customerId": "NA",
                                "email": "user@example.com",
                                "full_name": "Test User",
                                "date_of_birth": "1990-01-01",
                                "street_address": "1 Test Street",
                                "country": "BR",
                                "city": "DLJPR",
                                "zip_code": "10001",
                                "cc": [],
                                "bcc": [],
                                "stateCode": "DL"
                              },
                              "updated_on": 1775034399,
                              "type": "purchase",
                              "paymentMethod": "APPLEPAY",
                              "amountUnit": "MAJOR",
                              "errorMsg": "",
                              "errorCode": "NA",
                              "force_recurring": false,
                              "created_on": 1775034399,
                              "merchantRef": "order-12345",
                              "purchase": {
                                "currency": "USD",
                                "products": [
                                  {
                                    "name": "Test User",
                                    "quantity": 1,
                                    "price": 10,
                                    "discount": 0,
                                    "tax_percent": "0.00"
                                  }
                                ],
                                "total": 10,
                                "requestAmount": 10,
                                "language": "en",
                                "notes": "",
                                "debt": 0,
                                "total_formatted": 1,
                                "taxAmount": 0,
                                "taxPercent": 0,
                                "request_client_details": [],
                                "email_message": "user@example.com"
                              },
                              "issuer_details": {
                                "website": "",
                                "legal_street_address": "1 Test Street",
                                "legal_country": "",
                                "legal_city": "",
                                "legal_zip_code": "10001",
                                "bank_accounts": [
                                  {}
                                ],
                                "legal_name": "Test Merchant",
                                "brand_name": "Test Merchant",
                                "registration_number": "",
                                "tax_number": ""
                              },
                              "transaction_data": {
                                "payment_method": "",
                                "flow": "payform",
                                "extra": {},
                                "country": "",
                                "attempts": []
                              },
                              "status": "CREATED",
                              "status_history": [
                                {
                                  "status": "created",
                                  "timestamp": 1775034399
                                }
                              ],
                              "is_test": false,
                              "brand_id": "{{BrandId}}",
                              "send_receipt": false,
                              "is_recurring_token": false,
                              "skip_capture": false,
                              "reference_generated": "PS1032",
                              "issued": "2026-04-01",
                              "due": 1775034399,
                              "refund_upto": 0,
                              "cc_descriptor": "",
                              "fraudScore": "NA",
                              "trustScore": "NA",
                              "extraFee": "0",
                              "paidOn": 0,
                              "receivedAmt": 0,
                              "taxAmount": 0,
                              "surcharge": 0,
                              "surchargeType": "",
                              "sessionId": "",
                              "refund_availability": "NONE",
                              "refundable_amount": 0,
                              "success_redirect": "https://merchant.example/success-redirect",
                              "failure_redirect": "https://merchant.example/failure-redirect",
                              "pending_redirect": "https://merchant.example/pending-redirect",
                              "cancel_redirect": "https://merchant.example/cancel-redirect",
                              "success_callback": "https://merchant.example/success-callback",
                              "failure_callback": "https://merchant.example/failure-callback",
                              "platform": "API",
                              "created_from_ip": "203.0.113.10",
                              "checkout_url": "https://api.choicepay.ca/payments/6b5a5977ac8e022facb31f3346f61ed0/",
                              "direct_post_url": "https://api.choicepay.ca/api/v1/p/69cce01f5bae56fd5547a993/",
                              "payoutProcess": false
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
              "className": "api-section",
              "id": "decrypted"
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
                        "id": "api-applepay.h2.0276",
                        "value": "Seamless: decrypted payload"
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
                            "id": "api-applepay.span.0277",
                            "value": "POST"
                          }
                        ]
                      },
                      {
                        "type": "text",
                        "id": "api-applepay.div.0278",
                        "value": "/purchases/"
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
                        "id": "api-applepay.p.0279",
                        "value": "For merchant decryption: your backend verifies Apple's signature chain, decrypts the token with your Payment Processing Certificate private key, and submits the decrypted message exactly as your decryption layer produced it. The PAN is on your side, so this route requires full PCI DSS (SAQ D). The decrypted message goes inside "
                      },
                      {
                        "type": "element",
                        "tag": "code",
                        "props": {},
                        "children": [
                          {
                            "type": "text",
                            "id": "api-applepay.code.0280",
                            "value": "extraParam.applepay_param"
                          }
                        ]
                      },
                      {
                        "type": "text",
                        "id": "api-applepay.p.0281",
                        "value": "; the core purchase fields ("
                      },
                      {
                        "type": "element",
                        "tag": "code",
                        "props": {},
                        "children": [
                          {
                            "type": "text",
                            "id": "api-applepay.code.0282",
                            "value": "purchase.currency"
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
                            "id": "api-applepay.code.0283",
                            "value": "purchase.products[]"
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
                            "id": "api-applepay.code.0284",
                            "value": "brand_id"
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
                            "id": "api-applepay.code.0285",
                            "value": "paymentMethod: \"APPLEPAY\""
                          }
                        ]
                      },
                      {
                        "type": "text",
                        "id": "api-applepay.p.0286",
                        "value": ") are the same as the Redirect flow above."
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
                        "id": "api-applepay.h3.0287",
                        "value": "applepay_param fields"
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
                                        "id": "api-applepay.th.0288",
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
                                        "id": "api-applepay.th.0289",
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
                                        "id": "api-applepay.th.0290",
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
                                        "id": "api-applepay.th.0291",
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
                                            "id": "api-applepay.code.0292",
                                            "value": "apple_merchant_id"
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
                                        "id": "api-applepay.td.0293",
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
                                        "id": "api-applepay.td.0294",
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
                                        "id": "api-applepay.td.0295",
                                        "value": "Your Apple Pay Merchant ID, e.g. "
                                      },
                                      {
                                        "type": "element",
                                        "tag": "code",
                                        "props": {},
                                        "children": [
                                          {
                                            "type": "text",
                                            "id": "api-applepay.code.0296",
                                            "value": "merchant.com.yourcompany.store"
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
                                            "id": "api-applepay.code.0297",
                                            "value": "applepay_decrypted_payload"
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
                                        "id": "api-applepay.td.0298",
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
                                        "id": "api-applepay.td.0299",
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
                                        "id": "api-applepay.td.0300",
                                        "value": "The decrypted message object; include "
                                      },
                                      {
                                        "type": "element",
                                        "tag": "code",
                                        "props": {},
                                        "children": [
                                          {
                                            "type": "text",
                                            "id": "api-applepay.code.0301",
                                            "value": "transactionId"
                                          }
                                        ]
                                      },
                                      {
                                        "type": "text",
                                        "id": "api-applepay.td.0302",
                                        "value": " so Paysecure can enforce freshness and replay protection."
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
                                            "id": "api-applepay.code.0303",
                                            "value": "applepay_decrypted_payload.applicationPrimaryAccountNumber"
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
                                        "id": "api-applepay.td.0304",
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
                                        "id": "api-applepay.td.0305",
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
                                        "id": "api-applepay.td.0306",
                                        "value": "DPAN, not the funding PAN. PCI account data."
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
                                            "id": "api-applepay.code.0307",
                                            "value": "applepay_decrypted_payload.applicationExpirationDate"
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
                                        "id": "api-applepay.td.0308",
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
                                        "id": "api-applepay.td.0309",
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
                                        "id": "api-applepay.td.0310",
                                        "value": "DPAN expiry in "
                                      },
                                      {
                                        "type": "element",
                                        "tag": "code",
                                        "props": {},
                                        "children": [
                                          {
                                            "type": "text",
                                            "id": "api-applepay.code.0311",
                                            "value": "YYMMDD"
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
                                            "id": "api-applepay.code.0312",
                                            "value": "applepay_decrypted_payload.currencyCode"
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
                                        "id": "api-applepay.td.0313",
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
                                        "id": "api-applepay.td.0314",
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
                                        "id": "api-applepay.td.0315",
                                        "value": "ISO 4217 numeric currency code, e.g. "
                                      },
                                      {
                                        "type": "element",
                                        "tag": "code",
                                        "props": {},
                                        "children": [
                                          {
                                            "type": "text",
                                            "id": "api-applepay.code.0316",
                                            "value": "978"
                                          }
                                        ]
                                      },
                                      {
                                        "type": "text",
                                        "id": "api-applepay.td.0317",
                                        "value": " for EUR."
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
                                            "id": "api-applepay.code.0318",
                                            "value": "applepay_decrypted_payload.transactionAmount"
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
                                        "id": "api-applepay.td.0319",
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
                                        "id": "api-applepay.td.0320",
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
                                        "id": "api-applepay.td.0321",
                                        "value": "Transaction amount in minor units."
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
                                            "id": "api-applepay.code.0322",
                                            "value": "applepay_decrypted_payload.paymentDataType"
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
                                        "id": "api-applepay.td.0323",
                                        "value": "enum"
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
                                        "id": "api-applepay.td.0324",
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
                                            "id": "api-applepay.code.0325",
                                            "value": "3DSecure"
                                          }
                                        ]
                                      },
                                      {
                                        "type": "text",
                                        "id": "api-applepay.td.0326",
                                        "value": " or "
                                      },
                                      {
                                        "type": "element",
                                        "tag": "code",
                                        "props": {},
                                        "children": [
                                          {
                                            "type": "text",
                                            "id": "api-applepay.code.0327",
                                            "value": "EMV"
                                          }
                                        ]
                                      },
                                      {
                                        "type": "text",
                                        "id": "api-applepay.td.0328",
                                        "value": "; drives which credential fields are present."
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
                                            "id": "api-applepay.code.0329",
                                            "value": "applepay_decrypted_payload.paymentData.onlinePaymentCryptogram"
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
                                        "id": "api-applepay.td.0330",
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
                                        "id": "api-applepay.td.0331",
                                        "value": "Conditional"
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
                                        "id": "api-applepay.td.0332",
                                        "value": "Mandatory when "
                                      },
                                      {
                                        "type": "element",
                                        "tag": "code",
                                        "props": {},
                                        "children": [
                                          {
                                            "type": "text",
                                            "id": "api-applepay.code.0333",
                                            "value": "paymentDataType"
                                          }
                                        ]
                                      },
                                      {
                                        "type": "text",
                                        "id": "api-applepay.td.0334",
                                        "value": " is "
                                      },
                                      {
                                        "type": "element",
                                        "tag": "code",
                                        "props": {},
                                        "children": [
                                          {
                                            "type": "text",
                                            "id": "api-applepay.code.0335",
                                            "value": "3DSecure"
                                          }
                                        ]
                                      },
                                      {
                                        "type": "text",
                                        "id": "api-applepay.td.0336",
                                        "value": "; the single-use network cryptogram, which must reach the network unaltered."
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
                                            "id": "api-applepay.code.0337",
                                            "value": "applepay_decrypted_payload.paymentData.eciIndicator"
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
                                        "id": "api-applepay.td.0338",
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
                                        "id": "api-applepay.td.0339",
                                        "value": "Optional"
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
                                        "id": "api-applepay.td.0340",
                                        "value": "Include only if present in the decrypted payload; never synthesise a value."
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
                                            "id": "api-applepay.code.0341",
                                            "value": "applepay_decrypted_payload.paymentData.emvData"
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
                                        "id": "api-applepay.td.0342",
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
                                        "id": "api-applepay.td.0343",
                                        "value": "Conditional"
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
                                        "id": "api-applepay.td.0344",
                                        "value": "Mandatory when "
                                      },
                                      {
                                        "type": "element",
                                        "tag": "code",
                                        "props": {},
                                        "children": [
                                          {
                                            "type": "text",
                                            "id": "api-applepay.code.0345",
                                            "value": "paymentDataType"
                                          }
                                        ]
                                      },
                                      {
                                        "type": "text",
                                        "id": "api-applepay.td.0346",
                                        "value": " is "
                                      },
                                      {
                                        "type": "element",
                                        "tag": "code",
                                        "props": {},
                                        "children": [
                                          {
                                            "type": "text",
                                            "id": "api-applepay.code.0347",
                                            "value": "EMV"
                                          }
                                        ]
                                      },
                                      {
                                        "type": "text",
                                        "id": "api-applepay.td.0348",
                                        "value": "; forward verbatim."
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
                        "id": "api-applepay.h3.0349",
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
                                        "id": "api-applepay.th.0350",
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
                                        "id": "api-applepay.th.0351",
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
                                        "id": "api-applepay.th.0352",
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
                                            "id": "api-applepay.code.0353",
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
                                        "id": "api-applepay.td.0354",
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
                                        "id": "api-applepay.td.0355",
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
                                            "id": "api-applepay.code.0356",
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
                                        "id": "api-applepay.td.0357",
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
                                        "id": "api-applepay.td.0358",
                                        "value": "Current status: "
                                      },
                                      {
                                        "type": "element",
                                        "tag": "code",
                                        "props": {},
                                        "children": [
                                          {
                                            "type": "text",
                                            "id": "api-applepay.code.0359",
                                            "value": "created"
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
                                            "id": "api-applepay.code.0360",
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
                                            "id": "api-applepay.code.0361",
                                            "value": "paid"
                                          }
                                        ]
                                      },
                                      {
                                        "type": "text",
                                        "id": "api-applepay.td.0362",
                                        "value": " or "
                                      },
                                      {
                                        "type": "element",
                                        "tag": "code",
                                        "props": {},
                                        "children": [
                                          {
                                            "type": "text",
                                            "id": "api-applepay.code.0363",
                                            "value": "error"
                                          }
                                        ]
                                      },
                                      {
                                        "type": "text",
                                        "id": "api-applepay.td.0364",
                                        "value": ". Also repeated in "
                                      },
                                      {
                                        "type": "element",
                                        "tag": "code",
                                        "props": {},
                                        "children": [
                                          {
                                            "type": "text",
                                            "id": "api-applepay.code.0365",
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
                                            "id": "api-applepay.code.0366",
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
                                        "id": "api-applepay.td.0367",
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
                                        "id": "api-applepay.td.0368",
                                        "value": "The method used, "
                                      },
                                      {
                                        "type": "element",
                                        "tag": "code",
                                        "props": {},
                                        "children": [
                                          {
                                            "type": "text",
                                            "id": "api-applepay.code.0369",
                                            "value": "APPLEPAY"
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
                                            "id": "api-applepay.code.0370",
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
                                        "id": "api-applepay.td.0371",
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
                                            "id": "api-applepay.code.0372",
                                            "value": "MAJOR"
                                          }
                                        ]
                                      },
                                      {
                                        "type": "text",
                                        "id": "api-applepay.td.0373",
                                        "value": " for full currency units, "
                                      },
                                      {
                                        "type": "element",
                                        "tag": "code",
                                        "props": {},
                                        "children": [
                                          {
                                            "type": "text",
                                            "id": "api-applepay.code.0374",
                                            "value": "MINOR"
                                          }
                                        ]
                                      },
                                      {
                                        "type": "text",
                                        "id": "api-applepay.td.0375",
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
                                            "id": "api-applepay.code.0376",
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
                                        "id": "api-applepay.td.0377",
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
                                            "id": "api-applepay.code.0378",
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
                                            "id": "api-applepay.code.0379",
                                            "value": "products[]"
                                          }
                                        ]
                                      },
                                      {
                                        "type": "text",
                                        "id": "api-applepay.td.0380",
                                        "value": " and "
                                      },
                                      {
                                        "type": "element",
                                        "tag": "code",
                                        "props": {},
                                        "children": [
                                          {
                                            "type": "text",
                                            "id": "api-applepay.code.0381",
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
                                            "id": "api-applepay.code.0382",
                                            "value": "transaction_data.attempts[]"
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
                                        "id": "api-applepay.td.0383",
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
                                        "id": "api-applepay.td.0384",
                                        "value": "One entry per authorisation attempt. On failure, "
                                      },
                                      {
                                        "type": "element",
                                        "tag": "code",
                                        "props": {},
                                        "children": [
                                          {
                                            "type": "text",
                                            "id": "api-applepay.code.0385",
                                            "value": "attempts[].error"
                                          }
                                        ]
                                      },
                                      {
                                        "type": "text",
                                        "id": "api-applepay.td.0386",
                                        "value": " carries the decline reason."
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
                                            "id": "api-applepay.code.0387",
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
                                        "id": "api-applepay.td.0388",
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
                                        "id": "api-applepay.td.0389",
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
                                            "id": "api-applepay.code.0390",
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
                                        "id": "api-applepay.td.0391",
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
                                        "id": "api-applepay.td.0392",
                                        "value": "Every status the purchase passed through, each with a UNIX "
                                      },
                                      {
                                        "type": "element",
                                        "tag": "code",
                                        "props": {},
                                        "children": [
                                          {
                                            "type": "text",
                                            "id": "api-applepay.code.0393",
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
                        "tag": "div",
                        "props": {
                          "className": "code"
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
                              "className": "code-head"
                            },
                            "children": [
                              {
                                "type": "element",
                                "tag": "span",
                                "props": {
                                  "className": "code-tabs"
                                },
                                "children": [
                                  {
                                    "type": "element",
                                    "tag": "button",
                                    "props": {
                                      "className": "on"
                                    },
                                    "children": [
                                      {
                                        "type": "text",
                                        "id": "api-applepay.button.0394",
                                        "value": "3DSecure"
                                      }
                                    ]
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
                                    "id": "api-applepay.button.0395",
                                    "value": "Copy"
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
                            "tag": "pre",
                            "props": {},
                            "children": [
                              {
                                "type": "element",
                                "tag": "span",
                                "props": {
                                  "className": "tok-p"
                                },
                                "children": [
                                  {
                                    "type": "text",
                                    "id": "api-applepay.span.0396",
                                    "value": "\"extraParam\""
                                  }
                                ]
                              },
                              {
                                "type": "text",
                                "value": ": {\n  "
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
                                    "id": "api-applepay.span.0397",
                                    "value": "\"applepay_param\""
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
                                    "id": "api-applepay.span.0398",
                                    "value": "\"apple_merchant_id\""
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
                                    "id": "api-applepay.span.0399",
                                    "value": "\"merchant.com.yourcompany.store\""
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
                                    "id": "api-applepay.span.0400",
                                    "value": "\"applepay_decrypted_payload\""
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
                                    "id": "api-applepay.span.0401",
                                    "value": "\"applicationPrimaryAccountNumber\""
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
                                    "id": "api-applepay.span.0402",
                                    "value": "\"4895370012003478\""
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
                                    "id": "api-applepay.span.0403",
                                    "value": "\"applicationExpirationDate\""
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
                                    "id": "api-applepay.span.0404",
                                    "value": "\"271231\""
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
                                    "id": "api-applepay.span.0405",
                                    "value": "\"currencyCode\""
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
                                    "id": "api-applepay.span.0406",
                                    "value": "\"978\""
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
                                    "id": "api-applepay.span.0407",
                                    "value": "\"transactionAmount\""
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
                                    "id": "api-applepay.span.0408",
                                    "value": "10499"
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
                                    "id": "api-applepay.span.0409",
                                    "value": "\"deviceManufacturerIdentifier\""
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
                                    "id": "api-applepay.span.0410",
                                    "value": "\"040010030273\""
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
                                    "id": "api-applepay.span.0411",
                                    "value": "\"paymentDataType\""
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
                                    "id": "api-applepay.span.0412",
                                    "value": "\"3DSecure\""
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
                                    "id": "api-applepay.span.0413",
                                    "value": "\"paymentData\""
                                  }
                                ]
                              },
                              {
                                "type": "text",
                                "value": ": {\n        "
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
                                    "id": "api-applepay.span.0414",
                                    "value": "\"onlinePaymentCryptogram\""
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
                                    "id": "api-applepay.span.0415",
                                    "value": "\"Ah0A8Jd...AAADFA==\""
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
                                    "id": "api-applepay.span.0416",
                                    "value": "\"eciIndicator\""
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
                                    "id": "api-applepay.span.0417",
                                    "value": "\"5\""
                                  }
                                ]
                              },
                              {
                                "type": "text",
                                "value": "\n      }\n    }\n  }\n}"
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
                          "className": "code"
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
                              "className": "code-head"
                            },
                            "children": [
                              {
                                "type": "element",
                                "tag": "span",
                                "props": {
                                  "className": "code-tabs"
                                },
                                "children": [
                                  {
                                    "type": "element",
                                    "tag": "button",
                                    "props": {
                                      "className": "on"
                                    },
                                    "children": [
                                      {
                                        "type": "text",
                                        "id": "api-applepay.button.0418",
                                        "value": "EMV"
                                      }
                                    ]
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
                                    "id": "api-applepay.button.0419",
                                    "value": "Copy"
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
                            "tag": "pre",
                            "props": {},
                            "children": [
                              {
                                "type": "element",
                                "tag": "span",
                                "props": {
                                  "className": "tok-c"
                                },
                                "children": [
                                  {
                                    "type": "text",
                                    "id": "api-applepay.span.0420",
                                    "value": "# Regional networks (e.g. China UnionPay); no ECI"
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
                                  "className": "tok-p"
                                },
                                "children": [
                                  {
                                    "type": "text",
                                    "id": "api-applepay.span.0421",
                                    "value": "\"applepay_decrypted_payload\""
                                  }
                                ]
                              },
                              {
                                "type": "text",
                                "value": ": {\n  "
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
                                    "id": "api-applepay.span.0422",
                                    "value": "\"applicationPrimaryAccountNumber\""
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
                                    "id": "api-applepay.span.0423",
                                    "value": "\"6212345678901232\""
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
                                    "id": "api-applepay.span.0424",
                                    "value": "\"applicationExpirationDate\""
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
                                    "id": "api-applepay.span.0425",
                                    "value": "\"281130\""
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
                                    "id": "api-applepay.span.0426",
                                    "value": "\"currencyCode\""
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
                                    "id": "api-applepay.span.0427",
                                    "value": "\"978\""
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
                                    "id": "api-applepay.span.0428",
                                    "value": "\"transactionAmount\""
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
                                    "id": "api-applepay.span.0429",
                                    "value": "10499"
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
                                    "id": "api-applepay.span.0430",
                                    "value": "\"paymentDataType\""
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
                                    "id": "api-applepay.span.0431",
                                    "value": "\"EMV\""
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
                                    "id": "api-applepay.span.0432",
                                    "value": "\"paymentData\""
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
                                    "id": "api-applepay.span.0433",
                                    "value": "\"emvData\""
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
                                    "id": "api-applepay.span.0434",
                                    "value": "\"nwARoIgp…\""
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
                                    "id": "api-applepay.span.0435",
                                    "value": "\"encryptedPINData\""
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
                                    "id": "api-applepay.span.0436",
                                    "value": "\"00000000…\""
                                  }
                                ]
                              },
                              {
                                "type": "text",
                                "value": "\n  }\n}"
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
              "id": "status"
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
                        "id": "api-applepay.h2.0437",
                        "value": "Response and status"
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
                        "id": "api-applepay.p.0438",
                        "value": "A successful call returns the purchase object with status "
                      },
                      {
                        "type": "element",
                        "tag": "code",
                        "props": {},
                        "children": [
                          {
                            "type": "text",
                            "id": "api-applepay.code.0439",
                            "value": "created"
                          }
                        ]
                      },
                      {
                        "type": "text",
                        "id": "api-applepay.p.0440",
                        "value": " (Redirect) or moves into processing (Seamless). Authorisation proceeds asynchronously: if the credential needs customer interaction (a 3-D Secure step-up), send the customer to the returned "
                      },
                      {
                        "type": "element",
                        "tag": "code",
                        "props": {},
                        "children": [
                          {
                            "type": "text",
                            "id": "api-applepay.code.0441",
                            "value": "checkout_url"
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
                            "id": "api-applepay.code.0442",
                            "value": "redirect_url"
                          }
                        ]
                      },
                      {
                        "type": "text",
                        "id": "api-applepay.p.0443",
                        "value": "; they come back via your redirect URLs."
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
                                        "id": "api-applepay.th.0444",
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
                                        "id": "api-applepay.th.0445",
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
                                        "tag": "code",
                                        "props": {},
                                        "children": [
                                          {
                                            "type": "text",
                                            "id": "api-applepay.code.0446",
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
                                        "id": "api-applepay.td.0447",
                                        "value": "Transaction successful"
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
                                            "id": "api-applepay.code.0448",
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
                                        "id": "api-applepay.td.0449",
                                        "value": "Payment under processing"
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
                                            "id": "api-applepay.code.0450",
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
                                        "id": "api-applepay.td.0451",
                                        "value": "Not completed within "
                                      },
                                      {
                                        "type": "element",
                                        "tag": "code",
                                        "props": {},
                                        "children": [
                                          {
                                            "type": "text",
                                            "id": "api-applepay.code.0452",
                                            "value": "expireInMin"
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
                                        "tag": "code",
                                        "props": {},
                                        "children": [
                                          {
                                            "type": "text",
                                            "id": "api-applepay.code.0453",
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
                                        "id": "api-applepay.td.0454",
                                        "value": "Failed; inspect "
                                      },
                                      {
                                        "type": "element",
                                        "tag": "code",
                                        "props": {},
                                        "children": [
                                          {
                                            "type": "text",
                                            "id": "api-applepay.code.0455",
                                            "value": "transaction_data.attempts[].error"
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
                        "id": "api-applepay.p.0456",
                        "value": "The final state always arrives on your "
                      },
                      {
                        "type": "element",
                        "tag": "code",
                        "props": {},
                        "children": [
                          {
                            "type": "text",
                            "id": "api-applepay.code.0457",
                            "value": "success_callback"
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
                            "id": "api-applepay.code.0458",
                            "value": "failure_callback"
                          }
                        ]
                      },
                      {
                        "type": "text",
                        "id": "api-applepay.p.0459",
                        "value": " URLs; treat those, not the synchronous response or the customer's return redirect, as the source of truth."
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
                        "id": "api-applepay.h3.0460",
                        "value": "Errors"
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
                                        "id": "api-applepay.th.0461",
                                        "value": "Symptom"
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
                                        "id": "api-applepay.th.0462",
                                        "value": "Likely cause & fix"
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
                                        "id": "api-applepay.td.0463",
                                        "value": "Decryption failed"
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
                                        "id": "api-applepay.td.0464",
                                        "value": "Wrong or expired Payment Processing Certificate, or the key does not match the cert Apple encrypted to"
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
                                            "id": "api-applepay.code.0465",
                                            "value": "publicKeyHash"
                                          }
                                        ]
                                      },
                                      {
                                        "type": "text",
                                        "id": "api-applepay.td.0466",
                                        "value": " mismatch"
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
                                        "id": "api-applepay.td.0467",
                                        "value": "Token encrypted to a different certificate than the decrypting party holds"
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
                                        "id": "api-applepay.td.0468",
                                        "value": "Merchant validation fails"
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
                                        "id": "api-applepay.td.0469",
                                        "value": "Domain not verified, wrong Merchant Identity Certificate, or "
                                      },
                                      {
                                        "type": "element",
                                        "tag": "code",
                                        "props": {},
                                        "children": [
                                          {
                                            "type": "text",
                                            "id": "api-applepay.code.0470",
                                            "value": "initiativeContext"
                                          }
                                        ]
                                      },
                                      {
                                        "type": "text",
                                        "id": "api-applepay.td.0471",
                                        "value": " mismatch"
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
                                        "id": "api-applepay.td.0472",
                                        "value": "400, missing "
                                      },
                                      {
                                        "type": "element",
                                        "tag": "code",
                                        "props": {},
                                        "children": [
                                          {
                                            "type": "text",
                                            "id": "api-applepay.code.0473",
                                            "value": "applepay_param"
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
                                        "id": "api-applepay.td.0474",
                                        "value": "Payload not inside "
                                      },
                                      {
                                        "type": "element",
                                        "tag": "code",
                                        "props": {},
                                        "children": [
                                          {
                                            "type": "text",
                                            "id": "api-applepay.code.0475",
                                            "value": "extraParam.applepay_param"
                                          }
                                        ]
                                      },
                                      {
                                        "type": "text",
                                        "id": "api-applepay.td.0476",
                                        "value": ", or "
                                      },
                                      {
                                        "type": "element",
                                        "tag": "code",
                                        "props": {},
                                        "children": [
                                          {
                                            "type": "text",
                                            "id": "api-applepay.code.0477",
                                            "value": "paymentData"
                                          }
                                        ]
                                      },
                                      {
                                        "type": "text",
                                        "id": "api-applepay.td.0478",
                                        "value": " re-serialised rather than passed verbatim"
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
                        "tag": "div",
                        "props": {
                          "className": "code"
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
                                    "id": "api-applepay.span.0479",
                                    "value": "GET /purchases/{purchaseId}/"
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
                                    "id": "api-applepay.button.0480",
                                    "value": "Copy"
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
                            "tag": "pre",
                            "props": {},
                            "children": [
                              {
                                "type": "element",
                                "tag": "span",
                                "props": {
                                  "className": "tok-k"
                                },
                                "children": [
                                  {
                                    "type": "text",
                                    "id": "api-applepay.span.0481",
                                    "value": "GET"
                                  }
                                ]
                              },
                              {
                                "type": "text",
                                "value": " "
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
                                    "id": "api-applepay.span.0482",
                                    "value": "/purchases/{purchaseId}/"
                                  }
                                ]
                              },
                              {
                                "type": "text",
                                "value": "\n→ {\n  "
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
                                    "id": "api-applepay.span.0483",
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
                                    "id": "api-applepay.span.0484",
                                    "value": "\"9f1c2e7a5bae56fd5547a993\""
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
                                    "id": "api-applepay.span.0485",
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
                                    "id": "api-applepay.span.0486",
                                    "value": "\"paid\""
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
                                    "id": "api-applepay.span.0487",
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
                                    "id": "api-applepay.span.0488",
                                    "value": "\"APPLEPAY\""
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
                                    "id": "api-applepay.span.0489",
                                    "value": "\"payment\""
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
                                    "id": "api-applepay.span.0490",
                                    "value": "\"method\""
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
                                    "id": "api-applepay.span.0491",
                                    "value": "\"apple_pay\""
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
                                    "id": "api-applepay.span.0492",
                                    "value": "\"token_type\""
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
                                    "id": "api-applepay.span.0493",
                                    "value": "\"DPAN\""
                                  }
                                ]
                              },
                              {
                                "type": "text",
                                "value": " },\n  "
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
                                    "id": "api-applepay.span.0494",
                                    "value": "\"transaction_data\""
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
                                    "id": "api-applepay.span.0495",
                                    "value": "\"attempts\""
                                  }
                                ]
                              },
                              {
                                "type": "text",
                                "value": ": [ "
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
                                    "value": "…"
                                  }
                                ]
                              },
                              {
                                "type": "text",
                                "value": " ] }\n}"
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
                                    "id": "api-applepay.b.0496",
                                    "value": "Testing in sandbox:"
                                  }
                                ]
                              },
                              {
                                "type": "text",
                                "id": "api-applepay.p.0497",
                                "value": " card simulators do not work for wallets, but Apple's official Sandbox flow does. Create a Sandbox tester iCloud account, add Apple's test cards to Wallet on a real device, use the sandbox-verified domains and sandbox CSRs, then run test payments. Full setup in the "
                              },
                              {
                                "type": "element",
                                "tag": "DocLink",
                                "props": {
                                  "className": "inline",
                                  "href": "/applepay#testing"
                                },
                                "children": [
                                  {
                                    "type": "text",
                                    "id": "api-applepay.doclink.0498",
                                    "value": "Apple Pay guide testing section"
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
                          }
                        ]
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
                  "updated": "Last updated 08 Jul 2026 · v2.5"
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
                      "href": "/api-googlepay"
                    },
                    "children": [
                      {
                        "type": "element",
                        "tag": "small",
                        "props": {},
                        "children": [
                          {
                            "type": "text",
                            "id": "api-applepay.small.0499",
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
                            "id": "api-applepay.b.0500",
                            "value": "← Google Pay"
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
                      "href": "/api-interac-etransfer"
                    },
                    "children": [
                      {
                        "type": "element",
                        "tag": "small",
                        "props": {},
                        "children": [
                          {
                            "type": "text",
                            "id": "api-applepay.small.0501",
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
                            "id": "api-applepay.b.0502",
                            "value": "Interac e-Transfer →"
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
