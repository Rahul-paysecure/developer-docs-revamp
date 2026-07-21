import { defineDocument } from '../schema.js';

export const ApiGooglepayTreeDocument = defineDocument({
  "schemaVersion": 1,
  "slug": "api-googlepay",
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
                    "id": "api-googlepay.doclink.0001",
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
                    "id": "api-googlepay.doclink.0002",
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
                "id": "api-googlepay.div.0003",
                "value": "Google Pay"
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
              "id": "gpay-overview",
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
                        "id": "api-googlepay.h1.0004",
                        "value": "Google Pay API"
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
                        "id": "api-googlepay.p.0005",
                        "value": "One Purchases API serves every Google Pay integration. What changes is the "
                      },
                      {
                        "type": "element",
                        "tag": "code",
                        "props": {},
                        "children": [
                          {
                            "type": "text",
                            "id": "api-googlepay.code.0006",
                            "value": "paymentMethod"
                          }
                        ]
                      },
                      {
                        "type": "text",
                        "id": "api-googlepay.p.0007",
                        "value": " code and, for server-to-server, the payload inside "
                      },
                      {
                        "type": "element",
                        "tag": "code",
                        "props": {},
                        "children": [
                          {
                            "type": "text",
                            "id": "api-googlepay.code.0008",
                            "value": "extraParam.googlepay_param"
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
                        "id": "api-googlepay.p.0009",
                        "value": "Concepts, console setup and flow selection live in the "
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
                            "id": "api-googlepay.doclink.0010",
                            "value": "Google Pay guide"
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
                        "id": "api-googlepay.p.0011",
                        "value": "All calls send "
                      },
                      {
                        "type": "element",
                        "tag": "code",
                        "props": {},
                        "children": [
                          {
                            "type": "text",
                            "id": "api-googlepay.code.0012",
                            "value": "Authorization: Bearer {APIKey}"
                          }
                        ]
                      },
                      {
                        "type": "text",
                        "id": "api-googlepay.p.0013",
                        "value": " and "
                      },
                      {
                        "type": "element",
                        "tag": "code",
                        "props": {},
                        "children": [
                          {
                            "type": "text",
                            "id": "api-googlepay.code.0014",
                            "value": "Content-Type: application/json"
                          }
                        ]
                      },
                      {
                        "type": "text",
                        "id": "api-googlepay.p.0015",
                        "value": " to the base URL "
                      },
                      {
                        "type": "element",
                        "tag": "code",
                        "props": {},
                        "children": [
                          {
                            "type": "text",
                            "id": "api-googlepay.code.0016",
                            "value": "https://api.paysecure.net/api/v1"
                          }
                        ]
                      },
                      {
                        "type": "text",
                        "id": "api-googlepay.p.0017",
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
                            "id": "api-googlepay.doclink.0018",
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
                                        "id": "api-googlepay.th.0019",
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
                                        "id": "api-googlepay.th.0020",
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
                                        "id": "api-googlepay.th.0021",
                                        "value": "Google Pay payload"
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
                                            "id": "api-googlepay.b.0022",
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
                                            "id": "api-googlepay.code.0023",
                                            "value": "GOOGLEPAY"
                                          }
                                        ]
                                      },
                                      {
                                        "type": "text",
                                        "id": "api-googlepay.td.0024",
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
                                        "id": "api-googlepay.td.0025",
                                        "value": "None; the cashier collects the token itself"
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
                                            "id": "api-googlepay.b.0026",
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
                                            "id": "api-googlepay.code.0027",
                                            "value": "GOOGLEPAY-REDIRECT"
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
                                        "id": "api-googlepay.td.0028",
                                        "value": "None; the customer is redirected to the PSP's interface, where the Google Pay JS loads"
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
                                            "id": "api-googlepay.b.0029",
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
                                            "id": "api-googlepay.code.0030",
                                            "value": "GOOGLEPAY"
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
                                            "id": "api-googlepay.code.0031",
                                            "value": "googlepay_encrypted_payload"
                                          }
                                        ]
                                      },
                                      {
                                        "type": "text",
                                        "id": "api-googlepay.td.0032",
                                        "value": ": the token forwarded verbatim"
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
                                            "id": "api-googlepay.b.0033",
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
                                            "id": "api-googlepay.code.0034",
                                            "value": "GOOGLEPAY"
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
                                            "id": "api-googlepay.code.0035",
                                            "value": "googlepay_decrypted_payload"
                                          }
                                        ]
                                      },
                                      {
                                        "type": "text",
                                        "id": "api-googlepay.td.0036",
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
                                "id": "api-googlepay.b.0037",
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
                                "id": "api-googlepay.code.0038",
                                "value": "GOOGLEPAY"
                              }
                            ]
                          },
                          {
                            "type": "text",
                            "id": "api-googlepay.p.0039",
                            "value": " covers both the Paysecure cashier and your own cashier. Paysecure tells them apart by the presence of "
                          },
                          {
                            "type": "element",
                            "tag": "code",
                            "props": {},
                            "children": [
                              {
                                "type": "text",
                                "id": "api-googlepay.code.0040",
                                "value": "extraParam.googlepay_param"
                              }
                            ]
                          },
                          {
                            "type": "text",
                            "id": "api-googlepay.p.0041",
                            "value": ": absent means the hosted cashier collects the token; present means you are submitting it server-to-server."
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
                        "id": "api-googlepay.h3.0042",
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
                                            "id": "api-googlepay.span.0043",
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
                                            "id": "api-googlepay.code.0044",
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
                                        "id": "api-googlepay.td.0045",
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
                                          "className": "method post"
                                        },
                                        "children": [
                                          {
                                            "type": "text",
                                            "id": "api-googlepay.span.0046",
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
                                            "id": "api-googlepay.code.0047",
                                            "value": "/createSession"
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
                                        "id": "api-googlepay.td.0048",
                                        "value": "Session for a saved customer (Redirect route, "
                                      },
                                      {
                                        "type": "element",
                                        "tag": "code",
                                        "props": {},
                                        "children": [
                                          {
                                            "type": "text",
                                            "id": "api-googlepay.code.0049",
                                            "value": "BrandId"
                                          }
                                        ]
                                      },
                                      {
                                        "type": "text",
                                        "id": "api-googlepay.td.0050",
                                        "value": " header)"
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
                                            "id": "api-googlepay.span.0051",
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
                                            "id": "api-googlepay.code.0052",
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
                                        "id": "api-googlepay.td.0053",
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
                        "id": "api-googlepay.h2.0054",
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
                            "id": "api-googlepay.span.0055",
                            "value": "POST"
                          }
                        ]
                      },
                      {
                        "type": "text",
                        "id": "api-googlepay.div.0056",
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
                        "id": "api-googlepay.p.0057",
                        "value": "A standard purchase with no Google Pay payload. Redirect the customer to the returned "
                      },
                      {
                        "type": "element",
                        "tag": "code",
                        "props": {},
                        "children": [
                          {
                            "type": "text",
                            "id": "api-googlepay.code.0058",
                            "value": "checkout_url"
                          }
                        ]
                      },
                      {
                        "type": "text",
                        "id": "api-googlepay.p.0059",
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
                                "id": "api-googlepay.b.0060",
                                "value": "Paysecure cashier:"
                              }
                            ]
                          },
                          {
                            "type": "text",
                            "id": "api-googlepay.li.0061",
                            "value": " set "
                          },
                          {
                            "type": "element",
                            "tag": "code",
                            "props": {},
                            "children": [
                              {
                                "type": "text",
                                "id": "api-googlepay.code.0062",
                                "value": "paymentMethod: \"GOOGLEPAY\""
                              }
                            ]
                          },
                          {
                            "type": "text",
                            "id": "api-googlepay.li.0063",
                            "value": " to deep-link straight into the Google Pay experience on the Paysecure cashier, or omit it to show every method enabled for your brand."
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
                                "id": "api-googlepay.b.0064",
                                "value": "PSP cashier:"
                              }
                            ]
                          },
                          {
                            "type": "text",
                            "id": "api-googlepay.li.0065",
                            "value": " set "
                          },
                          {
                            "type": "element",
                            "tag": "code",
                            "props": {},
                            "children": [
                              {
                                "type": "text",
                                "id": "api-googlepay.code.0066",
                                "value": "paymentMethod: \"GOOGLEPAY-REDIRECT\""
                              }
                            ]
                          },
                          {
                            "type": "text",
                            "id": "api-googlepay.li.0067",
                            "value": "; the customer is redirected to the PSP's interface, where the PSP's page loads the Google Pay JS and shows the button."
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
                        "id": "api-googlepay.h3.0068",
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
                                        "id": "api-googlepay.th.0069",
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
                                        "id": "api-googlepay.th.0070",
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
                                        "id": "api-googlepay.th.0071",
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
                                        "id": "api-googlepay.th.0072",
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
                                            "id": "api-googlepay.code.0073",
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
                                        "id": "api-googlepay.td.0074",
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
                                        "id": "api-googlepay.td.0075",
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
                                            "id": "api-googlepay.code.0076",
                                            "value": "GOOGLEPAY"
                                          }
                                        ]
                                      },
                                      {
                                        "type": "text",
                                        "id": "api-googlepay.td.0077",
                                        "value": " for the Paysecure cashier, "
                                      },
                                      {
                                        "type": "element",
                                        "tag": "code",
                                        "props": {},
                                        "children": [
                                          {
                                            "type": "text",
                                            "id": "api-googlepay.code.0078",
                                            "value": "GOOGLEPAY-REDIRECT"
                                          }
                                        ]
                                      },
                                      {
                                        "type": "text",
                                        "id": "api-googlepay.td.0079",
                                        "value": " for the PSP cashier. Omit to show all methods enabled for your brand."
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
                                            "id": "api-googlepay.code.0080",
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
                                        "id": "api-googlepay.td.0081",
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
                                        "id": "api-googlepay.td.0082",
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
                                        "id": "api-googlepay.td.0083",
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
                                            "id": "api-googlepay.code.0084",
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
                                        "id": "api-googlepay.td.0085",
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
                                        "id": "api-googlepay.td.0086",
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
                                        "id": "api-googlepay.td.0087",
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
                                            "id": "api-googlepay.code.0088",
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
                                        "id": "api-googlepay.td.0089",
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
                                        "id": "api-googlepay.td.0090",
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
                                        "id": "api-googlepay.td.0091",
                                        "value": "Price in decimal format, up to 2 decimals, major units (EUR 5 → "
                                      },
                                      {
                                        "type": "element",
                                        "tag": "code",
                                        "props": {},
                                        "children": [
                                          {
                                            "type": "text",
                                            "id": "api-googlepay.code.0092",
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
                                            "id": "api-googlepay.code.0093",
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
                                        "id": "api-googlepay.td.0094",
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
                                        "id": "api-googlepay.td.0095",
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
                                        "id": "api-googlepay.td.0096",
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
                                            "id": "api-googlepay.code.0097",
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
                                        "id": "api-googlepay.td.0098",
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
                                        "id": "api-googlepay.td.0099",
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
                                        "id": "api-googlepay.td.0100",
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
                                            "id": "api-googlepay.code.0101",
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
                                        "id": "api-googlepay.td.0102",
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
                                        "id": "api-googlepay.td.0103",
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
                                        "id": "api-googlepay.td.0104",
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
                                            "id": "api-googlepay.code.0105",
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
                                        "id": "api-googlepay.td.0106",
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
                                        "id": "api-googlepay.td.0107",
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
                                        "id": "api-googlepay.td.0108",
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
                                            "id": "api-googlepay.code.0109",
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
                                        "id": "api-googlepay.td.0110",
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
                                        "id": "api-googlepay.td.0111",
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
                                        "id": "api-googlepay.td.0112",
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
                                            "id": "api-googlepay.code.0113",
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
                                        "id": "api-googlepay.td.0114",
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
                                        "id": "api-googlepay.td.0115",
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
                                        "id": "api-googlepay.td.0116",
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
                                            "id": "api-googlepay.code.0117",
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
                                        "id": "api-googlepay.td.0118",
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
                                        "id": "api-googlepay.td.0119",
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
                                        "id": "api-googlepay.td.0120",
                                        "value": "ISO 3166 alpha-2 country code, upper case, for example "
                                      },
                                      {
                                        "type": "element",
                                        "tag": "code",
                                        "props": {},
                                        "children": [
                                          {
                                            "type": "text",
                                            "id": "api-googlepay.code.0121",
                                            "value": "GB"
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
                                            "id": "api-googlepay.code.0122",
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
                                        "id": "api-googlepay.td.0123",
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
                                        "id": "api-googlepay.td.0124",
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
                                        "id": "api-googlepay.td.0125",
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
                                            "id": "api-googlepay.code.0126",
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
                                        "id": "api-googlepay.td.0127",
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
                                        "id": "api-googlepay.td.0128",
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
                                        "id": "api-googlepay.td.0129",
                                        "value": "ZIP or postal code. If "
                                      },
                                      {
                                        "type": "element",
                                        "tag": "code",
                                        "props": {},
                                        "children": [
                                          {
                                            "type": "text",
                                            "id": "api-googlepay.code.0130",
                                            "value": "country"
                                          }
                                        ]
                                      },
                                      {
                                        "type": "text",
                                        "id": "api-googlepay.td.0131",
                                        "value": " is "
                                      },
                                      {
                                        "type": "element",
                                        "tag": "code",
                                        "props": {},
                                        "children": [
                                          {
                                            "type": "text",
                                            "id": "api-googlepay.code.0132",
                                            "value": "US"
                                          }
                                        ]
                                      },
                                      {
                                        "type": "text",
                                        "id": "api-googlepay.td.0133",
                                        "value": ", the format must be NNNNN or NNNNN-NNNN."
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
                                            "id": "api-googlepay.code.0134",
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
                                        "id": "api-googlepay.td.0135",
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
                                        "id": "api-googlepay.td.0136",
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
                                        "id": "api-googlepay.td.0137",
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
                                            "id": "api-googlepay.code.0138",
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
                                        "id": "api-googlepay.td.0139",
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
                                        "id": "api-googlepay.td.0140",
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
                                        "id": "api-googlepay.td.0141",
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
                                            "id": "api-googlepay.code.0142",
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
                                        "id": "api-googlepay.td.0143",
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
                                        "id": "api-googlepay.td.0144",
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
                                        "id": "api-googlepay.td.0145",
                                        "value": "Server-to-server webhook Paysecure POSTs to on failure."
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
                                            "id": "api-googlepay.code.0146",
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
                                        "id": "api-googlepay.td.0147",
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
                                        "id": "api-googlepay.td.0148",
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
                                        "id": "api-googlepay.td.0149",
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
                                            "id": "api-googlepay.code.0150",
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
                                        "id": "api-googlepay.td.0151",
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
                                        "id": "api-googlepay.td.0152",
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
                                        "id": "api-googlepay.td.0153",
                                        "value": "Payment window in minutes. Unpaid purchases move to "
                                      },
                                      {
                                        "type": "element",
                                        "tag": "code",
                                        "props": {},
                                        "children": [
                                          {
                                            "type": "text",
                                            "id": "api-googlepay.code.0154",
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
                        "id": "api-googlepay.h3.0155",
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
                                        "id": "api-googlepay.th.0156",
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
                                        "id": "api-googlepay.th.0157",
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
                                        "id": "api-googlepay.th.0158",
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
                                            "id": "api-googlepay.code.0159",
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
                                        "id": "api-googlepay.td.0160",
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
                                        "id": "api-googlepay.td.0161",
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
                                            "id": "api-googlepay.code.0162",
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
                                        "id": "api-googlepay.td.0163",
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
                                        "id": "api-googlepay.td.0164",
                                        "value": "Current status: "
                                      },
                                      {
                                        "type": "element",
                                        "tag": "code",
                                        "props": {},
                                        "children": [
                                          {
                                            "type": "text",
                                            "id": "api-googlepay.code.0165",
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
                                            "id": "api-googlepay.code.0166",
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
                                            "id": "api-googlepay.code.0167",
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
                                            "id": "api-googlepay.code.0168",
                                            "value": "expired"
                                          }
                                        ]
                                      },
                                      {
                                        "type": "text",
                                        "id": "api-googlepay.td.0169",
                                        "value": " or "
                                      },
                                      {
                                        "type": "element",
                                        "tag": "code",
                                        "props": {},
                                        "children": [
                                          {
                                            "type": "text",
                                            "id": "api-googlepay.code.0170",
                                            "value": "error"
                                          }
                                        ]
                                      },
                                      {
                                        "type": "text",
                                        "id": "api-googlepay.td.0171",
                                        "value": ". Also repeated at the root and in "
                                      },
                                      {
                                        "type": "element",
                                        "tag": "code",
                                        "props": {},
                                        "children": [
                                          {
                                            "type": "text",
                                            "id": "api-googlepay.code.0172",
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
                                            "id": "api-googlepay.code.0173",
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
                                        "id": "api-googlepay.td.0174",
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
                                        "id": "api-googlepay.td.0175",
                                        "value": "The method used, "
                                      },
                                      {
                                        "type": "element",
                                        "tag": "code",
                                        "props": {},
                                        "children": [
                                          {
                                            "type": "text",
                                            "id": "api-googlepay.code.0176",
                                            "value": "GOOGLEPAY"
                                          }
                                        ]
                                      },
                                      {
                                        "type": "text",
                                        "id": "api-googlepay.td.0177",
                                        "value": " or "
                                      },
                                      {
                                        "type": "element",
                                        "tag": "code",
                                        "props": {},
                                        "children": [
                                          {
                                            "type": "text",
                                            "id": "api-googlepay.code.0178",
                                            "value": "GOOGLEPAY-REDIRECT"
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
                                            "id": "api-googlepay.code.0179",
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
                                        "id": "api-googlepay.td.0180",
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
                                            "id": "api-googlepay.code.0181",
                                            "value": "MAJOR"
                                          }
                                        ]
                                      },
                                      {
                                        "type": "text",
                                        "id": "api-googlepay.td.0182",
                                        "value": " for full currency units, "
                                      },
                                      {
                                        "type": "element",
                                        "tag": "code",
                                        "props": {},
                                        "children": [
                                          {
                                            "type": "text",
                                            "id": "api-googlepay.code.0183",
                                            "value": "MINOR"
                                          }
                                        ]
                                      },
                                      {
                                        "type": "text",
                                        "id": "api-googlepay.td.0184",
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
                                            "id": "api-googlepay.code.0185",
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
                                        "id": "api-googlepay.td.0186",
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
                                        "id": "api-googlepay.td.0187",
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
                                            "id": "api-googlepay.code.0188",
                                            "value": "errorCode"
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
                                        "id": "api-googlepay.td.0189",
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
                                        "id": "api-googlepay.td.0190",
                                        "value": "Machine-readable error code; "
                                      },
                                      {
                                        "type": "element",
                                        "tag": "code",
                                        "props": {},
                                        "children": [
                                          {
                                            "type": "text",
                                            "id": "api-googlepay.code.0191",
                                            "value": "NA"
                                          }
                                        ]
                                      },
                                      {
                                        "type": "text",
                                        "id": "api-googlepay.td.0192",
                                        "value": " when there is no error."
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
                                            "id": "api-googlepay.code.0193",
                                            "value": "is_recurring_token"
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
                                        "id": "api-googlepay.td.0194",
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
                                        "type": "text",
                                        "id": "api-googlepay.td.0195",
                                        "value": "Whether the purchase created a recurring token; "
                                      },
                                      {
                                        "type": "element",
                                        "tag": "code",
                                        "props": {},
                                        "children": [
                                          {
                                            "type": "text",
                                            "id": "api-googlepay.code.0196",
                                            "value": "false"
                                          }
                                        ]
                                      },
                                      {
                                        "type": "text",
                                        "id": "api-googlepay.td.0197",
                                        "value": " for Google Pay."
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
                                            "id": "api-googlepay.code.0198",
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
                                        "id": "api-googlepay.td.0199",
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
                                        "id": "api-googlepay.td.0200",
                                        "value": "Your reference echoed back, or an internal id."
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
                                            "id": "api-googlepay.code.0201",
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
                                        "id": "api-googlepay.td.0202",
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
                                        "id": "api-googlepay.td.0203",
                                        "value": "Echo of the customer details submitted on the request."
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
                                            "id": "api-googlepay.code.0204",
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
                                        "id": "api-googlepay.td.0205",
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
                                            "id": "api-googlepay.code.0206",
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
                                            "id": "api-googlepay.code.0207",
                                            "value": "products[]"
                                          }
                                        ]
                                      },
                                      {
                                        "type": "text",
                                        "id": "api-googlepay.td.0208",
                                        "value": " (name, quantity, price, discount, tax_percent), "
                                      },
                                      {
                                        "type": "element",
                                        "tag": "code",
                                        "props": {},
                                        "children": [
                                          {
                                            "type": "text",
                                            "id": "api-googlepay.code.0209",
                                            "value": "total"
                                          }
                                        ]
                                      },
                                      {
                                        "type": "text",
                                        "id": "api-googlepay.td.0210",
                                        "value": " and "
                                      },
                                      {
                                        "type": "element",
                                        "tag": "code",
                                        "props": {},
                                        "children": [
                                          {
                                            "type": "text",
                                            "id": "api-googlepay.code.0211",
                                            "value": "requestAmount"
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
                                            "id": "api-googlepay.code.0212",
                                            "value": "payment"
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
                                        "id": "api-googlepay.td.0213",
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
                                        "id": "api-googlepay.td.0214",
                                        "value": "Settlement detail: "
                                      },
                                      {
                                        "type": "element",
                                        "tag": "code",
                                        "props": {},
                                        "children": [
                                          {
                                            "type": "text",
                                            "id": "api-googlepay.code.0215",
                                            "value": "payment_type"
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
                                            "id": "api-googlepay.code.0216",
                                            "value": "amount"
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
                                            "id": "api-googlepay.code.0217",
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
                                            "id": "api-googlepay.code.0218",
                                            "value": "net_amount"
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
                                            "id": "api-googlepay.code.0219",
                                            "value": "fee_amount"
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
                                            "id": "api-googlepay.code.0220",
                                            "value": "paid_on"
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
                                            "id": "api-googlepay.code.0221",
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
                                        "id": "api-googlepay.td.0222",
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
                                        "id": "api-googlepay.td.0223",
                                        "value": "One entry per attempt. On failure, "
                                      },
                                      {
                                        "type": "element",
                                        "tag": "code",
                                        "props": {},
                                        "children": [
                                          {
                                            "type": "text",
                                            "id": "api-googlepay.code.0224",
                                            "value": "attempts[].error"
                                          }
                                        ]
                                      },
                                      {
                                        "type": "text",
                                        "id": "api-googlepay.td.0225",
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
                                            "id": "api-googlepay.code.0226",
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
                                        "id": "api-googlepay.td.0227",
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
                                        "id": "api-googlepay.td.0228",
                                        "value": "Every status the purchase passed through, each with a UNIX "
                                      },
                                      {
                                        "type": "element",
                                        "tag": "code",
                                        "props": {},
                                        "children": [
                                          {
                                            "type": "text",
                                            "id": "api-googlepay.code.0229",
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
                                            "id": "api-googlepay.code.0230",
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
                                        "id": "api-googlepay.td.0231",
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
                                        "id": "api-googlepay.td.0232",
                                        "value": "Hosted page to redirect the customer to for the Google Pay experience."
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
                                "req": true
                              },
                              {
                                "k": "client.city",
                                "v": "London",
                                "req": true
                              },
                              {
                                "k": "client.stateCode",
                                "v": "RJ",
                                "req": false
                              },
                              {
                                "k": "client.street_address",
                                "v": "1 Test Street",
                                "req": true
                              },
                              {
                                "k": "client.zip_code",
                                "v": "10001",
                                "req": true
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
                                "v": "GOOGLEPAY-REDIRECT",
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
                            "latency": "312 ms",
                            "response": {
                              "purchaseId": "69cce01f5bae56fd5547a993",
                              "status": "created",
                              "paymentMethod": "GOOGLEPAY",
                              "amountUnit": "MAJOR",
                              "errorMsg": "",
                              "merchantRef": "order-12345",
                              "purchase": {
                                "currency": "EUR",
                                "products": [
                                  {
                                    "name": "Test User",
                                    "quantity": 1,
                                    "price": 104.99
                                  }
                                ],
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
                        "id": "api-googlepay.h2.0233",
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
                            "id": "api-googlepay.span.0234",
                            "value": "POST"
                          }
                        ]
                      },
                      {
                        "type": "text",
                        "id": "api-googlepay.div.0235",
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
                        "id": "api-googlepay.p.0236",
                        "value": "You rendered the button, Google returned the token: forward it exactly as received in "
                      },
                      {
                        "type": "element",
                        "tag": "code",
                        "props": {},
                        "children": [
                          {
                            "type": "text",
                            "id": "api-googlepay.code.0237",
                            "value": "extraParam.googlepay_param.googlepay_encrypted_payload"
                          }
                        ]
                      },
                      {
                        "type": "text",
                        "id": "api-googlepay.p.0238",
                        "value": ". Used for DIRECT with encrypted submission (Paysecure decrypts with the private key you shared at onboarding) and for PAYMENT_GATEWAY (the assigned processor decrypts)."
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
                        "id": "api-googlepay.h3.0239",
                        "value": "Request parameters: googlepay_param"
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
                                        "id": "api-googlepay.th.0240",
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
                                        "id": "api-googlepay.th.0241",
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
                                        "id": "api-googlepay.th.0242",
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
                                        "id": "api-googlepay.th.0243",
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
                                            "id": "api-googlepay.code.0244",
                                            "value": "google_merchant_id"
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
                                        "id": "api-googlepay.td.0245",
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
                                        "id": "api-googlepay.td.0246",
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
                                            "id": "api-googlepay.code.0247",
                                            "value": "merchant:"
                                          }
                                        ]
                                      },
                                      {
                                        "type": "text",
                                        "id": "api-googlepay.td.0248",
                                        "value": " + your Google Pay & Wallet Console Merchant ID."
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
                                            "id": "api-googlepay.code.0249",
                                            "value": "googlepay_encrypted_payload"
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
                                        "id": "api-googlepay.td.0250",
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
                                        "id": "api-googlepay.td.0251",
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
                                        "id": "api-googlepay.td.0252",
                                        "value": "The exact string from "
                                      },
                                      {
                                        "type": "element",
                                        "tag": "code",
                                        "props": {},
                                        "children": [
                                          {
                                            "type": "text",
                                            "id": "api-googlepay.code.0253",
                                            "value": "tokenizationData.token"
                                          }
                                        ]
                                      },
                                      {
                                        "type": "text",
                                        "id": "api-googlepay.td.0254",
                                        "value": ", passed as an escaped JSON string, not a parsed object. No re-encoding, no whitespace changes."
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
                                            "id": "api-googlepay.code.0255",
                                            "value": "gateway"
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
                                        "id": "api-googlepay.td.0256",
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
                                        "id": "api-googlepay.td.0257",
                                        "value": "PG only"
                                      }
                                    ]
                                  },
                                  {
                                    "type": "element",
                                    "tag": "td",
                                    "props": {},
                                    "children": [
                                      {
                                        "type": "text",
                                        "id": "api-googlepay.td.0258",
                                        "value": "The processor's Google Pay gateway ID, same value as your tokenizationSpecification. Omit for DIRECT."
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
                                            "id": "api-googlepay.code.0259",
                                            "value": "gatewayMerchantId"
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
                                        "id": "api-googlepay.td.0260",
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
                                        "id": "api-googlepay.td.0261",
                                        "value": "PG only"
                                      }
                                    ]
                                  },
                                  {
                                    "type": "element",
                                    "tag": "td",
                                    "props": {},
                                    "children": [
                                      {
                                        "type": "text",
                                        "id": "api-googlepay.td.0262",
                                        "value": "Your merchant identifier at that processor. Omit for DIRECT."
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
                        "id": "api-googlepay.h3.0263",
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
                                        "id": "api-googlepay.th.0264",
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
                                        "id": "api-googlepay.th.0265",
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
                                        "id": "api-googlepay.th.0266",
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
                                            "id": "api-googlepay.code.0267",
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
                                        "id": "api-googlepay.td.0268",
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
                                        "id": "api-googlepay.td.0269",
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
                                            "id": "api-googlepay.code.0270",
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
                                        "id": "api-googlepay.td.0271",
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
                                            "id": "api-googlepay.code.0272",
                                            "value": "created"
                                          }
                                        ]
                                      },
                                      {
                                        "type": "text",
                                        "id": "api-googlepay.td.0273",
                                        "value": " or "
                                      },
                                      {
                                        "type": "element",
                                        "tag": "code",
                                        "props": {},
                                        "children": [
                                          {
                                            "type": "text",
                                            "id": "api-googlepay.code.0274",
                                            "value": "payment_in_process"
                                          }
                                        ]
                                      },
                                      {
                                        "type": "text",
                                        "id": "api-googlepay.td.0275",
                                        "value": " on acceptance; the final state arrives on your callbacks."
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
                                            "id": "api-googlepay.code.0276",
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
                                        "id": "api-googlepay.td.0277",
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
                                        "id": "api-googlepay.td.0278",
                                        "value": "The method used, "
                                      },
                                      {
                                        "type": "element",
                                        "tag": "code",
                                        "props": {},
                                        "children": [
                                          {
                                            "type": "text",
                                            "id": "api-googlepay.code.0279",
                                            "value": "GOOGLEPAY"
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
                                            "id": "api-googlepay.code.0280",
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
                                        "id": "api-googlepay.td.0281",
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
                                            "id": "api-googlepay.code.0282",
                                            "value": "MAJOR"
                                          }
                                        ]
                                      },
                                      {
                                        "type": "text",
                                        "id": "api-googlepay.td.0283",
                                        "value": " for full currency units, "
                                      },
                                      {
                                        "type": "element",
                                        "tag": "code",
                                        "props": {},
                                        "children": [
                                          {
                                            "type": "text",
                                            "id": "api-googlepay.code.0284",
                                            "value": "MINOR"
                                          }
                                        ]
                                      },
                                      {
                                        "type": "text",
                                        "id": "api-googlepay.td.0285",
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
                                            "id": "api-googlepay.code.0286",
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
                                        "id": "api-googlepay.td.0287",
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
                                        "id": "api-googlepay.td.0288",
                                        "value": "One entry per attempt. On failure, "
                                      },
                                      {
                                        "type": "element",
                                        "tag": "code",
                                        "props": {},
                                        "children": [
                                          {
                                            "type": "text",
                                            "id": "api-googlepay.code.0289",
                                            "value": "attempts[].error"
                                          }
                                        ]
                                      },
                                      {
                                        "type": "text",
                                        "id": "api-googlepay.td.0290",
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
                                            "id": "api-googlepay.code.0291",
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
                                        "id": "api-googlepay.td.0292",
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
                                        "id": "api-googlepay.td.0293",
                                        "value": "Every status the purchase passed through, each with a UNIX "
                                      },
                                      {
                                        "type": "element",
                                        "tag": "code",
                                        "props": {},
                                        "children": [
                                          {
                                            "type": "text",
                                            "id": "api-googlepay.code.0294",
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
                                            "id": "api-googlepay.code.0295",
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
                                        "id": "api-googlepay.td.0296",
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
                                        "id": "api-googlepay.td.0297",
                                        "value": "Hosted page for any customer interaction still required (for example a 3DS challenge)."
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
                                            "id": "api-googlepay.code.0298",
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
                                        "id": "api-googlepay.td.0299",
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
                                        "id": "api-googlepay.td.0300",
                                        "value": "Direct-post endpoint for the purchase, where applicable."
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
                                "id": "api-googlepay.b.0301",
                                "value": "Token hygiene:"
                              }
                            ]
                          },
                          {
                            "type": "text",
                            "id": "api-googlepay.p.0302",
                            "value": " never log the token in full, never store it (single-use, short-lived), and submit promptly; Google tokens carry a short message expiration."
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
                                "k": "client.customerId",
                                "v": "NA",
                                "req": false
                              },
                              {
                                "k": "client.email",
                                "v": "user@example.com",
                                "req": false
                              },
                              {
                                "k": "client.full_name",
                                "v": "Test User",
                                "req": false
                              },
                              {
                                "k": "client.date_of_birth",
                                "v": "1990-01-01",
                                "req": false
                              },
                              {
                                "k": "client.street_address",
                                "v": "1 Test Street",
                                "req": false
                              },
                              {
                                "k": "client.country",
                                "v": "BR",
                                "req": false
                              },
                              {
                                "k": "client.city",
                                "v": "DLJPR",
                                "req": false
                              },
                              {
                                "k": "client.zip_code",
                                "v": "10001",
                                "req": false
                              },
                              {
                                "k": "client.cc",
                                "v": "[]",
                                "req": false
                              },
                              {
                                "k": "client.bcc",
                                "v": "[]",
                                "req": false
                              },
                              {
                                "k": "client.stateCode",
                                "v": "DL",
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
                                "v": "10.00",
                                "req": true
                              },
                              {
                                "k": "paymentMethod",
                                "v": "GOOGLEPAY",
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
                                "k": "extraParam.googlepay_param.google_merchant_id",
                                "v": "merchant:1234567890",
                                "req": true
                              },
                              {
                                "k": "extraParam.googlepay_param.googlepay_encrypted_payload",
                                "v": "{\"signature\":\"MEUCIQ…\",\"protocolVersion\":\"ECv2\",\"signedMessage\":\"{…}\"}",
                                "req": true
                              }
                            ],
                            "status": "202 Accepted",
                            "latency": "401 ms",
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
                              "paymentMethod": "GOOGLEPAY",
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
                        "id": "api-googlepay.h2.0303",
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
                            "id": "api-googlepay.span.0304",
                            "value": "POST"
                          }
                        ]
                      },
                      {
                        "type": "text",
                        "id": "api-googlepay.div.0305",
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
                        "id": "api-googlepay.p.0306",
                        "value": "For DIRECT with decrypted submission: your backend verifies Google's signature chain, decrypts the token, and submits the decrypted message inside "
                      },
                      {
                        "type": "element",
                        "tag": "code",
                        "props": {},
                        "children": [
                          {
                            "type": "text",
                            "id": "api-googlepay.code.0307",
                            "value": "extraParam.googlepay_param.googlepay_decrypted_payload"
                          }
                        ]
                      },
                      {
                        "type": "text",
                        "id": "api-googlepay.p.0308",
                        "value": " exactly as your decryption layer produced it. The PAN is on your side, so this route requires full PCI DSS (SAQ D)."
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
                        "id": "api-googlepay.h3.0309",
                        "value": "Request parameters: googlepay_decrypted_payload"
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
                                        "id": "api-googlepay.th.0310",
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
                                        "id": "api-googlepay.th.0311",
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
                                        "id": "api-googlepay.th.0312",
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
                                        "id": "api-googlepay.th.0313",
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
                                            "id": "api-googlepay.code.0314",
                                            "value": "messageExpiration"
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
                                        "id": "api-googlepay.td.0315",
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
                                        "id": "api-googlepay.td.0316",
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
                                        "id": "api-googlepay.td.0317",
                                        "value": "UTC milliseconds since epoch. Reject expired messages; do not submit stale credentials."
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
                                            "id": "api-googlepay.code.0318",
                                            "value": "messageId"
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
                                        "id": "api-googlepay.td.0319",
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
                                        "id": "api-googlepay.td.0320",
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
                                        "id": "api-googlepay.td.0321",
                                        "value": "Unique per token; used for replay protection."
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
                                            "id": "api-googlepay.code.0322",
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
                                        "id": "api-googlepay.td.0323",
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
                                        "id": "api-googlepay.td.0324",
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
                                            "id": "api-googlepay.code.0325",
                                            "value": "CARD"
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
                                            "id": "api-googlepay.code.0326",
                                            "value": "paymentMethodDetails.pan"
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
                                        "id": "api-googlepay.td.0327",
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
                                        "id": "api-googlepay.td.0328",
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
                                        "id": "api-googlepay.td.0329",
                                        "value": "FPAN (PAN_ONLY) or DPAN (CRYPTOGRAM_3DS). Both are PCI account data; protect accordingly."
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
                                            "id": "api-googlepay.code.0330",
                                            "value": "paymentMethodDetails.expirationMonth"
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
                                        "id": "api-googlepay.td.0331",
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
                                        "id": "api-googlepay.td.0332",
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
                                        "id": "api-googlepay.td.0333",
                                        "value": "Credential expiry month (a DPAN's expiry can differ from the plastic)."
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
                                            "id": "api-googlepay.code.0334",
                                            "value": "paymentMethodDetails.expirationYear"
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
                                        "id": "api-googlepay.td.0335",
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
                                        "id": "api-googlepay.td.0336",
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
                                        "id": "api-googlepay.td.0337",
                                        "value": "Credential expiry year (a DPAN's expiry can differ from the plastic)."
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
                                            "id": "api-googlepay.code.0338",
                                            "value": "paymentMethodDetails.authMethod"
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
                                        "id": "api-googlepay.td.0339",
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
                                        "id": "api-googlepay.td.0340",
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
                                            "id": "api-googlepay.code.0341",
                                            "value": "PAN_ONLY"
                                          }
                                        ]
                                      },
                                      {
                                        "type": "text",
                                        "id": "api-googlepay.td.0342",
                                        "value": " or "
                                      },
                                      {
                                        "type": "element",
                                        "tag": "code",
                                        "props": {},
                                        "children": [
                                          {
                                            "type": "text",
                                            "id": "api-googlepay.code.0343",
                                            "value": "CRYPTOGRAM_3DS"
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
                                            "id": "api-googlepay.code.0344",
                                            "value": "paymentMethodDetails.cryptogram"
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
                                        "id": "api-googlepay.td.0345",
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
                                        "id": "api-googlepay.td.0346",
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
                                        "id": "api-googlepay.td.0347",
                                        "value": "Mandatory when "
                                      },
                                      {
                                        "type": "element",
                                        "tag": "code",
                                        "props": {},
                                        "children": [
                                          {
                                            "type": "text",
                                            "id": "api-googlepay.code.0348",
                                            "value": "authMethod"
                                          }
                                        ]
                                      },
                                      {
                                        "type": "text",
                                        "id": "api-googlepay.td.0349",
                                        "value": " is "
                                      },
                                      {
                                        "type": "element",
                                        "tag": "code",
                                        "props": {},
                                        "children": [
                                          {
                                            "type": "text",
                                            "id": "api-googlepay.code.0350",
                                            "value": "CRYPTOGRAM_3DS"
                                          }
                                        ]
                                      },
                                      {
                                        "type": "text",
                                        "id": "api-googlepay.td.0351",
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
                                            "id": "api-googlepay.code.0352",
                                            "value": "paymentMethodDetails.eciIndicator"
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
                                        "id": "api-googlepay.td.0353",
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
                                        "id": "api-googlepay.td.0354",
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
                                        "id": "api-googlepay.td.0355",
                                        "value": "Include if and only if present in the decrypted payload; never synthesise a value."
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
                                            "id": "api-googlepay.code.0356",
                                            "value": "gatewayMerchantId"
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
                                        "id": "api-googlepay.td.0357",
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
                                        "id": "api-googlepay.td.0358",
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
                                        "id": "api-googlepay.td.0359",
                                        "value": "Echo it into the payload if present in your decrypted message."
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
                        "id": "api-googlepay.h3.0360",
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
                                        "id": "api-googlepay.th.0361",
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
                                        "id": "api-googlepay.th.0362",
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
                                        "id": "api-googlepay.th.0363",
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
                                            "id": "api-googlepay.code.0364",
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
                                        "id": "api-googlepay.td.0365",
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
                                        "id": "api-googlepay.td.0366",
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
                                            "id": "api-googlepay.code.0367",
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
                                        "id": "api-googlepay.td.0368",
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
                                            "id": "api-googlepay.code.0369",
                                            "value": "created"
                                          }
                                        ]
                                      },
                                      {
                                        "type": "text",
                                        "id": "api-googlepay.td.0370",
                                        "value": " or "
                                      },
                                      {
                                        "type": "element",
                                        "tag": "code",
                                        "props": {},
                                        "children": [
                                          {
                                            "type": "text",
                                            "id": "api-googlepay.code.0371",
                                            "value": "payment_in_process"
                                          }
                                        ]
                                      },
                                      {
                                        "type": "text",
                                        "id": "api-googlepay.td.0372",
                                        "value": " on acceptance; the final state arrives on your callbacks."
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
                                            "id": "api-googlepay.code.0373",
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
                                        "id": "api-googlepay.td.0374",
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
                                        "id": "api-googlepay.td.0375",
                                        "value": "The method used, "
                                      },
                                      {
                                        "type": "element",
                                        "tag": "code",
                                        "props": {},
                                        "children": [
                                          {
                                            "type": "text",
                                            "id": "api-googlepay.code.0376",
                                            "value": "GOOGLEPAY"
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
                                            "id": "api-googlepay.code.0377",
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
                                        "id": "api-googlepay.td.0378",
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
                                            "id": "api-googlepay.code.0379",
                                            "value": "MAJOR"
                                          }
                                        ]
                                      },
                                      {
                                        "type": "text",
                                        "id": "api-googlepay.td.0380",
                                        "value": " for full currency units, "
                                      },
                                      {
                                        "type": "element",
                                        "tag": "code",
                                        "props": {},
                                        "children": [
                                          {
                                            "type": "text",
                                            "id": "api-googlepay.code.0381",
                                            "value": "MINOR"
                                          }
                                        ]
                                      },
                                      {
                                        "type": "text",
                                        "id": "api-googlepay.td.0382",
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
                                            "id": "api-googlepay.code.0383",
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
                                        "id": "api-googlepay.td.0384",
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
                                        "id": "api-googlepay.td.0385",
                                        "value": "One entry per attempt. On failure, "
                                      },
                                      {
                                        "type": "element",
                                        "tag": "code",
                                        "props": {},
                                        "children": [
                                          {
                                            "type": "text",
                                            "id": "api-googlepay.code.0386",
                                            "value": "attempts[].error"
                                          }
                                        ]
                                      },
                                      {
                                        "type": "text",
                                        "id": "api-googlepay.td.0387",
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
                                            "id": "api-googlepay.code.0388",
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
                                        "id": "api-googlepay.td.0389",
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
                                        "id": "api-googlepay.td.0390",
                                        "value": "Every status the purchase passed through, each with a UNIX "
                                      },
                                      {
                                        "type": "element",
                                        "tag": "code",
                                        "props": {},
                                        "children": [
                                          {
                                            "type": "text",
                                            "id": "api-googlepay.code.0391",
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
                                            "id": "api-googlepay.code.0392",
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
                                        "id": "api-googlepay.td.0393",
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
                                        "id": "api-googlepay.td.0394",
                                        "value": "Hosted page for any customer interaction still required (for example a 3DS challenge on PAN_ONLY)."
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
                                        "id": "api-googlepay.button.0395",
                                        "value": "CRYPTOGRAM_3DS"
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
                                    "id": "api-googlepay.button.0396",
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
                                    "id": "api-googlepay.span.0397",
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
                                    "id": "api-googlepay.span.0398",
                                    "value": "\"googlepay_param\""
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
                                    "id": "api-googlepay.span.0399",
                                    "value": "\"google_merchant_id\""
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
                                    "id": "api-googlepay.span.0400",
                                    "value": "\"merchant:1234567890\""
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
                                    "id": "api-googlepay.span.0401",
                                    "value": "\"googlepay_decrypted_payload\""
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
                                    "id": "api-googlepay.span.0402",
                                    "value": "\"messageExpiration\""
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
                                    "id": "api-googlepay.span.0403",
                                    "value": "\"1735689600000\""
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
                                    "id": "api-googlepay.span.0404",
                                    "value": "\"messageId\""
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
                                    "id": "api-googlepay.span.0405",
                                    "value": "\"AH2Ejtf…\""
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
                                    "id": "api-googlepay.span.0406",
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
                                    "id": "api-googlepay.span.0407",
                                    "value": "\"CARD\""
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
                                    "id": "api-googlepay.span.0408",
                                    "value": "\"paymentMethodDetails\""
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
                                    "id": "api-googlepay.span.0409",
                                    "value": "\"pan\""
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
                                    "id": "api-googlepay.span.0410",
                                    "value": "\"4111111111111111\""
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
                                    "id": "api-googlepay.span.0411",
                                    "value": "\"expirationMonth\""
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
                                    "id": "api-googlepay.span.0412",
                                    "value": "12"
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
                                    "id": "api-googlepay.span.0413",
                                    "value": "\"expirationYear\""
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
                                    "id": "api-googlepay.span.0414",
                                    "value": "2027"
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
                                    "id": "api-googlepay.span.0415",
                                    "value": "\"authMethod\""
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
                                    "id": "api-googlepay.span.0416",
                                    "value": "\"CRYPTOGRAM_3DS\""
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
                                    "id": "api-googlepay.span.0417",
                                    "value": "\"cryptogram\""
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
                                    "id": "api-googlepay.span.0418",
                                    "value": "\"AgAAAAAABk4D…\""
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
                                    "id": "api-googlepay.span.0419",
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
                                    "id": "api-googlepay.span.0420",
                                    "value": "\"05\""
                                  }
                                ]
                              },
                              {
                                "type": "text",
                                "value": "\n      },\n      "
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
                                    "id": "api-googlepay.span.0421",
                                    "value": "\"gatewayMerchantId\""
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
                                    "id": "api-googlepay.span.0422",
                                    "value": "\"your_gateway_merchant_id\""
                                  }
                                ]
                              },
                              {
                                "type": "text",
                                "value": "\n    }\n  }\n}"
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
                                        "id": "api-googlepay.button.0423",
                                        "value": "PAN_ONLY"
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
                                    "id": "api-googlepay.button.0424",
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
                                    "id": "api-googlepay.span.0425",
                                    "value": "# No cryptogram or eciIndicator"
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
                                    "id": "api-googlepay.span.0426",
                                    "value": "\"googlepay_decrypted_payload\""
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
                                    "id": "api-googlepay.span.0427",
                                    "value": "\"messageExpiration\""
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
                                    "id": "api-googlepay.span.0428",
                                    "value": "\"1735689600000\""
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
                                    "id": "api-googlepay.span.0429",
                                    "value": "\"messageId\""
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
                                    "id": "api-googlepay.span.0430",
                                    "value": "\"AH2Ejtc…\""
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
                                    "id": "api-googlepay.span.0431",
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
                                    "id": "api-googlepay.span.0432",
                                    "value": "\"CARD\""
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
                                    "id": "api-googlepay.span.0433",
                                    "value": "\"paymentMethodDetails\""
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
                                    "id": "api-googlepay.span.0434",
                                    "value": "\"pan\""
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
                                    "id": "api-googlepay.span.0435",
                                    "value": "\"4111111111111111\""
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
                                    "id": "api-googlepay.span.0436",
                                    "value": "\"expirationMonth\""
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
                                    "id": "api-googlepay.span.0437",
                                    "value": "12"
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
                                    "id": "api-googlepay.span.0438",
                                    "value": "\"expirationYear\""
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
                                    "id": "api-googlepay.span.0439",
                                    "value": "2030"
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
                                    "id": "api-googlepay.span.0440",
                                    "value": "\"authMethod\""
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
                                    "id": "api-googlepay.span.0441",
                                    "value": "\"PAN_ONLY\""
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
                        "id": "api-googlepay.h2.0442",
                        "value": "Get status"
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
                            "id": "api-googlepay.span.0443",
                            "value": "GET"
                          }
                        ]
                      },
                      {
                        "type": "text",
                        "id": "api-googlepay.div.0444",
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
                        "id": "api-googlepay.p.0445",
                        "value": "Returns the purchase object with its full "
                      },
                      {
                        "type": "element",
                        "tag": "code",
                        "props": {},
                        "children": [
                          {
                            "type": "text",
                            "id": "api-googlepay.code.0446",
                            "value": "status_history"
                          }
                        ]
                      },
                      {
                        "type": "text",
                        "id": "api-googlepay.p.0447",
                        "value": ". A successful create returns status "
                      },
                      {
                        "type": "element",
                        "tag": "code",
                        "props": {},
                        "children": [
                          {
                            "type": "text",
                            "id": "api-googlepay.code.0448",
                            "value": "created"
                          }
                        ]
                      },
                      {
                        "type": "text",
                        "id": "api-googlepay.p.0449",
                        "value": " (Redirect) or moves into processing (Seamless). Authorisation proceeds asynchronously: if the credential needs customer interaction (a 3DS challenge on PAN_ONLY), send the customer to the returned "
                      },
                      {
                        "type": "element",
                        "tag": "code",
                        "props": {},
                        "children": [
                          {
                            "type": "text",
                            "id": "api-googlepay.code.0450",
                            "value": "checkout_url"
                          }
                        ]
                      },
                      {
                        "type": "text",
                        "id": "api-googlepay.p.0451",
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
                                        "id": "api-googlepay.th.0452",
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
                                        "id": "api-googlepay.th.0453",
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
                                            "id": "api-googlepay.span.0454",
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
                                        "id": "api-googlepay.td.0455",
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
                                        "tag": "span",
                                        "props": {
                                          "className": "pill amber"
                                        },
                                        "children": [
                                          {
                                            "type": "text",
                                            "id": "api-googlepay.span.0456",
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
                                        "id": "api-googlepay.td.0457",
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
                                        "tag": "span",
                                        "props": {
                                          "className": "pill gray"
                                        },
                                        "children": [
                                          {
                                            "type": "text",
                                            "id": "api-googlepay.span.0458",
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
                                        "id": "api-googlepay.td.0459",
                                        "value": "Not completed within "
                                      },
                                      {
                                        "type": "element",
                                        "tag": "code",
                                        "props": {},
                                        "children": [
                                          {
                                            "type": "text",
                                            "id": "api-googlepay.code.0460",
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
                                        "tag": "span",
                                        "props": {
                                          "className": "pill red"
                                        },
                                        "children": [
                                          {
                                            "type": "text",
                                            "id": "api-googlepay.span.0461",
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
                                        "id": "api-googlepay.td.0462",
                                        "value": "Failed; inspect "
                                      },
                                      {
                                        "type": "element",
                                        "tag": "code",
                                        "props": {},
                                        "children": [
                                          {
                                            "type": "text",
                                            "id": "api-googlepay.code.0463",
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
                        "id": "api-googlepay.p.0464",
                        "value": "The final state always arrives on your "
                      },
                      {
                        "type": "element",
                        "tag": "code",
                        "props": {},
                        "children": [
                          {
                            "type": "text",
                            "id": "api-googlepay.code.0465",
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
                            "id": "api-googlepay.code.0466",
                            "value": "failure_callback"
                          }
                        ]
                      },
                      {
                        "type": "text",
                        "id": "api-googlepay.p.0467",
                        "value": "; treat those, not the synchronous response or the customer's return redirect, as the source of truth."
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
                              "purchaseId": "69634df44549cbd3547ac750",
                              "status": "paid",
                              "paymentMethod": "GOOGLEPAY-REDIRECT",
                              "amountUnit": "MAJOR",
                              "errorMsg": "",
                              "errorCode": "NA",
                              "is_recurring_token": false,
                              "client": {
                                "customerId": "NA",
                                "email": "user@example.com",
                                "full_name": "Test User",
                                "country": "GB"
                              },
                              "purchase": {
                                "currency": "EUR",
                                "products": [
                                  {
                                    "name": "Test User",
                                    "quantity": 1,
                                    "price": 1
                                  }
                                ],
                                "total": 1
                              },
                              "payment": {
                                "payment_type": "PURCHASE",
                                "amount": 1,
                                "currency": "EUR",
                                "net_amount": 1,
                                "fee_amount": 0,
                                "paid_on": 1768115700
                              },
                              "transaction_data": {
                                "attempts": [
                                  {
                                    "payment_method": "GOOGLEPAY-REDIRECT",
                                    "successful": true
                                  }
                                ]
                              },
                              "status_history": [
                                {
                                  "status": "created",
                                  "timestamp": 1768115700
                                }
                              ],
                              "checkout_url": "https://api.paysecure.net/payments/{token}/"
                            },
                            "errorStatus": "404 Not Found",
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
                  "updated": "Last updated 07 Jul 2026 · v2.4"
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
                      "href": "/api-cards"
                    },
                    "children": [
                      {
                        "type": "element",
                        "tag": "small",
                        "props": {},
                        "children": [
                          {
                            "type": "text",
                            "id": "api-googlepay.small.0468",
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
                            "id": "api-googlepay.b.0469",
                            "value": "← Cards (S2S)"
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
                      "href": "/api-applepay"
                    },
                    "children": [
                      {
                        "type": "element",
                        "tag": "small",
                        "props": {},
                        "children": [
                          {
                            "type": "text",
                            "id": "api-googlepay.small.0470",
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
                            "id": "api-googlepay.b.0471",
                            "value": "Apple Pay →"
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
