import { defineDocument } from '../schema.js';

export const ApiReferenceTreeDocument = defineDocument({
  "schemaVersion": 1,
  "slug": "api-reference",
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
                    "id": "api-reference.doclink.0001",
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
                    "id": "api-reference.doclink.0002",
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
                "id": "api-reference.div.0003",
                "value": "Purchases"
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
              "id": "overview"
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
                        "id": "api-reference.h1.0004",
                        "value": "Purchases API"
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
                        "id": "api-reference.p.0005",
                        "value": "The purchase is Paysecure's core payment object, one purchase per checkout attempt, from creation through payment and refund. Every payment method runs through it."
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
                        "value": "\n            "
                      },
                      {
                        "type": "element",
                        "tag": "a",
                        "props": {
                          "className": "api-toc-chip",
                          "href": "#purchase-object"
                        },
                        "children": [
                          {
                            "type": "text",
                            "id": "api-reference.a.0006",
                            "value": "Object"
                          }
                        ]
                      },
                      {
                        "type": "text",
                        "value": "\n            "
                      },
                      {
                        "type": "element",
                        "tag": "a",
                        "props": {
                          "className": "api-toc-chip",
                          "href": "#create-purchase"
                        },
                        "children": [
                          {
                            "type": "text",
                            "id": "api-reference.a.0007",
                            "value": "Create"
                          }
                        ]
                      },
                      {
                        "type": "text",
                        "value": "\n            "
                      },
                      {
                        "type": "element",
                        "tag": "a",
                        "props": {
                          "className": "api-toc-chip",
                          "href": "#get-purchase"
                        },
                        "children": [
                          {
                            "type": "text",
                            "id": "api-reference.a.0008",
                            "value": "Get status"
                          }
                        ]
                      },
                      {
                        "type": "text",
                        "value": "\n            "
                      },
                      {
                        "type": "element",
                        "tag": "a",
                        "props": {
                          "className": "api-toc-chip",
                          "href": "#capture"
                        },
                        "children": [
                          {
                            "type": "text",
                            "id": "api-reference.a.0009",
                            "value": "Cancel"
                          }
                        ]
                      },
                      {
                        "type": "text",
                        "value": "\n            "
                      },
                      {
                        "type": "element",
                        "tag": "a",
                        "props": {
                          "className": "api-toc-chip",
                          "href": "#refund"
                        },
                        "children": [
                          {
                            "type": "text",
                            "id": "api-reference.a.0010",
                            "value": "Refund"
                          }
                        ]
                      },
                      {
                        "type": "text",
                        "value": "\n            "
                      },
                      {
                        "type": "element",
                        "tag": "a",
                        "props": {
                          "className": "api-toc-chip",
                          "href": "#errors"
                        },
                        "children": [
                          {
                            "type": "text",
                            "id": "api-reference.a.0011",
                            "value": "Errors"
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
                        "id": "api-reference.h3.0012",
                        "value": "Environments"
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
                        "id": "api-reference.p.0013",
                        "value": "Sandbox and production share the same base URL. The environment is controlled by the "
                      },
                      {
                        "type": "element",
                        "tag": "b",
                        "props": {},
                        "children": [
                          {
                            "type": "text",
                            "id": "api-reference.b.0014",
                            "value": "Is Sandbox"
                          }
                        ]
                      },
                      {
                        "type": "text",
                        "id": "api-reference.p.0015",
                        "value": " flag in your merchant dashboard (top-right, under merchant profile), check it to generate a sandbox API key, uncheck it for a live key. Details in "
                      },
                      {
                        "type": "element",
                        "tag": "DocLink",
                        "props": {
                          "className": "inline",
                          "href": "/sandbox-credentials"
                        },
                        "children": [
                          {
                            "type": "text",
                            "id": "api-reference.doclink.0016",
                            "value": "Sandbox & API keys"
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
                        "id": "api-reference.h3.0017",
                        "value": "Authentication"
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
                        "id": "api-reference.p.0018",
                        "value": "Acquire your API key from "
                      },
                      {
                        "type": "element",
                        "tag": "b",
                        "props": {},
                        "children": [
                          {
                            "type": "text",
                            "id": "api-reference.b.0019",
                            "value": "merchant dashboard → API Keys"
                          }
                        ]
                      },
                      {
                        "type": "text",
                        "id": "api-reference.p.0020",
                        "value": " and send it as a Bearer token on every request."
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
                    "props": {
                      "id": "headers"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "api-reference.headers.0021",
                        "value": "Request headers"
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
                                        "id": "api-reference.th.0022",
                                        "value": "Header"
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
                                        "id": "api-reference.th.0023",
                                        "value": "Value"
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
                                        "id": "api-reference.th.0024",
                                        "value": "Required"
                                      }
                                    ]
                                  }
                                ]
                              },
                              {
                                "type": "element",
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
                                            "id": "api-reference.code.0025",
                                            "value": "Content-Type"
                                          }
                                        ]
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
                                            "id": "api-reference.code.0026",
                                            "value": "application/json"
                                          }
                                        ]
                                      }
                                    ]
                                  },
                                  {
                                    "type": "element",
                                    "tag": "td",
                                    "props": {},
                                    "children": [
                                      {
                                        "type": "text",
                                        "id": "api-reference.td.0027",
                                        "value": "Yes, all endpoints"
                                      }
                                    ]
                                  }
                                ]
                              },
                              {
                                "type": "element",
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
                                            "id": "api-reference.code.0028",
                                            "value": "Authorization"
                                          }
                                        ]
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
                                            "id": "api-reference.code.0029",
                                            "value": "Bearer {MERCHANT_API_KEY}"
                                          }
                                        ]
                                      }
                                    ]
                                  },
                                  {
                                    "type": "element",
                                    "tag": "td",
                                    "props": {},
                                    "children": [
                                      {
                                        "type": "text",
                                        "id": "api-reference.td.0030",
                                        "value": "Yes, all endpoints"
                                      }
                                    ]
                                  }
                                ]
                              },
                              {
                                "type": "element",
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
                                            "id": "api-reference.code.0031",
                                            "value": "BrandId"
                                          }
                                        ]
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
                                            "id": "api-reference.code.0032",
                                            "value": "{YOUR_BRAND_ID}"
                                          }
                                        ]
                                      }
                                    ]
                                  },
                                  {
                                    "type": "element",
                                    "tag": "td",
                                    "props": {},
                                    "children": [
                                      {
                                        "type": "text",
                                        "id": "api-reference.td.0033",
                                        "value": "Session APIs: mandatory · Customer APIs: optional"
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
                                    "id": "api-reference.span.0034",
                                    "value": "Base URL, production & sandbox"
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
                                    "id": "api-reference.button.0035",
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
                                  "className": "tok-s"
                                },
                                "children": [
                                  {
                                    "type": "text",
                                    "id": "api-reference.span.0036",
                                    "value": "https://api.paysecure.net/api/v1"
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
                                    "id": "api-reference.span.0037",
                                    "value": "Authenticated request"
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
                                    "id": "api-reference.button.0038",
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
                                "type": "text",
                                "id": "api-reference.pre.0039",
                                "value": "curl "
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
                                    "id": "api-reference.span.0040",
                                    "value": "https://api.paysecure.net/api/v1/purchases/"
                                  }
                                ]
                              },
                              {
                                "type": "text",
                                "value": " \\\n  "
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
                                    "id": "api-reference.span.0041",
                                    "value": "-H"
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
                                    "id": "api-reference.span.0042",
                                    "value": "\"Authorization: Bearer {{APIKey}}\""
                                  }
                                ]
                              },
                              {
                                "type": "text",
                                "value": " \\\n  "
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
                                    "id": "api-reference.span.0043",
                                    "value": "-H"
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
                                    "id": "api-reference.span.0044",
                                    "value": "\"Content-Type: application/json\""
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
              "id": "purchase-object"
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
                        "id": "api-reference.h2.0045",
                        "value": "The purchase object"
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
                                        "id": "api-reference.th.0046",
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
                                        "id": "api-reference.th.0047",
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
                                        "id": "api-reference.th.0048",
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
                                            "id": "api-reference.code.0049",
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
                                        "id": "api-reference.td.0050",
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
                                        "id": "api-reference.td.0051",
                                        "value": "Unique identifier returned on creation. Use it for status polling, S2S execution, cancel and refund."
                                      }
                                    ]
                                  }
                                ]
                              },
                              {
                                "type": "element",
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
                                            "id": "api-reference.code.0052",
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
                                        "id": "api-reference.td.0053",
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
                                        "type": "element",
                                        "tag": "code",
                                        "props": {},
                                        "children": [
                                          {
                                            "type": "text",
                                            "id": "api-reference.code.0054",
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
                                            "id": "api-reference.code.0055",
                                            "value": "pending_execute"
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
                                            "id": "api-reference.code.0056",
                                            "value": "overdue"
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
                                            "id": "api-reference.code.0057",
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
                                            "id": "api-reference.code.0058",
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
                                            "id": "api-reference.code.0059",
                                            "value": "error"
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
                                            "id": "api-reference.code.0060",
                                            "value": "cancelled"
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
                                            "id": "api-reference.code.0061",
                                            "value": "expired"
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
                                            "id": "api-reference.code.0062",
                                            "value": "refund_in_process"
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
                                            "id": "api-reference.code.0063",
                                            "value": "refunded"
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
                                            "id": "api-reference.code.0064",
                                            "value": "fraud_refunded"
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
                                            "id": "api-reference.code.0065",
                                            "value": "chargeback"
                                          }
                                        ]
                                      },
                                      {
                                        "type": "text",
                                        "id": "api-reference.td.0066",
                                        "value": ". Full meanings and finality in "
                                      },
                                      {
                                        "type": "element",
                                        "tag": "DocLink",
                                        "props": {
                                          "className": "inline",
                                          "href": "/errors#statuses"
                                        },
                                        "children": [
                                          {
                                            "type": "text",
                                            "id": "api-reference.doclink.0067",
                                            "value": "Transaction statuses"
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
                                            "id": "api-reference.code.0068",
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
                                        "id": "api-reference.td.0069",
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
                                        "id": "api-reference.td.0070",
                                        "value": "The paying customer."
                                      }
                                    ]
                                  }
                                ]
                              },
                              {
                                "type": "element",
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
                                            "id": "api-reference.code.0071",
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
                                        "id": "api-reference.td.0072",
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
                                        "id": "api-reference.td.0073",
                                        "value": "Customer email."
                                      }
                                    ]
                                  }
                                ]
                              },
                              {
                                "type": "element",
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
                                            "id": "api-reference.code.0074",
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
                                        "id": "api-reference.td.0075",
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
                                        "id": "api-reference.td.0076",
                                        "value": "Cardholder or account holder name."
                                      }
                                    ]
                                  }
                                ]
                              },
                              {
                                "type": "element",
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
                                            "id": "api-reference.code.0077",
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
                                        "id": "api-reference.td.0078",
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
                                        "id": "api-reference.td.0079",
                                        "value": "Billing street address."
                                      }
                                    ]
                                  }
                                ]
                              },
                              {
                                "type": "element",
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
                                            "id": "api-reference.code.0080",
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
                                        "id": "api-reference.td.0081",
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
                                        "id": "api-reference.td.0082",
                                        "value": "Billing city."
                                      }
                                    ]
                                  }
                                ]
                              },
                              {
                                "type": "element",
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
                                            "id": "api-reference.code.0083",
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
                                        "id": "api-reference.td.0084",
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
                                        "id": "api-reference.td.0085",
                                        "value": "Billing postal code."
                                      }
                                    ]
                                  }
                                ]
                              },
                              {
                                "type": "element",
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
                                            "id": "api-reference.code.0086",
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
                                        "id": "api-reference.td.0087",
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
                                        "id": "api-reference.td.0088",
                                        "value": "ISO-3166 Alpha-2, upper case, e.g. "
                                      },
                                      {
                                        "type": "element",
                                        "tag": "code",
                                        "props": {},
                                        "children": [
                                          {
                                            "type": "text",
                                            "id": "api-reference.code.0089",
                                            "value": "SG"
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
                                            "id": "api-reference.code.0090",
                                            "value": "IN"
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
                                            "id": "api-reference.code.0091",
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
                                        "id": "api-reference.td.0092",
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
                                        "id": "api-reference.td.0093",
                                        "value": "Upper case, e.g. "
                                      },
                                      {
                                        "type": "element",
                                        "tag": "code",
                                        "props": {},
                                        "children": [
                                          {
                                            "type": "text",
                                            "id": "api-reference.code.0094",
                                            "value": "AL"
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
                                            "id": "api-reference.code.0095",
                                            "value": "XZ"
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
                                            "id": "api-reference.code.0096",
                                            "value": "client.customerId"
                                          }
                                        ]
                                      }
                                    ]
                                  },
                                  {
                                    "type": "element",
                                    "tag": "td",
                                    "props": {},
                                    "children": [
                                      {
                                        "type": "text",
                                        "id": "api-reference.td.0097",
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
                                        "id": "api-reference.td.0098",
                                        "value": "Populated when the client is a saved "
                                      },
                                      {
                                        "type": "element",
                                        "tag": "DocLink",
                                        "props": {
                                          "className": "inline",
                                          "href": "/api-recurring"
                                        },
                                        "children": [
                                          {
                                            "type": "text",
                                            "id": "api-reference.doclink.0099",
                                            "value": "recurring customer"
                                          }
                                        ]
                                      },
                                      {
                                        "type": "text",
                                        "id": "api-reference.td.0100",
                                        "value": "; otherwise "
                                      },
                                      {
                                        "type": "element",
                                        "tag": "code",
                                        "props": {},
                                        "children": [
                                          {
                                            "type": "text",
                                            "id": "api-reference.code.0101",
                                            "value": "NA"
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
                                            "id": "api-reference.code.0102",
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
                                        "id": "api-reference.td.0103",
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
                                        "id": "api-reference.td.0104",
                                        "value": "What is being paid for."
                                      }
                                    ]
                                  }
                                ]
                              },
                              {
                                "type": "element",
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
                                            "id": "api-reference.code.0105",
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
                                        "id": "api-reference.td.0106",
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
                                        "id": "api-reference.td.0107",
                                        "value": "ISO 4217. The currency must be enabled for your account by your account manager."
                                      }
                                    ]
                                  }
                                ]
                              },
                              {
                                "type": "element",
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
                                            "id": "api-reference.code.0108",
                                            "value": "purchase.products[]"
                                          }
                                        ]
                                      }
                                    ]
                                  },
                                  {
                                    "type": "element",
                                    "tag": "td",
                                    "props": {},
                                    "children": [
                                      {
                                        "type": "text",
                                        "id": "api-reference.td.0109",
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
                                        "id": "api-reference.td.0110",
                                        "value": "Line items, each with "
                                      },
                                      {
                                        "type": "element",
                                        "tag": "code",
                                        "props": {},
                                        "children": [
                                          {
                                            "type": "text",
                                            "id": "api-reference.code.0111",
                                            "value": "name"
                                          }
                                        ]
                                      },
                                      {
                                        "type": "text",
                                        "id": "api-reference.td.0112",
                                        "value": " and "
                                      },
                                      {
                                        "type": "element",
                                        "tag": "code",
                                        "props": {},
                                        "children": [
                                          {
                                            "type": "text",
                                            "id": "api-reference.code.0113",
                                            "value": "price"
                                          }
                                        ]
                                      },
                                      {
                                        "type": "text",
                                        "id": "api-reference.td.0114",
                                        "value": " in decimal format."
                                      }
                                    ]
                                  }
                                ]
                              },
                              {
                                "type": "element",
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
                                            "id": "api-reference.code.0115",
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
                                        "id": "api-reference.td.0116",
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
                                        "id": "api-reference.td.0117",
                                        "value": "Your reference. Prevents duplicate requests and lets you retrieve the purchase if the response times out. Defaults to the internal "
                                      },
                                      {
                                        "type": "element",
                                        "tag": "code",
                                        "props": {},
                                        "children": [
                                          {
                                            "type": "text",
                                            "id": "api-reference.code.0118",
                                            "value": "purchaseId"
                                          }
                                        ]
                                      },
                                      {
                                        "type": "text",
                                        "id": "api-reference.td.0119",
                                        "value": " if not sent."
                                      }
                                    ]
                                  }
                                ]
                              },
                              {
                                "type": "element",
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
                                            "id": "api-reference.code.0120",
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
                                        "id": "api-reference.td.0121",
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
                                        "id": "api-reference.td.0122",
                                        "value": "Pins the purchase to one payment solution (e.g. "
                                      },
                                      {
                                        "type": "element",
                                        "tag": "code",
                                        "props": {},
                                        "children": [
                                          {
                                            "type": "text",
                                            "id": "api-reference.code.0123",
                                            "value": "INTERAC-ETRANSFER"
                                          }
                                        ]
                                      },
                                      {
                                        "type": "text",
                                        "id": "api-reference.td.0124",
                                        "value": "). Paysecure then performs direct payment with that method instead of loading the hosted cashier. See "
                                      },
                                      {
                                        "type": "element",
                                        "tag": "DocLink",
                                        "props": {
                                          "className": "inline",
                                          "href": "/payment-methods#all-methods"
                                        },
                                        "children": [
                                          {
                                            "type": "text",
                                            "id": "api-reference.doclink.0125",
                                            "value": "method codes"
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
                                            "id": "api-reference.code.0126",
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
                                        "id": "api-reference.td.0127",
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
                                        "id": "api-reference.td.0128",
                                        "value": "Per-attempt processor detail; on failure, read "
                                      },
                                      {
                                        "type": "element",
                                        "tag": "code",
                                        "props": {},
                                        "children": [
                                          {
                                            "type": "text",
                                            "id": "api-reference.code.0129",
                                            "value": "transaction_data.attempts.error"
                                          }
                                        ]
                                      },
                                      {
                                        "type": "text",
                                        "id": "api-reference.td.0130",
                                        "value": " for the underlying reason."
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
                                    "id": "api-reference.span.0131",
                                    "value": "The purchase object"
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
                                    "id": "api-reference.button.0132",
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
                                    "id": "api-reference.span.0133",
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
                                    "id": "api-reference.span.0134",
                                    "value": "\"6a1d26a3d373e5fd3c44ae14\""
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
                                    "id": "api-reference.span.0135",
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
                                    "id": "api-reference.span.0136",
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
                                    "id": "api-reference.span.0137",
                                    "value": "\"client\""
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
                                    "id": "api-reference.span.0138",
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
                                    "id": "api-reference.span.0139",
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
                                    "id": "api-reference.span.0140",
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
                                    "id": "api-reference.span.0141",
                                    "value": "\"user@example.com\""
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
                                    "id": "api-reference.span.0142",
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
                                    "id": "api-reference.span.0143",
                                    "value": "\"6393000899\""
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
                                    "id": "api-reference.span.0144",
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
                                    "id": "api-reference.span.0145",
                                    "value": "\"Test User\""
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
                                    "id": "api-reference.span.0146",
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
                                    "id": "api-reference.span.0147",
                                    "value": "\"Praça João da Silva, 909\""
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
                                    "id": "api-reference.span.0148",
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
                                    "id": "api-reference.span.0149",
                                    "value": "\"Jaipur\""
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
                                    "id": "api-reference.span.0150",
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
                                    "id": "api-reference.span.0151",
                                    "value": "\"01000-000\""
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
                                    "id": "api-reference.span.0152",
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
                                    "id": "api-reference.span.0153",
                                    "value": "\"IN\""
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
                                    "id": "api-reference.span.0154",
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
                                    "id": "api-reference.span.0155",
                                    "value": "\"SP\""
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
                                    "id": "api-reference.span.0156",
                                    "value": "\"purchase\""
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
                                    "id": "api-reference.span.0157",
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
                                    "id": "api-reference.span.0158",
                                    "value": "\"EUR\""
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
                                    "id": "api-reference.span.0159",
                                    "value": "\"products\""
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
                                    "id": "api-reference.span.0160",
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
                                    "id": "api-reference.span.0161",
                                    "value": "\"Deposit\""
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
                                    "id": "api-reference.span.0162",
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
                                    "id": "api-reference.span.0163",
                                    "value": "20.00"
                                  }
                                ]
                              },
                              {
                                "type": "text",
                                "value": " }\n    ]\n  },\n  "
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
                                    "id": "api-reference.span.0164",
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
                                    "id": "api-reference.span.0165",
                                    "value": "\"ORDER-10045\""
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
                                    "id": "api-reference.span.0166",
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
                                    "id": "api-reference.span.0167",
                                    "value": "\"https://api.paysecure.net/payment/6a1d…/\""
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
              "id": "create-purchase"
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
                        "id": "api-reference.h2.0168",
                        "value": "Create a purchase"
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
                            "id": "api-reference.span.0169",
                            "value": "POST"
                          }
                        ]
                      },
                      {
                        "type": "text",
                        "id": "api-reference.div.0170",
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
                        "id": "api-reference.p.0171",
                        "value": "The very first call for any payment. Provide the "
                      },
                      {
                        "type": "element",
                        "tag": "code",
                        "props": {},
                        "children": [
                          {
                            "type": "text",
                            "id": "api-reference.code.0172",
                            "value": "Brand ID"
                          }
                        ]
                      },
                      {
                        "type": "text",
                        "id": "api-reference.p.0173",
                        "value": " in the request body and your API key in the header, both live in the Dashboard section of your merchant account. Returns a "
                      },
                      {
                        "type": "element",
                        "tag": "code",
                        "props": {},
                        "children": [
                          {
                            "type": "text",
                            "id": "api-reference.code.0174",
                            "value": "purchaseId"
                          }
                        ]
                      },
                      {
                        "type": "text",
                        "id": "api-reference.p.0175",
                        "value": " and checkout URL."
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
                        "id": "api-reference.h3.0176",
                        "value": "Mandatory body parameters"
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
                                        "id": "api-reference.th.0177",
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
                                        "id": "api-reference.th.0178",
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
                                        "id": "api-reference.th.0179",
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
                                        "id": "api-reference.th.0180",
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
                                            "id": "api-reference.code.0181",
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
                                        "id": "api-reference.td.0182",
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
                                        "id": "api-reference.td.0183",
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
                                        "id": "api-reference.td.0184",
                                        "value": "The customer's email."
                                      }
                                    ]
                                  }
                                ]
                              },
                              {
                                "type": "element",
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
                                            "id": "api-reference.code.0185",
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
                                        "id": "api-reference.td.0186",
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
                                        "id": "api-reference.td.0187",
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
                                        "id": "api-reference.td.0188",
                                        "value": "The customer's city."
                                      }
                                    ]
                                  }
                                ]
                              },
                              {
                                "type": "element",
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
                                            "id": "api-reference.code.0189",
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
                                        "id": "api-reference.td.0190",
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
                                        "id": "api-reference.td.0191",
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
                                        "id": "api-reference.td.0192",
                                        "value": "ISO-3166 country code, upper case, e.g. "
                                      },
                                      {
                                        "type": "element",
                                        "tag": "code",
                                        "props": {},
                                        "children": [
                                          {
                                            "type": "text",
                                            "id": "api-reference.code.0193",
                                            "value": "SG"
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
                                            "id": "api-reference.code.0194",
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
                                        "id": "api-reference.td.0195",
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
                                        "id": "api-reference.td.0196",
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
                                        "id": "api-reference.td.0197",
                                        "value": "Upper case, e.g. "
                                      },
                                      {
                                        "type": "element",
                                        "tag": "code",
                                        "props": {},
                                        "children": [
                                          {
                                            "type": "text",
                                            "id": "api-reference.code.0198",
                                            "value": "AL"
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
                                            "id": "api-reference.code.0199",
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
                                        "id": "api-reference.td.0200",
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
                                        "id": "api-reference.td.0201",
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
                                        "id": "api-reference.td.0202",
                                        "value": "The customer's address."
                                      }
                                    ]
                                  }
                                ]
                              },
                              {
                                "type": "element",
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
                                            "id": "api-reference.code.0203",
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
                                        "id": "api-reference.td.0204",
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
                                        "id": "api-reference.td.0205",
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
                                        "id": "api-reference.td.0206",
                                        "value": "ZIP or postal code. If "
                                      },
                                      {
                                        "type": "element",
                                        "tag": "code",
                                        "props": {},
                                        "children": [
                                          {
                                            "type": "text",
                                            "id": "api-reference.code.0207",
                                            "value": "country=US"
                                          }
                                        ]
                                      },
                                      {
                                        "type": "text",
                                        "id": "api-reference.td.0208",
                                        "value": ", format must be "
                                      },
                                      {
                                        "type": "element",
                                        "tag": "code",
                                        "props": {},
                                        "children": [
                                          {
                                            "type": "text",
                                            "id": "api-reference.code.0209",
                                            "value": "NNNNN"
                                          }
                                        ]
                                      },
                                      {
                                        "type": "text",
                                        "id": "api-reference.td.0210",
                                        "value": " or "
                                      },
                                      {
                                        "type": "element",
                                        "tag": "code",
                                        "props": {},
                                        "children": [
                                          {
                                            "type": "text",
                                            "id": "api-reference.code.0211",
                                            "value": "NNNNN-NNNN"
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
                                            "id": "api-reference.code.0212",
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
                                        "id": "api-reference.td.0213",
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
                                        "id": "api-reference.td.0214",
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
                                        "id": "api-reference.td.0215",
                                        "value": "ISO 4217 code. Must be enabled for your account."
                                      }
                                    ]
                                  }
                                ]
                              },
                              {
                                "type": "element",
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
                                            "id": "api-reference.code.0216",
                                            "value": "purchase.products[]"
                                          }
                                        ]
                                      }
                                    ]
                                  },
                                  {
                                    "type": "element",
                                    "tag": "td",
                                    "props": {},
                                    "children": [
                                      {
                                        "type": "text",
                                        "id": "api-reference.td.0217",
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
                                        "id": "api-reference.td.0218",
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
                                        "id": "api-reference.td.0219",
                                        "value": "Each item needs "
                                      },
                                      {
                                        "type": "element",
                                        "tag": "code",
                                        "props": {},
                                        "children": [
                                          {
                                            "type": "text",
                                            "id": "api-reference.code.0220",
                                            "value": "name"
                                          }
                                        ]
                                      },
                                      {
                                        "type": "text",
                                        "id": "api-reference.td.0221",
                                        "value": " and "
                                      },
                                      {
                                        "type": "element",
                                        "tag": "code",
                                        "props": {},
                                        "children": [
                                          {
                                            "type": "text",
                                            "id": "api-reference.code.0222",
                                            "value": "price"
                                          }
                                        ]
                                      },
                                      {
                                        "type": "text",
                                        "id": "api-reference.td.0223",
                                        "value": " (decimal format)."
                                      }
                                    ]
                                  }
                                ]
                              },
                              {
                                "type": "element",
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
                                            "id": "api-reference.code.0224",
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
                                        "id": "api-reference.td.0225",
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
                                        "id": "api-reference.td.0226",
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
                                        "id": "api-reference.td.0227",
                                        "value": "From the Dashboard section of your merchant account."
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
                        "id": "api-reference.h3.0228",
                        "value": "Essential optional parameters"
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
                                        "id": "api-reference.th.0229",
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
                                        "id": "api-reference.th.0230",
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
                                        "id": "api-reference.th.0231",
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
                                        "id": "api-reference.th.0232",
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
                                            "id": "api-reference.code.0233",
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
                                        "id": "api-reference.td.0234",
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
                                        "id": "api-reference.td.0235",
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
                                        "id": "api-reference.td.0236",
                                        "value": "Unique reference for de-duplication and retrieval on timeout."
                                      }
                                    ]
                                  }
                                ]
                              },
                              {
                                "type": "element",
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
                                            "id": "api-reference.code.0237",
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
                                        "id": "api-reference.td.0238",
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
                                        "id": "api-reference.td.0239",
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
                                        "id": "api-reference.td.0240",
                                        "value": "Direct payment with the selected method instead of loading the hosted cashier."
                                      }
                                    ]
                                  }
                                ]
                              },
                              {
                                "type": "element",
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
                                            "id": "api-reference.code.0241",
                                            "value": "purchase.expireInMin"
                                          }
                                        ]
                                      }
                                    ]
                                  },
                                  {
                                    "type": "element",
                                    "tag": "td",
                                    "props": {},
                                    "children": [
                                      {
                                        "type": "text",
                                        "id": "api-reference.td.0242",
                                        "value": "integer"
                                      }
                                    ]
                                  },
                                  {
                                    "type": "element",
                                    "tag": "td",
                                    "props": {},
                                    "children": [
                                      {
                                        "type": "text",
                                        "id": "api-reference.td.0243",
                                        "value": "Dashboard default"
                                      }
                                    ]
                                  },
                                  {
                                    "type": "element",
                                    "tag": "td",
                                    "props": {},
                                    "children": [
                                      {
                                        "type": "text",
                                        "id": "api-reference.td.0244",
                                        "value": "Expiry window in minutes for APMs that support it (e.g. Interac). Overrides the dashboard Settings default; unpaid purchases become "
                                      },
                                      {
                                        "type": "element",
                                        "tag": "code",
                                        "props": {},
                                        "children": [
                                          {
                                            "type": "text",
                                            "id": "api-reference.code.0245",
                                            "value": "expired"
                                          }
                                        ]
                                      },
                                      {
                                        "type": "text",
                                        "id": "api-reference.td.0246",
                                        "value": ". See "
                                      },
                                      {
                                        "type": "element",
                                        "tag": "DocLink",
                                        "props": {
                                          "className": "inline",
                                          "href": "/dashboard#expiry"
                                        },
                                        "children": [
                                          {
                                            "type": "text",
                                            "id": "api-reference.doclink.0247",
                                            "value": "transaction expiry"
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
                                            "id": "api-reference.code.0248",
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
                                        "id": "api-reference.td.0249",
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
                                        "id": "api-reference.td.0250",
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
                                        "id": "api-reference.td.0251",
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
                                            "id": "api-reference.code.0252",
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
                                        "id": "api-reference.td.0253",
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
                                        "id": "api-reference.td.0254",
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
                                        "id": "api-reference.td.0255",
                                        "value": "Where the customer returns after a failed payment."
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
                        "id": "api-reference.h3.0256",
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
                                        "id": "api-reference.th.0257",
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
                                        "id": "api-reference.th.0258",
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
                                        "id": "api-reference.th.0259",
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
                                            "id": "api-reference.code.0260",
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
                                        "id": "api-reference.td.0261",
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
                                        "id": "api-reference.td.0262",
                                        "value": "Unique purchase identifier generated by Paysecure. Use it for status, cancel and refund."
                                      }
                                    ]
                                  }
                                ]
                              },
                              {
                                "type": "element",
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
                                            "id": "api-reference.code.0263",
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
                                        "id": "api-reference.td.0264",
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
                                        "id": "api-reference.td.0265",
                                        "value": "Lifecycle state; "
                                      },
                                      {
                                        "type": "element",
                                        "tag": "code",
                                        "props": {},
                                        "children": [
                                          {
                                            "type": "text",
                                            "id": "api-reference.code.0266",
                                            "value": "created"
                                          }
                                        ]
                                      },
                                      {
                                        "type": "text",
                                        "id": "api-reference.td.0267",
                                        "value": " on the first response. See "
                                      },
                                      {
                                        "type": "element",
                                        "tag": "a",
                                        "props": {
                                          "className": "inline",
                                          "href": "#purchase-object"
                                        },
                                        "children": [
                                          {
                                            "type": "text",
                                            "id": "api-reference.a.0268",
                                            "value": "the purchase object"
                                          }
                                        ]
                                      },
                                      {
                                        "type": "text",
                                        "id": "api-reference.td.0269",
                                        "value": " for the full set."
                                      }
                                    ]
                                  }
                                ]
                              },
                              {
                                "type": "element",
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
                                            "id": "api-reference.code.0270",
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
                                        "id": "api-reference.td.0271",
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
                                        "id": "api-reference.td.0272",
                                        "value": "Hosted cashier URL to send the customer to when no "
                                      },
                                      {
                                        "type": "element",
                                        "tag": "code",
                                        "props": {},
                                        "children": [
                                          {
                                            "type": "text",
                                            "id": "api-reference.code.0273",
                                            "value": "paymentMethod"
                                          }
                                        ]
                                      },
                                      {
                                        "type": "text",
                                        "id": "api-reference.td.0274",
                                        "value": " pins the purchase."
                                      }
                                    ]
                                  }
                                ]
                              },
                              {
                                "type": "element",
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
                                            "id": "api-reference.code.0275",
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
                                        "id": "api-reference.td.0276",
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
                                        "id": "api-reference.td.0277",
                                        "value": "Echo of the customer. "
                                      },
                                      {
                                        "type": "element",
                                        "tag": "code",
                                        "props": {},
                                        "children": [
                                          {
                                            "type": "text",
                                            "id": "api-reference.code.0278",
                                            "value": "customerId"
                                          }
                                        ]
                                      },
                                      {
                                        "type": "text",
                                        "id": "api-reference.td.0279",
                                        "value": " is "
                                      },
                                      {
                                        "type": "element",
                                        "tag": "code",
                                        "props": {},
                                        "children": [
                                          {
                                            "type": "text",
                                            "id": "api-reference.code.0280",
                                            "value": "NA"
                                          }
                                        ]
                                      },
                                      {
                                        "type": "text",
                                        "id": "api-reference.td.0281",
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
                                            "id": "api-reference.code.0282",
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
                                        "id": "api-reference.td.0283",
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
                                        "id": "api-reference.td.0284",
                                        "value": "Your reference echoed back, or the internal "
                                      },
                                      {
                                        "type": "element",
                                        "tag": "code",
                                        "props": {},
                                        "children": [
                                          {
                                            "type": "text",
                                            "id": "api-reference.code.0285",
                                            "value": "purchaseId"
                                          }
                                        ]
                                      },
                                      {
                                        "type": "text",
                                        "id": "api-reference.td.0286",
                                        "value": " if you did not send one."
                                      }
                                    ]
                                  }
                                ]
                              },
                              {
                                "type": "element",
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
                                            "id": "api-reference.code.0287",
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
                                        "id": "api-reference.td.0288",
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
                                        "id": "api-reference.td.0289",
                                        "value": "Method or methods enabled for the purchase."
                                      }
                                    ]
                                  }
                                ]
                              },
                              {
                                "type": "element",
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
                                            "id": "api-reference.code.0290",
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
                                        "id": "api-reference.td.0291",
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
                                            "id": "api-reference.code.0292",
                                            "value": "MAJOR"
                                          }
                                        ]
                                      },
                                      {
                                        "type": "text",
                                        "id": "api-reference.td.0293",
                                        "value": " for full currency units, "
                                      },
                                      {
                                        "type": "element",
                                        "tag": "code",
                                        "props": {},
                                        "children": [
                                          {
                                            "type": "text",
                                            "id": "api-reference.code.0294",
                                            "value": "MINOR"
                                          }
                                        ]
                                      },
                                      {
                                        "type": "text",
                                        "id": "api-reference.td.0295",
                                        "value": " for subunits."
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
                                "req": true
                              },
                              {
                                "k": "client.full_name",
                                "v": "Test User",
                                "req": true
                              },
                              {
                                "k": "client.street_address",
                                "v": "1 Test Street",
                                "req": true
                              },
                              {
                                "k": "client.city",
                                "v": "Jaipur",
                                "req": true
                              },
                              {
                                "k": "client.zip_code",
                                "v": "10001",
                                "req": true
                              },
                              {
                                "k": "client.country",
                                "v": "IN",
                                "req": true
                              },
                              {
                                "k": "client.stateCode",
                                "v": "SP",
                                "req": true
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
                                "v": "20.00",
                                "req": true
                              },
                              {
                                "k": "brand_id",
                                "v": "{{BrandId}}",
                                "req": true
                              },
                              {
                                "k": "merchantRef",
                                "v": "order-12345",
                                "req": false
                              },
                              {
                                "k": "success_redirect",
                                "v": "https://merchant.example/success-redirect",
                                "req": false
                              },
                              {
                                "k": "failure_redirect",
                                "v": "https://merchant.example/failure-redirect",
                                "req": false
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
                            "latency": "312 ms",
                            "response": {
                              "purchaseId": "6a1d26a3d373e5fd3c44ae14",
                              "status": "created",
                              "checkout_url": "https://api.paysecure.net/payment/6a1d26a3d373e5fd3c44ae14/",
                              "client": {
                                "customerId": "NA",
                                "email": "user@example.com",
                                "country": "IN"
                              },
                              "merchantRef": "order-12345"
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
              "id": "get-purchase"
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
                        "id": "api-reference.h2.0296",
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
                            "id": "api-reference.span.0297",
                            "value": "GET"
                          }
                        ]
                      },
                      {
                        "type": "text",
                        "id": "api-reference.div.0298",
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
                        "id": "api-reference.p.0299",
                        "value": "Returns the current state of a purchase. Use it to reconcile after redirects or timeouts, but treat "
                      },
                      {
                        "type": "element",
                        "tag": "DocLink",
                        "props": {
                          "className": "inline",
                          "href": "/dashboard-configuration#webhooks"
                        },
                        "children": [
                          {
                            "type": "text",
                            "id": "api-reference.doclink.0300",
                            "value": "webhooks"
                          }
                        ]
                      },
                      {
                        "type": "text",
                        "id": "api-reference.p.0301",
                        "value": " as the primary signal."
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
                        "id": "api-reference.h3.0302",
                        "value": "Possible values of status"
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
                        "id": "api-reference.p.0303",
                        "value": "Abbreviated, the full lifecycle table lives in "
                      },
                      {
                        "type": "element",
                        "tag": "DocLink",
                        "props": {
                          "className": "inline",
                          "href": "/errors#statuses"
                        },
                        "children": [
                          {
                            "type": "text",
                            "id": "api-reference.doclink.0304",
                            "value": "Transaction statuses"
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
                                        "id": "api-reference.th.0305",
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
                                        "id": "api-reference.th.0306",
                                        "value": "Notes"
                                      }
                                    ]
                                  }
                                ]
                              },
                              {
                                "type": "element",
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
                                            "id": "api-reference.span.0307",
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
                                        "id": "api-reference.td.0308",
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
                                            "id": "api-reference.span.0309",
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
                                        "id": "api-reference.td.0310",
                                        "value": "Payment is under processing"
                                      }
                                    ]
                                  }
                                ]
                              },
                              {
                                "type": "element",
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
                                            "id": "api-reference.span.0311",
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
                                        "id": "api-reference.td.0312",
                                        "value": "Purchase has expired"
                                      }
                                    ]
                                  }
                                ]
                              },
                              {
                                "type": "element",
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
                                            "id": "api-reference.span.0313",
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
                                        "id": "api-reference.td.0314",
                                        "value": "Transaction has failed, see "
                                      },
                                      {
                                        "type": "element",
                                        "tag": "code",
                                        "props": {},
                                        "children": [
                                          {
                                            "type": "text",
                                            "id": "api-reference.code.0315",
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
                                    "id": "api-reference.span.0316",
                                    "value": "Request"
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
                                    "id": "api-reference.button.0317",
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
                                "type": "text",
                                "id": "api-reference.pre.0318",
                                "value": "curl --location -g "
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
                                    "id": "api-reference.span.0319",
                                    "value": "'https://api.paysecure.net/api/v1/purchases/{purchaseId}/'"
                                  }
                                ]
                              },
                              {
                                "type": "text",
                                "id": "api-reference.pre.0320",
                                "value": " \\\n  --header "
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
                                    "id": "api-reference.span.0321",
                                    "value": "'Authorization: Bearer {{APIKey}}'"
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
              "id": "capture"
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
                        "id": "api-reference.h2.0322",
                        "value": "Cancel a purchase"
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
                            "id": "api-reference.span.0323",
                            "value": "GET"
                          }
                        ]
                      },
                      {
                        "type": "text",
                        "id": "api-reference.div.0324",
                        "value": "/purchases/{purchaseId}/cancel/"
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
                        "id": "api-reference.p.0325",
                        "value": "Cancels a purchase that hasn't completed payment. For pre-authorised transactions ("
                      },
                      {
                        "type": "element",
                        "tag": "DocLink",
                        "props": {
                          "className": "inline",
                          "href": "/api-preauth"
                        },
                        "children": [
                          {
                            "type": "text",
                            "id": "api-reference.doclink.0326",
                            "value": "Pre-Authorization API"
                          }
                        ]
                      },
                      {
                        "type": "text",
                        "id": "api-reference.p.0327",
                        "value": "), cancel releases the card hold, free, and no chargeback exposure."
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
                                    "id": "api-reference.span.0328",
                                    "value": "Request"
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
                                    "id": "api-reference.button.0329",
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
                                "type": "text",
                                "id": "api-reference.pre.0330",
                                "value": "curl --location -g "
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
                                    "id": "api-reference.span.0331",
                                    "value": "'https://api.paysecure.net/api/v1/purchases/{purchaseId}/cancel/'"
                                  }
                                ]
                              },
                              {
                                "type": "text",
                                "id": "api-reference.pre.0332",
                                "value": " \\\n  --header "
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
                                    "id": "api-reference.span.0333",
                                    "value": "'Authorization: Bearer {{APIKey}}'"
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
              "id": "refund"
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
                        "id": "api-reference.h2.0334",
                        "value": "Refund a purchase"
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
                            "id": "api-reference.span.0335",
                            "value": "GET"
                          }
                        ]
                      },
                      {
                        "type": "text",
                        "id": "api-reference.div.0336",
                        "value": "/purchases/{purchaseId}/refund/"
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
                        "id": "api-reference.p.0337",
                        "value": "Refunds a "
                      },
                      {
                        "type": "element",
                        "tag": "code",
                        "props": {},
                        "children": [
                          {
                            "type": "text",
                            "id": "api-reference.code.0338",
                            "value": "paid"
                          }
                        ]
                      },
                      {
                        "type": "text",
                        "id": "api-reference.p.0339",
                        "value": " purchase. Partial refunds are supported via the Partial Refunds API. Refunds are asynchronous, completion is confirmed by webhook and in the dashboard."
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
                        "id": "api-reference.p.0340",
                        "value": "APM refund support varies by method, check the "
                      },
                      {
                        "type": "element",
                        "tag": "DocLink",
                        "props": {
                          "className": "inline",
                          "href": "/payment-methods#matrix"
                        },
                        "children": [
                          {
                            "type": "text",
                            "id": "api-reference.doclink.0341",
                            "value": "capability matrix"
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
                                    "id": "api-reference.span.0342",
                                    "value": "Request"
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
                                    "id": "api-reference.button.0343",
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
                                "type": "text",
                                "id": "api-reference.pre.0344",
                                "value": "curl --location -g "
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
                                    "id": "api-reference.span.0345",
                                    "value": "'https://api.paysecure.net/api/v1/purchases/{purchaseId}/refund/'"
                                  }
                                ]
                              },
                              {
                                "type": "text",
                                "id": "api-reference.pre.0346",
                                "value": " \\\n  --header "
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
                                    "id": "api-reference.span.0347",
                                    "value": "'Authorization: Bearer {{APIKey}}'"
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
              "id": "amounts"
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
                        "id": "api-reference.h2.0348",
                        "value": "Amounts & currencies"
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
                      "className": "attr"
                    },
                    "children": [
                      {
                        "type": "element",
                        "tag": "div",
                        "props": {
                          "className": "attr-head"
                        },
                        "children": [
                          {
                            "type": "element",
                            "tag": "span",
                            "props": {
                              "className": "an"
                            },
                            "children": [
                              {
                                "type": "text",
                                "id": "api-reference.span.0349",
                                "value": "products[].price"
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "span",
                            "props": {
                              "className": "at"
                            },
                            "children": [
                              {
                                "type": "text",
                                "id": "api-reference.span.0350",
                                "value": "number · decimal"
                              }
                            ]
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
                            "id": "api-reference.p.0351",
                            "value": "Send amounts in "
                          },
                          {
                            "type": "element",
                            "tag": "b",
                            "props": {},
                            "children": [
                              {
                                "type": "text",
                                "id": "api-reference.b.0352",
                                "value": "decimal format"
                              }
                            ]
                          },
                          {
                            "type": "text",
                            "id": "api-reference.p.0353",
                            "value": " as JSON numbers: "
                          },
                          {
                            "type": "element",
                            "tag": "code",
                            "props": {},
                            "children": [
                              {
                                "type": "text",
                                "id": "api-reference.code.0354",
                                "value": "20.00"
                              }
                            ]
                          },
                          {
                            "type": "text",
                            "id": "api-reference.p.0355",
                            "value": " is twenty euros, not 2,000 cents. Two decimal places for most currencies."
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
                    "tag": "div",
                    "props": {
                      "className": "attr"
                    },
                    "children": [
                      {
                        "type": "element",
                        "tag": "div",
                        "props": {
                          "className": "attr-head"
                        },
                        "children": [
                          {
                            "type": "element",
                            "tag": "span",
                            "props": {
                              "className": "an"
                            },
                            "children": [
                              {
                                "type": "text",
                                "id": "api-reference.span.0356",
                                "value": "purchase.currency"
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "span",
                            "props": {
                              "className": "at"
                            },
                            "children": [
                              {
                                "type": "text",
                                "id": "api-reference.span.0357",
                                "value": "string · ISO 4217"
                              }
                            ]
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
                            "id": "api-reference.p.0358",
                            "value": "Upper-case ISO code. Every currency must be "
                          },
                          {
                            "type": "element",
                            "tag": "b",
                            "props": {},
                            "children": [
                              {
                                "type": "text",
                                "id": "api-reference.b.0359",
                                "value": "enabled for your account by your account manager"
                              }
                            ]
                          },
                          {
                            "type": "text",
                            "id": "api-reference.p.0360",
                            "value": " before use, an unconfigured currency fails with a charges-setting error."
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
                    "tag": "div",
                    "props": {
                      "className": "attr"
                    },
                    "children": [
                      {
                        "type": "element",
                        "tag": "div",
                        "props": {
                          "className": "attr-head"
                        },
                        "children": [
                          {
                            "type": "element",
                            "tag": "span",
                            "props": {
                              "className": "an"
                            },
                            "children": [
                              {
                                "type": "text",
                                "id": "api-reference.span.0361",
                                "value": "Method-currency binding"
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "span",
                            "props": {
                              "className": "at"
                            },
                            "children": [
                              {
                                "type": "text",
                                "id": "api-reference.span.0362",
                                "value": "rule"
                              }
                            ]
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
                            "id": "api-reference.p.0363",
                            "value": "Local rails are single-currency: Interac = "
                          },
                          {
                            "type": "element",
                            "tag": "code",
                            "props": {},
                            "children": [
                              {
                                "type": "text",
                                "id": "api-reference.code.0364",
                                "value": "CAD"
                              }
                            ]
                          },
                          {
                            "type": "text",
                            "id": "api-reference.p.0365",
                            "value": ", PIX = "
                          },
                          {
                            "type": "element",
                            "tag": "code",
                            "props": {},
                            "children": [
                              {
                                "type": "text",
                                "id": "api-reference.code.0366",
                                "value": "BRL"
                              }
                            ]
                          },
                          {
                            "type": "text",
                            "id": "api-reference.p.0367",
                            "value": ", UPI = "
                          },
                          {
                            "type": "element",
                            "tag": "code",
                            "props": {},
                            "children": [
                              {
                                "type": "text",
                                "id": "api-reference.code.0368",
                                "value": "INR"
                              }
                            ]
                          },
                          {
                            "type": "text",
                            "id": "api-reference.p.0369",
                            "value": ", SPEI = "
                          },
                          {
                            "type": "element",
                            "tag": "code",
                            "props": {},
                            "children": [
                              {
                                "type": "text",
                                "id": "api-reference.code.0370",
                                "value": "MXN"
                              }
                            ]
                          },
                          {
                            "type": "text",
                            "id": "api-reference.p.0371",
                            "value": ". The "
                          },
                          {
                            "type": "element",
                            "tag": "DocLink",
                            "props": {
                              "className": "inline",
                              "href": "/payment-methods#matrix"
                            },
                            "children": [
                              {
                                "type": "text",
                                "id": "api-reference.doclink.0372",
                                "value": "capability matrix"
                              }
                            ]
                          },
                          {
                            "type": "text",
                            "id": "api-reference.p.0373",
                            "value": " lists each method's currencies."
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
                                    "id": "api-reference.span.0374",
                                    "value": "Decimal amounts"
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
                                    "id": "api-reference.button.0375",
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
                                    "id": "api-reference.span.0376",
                                    "value": "# €20.00"
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
                                    "id": "api-reference.span.0377",
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
                                    "id": "api-reference.span.0378",
                                    "value": "\"Deposit\""
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
                                    "id": "api-reference.span.0379",
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
                                    "id": "api-reference.span.0380",
                                    "value": "20.00"
                                  }
                                ]
                              },
                              {
                                "type": "text",
                                "value": " }\n\n"
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
                                    "id": "api-reference.span.0381",
                                    "value": "# CAD 50 (Interac requires CAD)"
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
                                    "id": "api-reference.span.0382",
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
                                    "id": "api-reference.span.0383",
                                    "value": "\"CAD\""
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
                                    "id": "api-reference.span.0384",
                                    "value": "\"products\""
                                  }
                                ]
                              },
                              {
                                "type": "text",
                                "value": ": [{ "
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
                                    "id": "api-reference.span.0385",
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
                                    "id": "api-reference.span.0386",
                                    "value": "\"Deposit\""
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
                                    "id": "api-reference.span.0387",
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
                                    "id": "api-reference.span.0388",
                                    "value": "50.00"
                                  }
                                ]
                              },
                              {
                                "type": "text",
                                "value": " }] }"
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
              "id": "errors"
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
                        "id": "api-reference.h2.0389",
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
                    "tag": "p",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "api-reference.p.0390",
                        "value": "Errors return a machine-readable body with "
                      },
                      {
                        "type": "element",
                        "tag": "code",
                        "props": {},
                        "children": [
                          {
                            "type": "text",
                            "id": "api-reference.code.0391",
                            "value": "message"
                          }
                        ]
                      },
                      {
                        "type": "text",
                        "id": "api-reference.p.0392",
                        "value": " and "
                      },
                      {
                        "type": "element",
                        "tag": "code",
                        "props": {},
                        "children": [
                          {
                            "type": "text",
                            "id": "api-reference.code.0393",
                            "value": "code"
                          }
                        ]
                      },
                      {
                        "type": "text",
                        "id": "api-reference.p.0394",
                        "value": ". Show "
                      },
                      {
                        "type": "element",
                        "tag": "code",
                        "props": {},
                        "children": [
                          {
                            "type": "text",
                            "id": "api-reference.code.0395",
                            "value": "message"
                          }
                        ]
                      },
                      {
                        "type": "text",
                        "id": "api-reference.p.0396",
                        "value": " to your ops team, never raw to customers."
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
                                        "id": "api-reference.th.0397",
                                        "value": "Example error message"
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
                                        "id": "api-reference.th.0398",
                                        "value": "Usual cause"
                                      }
                                    ]
                                  }
                                ]
                              },
                              {
                                "type": "element",
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
                                        "id": "api-reference.td.0399",
                                        "value": "some Mandatory Parameter are missing"
                                      }
                                    ]
                                  },
                                  {
                                    "type": "element",
                                    "tag": "td",
                                    "props": {},
                                    "children": [
                                      {
                                        "type": "text",
                                        "id": "api-reference.td.0400",
                                        "value": "Missing required body field"
                                      }
                                    ]
                                  }
                                ]
                              },
                              {
                                "type": "element",
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
                                        "id": "api-reference.td.0401",
                                        "value": "Please submit Valid Alpha2 Country Code Ex:(AF,IN)"
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
                                            "id": "api-reference.code.0402",
                                            "value": "client.country"
                                          }
                                        ]
                                      },
                                      {
                                        "type": "text",
                                        "id": "api-reference.td.0403",
                                        "value": " not ISO-3166 Alpha-2"
                                      }
                                    ]
                                  }
                                ]
                              },
                              {
                                "type": "element",
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
                                        "id": "api-reference.td.0404",
                                        "value": "Invalid format of Date_of_Birth [yyyy-mm-dd]"
                                      }
                                    ]
                                  },
                                  {
                                    "type": "element",
                                    "tag": "td",
                                    "props": {},
                                    "children": [
                                      {
                                        "type": "text",
                                        "id": "api-reference.td.0405",
                                        "value": "Malformed "
                                      },
                                      {
                                        "type": "element",
                                        "tag": "code",
                                        "props": {},
                                        "children": [
                                          {
                                            "type": "text",
                                            "id": "api-reference.code.0406",
                                            "value": "date_of_birth"
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
                                        "id": "api-reference.td.0407",
                                        "value": "Client Ip could not be matched with Merchant Ip"
                                      }
                                    ]
                                  },
                                  {
                                    "type": "element",
                                    "tag": "td",
                                    "props": {},
                                    "children": [
                                      {
                                        "type": "text",
                                        "id": "api-reference.td.0408",
                                        "value": "S2S "
                                      },
                                      {
                                        "type": "element",
                                        "tag": "code",
                                        "props": {},
                                        "children": [
                                          {
                                            "type": "text",
                                            "id": "api-reference.code.0409",
                                            "value": "remote_ip"
                                          }
                                        ]
                                      },
                                      {
                                        "type": "text",
                                        "id": "api-reference.td.0410",
                                        "value": " validation failed"
                                      }
                                    ]
                                  }
                                ]
                              },
                              {
                                "type": "element",
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
                                        "id": "api-reference.td.0411",
                                        "value": "Invalid Card Information"
                                      }
                                    ]
                                  },
                                  {
                                    "type": "element",
                                    "tag": "td",
                                    "props": {},
                                    "children": [
                                      {
                                        "type": "text",
                                        "id": "api-reference.td.0412",
                                        "value": "Bad PAN / expiry / CVC in S2S call"
                                      }
                                    ]
                                  }
                                ]
                              },
                              {
                                "type": "element",
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
                                        "id": "api-reference.td.0413",
                                        "value": "You are not Allowed for Live Transaction"
                                      }
                                    ]
                                  },
                                  {
                                    "type": "element",
                                    "tag": "td",
                                    "props": {},
                                    "children": [
                                      {
                                        "type": "text",
                                        "id": "api-reference.td.0414",
                                        "value": "Account not yet approved for live mode"
                                      }
                                    ]
                                  }
                                ]
                              },
                              {
                                "type": "element",
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
                                        "id": "api-reference.td.0415",
                                        "value": "Merchant Limit is not set / Minimum amount is not set"
                                      }
                                    ]
                                  },
                                  {
                                    "type": "element",
                                    "tag": "td",
                                    "props": {},
                                    "children": [
                                      {
                                        "type": "text",
                                        "id": "api-reference.td.0416",
                                        "value": "Account configuration incomplete"
                                      }
                                    ]
                                  }
                                ]
                              },
                              {
                                "type": "element",
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
                                        "id": "api-reference.td.0417",
                                        "value": "Brand not found !"
                                      }
                                    ]
                                  },
                                  {
                                    "type": "element",
                                    "tag": "td",
                                    "props": {},
                                    "children": [
                                      {
                                        "type": "text",
                                        "id": "api-reference.td.0418",
                                        "value": "Wrong or missing "
                                      },
                                      {
                                        "type": "element",
                                        "tag": "code",
                                        "props": {},
                                        "children": [
                                          {
                                            "type": "text",
                                            "id": "api-reference.code.0419",
                                            "value": "brand_id"
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
                    "props": {
                      "className": "sec-note"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "api-reference.p.0420",
                        "value": "Trigger specific declines with the "
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
                            "id": "api-reference.doclink.0421",
                            "value": "decline test cards"
                          }
                        ]
                      },
                      {
                        "type": "text",
                        "id": "api-reference.p.0422",
                        "value": ". Full catalogue with fixes: "
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
                            "id": "api-reference.doclink.0423",
                            "value": "Statuses & errors"
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
                                    "id": "api-reference.span.0424",
                                    "value": "Error format"
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
                                    "id": "api-reference.button.0425",
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
                                    "id": "api-reference.span.0426",
                                    "value": "\"message\""
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
                                    "id": "api-reference.span.0427",
                                    "value": "\"descriptive error message\""
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
                                    "id": "api-reference.span.0428",
                                    "value": "\"code\""
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
                                    "id": "api-reference.span.0429",
                                    "value": "\"error_code\""
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
                            "id": "api-reference.small.0430",
                            "value": "Guides"
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
                            "id": "api-reference.b.0431",
                            "value": "← Payment methods"
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
                            "id": "api-reference.small.0432",
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
                            "id": "api-reference.b.0433",
                            "value": "Cards (S2S) →"
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
