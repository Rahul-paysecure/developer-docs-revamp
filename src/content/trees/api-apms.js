import { defineDocument } from '../schema.js';

export const ApiApmsTreeDocument = defineDocument({
  "schemaVersion": 1,
  "slug": "api-apms",
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
                    "id": "api-apms.doclink.0001",
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
                    "id": "api-apms.doclink.0002",
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
                "id": "api-apms.div.0003",
                "value": "Bank & local APMs"
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
              "id": "apms-overview",
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
                        "id": "api-apms.h1.0004",
                        "value": "Bank transfers & local APMs"
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
                        "id": "api-apms.p.0005",
                        "value": "Every alternative payment method uses the same "
                      },
                      {
                        "type": "element",
                        "tag": "code",
                        "props": {},
                        "children": [
                          {
                            "type": "text",
                            "id": "api-apms.code.0006",
                            "value": "POST /purchases/"
                          }
                        ]
                      },
                      {
                        "type": "text",
                        "id": "api-apms.p.0007",
                        "value": " envelope; only the "
                      },
                      {
                        "type": "element",
                        "tag": "code",
                        "props": {},
                        "children": [
                          {
                            "type": "text",
                            "id": "api-apms.code.0008",
                            "value": "paymentMethod"
                          }
                        ]
                      },
                      {
                        "type": "text",
                        "id": "api-apms.p.0009",
                        "value": " code, currency, and occasional "
                      },
                      {
                        "type": "element",
                        "tag": "code",
                        "props": {},
                        "children": [
                          {
                            "type": "text",
                            "id": "api-apms.code.0010",
                            "value": "extraParam"
                          }
                        ]
                      },
                      {
                        "type": "text",
                        "id": "api-apms.p.0011",
                        "value": " fields change. Learn it once, integrate the lot."
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
                        "id": "api-apms.h3.0012",
                        "value": "Supported methods"
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
                                        "id": "api-apms.th.0013",
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
                                        "id": "api-apms.th.0014",
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
                                        "id": "api-apms.th.0015",
                                        "value": "Currency"
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
                                        "id": "api-apms.th.0016",
                                        "value": "PayOut"
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
                                            "id": "api-apms.b.0017",
                                            "value": "PIX"
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
                                        "id": "api-apms.td.0018",
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
                                        "type": "text",
                                        "id": "api-apms.td.0019",
                                        "value": "BRL"
                                      }
                                    ]
                                  },
                                  {
                                    "type": "element",
                                    "tag": "td",
                                    "props": {},
                                    "children": [
                                      {
                                        "type": "text",
                                        "id": "api-apms.td.0020",
                                        "value": "Yes"
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
                                            "id": "api-apms.b.0021",
                                            "value": "UPI Solution"
                                          }
                                        ]
                                      },
                                      {
                                        "type": "text",
                                        "id": "api-apms.td.0022",
                                        "value": " / ThirdParty UPI"
                                      }
                                    ]
                                  },
                                  {
                                    "type": "element",
                                    "tag": "td",
                                    "props": {},
                                    "children": [
                                      {
                                        "type": "text",
                                        "id": "api-apms.td.0023",
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
                                        "type": "text",
                                        "id": "api-apms.td.0024",
                                        "value": "INR"
                                      }
                                    ]
                                  },
                                  {
                                    "type": "element",
                                    "tag": "td",
                                    "props": {},
                                    "children": [
                                      {
                                        "type": "text",
                                        "id": "api-apms.td.0025",
                                        "value": "Yes"
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
                                            "id": "api-apms.b.0026",
                                            "value": "SPEI Payments"
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
                                        "id": "api-apms.td.0027",
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
                                        "type": "text",
                                        "id": "api-apms.td.0028",
                                        "value": "MXN"
                                      }
                                    ]
                                  },
                                  {
                                    "type": "element",
                                    "tag": "td",
                                    "props": {},
                                    "children": [
                                      {
                                        "type": "text",
                                        "id": "api-apms.td.0029",
                                        "value": "Yes"
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
                                            "id": "api-apms.b.0030",
                                            "value": "FawryPay"
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
                                        "id": "api-apms.td.0031",
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
                                        "type": "text",
                                        "id": "api-apms.td.0032",
                                        "value": "EGP"
                                      }
                                    ]
                                  },
                                  {
                                    "type": "element",
                                    "tag": "td",
                                    "props": {},
                                    "children": [
                                      {
                                        "type": "text",
                                        "id": "api-apms.td.0033",
                                        "value": "Yes"
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
                                            "id": "api-apms.b.0034",
                                            "value": "MobileMoney"
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
                                        "id": "api-apms.td.0035",
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
                                        "type": "text",
                                        "id": "api-apms.td.0036",
                                        "value": "Local"
                                      }
                                    ]
                                  },
                                  {
                                    "type": "element",
                                    "tag": "td",
                                    "props": {},
                                    "children": [
                                      {
                                        "type": "text",
                                        "id": "api-apms.td.0037",
                                        "value": "Yes"
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
                                            "id": "api-apms.b.0038",
                                            "value": "PayID"
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
                                        "id": "api-apms.td.0039",
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
                                        "type": "text",
                                        "id": "api-apms.td.0040",
                                        "value": "AUD"
                                      }
                                    ]
                                  },
                                  {
                                    "type": "element",
                                    "tag": "td",
                                    "props": {},
                                    "children": [
                                      {
                                        "type": "text",
                                        "id": "api-apms.td.0041",
                                        "value": "Yes"
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
                                            "id": "api-apms.b.0042",
                                            "value": "Virtual Accounts"
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
                                        "id": "api-apms.td.0043",
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
                                        "type": "text",
                                        "id": "api-apms.td.0044",
                                        "value": "KRW"
                                      }
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
                                            "id": "api-apms.b.0045",
                                            "value": "Open Banking"
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
                                        "id": "api-apms.td.0046",
                                        "value": "EUR & UK"
                                      }
                                    ]
                                  },
                                  {
                                    "type": "element",
                                    "tag": "td",
                                    "props": {},
                                    "children": [
                                      {
                                        "type": "text",
                                        "id": "api-apms.td.0047",
                                        "value": "EUR · GBP"
                                      }
                                    ]
                                  },
                                  {
                                    "type": "element",
                                    "tag": "td",
                                    "props": {},
                                    "children": [
                                      {
                                        "type": "text",
                                        "id": "api-apms.td.0048",
                                        "value": "Via PayOut API"
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
                                            "id": "api-apms.b.0049",
                                            "value": "Bank Transfers"
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
                                        "id": "api-apms.td.0050",
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
                                        "type": "text",
                                        "id": "api-apms.td.0051",
                                        "value": "Local"
                                      }
                                    ]
                                  },
                                  {
                                    "type": "element",
                                    "tag": "td",
                                    "props": {},
                                    "children": [
                                      {
                                        "type": "text",
                                        "id": "api-apms.td.0052",
                                        "value": "PayIn + PayOut + Balance"
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
                                            "id": "api-apms.b.0053",
                                            "value": "Neosurf"
                                          }
                                        ]
                                      },
                                      {
                                        "type": "text",
                                        "id": "api-apms.td.0054",
                                        "value": " (voucher)"
                                      }
                                    ]
                                  },
                                  {
                                    "type": "element",
                                    "tag": "td",
                                    "props": {},
                                    "children": [
                                      {
                                        "type": "text",
                                        "id": "api-apms.td.0055",
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
                                        "type": "text",
                                        "id": "api-apms.td.0056",
                                        "value": "EUR +"
                                      }
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
                                            "id": "api-apms.b.0057",
                                            "value": "Paypal Wallet"
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
                                        "id": "api-apms.td.0058",
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
                                        "type": "text",
                                        "id": "api-apms.td.0059",
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
              "id": "apm-payin"
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
                        "id": "api-apms.h2.0060",
                        "value": "Create an APM purchase"
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
                            "id": "api-apms.span.0061",
                            "value": "POST"
                          }
                        ]
                      },
                      {
                        "type": "text",
                        "id": "api-apms.div.0062",
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
                        "id": "api-apms.p.0063",
                        "value": "Providing "
                      },
                      {
                        "type": "element",
                        "tag": "code",
                        "props": {},
                        "children": [
                          {
                            "type": "text",
                            "id": "api-apms.code.0064",
                            "value": "paymentMethod"
                          }
                        ]
                      },
                      {
                        "type": "text",
                        "id": "api-apms.p.0065",
                        "value": " makes Paysecure perform direct payment with the selected method instead of loading the hosted cashier, the customer lands straight on the method's flow (QR code for PIX, UPI apps or QR for UPI, bank list for open banking). Real method codes: "
                      },
                      {
                        "type": "element",
                        "tag": "code",
                        "props": {},
                        "children": [
                          {
                            "type": "text",
                            "id": "api-apms.code.0066",
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
                            "id": "api-apms.code.0067",
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
                            "id": "api-apms.code.0068",
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
                            "id": "api-apms.code.0069",
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
                            "id": "api-apms.code.0070",
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
                            "id": "api-apms.code.0071",
                            "value": "MOBILEMONEY"
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
                            "id": "api-apms.code.0072",
                            "value": "PAYID"
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
                            "id": "api-apms.code.0073",
                            "value": "VIRTUAL-ACCOUNT"
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
                            "id": "api-apms.code.0074",
                            "value": "OPEN-BANKING"
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
                            "id": "api-apms.code.0075",
                            "value": "BANKTRANSFER"
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
                            "id": "api-apms.code.0076",
                            "value": "NEOSURF"
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
                            "id": "api-apms.code.0077",
                            "value": "PAYPAL"
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
                            "id": "api-apms.code.0078",
                            "value": "THIRDPARTY-UPI"
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
                    "tag": "h3",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "api-apms.h3.0079",
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
                                        "id": "api-apms.th.0080",
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
                                        "id": "api-apms.th.0081",
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
                                        "id": "api-apms.th.0082",
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
                                        "id": "api-apms.th.0083",
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
                                            "id": "api-apms.code.0084",
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
                                        "id": "api-apms.td.0085",
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
                                        "id": "api-apms.td.0086",
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
                                        "id": "api-apms.td.0087",
                                        "value": "Pins the purchase to an APM rail, for example "
                                      },
                                      {
                                        "type": "element",
                                        "tag": "code",
                                        "props": {},
                                        "children": [
                                          {
                                            "type": "text",
                                            "id": "api-apms.code.0088",
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
                                            "id": "api-apms.code.0089",
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
                                            "id": "api-apms.code.0090",
                                            "value": "SPEI"
                                          }
                                        ]
                                      },
                                      {
                                        "type": "text",
                                        "id": "api-apms.td.0091",
                                        "value": " or "
                                      },
                                      {
                                        "type": "element",
                                        "tag": "code",
                                        "props": {},
                                        "children": [
                                          {
                                            "type": "text",
                                            "id": "api-apms.code.0092",
                                            "value": "OPEN-BANKING"
                                          }
                                        ]
                                      },
                                      {
                                        "type": "text",
                                        "id": "api-apms.td.0093",
                                        "value": ". Without it the hosted cashier loads instead."
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
                                            "id": "api-apms.code.0094",
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
                                        "id": "api-apms.td.0095",
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
                                        "id": "api-apms.td.0096",
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
                                        "id": "api-apms.td.0097",
                                        "value": "Must match the method's local currency, for example "
                                      },
                                      {
                                        "type": "element",
                                        "tag": "code",
                                        "props": {},
                                        "children": [
                                          {
                                            "type": "text",
                                            "id": "api-apms.code.0098",
                                            "value": "BRL"
                                          }
                                        ]
                                      },
                                      {
                                        "type": "text",
                                        "id": "api-apms.td.0099",
                                        "value": " for PIX (see the table above)."
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
                                            "id": "api-apms.code.0100",
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
                                        "id": "api-apms.td.0101",
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
                                        "id": "api-apms.td.0102",
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
                                        "id": "api-apms.td.0103",
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
                                            "id": "api-apms.code.0104",
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
                                        "id": "api-apms.td.0105",
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
                                        "id": "api-apms.td.0106",
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
                                        "id": "api-apms.td.0107",
                                        "value": "Price in decimal format, major units."
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
                                            "id": "api-apms.code.0108",
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
                                        "id": "api-apms.td.0109",
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
                                        "id": "api-apms.td.0110",
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
                                        "id": "api-apms.td.0111",
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
                                            "id": "api-apms.code.0112",
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
                                        "id": "api-apms.td.0113",
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
                                        "id": "api-apms.td.0114",
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
                                        "id": "api-apms.td.0115",
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
                                            "id": "api-apms.code.0116",
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
                                        "id": "api-apms.td.0117",
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
                                        "id": "api-apms.td.0118",
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
                                        "id": "api-apms.td.0119",
                                        "value": "ISO 3166 alpha-2, upper case, matching the method's region."
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
                                            "id": "api-apms.code.0120",
                                            "value": "client.tax_number"
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
                                        "id": "api-apms.td.0121",
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
                                        "id": "api-apms.td.0122",
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
                                        "id": "api-apms.td.0123",
                                        "value": "CPF or CNPJ, required by the Brazilian rail for PIX. Other rails may require their own local identifier."
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
                                            "id": "api-apms.code.0124",
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
                                        "id": "api-apms.td.0125",
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
                                        "id": "api-apms.td.0126",
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
                                        "id": "api-apms.td.0127",
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
                                            "id": "api-apms.code.0128",
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
                                        "id": "api-apms.td.0129",
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
                                        "id": "api-apms.td.0130",
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
                                        "id": "api-apms.td.0131",
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
                                            "id": "api-apms.code.0132",
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
                                        "id": "api-apms.td.0133",
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
                                        "id": "api-apms.td.0134",
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
                                        "id": "api-apms.td.0135",
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
                                            "id": "api-apms.code.0136",
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
                                        "id": "api-apms.td.0137",
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
                                        "id": "api-apms.td.0138",
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
                                        "id": "api-apms.td.0139",
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
                                            "id": "api-apms.code.0140",
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
                                        "id": "api-apms.td.0141",
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
                                        "id": "api-apms.td.0142",
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
                                        "id": "api-apms.td.0143",
                                        "value": "Server-to-server webhook Paysecure POSTs to on success. Treat this, not the redirect, as the source of truth."
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
                                            "id": "api-apms.code.0144",
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
                                        "id": "api-apms.td.0145",
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
                                        "id": "api-apms.td.0146",
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
                                        "id": "api-apms.td.0147",
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
                                            "id": "api-apms.code.0148",
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
                                        "id": "api-apms.td.0149",
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
                                        "id": "api-apms.td.0150",
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
                                        "id": "api-apms.td.0151",
                                        "value": "Duplicate protection and retrieval if the response times out."
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
                        "id": "api-apms.h3.0152",
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
                                        "id": "api-apms.th.0153",
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
                                        "id": "api-apms.th.0154",
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
                                        "id": "api-apms.th.0155",
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
                                            "id": "api-apms.code.0156",
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
                                        "id": "api-apms.td.0157",
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
                                        "id": "api-apms.td.0158",
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
                                            "id": "api-apms.code.0159",
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
                                        "id": "api-apms.td.0160",
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
                                        "id": "api-apms.td.0161",
                                        "value": "Current status: "
                                      },
                                      {
                                        "type": "element",
                                        "tag": "code",
                                        "props": {},
                                        "children": [
                                          {
                                            "type": "text",
                                            "id": "api-apms.code.0162",
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
                                            "id": "api-apms.code.0163",
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
                                            "id": "api-apms.code.0164",
                                            "value": "expired"
                                          }
                                        ]
                                      },
                                      {
                                        "type": "text",
                                        "id": "api-apms.td.0165",
                                        "value": " or "
                                      },
                                      {
                                        "type": "element",
                                        "tag": "code",
                                        "props": {},
                                        "children": [
                                          {
                                            "type": "text",
                                            "id": "api-apms.code.0166",
                                            "value": "error"
                                          }
                                        ]
                                      },
                                      {
                                        "type": "text",
                                        "id": "api-apms.td.0167",
                                        "value": ". Also repeated in "
                                      },
                                      {
                                        "type": "element",
                                        "tag": "code",
                                        "props": {},
                                        "children": [
                                          {
                                            "type": "text",
                                            "id": "api-apms.code.0168",
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
                                            "id": "api-apms.code.0169",
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
                                        "id": "api-apms.td.0170",
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
                                        "id": "api-apms.td.0171",
                                        "value": "The APM used, echoing the request code."
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
                                            "id": "api-apms.code.0172",
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
                                        "id": "api-apms.td.0173",
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
                                            "id": "api-apms.code.0174",
                                            "value": "MAJOR"
                                          }
                                        ]
                                      },
                                      {
                                        "type": "text",
                                        "id": "api-apms.td.0175",
                                        "value": " for full currency units, "
                                      },
                                      {
                                        "type": "element",
                                        "tag": "code",
                                        "props": {},
                                        "children": [
                                          {
                                            "type": "text",
                                            "id": "api-apms.code.0176",
                                            "value": "MINOR"
                                          }
                                        ]
                                      },
                                      {
                                        "type": "text",
                                        "id": "api-apms.td.0177",
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
                                            "id": "api-apms.code.0178",
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
                                        "id": "api-apms.td.0179",
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
                                        "id": "api-apms.td.0180",
                                        "value": "Hosted or provider page to send the customer to. Present for redirect rails such as open banking and FawryPay."
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
                                            "id": "api-apms.code.0181",
                                            "value": "pix_payload"
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
                                        "id": "api-apms.td.0182",
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
                                        "id": "api-apms.td.0183",
                                        "value": "PIX push-payment instructions: "
                                      },
                                      {
                                        "type": "element",
                                        "tag": "code",
                                        "props": {},
                                        "children": [
                                          {
                                            "type": "text",
                                            "id": "api-apms.code.0184",
                                            "value": "qr_code"
                                          }
                                        ]
                                      },
                                      {
                                        "type": "text",
                                        "id": "api-apms.td.0185",
                                        "value": " (Base64 QR image), "
                                      },
                                      {
                                        "type": "element",
                                        "tag": "code",
                                        "props": {},
                                        "children": [
                                          {
                                            "type": "text",
                                            "id": "api-apms.code.0186",
                                            "value": "payload"
                                          }
                                        ]
                                      },
                                      {
                                        "type": "text",
                                        "id": "api-apms.td.0187",
                                        "value": " (EMV copy-and-paste string) and "
                                      },
                                      {
                                        "type": "element",
                                        "tag": "code",
                                        "props": {},
                                        "children": [
                                          {
                                            "type": "text",
                                            "id": "api-apms.code.0188",
                                            "value": "expiration_date"
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
                                            "id": "api-apms.code.0189",
                                            "value": "extraParam"
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
                                        "id": "api-apms.td.0190",
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
                                        "id": "api-apms.td.0191",
                                        "value": "Method-specific push-payment details on other rails, for example a CLABE or account number for SPEI and virtual accounts."
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
                                            "id": "api-apms.code.0192",
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
                                        "id": "api-apms.td.0193",
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
                                        "id": "api-apms.td.0194",
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
                                            "id": "api-apms.code.0195",
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
                                        "id": "api-apms.td.0196",
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
                                        "id": "api-apms.td.0197",
                                        "value": "Every status the purchase passed through, each with a UNIX "
                                      },
                                      {
                                        "type": "element",
                                        "tag": "code",
                                        "props": {},
                                        "children": [
                                          {
                                            "type": "text",
                                            "id": "api-apms.code.0198",
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
                    "value": "\n\n          "
                  },
                  {
                    "type": "element",
                    "tag": "h3",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "api-apms.h3.0199",
                        "value": "Response by rail type"
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
                                "id": "api-apms.b.0200",
                                "value": "Redirect rails"
                              }
                            ]
                          },
                          {
                            "type": "text",
                            "id": "api-apms.li.0201",
                            "value": " (open banking, FawryPay): response carries "
                          },
                          {
                            "type": "element",
                            "tag": "code",
                            "props": {},
                            "children": [
                              {
                                "type": "text",
                                "id": "api-apms.code.0202",
                                "value": "checkout_url"
                              }
                            ]
                          },
                          {
                            "type": "text",
                            "id": "api-apms.li.0203",
                            "value": " to the bank/provider flow."
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
                                "id": "api-apms.b.0204",
                                "value": "Push rails"
                              }
                            ]
                          },
                          {
                            "type": "text",
                            "id": "api-apms.li.0205",
                            "value": " (PIX, SPEI, virtual accounts): response includes payment instructions, for PIX the "
                          },
                          {
                            "type": "element",
                            "tag": "code",
                            "props": {},
                            "children": [
                              {
                                "type": "text",
                                "id": "api-apms.code.0206",
                                "value": "pix_payload"
                              }
                            ]
                          },
                          {
                            "type": "text",
                            "id": "api-apms.li.0207",
                            "value": " object (Base64 "
                          },
                          {
                            "type": "element",
                            "tag": "code",
                            "props": {},
                            "children": [
                              {
                                "type": "text",
                                "id": "api-apms.code.0208",
                                "value": "qr_code"
                              }
                            ]
                          },
                          {
                            "type": "text",
                            "id": "api-apms.li.0209",
                            "value": " image, EMV "
                          },
                          {
                            "type": "element",
                            "tag": "code",
                            "props": {},
                            "children": [
                              {
                                "type": "text",
                                "id": "api-apms.code.0210",
                                "value": "payload"
                              }
                            ]
                          },
                          {
                            "type": "text",
                            "id": "api-apms.li.0211",
                            "value": " string, and "
                          },
                          {
                            "type": "element",
                            "tag": "code",
                            "props": {},
                            "children": [
                              {
                                "type": "text",
                                "id": "api-apms.code.0212",
                                "value": "expiration_date"
                              }
                            ]
                          },
                          {
                            "type": "text",
                            "id": "api-apms.li.0213",
                            "value": " in UTC); CLABE or account number for others."
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
                                "id": "api-apms.b.0214",
                                "value": "QR / intent rails"
                              }
                            ]
                          },
                          {
                            "type": "text",
                            "id": "api-apms.li.0215",
                            "value": " (UPI-QR, UPI-INTENT): the customer pays via their UPI app or by scanning the QR, no payer VPA is collected in the request. You wait for the webhook or poll "
                          },
                          {
                            "type": "element",
                            "tag": "code",
                            "props": {},
                            "children": [
                              {
                                "type": "text",
                                "id": "api-apms.code.0216",
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
                                  "d": "M12 6v6l4 2"
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
                                "id": "api-apms.b.0217",
                                "value": "All APMs are asynchronous."
                              }
                            ]
                          },
                          {
                            "type": "text",
                            "id": "api-apms.p.0218",
                            "value": " Statuses move "
                          },
                          {
                            "type": "element",
                            "tag": "code",
                            "props": {},
                            "children": [
                              {
                                "type": "text",
                                "id": "api-apms.code.0219",
                                "value": "payment_in_process → paid / expired / error"
                              }
                            ]
                          },
                          {
                            "type": "text",
                            "id": "api-apms.p.0220",
                            "value": ". Never confirm an order on the redirect alone."
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
                    "props": {
                      "className": "sec-note"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "api-apms.p.0221",
                        "value": "APMs can't be tested in sandbox, validate them in live: "
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
                            "id": "api-apms.doclink.0222",
                            "value": "Testing APMs"
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
                          "method": "POST",
                          "url": "/purchases/",
                          "config": {
                            "fields": [
                              {
                                "k": "client.email",
                                "v": "user@example.com",
                                "req": true
                              },
                              {
                                "k": "client.tax_number (CPF)",
                                "v": "390.533.447-05",
                                "req": true
                              },
                              {
                                "k": "purchase.currency",
                                "v": "BRL",
                                "req": true
                              },
                              {
                                "k": "purchase.products[0].name",
                                "v": "Test User",
                                "req": true
                              },
                              {
                                "k": "purchase.products[0].price",
                                "v": "100.00",
                                "req": true
                              },
                              {
                                "k": "brand_id",
                                "v": "{{BrandId}}",
                                "req": true
                              },
                              {
                                "k": "paymentMethod",
                                "v": "PIX",
                                "req": true
                              },
                              {
                                "k": "pending_redirect",
                                "v": "https://merchant.example/pending-redirect",
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
                              }
                            ],
                            "status": "202 Accepted",
                            "latency": "402 ms",
                            "response": {
                              "purchaseId": "9d4a59e6a6a6b8ba6f77db47",
                              "status": "payment_in_process",
                              "paymentMethod": "PIX",
                              "checkout_url": "https://api.paysecure.net/payment/9d4a59e6…/",
                              "pix_payload": {
                                "qr_code": "iVBORw0KGgoAAAANSU…(base64)",
                                "payload": "00020126580014BR.GOV.BCB.PIX…",
                                "expiration_date": "1990-01-01"
                              }
                            },
                            "errorStatus": "400 Bad Request",
                            "errorResponse": {
                              "message": "Brand not found!",
                              "code": "transaction_error"
                            }
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
                        "tag": "p",
                        "props": {
                          "className": "sec-note",
                          "style": {
                            "color": "var(--muted)",
                            "fontSize": "12px",
                            "marginTop": "10px"
                          }
                        },
                        "children": [
                          {
                            "type": "text",
                            "id": "api-apms.p.0223",
                            "value": "Swap "
                          },
                          {
                            "type": "element",
                            "tag": "code",
                            "props": {},
                            "children": [
                              {
                                "type": "text",
                                "id": "api-apms.code.0224",
                                "value": "paymentMethod"
                              }
                            ]
                          },
                          {
                            "type": "text",
                            "id": "api-apms.p.0225",
                            "value": " to "
                          },
                          {
                            "type": "element",
                            "tag": "code",
                            "props": {},
                            "children": [
                              {
                                "type": "text",
                                "id": "api-apms.code.0226",
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
                                "id": "api-apms.code.0227",
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
                                "id": "api-apms.code.0228",
                                "value": "OPEN-BANKING"
                              }
                            ]
                          },
                          {
                            "type": "text",
                            "id": "api-apms.p.0229",
                            "value": ", etc. and adjust the currency to try other rails."
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
                            "id": "api-apms.small.0230",
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
                            "id": "api-apms.b.0231",
                            "value": "← Interac e-Transfer"
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
                      "href": "/api-crypto"
                    },
                    "children": [
                      {
                        "type": "element",
                        "tag": "small",
                        "props": {},
                        "children": [
                          {
                            "type": "text",
                            "id": "api-apms.small.0232",
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
                            "id": "api-apms.b.0233",
                            "value": "Crypto & on-ramp →"
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
