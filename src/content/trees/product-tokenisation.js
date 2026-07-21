import { defineDocument } from '../schema.js';

export const productTokenisationTreeDocument = defineDocument({
  "schemaVersion": 1,
  "slug": "product-tokenisation",
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
                    "id": "product-tokenisation.doclink.0001",
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
                    "id": "product-tokenisation.doclink.0002",
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
                "id": "product-tokenisation.div.0003",
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
                "id": "product-tokenisation.div.0004",
                "value": "Tokenisation"
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
                "id": "product-tokenisation.h1.0005",
                "value": "Tokenisation"
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
                "id": "product-tokenisation.p.0006",
                "value": "Store cards safely and keep them working: customer tokens for one-click payments, and scheme network tokens for higher approval rates and automatic card updates."
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
                "id": "product-tokenisation.p.0007",
                "value": "Paysecure tokenisation has two layers. "
              },
              {
                "type": "element",
                "tag": "b",
                "props": {},
                "children": [
                  {
                    "type": "text",
                    "id": "product-tokenisation.b.0008",
                    "value": "Customer tokenisation"
                  }
                ]
              },
              {
                "type": "text",
                "id": "product-tokenisation.p.0009",
                "value": " saves a card against a "
              },
              {
                "type": "element",
                "tag": "code",
                "props": {},
                "children": [
                  {
                    "type": "text",
                    "id": "product-tokenisation.code.0010",
                    "value": "customerId"
                  }
                ]
              },
              {
                "type": "text",
                "id": "product-tokenisation.p.0011",
                "value": " so it can be reused for one-click and recurring payments. "
              },
              {
                "type": "element",
                "tag": "b",
                "props": {},
                "children": [
                  {
                    "type": "text",
                    "id": "product-tokenisation.b.0012",
                    "value": "Network tokenisation"
                  }
                ]
              },
              {
                "type": "text",
                "id": "product-tokenisation.p.0013",
                "value": " upgrades those saved cards to tokens issued by the card schemes themselves, which survive card reissues and are approved at higher rates. In both cases you hold a single server-side reference, the "
              },
              {
                "type": "element",
                "tag": "code",
                "props": {},
                "children": [
                  {
                    "type": "text",
                    "id": "product-tokenisation.code.0014",
                    "value": "token_reference"
                  }
                ]
              },
              {
                "type": "text",
                "id": "product-tokenisation.p.0015",
                "value": ", and never a card number."
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
                "id": "product-tokenisation.concepts.0016",
                "value": "What is a network token?"
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
                "id": "product-tokenisation.p.0017",
                "value": "A network token replaces the sensitive card details (the 16-digit card number, expiry date and security code) with a unique identifier generated by the card scheme, following the EMVCo payment tokenisation standard. Visa provisions network tokens through the Visa Token Service (VTS) and Mastercard through the Mastercard Digital Enablement Service (MDES). The token looks and behaves like a real card number, with a similar length and its own expiry, so it works with existing payment infrastructure. Because it is an identifier rather than real card data, storing it does not expand your PCI obligations."
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
                "id": "product-tokenisation.p.0018",
                "value": "Network tokens are also bound to the merchant they were issued for. A token provisioned for your account cannot be used to transact anywhere else, so a stolen token is useless to a fraudster. If a token is ever compromised, the scheme can deactivate it without the cardholder needing a new card, and without touching that card's tokens at other merchants."
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
                "id": "product-tokenisation.p.0019",
                "value": "How the three kinds of credential compare:"
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
                                "value": " "
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
                                "id": "product-tokenisation.th.0020",
                                "value": "Card number (PAN)"
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
                                "id": "product-tokenisation.th.0021",
                                "value": "Customer token"
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
                                "id": "product-tokenisation.th.0022",
                                "value": "Network token"
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
                                    "id": "product-tokenisation.b.0023",
                                    "value": "Issued by"
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
                                "id": "product-tokenisation.td.0024",
                                "value": "The card issuer"
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "td",
                            "props": {},
                            "children": [
                              {
                                "type": "text",
                                "id": "product-tokenisation.td.0025",
                                "value": "Paysecure (your "
                              },
                              {
                                "type": "element",
                                "tag": "code",
                                "props": {},
                                "children": [
                                  {
                                    "type": "text",
                                    "id": "product-tokenisation.code.0026",
                                    "value": "token_reference"
                                  }
                                ]
                              },
                              {
                                "type": "text",
                                "value": ")"
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "td",
                            "props": {},
                            "children": [
                              {
                                "type": "text",
                                "id": "product-tokenisation.td.0027",
                                "value": "The card scheme (VTS / MDES)"
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
                                    "id": "product-tokenisation.b.0028",
                                    "value": "Where it works"
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
                                "id": "product-tokenisation.td.0029",
                                "value": "Any merchant, anywhere"
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "td",
                            "props": {},
                            "children": [
                              {
                                "type": "text",
                                "id": "product-tokenisation.td.0030",
                                "value": "Your Paysecure account only"
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "td",
                            "props": {},
                            "children": [
                              {
                                "type": "text",
                                "id": "product-tokenisation.td.0031",
                                "value": "Your merchant account only"
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
                                    "id": "product-tokenisation.b.0032",
                                    "value": "Survives card reissue or expiry"
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
                                "id": "product-tokenisation.td.0033",
                                "value": "No, goes stale"
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "td",
                            "props": {},
                            "children": [
                              {
                                "type": "text",
                                "id": "product-tokenisation.td.0034",
                                "value": "Only if upgraded to a network token"
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "td",
                            "props": {},
                            "children": [
                              {
                                "type": "text",
                                "id": "product-tokenisation.td.0035",
                                "value": "Yes, updated by the scheme automatically"
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
                                    "id": "product-tokenisation.b.0036",
                                    "value": "Value to a fraudster if stolen"
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
                                "id": "product-tokenisation.td.0037",
                                "value": "High"
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "td",
                            "props": {},
                            "children": [
                              {
                                "type": "text",
                                "id": "product-tokenisation.td.0038",
                                "value": "None outside your account"
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "td",
                            "props": {},
                            "children": [
                              {
                                "type": "text",
                                "id": "product-tokenisation.td.0039",
                                "value": "None, merchant-bound and needs a cryptogram"
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
                                    "id": "product-tokenisation.b.0040",
                                    "value": "Your PCI scope"
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
                                "id": "product-tokenisation.td.0041",
                                "value": "Full (SAQ D if you handle it)"
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "td",
                            "props": {},
                            "children": [
                              {
                                "type": "text",
                                "id": "product-tokenisation.td.0042",
                                "value": "Reduced, no card data stored"
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "td",
                            "props": {},
                            "children": [
                              {
                                "type": "text",
                                "id": "product-tokenisation.td.0043",
                                "value": "Reduced, no card data stored"
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
                "id": "product-tokenisation.p.0044",
                "value": "With Paysecure both token layers sit behind the same "
              },
              {
                "type": "element",
                "tag": "code",
                "props": {},
                "children": [
                  {
                    "type": "text",
                    "id": "product-tokenisation.code.0045",
                    "value": "token_reference"
                  }
                ]
              },
              {
                "type": "text",
                "id": "product-tokenisation.p.0046",
                "value": ", so you get the network-token benefits without a separate integration."
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
              "id": "provisioning"
            },
            "children": [
              {
                "type": "text",
                "id": "product-tokenisation.provisioning.0047",
                "value": "How provisioning works"
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
                "id": "product-tokenisation.p.0048",
                "value": "Provisioning happens when a customer saves a card, on the hosted checkout or with "
              },
              {
                "type": "element",
                "tag": "code",
                "props": {},
                "children": [
                  {
                    "type": "text",
                    "id": "product-tokenisation.code.0049",
                    "value": "remember_card: \"on\""
                  }
                ]
              },
              {
                "type": "text",
                "id": "product-tokenisation.p.0050",
                "value": " in an S2S payment. The payment itself completes on the card as normal; the token is provisioned alongside it and the "
              },
              {
                "type": "element",
                "tag": "code",
                "props": {},
                "children": [
                  {
                    "type": "text",
                    "id": "product-tokenisation.code.0051",
                    "value": "token_reference"
                  }
                ]
              },
              {
                "type": "text",
                "id": "product-tokenisation.p.0052",
                "value": " is returned to you in the response, Check Status and the webhook."
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
                  "viewBox": "0 0 760 496",
                  "width": "100%",
                  "role": "img",
                  "aria-label": "Sequence diagram of network token provisioning",
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
                          "id": "nt-arr-a",
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
                      "y2": "448",
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
                      "y2": "448",
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
                      "y2": "448",
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
                      "y2": "448",
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
                      "y2": "448",
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
                        "id": "product-tokenisation.text.0053",
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
                        "id": "product-tokenisation.text.0054",
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
                        "id": "product-tokenisation.text.0055",
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
                      "x": "522",
                      "y": "8",
                      "width": "136",
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
                        "id": "product-tokenisation.text.0056",
                        "value": "Scheme (TSP)"
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
                        "id": "product-tokenisation.text.0057",
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
                      "y": "70",
                      "textAnchor": "middle",
                      "fontSize": "11",
                      "fill": "var(--body)",
                      "fontFamily": "Inter,system-ui,sans-serif"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "product-tokenisation.text.0058",
                        "value": "1 · Pays and opts to"
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
                      "x": "165",
                      "y": "83",
                      "textAnchor": "middle",
                      "fontSize": "11",
                      "fill": "var(--body)",
                      "fontFamily": "Inter,system-ui,sans-serif"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "product-tokenisation.text.0059",
                        "value": "save the card"
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
                      "y1": "90",
                      "x2": "246",
                      "y2": "90",
                      "stroke": "var(--muted)",
                      "markerEnd": "url(#nt-arr-a)"
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
                      "y": "118",
                      "textAnchor": "middle",
                      "fontSize": "11",
                      "fill": "var(--body)",
                      "fontFamily": "Inter,system-ui,sans-serif"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "product-tokenisation.text.0060",
                        "value": "2 · Payment request"
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
                      "y": "131",
                      "textAnchor": "middle",
                      "fontSize": "11",
                      "fill": "var(--body)",
                      "fontFamily": "Inter,system-ui,sans-serif"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "product-tokenisation.text.0061",
                        "value": "with card details"
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
                      "y1": "138",
                      "x2": "426",
                      "y2": "138",
                      "stroke": "var(--muted)",
                      "markerEnd": "url(#nt-arr-a)"
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
                      "x": "510",
                      "y": "166",
                      "textAnchor": "middle",
                      "fontSize": "11",
                      "fill": "var(--body)",
                      "fontFamily": "Inter,system-ui,sans-serif"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "product-tokenisation.text.0062",
                        "value": "3 · Tokenisation request"
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
                      "x": "510",
                      "y": "179",
                      "textAnchor": "middle",
                      "fontSize": "11",
                      "fill": "var(--body)",
                      "fontFamily": "Inter,system-ui,sans-serif"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "product-tokenisation.text.0063",
                        "value": "(VTS / MDES)"
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
                      "y1": "186",
                      "x2": "586",
                      "y2": "186",
                      "stroke": "var(--muted)",
                      "markerEnd": "url(#nt-arr-a)"
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
                      "y": "214",
                      "textAnchor": "middle",
                      "fontSize": "11",
                      "fill": "var(--body)",
                      "fontFamily": "Inter,system-ui,sans-serif"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "product-tokenisation.text.0064",
                        "value": "4 · Approval"
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
                      "y": "227",
                      "textAnchor": "middle",
                      "fontSize": "11",
                      "fill": "var(--body)",
                      "fontFamily": "Inter,system-ui,sans-serif"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "product-tokenisation.text.0065",
                        "value": "request"
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
                      "y1": "234",
                      "x2": "701",
                      "y2": "234",
                      "stroke": "var(--muted)",
                      "markerEnd": "url(#nt-arr-a)"
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
                      "y": "262",
                      "textAnchor": "middle",
                      "fontSize": "11",
                      "fill": "var(--body)",
                      "fontFamily": "Inter,system-ui,sans-serif"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "product-tokenisation.text.0066",
                        "value": "5 · Tokenisation"
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
                      "y": "275",
                      "textAnchor": "middle",
                      "fontSize": "11",
                      "fill": "var(--body)",
                      "fontFamily": "Inter,system-ui,sans-serif"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "product-tokenisation.text.0067",
                        "value": "approved"
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
                      "y1": "282",
                      "x2": "594",
                      "y2": "282",
                      "stroke": "var(--muted)",
                      "markerEnd": "url(#nt-arr-a)"
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
                      "x": "510",
                      "y": "310",
                      "textAnchor": "middle",
                      "fontSize": "11",
                      "fill": "var(--body)",
                      "fontFamily": "Inter,system-ui,sans-serif"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "product-tokenisation.text.0068",
                        "value": "6 · Merchant-bound"
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
                      "x": "510",
                      "y": "323",
                      "textAnchor": "middle",
                      "fontSize": "11",
                      "fill": "var(--body)",
                      "fontFamily": "Inter,system-ui,sans-serif"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "product-tokenisation.text.0069",
                        "value": "network token"
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
                      "y1": "330",
                      "x2": "434",
                      "y2": "330",
                      "stroke": "var(--muted)",
                      "markerEnd": "url(#nt-arr-a)"
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
                      "y": "358",
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
                      "y": "371",
                      "textAnchor": "middle",
                      "fontSize": "11",
                      "fill": "var(--ink)",
                      "fontFamily": "Inter,system-ui,sans-serif"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "product-tokenisation.text.0070",
                        "value": "7 · Token vaulted"
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
                      "y": "384",
                      "textAnchor": "middle",
                      "fontSize": "11",
                      "fill": "var(--ink)",
                      "fontFamily": "Inter,system-ui,sans-serif"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "product-tokenisation.text.0071",
                        "value": "by Paysecure"
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
                      "x": "340",
                      "y": "404",
                      "textAnchor": "middle",
                      "fontSize": "11",
                      "fill": "var(--body)",
                      "fontFamily": "Inter,system-ui,sans-serif"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "product-tokenisation.text.0072",
                        "value": "8 · "
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
                            "id": "product-tokenisation.tspan.0073",
                            "value": "token_reference"
                          }
                        ]
                      },
                      {
                        "type": "text",
                        "id": "product-tokenisation.text.0074",
                        "value": " returned"
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
                      "y": "417",
                      "textAnchor": "middle",
                      "fontSize": "11",
                      "fill": "var(--body)",
                      "fontFamily": "Inter,system-ui,sans-serif"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "product-tokenisation.text.0075",
                        "value": "(response, Check Status or webhook)"
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
                      "y1": "424",
                      "x2": "254",
                      "y2": "424",
                      "stroke": "var(--muted)",
                      "markerEnd": "url(#nt-arr-a)"
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
                      "y": "472",
                      "textAnchor": "middle",
                      "fontSize": "11",
                      "fill": "var(--muted)",
                      "fontFamily": "Inter,system-ui,sans-serif"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "product-tokenisation.text.0076",
                        "value": "You store only the "
                      },
                      {
                        "type": "element",
                        "tag": "tspan",
                        "props": {
                          "fontFamily": "'JetBrains Mono',monospace"
                        },
                        "children": [
                          {
                            "type": "text",
                            "id": "product-tokenisation.tspan.0077",
                            "value": "token_reference"
                          }
                        ]
                      },
                      {
                        "type": "text",
                        "id": "product-tokenisation.text.0078",
                        "value": ". The card number and the network token never touch your systems."
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
                    "id": "product-tokenisation.figcaption.0079",
                    "value": "Figure 1: How a network token is provisioned when a customer saves a card"
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
                "id": "product-tokenisation.p.0080",
                "value": "The scheme authorises the tokenisation request with the card's issuer before generating the token, which is why only issuer-supported cards can be tokenised. Once issued, the token is bound to your merchant account, stored in Paysecure's vault, and represented to you by the "
              },
              {
                "type": "element",
                "tag": "code",
                "props": {},
                "children": [
                  {
                    "type": "text",
                    "id": "product-tokenisation.code.0081",
                    "value": "token_reference"
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
              "id": "payment-flow"
            },
            "children": [
              {
                "type": "text",
                "id": "product-tokenisation.payment-flow.0082",
                "value": "How a token payment works"
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
                "id": "product-tokenisation.p.0083",
                "value": "A network token on its own is not enough to make a payment. Every transaction also needs a "
              },
              {
                "type": "element",
                "tag": "b",
                "props": {},
                "children": [
                  {
                    "type": "text",
                    "id": "product-tokenisation.b.0084",
                    "value": "cryptogram"
                  }
                ]
              },
              {
                "type": "text",
                "id": "product-tokenisation.p.0085",
                "value": ": a single-use cryptographic value, unique to the combination of token, merchant and transaction, which proves to the issuer that the payment came from the merchant the token was issued to. Paysecure fetches a fresh cryptogram from the scheme for every payment, so you never handle one."
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
                  "viewBox": "0 0 760 580",
                  "width": "100%",
                  "role": "img",
                  "aria-label": "Sequence diagram of a payment with a network token and cryptogram",
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
                          "id": "nt-arr-b",
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
                      "y2": "530",
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
                      "y2": "530",
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
                      "y2": "530",
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
                      "y2": "530",
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
                      "y2": "530",
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
                        "id": "product-tokenisation.text.0086",
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
                        "id": "product-tokenisation.text.0087",
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
                        "id": "product-tokenisation.text.0088",
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
                      "x": "522",
                      "y": "8",
                      "width": "136",
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
                        "id": "product-tokenisation.text.0089",
                        "value": "Scheme (TSP)"
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
                        "id": "product-tokenisation.text.0090",
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
                      "y": "70",
                      "textAnchor": "middle",
                      "fontSize": "11",
                      "fill": "var(--body)",
                      "fontFamily": "Inter,system-ui,sans-serif"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "product-tokenisation.text.0091",
                        "value": "1 · Picks saved card,"
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
                      "x": "165",
                      "y": "83",
                      "textAnchor": "middle",
                      "fontSize": "11",
                      "fill": "var(--body)",
                      "fontFamily": "Inter,system-ui,sans-serif"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "product-tokenisation.text.0092",
                        "value": "enters CVC"
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
                      "y1": "90",
                      "x2": "246",
                      "y2": "90",
                      "stroke": "var(--muted)",
                      "markerEnd": "url(#nt-arr-b)"
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
                      "y": "118",
                      "textAnchor": "middle",
                      "fontSize": "11",
                      "fill": "var(--body)",
                      "fontFamily": "Inter,system-ui,sans-serif"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "product-tokenisation.text.0093",
                        "value": "2 · S2S payment with"
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
                      "y": "131",
                      "textAnchor": "middle",
                      "fontSize": "11",
                      "fill": "var(--body)",
                      "fontFamily": "Inter,system-ui,sans-serif"
                    },
                    "children": [
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
                            "id": "product-tokenisation.tspan.0094",
                            "value": "token_reference"
                          }
                        ]
                      },
                      {
                        "type": "text",
                        "value": " + "
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
                            "id": "product-tokenisation.tspan.0095",
                            "value": "cvc"
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
                    "tag": "line",
                    "props": {
                      "x1": "250",
                      "y1": "138",
                      "x2": "426",
                      "y2": "138",
                      "stroke": "var(--muted)",
                      "markerEnd": "url(#nt-arr-b)"
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
                      "y": "164",
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
                      "y": "177",
                      "textAnchor": "middle",
                      "fontSize": "11",
                      "fill": "var(--ink)",
                      "fontFamily": "Inter,system-ui,sans-serif"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "product-tokenisation.text.0096",
                        "value": "3 · Reference resolved to"
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
                      "y": "190",
                      "textAnchor": "middle",
                      "fontSize": "11",
                      "fill": "var(--ink)",
                      "fontFamily": "Inter,system-ui,sans-serif"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "product-tokenisation.text.0097",
                        "value": "the network token"
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
                      "y": "219",
                      "textAnchor": "middle",
                      "fontSize": "11",
                      "fill": "var(--body)",
                      "fontFamily": "Inter,system-ui,sans-serif"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "product-tokenisation.text.0098",
                        "value": "4 · Cryptogram request"
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
                      "y1": "226",
                      "x2": "586",
                      "y2": "226",
                      "stroke": "var(--muted)",
                      "markerEnd": "url(#nt-arr-b)"
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
                      "x": "510",
                      "y": "254",
                      "textAnchor": "middle",
                      "fontSize": "11",
                      "fill": "var(--body)",
                      "fontFamily": "Inter,system-ui,sans-serif"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "product-tokenisation.text.0099",
                        "value": "5 · Single-use cryptogram"
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
                      "x": "510",
                      "y": "267",
                      "textAnchor": "middle",
                      "fontSize": "11",
                      "fill": "var(--body)",
                      "fontFamily": "Inter,system-ui,sans-serif"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "product-tokenisation.text.0100",
                        "value": "(token + merchant + transaction)"
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
                      "y1": "274",
                      "x2": "434",
                      "y2": "274",
                      "stroke": "var(--muted)",
                      "markerEnd": "url(#nt-arr-b)"
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
                      "x": "510",
                      "y": "302",
                      "textAnchor": "middle",
                      "fontSize": "11",
                      "fill": "var(--body)",
                      "fontFamily": "Inter,system-ui,sans-serif"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "product-tokenisation.text.0101",
                        "value": "6 · Authorisation: token"
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
                      "x": "510",
                      "y": "315",
                      "textAnchor": "middle",
                      "fontSize": "11",
                      "fill": "var(--body)",
                      "fontFamily": "Inter,system-ui,sans-serif"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "product-tokenisation.text.0102",
                        "value": "+ cryptogram"
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
                      "y1": "322",
                      "x2": "586",
                      "y2": "322",
                      "stroke": "var(--muted)",
                      "markerEnd": "url(#nt-arr-b)"
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
                      "x": "515",
                      "y": "348",
                      "width": "150",
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
                      "x": "590",
                      "y": "361",
                      "textAnchor": "middle",
                      "fontSize": "11",
                      "fill": "var(--ink)",
                      "fontFamily": "Inter,system-ui,sans-serif"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "product-tokenisation.text.0103",
                        "value": "7 · Detokenised to"
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
                      "x": "590",
                      "y": "374",
                      "textAnchor": "middle",
                      "fontSize": "11",
                      "fill": "var(--ink)",
                      "fontFamily": "Inter,system-ui,sans-serif"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "product-tokenisation.text.0104",
                        "value": "the real PAN"
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
                      "x": "647",
                      "y": "396",
                      "textAnchor": "middle",
                      "fontSize": "11",
                      "fill": "var(--body)",
                      "fontFamily": "Inter,system-ui,sans-serif"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "product-tokenisation.text.0105",
                        "value": "8 · Authorisation"
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
                      "y": "409",
                      "textAnchor": "middle",
                      "fontSize": "11",
                      "fill": "var(--body)",
                      "fontFamily": "Inter,system-ui,sans-serif"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "product-tokenisation.text.0106",
                        "value": "request"
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
                      "y1": "416",
                      "x2": "701",
                      "y2": "416",
                      "stroke": "var(--muted)",
                      "markerEnd": "url(#nt-arr-b)"
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
                      "y": "444",
                      "textAnchor": "middle",
                      "fontSize": "11",
                      "fill": "var(--body)",
                      "fontFamily": "Inter,system-ui,sans-serif"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "product-tokenisation.text.0107",
                        "value": "9 · Approved"
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
                      "y1": "452",
                      "x2": "594",
                      "y2": "452",
                      "stroke": "var(--muted)",
                      "markerEnd": "url(#nt-arr-b)"
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
                      "y": "480",
                      "textAnchor": "middle",
                      "fontSize": "11",
                      "fill": "var(--body)",
                      "fontFamily": "Inter,system-ui,sans-serif"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "product-tokenisation.text.0108",
                        "value": "10 · Status "
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
                            "id": "product-tokenisation.tspan.0109",
                            "value": "paid"
                          }
                        ]
                      },
                      {
                        "type": "text",
                        "id": "product-tokenisation.text.0110",
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
                            "id": "product-tokenisation.tspan.0111",
                            "value": "error"
                          }
                        ]
                      },
                      {
                        "type": "text",
                        "value": ","
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
                      "y": "493",
                      "textAnchor": "middle",
                      "fontSize": "11",
                      "fill": "var(--body)",
                      "fontFamily": "Inter,system-ui,sans-serif"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "product-tokenisation.text.0112",
                        "value": "signed webhook fires"
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
                      "y1": "500",
                      "x2": "254",
                      "y2": "500",
                      "stroke": "var(--muted)",
                      "markerEnd": "url(#nt-arr-b)"
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
                      "y": "554",
                      "textAnchor": "middle",
                      "fontSize": "11",
                      "fill": "var(--muted)",
                      "fontFamily": "Inter,system-ui,sans-serif"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "product-tokenisation.text.0113",
                        "value": "Fallback: if the card is not eligible or the MID does not accept tokens, Paysecure"
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
                      "y": "568",
                      "textAnchor": "middle",
                      "fontSize": "11",
                      "fill": "var(--muted)",
                      "fontFamily": "Inter,system-ui,sans-serif"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "product-tokenisation.text.0114",
                        "value": "retries with the stored card number automatically. Same request, same response."
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
                    "id": "product-tokenisation.figcaption.0115",
                    "value": "Figure 2: How a saved card is charged with a network token and a single-use cryptogram"
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
                "id": "product-tokenisation.p.0116",
                "value": "Because the scheme swaps the token back to the real card details only at authorisation, the card data is handled solely by the scheme and the issuer. For customer-initiated payments 3DS may still apply as usual: the S2S response returns a "
              },
              {
                "type": "element",
                "tag": "code",
                "props": {},
                "children": [
                  {
                    "type": "text",
                    "id": "product-tokenisation.code.0117",
                    "value": "callback_url"
                  }
                ]
              },
              {
                "type": "text",
                "id": "product-tokenisation.p.0118",
                "value": " exactly as it does for a plain card payment."
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
              "id": "benefits"
            },
            "children": [
              {
                "type": "text",
                "id": "product-tokenisation.benefits.0119",
                "value": "Why use network tokens"
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
                                "id": "product-tokenisation.th.0120",
                                "value": "Benefit"
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
                                "id": "product-tokenisation.th.0121",
                                "value": "What it means for you"
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
                                    "id": "product-tokenisation.b.0122",
                                    "value": "Higher approval rates"
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
                                "id": "product-tokenisation.td.0123",
                                "value": "Issuers recognise scheme tokens and receive richer data with each transaction, so legitimate payments are less likely to be declined as suspected fraud. The uplift is strongest on stored-card and subscription traffic."
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
                                    "id": "product-tokenisation.b.0124",
                                    "value": "Automatic card updates"
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
                                "id": "product-tokenisation.td.0125",
                                "value": "When a card expires or is reissued, the scheme updates the token behind the scenes. Your "
                              },
                              {
                                "type": "element",
                                "tag": "code",
                                "props": {},
                                "children": [
                                  {
                                    "type": "text",
                                    "id": "product-tokenisation.code.0126",
                                    "value": "token_reference"
                                  }
                                ]
                              },
                              {
                                "type": "text",
                                "id": "product-tokenisation.td.0127",
                                "value": " keeps working with no action from you or the customer, which protects recurring revenue from involuntary churn."
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
                                    "id": "product-tokenisation.b.0128",
                                    "value": "Lower fraud exposure"
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
                                "id": "product-tokenisation.td.0129",
                                "value": "The real card number never appears in the transaction, each payment carries a single-use cryptogram, and a token is merchant-bound, so it cannot be replayed elsewhere if stolen."
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
                                    "id": "product-tokenisation.b.0130",
                                    "value": "Reduced PCI scope"
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
                                "id": "product-tokenisation.td.0131",
                                "value": "You store and transact with a "
                              },
                              {
                                "type": "element",
                                "tag": "code",
                                "props": {},
                                "children": [
                                  {
                                    "type": "text",
                                    "id": "product-tokenisation.code.0132",
                                    "value": "token_reference"
                                  }
                                ]
                              },
                              {
                                "type": "text",
                                "id": "product-tokenisation.td.0133",
                                "value": ", never a PAN, so less of your system handles sensitive card data."
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
                                    "id": "product-tokenisation.b.0134",
                                    "value": "Potentially lower fees"
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
                                "id": "product-tokenisation.td.0135",
                                "value": "Some schemes price tokenised transactions at lower interchange rates than PAN transactions. Your account manager can confirm what applies to your account."
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
                                    "id": "product-tokenisation.b.0136",
                                    "value": "One integration"
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
                                "id": "product-tokenisation.td.0137",
                                "value": "Tokenisation and de-tokenisation are handled by the schemes via Paysecure, so the same integration works across every MID and acquirer Paysecure routes you to."
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
              "id": "paysecure-handles"
            },
            "children": [
              {
                "type": "text",
                "id": "product-tokenisation.paysecure-handles.0138",
                "value": "What Paysecure handles for you"
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
                "id": "product-tokenisation.p.0139",
                "value": "You never see or manage the network token itself. Paysecure abstracts it entirely behind the "
              },
              {
                "type": "element",
                "tag": "code",
                "props": {},
                "children": [
                  {
                    "type": "text",
                    "id": "product-tokenisation.code.0140",
                    "value": "token_reference"
                  }
                ]
              },
              {
                "type": "text",
                "id": "product-tokenisation.p.0141",
                "value": ", so the existing Purchase and S2S integration works as-is:"
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
                        "id": "product-tokenisation.b.0142",
                        "value": "Provisioning and lifecycle:"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "product-tokenisation.li.0143",
                    "value": " token creation with the schemes, renewal and card updates all run behind the scenes."
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
                        "id": "product-tokenisation.b.0144",
                        "value": "Cryptograms:"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "product-tokenisation.li.0145",
                    "value": " a fresh single-use cryptogram is fetched from the scheme for each payment; you never generate, store or even see one."
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
                        "id": "product-tokenisation.b.0146",
                        "value": "Fallback to the card number:"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "product-tokenisation.li.0147",
                    "value": " if a card is not eligible for tokenisation, or the MID selected for a payment does not accept tokens, Paysecure falls back to the stored card number automatically. The request, response and flow stay the same either way."
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
                        "id": "product-tokenisation.b.0148",
                        "value": "token_reference is server-side only."
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "product-tokenisation.p.0149",
                    "value": " It does not expire and stays valid until the saved card is deleted. Show saved cards to customers using "
                  },
                  {
                    "type": "element",
                    "tag": "code",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "product-tokenisation.code.0150",
                        "value": "card_last_four"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "product-tokenisation.p.0151",
                    "value": " and a scheme icon; never expose the reference itself."
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
              "id": "cit-mit"
            },
            "children": [
              {
                "type": "text",
                "id": "product-tokenisation.cit-mit.0152",
                "value": "Using saved cards for CIT and MIT"
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
                "id": "product-tokenisation.p.0153",
                "value": "The same "
              },
              {
                "type": "element",
                "tag": "code",
                "props": {},
                "children": [
                  {
                    "type": "text",
                    "id": "product-tokenisation.code.0154",
                    "value": "token_reference"
                  }
                ]
              },
              {
                "type": "text",
                "id": "product-tokenisation.p.0155",
                "value": " serves both transaction types, with different rules:"
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
                                "id": "product-tokenisation.th.0156",
                                "value": "Transaction"
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
                                "id": "product-tokenisation.th.0157",
                                "value": "Who initiates"
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
                                "id": "product-tokenisation.th.0158",
                                "value": "What you send"
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
                                    "id": "product-tokenisation.b.0159",
                                    "value": "CIT"
                                  }
                                ]
                              },
                              {
                                "type": "text",
                                "id": "product-tokenisation.td.0160",
                                "value": " (one-click checkout)"
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "td",
                            "props": {},
                            "children": [
                              {
                                "type": "text",
                                "id": "product-tokenisation.td.0161",
                                "value": "The customer, in session"
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
                                    "id": "product-tokenisation.code.0162",
                                    "value": "token_reference"
                                  }
                                ]
                              },
                              {
                                "type": "text",
                                "id": "product-tokenisation.td.0163",
                                "value": " plus the "
                              },
                              {
                                "type": "element",
                                "tag": "code",
                                "props": {},
                                "children": [
                                  {
                                    "type": "text",
                                    "id": "product-tokenisation.code.0164",
                                    "value": "cvc"
                                  }
                                ]
                              },
                              {
                                "type": "text",
                                "id": "product-tokenisation.td.0165",
                                "value": " the customer re-enters. 3DS applies as normal, often frictionless for a recognised saved card."
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
                                    "id": "product-tokenisation.b.0166",
                                    "value": "MIT"
                                  }
                                ]
                              },
                              {
                                "type": "text",
                                "id": "product-tokenisation.td.0167",
                                "value": " (subscriptions, retries, top-ups)"
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "td",
                            "props": {},
                            "children": [
                              {
                                "type": "text",
                                "id": "product-tokenisation.td.0168",
                                "value": "You, off session"
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "td",
                            "props": {},
                            "children": [
                              {
                                "type": "text",
                                "id": "product-tokenisation.td.0169",
                                "value": "A mandate created at the first customer-present payment; billing then runs against it without the customer. See "
                              },
                              {
                                "type": "element",
                                "tag": "DocLink",
                                "props": {
                                  "className": "inline",
                                  "href": "/product-recurring"
                                },
                                "children": [
                                  {
                                    "type": "text",
                                    "id": "product-tokenisation.doclink.0170",
                                    "value": "Recurring payments"
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
              "id": "lifecycle"
            },
            "children": [
              {
                "type": "text",
                "id": "product-tokenisation.lifecycle.0171",
                "value": "Token lifecycle"
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
                        "id": "product-tokenisation.b.0172",
                        "value": "Created:"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "product-tokenisation.li.0173",
                    "value": " when the customer saves a card. The "
                  },
                  {
                    "type": "element",
                    "tag": "code",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "product-tokenisation.code.0174",
                        "value": "token_reference"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "product-tokenisation.li.0175",
                    "value": " is returned in Check Status and the webhook (new card via S2S), or in the response and webhook (existing saved card), and can be listed at any time per customer."
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
                        "id": "product-tokenisation.b.0176",
                        "value": "Updated:"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "product-tokenisation.li.0177",
                    "value": " the scheme refreshes the token when the underlying card changes: expiry, loss, theft or reissue. The reference you hold never changes."
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
                        "id": "product-tokenisation.b.0178",
                        "value": "Deleted:"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "product-tokenisation.li.0179",
                    "value": " when a customer removes a card, or for data-retention compliance, delete the token via the API. This deactivates the network token with the scheme and is irreversible; the customer re-enters card details to pay again."
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
              "id": "responsibilities"
            },
            "children": [
              {
                "type": "text",
                "id": "product-tokenisation.responsibilities.0180",
                "value": "Your responsibilities"
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
                "id": "product-tokenisation.p.0181",
                "value": "The card schemes' stored-credential rules (Visa's Stored Credential Transaction Framework and Mastercard's credential-on-file rules) put three obligations on you as the merchant, even though Paysecure automates the technical side:"
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
                    "id": "product-tokenisation.li.0182",
                    "value": "Get the cardholder's informed consent before saving their card, for example an unticked \"save my card\" checkbox at checkout"
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
                    "id": "product-tokenisation.li.0183",
                    "value": "Disclose how the stored credential will be used, especially for subscriptions and merchant-initiated charges"
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
                    "id": "product-tokenisation.li.0184",
                    "value": "Tell cardholders when the terms of use change, and delete the stored card when they ask you to"
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
              "id": "getting-started"
            },
            "children": [
              {
                "type": "text",
                "id": "product-tokenisation.getting-started.0185",
                "value": "Getting started"
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
                    "id": "product-tokenisation.li.0186",
                    "value": "Ask your account manager to activate network tokenisation for your account, then enable "
                  },
                  {
                    "type": "element",
                    "tag": "b",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "product-tokenisation.b.0187",
                        "value": "Allow Network Token"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "product-tokenisation.li.0188",
                    "value": " under Merchant Details → Allowed Services"
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
                    "id": "product-tokenisation.li.0189",
                    "value": "Configure the "
                  },
                  {
                    "type": "element",
                    "tag": "b",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "product-tokenisation.b.0190",
                        "value": "Paysecure Token Service"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "product-tokenisation.li.0191",
                    "value": " under Global Settings, including your Category Code (MCC), and save"
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
                    "id": "product-tokenisation.li.0192",
                    "value": "Wait for the token service status to move from "
                  },
                  {
                    "type": "element",
                    "tag": "span",
                    "props": {
                      "className": "pill amber"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "product-tokenisation.span.0193",
                        "value": "Pending"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "product-tokenisation.li.0194",
                    "value": " to "
                  },
                  {
                    "type": "element",
                    "tag": "span",
                    "props": {
                      "className": "pill green"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "product-tokenisation.span.0195",
                        "value": "Active"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "product-tokenisation.li.0196",
                    "value": " before calling any tokenisation API"
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
                    "id": "product-tokenisation.li.0197",
                    "value": "Save a card on a test payment, list it with the List Saved Cards API, then charge it S2S with the "
                  },
                  {
                    "type": "element",
                    "tag": "code",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "product-tokenisation.code.0198",
                        "value": "token_reference"
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
              "id": "apis"
            },
            "children": [
              {
                "type": "text",
                "id": "product-tokenisation.apis.0199",
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
                  "href": "/api-tokenisation"
                },
                "children": [
                  {
                    "type": "element",
                    "tag": "h4",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "product-tokenisation.h4.0200",
                        "value": "Network Tokenisation API →"
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
                        "id": "product-tokenisation.p.0201",
                        "value": "List saved cards, S2S with "
                      },
                      {
                        "type": "element",
                        "tag": "code",
                        "props": {},
                        "children": [
                          {
                            "type": "text",
                            "id": "product-tokenisation.code.0202",
                            "value": "token_reference"
                          }
                        ]
                      },
                      {
                        "type": "text",
                        "id": "product-tokenisation.p.0203",
                        "value": ", delete token, payout to a tokenised card."
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
                  "href": "/api-recurring"
                },
                "children": [
                  {
                    "type": "element",
                    "tag": "h4",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "product-tokenisation.h4.0204",
                        "value": "Customers & mandates →"
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
                        "id": "product-tokenisation.p.0205",
                        "value": "Create Customer, mandates, CIT/MIT for subscriptions and repeat billing."
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
                      "href": "/product-cashier"
                    },
                    "children": [
                      {
                        "type": "element",
                        "tag": "small",
                        "props": {},
                        "children": [
                          {
                            "type": "text",
                            "id": "product-tokenisation.small.0206",
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
                            "id": "product-tokenisation.b.0207",
                            "value": "← Cashier"
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
                            "id": "product-tokenisation.small.0208",
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
                            "id": "product-tokenisation.b.0209",
                            "value": "Recurring payments →"
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
